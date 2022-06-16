import React from 'react';
import './App.css';

import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Title from './Components/Title';
import SomeApp from './Components/SomeApp';
import ComponentWithArrayOfData from './Components/ComponentWithArrayOfData';
import ComponentConditionalRender from './Components/ComponentConditionalRender';
import ComponentConditionalLogicalRender from './Components/ComponentConditionalLogicalRender';

function App() {
    return (
    <>
      <Title />
      <First />
      <Second />
      <Third />
      <SomeApp />
      <ComponentWithArrayOfData />
            {/* <ComponentConditionalRender />   doestn't work as intended */}
      <ComponentConditionalLogicalRender />
    </>
    );
}
export default App;


// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
