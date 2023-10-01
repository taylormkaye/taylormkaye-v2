import React, { useEffect } from 'react';
import './top-bar.scss';
import { displayNavLogo } from './domain';
import IconTimes from '@/app/components/Icons/IconTimes';
import IconBars from '@/app/components/Icons/IconBars';

type Props = {
    isNavExpanded: Boolean;
    onClose: () => void;
    onToggle: () => void;
};

const TopBar = ({ isNavExpanded, onClose, onToggle }: Props) => {
    useEffect(
        () =>
            window.addEventListener('scroll', function () {
                displayNavLogo();
            }),
        []
    );

    return (
        <div className="top-nav">
            <div className="top-nav__header">
                <div className="top-nav__hamburger-menu" onClick={onToggle}>
                    {isNavExpanded ? <IconTimes /> : <IconBars />}
                </div>
                <a
                    href="#"
                    className="top-nav__logo"
                    id="top-nav__logo"
                    onClick={onClose}
                >
                    Taylor Kaye
                </a>
            </div>
        </div>
    );
};

export default TopBar;
