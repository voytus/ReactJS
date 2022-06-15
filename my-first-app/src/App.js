import logo from './logo.svg';
import './App.css';
// import { Component } from "react";

// const Styles = styled.div`
//   .p {
//     background-color: #222;
//     font-size: 15px;
//   }
// `;

// class SomeComponent extends Component {
//   render() {
//     return(
//       <div>
//       <h2>Henlo frens</h2>
//       <p>It me</p>
//       </div>  
//     );
//   }
// }

// export default SomeComponent;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
