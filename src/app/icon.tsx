import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08152b",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
          <path
            d="M12 6C8.68629 6 6 8.68629 6 12V28.6C6 30.5 7.3 32 9.5 33.2L28 43.5V52C28 55.3137 30.6863 58 34 58H38C41.3137 58 44 55.3137 44 52V45.2L15.5 29.3C13.9 28.4 12 27.3 12 25V6Z"
            fill="#52c8e6"
          />
          <path
            d="M52 58C55.3137 58 58 55.3137 58 52V35.4C58 33.5 56.7 32 54.5 30.8L36 20.5V12C36 8.68629 33.3137 6 30 6H26C22.6863 6 20 8.68629 20 12V18.8L48.5 34.7C50.1 35.6 52 36.7 52 39V58Z"
            fill="#8fe0f2"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
