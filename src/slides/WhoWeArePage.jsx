import Layout from '../components/Layout';

const VALUES = [
  { letter: 'R', word: 'Reflection', desc: 'Peka arah pelayanan & perkembangan diri' },
  { letter: 'O', word: 'Obedience', desc: 'Taat nilai & tanggung jawab yang dipercayakan' },
  { letter: 'O', word: 'Ownership', desc: 'Rasa memiliki HIMAINFRA, ID & diri sendiri' },
  { letter: 'T', word: 'Togetherness', desc: 'Relasi erat, saling menguatkan di komunitas ID' },
  { letter: 'S', word: 'Spirituality', desc: 'Tuhan sebagai dasar bertumbuh & melayani' },
];

export default function WhoWeArePage() {
  return (
    <Layout
      contentClassName="wwa"
      line2Label="UNIT"
      line2Value="WWA / 04"
      barcodeCap="ID-2526-WWA"
      backTo="/team-intern"
      nextTo="/proker"
      nextLabel="PROCEED_06"
    >
      <div className="bar"><div></div></div>

      <div className="vm-row">
        <div className="vm-box" style={{ animationDelay: '1.4s' }}>
          <div className="vm-title">VISI</div>
          <ul className="vm-list">
            <li>Menumbuhkan karakter rohani & reflektif tiap fungsionaris</li>
            <li>Membangun komunitas internal yang saling mendukung & bertumbuh</li>
            <li>Mendorong individu menemukan peran & berdampak nyata</li>
            <li>Menjadi wadah transformasi utuh — spiritual, emosional, sosial</li>
          </ul>
        </div>
        <div className="vm-box" style={{ animationDelay: '1.5s' }}>
          <div className="vm-title">MISI</div>
          <ul className="vm-list">
            <li>Menumbuhkan nilai inti lewat pembinaan & pendampingan rohani</li>
            <li>Membangun kedekatan lewat program bonding & dinamika internal</li>
            <li>Memfasilitasi pertumbuhan lewat refleksi, evaluasi & kolaborasi</li>
            <li>Mendorong fungsionaris jadi pribadi berdampak & teladan</li>
          </ul>
        </div>
      </div>

      <div className="value-section">
        <div className="value-title">VALUE — ROOTS</div>
        <div className="value-grid">
          {VALUES.map((v, i) => (
            <div className="value-box" key={i}>
              <div className="value-letter">{v.letter}</div>
              <div className="value-word">{v.word}</div>
              <div className="value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="wwa-quote">&ldquo;Rooted in Christ, Empowered to Serve&rdquo;</div>
    </Layout>
  );
}
