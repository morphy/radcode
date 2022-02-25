import * as React from 'react';
import {Grid} from "@mui/material";
import data from "./data";
import GalleryItem from "./GalleryItem";

class Gallery extends React.Component {

    getGalleryItems() {
        let elements = [];

        for(let i=0; i<data.length; i++) {
            if(this.props.visibility[i]) {
                elements.push(<GalleryItem data={data[i]} key={i.toString()}/>);
            }
        }

        return elements;
    }

    render() {
        return (
            <Grid container spacing={2}>
                {this.getGalleryItems()}
            </Grid>
        );
    }
}

export default Gallery;