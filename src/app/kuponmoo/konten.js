export default function Example() {
  return (
    <div>
      <h5 className="font-sans font-bold text cyan-600 text-xl my-6">Riwayat Kupon MOO</h5>
      <section className="mt-8 flex overflow-hidden flex-col justify-center p-16 mx-auto text-center rounded-3xl border border-white border-solid shadow-2xl max-w-[590px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91bc2f1548acf9d66ac9e6ccfdcecd308fa57cfbfca80008a345f40aa343fad?placeholderIfAbsent=true&apiKey=8231fe4c68804446bf5f10bc2cf2eee3"
          alt="No history illustration"
          className="object-contain self-center w-60 max-w-full aspect-square"
        />
        <div className="flex flex-col items-start mt-6 w-full max-md:max-w-full">
          <h2 className="mx-auto text-3xl font-bold leading-snug text-black max-md:max-w-full">No History</h2>
          <p className="mt-2 text-lg font-medium text-black text-opacity-40 max-md:max-w-full">Looks like you don't have any review here, you can start your review</p>
        </div>
      </section>
    </div>
  );
}
