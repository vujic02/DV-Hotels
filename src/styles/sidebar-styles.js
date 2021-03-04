import styled from 'styled-components'

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgb(1,1,1,0.3);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0" )};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
` 

export const SidebarWrapper = styled.div`
    color: #fff;
    margin: 20% 10% 0 10%;
    background: #fff;
    border-radius: 20px;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 120px);  
    text-align: center;

    @media screen and (max-width: 320px) {
        grid-template-rows: repeat(4, 80px);  
    }
`

export const SidebarLink = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: var(--black);

    a {
        color: var(--black);
        text-decoration: none;
        transition: 0.2s ease-in-out;
        &:hover {
            color: var(--denimBlue);
        }
    }

    &:hover {
        color: var(--denimBlue);
    }
`