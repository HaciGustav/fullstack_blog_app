import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';
import { userArticles, getUser } from '../../helpers/firebase';
import AvatarMenu from '../../components/avatarMenu/AvatarMenu';

import {
    Article,
    Articles,
    Avatar,
    Container,
    Email,
    H5,
    Name,
    ProfileCard,
    UserInfo,
    AvatarWrap,
    AvatarBtn,
} from './Profile.style';

const Profile = () => {
    const [articles, setArticles] = useState([]);
    const [isShown, setIsShown] = useState(false);
    // const [user, setUser] = useState([]);

    const { currentUser, user, setUser } = useAuthContext();
    const { email } = currentUser;

    const navigate = useNavigate();
    const [userDetails] = user;
    useEffect(() => {
        userArticles(email, setArticles);
        getUser(email, setUser);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <ProfileCard>
                <UserInfo>
                    <AvatarWrap>
                        <Avatar src={userDetails?.authorPP} />
                        <AvatarBtn onClick={() => setIsShown(true)}>
                            Change Avatar
                        </AvatarBtn>
                    </AvatarWrap>

                    <div>
                        <H5>User Name</H5>
                        <Name>
                            ⚜{' '}
                            {currentUser?.displayName
                                ? currentUser.displayName
                                : currentUser?.email}
                        </Name>
                        <H5>Email</H5>
                        <Email>⚜ {currentUser?.email}</Email>
                    </div>
                </UserInfo>

                <Articles>
                    {articles.length &&
                        articles.map((item) => (
                            <Article
                                key={item?.id}
                                onClick={() =>
                                    navigate(`/details/${item?.id}`)
                                }>
                                <BiRightArrow color="#36465d" /> {item.title}
                            </Article>
                        ))}
                </Articles>
                {!articles.length && (
                    <h2 style={{ textAlign: 'center', color: '#ccc' }}>
                        You Don't Have Any Article!!
                    </h2>
                )}
            </ProfileCard>
            <AvatarMenu isShown={isShown} setIsShown={setIsShown} />
        </Container>
    );
};

export default Profile;
