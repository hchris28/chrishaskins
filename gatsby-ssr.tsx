import React from "react";
import Layout from "./src/components/layout";

const transitionDelay = 500;

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};