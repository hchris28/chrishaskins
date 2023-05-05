const path = require('path')

module.exports.onCreatePage = ({ page, actions }) => {
    const { deletePage, createPage } = actions
    
    return new Promise(resolve => {
        // if the page component is the index page component

        const componentPath = path.normalize(page.componentPath)
        const indexPath = path.normalize(`${__dirname}/src/pages/index/index.tsx`)

        if (componentPath === indexPath) {
            deletePage(page)
            
            // create a new page but with '/' as path
            createPage({
                ...page,
                path: '/',
            })
        }

        resolve()
    })
}