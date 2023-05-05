import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"

const Contact = (props: PageProps): JSX.Element => {
    return (
        <main>
            <h1>
                Contact Me
            </h1>
            <p>
                You can can reach me by email at <a href="mailto:chris@xeelee.org">chris@xeelee.org</a>.
            </p>
            <p>
                References and access to private GitHub repositories available on request.
            </p>
        </main>
    )
}

export default Contact

export const Head: HeadFC = () => (
    <>
        <Meta title="Contact - Chris Haskins" description="Contact me." />
    </>
)
