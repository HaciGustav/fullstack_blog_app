import React from 'react';
import { CardContainer, CardImg, Container, Form } from './Login.style';
import loginCard from '../../assets/loginCard.jpg';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from 'react-icons/fc';
import { Formik } from 'formik';
import * as yup from 'yup';
import { login, signUpWithGoogle } from '../../helpers/firebase';
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

const Login = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <CardContainer>
                <CardImg src={loginCard} />

                <Formik
                    initialValues={{ email: '', password: '' }}
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
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    login(
                                        values.email,
                                        values.password,
                                        navigate
                                    );
                                }}>
                                Login
                            </LoadingButton>
                            <LoadingButton
                                sx={{ backgroundColor: '#000' }}
                                loadingPosition="center"
                                variant="contained"
                                onClick={() => signUpWithGoogle(navigate)}>
                                <FcGoogle /> Continue With Google
                            </LoadingButton>
                        </Form>
                    )}
                </Formik>
            </CardContainer>
        </Container>
    );
};
export default Login;
