import "./globals.css";

export const metadata = {
  title: "Fuelr — Every Trade Fuels Your Token",
  description:
    "Programmable creator fees for token launches."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
