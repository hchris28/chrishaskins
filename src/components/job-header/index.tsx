import * as React from "react"

import * as styles from "./job-header.module.scss"

interface JobProps {
    company: string;
    title: string;
    dates: string;
}

const Job = ({ company, title, dates }: JobProps): JSX.Element => {
    return (
        <>
            <h1 className={styles.company}>{company}</h1>
            <p className={styles.title}>{title}</p>
            <p className={styles.dates}>{dates}</p>
        </>
    )
}

export default Job