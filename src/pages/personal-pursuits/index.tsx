import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./personal-pursuits.module.scss"
import * as contentGridStyles from "../../styles/content-grid.module.scss"

const PeronsalPursuits = (props: PageProps): JSX.Element => {
    return (
        <main>
            <h1>Personal Pursuits</h1>
            <div className={contentGridStyles.container}>
                <div>
                    <p>
                        In my professional work I have spent most of my time working with the .NET platform, C#, and
                        SQL Server. However in my spare time I have gravitated towards different platforms. I have completed
                        several projects using React, PHP, MySql, and Gatsby to name a few.
                    </p>
                    <h2>Gently Hugged</h2>
                    <p>
                        I have been volunteering with Gently Hugged for over 10 years. I created the first version of their web site
                        using PHP. Over the years I have helped to maintain it, doing small content updates and minor improvements. I am
                        currently working on version 2 of the web site using Gatsby + Netlify. I have incorporated Decap CMS to enable
                        the client to easily make content changes without having to go through a developer.
                    </p>
                    <p>
                        <strong>Version 1</strong>
                        <br />
                        <a href="http://gentlyhugged.org" target="_blank">http://gentlyhugged.org</a>
                        <br /><br />
                        <strong>Version 2</strong>
                        <br />
                        <a href="https://gently-hugged.netlify.app" target="_blank">https://gently-hugged.netlify.app</a>
                    </p>
                    <h2>Shop Wedgwood</h2>
                    <p>
                        In collaboration with my neighborhood community council, I created a web site to highlight local businesses in my
                        neighborhood. This project uses Gatsby and local markdown files for the data layer. This site includes Google maps
                        integration and business search.
                    </p>
                    <p>
                        <a href="https://shop.wedgwoodcc.org/" target="_blank">https://shop.wedgwoodcc.org/</a>
                    </p>
                    <h2>Materials Management Prototype</h2>
                    <p>
                        I was approached to build a proof of concept for a materials management project for a large construction company
                        building out solar farms. Inventory data captured in the field using handheld devices was imported into a database.
                        This data was then made available via a web portal for tracking and analysis. I used a MySql database to store the
                        data which was imported via a php script monitoring an upload folder for files. I built a REST API in PHP which
                        powered a front-end created with React.
                    </p>
                    <p>
                        <strong>Demo Application</strong>
                        <br />
                        <a href="http://bnm.xeelee.org" target="_blank">http://bnm.xeelee.org</a> (user: <strong>arthurdent</strong>, password: <strong>dontpanic</strong>)
                        <br /><br />
                        <strong>Source Code</strong>
                        <br />
                        <a href="https://github.com/hchris28/bnm-ui.xeelee.org" target="_blank">Front-end on GitHub</a>
                        <br />
                        <a href="https://github.com/hchris28/bnm-api.xeelee.org" target="_blank">API on Github</a>
                        <br />
                        <a href="https://github.com/hchris28/bnm-importer" target="_blank">Import Script on GitHub</a>
                    </p>
                    <h2>Wedgwood Community Council</h2>
                    <p>
                        I have volunteered with my neighborhood community council since 2016. In my capacity as board member I have served
                        as council treasurer for my entire term. I have also helped to organize several community events, including managing
                        a community picnic.
                    </p>
                </div>
                <div>
                    <p>
                        This site was written in TypeScript/React using Gatsby. It's hosted on Vercel with GitHub integration for CI.
                    </p>
                    <a href="https://github.com/hchris28/chrishaskins" target="_blank" className={styles.gitHubLink}>
                        <StaticImage
                            objectFit="contain"
                            src="../../images/github-mark.svg"
                            alt="Channel Ready Logo"
                        />
                        <span>View this site on GitHub</span>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default PeronsalPursuits

export const Head: HeadFC = () => (
    <>
        <Meta title="Personal Pursuits - Chris Haskins" description="Side projects and pro bono work." />
    </>
)