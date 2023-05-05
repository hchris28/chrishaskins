import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    trailingSlash: "never",
    siteMetadata: {
        title: `Chris Haskins`,
        description: `Chris Haskins - Web Application Developer`,
        siteUrl: `https://www.yourdomain.tld`,
        author: `Chris Haskins`,
        image: ``
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass", 
        "gatsby-plugin-image", 
        "gatsby-plugin-sharp", 
        "gatsby-transformer-sharp", 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }
    ]
};

export default config;
