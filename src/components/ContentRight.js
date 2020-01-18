import React from "react"

import Layout from "../components/layout"

const ContentRight = () => (
    <div>
        <div className="povezave-right">
            <br />

            <p className="">tukaj lahko dodamo text</p>
        </div>
        <br />
        <hr />

        <h7 className="main-content-right-title">Povezave</h7>

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
        <div className="povezave-right">
            <br />
            <p className="">PGD Štangarske Poljane</p>
            <p className="">Štangarske Poljane 1a</p>
            <p className="">1275, Šmartno pri Litiji</p>
        </div>
        <br />
        <p className="povezave-link">
            <a href="mailto: pgdstangarskepoljane@gmail.com">
                pgdstangarskepoljane
                <br />
                @gmail.com
              </a>
        </p>
        <br />
        <hr />
    </div>
)

export default ContentRight
