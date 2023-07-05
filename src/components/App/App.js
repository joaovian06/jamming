import './App.scss';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

const tracks = [
  {
    id: 1,
    songName: 'Wonderful Slipery Thing',
    artist: 'Guthrie Govan',
    album: 'Erotic Cakes'
  },
  {
    id: 2,
    songName: 'Wonderful Slipery Thing',
    artist: 'Guthrie Govan',
    album: 'Erotic Cakes'
  },
  {
    id: 3,
    songName: 'Wonderful Slipery Thing',
    artist: 'Guthrie Govan',
    album: 'Erotic Cakes'
  }
];

const App = () => {
  return (
    <div className="App">
      <h1 className='App-title'>Jamming</h1>
      <SearchBar></SearchBar>
      <div className='tracksContent'>
        <SearchResults tracks={tracks}></SearchResults>
        {/* <Playlist></Playlist> */}
      </div>
    </div>
  );
}

export default App;
