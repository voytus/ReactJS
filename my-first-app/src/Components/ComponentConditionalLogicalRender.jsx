import React from "react";

const ComponentConditionalLogicalRender = () => {

    const renderMe = true;
    const dontRenderMe = false;

    return (
        <>
            {(renderMe) && <p>It will only displayed when renderMe is true</p>}

            {(!renderMe && !dontRenderMe) && <p> It will be displayed 
                if dontRenderMeis false and renderMe is false</p>}

            {(!renderMe && dontRenderMe) && <p>It will be diplayed 
                if renderMe is flase and dontRenderMe is tru</p>}

        </>
    );
};

export default ComponentConditionalLogicalRender;