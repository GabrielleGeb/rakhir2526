import { useState } from 'react';
import Layout from '../components/Layout';
import { prokerData } from '../data/prokerData';

export default function ProkerPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <Layout
      contentClassName="fi"
      line2Label="UNIT"
      line2Value="PRK / 05"
      barcodeCap="ID-2526-PRK"
      backTo="/who-we-are"
      nextTo="/bonding"
      nextLabel="PROCEED_07"
    >
      <div className="eyebrow">SYSTEM ACCESS</div>
      <h1 className="display">Program Kerja</h1>
      <div className="sub">
        <span className="display">
          Klik semester untuk buka<span className="cursor">_</span>
        </span>
      </div>
      <div className="bar"><div></div></div>

      <div className="proker-row">
        {prokerData.map((card) => {
          const isOpen = openId === card.id;
          return (
            <div
              key={card.id}
              className={`proker-card${isOpen ? ' open' : ''}`}
              style={{ animationDelay: card.delay }}
              onClick={() => setOpenId(isOpen ? null : card.id)}
            >
              <div className="pc-head">
                <div>
                  <div className="pc-title">{card.title}</div>
                  <div className="pc-sub">{card.subtitle}</div>
                </div>
                <div className="pc-icon">{isOpen ? '×' : '+'}</div>
              </div>
              <div className="proker-list">
                {card.items.map((item, i) => (
                  <div className="proker-item" key={i}>
                    <div className="pi-name">
                      {item.name}
                      {item.minor && <span className="minor-tag">(minor)</span>}
                    </div>
                    <div className="pi-pic">{item.pic}</div>
                    <div className="pi-date">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}