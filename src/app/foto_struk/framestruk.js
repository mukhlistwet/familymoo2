export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Kolom 1 */}
        <div className=" p-6 rounded">
          <h2 className="text-blue-950 text-lg font-bold font-sans">Foto Struk</h2>

          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 bg-sky-200 px-6 py-10">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="p-4">Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className=" md:col-span-2 p-6">
          <h2 className="text-white text-lg font-semibold">Kolom 2</h2>
          <header className="flex flex-col w-full text-black max-md:max-w-full">
            <h1 className="text-2xl font-semibold leading-none">Perolehan Total Kupon: 1 Kupon</h1>
            <p className="mt-1 text-sm font-medium leading-6">Status Validasi: Valid (xx month xxxx)</p>
          </header>
          <hr className="mt-3 w-full min-h-0 border border-solid bg-neutral-400 bg-opacity-20 border-neutral-400 border-opacity-20 max-md:max-w-full" />
          <section className="flex flex-wrap gap-10 justify-between items-center mt-3 w-full max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto text-black min-w-[240px]">
              <h2 className="text-base font-medium">Nama Toko</h2>
              <p className="flex gap-1 items-start mt-1 text-xs leading-6">
                <span>Nomor Struk (xxxxxxxx)</span>
                <span>|</span>
                <span>Tanggal Struk: xx month xxxx</span>
              </p>
            </div>
            <p className="self-stretch my-auto text-base font-medium text-sky-900">Total RpXX</p>
          </section>
        </div>
      </div>
    </div>
  );
}
