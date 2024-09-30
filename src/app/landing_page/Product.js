export default function Example() {
  return (
    <div className="bg-white py-4 sm:py-4">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900"> Rangkaian Produk Kami</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img alt="Reform" src="./logo/anlene.png" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
          <img alt="Tuple" src="./logo/anmum.png" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
          <img alt="SavvyCal" src="./logo/boneto.png" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
          <img alt="Statamic" src="./logo/anchor.png" width={158} height={48} className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
        </div>
      </div>
    </div>
  );
}
