import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    margin-inline: auto;
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    position: relative;
    background-color: #00000026;
    min-height: 90vh;
    padding: 1rem 0;
    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const NewBlog = styled.button`
    border: none;
    background-color: #365545;
    padding: 0.5rem 1rem;
    position: fixed;
    right: 1rem;
    top: 50px;
    color: white;
    border-radius: 10px 0 10px 0;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    cursor: pointer;
`;
