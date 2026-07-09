import Layout from '../components/Layout';
import { ProkerCardsRow, ProkerModals, useCardModals } from '../components/ProkerModalGrid';
import { ppsData } from '../data/ppsData';

export default function PpsPage() {
  const [openIdx, setOpenIdx] = useCardModals();

  return (
    <Layout
      contentClassName="fi"
      line2Label="UNIT"
      line2Value="PPS / 08"
      barcodeCap="ID-2526-PPS"
      backTo="/orbul"
      nextTo="/recap"
      nextLabel="PROCEED_10"
      modals={<ProkerModals cards={ppsData} openIdx={openIdx} setOpenIdx={setOpenIdx} />}
    >
      <div className="eyebrow">SYSTEM ACCESS</div>
      <h1 className="display">PPS Synthesis</h1>
      <div className="sub">
        <span className="display">
          Klik kartu untuk buka detail<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <ProkerCardsRow cards={ppsData} openIdx={openIdx} setOpenIdx={setOpenIdx} />
    </Layout>
  );
}