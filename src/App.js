
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Team from './components/Team.js';
import Contact from './components/Contact';
import Info from './components/Info';
import InitScreen from './components/InitScreen';
import Explore from './components/Explore/Explore';
import './background.css'

import Footer from './components/Footer';
import Impactheadline from './components/ImpactHeadline';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <InitScreen/>
      <Info/>
      <Impactheadline/>
      <Explore />
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
