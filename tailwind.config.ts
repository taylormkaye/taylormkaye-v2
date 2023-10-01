import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {},
            cursor: {
                arrow: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 25.43 25.43' style='enable-background:new 0 0 25.43 25.43;' xml:space='preserve' height='30' width='30'%3E%3Cg%3E%3Cpath d='M22.97,11.99L10.2,1.86V0l15.23,12.17v1.08L10.2,25.43v-1.86l12.77-10.13H0v-1.44H22.97z'/%3E%3C/g%3E%3C/svg%3E%0A"), pointer;`,
            },
            colors: {
                'bg-primary': 'var(--color-background-primary);',
                'text-inactive': 'var(--color-text-inactive);',
                'text-secondary': 'var(--color-text-secondary);',
                'text-primary': 'var(--color-text-primary);',
            },
            fontFamily: {
                corben: 'var(--font-corben)',
            },
            keyframes: {
                'bottom-bounce': {
                    '0%': {
                        transform: 'translateY(100%)',
                        opacity: '0',
                    },
                    '1%': { opacity: '1' },
                    '40%': {
                        transform: 'translateY(100%)',
                    },
                    '70%': {
                        transform: 'translateY(-20%)',
                    },
                    '100%': {
                        transform: 'translateY(0%)',
                        opacity: '1',
                    },
                },
            },
            animation: {
                bounce: 'bottom-bounce 1100ms ease-out var(--delay) 1 normal both',
            },
        },
    },
    plugins: [],
};
export default config;
