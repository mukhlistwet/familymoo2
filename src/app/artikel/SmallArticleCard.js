import React from "react";

const SmallArticleCard = ({ image, category, date, title, content }) => {
  return (
    <article className="flex flex-wrap gap-2 items-center -mr-1 rounded-2xl max-md:max-w-full mb-2">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[266px]">
        <img loading="lazy" src={image} alt={title} className="object-contain w-full rounded-2xl aspect-[1.11]" />
      </div>
      <div className="flex flex-col self-stretch my-auto text-xs min-w-[240px] text-stone-900 w-[303px]">
        <div className="flex gap-2 items-start self-start leading-6">
          <span className="gap-2.5 self-stretch text-lime-900 whitespace-nowrap">{category}</span>
          <span className="gap-2.5 self-stretch whitespace-nowrap">|</span>
          <time className="gap-2.5 self-stretch">{date}</time>
        </div>
        <h3 className="overflow-hidden gap-2 self-stretch mt-3 max-w-full text-2xl font-semibold leading-8 text-sky-900 w-[296px]">{title}</h3>
        <hr className="mt-3 max-w-full bg-neutral-400 min-h-[1px] w-[303px]" />
        <p className="mt-3 leading-5">{content}</p>
      </div>
    </article>
  );
};

export default SmallArticleCard;
