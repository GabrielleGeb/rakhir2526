import { useState, useEffect } from 'react';

/** Shared open/close state for a set of proker-cards + their modals. */
export function useCardModals() {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpenIdx(null);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return [openIdx, setOpenIdx];
}

/** The clickable card row — goes inside #content. */
export function ProkerCardsRow({ cards, gap, openIdx, setOpenIdx }) {
  return (
    <div className="proker-row" style={gap ? { gap } : undefined}>
      {cards.map((c, i) => (
        <div
          key={i}
          className="proker-card"
          style={{ animationDelay: c.delay }}
          onClick={() => setOpenIdx(i)}
        >
          <div className="pc-head">
            <div>
              <div className="pc-title">{c.title}</div>
              <div className="pc-sub">{c.subtitle}</div>
            </div>
            <div className="pc-icon">→</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** The modal overlays — must be a sibling of #content (pass via Layout's `modals` prop). */
export function ProkerModals({ cards, openIdx, setOpenIdx }) {
  return (
    <>
      {cards.map((c, i) => (
        <div
          key={i}
          className={`modal-overlay${openIdx === i ? ' open' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenIdx(null);
          }}
        >
          <div className="modal-box">
            <button className="modal-close" onClick={() => setOpenIdx(null)}>×</button>
            <div className="modal-photo">
              <img src={c.img} alt={`Dokumentasi ${c.title}`} />
            </div>
            <div className="modal-info">
              <div className="modal-heading">{c.title}</div>
              {c.stat != null && (
                <div className="modal-stat">
                  <span className="stat-num">{c.stat}</span>
                  <span className="stat-label">{c.statLabel || 'Total Kehadiran'}</span>
                </div>
              )}

              <div className="modal-section">
                <div className="modal-section-title">Detail Pelaksanaan</div>
                {c.details.map((d, di) => (
                  <div className="detail-row" key={di}>
                    <span className="d-label">{d[0]}</span>
                    <span className="d-colon">:</span>
                    <span className="d-value">{d[1]}</span>
                  </div>
                ))}
              </div>

              <div className="modal-section">
                <div className="modal-section-title">Kendala</div>
                <ul className="kendala-list">
                  {c.kendala.map((k, ki) => (
                    <li key={ki}>{k}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}