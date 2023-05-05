import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"

const IndexPage = (props: PageProps): JSX.Element => {
    return (
        <main>
            <p>
                25 years of development experience with a focus on web technology and data architecture, and exposure to all phases of project lifecycle.
            </p>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <Meta title="Chris Haskins" description="Web application developer." />
    </>
)
