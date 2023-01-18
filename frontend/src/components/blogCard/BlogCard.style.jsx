import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 75%;
    margin-inline: auto;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    padding-inline: 1rem;
    cursor: pointer;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    column-gap: 2rem;
    padding-bottom: 1rem;
    @media (max-width: 560px) {
        flex-direction: column;
    }
`;
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 1rem;
`;
export const Date = styled.span`
    color: #364653;
    font-size: 0.9rem;
    font-weight: 500;
`;
export const Author = styled.span`
    font-size: 0.9rem;
`;

export const Avatar = styled.img`
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`;
export const Title = styled.h3``;
export const Img = styled.img`
    /* min-width: 9rem; */
    width: 25%;
    align-self: center;
    @media (max-width: 560px) {
        width: 50%;
    }
`;

export const Overview = styled.p`
    max-height: 30vh;
    overflow: hidden;
    @media (max-width: 560px) {
        display: none;
    }
`;
export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
    gap: 0.5rem;
`;
export const Tag = styled.span`
    font-size: 0.8rem;
    padding: 0.3rem 0.4rem;
    background-color: #cccccc99;
    border-radius: 1rem;
`;
export const Column = styled.div`
    display: flex;
    column-gap: 5px;
    padding-bottom: 0.5rem;
    @media (max-width: 550px) {
        flex-direction: column;
    }
`;
