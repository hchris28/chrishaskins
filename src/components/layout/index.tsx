import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import type { PageProps } from "gatsby"

import Header from "../header"
import Footer from "../footer"

import "../../styles/base.scss"
import * as styles from "./layout.module.scss"

const duration = .25

const variants = {
    initial: {
        opacity: 0,
        y: -200,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration,
            delay: duration,
            when: "beforeChildren",
        },
    },
    exit: {
        opacity: 0,
        y: 200,
        transition: { duration: duration },
    },
}

export const Layout = ({ children, location }: PageProps): JSX.Element => {

    const {
        title,
        author,
        description
    } = useSiteMetadata()

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.mainContainer}
                    onAnimationStart={() => { document.body.style.overflow = "hidden" }}
                    onAnimationComplete={() => { setTimeout(() => { document.body.style.overflow = "auto" }, 250) }}
                >
                    <Header siteTitle={title} path={location.pathname} />
                    {children}
                    <Footer siteAuthor={author} />
                </motion.main>
            </AnimatePresence>
        </>
    )
}

export default Layout
