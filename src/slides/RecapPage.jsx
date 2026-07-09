import Layout from '../components/Layout';
import { prokerData } from '../data/prokerData';
import { ppsData } from '../data/ppsData';

function parseRp(s) {
  return parseInt(s.replace('Rp', '').replace(/\./g, '').replace(',00', '').trim(), 10);
}

function shortDate(dateStr) {
  // handles "23 Agustus 2025" and range-style "10–12 Juli 2026"
  const parts = dateStr.split(' '); // [day(or range), month, year]
  const day = parts[0].split(/[–-]/)[0]; // first day if it's a range
  const month = parts[1].slice(0, 3);
  const year = "'" + parts[2].slice(2);
  return `${day} ${month} ${year}`;
}

export default function RecapPage() {
  const totalProker = prokerData.reduce(
    (sum, c) => sum + c.items.filter((it) => !it.minor).length,
    0
  );
  const perSemester = prokerData
    .map((c) => `${c.items.filter((it) => !it.minor).length} ${c.title.replace('Semester ', '')}`)
    .join(' · ');
  const minorCount = prokerData.reduce(
    (sum, c) => sum + c.items.filter((it) => it.minor).length,
    0
  );

  const allProkerEvents = prokerData.flatMap((c) => c.items);
  const firstEvent = allProkerEvents[0];
  const lastEvent = allProkerEvents[allProkerEvents.length - 1];

  let pemasukan = 0;
  let pengeluaran = 0;
  let pengembalian = 0;
  for (const m of ppsData) {
    for (const [label, value] of m.details) {
      if (label === 'Pemasukan') pemasukan += parseRp(value);
      else if (label === 'Pengeluaran') pengeluaran += parseRp(value);
      else if (label.includes('Pengembalian')) pengembalian += parseRp(value);
    }
  }
  // Pengeluaran Bonding — kini ditampilkan di masing-masing kartu Bonding
  // (lihat src/data/bondingData.js), bukan lagi dirinci di sini. Cuma
  // totalnya yang digabung jadi satu angka ringkas di bawah.
  const bondingTotal = 366826 + 35000;

  const totalAllProker = allProkerEvents.length; // 11 (utama + minor)
  const utamaPct = Math.round((totalProker / totalAllProker) * 100);
  const minorPct = 100 - utamaPct;

  const semesterProgress = prokerData.map((c) => {
    const utama = c.items.filter((it) => !it.minor).length;
    const minor = c.items.filter((it) => it.minor).length;
    const total = utama + minor;
    return { title: c.title, utama, minor, total };
  });

  const fmtRp = (n) => 'Rp ' + n.toLocaleString('id-ID') + ',00';

  return (
    <Layout
      contentClassName="fi"
      line2Label="UNIT"
      line2Value="RCP / —"
      barcodeCap="ID-2526-RCP"
      backTo="/pps"
      nextTo="/closing"
      nextLabel="PROCEED_11"
      showEq={false}
    >
      <div className="eyebrow">DEPARTMENT OVERVIEW</div>
      <h1 className="display">Recap &amp; Summary</h1>
      <div className="sub">
        <span className="display">
          Ringkasan satu periode berjalan<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <div className="recap-stats">
        <div className="recap-stat-box">
          <div className="recap-stat-num">{totalProker}</div>
          <div className="recap-stat-label">Program Kerja Terlaksana</div>
          <div className="recap-stat-sub">{perSemester} · {minorCount} minor tidak dihitung</div>
        </div>
        <div className="recap-stat-box">
          <div className="recap-stat-num" style={{ fontSize: 28 }}>
            {shortDate(firstEvent.date)} → {shortDate(lastEvent.date)}
          </div>
          <div className="recap-stat-label">Rentang Program Kerja</div>
          <div className="recap-stat-sub">{firstEvent.name} → {lastEvent.name}</div>
        </div>
        <div className="recap-stat-box">
          <div className="recap-stat-num">
            2<span className="recap-stat-unit">smt</span>
          </div>
          <div className="recap-stat-label">Periode Aktif</div>
          <div className="recap-stat-sub">Agustus 2025 – Juli 2026</div>
        </div>
      </div>

      <div className="recap-row">
        <div className="recap-panel" style={{ flex: 1 }}>
          <div className="recap-panel-title">PROGRESS PROGRAM KERJA</div>

          <div className="recap-progress-overall">
            <div className="recap-progress-track">
              <div className="recap-progress-fill utama" style={{ width: `${utamaPct}%` }}></div>
              <div className="recap-progress-fill minor" style={{ width: `${minorPct}%` }}></div>
            </div>
            <div className="recap-progress-legend">
              <span><i className="dot utama"></i> {totalProker} Utama ({utamaPct}%)</span>
              <span><i className="dot minor"></i> {minorCount} Minor ({minorPct}%)</span>
              <span className="recap-progress-total">{totalAllProker} total terlaksana</span>
            </div>
          </div>

          <div className="recap-progress-semesters">
            {semesterProgress.map((s, i) => (
              <div className="recap-progress-sem" key={i}>
                <div className="recap-progress-sem-label">
                  {s.title} <span>{s.utama} utama · {s.minor} minor</span>
                </div>
                <div className="recap-progress-track small">
                  <div
                    className="recap-progress-fill utama"
                    style={{ width: `${(s.utama / s.total) * 100}%` }}
                  ></div>
                  <div
                    className="recap-progress-fill minor"
                    style={{ width: `${(s.minor / s.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panel Timeline & Ringkasan Keuangan sementara disembunyikan dulu
          atas permintaan — logic & data di atas tetap disimpan supaya
          gampang dimunculkan lagi nanti kalau perlu. */}
    </Layout>
  );
}