import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Author,
    Avatar,
    CardContainer,
    CardHeader,
    CardInfo,
    Column,
    Date,
    Img,
    MainWrapper,
    Overview,
    Tag,
    Tags,
    Title,
} from './BlogCard.style';

const BlogCard = ({ article }) => {
    const {
        author,
        imgURL,
        text,
        title,
        date,
        tag1,
        tag2,
        tag3,
        tags,
        id,
        authorPP,
    } = article;
    const navigate = useNavigate();

    const textPart =
        text?.length >= 300 ? text?.substring(0, 300) + '...' : text;
    console.log(tags);
    return (
        <MainWrapper onClick={() => navigate(`/details/${id}`)}>
            <CardHeader>
                <Avatar src={authorPP && authorPP} />
                <Column>
                    <Author>{author}</Author>
                    <Date>{date}</Date>
                </Column>
            </CardHeader>
            <CardContainer>
                <CardInfo>
                    <Title>{title}</Title>
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div>
                            <Overview>{textPart}</Overview>

                            <Tags>
                                {tag1 && <Tag>{tag1}</Tag>}
                                {tag2 && <Tag>{tag2}</Tag>}
                                {tag3 && <Tag>{tag3}</Tag>}
                            </Tags>
                        </div>
                        <Img src={imgURL} />
                    </div>
                </CardInfo>
            </CardContainer>
        </MainWrapper>
    );
};
export default BlogCard;
