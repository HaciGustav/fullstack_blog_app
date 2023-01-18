import React from 'react';
import { CardContainer, CardImg, Container, Form } from '../login/Login.style';

import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Formik } from 'formik';
import * as yup from 'yup';
import RegisterCard from '../../assets/RegisterCard.jpg';
import { register } from '../../helpers/firebase';
import { useNavigate } from 'react-router-dom';

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .min(8)
        .max(16)
        .matches(/\d+/)
        .matches(/[a-z]/)
        .matches(/[A-Z]/)
        .matches(/[!,?{}><%&$#£+-.]+/),
});

const Register = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <CardContainer>
                <CardImg src={RegisterCard} />

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        name: '',
                        lastName: '',
                    }}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                    }}>
                    {({
                        values,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        touched,
                        errors,
                    }) => (
                        <Form>
                            <TextField
                                type={'text'}
                                id="name"
                                label="Name"
                                variant="standard"
                                onChange={handleChange}
                                value={values.name}
                            />
                            <TextField
                                type={'text'}
                                id="lastName"
                                label="Last Name"
                                variant="standard"
                                onChange={handleChange}
                                value={values.lastName}
                            />

                            <TextField
                                type={'email'}
                                id="email"
                                label="Email"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                type={'password'}
                                id="password"
                                label="Password"
                                variant="standard"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    touched.password && Boolean(errors.password)
                                }
                                helperText={touched.password && errors.password}
                            />

                            <LoadingButton
                                sx={{ marginTop: '0.5rem' }}
                                loadingPosition="center"
                                variant="contained"
                                onClick={(e) => {
                                    e.preventDefault();
                                    register(
                                        values.email,
                                        values.password,
                                        values.name,
                                        values.lastName,
                                        navigate
                                    );
                                }}>
                                Register
                            </LoadingButton>
                        </Form>
                    )}
                </Formik>
            </CardContainer>
        </Container>
    );
};
export default Register;
