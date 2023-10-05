import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import MapComponent from "../components/map.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/MapComponent">
                <MapComponent/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;