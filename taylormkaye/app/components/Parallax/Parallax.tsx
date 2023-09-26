'use client';

import { ReactNode, useEffect, useState } from 'react';

type Props = {
    children: ReactNode;
    speedCoef?: number;
    className?: string;
};

const Parallax = ({ children, speedCoef = -0.5, className }: Props) => {
    const accelerator = speedCoef;
    const [imgOffset, setOffset] = useState(0);

    const handleScroll = () => setOffset(window.scrollY);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const attrs = {
        style: { transform: `translateY(${imgOffset * accelerator}px)` },
    };

    return (
        <div className={className} {...attrs}>
            {children}
        </div>
    );
};

export default Parallax;
