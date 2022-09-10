
import './App.css';
import Header from './components/navbar/Header';
import Banner from './components/mainbody/Banner';
import AsideNav from './components/navbar/AsideNav';
import BookShows from './components/mainbody/Shows/BookShows';
import AboutUs from './components/mainbody/AboutUs/AboutUs';
import Footer from './components/navbar/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AsideNav />
      <Banner />
      <BookShows />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
