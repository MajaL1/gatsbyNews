import React from "react"

const ContentRight = () => (
    <div>
        <p className="right-112-title">KLIC V SILI 112 </p>

        <div className="povezave-right">
            <ul className="right-list-112">
                <li className="right-112">
                    <strong>KDO</strong> kliče
                </li>
                <br />
                <li className="right-112">
                    <strong> KAJ </strong>se je zgodilo
                </li>
                <br />
                <li className="right-112">
                    <strong>KJE</strong> se je zgodilo
                </li>
                <br />
                <li className="right-112">
                    <strong> KDAJ</strong> se je zgodilo
                </li>
                <br />
                <li className="right-112">
                    <strong>KOLIKO</strong> je ponesrečencev
                </li>
                <br />
                <li className="right-112">
                    kakšne so <strong>POŠKODBE</strong>
                </li>
                <br />
                <li className="right-112">
                    kakšne so <strong>OKOLIŠČINE</strong>
                </li>
                <br />
                <li className="right-112">
                    <strong>kakšno POMOČ</strong> potrebujete.
                </li>
            </ul>
        </div>

        <hr />

        <p className="right-112-title">POVEZAVE</p>

        <div className="povezave-content content-section">
            <a
                className="povezava-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://meteo.arso.gov.si/met/sl/warning/fire"
            >
                {/* Arso-Požarna ogroženost */}
                <img src="../icons/arso.png" alt="Logo" />
            </a>

            <a
                className="povezava-item"
                target="_blank"
                rel="noopener noreferrer"
                href="http://wap.sos112.si/Dogodek"
            >
                {/* SOS */}
                <img src="../icons/spin112.png" alt="Logo" />
            </a>
            <a
                className="povezava-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://spin3.sos112.si/javno/zemljevid"
            >
                {/* Spin */}
                <img src="../icons/spin.png" alt="Logo" />
            </a>
            <a
                className="povezava-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.gasilec.net"
            >
                {/* Gasilska zveza Slovenije */}
                <img src="../icons/gzs.gif" alt="Logo" />
            </a>
        </div>
        <hr />
        <div className="povezave-right address">
            <br />
            <p className="">PGD Štangarske Poljane</p>
            <p className="">Štangarske Poljane 1a</p>
            <p className="">1275, Šmartno pri Litiji</p>
        </div>
        <br />
        <p className="povezave-link">
            <a href="mailto: pgdstangarskepoljane@gmail.com">
                pgdstangarskepoljane@gmail.com
              </a>
        </p>
        <br />
        <hr />
    </div >
)

export default ContentRight
