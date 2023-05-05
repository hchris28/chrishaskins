import * as React from "react"

import NavLink from "./nav-link";

import * as styles from "./header.module.scss"

interface HeaderProps {
    siteTitle: string;
    path: string;
}

interface NavLinkData {
    to: string;
    label: string;
    groupWith?: Array<string>;
}

const navLinkIsActive = (currentPath: string, navLinkData: NavLinkData) : boolean => {
    return navLinkData.to === currentPath || 
        (navLinkData?.groupWith || []).includes(currentPath);
}

const Header = ({ siteTitle, path }: HeaderProps): JSX.Element => {

    const navLinks: Array<NavLinkData> = [
        { to: "/", label: "Home" },
        { to: "/about-me", label: "About Me" },
        { to: "/work-history", label: "Work History", groupWith: ["/channel-ready", "/anthonys"] },
        { to: "/personal-pursuits", label: "Personal Pursuits" },
        { to: "/contact", label: "Contact" },
    ]

    return (
        <header className={styles.container}>
            <p className={styles.masthead}>{siteTitle}</p>
            <nav className={styles.siteLinks}>
                {navLinks.map(navLink =>
                    <NavLink
                        key={navLink.to}
                        to={navLink.to}
                        active={navLinkIsActive(path, navLink)}
                    >
                        {navLink.label}
                    </NavLink>)
                }
            </nav>
        </header>
    )
}

export default Header