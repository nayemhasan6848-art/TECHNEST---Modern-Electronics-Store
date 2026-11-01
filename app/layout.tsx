import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TECHNEST - Modern Electronics & Workspace Peripherals',
  description: 'A portfolio demonstration electronics store for fictional brand TECHNEST, featuring laptops, acoustic headphones, custom keyboards, and smart essentials.',
  openGraph: {
    title: 'TECHNEST - Modern Electronics & Workspace Peripherals',
    description: 'A portfolio demonstration electronics store for fictional brand TECHNEST, featuring laptops, acoustic headphones, custom keyboards, and smart essentials.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TECHNEST - Modern Electronics & Workspace Peripherals',
    description: 'A portfolio demonstration electronics store for fictional brand TECHNEST, featuring laptops, acoustic headphones, custom keyboards, and smart essentials.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="bg-[#0B132B] text-slate-100 min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
