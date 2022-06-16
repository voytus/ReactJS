import React from "react";

const ComponentConditionalRender = () => {


    const renderMe = true;
    const dontRenderMe = false;

    if (renderMe) {
        return {
            <p>It will be displayed if renderMe is true </p>
        };
    } else if (!dontRenderMe) {
        return {
            <p>
            It will be diplayed if dontRenderMe is false and renderMe is false as well
            </p>
        };
    } else {
        return {
            <p> It will be displayed if renderMeis false and dontRenderMe is true
            </p>
        };
    }

};
export default ComponentConditionalRender;