import React, { useState, useEffect } from "react"
import debounce from "../../utility/debounce";
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import NavLink from "./nav-link";
import PdfIcon from "../icons/pdf";
import Hamburger from 'hamburger-react'
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

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {

        const setOpenBasedOnWindowSize = () => {
            if (window.innerWidth >= 1025) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        }
        const debouncedHandleResize = debounce(setOpenBasedOnWindowSize, 150);
        
        setOpenBasedOnWindowSize();
        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, []);

    const navLinks: Array<NavLinkData> = [
        { to: "/about-me", label: "About Me" },
        { to: "/work-history", label: "Recent Work", groupWith: ["/channel-ready", "/anthonys"] },
        { to: "/personal-pursuits", label: "Personal Pursuits" },
    ]

    return (
        <header className={styles.container}>
            <div className={styles.masthead}>
                <p className={styles.siteTitle}>
                    <Link to="/">{siteTitle}</Link>
                </p>
                <div className={styles.contact}>
                    <p><a href="mailto:chris@xeelee.org">chris@xeelee.org</a></p>
                    <p><a href="tel:206-552-4256">206-552-4256</a></p>
                </div>
            </div>
            <div className={styles.hamburgerContainer}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <AnimatePresence>
                {isOpen &&
                    <motion.nav
                        className={styles.siteLinks}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: .25 }}
                    >
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
                    </motion.nav>
                }
            </AnimatePresence>
        </header>
    )
}

export default Header