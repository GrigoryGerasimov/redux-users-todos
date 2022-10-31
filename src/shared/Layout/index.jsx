import React from "react";
import PropTypes from "prop-types";
import SidebarMenu from "../SidebarMenu";
import style from "./index.module.scss";

const Layout = ({ children }) => (
    <div className={style.layout_wrapper}>
        <SidebarMenu/>
        <div className={style.layout_content}>{children}</div>
    </div>
);

export default Layout;

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
