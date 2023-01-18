import styled from 'styled-components';
import newBlogBG from '../../assets/newBlogBG.jpg';

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${newBlogBG});
    background-position: center;
    background-size: cover;
    @media (max-width: 560px) {
        height: 100%;
        /* min-height: 90%; */
    }
`;
export const CardContainer = styled.div`
    margin-top: 4rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1rem;
    width: 90%;
    max-width: 900px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
`;
export const H2 = styled.h2`
    text-align: center;
    padding-bottom: 1.5rem;
`;
