import React from "react";

const ArticleCard = ({ image, category, date, title, content }) => {
  return (
    <article className="flex overflow-hidden flex-col w-full rounded-2xl shadow-sm max-md:mt-8 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[592px]">
        <img loading="lazy" src={image} alt={title} className="object-contain z-10 w-full rounded-2xl aspect-[1.2] max-md:max-w-full" />
      </div>
      <div className="flex gap-2 items-start self-start mt-4 text-sm leading-loose text-stone-900">
        <span className="gap-2.5 self-stretch text-lime-900 whitespace-nowrap">{category}</span>
        <span className="gap-2.5 self-stretch whitespace-nowrap">|</span>
        <time className="gap-2.5 self-stretch">{date}</time>
      </div>
      <h3 className="overflow-hidden flex-1 shrink gap-6 self-stretch mt-4 w-full text-3xl font-bold leading-10 text-sky-900 max-md:max-w-full">{title}</h3>
      <hr className="mt-4 w-full bg-neutral-400 min-h-[1px] max-md:max-w-full" />
      <p className="mt-4 text-base leading-7 text-stone-900 max-md:max-w-full">{content}</p>
    </article>
  );
};

export default ArticleCard;
