import type { Metadata } from "next";
import "./globals.css";
import { AntdProvider } from "./providers";


export const metadata: Metadata = {
  title: "华光管理系统",
  description: "基于Next.js和Ant Design Pro Components的管理系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`antialiased`}
      >
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
