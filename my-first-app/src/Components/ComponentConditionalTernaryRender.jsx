import React from "react";

const ComponentConditionalTernaryRender = () => {

    const renderMe = true;
    const dontRenderMe = false;

    return (
        <>
            {
                renderMe ?
                <p>It will be displayed if renderMe is true</p>
                :
                <p> It will be displayed if renderMe is false</p>
            }
        </>
    );

};

export default ComponentConditionalTernaryRender;