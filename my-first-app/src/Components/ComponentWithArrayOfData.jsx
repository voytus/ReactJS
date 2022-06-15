import React from "react";

function ComponentWithArrayOfData() {

    const arrayOfListItems = [
        'Wash the dishes',
        'Walk the dog',
        'Clean the windows',
        'Mow the lawn'
    ];

    //   const listItems = arrayOfListItems.map(item => <li>(item)</li>);
    const listItems = arrayOfListItems.map(
        (item, index) => <li key={index}>{item}</li>
            );




            return (
            <ol>
                {listItems}
            </ol>
            );
       

};

export default ComponentWithArrayOfData
