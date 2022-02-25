import * as React from 'react';
import {
    Box,
    Grid,
    List
} from "@mui/material";
import Image from "mui-image";
import {grey} from "@mui/material/colors";
import LikeCounter from "./LikeCounter";
import Comment from "./Comment";

class GalleryItem extends React.Component {
    getComments() {
        return this.props.data.comments.map((item, index) =>
            <Comment date={item.date} content={item.content} photo={item.photo} key={index.toString()}/>
        );
    }

    render() {
        return (
            <Grid item xs={4}>
                <Box>
                    <Image src={this.props.data.src}/>
                </Box>
                <List sx={{width: '100%', bgcolor: grey[300], mb: 10}}>
                    <LikeCounter count={this.props.data.likes}/>
                    {this.getComments()}
                </List>
            </Grid>
        );
    }
}

export default GalleryItem;