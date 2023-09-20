'use client';

import { useEffect, useRef } from 'react';
import './parallax.scss';
import Line from '../Line';

type Props = {
    startingYPos: number;
};

const Shutter = ({ startingYPos }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const parallax = () => {
        let yPos = 0;
        if (window !== undefined) {
            yPos = 0 - window.scrollY / 30;
        }
        if (ref.current) {
            ref.current.style.top = startingYPos + yPos + '%';
        }
    };

    useEffect(
        () =>
            window.addEventListener('scroll', function () {
                parallax();
            }),
        []
    );

    return (
        <div className="parallax" ref={ref}>
            <Line />
        </div>
    );
};

export default Shutter;
