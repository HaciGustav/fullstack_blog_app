import React from 'react';
import { Avatar, CloseBtn, GridContainer } from './AvatarMenu.style';
import { TfiClose } from 'react-icons/tfi';
import { useAuthContext } from '../../context/AuthProvider';
import { setAvatar } from '../../helpers/firebase';
import { useNavigate } from 'react-router-dom';

const avatars = [
    'avt_coldMan.jpg',
    'avt_gorilla.jpg',
    'avt_human_beardedMan.jpg',
    'avt_human_blackWoman.jpg',
    'avt_human_blondeWoman.jpg',
    'avt_human_fringeWoman.jpg',
    'avt_human_mustache.jpg',
    'avt_human_redMan.jpg',
    'avt_human_redWoman.jpg',
    'avt_human_whiteHairMan.jpg',
    'avt_mafia.jpg',
    'avt_human_blackMan.jpg',
    'avt_human_blueSweater.jpg',
    'avt_human_gucciWoman.jpg',
    'avt_human_hairWoman.jpg',
    'avt_human_KpopGuy.jpg',
    'avt_human_starbucksWoman.jpg',
    'avt_human_youngMan.jpg',
];

const AvatarMenu = ({ isShown, setIsShown }) => {
    const { user } = useAuthContext();
    const [userDetails] = user;
    const navigate = useNavigate();

    return (
        <GridContainer isShown={isShown}>
            {avatars.map((item) => {
                return (
                    <Avatar
                        key={item}
                        src={`https://github.com/HaciGustav/Fire-Blog/blob/main/public/avatars/${item}?raw=true`}
                        type={'image/jpg'}
                        name={`/avatars/${item}`}
                        onClick={(e) => {
                            setAvatar(userDetails, e);
                            setIsShown(false);
                            navigate('/');
                        }}
                    />
                );
            })}
            <CloseBtn onClick={() => setIsShown(false)}>
                <TfiClose size={20} />
            </CloseBtn>
        </GridContainer>
    );
};

export default AvatarMenu;
