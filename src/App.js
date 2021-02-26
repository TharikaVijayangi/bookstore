
import './App.css';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Addbook from './Components/Addbook';
import BookSection from './Components/BookSection';
import ContactInfo from './Components/ContactInfo';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Landing></Landing>
      <hr></hr>
      <BookSection></BookSection>
      <hr></hr>
      <Addbook></Addbook>
      <br></br>
      <ContactInfo></ContactInfo>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
