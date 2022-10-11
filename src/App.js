import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank you for watching our seminar hahaha!!!
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn CI CD with our team:
        </a>
        <ul>
          <li>Dương Hiển Thế - 19522252</li>
          <li>Trần Lê Thanh Tùng - 19522496</li>
          <li>Trương Kiêm Lâm - 19521743</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
