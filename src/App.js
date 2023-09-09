import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro students="100+" courses="10+" years="13+" />
    </div>
  );
}

export default App;
