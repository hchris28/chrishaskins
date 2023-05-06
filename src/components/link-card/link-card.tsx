import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./link-card.module.scss"

interface LinkCardProps {
    to: string;
    title: string;
    children?: React.ReactNode;
}

const LinkCard = ({ to, title, children }: LinkCardProps): JSX.Element => {
    return (
        <Link to={to} className={styles.container}>
            <p className={styles.title}>{title}</p>
            <div className={styles.text}>
                {children}
            </div>
        </Link>
    )
}

export default LinkCard