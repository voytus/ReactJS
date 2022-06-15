import React from "react";
const SomeApp = () => {

    const address = {
        forename: "Nick",
        surname: "Johnson",
        line1: "QA Consulting",
        line2: "Anchorage 1",
        city: "Manchester",
        zip: "M50 3YL"
    }
  
    return (
        <div>
            <h1>{address.forename}</h1>
            <h1>{address.surname}</h1>
            <h1>{address.line1}</h1>
            <h1>{address.line2}</h1>
            <h1>{address.city}</h1>
            <h1>{address.zip}</h1>
        </div>
    );
  }
  export default SomeApp;