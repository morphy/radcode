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
    render() {
        return (
            <Grid item xs={4}>
                <Box>
                    <Image src="https://picsum.photos/id/579/2000"/>
                </Box>
                <List sx={{width: '100%', bgcolor: grey[300], mb: 10}}>
                    <LikeCounter count={20000}/>
                    <Comment
                        date={'Jan 9, 2014'}
                        content={'lorem ipsum dolor sit amet'}
                        photo={'https://mui.com/static/images/avatar/1.jpg'}
                    />
                    <Comment
                        date={'Jan 9, 2014'}
                        content={'lorem ipsum dolor sit amet'}
                        photo={'https://mui.com/static/images/avatar/1.jpg'}
                    />
                    <Comment
                        date={'Jan 9, 2014'}
                        content={'lorem ipsum dolor sit amet'}
                        photo={'https://mui.com/static/images/avatar/1.jpg'}
                    />
                </List>
            </Grid>
        );
    }
}

export default GalleryItem;