import { Link } from 'react-router-dom';
import { useStageFit } from '../hooks/useStageFit';

/**
 * Shared "chrome" for every slide: background layers, corner brackets,
 * ID block, telemetry readout, barcode, radar, divider, corner tags,
 * and back/next navigation. Pass `children` for the unique #content body.
 */
export default function Layout({
  contentClassName = '',
  status = 'ACTIVE',
  statusColor = 'on',
  line2Label = 'UNIT',
  line2Value = '',
  rev = 'v3.0',
  barcodeCap = '',
  idtag = 'ID2526',
  date = null,
  showTelemetry = true,
  showBarcode = true,
  showRadar = true,
  showDivider = true,
  showEq = true,
  showScan = true,
  backTo = null,
  backLabel = 'BACK',
  nextTo = null,
  nextLabel = null,
  modals = null,
  children,
}) {
  const { slideRef, stageRef } = useStageFit();

  return (
    <div id="stage" ref={stageRef}>
      <div id="slide" ref={slideRef}>
        {/* texture & lighting */}
        <div className="layer grid"></div>
        <div className="layer dots"></div>
        <div className="layer glow"></div>
        <div className="layer vignette"></div>
        <div className="layer scan" style={showScan ? undefined : { display: 'none' }}></div>

        {/* corner brackets */}
        <div className="bracket" style={{ left: 54, top: 54 }}>
          <div className="h" style={{ animation: 'drawH .6s ease .1s both' }}></div>
          <div className="v" style={{ animation: 'drawV .6s ease .1s both' }}></div>
        </div>
        <div className="bracket" style={{ right: 54, top: 54 }}>
          <div className="h" style={{ marginLeft: 'auto', animation: 'drawH .6s ease .2s both' }}></div>
          <div className="v" style={{ marginLeft: 'auto', animation: 'drawV .6s ease .2s both' }}></div>
        </div>
        <div className="bracket" style={{ left: 54, bottom: 54 }}>
          <div className="v" style={{ animation: 'drawV .6s ease .3s both' }}></div>
          <div className="h" style={{ animation: 'drawH .6s ease .3s both' }}></div>
        </div>
        <div className="bracket" style={{ right: 54, bottom: 54 }}>
          <div className="v" style={{ marginLeft: 'auto', animation: 'drawV .6s ease .4s both' }}></div>
          <div className="h" style={{ marginLeft: 'auto', animation: 'drawH .6s ease .4s both' }}></div>
        </div>

        {/* ID block */}
        <div id="idblock">
          <div className="chip"></div>
          <div className="t">
            <b>ID</b>
            <br />
            DEPT.
          </div>
        </div>

        {/* telemetry */}
        {showTelemetry && (
          <div id="telemetry">
            <div style={{ animation: 'fadein .7s ease .8s both' }}>
              STATUS&nbsp;&nbsp;&nbsp;&nbsp;<span className={statusColor}>{status}</span>
            </div>
            <div style={{ animation: 'fadein .7s ease .9s both' }}>
              {line2Label}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{line2Value}
            </div>
            <div style={{ animation: 'fadein .7s ease 1.1s both' }}>
              REV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{rev}
            </div>
          </div>
        )}

        {/* barcode */}
        {showBarcode && (
          <div id="barcode">
            <div className="bars"></div>
            <div className="cap">{barcodeCap}</div>
          </div>
        )}

        {/* radar */}
        {showRadar && (
          <div id="radar">
            <div className="ring" style={{ inset: 0, border: '1.5px solid rgba(232,130,30,.30)' }}></div>
            <div className="ring" style={{ inset: 33, border: '1.5px solid rgba(232,130,30,.22)' }}></div>
            <div className="ring" style={{ inset: 66, border: '1.5px solid rgba(232,130,30,.16)' }}></div>
            <div className="crossh"></div>
            <div className="crossv"></div>
            <div className="sweep"></div>
            <div className="blip"></div>
          </div>
        )}

        {/* divider */}
        {showDivider && (
          <div id="divider">
            <div className="seg"></div>
          </div>
        )}

        {/* corner tags */}
        <div id="idtag" className="label">{idtag}</div>
        {date && <div id="date" className="label">{date}</div>}

        {/* main content */}
        <div id="content" className={contentClassName}>
          {children}
        </div>

        {/* equalizer */}
        {showEq && (
          <div id="eq">
            <i></i>
            <i style={{ animationDelay: '.15s' }}></i>
            <i style={{ animationDelay: '.3s' }}></i>
            <i style={{ animationDelay: '.45s' }}></i>
            <i style={{ background: 'rgba(232,130,30,.4)', animationDelay: '.6s' }}></i>
          </div>
        )}

        {/* navigation */}
        {backTo && (
          <Link id="backBtn" to={backTo}>
            <span className="arrow">←</span> {backLabel}
          </Link>
        )}
        {nextTo && (
          <Link id="nextBtn" to={nextTo}>
            {nextLabel} <span className="arrow">→</span>
          </Link>
        )}

        {/* modals — must be a sibling of #content, not nested inside it,
            so their `inset:0` covers the full 1920x1080 slide */}
        {modals}
      </div>
    </div>
  );
}