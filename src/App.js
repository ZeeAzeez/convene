import './App.css';
import Header from './components/Header';
import TopCategories from './components/TopCategories';
import EventCards from './components/EventCards';

function App() {
  return (
    <div className='App'>
      <Header />
      <EventCards />
      <TopCategories />
    </div>
  );
}

export default App;
