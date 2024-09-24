import React from 'react';

function ContactLink({ icon, text, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-1 shrink gap-3 items-center px-3 py-1 h-full bg-white rounded-lg border border-blue-100 border-solid cursor-pointer pointer-events-auto basis-0">
      <div className="flex gap-2 justify-center items-center self-stretch my-auto w-[46px]">
        <img loading="lazy" src={icon} alt="" className="object-contain self-stretch my-auto aspect-square w-[26px]" />
      </div>
      <div className="flex-1 shrink self-stretch my-auto text-xs font-bold text-blue-950">
        {text}
      </div>
    </a>
  );
}

export default ContactLink;