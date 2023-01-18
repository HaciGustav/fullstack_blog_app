import styled from 'styled-components';
import profileBG from '../../assets/profileBG.jpg';

export const Container = styled.div`
    margin-top: 3rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${profileBG});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
`;

export const ProfileCard = styled.div`
    background-color: #0000006a;
    border: 1px solid #0000007b;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */

    min-width: 40%;
    padding: 1rem;
    row-gap: 1rem;
`;
export const Avatar = styled.img`
    vertical-align: middle;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    outline: 2px solid #107e7d;
    outline-offset: 2px;
`;
export const Name = styled.h4`
    color: #ccc;
`;
export const Email = styled.p`
    text-align: center;
    color: #ccc;
`;
export const H5 = styled.h5`
    color: #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 0.5rem;
`;
export const Articles = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    border-top: 3px double #ccc;
    padding: 0.5rem 0;
`;
export const Article = styled.li`
    border-bottom: 1px solid #ccc;
    list-style-type: none;
    padding: 0.4rem;
    color: #ccc;
    transition: border-left 0.3s;
    cursor: pointer;
    &:hover {
        border-left: 8px solid #ccc;
    }
`;
export const UserInfo = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 400px) {
        flex-direction: column;
        row-gap: 10px;
        align-items: center;
    }
`;

export const AvatarBtn = styled.button`
    border: none;
    background-color: #36465d;
    color: #fff;
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    cursor: pointer;
`;
export const AvatarWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
`;
