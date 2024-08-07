import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="">
                    <div className="bg-white w-[100px] h-screen z-30 fixed "></div>
                    <div className="bg-white w-[100px] h-full "></div>
                    <div className=" w-[calc(100%-100px)"> {children}</div>
                </div>
            </body>
        </html>
    );
}
