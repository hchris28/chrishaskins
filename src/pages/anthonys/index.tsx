import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"
import Job from "../../components/job/job"

import * as contentGridStyles from "../../styles/content-grid.module.scss"

const Anthonys = (props: PageProps): JSX.Element => {
    return (
        <main>
            <div className={contentGridStyles.container}>
                <div>
                    <Job company="Anthony&apos;s Restaurants" title="Web Application Developer" dates="2004 - 2012">
                        <p>
                            While working at Anthony's I designed, wrote, and managed internal web applications for
                            back-office information management. I worked closely with users to create applications
                            to automate daily tasks and increase efficiency.
                        </p>
                        <p>
                            At the time I was brought in, Anthony's had nearly 20 locations, and daily sales data was still
                            being carried from the restaurants to the corporate office via Excel files and floppy disks! My
                            first task was to design a system that allowed the bookkeepers to complete daily tasks and transmit
                            the data to the corporate office. To achieve this I wrote an ASP.NET application with an MS-SQL Server
                            back-end, allowing the users at the stores to complete their work efficiently and make the data immediately
                            available to corporate users. It also allowed us to integrate with the point-of-sale system, automating many
                            of the tasks previoulsy done by hand. Eventually, the application was expanded to allow corporate users
                            to run reports, conduct audits, and complete other day-to-day tasks.
                        </p>
                        <p>
                            I was also tasked with designing an employee scheduling application. Again I used ASP.NET and MS-SQL
                            Server to create a web application the stores could use to schedule employee shifts visually. This
                            was much more efficient than the methods they had been using, and enabled them to identfy conflicts easily.
                            It also meant they could post schedules and communicate changes to employees much faster.
                        </p>
                        <p>
                            Anthony's operates an in-house wholesale seafood division which sells to their stores and to external customers.
                            I created and implemented an inventory application for tracking incoming shipments, outgoing purchases, and
                            squaring them with bi-weekly physical inventories. This system also included an integrated purchasing module
                            that enabled the in-house customers to place orders quickly and easily. Stores would simply log in, place the
                            order from existing inventory, and the wholesale division was immediately notified.
                        </p>
                        <p>
                            There was a need to share documents across the organization, and the likes of Dropbox and Google Drive were yet
                            to be made avilable. I wrote a document sharing application that would let users upload documents and share them
                            with other users, and limit access by role. Multiple document formats were allowed and the document contents were
                            fully indexed and searchable.
                        </p>
                        <p>
                            The applications mentioned so far have all been ASP.NET web applications. The one outlier was a recipe archive / costing
                            application which was a Windows Desktop application. This application would import purchase orders from vendors, tracking
                            unit costs for ingredients. Once recipes were entered into the application, we could more accuraetly track the costs
                            associated with each recipe.
                        </p>
                        <p>
                            There were many other smaller applications and various projects during my time here. There was a menu designer that enabled
                            store managers to quickly change and print daily menus. Point-of-sale integrations for gift card and loyalty card
                            processing, as well as extensions for credit card processing. This position was full of variety and plenty of challenges.
                        </p>
                    </Job>
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
                        <li>Developed a distributed application for bookkeepers to perform end of day duties, HR, and payroll, streamlining communication between remote stores and the corporate office.</li>
                        <li>Wrote an employee scheduling application, with a visual schedule editor. </li>
                        <li>Created a document management system for storage, search, and retrieval of internal documents, including full-text searches.</li>
                        <li>Created a recipe costing application, allowing for recipe creation and the tracking of constituent ingredient purchases for accurate recipe costs over time.</li>
                        <li>Created an inventory management system used at the wholesale division, including an integrated purchasing module for restaurants to place orders.</li>
                        <li>Integrated with a 3rd party point-of-sale system, pulling daily sales data into a data warehouse for reporting and bookkeeping.</li>
                        <li>Interfaced with payment gateways for credit card processing.</li>
                        <li>Created a loyalty card system to support gift card sales and purchases at the restaurants.</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Anthonys

export const Head: HeadFC = () => (
    <>
        <Meta title="Work History: Antyhony's Restaurants - Chris Haskins" description="My role, responsibilities and achievements at Antyhony's Restaurants." />
    </>
)