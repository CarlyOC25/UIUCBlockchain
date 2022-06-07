
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Team from './components/Team.js';
import MissionStatement from './components/MissionStatement';
import Contact from './components/Contact';
import Info from './components/Info';
import InitScreen from './components/InitScreen';
import GetInvolved from './components/GetInvolved';
import CardComp from './components/CardComp';
import Footer from './components/Footer';
import Impactheadline from './components/ImpactHeadline';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <InitScreen/>
      <Info/>
      {/* <MissionStatement/> */}
      <Impactheadline/>
      <CardComp/>
      <Team/>
      {/* <GetInvolved/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
