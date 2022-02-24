import * as React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {blue} from "@mui/material/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

class LikeCounter extends React.Component {
    render() {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{bgcolor: blue[700]}}>
                        <ThumbUpIcon color="secondary"/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="123456"/>
            </ListItem>
        );
    }
}

export default LikeCounter;