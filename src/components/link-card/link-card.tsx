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
        <div className={styles.container}>
            <Link to={to}>
                <p className={styles.title}>{title}</p>
                {children}
            </Link>
        </div>
    )
}

export default LinkCard