/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Anlene",
    href: "#",
    imageSrc: "produk1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "",
  },
  {
    id: 2,
    name: "Anlene",
    href: "#",
    imageSrc: "produk2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "",
  },

  // More products...
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Anlene Product</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img alt={product.imageAlt} src={product.imageSrc} className="h-full w-full object-none object-center lg:h-full lg:w-full" />
                <h3 className="text-lg font-bold text-center text-cyan-800 font-sans">{product.name}</h3>
                <p className="text-gray-600  text-sm font-sans text-center">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
