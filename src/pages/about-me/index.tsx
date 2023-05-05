import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"
import Markdown from 'markdown-to-jsx';

import jobPathData from "./job-path.json"

import * as contentGridStyles from "../../styles/content-grid.module.scss"

const AboutMe = (props: PageProps): JSX.Element => {
    return (
        <main>
            <div className={contentGridStyles.container}>
                <div>
                    <h1>
                        About Me
                    </h1>
                    <p>
                        Over the course of my career, I consider myself fortunate to have consistently held positions that have
                        given me autonomy in making design decisions and implementing solutions. This comes with the territory of
                        being an independent developer. This isn't to say that I have been working in a vacuum, of course I have
                        been help accountable for my work, and I think my track record for copmleting mission critical applications
                        speaks for itself.
                    </p>
                    <h2>How I got here</h2>
                    {jobPathData.map(job => {
                        return (
                            <React.Fragment key={job.title}>
                                <h3>{job.title}</h3>
                                {job.body.map((text, idx) => {
                                    return (
                                        <Markdown
                                            key={idx}
                                            options={{ forceBlock: true }}
                                        >
                                            {text}
                                        </Markdown>
                                    )
                                })}
                            </React.Fragment>
                        )
                    })}
                </div>
                <div>
                    <h2>Technical Skills & Proficiencies</h2>
                    <ul>
                        <li><b>Languages</b> C#, PHP, Javascript, HTML/CSS, SQL</li>
                        <li><b>Frameworks</b> .NET, MVC, Entity Framework, Autofac (IoC), React</li>
                        <li><b>Skills/IDE</b> Visual Studio/VSCode, Subversion/TortoiseSVN, GitHub, MSSQL, MySQL, Firebase/Firestore</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default AboutMe

export const Head: HeadFC = () => (
    <>
        <Meta title="About Me - Chris Haskins" description="Professional history and epxerience." />
    </>
)
