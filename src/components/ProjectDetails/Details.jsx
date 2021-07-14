import React, {useEffect} from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


import { getProject } from '../../actions/project';

const Details = () => {

    const project = useSelector((state) => state.projects);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { slug } = useParams();

    console.log('project details', project.project.slug);

    useEffect(() => {
        dispatch(getProject(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);
    
    if(!project) return null;

    return (
    <div>
            <h1>
                {project.project.title}
            </h1>            
        </div>
    )
}

export default Details;