import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Landing from './components/landing';
import ScrollButton from './components/scrolltop';
import About from './components/about/aboutus';
import Contact from './components/contact/contactus';
function App() {
  return (
    <>
      <Header />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
