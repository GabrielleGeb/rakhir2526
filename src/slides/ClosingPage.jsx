import Layout from '../components/Layout';

const STAMPS = [
  { file: 'gab.png', name: 'Gabrielle' },
  { file: 'ken.png', name: 'Kenenza' },
  { file: 'nat.png', name: 'Nathania' },
  { file: 'ben.png', name: 'Daniel' },
  { file: 'liv.png', name: 'Liviana' },
  { file: 'met.png', name: 'Jonathan' },
  { file: 'vin.png', name: 'Kevin' },
  { file: 'van.png', name: 'Vania' },
  { file: 'fani.png', name: 'Stefani' },
  { file: 'stecu.png', name: 'Stacey' },
];

export default function ClosingPage() {
  return (
    <Layout
      contentClassName="closing"
      showTelemetry={false}
      showBarcode={false}
      showRadar={false}
      showDivider={false}
      showEq={false}
      backTo="/recap"
    >
      <div className="eyebrow">SYSTEM SHUTDOWN</div>
      <h1 className="display">Thank You</h1>
      <div className="bar" style={{ width: '20%' }}><div></div></div>

      <div className="closing-signature">
        <div className="signature-line"></div>
        <div className="signature-team">Internal Development Department</div>
        <div className="signature-sub">Periode 2025 / 2026</div>

        <div className="closing-stamps">
          {STAMPS.map((s, i) => (
            <div className="stamp" key={i}>
              <div className="stamp-seal">
                <img src={`/assets/ttd/${s.file}`} alt={`Tanda tangan ${s.name}`} />
              </div>
              <div className="stamp-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}