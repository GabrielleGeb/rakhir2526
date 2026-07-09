import Layout from '../components/Layout';
import TeamCard from '../components/TeamCard';
import { teamKwkData } from '../data/teamKwkData';

export default function TeamKwkPage() {
  return (
    <Layout
      contentClassName="compact"
      line2Label="UNIT"
      line2Value="KWK / 01"
      barcodeCap="ID-2526-KWK"
      backTo="/"
      nextTo="/team-fungsio"
      nextLabel="PROCEED_03"
    >
      <div className="eyebrow">SYSTEM ACCESS</div>
      <h1 className="display">Root Access</h1>
      <div className="sub">
        <span className="display">
          Command Division<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <div className="team-grid">
        {teamKwkData.map((p, i) => (
          <TeamCard key={i} person={p} cardClass="team-card" frameClass="photo-frame" />
        ))}
      </div>
    </Layout>
  );
}
