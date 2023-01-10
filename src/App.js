import './App.css';
import Newsfeed from './Components/Newsfeed';
import Converter from './Components/Converter';

function App() {
  return (
    <div className="App">
      <Converter/>
      <Newsfeed/>
    </div>
  );
}

export default App;
