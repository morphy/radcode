import * as React from 'react';

import {
    Box,
    Container
} from "@mui/material";

import Controls from "./Controls";
import Gallery from "./Gallery";
import data from "./data";

class App extends React.Component {
    sliderMax = 0;

    constructor(props) {
        super(props);

        let visibility = [];

        data.map((value, index) => {
            visibility[index] = true;
        });

        this.state = {
            textVisibility: [...visibility],
            sliderVisibility: [...visibility],
            visibility: [...visibility]
        };

        for (let datum of data) {
            if(datum.likes > this.sliderMax) this.sliderMax = datum.likes;
        }
    }

    handleSliderChange = (event, value) => {
        let sliderVisibilityTmp = [...this.state.sliderVisibility];
        let textVisibilityTmp = [...this.state.textVisibility];

        for (let i = 0; i < data.length; i++) {
            if(data[i].likes < value) {
                sliderVisibilityTmp[i] = false;
            } else {
                sliderVisibilityTmp[i] = true;
            }
        }

        let v = sliderVisibilityTmp.map((value, index) => {
            return textVisibilityTmp[index] && value;
        });

        this.setState({
            textVisibility: [...textVisibilityTmp],
            sliderVisibility: [...sliderVisibilityTmp],
            visibility: [...v]
        });
    }

    handleTextChange = (event) => {
        let sliderVisibilityTmp = [...this.state.sliderVisibility];
        let textVisibilityTmp = [...this.state.textVisibility];

        for (let i = 0; i < data.length; i++) {
            textVisibilityTmp[i] = false;

            for (let j = 0; j < data[i].comments.length; j++) {
                if(data[i].comments[j].content.includes(event.target.value)) {
                    textVisibilityTmp[i] = true;
                }
            }
        }

        let v = sliderVisibilityTmp.map((value, index) => {
           return textVisibilityTmp[index] && value;
        });

        this.setState({
            textVisibility: [...textVisibilityTmp],
            sliderVisibility: [...sliderVisibilityTmp],
            visibility: [...v]
        });
    }

    render() {
        return (
            <Container maxWidth={"lg"}>
                <Controls sliderMax={this.sliderMax} sliderHandler={this.handleSliderChange} textHandler={this.handleTextChange}/>
                <Box>
                    <Gallery
                        data={data}
                        visibility={this.state.visibility}
                    />
                </Box>
            </Container>
        );
    }
}

export default App;