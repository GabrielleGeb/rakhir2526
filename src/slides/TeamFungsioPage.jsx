import Layout from '../components/Layout';
import TeamCard from '../components/TeamCard';
import { teamFungsioData } from '../data/teamFungsioData';

export default function TeamFungsioPage() {
  return (
    <Layout
      contentClassName="fi"
      line2Label="UNIT"
      line2Value="FSG / 02"
      barcodeCap="ID-2526-FSG"
      showEq={false}
      backTo="/team-kwk"
      nextTo="/team-intern"
      nextLabel="PROCEED_04"
    >
      <div className="eyebrow">SYSTEM ACCESS</div>
      <h1 className="display">Fungsio</h1>
      <div className="sub">
        <span className="display">
          Functional Staff<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <div className="fi-section">
        <div className="fi-label">FUNGSIO</div>
        <div className="fi-row">
          {teamFungsioData.map((p, i) => (
            <TeamCard key={i} person={p} cardClass="fi-card" frameClass="fi-photo-frame" />
          ))}
        </div>
      </div>
    </Layout>
  );
}
