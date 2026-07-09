import Layout from '../components/Layout';

export default function CoverPage() {
  return (
    <Layout
      status="COMPLETE"
      line2Label="UPTIME"
      line2Value="No.3 / FINAL"
      barcodeCap="ID-2526-FINAL"
      date="JULY 2026"
      nextTo="/team-kwk"
      nextLabel="PROCEED_02"
    >
      <div id="imgslot">
        <img id="logoImg" src="/assets/himainfra.png" alt="logo" />
        <img id="idLogo" src="/assets/id.png" alt="id" />
      </div>
      <div className="eyebrow">DEPARTMENT FINAL REPORT</div>
      <h1 className="display">Internal Development Department</h1>
      <div className="sub">
        <span className="display">
          Mission Log 2025/2026<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>
    </Layout>
  );
}
