import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Meta } from "../../components/meta"



const PeronsalPursuits = (props: PageProps): JSX.Element => {
    return (
        <main>
            <h1>
                Peronsal Pursuits
            </h1>
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
                them to make content changes more easily without having to go through me.
            </p>
            <p>
                Version 1: 
                <br />
                <a href="http://gentlyhugged.org" target="_blank">http://gentlyhugged.org</a>
                <br /><br />
                Version 2: 
                <br/>
                <a href="https://gently-hugged.netlify.app" target="_blank">https://gently-hugged.netlify.app</a>
            </p>
            <h2>Shop Wedgwood</h2>
            <p>
                In collaboration with my meighborhood community council, I created a web site to highlight local businesses in my 
                neighborhood. This project uses Gatsby and local markdown files for the data layer. This site includes Google maps
                integration and business search. 
            </p>
            <p>
                <a href="https://shop.wedgwoodcc.org/" target="_blank">https://shop.wedgwoodcc.org/</a>
            </p>
            <h2>Burns &amp; McDonnell Prototype</h2>
            <p>
                I was approached to build a proof of concept for a materials management project for Burns & McDonnell. 
                [Coming Soon...] 
            </p>
            <h2>Wedgwood Community Council</h2>
            <p>
                I have volunteered with my neighborhood community council since 2016. In my capacity as board member I have served 
                as council treasurer for my entire term. I have also helped to organize several community events, including managing
                a community picnic. 
                [Coming Soon...]
            </p>
        </main>
    )
}

export default PeronsalPursuits

export const Head: HeadFC = () => (
    <>
        <Meta title="Personal Pursuits - Chris Haskins" description="Side projects and pro bono work." />
    </>
)