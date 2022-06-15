import React from "react";

const ComponentWithArrayOfData = () => {

    const arrayOfListItems = [
    'Wash the dishes',
    'Walk the dog',
    'Clean the windows',
    'Mow the lawn'
   ];
  const listItems = arrayOfListItems.map(item => <li>(item)</li>);
   return (
        <ol>
               {listItems}
        </ol>
   );

};

export default ComponentWithArrayOfData
