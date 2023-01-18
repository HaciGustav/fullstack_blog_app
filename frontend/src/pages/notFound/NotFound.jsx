import React from 'react';
import { Container, GoBack } from './NotFound.style';
import errorPage from '../../assets/errorPage.jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Container bg={errorPage}>
            <GoBack onClick={() => navigate(-1)}>Go Back</GoBack>
        </Container>
    );
};

export default NotFound;
