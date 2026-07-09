import { HashRouter, Routes, Route } from 'react-router-dom';
import CoverPage from './slides/CoverPage';
import TeamKwkPage from './slides/TeamKwkPage';
import TeamFungsioPage from './slides/TeamFungsioPage';
import TeamInternPage from './slides/TeamInternPage';
import WhoWeArePage from './slides/WhoWeArePage';
import ProkerPage from './slides/ProkerPage';
import RecapPage from './slides/RecapPage';
import BondingPage from './slides/BondingPage';
import OrbulPage from './slides/OrbulPage';
import PpsPage from './slides/PpsPage';
import ClosingPage from './slides/ClosingPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/team-kwk" element={<TeamKwkPage />} />
        <Route path="/team-fungsio" element={<TeamFungsioPage />} />
        <Route path="/team-intern" element={<TeamInternPage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/proker" element={<ProkerPage />} />
        <Route path="/recap" element={<RecapPage />} />
        <Route path="/bonding" element={<BondingPage />} />
        <Route path="/orbul" element={<OrbulPage />} />
        <Route path="/pps" element={<PpsPage />} />
        <Route path="/closing" element={<ClosingPage />} />
      </Routes>
    </HashRouter>
  );
}