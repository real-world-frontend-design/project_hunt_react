import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import moment from 'moment';
import useStyle from './style';
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import ButtonBase from '@material-ui/core/ButtonBase'; 
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteProject } from "../../../actions/project";

export default function MediaCard({ project, setCurrentSlug }) {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyle();

  const openPost = (e) => history.push(`/projects/${project.slug}`);

  return (
    <div>
      <div style={{position: 'fixed', top: 30, right: 20, border: 0 }}>
      <Link to="/create" style={{textDecoration: "none"}}>
      <button>+ Create New</button>
      </Link>
      </div>
      <div className={classes.center}>
        <Card className={classes.root}>
          <ButtonBase 
          className={classes.cardAction}
          component="span"
          name="test"
          onClick={openPost}
          >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              //TODO: add the media image 
              //image={project.image}
              image="#"
              title="media_content"
            />
            <CardContent style={{paddingBottom: "0"}}>
              <div className={classes.row}>
              <Avatar/>     
              {/* TODO: username who creates this project */}
              </div>

              <Typography variant="body2"> {moment(project.createdAt).fromNow()}  </Typography>

              <Typography variant="h5" color="textPrimary" component="h5" >

                {project.title}
                {/* TODO: the little description with a read more button  */}
              </Typography>
            </CardContent>
           </CardActionArea>
          </ButtonBase>

           <CardActions>
              <FavoriteIcon />
              <div className={classes.right}>
              <Button style={{textAlign: "right"}} size="small" color="primary" onClick={() => dispatch(deleteProject(project.slug))}  >
                <DeleteIcon/>
              </Button> 
              </div>
              {/* TODO: onClick favorite_count ++ */}
              {/* TODO: user authenticated delete button */}
            </CardActions>
        </Card>
      </div>     
    </div>
  );
}