import { createContext, useContext, useState } from 'react';

const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        title: '',
        imgURL: '',
        text: '',
        tag1: '',
        tag2: '',
        tag3: '',
        latestUpdate: new Date().toLocaleDateString('tr'),
    });

    return (
        <dataContext.Provider value={{ formValues, setFormValues }}>
            {children}
        </dataContext.Provider>
    );
};
export const useDataContext = () => {
    return useContext(dataContext);
};

export default DataProvider;
