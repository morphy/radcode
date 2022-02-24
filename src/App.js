import {
    Box,
    Container,
    Grid
} from "@mui/material";

import Controls from "./Controls";
import GalleryItem from "./GalleryItem";

function App() {
    return (
        <Container maxWidth={"lg"}>
            <Controls/>
            <Box>
                <Grid container spacing={2}>
                    <GalleryItem/>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;