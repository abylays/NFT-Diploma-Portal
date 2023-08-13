import { FaWhatsapp, FaTelegram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import React, { useRef, useState } from 'react';

const SocialMedias = () => {
  const qrDropdownRef = useRef(null);
  const shareDropdownRef = useRef(null);
  const [isQrDropdownOpen, setIsQrDropdownOpen] = useState(false);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);

  const handleOpenQR = () => {
    setIsQrDropdownOpen(!isQrDropdownOpen);
  };

  const handleButtonClick = () => {
    setIsShareDropdownOpen(!isShareDropdownOpen);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex space-x-4 mt-4">
        <div className="relative inline-block">
          <button
            className="blue-button px-4 py-2 rounded-md text-white dropdown-toggle"
            onClick={handleOpenQR}
          >
            {isQrDropdownOpen ? 'Закрыть QR' : 'Открыть QR'}
          </button>
          {isQrDropdownOpen && (
            <div
              ref={qrDropdownRef}
              className="absolute right-5 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10"
            >
              <img
                className="w-40 h-40 mx-auto my-4"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                  window.location.href
                )}`}
                alt="QR Code"
              />
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <button
            className="green-button px-4 py-2 rounded-md text-white dropdown-toggle"
            onClick={handleButtonClick}
          >
            Поделиться
          </button>
          
          {isShareDropdownOpen && (
            <div
              ref={shareDropdownRef}
              className="absolute top-10 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10"
            >
              <div className="py-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent('Check out my unique NFT-Diploma proof: ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaWhatsapp size={24} />
                  <span className="ml-2">WhatsApp</span>
                </a>
                <a
                  href={`https://telegram.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out my unique NFT-Diploma proof')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaTelegram size={24} />
                  <span className="ml-2">Telegram</span>
                </a>
                <a
                  href={`mailto:?subject=Check%20out%20my%20unique%20NFT-Diploma%20proof&body=${encodeURIComponent('Check out my unique NFT-Diploma proof: ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaEnvelope size={24} />
                  <span className="ml-2">Email</span>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}&title=Check%20out%20my%20unique%20NFT-Diploma%20proof`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaLinkedin size={24} />
                  <span className="ml-2">LinkedIn</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialMedias;
