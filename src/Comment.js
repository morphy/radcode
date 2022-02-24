import * as React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

class Comment extends React.Component {
    render() {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar src="https://mui.com/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
            </ListItem>
        );
    }
}

export default Comment;