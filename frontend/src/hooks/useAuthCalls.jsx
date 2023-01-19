import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastFailNotify, toastSuccessNotify } from '../helpers/toastNotify';

export const login = async (userInfo) => {
    const BASE_URL = 'https://djangoblogapppa.pythonanywhere.com/';
    const { email, password } = userInfo;

    try {
        const { data } = await axios.post(`${BASE_URL}user/login/`, {
            username: email,
            password,
        });

        console.log(data);
        toastSuccessNotify('Welcome Back');
        // navigate('/');
    } catch (err) {
        console.log(err);
        toastFailNotify(`Something Went Wrong !!!`);
    }
};
const useAuthCalls = () => {
    const navigate = useNavigate();

    const BASE_URL = 'https://djangoblogapppa.pythonanywhere.com/';

    const login = async (userInfo) => {
        try {
            const { data } = await axios.post(
                `${BASE_URL}user/login/`,
                userInfo
            );
            console.log(data);
            toastSuccessNotify('Welcome Back');
            // navigate('/');
        } catch (err) {
            toastFailNotify(`Something Went Wrong !!!`);
        }
    };
    const logout = () => {
        return 'logout';
    };
};

export default useAuthCalls;
