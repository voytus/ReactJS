import React from 'react';
import './App.css'; 
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';

const Title = () => {
  const title = 'My react App';
  const el = <h1>Welocome to {title}</h1>;

  return (
    <>
    {el}
    </>
  );

}
export default Title;

// function App() {
//     return (
//     <>
//       <First />
//       <Second />
//       <Third />
//     </>
//     );
// }
// export default App;


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
