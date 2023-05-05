import * as React from "react"
import NavLink from "./nav-link";
import PdfIcon from "../icons/pdf";
import resumePdf from "../../downloads/chris-haskins-resume.pdf";
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

const navLinkIsActive = (currentPath: string, navLinkData: NavLinkData): boolean => {
    return navLinkData.to === currentPath ||
        (navLinkData?.groupWith || []).includes(currentPath);
}

const Header = ({ siteTitle, path }: HeaderProps): JSX.Element => {

    const navLinks: Array<NavLinkData> = [
        { to: "/", label: "Home" },
        { to: "/about-me", label: "About Me" },
        { to: "/work-history", label: "Work History", groupWith: ["/channel-ready", "/anthonys"] },
        { to: "/personal-pursuits", label: "Personal Pursuits" },
    ]

    return (
        <header className={styles.container}>
            <div className={styles.masthead}>
                <p className={styles.siteTitle}>{siteTitle}</p>
                <div className={styles.contact}>
                    <p><a href="mailto:chris@xeelee.org">chris@xeelee.org</a></p>
                    <p><a href="tel:206-552-4256">206-552-4256</a></p>
                </div>
            </div>
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
                <a href={resumePdf} className={styles.resumeLink} download>
                    <PdfIcon /> Download Resume
                </a>
            </nav>
        </header>
    )
}

export default Header