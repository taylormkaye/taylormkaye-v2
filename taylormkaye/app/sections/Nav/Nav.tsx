'use client';

import { useState } from 'react';
import SideNav from './SideNav';
import TopBar from './TopBar';

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const onToggle = () => setIsNavExpanded(!isNavExpanded);
    const onClose = () => setIsNavExpanded(false);

    return (
        <nav>
            <TopBar
                isNavExpanded={isNavExpanded}
                onClose={onClose}
                onToggle={onToggle}
            />
            <SideNav isNavExpanded={isNavExpanded} onClose={onClose} />
        </nav>
    );
};

export default Nav;
