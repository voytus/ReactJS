import React from "react";

const ComponentWithArrayOfData = () => {

    const arrayOfListItems = [
    'Wash the dishes',
    'Walk the dog',
    'Clean the windows',
    'Mow the lawn'
   ];

   return {
    <ol>
            {arrayOfListItems.map(item => <li>(item)</li>)}}
    </ol>
   };

};
export default ComponentWithArrayOfData
