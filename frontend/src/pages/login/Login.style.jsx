import styled from 'styled-components';
import loginBG from '../../assets/loginBG.jpg';

export const Container = styled.div`
    min-height: 100vh;
    background-image: url(${loginBG});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CardContainer = styled.div`
    padding: 2rem;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const CardImg = styled.img`
    vertical-align: middle;
    border-radius: 50%;
    width: 140px;
    height: 140px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
`;
