import React from 'react';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Paginate = () => {

    const classes = useStyles();

    return (
        <Pagination
            classes={{ul:classes.ul}}
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/projects?page=${1}`} />
            )}
        />
    );   
};

export default Paginate;