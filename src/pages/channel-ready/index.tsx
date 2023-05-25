import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"
import { motion, AnimatePresence } from "framer-motion"
import ArrowDown from "../../components/icons/arrow-down"
import JobHeader from "../../components/job-header"
import classNames from "classnames"
import * as styles from "./channel-ready.module.scss"
import * as contentGridStyles from "../../styles/content-grid.module.scss"

import moduleData from "./modules.json"

const ChannelReady = (props: PageProps): JSX.Element => {

    const [visibleModules, setVisibleModules] = React.useState<Array<string>>([]);

    const handleToggleModuleVisibility = (clickedModuleName: string) => {
        if (visibleModules.includes(clickedModuleName)) {
            setVisibleModules([]);
            // setVisibleModules(visibleModules.filter(moduleName => moduleName !== clickedModuleName));
        } else {
            setVisibleModules([clickedModuleName]);
            // setVisibleModules([clickedModuleName, ...visibleModules]);
        }
    }

    return (
        <main>
            <JobHeader company="Channel Ready, Inc." title="Senior Developer & Lead Architect" dates="Oct 2011 - May 2023" />
            <div className={classNames(contentGridStyles.container, contentGridStyles.reverseRowsWhenStacked)}>
                <div>
                    <p>
                        In my role as application developer at Channel Ready, I designed and maintained a modular
                        framework for spinning up and administering customer web sites and membership portals.
                        The primary product at Channel Ready was a custom content management system to serve all of
                        Channel Ready's clients. I was brought in to redesign and build a new system from the
                        ground up.
                    </p>
                    <p>
                        We served different types of clients with different needs, so I took a modular approach that
                        would allow us to enable or disable features for each client, delivering a customized administration
                        environment while maintaining a single codebase. There were standard modules used
                        by all clients such as content management, media, and reports; and there were specialty modules
                        like the catalog module (for product management / ecommerce) or the course development module
                        (for online learning).
                    </p>
                    <p>
                        The administrative interface was an ASP.NET / MVC project and each module
                        was packaged into it's own .dll. The client web sites were also ASP.NET / MVC projects
                        and would include modules as necessary. Each client web site was customized from a
                        template project, and the modular design allowed us to reuse code for much of the
                        functionality while allowing us to deliver unique web sites for each client.
                    </p>
                    <h2>A brief overview of selected modules</h2>
                    <dl className={styles.moduleList}>
                        {moduleData.map(module => {
                            const isVisible = visibleModules.includes(module.name)
                            return (
                                <div key={module.name}>
                                    <dt><p className={styles.moduleName}>{module.name}</p></dt>
                                    <dd>
                                        <p className={styles.moduleSummary}>
                                            <span>{module.summary}</span>
                                            <motion.button
                                                onClick={() => handleToggleModuleVisibility(module.name)}
                                                animate={{
                                                    rotate: (isVisible ? 450 : 0),
                                                    opacity: (isVisible ? 1 : .35)
                                                }}
                                                transition={{ duration: .25 }}
                                                className={styles.moduleVisibilityToggle}
                                            >
                                                <ArrowDown />
                                            </motion.button>
                                        </p>
                                        <AnimatePresence>
                                            {isVisible &&
                                                <motion.p
                                                    className={styles.moduleDescription}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: .25 }}
                                                >
                                                    {module.description}
                                                </motion.p>
                                            }
                                        </AnimatePresence>

                                    </dd>
                                </div>
                            )
                        })}
                    </dl>
                </div>
                <div>
                    <h2>Primary Technologies</h2>
                    <ul>
                        <li>ASP.NET / .NET</li>
                        <li>MVC</li>
                        <li>C#</li>
                        <li>MS Sql Server</li>
                        <li>JavaScript (Vanilla + jQuery)</li>
                        <li>HTML / CSS</li>
                    </ul>
                    <h2>Highlights</h2>
                    <ul>
                        <li>Created a learning management module for internal training at retail stores, allowing for course material management, user evaluation, and progress tracking.</li>
                        <li>Implemented a media module for managing media files and streaming audio/video from customer web sites.</li>
                        <li>Designed an event management/registration module for managing events, calendar display, automated registration, and registrant management.</li>
                        <li>Developed a site search feature with near-real-time updates to dynamic content, including faceted search and full-text capabilities.</li>
                        <li>Created an extensible data framework, allowing for administration of custom data on a per customer basis without the need for UI changes.</li>
                        <li>Designed and built a publication system for previewing dynamic user pages before publishing content to a live web site, letting customers publish their own content.</li>
                        <li>Created a content management module, including a widget system, extending an off-the-shelf HTML editor to allow customers to insert dynamic content into user pages.</li>
                    </ul>
                </div>
            </div >
        </main >
    )
}

export default ChannelReady

export const Head: HeadFC = () => (
    <>
        <Meta title="Work History: Channel Ready, Inc. - Chris Haskins" description="My role, responsibilities and achievements at Channel Ready, Inc." />
    </>
)
