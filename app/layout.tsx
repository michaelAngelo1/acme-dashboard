import '@/app/ui/global.css';
import { plusJakartaSans } from './ui/fonts';

// Root Layout:
// Styles applied here will be applied to every leaves (applied to all pages)
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
