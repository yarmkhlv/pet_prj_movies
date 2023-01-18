import Header from './Header/Header';
import MovieList from './MovieList/MovieList';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar />
        <MovieList />
      </main>
    </div>
  );
}

export default App;
