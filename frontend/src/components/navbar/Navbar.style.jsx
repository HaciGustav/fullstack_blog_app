import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    height: 5rem;
    background-color: #36465d;
`;
export const Ul = styled.ul`
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    @media (max-width: 560px) {
        display: none;
    }
`;
export const Li = styled.li`
    list-style-type: none;
    font-size: 1.3rem;
    font-family: 'Pacifico', cursive;
    font-weight: 500;
    padding: 0.5rem 0;
    cursor: pointer;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #eee;
    padding: 0.5rem;
    border-radius: 0.5rem;
    position: absolute;
    right: 0;
    display: none;
`;
export const Arrow = styled.span`
    position: absolute;
    top: -14px;
    right: 5px;
    border: 0.5rem solid;
    border-color: transparent transparent #eee transparent;
`;
export const MenuItem = styled.li`
    list-style-type: none;

    padding: 0.4rem;
    cursor: pointer;
`;
export const MenuWrap = styled.div`
    position: relative;
    /* border: 2px solid red; */
    display: none;
    &:hover ${Menu} {
        display: block;
    }
    @media (max-width: 560px) {
        display: inline;
    }
`;
export const Logo = styled.span`
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    width: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
export const UserMenuWrap = styled(MenuWrap)`
    display: block;
`;
export const UserMenu = styled(Menu)`
    z-index: 5;
`;
export const UserOpt = styled(MenuItem)`
    &:hover {
        border: 1px solid #ccc;
        border-radius: 0 8px 0 8px;
    }
`;

export const Avatar = styled.img`
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover ${UserMenu} {
        display: block;
    }
`;
export const DisplayName = styled.span`
    margin-right: 5px;
    font-family: 'Pacifico', cursive;
    font-weight: 500;
    @media (max-width: 400px) {
        display: none;
    }
`;
