import * as React from "react"

import { Link } from "gatsby"

import * as styles from "./nav-link.module.scss"

interface NavLinkProps {
    to: string;
    active: boolean;
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
}

const NavLink = ({ to, active, onClick, children }: NavLinkProps): JSX.Element => {
    return (
        <Link
            to={to}
            className={active ? styles.active : ""}
            onClick={onClick}
        >
            {children}
        </Link>
    ) 
}

export default NavLink