
import './App.css';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Addbook from './Components/Addbook';
import BookSection from './Components/BookSection';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Landing></Landing>
      <Addbook></Addbook>
      <BookSection></BookSection>
    </div>
  );
}

export default App;
