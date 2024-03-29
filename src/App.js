import './App.css';
import Header from './components/Header';
import TopCategories from './components/TopCategories';
import EventCards from './components/EventCards';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className='App'>
      <Header />
      <EventCards />
      <TopCategories />
      <UpcomingEvents />
    </div>
  );
}

export default App;
