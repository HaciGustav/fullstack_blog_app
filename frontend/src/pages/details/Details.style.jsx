import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 75%;
    max-width: 1000px;
    margin-inline: auto;
    margin-top: 5rem;
    padding-top: 1rem;
    @media (max-width: 550px) {
        width: 95%;
    }
`;
export const Header = styled.div`
    display: flex;
    column-gap: 1rem;
`;
export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
`;
export const Author = styled.span`
    font-weight: 500;
    font-size: 0.9rem;
`;
export const Date = styled.span`
    color: #bbb;
`;
export const Avatar = styled.img`
    vertical-align: middle;
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;
export const H1 = styled.h1`
    letter-spacing: -2px;
    padding-left: 1rem;
`;
export const Img = styled.img`
    max-width: 90%;
    max-height: 50%;
    margin-left: 1rem;
`;
export const ImgWrapper = styled.div`
    max-height: 50vh;
    min-height: 10vh;
    width: 100%;
`;
export const Article = styled.p`
    line-height: 1.7rem;
    border-bottom: 1px solid #ccc;
    word-wrap: break-word;
`;
export const Tags = styled.div`
    display: flex;
    margin: 0.3rem 0;
    column-gap: 0.5rem;
    margin-left: 1rem;
`;
export const Tag = styled.span`
    font-size: 0.8rem;
    padding: 0.3rem 0.4rem;
    background-color: #eeeeee8d;
    border-radius: 1rem;
`;
