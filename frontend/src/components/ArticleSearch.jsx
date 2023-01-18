import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const ArticleSearch = ({ articles, setSearchValue, searchValue }) => {
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Stack
            spacing={2}
            sx={{ width: '60%', minWidth: '280px', marginInline: 'auto' }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={
                    articles.length &&
                    articles?.slice(0, 5)?.map((option) => option.title)
                }
                renderInput={(params) => (
                    <Box component={'form'} sx={{ display: 'flex' }}>
                        <TextField
                            value={searchValue}
                            onChange={(e) => handleChange(e)}
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            size="small"
                            onClick={(e) => handleSubmit(e)}
                            sx={{ backgroundColor: '#36465d' }}>
                            Search
                        </Button>
                    </Box>
                )}
            />
        </Stack>
    );
};

export default ArticleSearch;
