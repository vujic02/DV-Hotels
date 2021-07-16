import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "../../styles/sidebar-styles";

const Sidebar = ({ isOpen, toggleMobile }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleMobile}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggleMobile}>Home</SidebarLink>
          <SidebarLink onClick={toggleMobile}>About</SidebarLink>
          <SidebarLink onClick={toggleMobile}>Hotels</SidebarLink>
          <SidebarLink onClick={toggleMobile}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
