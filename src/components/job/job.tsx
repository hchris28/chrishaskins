import * as React from "react"

import * as styles from "./job.module.scss"

interface JobProps {
    company: string;
    title: string;
    dates: string;
    children?: React.ReactNode;
}

const Job = ({ company, title, dates, children }: JobProps): JSX.Element => {
    return (
        <>
            <h1>{company}</h1>
            <p className={styles.title}>{title}</p>
            <p className={styles.dates}>{dates}</p>
            {children}
        </>
    )
}

export default Job