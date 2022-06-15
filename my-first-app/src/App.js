import React from 'react';
import './App.css';
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





// import First from './Components/First';
// import Second from './Components/Second';
// import Third from './Components/Third';
// import Title from './Components/Title';


// function App() {
//     return (
//     <>
//       <Title />
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
