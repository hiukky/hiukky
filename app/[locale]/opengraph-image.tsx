import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: "meta" });

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#0b0b0c",
        color: "#f4f4f2",
        fontFamily: "sans-serif",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#5e5e66",
        }}
      >
        hiukky
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: 600,
          marginTop: 28,
        }}
      >
        {tMeta("title")}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#9b9ba1",
          marginTop: 28,
          maxWidth: 880,
        }}
      >
        {tMeta("description")}
      </div>
    </div>,
    { ...size },
  );
}
