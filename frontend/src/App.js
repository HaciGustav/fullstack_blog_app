import GlobalStyle from './GlobalStyle';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './context/AuthProvider';
import DataProvider from './context/DataProvider';

function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <AppRouter />
            </DataProvider>
            <ToastContainer />
            <GlobalStyle />
        </AuthProvider>
    );
}

export default App;
