import Layout from '../components/Layout';
import { ProkerCardsRow, ProkerModals, useCardModals } from '../components/ProkerModalGrid';
import { bondingData } from '../data/bondingData';

export default function BondingPage() {
  const [openIdx, setOpenIdx] = useCardModals();

  return (
    <Layout
      contentClassName="fi"
      line2Label="UNIT"
      line2Value="BND / 06"
      barcodeCap="ID-2526-BND"
      backTo="/proker"
      nextTo="/orbul"
      nextLabel="PROCEED_08"
      modals={<ProkerModals cards={bondingData} openIdx={openIdx} setOpenIdx={setOpenIdx} />}
    >
      <div className="eyebrow">SYSTEM ACCESS</div>
      <h1 className="display">Bonding</h1>
      <div className="sub">
        <span className="display">
          Klik kartu untuk buka detail<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <ProkerCardsRow cards={bondingData} openIdx={openIdx} setOpenIdx={setOpenIdx} />
    </Layout>
  );
}