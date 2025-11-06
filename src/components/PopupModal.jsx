import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/PopupModal.css";

const PartnerModal = ({ show, onClose, partners }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Choose Our Partner</h3>

        <div className="partner-list">
          {partners.map((p) => (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={p.name}
              className="partner-list-item"
            >
              <img src={p.logo} alt={p.name} className="modal-logo" />
              <span>{p.name}</span>
              <FaExternalLinkAlt className="external-icon" />
            </a>
          ))}
        </div>

        <button onClick={onClose} className="close-modal-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default PartnerModal;
