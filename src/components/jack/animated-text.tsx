"use client";

import { Fragment, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { CSSProperties } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

type CharSpec = { char: string; range: [number, number] };
type WordSpec = { word: string; chars: CharSpec[] };

/**
 * Splits `text` into words, tagging every character with the slice of scroll
 * progress ([0..1] across the whole string) during which it fades in.
 */
function splitIntoWords(text: string): WordSpec[] {
  const total = text.length;
  const words: WordSpec[] = [];
  let cursor = 0;

  for (const word of text.split(" ")) {
    const chars: CharSpec[] = [];
    for (let i = 0; i < word.length; i += 1) {
      chars.push({
        char: word[i],
        range: [(cursor + i) / total, (cursor + i + 1) / total],
      });
    }
    words.push({ word, chars });
    // Advance past the word plus the space that follows it.
    cursor += word.length + 1;
  }

  return words;
}


/**
 * Reveals `text` character by character as the paragraph scrolls through the
 * viewport. Each character sits on top of an invisible copy of itself, so the
 * animated layer can be absolutely positioned without disturbing line breaking.
 * Characters are grouped per word so lines never break mid-word.
 */
export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = useMemo(() => splitIntoWords(text), [text]);

  return (
    <p ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map(({ word, chars }, wordIndex) => (
          <Fragment key={`${word}-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {chars.map(({ char, range }, charIndex) => (
                <Char key={charIndex} progress={scrollYProgress} range={range}>
                  {char}
                </Char>
              ))}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </p>
  );
}

function Char({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{children}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
