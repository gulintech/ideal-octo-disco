import { Lexend, Outfit, Work_Sans } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  weight: '500',
  variable: '--font-lexend',
  subsets: ['latin']
});

const outfit = Outfit({
  weight: ['400', '700'],
  variable: '--font-outfit',
  subsets: ['latin']
})

const workSans = Work_Sans({
  weight: ['400'],
  variable: '--font-work-sans',
  subsets: ['latin']
})



export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${lexend.variable} ${outfit.variable} ${workSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
