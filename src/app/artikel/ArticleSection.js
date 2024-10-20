import React from "react";
import ArticleCard from "./ArticleCard";
import SmallArticleCard from "./SmallArticleCard";
import ArticleGrid from "./ArticleGrid";

const ArticleSection = () => {
  const mainArticle = {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/25efea7e548d36c8bc0b0f28b1cbc2388481962e5c8db18293fbb667f337fe7d?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
    category: "Anlene",
    date: "20 November 2023",
    title: "Lemak susu, baik atau buruk untuk tubuh kita?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r.....",
  };

  const smallArticles = Array(3).fill({
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/132cf2e28ec74908f98fea6e28e454a4c22a609e7d8b792f07ca3ff19fd717dc?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
    category: "Anlene",
    date: "20 November 2023",
    title: "Lemak susu, baik atau buruk untuk tubuh kita?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r.....",
  });

  const gridArticles = Array(10).fill({
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/845f015e61412d26119da9877d2ef103fc3ff2d71b7529ef1d804f39b6398ae8?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3",
    category: "Anlene",
    date: "20 November 2023",
    title: "Lemak susu, baik atau buruk untuk tubuh kita?",
  });

  return (
    <section className="flex flex-col self-center mt-20 w-full max-w-[1217px] max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-3xl font-bold text-sky-900">Artikel Terbaru</h2>
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ArticleCard {...mainArticle} />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            {smallArticles.map((article, index) => (
              <SmallArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
      <h2 className="self-start mt-24 text-3xl font-bold text-sky-900 max-md:mt-10">Judul Section</h2>
      <ArticleGrid articles={gridArticles} />
      <button className="flex gap-4 items-center self-end p-5 mt-7 bg-sky-300 h-[77px] rounded-[1604.167px] w-[77px] max-md:mr-0.5" aria-label="Scroll to top">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b2fc279f85c1fb1812bf1f15183a067dd832bcdb99f80c7b215ecdfefab33c4?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt=""
          className="object-contain aspect-square w-[39px]"
        />
      </button>
    </section>
  );
};

export default ArticleSection;
