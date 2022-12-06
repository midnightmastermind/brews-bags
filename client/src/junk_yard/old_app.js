import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo"><img src={logo} alt="logo" /></div>
        <div className="App-header-menu">
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Schedule</div>
        </div>
      </header>
      <div className="App-main">
        <div className="App-main-window">
        </div>
      </div>
      <div className="App-preview-page">
      </div>
    </div>
  );
}

export default App;
