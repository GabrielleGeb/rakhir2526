import Layout from '../components/Layout';
import { ProkerCardsRow, ProkerModals, useCardModals } from '../components/ProkerModalGrid';
import { orbulData } from '../data/orbulData';

export default function OrbulPage() {
  const [openIdx, setOpenIdx] = useCardModals();

  return (
    <Layout
      contentClassName="fi"
      line2Label="UNIT"
      line2Value="ORB / 07"
      barcodeCap="ID-2526-ORB"
      backTo="/bonding"
      nextTo="/pps"
      nextLabel="PROCEED_09"
      modals={<ProkerModals cards={orbulData} openIdx={openIdx} setOpenIdx={setOpenIdx} />}
    >
      <div className="eyebrow">SYSTEM ACCESS</div>
      <h1 className="display">Orbul</h1>
      <div className="sub">
        <span className="display">
          Klik kartu untuk buka detail<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <ProkerCardsRow cards={orbulData} gap="28px" openIdx={openIdx} setOpenIdx={setOpenIdx} />
    </Layout>
  );
}