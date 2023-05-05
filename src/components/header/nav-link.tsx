import * as React from "react"

import { Link } from "gatsby"

import * as styles from "./nav-link.module.scss"

interface NavLinkProps {
    to: string;
    active: boolean;
    children?: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps): JSX.Element => {
    return (
        <Link to={to} className={active ? styles.active : ""}>{children}</Link>
    )
}

export default NavLink