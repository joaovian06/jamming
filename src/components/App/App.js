import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchResults></SearchResults>
      <Playlist></Playlist>
    </div>
  );
}

export default App;
