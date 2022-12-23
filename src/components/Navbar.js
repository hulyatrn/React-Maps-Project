import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className="d-flex  justify-content-center py-3 mb-4 border-bottom">
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none ms-5">
          <img src="data:image/png;base64,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" />
          <h3 className="ms-3">MAPS</h3>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              AnaSayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/covid" className="nav-link">
              Covid19 Hakkında
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/canada" className="nav-link">
              Ülke Detayı
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
