import React from 'react'
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
}  from "../../styles/sidebar-styles"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle}>Home</SidebarLink>
                    <SidebarLink onClick={toggle}>About</SidebarLink>
                    <SidebarLink onClick={toggle}>Hotels</SidebarLink>
                    <SidebarLink onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
