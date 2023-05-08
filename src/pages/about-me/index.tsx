import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"
import Markdown from 'markdown-to-jsx';
import jobPathData from "./job-path.json"
import classNames from "classnames"
import * as contentGridStyles from "../../styles/content-grid.module.scss"

const AboutMe = (props: PageProps): JSX.Element => {
    return (
        <main>
            <h1>About Me</h1>
            <div className={classNames(contentGridStyles.container, contentGridStyles.reverseRowsWhenStacked)}>
                <div>
                    <p>
                        Over the course of my career, I consider myself fortunate to have consistently held positions that have
                        given me freedom to make design decisions and implement solutions. I started identifying problems and
                        crafting software solutions starting at my very first job, even though it wasn't what I was hired to do.
                        I've worked directly with non-technical users and more technically inclinded product owners, collaborating 
                        on new features and working on bug fixes. I've had the opportunity to work at all levels of the application 
                        stack, and on a variety of applications.
                    </p>
                    <p>
                        The experience I've gained as a result of my particular job history has helped me to become a practical yet 
                        creative developer, with a strong sense of personal accountability. I've been allowed to operate with a 
                        level of autonomy that has fostered self reliance and self motivation. Read on to learn a little bit more
                        about how I got where I am today. 
                    </p>
                    <h2>Work Experience</h2>
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
                    <br /><hr /><br />
                    <p>
                        I'm grateful to have found myself in stable positions that provide enough variety and challenges to
                        keep things interesting and to allow me to learn new skills. I'm looking forward to whatever may
                        come next. Thanks for reading!
                    </p>
                </div>
                <div>
                    <h2>Technical Skills & Proficiencies</h2>
                    <ul>
                        <li><b>Languages</b> C#, PHP, Javascript, HTML/CSS, SQL</li>
                        <li><b>Frameworks</b> .NET, MVC, Entity Framework, Autofac (IoC), React</li>
                        <li><b>Skills/IDE</b> Visual Studio/VSCode, Subversion/TortoiseSVN, GitHub, MSSQL, MySQL, Firebase/Firestore</li>
                    </ul>
                    <hr />
                    <p>
                        References and access to private GitHub repositories available on request.
                    </p>
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
