import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 3rem);
    width: 4rem;
    border-right: 2px solid #ccc;
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;
    align-items: center;

    @media (max-width: 560px) {
        display: none;
    }
`;
export const HomeBadge = styled.span`
    border-radius: 12px 12px 12px 0;
    position: absolute;
    border: 1.5px solid #000;
    background-color: #36465db5;
    color: #fff;
    font-size: 0.75rem;
    padding: 5px 10px;
    top: -60%;

    display: none;
`;
export const HomeWrap = styled.div`
    position: relative;
    /* border: 1px solid red; */
    padding: 5px;
    cursor: pointer;
    &:hover ${HomeBadge} {
        display: inline;
    }
`;
export const NewBadge = styled.span`
    border-radius: 12px 12px 12px 0;
    position: absolute;
    border: 1.5px solid #000;
    background-color: #36465db5;
    color: #fff;
    font-size: 0.75rem;
    padding: 5px 10px;
    top: -60%;
    display: none;
`;
export const NewWrap = styled(HomeWrap)`
    &:hover ${NewBadge} {
        display: inline;
    }
`;

export const ReadBadge = styled.span`
    border-radius: 12px 12px 12px 0;
    position: absolute;
    border: 1.5px solid #000;
    background-color: #36465db5;
    color: #fff;
    font-size: 0.75rem;
    padding: 5px 10px;
    top: -60%;
    display: none;
`;
export const ReadWrap = styled(HomeWrap)`
    &:hover ${ReadBadge} {
        display: inline;
    }
`;
