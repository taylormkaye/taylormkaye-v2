import './globals.scss';
import type { Metadata } from 'next';
import { Corben, Forum, Work_Sans } from '@next/font/google';

const corben = Corben({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-corben',
});
const workSans = Work_Sans({
    subsets: ['latin'],
    weight: 'variable',
    display: 'swap',
    variable: '--font-work-sans',
});
const forum = Forum({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-forum',
});

export const metadata: Metadata = {
    title: 'Taylor Kaye - Developer',
    description:
        'Taylor Kaye is a frontend software/web developer focused on creating immersive and accessible web experiences.',
    keywords: ['Software', 'Developer', 'Web', 'React', 'Next.js', 'Frontend', 'Saskatoon', 'Website'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${corben.variable} ${workSans.variable} ${forum.variable}`}>
                {children}
            </body>
        </html>
    );
}
