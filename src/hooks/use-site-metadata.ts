import { graphql, useStaticQuery } from "gatsby"

interface SiteMetaData {
    title: string;
    description: string;
    siteUrl: string;
    author: string;
    image: string;
}

export const useSiteMetadata = () : SiteMetaData => {
    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    author
                    image
                }
            }
        }
  `)

    return data.site.siteMetadata
}