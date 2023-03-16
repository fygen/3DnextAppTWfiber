import "./globals.css"

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    //data-theme="coffee"
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}