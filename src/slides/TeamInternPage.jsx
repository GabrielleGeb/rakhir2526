import Layout from '../components/Layout';
import TeamCard from '../components/TeamCard';
import { teamInternData } from '../data/teamInternData';

export default function TeamInternPage() {
  return (
    <Layout
      contentClassName="fi"
      line2Label="UNIT"
      line2Value="INT / 03"
      barcodeCap="ID-2526-INT"
      showEq={false}
      backTo="/team-fungsio"
      nextTo="/who-we-are"
      nextLabel="PROCEED_05"
    >
      <div className="eyebrow">SYSTEM ACCESS</div>
      <h1 className="display">Intern</h1>
      <div className="sub">
        <span className="display">
          Support Division<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <div className="fi-section">
        <div className="fi-label">INTERN</div>
        <div className="fi-row">
          {teamInternData.map((p, i) => (
            <TeamCard key={i} person={p} cardClass="fi-card" frameClass="fi-photo-frame" />
          ))}
        </div>
      </div>
    </Layout>
  );
}
