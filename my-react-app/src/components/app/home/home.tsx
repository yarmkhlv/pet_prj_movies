import Sidebar from './sidebar/sidebar';
import MovieList from './movie_list/movie_list';
import './home.css';

function Home() {
  return (
    <>
      <Sidebar />
      <MovieList />
    </>
  );
}

export { Home };
