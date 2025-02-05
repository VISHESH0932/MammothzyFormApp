import React from 'react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '2rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            textAlign: 'center',
            borderRadius: '16px',
        }}>
            <img src={imageUrl} alt="Success" style={{ maxWidth: '446px', height: '147px', borderRadius:'16px' }} />
            <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(229, 229, 229, 1)',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          lineHeight: '1',
          borderRadius: '50%',
        }}
        aria-label="Close"
      >
        &times;
      </button>
        </div>
    );
};

export default SuccessModal;