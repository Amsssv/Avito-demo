import React from 'react';
import {Pagination, Stack} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Paginate} from '../../../thunks';

export default function PostPagination() {
    const {pages, page} = useSelector((state) => state);
    const dispatch = useDispatch();

    const getPageNumber = (event, value) => dispatch(Paginate(value));

    return (
        <>
            <Stack spacing={2} sx={{alignItems: 'center', padding: 3}}>
                <Pagination count={pages} page={Number(page)} size="large" onChange={getPageNumber}/>
            </Stack>
        </>
    )
}