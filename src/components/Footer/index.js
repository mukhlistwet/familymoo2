import React from 'react';
import ContactLink from './ContactLink';
import FooterLink from './FooterLink';

const contactLinks = [
  { icon: "waicon.png", text: "WhatsApp Official", href: "http://google.com" },
  { icon: "mfb.png", text: "Facebook Messenger", href: "http://google.com" },
  { icon: "fonterrafooter.png", text: "Careline Bebas Pulsa", href: "http://google.com" }
];

const footerLinks = [
  "Kebijakan Privasi",
  "Syarat & Ketentuan",
  "Kontak Kami",
  "Peta Situs",
  "FAQ"
];

function Footer() {
  return (
    <footer className="flex overflow-hidden flex-col justify-center items-center px-20 py-11 bg-sky-300 max-md:px-5">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-end self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <img loading="lazy" src="logofooter.png" alt="" className="object-contain shrink-0 aspect-[2.13] w-[83px]" />
            <img loading="lazy" src="logobrandfooter.png" alt="" className="object-contain aspect-[8.85] min-w-[240px] w-[391px]" />
          </div>
          <nav className="flex flex-wrap gap-3 justify-center self-stretch my-auto min-w-[240px] w-[492px] max-md:max-w-full">
            {contactLinks.map((link, index) => (
              <ContactLink key={index} {...link} />
            ))}
          </nav>
        </div>
        <address className="mt-10 text-base font-bold text-white not-italic">
          PRUDENTIAL CENTER<br />
          19TH FLOOR, KOTA KASABLANKA, JL CASABLANCA KAV 88, JAKARTA, INDONESIA, 12870
        </address>
        <div className="flex flex-wrap gap-10 justify-center items-center mt-10 w-full text-xs text-center text-white max-w-[1214px] max-md:max-w-full">
          <nav className="flex gap-3 justify-center items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} text={link} isLast={index === footerLinks.length - 1} />
            ))}
          </nav>
          <div className="self-stretch my-auto">Copyright © 2024 Fonterra</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;