import * as React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

class Comment extends React.Component {
    render() {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={this.props.photo}/>
                </ListItemAvatar>
                <ListItemText primary={this.props.content} secondary={this.props.date}/>
            </ListItem>
        );
    }
}

export default Comment;