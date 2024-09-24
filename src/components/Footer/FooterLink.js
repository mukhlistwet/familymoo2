import React from 'react';

function FooterLink({ text, isLast }) {
  return (
    <>
      <div>{text}</div>
      {!isLast && (
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/530f0d18310837c32ba85c5b26c66b84a39fb2c850b0b02ce69cbb78a3119cdc?placeholderIfAbsent=true&apiKey=701e19cb72e24032b7388498f2854e52" alt="" className="object-contain shrink-0 self-stretch w-0 aspect-[0.07] stroke-[1px] stroke-blue-100" />
      )}
    </>
  );
}

export default FooterLink;