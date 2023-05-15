import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../components/meta"
import LinkCard from "../components/link-card/link-card"

import * as styles from "./index.module.scss"

const IndexPage = (props: PageProps): JSX.Element => {
    return (
        <main className={styles.container}>
            <p className={styles.intro}>
                Practical yet creative developer with 25 years of experience focusing on web technology and data architecture, proficient in both front-end and back-end technologies.
            </p>
            <div className={styles.pageLinks}>
                <div>
                    <LinkCard to="/about-me" title="About Me">
                        <p>Find about more about my career path and skill set.</p>
                    </LinkCard>
                </div>
                <div>
                    <LinkCard to="/work-history" title="Work History">
                        <p>Learn about my recent work history and projects I've worked on.</p>
                    </LinkCard>
                </div>
                <div>
                    <LinkCard to="/personal-pursuits" title="Personal Pursuits">
                        <p>Side projects, volunteer work outside my professional capacity.</p>
                    </LinkCard>
                </div>
            </div>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <Meta title="Chris Haskins" description="Web application developer." />
    </>
)
