import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../components/meta"
import LinkCard from "../components/link-card/link-card"

import * as styles from "./index.module.scss"

const IndexPage = (props: PageProps): JSX.Element => {
    return (
        <main className={styles.container}>
            <p className={styles.intro}>
                25 years of development experience with a focus on web technology and data architecture, proficient
                in both front-end and back-end technologies.
            </p>
            <div className={styles.pageLinks}>
                <div>
                    <LinkCard to="/about-me" title="About Me">
                        Find about more about my career path and skill set.
                    </LinkCard>
                </div>
                <div>
                    <LinkCard to="/work-history" title="Work History">
                        Learn about my recent work history and projects I've worked on.
                    </LinkCard>
                </div>
                <div>
                    <LinkCard to="/personal-pursuits" title="Personal Pursuits">
                        Side projects, volunteer work outside my professional capacity.
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
