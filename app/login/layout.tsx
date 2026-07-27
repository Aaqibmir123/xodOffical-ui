import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - XCDGOC PVT LTD",
  description: "Sign in to your account",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}