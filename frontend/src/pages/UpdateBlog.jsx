import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { getArticle, updateArticle } from '../helpers/firebase';
import { CardContainer, Container, Form, H2 } from './newBlog/NewBlog.style';

import { useNavigate, useParams } from 'react-router-dom';
import { useDataContext } from '../context/DataProvider';

const UpdateBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { formValues, setFormValues } = useDataContext();
    const [, setArticle] = useState({});
    useEffect(() => {
        getArticle(id, setArticle);
    }, [id]);

    return (
        <Container>
            <CardContainer>
                <H2>⚜ Update ⚜</H2>

                <Form>
                    <TextField
                        id="title"
                        name="title"
                        type="text"
                        value={formValues.title}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                [e.target.id]: e.target.value,
                            })
                        }
                        label={formValues.title ? '' : 'Article Title'}
                        variant="filled"
                    />
                    <TextField
                        id="imgURL"
                        name="imgURL"
                        value={formValues.imgURL}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                [e.target.id]: e.target.value,
                            })
                        }
                        label={formValues.imgURL ? '' : 'Image URL'}
                        variant="filled"
                    />
                    <TextField
                        id="text"
                        label={formValues.text ? '' : 'Article'}
                        name="text"
                        value={formValues.text}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                [e.target.id]: e.target.value,
                            })
                        }
                        multiline
                        rows={10}
                        variant="filled"
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            rowGap: '0.5rem',
                            flexWrap: 'wrap',
                        }}>
                        <TextField
                            id="tag1"
                            name="tag1"
                            value={formValues.tag1}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    [e.target.id]: e.target.value,
                                })
                            }
                            label="tag..."
                            variant="filled"
                        />
                        <TextField
                            id="tag2"
                            name="tag2"
                            value={formValues.tag2}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    [e.target.id]: e.target.value,
                                })
                            }
                            label="tag..."
                            variant="filled"
                        />
                        <TextField
                            id="tag3"
                            name="tag3"
                            value={formValues.tag3}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    [e.target.id]: e.target.value,
                                })
                            }
                            label="tag..."
                            variant="filled"
                        />
                    </div>

                    <LoadingButton
                        sx={{
                            marginTop: '0.5rem',
                            backgroundColor: '#36465d',
                            width: '50%',
                            margin: 'auto',
                        }}
                        loadingPosition="center"
                        type="submit"
                        variant="contained"
                        onClick={(e) => {
                            updateArticle(e, id, formValues, navigate);
                        }}>
                        Update
                    </LoadingButton>
                </Form>
            </CardContainer>
        </Container>
    );
};

export default UpdateBlog;
