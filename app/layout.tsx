import '@/app/ui/global.css';
import { plusJakartaSans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
