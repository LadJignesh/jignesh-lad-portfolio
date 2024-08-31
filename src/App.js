import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNavbar from './Components/SiteNavbar';
import Footer from './Components/Footer';
import Body from './Components/Body';


function App() {
  return (
    <div className="App">
      <SiteNavbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
