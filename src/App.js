import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import ScrollButton from './components/scrolltop';

import Landing from './components/landing/landing';

import About from './components/about/aboutus';
import Awards from './components/about/awards';
import Mission from './components/about/missionAndvision';

import Contact from './components/contact/contactus';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Abu from './components/projects/abu';
import Digital from './components/services/forensic/digital';
import Readmore from './components/services/forensic/readmore';
import DigitalReadmore from './components/landing/readmore/digital';
import AjmanReadmore from './components/landing/readmore/ajman';
import World1Readmore from './components/landing/readmore/worldpolice1';
import World2Readmore from './components/landing/readmore/worldpolice2';
import IntersecReadmore from './components/landing/readmore/intersec';
import SupercarReadmore from './components/landing/readmore/supercar';
import IsnxReadmore from './components/landing/readmore/isnr';
import World3Readmore from './components/landing/readmore/worldpolice3';
import Intersec2Readmore from './components/landing/readmore/intersec2';
import IssReadmore from './components/landing/readmore/iss';
import Al from './components/projects/al';
import Shabiya from './components/projects/shabiya';
import Rop from './components/projects/rop';
import Qatar from './components/projects/qatar';
import Qatar1 from './components/projects/qatar1';
import Cip from './components/projects/cip';
import Ballistic from './components/projects/ballistic';
import Police from './components/projects/police';
import DigitalForensics from './components/digitalforensics/digitalforensics';

function App() {
  return (
    <div>
      <Header />
       <BrowserRouter>
        <Routes>

          <Route path="/"> <Route index element={<Landing />} /> </Route>
          <Route path="/about"> <Route index element={<About />} /> </Route>
          <Route path="/about/mission-vision"> <Route index element={<Mission />} /> </Route>
          <Route path="/about/awards"> <Route index element={<Awards />} /> </Route>

          <Route path="/contact-us"> <Route index element={<Contact />} /> </Route>

          <Route path="/digital-twin-2023"> <Route index element={<DigitalReadmore />} /> </Route>
          <Route path="/ajman-police-exhibition-2023"> <Route index element={<AjmanReadmore />} /> </Route>
          <Route path="/world-police-summit-2023"> <Route index element={<World1Readmore />} /> </Route>
          <Route path="/world-police-summit-s-a-t-2"> <Route index element={<World2Readmore />} /> </Route>
          <Route path="/intersec-2023"> <Route index element={<IntersecReadmore />} /> </Route>
          <Route path="/supercar-blondie"> <Route index element={<SupercarReadmore />} /> </Route>
          <Route path="/isnr-2022"> <Route index element={<IsnxReadmore />} /> </Route>
          <Route path="/world-police-summit-2022"> <Route index element={<World3Readmore />} /> </Route>
          <Route path="/intersec-2022"> <Route index element={<Intersec2Readmore />} /> </Route>
          <Route path="/iss-world-2021"> <Route index element={<IssReadmore />} /> </Route>

          <Route path="/projects/abu-dhabi-ballastic"> <Route index element={<Abu />} /> </Route>
          <Route path="/projects/alian-forensic-lab"> <Route index element={<Al />} /> </Route>
          <Route path="/projects/shabiya-police-station"> <Route index element={<Shabiya />} /> </Route>
          <Route path="/projects/rop-ballistic-lab"> <Route index element={<Rop />} /> </Route>
          <Route path="/projects/qatar-hospital"> <Route index element={<Qatar />} /> </Route>
          <Route path="/projects/qatar-university"> <Route index element={<Qatar1 />} /> </Route>
          <Route path="/projects/mobile-cip-labs"> <Route index element={<Cip />} /> </Route>
          <Route path="/projects/mobile-ballistic-laboratory"> <Route index element={<Ballistic />} /> </Route>

          <Route path="/computer-forensics/digital-forensics-laboratory"> <Route index element={<Digital />} /> </Route>
          <Route path="/computer-forensics/digital-forensics-laboratory/mobile-lab-paladin-2"> <Route index element={<Readmore />} /> </Route>
 
          <Route path="/digital-forensics"> <Route index element={<DigitalForensics />} /> </Route>

        </Routes>
      </BrowserRouter>
      <ScrollButton />
      <Footer />
      
    </div>
  );
}

export default App;
