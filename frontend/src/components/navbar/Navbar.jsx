import React, { useEffect, useState } from 'react';
import {
    Arrow,
    Avatar,
    DisplayName,
    Li,
    Logo,
    Menu,
    MenuItem,
    MenuWrap,
    Nav,
    Ul,
    UserMenu,
    UserMenuWrap,
    UserOpt,
} from './Navbar.style';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../helpers/firebase';

const Navbar = () => {
    const { currentUser, user } = useAuthContext();
    const [authorAvatar, setAuthorAvatar] = useState(
        'https://github.com/HaciGustav/Fire-Blog/blob/main/public/avatars/avt_gorilla.jpg?raw=true'
    );
    const { displayName } = currentUser;
    const userName = displayName
        ? displayName[0].toUpperCase() +
          displayName.slice(1, displayName.length)
        : 'User';
    const navigate = useNavigate();

    useEffect(() => {
        const [userDetails] = user;

        setAuthorAvatar(
            `https://github.com/HaciGustav/Fire-Blog/blob/main/public${userDetails?.authorPP}?raw=true`
        );
    }, [user]);

    return (
        <Nav>
            <Logo onClick={() => navigate('/')}>H.World</Logo>

            {!currentUser && (
                <>
                    <MenuWrap>
                        <MenuIcon />
                        <Menu>
                            <Arrow></Arrow>
                            <MenuItem onClick={() => navigate('/login')}>
                                Login
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/register')}>
                                Register
                            </MenuItem>
                        </Menu>
                    </MenuWrap>
                    <Ul>
                        <Li onClick={() => navigate('/login')}>Login</Li>
                        <Li onClick={() => navigate('/register')}>Register</Li>
                    </Ul>
                </>
            )}
            {currentUser && (
                <UserMenuWrap>
                    <DisplayName>{userName}</DisplayName>
                    <Avatar src={authorAvatar} />

                    <UserMenu>
                        <Arrow></Arrow>
                        <UserOpt onClick={() => navigate('/post')}>
                            New Article
                        </UserOpt>
                        <UserOpt onClick={() => navigate('/profile')}>
                            Profile
                        </UserOpt>
                        <UserOpt onClick={() => logout()}>Logout</UserOpt>
                    </UserMenu>
                </UserMenuWrap>
            )}
        </Nav>
    );
};

export default Navbar;
