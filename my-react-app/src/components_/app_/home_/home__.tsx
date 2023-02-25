import Sidebar from './sidebar_/sidebar';
import MovieList from './movie_list_/movie_list__';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <MovieList />
    </div>
  );
}

export { Home };
