import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';
import { useDataContext } from '../../context/DataProvider';
import { deleteArticle, getArticle } from '../../helpers/firebase';

import {
    Article,
    Author,
    Avatar,
    Container,
    Date,
    H1,
    Header,
    HeaderInfo,
    Img,
    ImgWrapper,
    Tag,
    Tags,
} from './Details.style';
import { toastWarnNotify } from '../../helpers/toastNotify';

const Details = () => {
    const [article, setArticle] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        getArticle(id, setArticle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { setFormValues } = useDataContext();
    const { currentUser } = useAuthContext();
    const { email } = currentUser;
    if (!article) {
        toastWarnNotify('sorry wrong page!!');
        navigate('/');
    }
    const {
        date,
        title,
        imgURL,
        text,
        author,
        tag1,
        tag2,
        tag3,

        authorPP,
    } = article;

    return (
        <Container>
            <Header>
                <Avatar src={authorPP} />

                <HeaderInfo>
                    <Author>{author}</Author>
                    <Date>{date}</Date>
                </HeaderInfo>
            </Header>
            <H1>{title}</H1>
            <ImgWrapper bgImg={imgURL}>
                <Img src={imgURL} />
            </ImgWrapper>
            <Tags>
                {tag1 && <Tag>{tag1}</Tag>}
                {tag2 && <Tag>{tag2}</Tag>}
                {tag3 && <Tag>{tag3}</Tag>}
            </Tags>

            <Article>{text}</Article>

            {author === email && (
                <Box
                    sx={{
                        display: ' flex',
                        justifyContent: 'center',
                        columnGap: '1rem',
                        marginBlockEnd: '5rem',
                    }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate(`/edit/${id}`);
                            setFormValues({
                                title,
                                imgURL,
                                text,
                                tag1,
                                tag2,
                                tag3,
                            });
                        }}>
                        Update
                    </Button>
                    <Button
                        onClick={() => {
                            deleteArticle(id, navigate);
                        }}
                        variant="contained"
                        sx={{ backgroundColor: '#f00' }}>
                        Delete
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default Details;
