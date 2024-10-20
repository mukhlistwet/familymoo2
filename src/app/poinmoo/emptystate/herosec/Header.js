import React from "react";

function Header() {
  return (
    <header className="flex absolute z-0 items-center text-sm font-semibold text-white left-[99px] top-[111px] max-sm:top-20 max-sm:left-0">
      <nav>
        <ul className="flex items-center">
          <li>
            <a href="#profile" className="gap-1 self-stretch px-3 py-2 my-auto whitespace-nowrap rounded-[34px]">
              Profil
            </a>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac6515c33def8b0ca0c5d0832415169c7a9fdd9313d9f4f57297279c558ed030?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </li>
          <li>
            <a href="#points" className="gap-1 self-stretch px-3 py-2 my-auto">
              Poin Moo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
