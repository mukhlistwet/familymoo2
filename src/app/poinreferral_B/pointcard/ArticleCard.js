import React from "react";

const ArticleCard = ({ date, category, title, points, iconSrc }) => {
  return (
    <article className="flex flex-wrap gap-10 flex justify-between my-8">
      <div className="flex flex-wrap gap-6 justify-center items-center self-stretch my-auto min-w-[240px] w-[508px] max-md:max-w-full">
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 my-auto bg-blue-100 rounded-xl h-[72px] min-h-[72px] w-[72px]">
          <img loading="lazy" src={iconSrc} alt="" className="object-contain self-stretch my-auto w-8 aspect-square" />
        </div>
        <div className="flex flex-col self-stretch my-auto min-w-[240px]">
          <div className="flex gap-2 items-center self-start text-xs">
            <time className="self-stretch my-auto leading-none text-blue-400">{date}</time>
            <span className="gap-2.5 self-stretch p-2 my-auto leading-none text-orange-400 whitespace-nowrap bg-orange-50 rounded-lg">{category}</span>
          </div>
          <h2 className="mt-4 text-base font-semibold leading-none text-sky-900">{title}</h2>
        </div>
      </div>
      <div className="self-stretch my-auto text-lg font-semibold leading-none text-right text-green-700">+{points} Poin</div>
    </article>
  );
};

export default ArticleCard;
