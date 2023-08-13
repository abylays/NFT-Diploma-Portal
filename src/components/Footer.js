import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import '../styling/footer.css'; // Import the CSS file
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        {/* Rest of the Footer Content */}  
        <div className="flex flex-wrap items-start justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Контактная информация</h4>
            <ul className="flex flex-col">
              {/* Contact info items */}
              <li>Приемная комиссия</li>
              <li>Офис регистратор, Тіркеуші офис,</li>
              <li> Office Registrar</li>
              <li>
                <a
                  href="https://narxoz.edu.kz/contact-details/#adress"
                  className="text-red-400  hover:text-blue-600"
                  target="_blank" // Opens link in a new tab
                  rel="noopener noreferrer" // Security enhancement for target="_blank"
                >
                  ул. Жандосова, 55 г. Алматы, Казахстан, 050035
                </a>
              </li>
            </ul>
          </div>
          {/* About University */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">О университете</h4>
            <ul className="flex flex-col">
              {/* About university items */}
              <li>
                <a
                  href="https://narxoz.edu.kz/"
                  className="text-gray-300 hover:text-white"
                >
                  Миссия и ценности
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/about-us/history/"
                  className="text-gray-300 hover:text-white"
                >
                  История
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/development-strategy"
                  className="text-gray-300 hover:text-white"
                >
                  Стратегия развития
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/vacancies/"
                  className="text-gray-300 hover:text-white"
                >
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          {/* Admission */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Поступление</h4>
            <ul className="flex flex-col">
              {/* Admission items */}
              <li>
                <a
                  href="https://narxoz.edu.kz/admission/specificity/bachelor/"
                  className="text-gray-300 hover:text-white whitespace-nowrap" // Added whitespace-nowrap class
                >
                  Бакалавриат
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/admission/specificity/master/"
                  className="text-gray-300 hover:text-white whitespace-nowrap" // Added whitespace-nowrap class
                >
                  Магистратура
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/doktorantura/"
                  className="text-gray-300 hover:text-white whitespace-nowrap" // Added whitespace-nowrap class
                >
                  Докторантура
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/distance-learning/"
                  className="text-gray-300 hover:text-white whitespace-nowrap" // Added whitespace-nowrap class
                >
                  Дистанционное обучение
                </a>
              </li>
            </ul>
          </div>

          {/* Schools */}
          <div className="w-full md:w-1/5">
            <h4 className="text-lg font-bold mb-2">Школы</h4>
            <ul className="flex flex-col">
              {/* Schools items */}
              <li>
                <a
                  href="https://narxoz.edu.kz/school-of-law-and-public-administration/"
                  className="text-gray-300 hover:text-white whitespace-nowrap" // Added whitespace-nowrap class
                >
                  Школа права и государственного управления
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/school-of-digital-technologies/"
                  className="text-gray-300 hover:text-white whitespace-nowrap" // Added whitespace-nowrap class
                >
                  Школа цифровых технологий
                </a>
              </li>
              <li>
                <a
                  href="https://narxoz.edu.kz/school-of-economics-and-management/"
                  className="text-gray-300 hover:text-white whitespace-nowrap" // Added whitespace-nowrap class
                >
                  Школа экономики и менеджмента
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Social Icons */}
        <div className="flex items-center justify-center mt-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/2/2e/Narxoz_University_Logo_2020.png"
            alt="Narxoz University"
            className="h-12 mr-4"
          />
          <div className="flex items-center">
            <FaInstagram
              className="text-pink-700 text-1xl mx-2 transition-colors duration-300 hover:text-blue-600"
            />
            <FaFacebook
              className="text-blue-900 text-1xl mx-2 transition-colors duration-300 hover:text-blue-600"
            />
            <FaWhatsapp
              className="text-green-600 text-1xl mx-2 transition-colors duration-300 hover:text-blue-600"
            />
            <FaYoutube
              className="text-red-600 text-1xl mx-2 transition-colors duration-300 hover:text-blue-600"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-800 my-8" />
        <div className="text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Narxoz University. All rights reserved.
          <br />
          Created and maintained by Crypto Logic.
          <br className="text-bold text-size-lg" />44
        </div>
      </div>
    </footer>
  );
};

export default Footer;
