import './App.scss';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <h1 className='App-title'>Jamming</h1>
      <SearchBar></SearchBar>
      <div className='tracksContent'>
        <SearchResults></SearchResults>
        <Playlist></Playlist>
      </div>
    </div>
  );
}

export default App;
