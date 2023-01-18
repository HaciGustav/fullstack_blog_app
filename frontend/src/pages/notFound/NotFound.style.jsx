import styled from 'styled-components';

export const Container = styled.div`
    height: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-image: url(${({ bg }) => bg && bg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
`;
export const GoBack = styled.button`
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.5rem;
    background-color: #36465d;
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
`;
