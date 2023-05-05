import * as React from "react"

import * as styles from "./footer.module.scss"

interface FooterProps {
    siteAuthor: string;
    // children: React.ReactNode;
}

const Footer = ({ siteAuthor } : FooterProps) : JSX.Element => {
    return (
        <footer className={styles.container}>
            <p><a href="mailto:chris@xeelee.org">chris@xeelee.org</a></p>
            <p><a href="tel:206-552-4256">206-552-4256</a></p>
        </footer>
    )
}

export default Footer