import './globals.scss';
import type { Metadata } from 'next';
import { Corben, Roboto_Flex } from '@next/font/google';
import Nav from './sections/Nav';

const corben = Corben({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-corben',
});
const roboto = Roboto_Flex({
    subsets: ['latin'],
    weight: 'variable',
    display: 'swap',
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Taylor Kaye - Developer',
    description:
        'Taylor Kaye is a frontend software developer focused on creating immersive and accessible web experiences.',
    keywords: ['Developer', 'Web', 'React', 'Next.js', 'Frontend', 'Saskatoon'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${corben.variable} ${roboto.variable}`}>
                {children}
            </body>
        </html>
    );
}
