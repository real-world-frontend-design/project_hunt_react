import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import moment from 'moment';
import useStyle from './style';
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

export default function MediaCard({ project }) {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.center}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              //TODO: add the media image 
              //image={project.image}
              image="https://deviniti.com/wp-content/uploads/2018/07/DevOps-6-reasons.png"
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
          <CardActions>
              <FavoriteIcon />
              <div className={classes.right}> 
              <DeleteIcon style={{textAlign: "right"}}/>
              </div>
              {/* TODO: onClick favorite_count ++ */}
              {/* TODO: user authenticated delete button */}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}