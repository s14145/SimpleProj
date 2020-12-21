import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="" alt="" />
                <Avatar src="images/MickeyMouse.jpeg" />
                <h2>Mickey Mouse</h2>
                <h4>MickeyMouse@gmail.com</h4>
            </div>
        </div>
    )
}

export default Sidebar;
