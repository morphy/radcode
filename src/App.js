import {
    Box,
    Container,
    Grid
} from "@mui/material";

import Controls from "./Controls";
import GalleryItem from "./GalleryItem";
import data from "./data";

function App() {
    const galleryItems = data.map((item, index) =>
        <GalleryItem data={item} key={index.toString()}/>
    );

    return (
        <Container maxWidth={"lg"}>
            <Controls/>
            <Box>
                <Grid container spacing={2}>
                    {galleryItems}
                </Grid>
            </Box>
        </Container>
    );
}

export default App;