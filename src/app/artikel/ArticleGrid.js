import React from "react";

const ArticleGrid = ({ articles }) => {
  return (
    <div className="mt-7 w-full max-md:mr-2 max-md:max-w-full">
      <div className="flex flex-wrap gap-5">
        {articles.map((article, index) => (
          <div key={index} className="max-md:w-full">
            <article className="flex flex-wrap gap-6 justify-center items-center p-6 max-md:px-5 max-md:mt-10">
              <div className="flex flex-col self-stretch my-auto w-60">
                <img loading="lazy" src={article.image} alt={article.title} className="object-contain w-full rounded-2xl aspect-[1.5]" />
              </div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[274px]">
                <div className="flex gap-2 items-start self-start text-xs leading-6 text-stone-900">
                  <span className="gap-2.5 self-stretch text-lime-900 whitespace-nowrap">{article.category}</span>
                  <span className="gap-2.5 self-stretch whitespace-nowrap">|</span>
                  <time className="gap-2.5 self-stretch">{article.date}</time>
                </div>
                <hr className="mt-2 max-w-full bg-neutral-400 min-h-[1px] w-[274px]" />
                <h3 className="overflow-hidden gap-6 self-stretch mt-2 max-w-full text-2xl font-semibold leading-8 text-sky-900 w-[274px]">{article.title}</h3>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
