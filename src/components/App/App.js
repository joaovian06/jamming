import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <SearchResults></SearchResults>
      <Playlist></Playlist>
    </div>
  );
}

export default App;
