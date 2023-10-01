'use client';

import { MenuItems } from './MenuItems';
import './side-nav.scss';
import { SocialItems } from './SocialItems';

type Props = {
    isNavExpanded: Boolean;
    onClose: () => void;
};

const SideNav = ({ isNavExpanded, onClose }: Props) => {
    return (
        <div className="side-nav">
            <a onClick={() => window.scrollTo(0, 0)}>
                <img
                    src="taylor-icon.jpg"
                    className="side-nav__pixel-icon"
                    alt="icon for taylormkaye.com"
                />
            </a>
            <div
                className={
                    isNavExpanded
                        ? 'side-nav__nav-drawer active'
                        : 'side-nav__nav-drawer'
                }
            >
                <ul className="side-nav__drawer-list">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className="side-nav__drawer-item cursor-pointer"
                                    onClick={() => {
                                        document
                                            .getElementById(item.id)
                                            ?.scrollIntoView();

                                        onClose();
                                    }}
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <span className="side-nav__socials">
                    {SocialItems.map((item, index) => {
                        return (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="side-nav__social-link"
                                key={index}
                            >
                                <item.icon width="30px" />
                                <span>{item.tooltip}</span>
                            </a>
                        );
                    })}
                </span>
            </div>
        </div>
    );
};

export default SideNav;
