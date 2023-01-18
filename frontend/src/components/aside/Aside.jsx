import React from 'react';
import {
    Container,
    HomeBadge,
    HomeWrap,
    NewBadge,
    NewWrap,
    ReadBadge,
    ReadWrap,
} from './Aside.style';
import { AiOutlineHome, AiOutlineLinkedin } from 'react-icons/ai';
import { HiOutlineUser, HiOutlineDocument } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Aside = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <HomeWrap onClick={() => navigate('/')}>
                <AiOutlineHome color="#777" size={25} />
                <HomeBadge>Home</HomeBadge>
            </HomeWrap>

            <NewWrap onClick={() => navigate('/post')}>
                <HiOutlineDocument color="#777" size={25} />
                <NewBadge>New</NewBadge>
            </NewWrap>
            <ReadWrap onClick={() => navigate('/profile')}>
                <HiOutlineUser color="#777" size={25} />
                <ReadBadge>My Profile</ReadBadge>
            </ReadWrap>
            <a
                href={'https://github.com/HaciGustav'}
                style={{ cursor: 'pointer' }}>
                <FiGithub color="#777" size={25} />
            </a>
            <a
                href={'https://www.linkedin.com/in/mehmet-f-k/'}
                style={{ cursor: 'pointer' }}>
                <AiOutlineLinkedin color="#777" size={25} />
            </a>
        </Container>
    );
};

export default Aside;
