import React, { useEffect, useState } from 'react';

import ArticleSearch from '../../components/ArticleSearch';
import BlogCard from '../../components/blogCard/BlogCard';
import { useAuthContext } from '../../context/AuthProvider';

import { getAllArticles, getUser } from '../../helpers/firebase';
import { Container } from './Dashboard.style';

const Dashboard = () => {
    const { currentUser, setUser } = useAuthContext();
    const [articles, setArticles] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const { email } = currentUser;

    useEffect(() => {
        getAllArticles(setArticles);
    }, []);
    useEffect(() => {
        getUser(email, setUser);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isSearched = (item) =>
        item?.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue.length === 0;

    return (
        <Container>
            <ArticleSearch
                articles={articles}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />
            {articles
                ?.filter((item) => isSearched(item))
                .map((article) => {
                    return <BlogCard key={article?.id} article={article} />;
                })}
        </Container>
    );
};

export default Dashboard;
