import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { addArticle } from '../../helpers/firebase';
import { CardContainer, Container, Form, H2 } from './NewBlog.style';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';

const formSchema = yup.object().shape({
    title: yup.string().required().max(100),
    url: yup.string().required(),
    text: yup.string().required(),
});

const NewBlog = () => {
    const { user } = useAuthContext();

    const userDetail = user[0];
    const { authorPP } = userDetail;

    const navigate = useNavigate();
    return (
        <Container>
            <CardContainer>
                <H2>⚜ New Article ⚜</H2>

                <Formik
                    initialValues={{
                        title: '',
                        url: '',
                        text: '',
                        tag1: '',
                        tag2: '',
                        tag3: '',
                    }}
                    validationSchema={formSchema}>
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                    }) => {
                        return (
                            <Form>
                                <TextField
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Article Title"
                                    variant="filled"
                                    error={
                                        touched.title && Boolean(errors.title)
                                    }
                                    helperText={touched.title && errors.title}
                                    required
                                />
                                <TextField
                                    id="url"
                                    name="url"
                                    value={values.url}
                                    onChange={handleChange}
                                    label="Image URL"
                                    variant="filled"
                                    error={touched.url && Boolean(errors.url)}
                                    helperText={touched.url && errors.url}
                                />
                                <TextField
                                    id="text"
                                    label="Article"
                                    name="text"
                                    value={values.text}
                                    onChange={handleChange}
                                    multiline
                                    rows={8}
                                    variant="filled"
                                    error={touched.text && Boolean(errors.text)}
                                    helperText={touched.text && errors.text}
                                    required
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
                                        value={values.tag1}
                                        onChange={handleChange}
                                        label="tag..."
                                        variant="filled"
                                    />
                                    <TextField
                                        id="tag2"
                                        name="tag2"
                                        value={values.tag2}
                                        onChange={handleChange}
                                        label="tag..."
                                        variant="filled"
                                    />
                                    <TextField
                                        id="tag3"
                                        name="tag3"
                                        value={values.tag3}
                                        onChange={handleChange}
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
                                        values.title &&
                                            values.text &&
                                            addArticle(
                                                e,
                                                values,
                                                navigate,
                                                authorPP
                                            );
                                    }}>
                                    Send Article
                                </LoadingButton>
                            </Form>
                        );
                    }}
                </Formik>
            </CardContainer>
        </Container>
    );
};

export default NewBlog;
