import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Meta } from "../../components/meta"
import Markdown from 'markdown-to-jsx';
import PdfIcon from "../../components/icons/pdf"
import jobPathData from "./job-path.json"
import classNames from "classnames"
import * as contentGridStyles from "../../styles/content-grid.module.scss"
import * as styles from "./about-me.module.scss"
import recommendationPdf from "../../downloads/chris-haskins-recommendation.pdf";

const AboutMe = (props: PageProps): JSX.Element => {
    return (
        <main>
            <h1>
                <StaticImage
                    objectFit="contain"
                    src="../../images/dork.png"
                    alt="Headshot"
                    className={styles.headshot}
                />
                <span>About Me</span>
            </h1>
            <div className={classNames(contentGridStyles.container, contentGridStyles.reverseRowsWhenStacked)}>
                <div>
                    <p>
                        I consider myself fortunate to have consistently held positions that have given me the freedom to make design decisions and implement solutions over the course of my career. I started identifying problems and crafting software solutions starting at my very first job, even when it wasn't what I was hired to do.
                    </p>

                    <p>In my capacity as a web developer, I've had the opportunity to:</p>

                    <ul>
                        <li>Participate in all phases of the application lifecycle from initial design to implementation, as well as on-going maintenance, bug fixes and progressive enhancement.</li>
                        <li>Work on a variety of applications, including manufacturing and fulfillment, customer service, inventory management, bookkeeping, payroll and timekeeping, employee scheduling, as well as many data-driven marketing web sites.</li>
                        <li>Gain exposure to all levels of the technology stack by architecting and setting up databases, configuring web servers, creating API's for data access, writing back-end processes to manage data and workflow, and designing and implementing user interfaces.</li>
                        <li>Collaborate with non-technical users and more technically inclined product owners to understand business needs and how technology can address them.</li>
                        <li>Document applications and procedures for both technical and non-technial users.</li>
                    </ul>

                    <p>
                        The experience I've gained as a result of my particular job history has helped me to become a practical yet creative developer, with a strong sense of personal accountability. I've been allowed to operate with a level of autonomy that has fostered self reliance and self motivation. Read on to learn a little bit more about how I got where I am today.
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
                    <ul className={styles.skillsList}>
                        <li><b>Languages</b> C#, PHP, Javascript, HTML/CSS, SQL, GraphQL</li>
                        <li><b>Frameworks</b> .NET, MVC, Entity Framework, Autofac (IoC), React, Gatsby, MSTest</li>
                        <li><b>Software</b> Visual Studio/VSCode, Photoshop</li>
                        <li><b>Databases</b> MSSQL, MySQL, Firebase/Firestore</li>
                        <li><b>Versioning Tools/CI</b> Subversion/TortoiseSVN, GitHub, Netlify, Vercel</li>
                    </ul>
                    <br />
                    <h2>Education</h2>
                    <p>
                        <strong>ITT Technical Institute</strong>
                        <br />
                        Bachelor of Applied Science, Electronics Engineering
                        <br />
                        Graduated 1996
                    </p>
                    <br />
                    <hr />
                    <br />
                    <h2>References</h2>
                    <p>
                        <a href={recommendationPdf} className={styles.recommendationLink} download>
                            <PdfIcon /> Letter from Vicky Chenn, Technical Director, ChannelReady, Inc.
                        </a>
                    </p>
                    <p>Additional references available on request.</p>
                    <br />
                    <hr />
                    <br />
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
