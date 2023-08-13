import React, { useState } from 'react';
import nftImage from '../images/NFT.svg';
import headerBackgroundImage from '../images/Header-background.svg';
import '../styling/header.css'; // Import the CSS file

const Header = () => {
  const [language, setLanguage] = useState('Русский'); // Default language is Русский

  const handleRussianClick = () => {
    setLanguage('Русский');
    // Implement logic to switch the language to Русский
    // You can add localization code here
  };

  const handleKazakhClick = () => {
    setLanguage('Казакша');
    // Implement logic to switch the language to Казакша
    // You can add localization code here
  };

  const handleEnglishClick = () => {
    setLanguage('English');
    // Implement logic to switch the language to English
    // You can add localization code here
  };

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${headerBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'auto 100%',
      }}
    >
      <a href="/" className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/ru/2/2e/Narxoz_University_Logo_2020.png"
          alt="Narxoz University"
          className="h-24 mr-2 cursor-pointer"
        />
      </a>
      <div className="nft-image md:flex items-center justify-center">
        <img src={nftImage} alt="Graffiti NFT-Diplomas" className="h-35" />
      </div>
      <div className="language-buttons">
        <div
          className="language-button-container"
          style={{
            position: 'absolute',
            top: '30%', // Adjust the top spacing for English button
            right: '30px',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Montserrat, sans-serif', // Use primary font
            fontSize: '1.2rem', // Adjust the font size
          }}
          onClick={handleEnglishClick}
        >
          <span
            role="img"
            aria-label="English Flag"
            className="language-flag"
            style={{ marginRight: '8px' }} // Increase the space between flag and text
          >
            🇬🇧
          </span>
          <span>English</span>
        </div>
        <div
          className="language-button-container"
          style={{
            position: 'absolute',
            top: '50%', // Adjust the top spacing for Russian button
            right: '30px',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Montserrat, sans-serif', // Use primary font
            fontSize: '1.2rem', // Adjust the font size
          }}
          onClick={handleRussianClick}
        >
          <span
            role="img"
            aria-label="Russian Flag"
            className="language-flag"
            style={{ marginRight: '8px' }} // Increase the space between flag and text
          >
            🇷🇺
          </span>
          <span>Русский</span>
        </div>
        <div
          className="language-button-container"
          style={{
            position: 'absolute',
            top: '70%', // Adjust the top spacing for Kazakh button
            right: '30px',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Montserrat, sans-serif', // Use primary font
            fontSize: '1.2rem', // Adjust the font size
          }}
          onClick={handleKazakhClick}
        >
          <span
            role="img"
            aria-label="Kazakh Flag"
            className="language-flag"
            style={{ marginRight: '8px' }} // Increase the space between flag and text
          >
            🇰🇿
          </span>
          <span>Казакша</span>
        </div>
      </div>
    </header>
  );
};

export default Header;