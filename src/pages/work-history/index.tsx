import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { Link } from "gatsby"
import { Meta } from "../../components/meta"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./work-history.module.scss"
import * as contentGridStyles from "../../styles/content-grid.module.scss"

const WorkHistory = (props: PageProps): JSX.Element => {
    return (
        <main>
            <h1>Work History</h1>
            <div className={contentGridStyles.container}>
                <div>
                    <p>
                        I have had the good fortune to have spent the last 20 years of my career at 2 great companies. For most of
                        that time, I have had the role of an independent developer working directly with application owners and users
                        to design, develop, deploy, and maintain applications. Working as an independent developer has given me the
                        chance to flex my creative muscles and hone my problem solving skills. I've had the chance to work on a variety
                        of projects and see these projects though from conception to deployment.
                    </p>
                    <p>
                        You can learn more about my role at each of these companies using the links on this page. To get a broader
                        perspective on my career path and learn what I was doing prior to joining Anthony's, please check out
                        the <Link to="/about-me">About Me</Link> page.
                    </p>
                </div>
                <div>
                    <div className={styles.pageLinks}>
                        <Link to="/channel-ready" className={styles.pageLink}>
                            <StaticImage
                                objectFit="contain"
                                src="../../images/channel-ready-logo.png"
                                alt="Channel Ready Logo"
                                className={styles.channelReadyLogo}
                            />
                            <p className={styles.pageLinkText}>
                                <span className={styles.jobTitle}>Web Application Developer</span><br />
                                <span className={styles.company}>Channel Ready, Inc.</span><br />
                                <span className={styles.datesWorked}>Oct 2011 - Present</span>
                            </p>
                        </Link>
                        <Link to="/anthonys" className={styles.pageLink}>
                            <StaticImage
                                objectFit="contain"
                                src="../../images/anthonys-logo.png"
                                alt="Anthony's Logo"
                                className={styles.anthonysLogo}
                            />
                            <p className={styles.pageLinkText}>
                                <span className={styles.jobTitle}>Web Application Developer</span> <br />
                                <span className={styles.company}>Anthony's Restaurants</span> <br />
                                <span className={styles.datesWorked}>2004 - 2012</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default WorkHistory

export const Head: HeadFC = () => (
    <>
        <Meta title="Recent Work History - Chris Haskins" description="Recent work history." />
    </>
)
