import * as React from 'react';
import {AppBar, Box, IconButton, Slider, TextField, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

class Controls extends React.Component {
    render() {
        return (
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div">
                            Photos
                        </Typography>
                        <TextField
                            label="Search"
                            variant="outlined"
                            focused
                            color="secondary"
                            size="small"
                            sx={{mx: 5}}
                        />
                        <Box sx={{width: 200}}>
                            <Slider
                                size="small"
                                min={0}
                                max={100}
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                color="secondary"
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }

}

export default Controls;