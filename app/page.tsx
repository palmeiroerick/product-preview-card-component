import Image from "next/image";

const Home = () => {
  return (
    <main className="w-80 overflow-hidden rounded-xl bg-white lg:grid lg:w-[640px] lg:grid-cols-2">
      <div>
        <Image
          className="hidden lg:block"
          src="/assets/image-product-desktop.jpg"
          alt=""
          width={320}
          height={480}
        />
        <Image
          className="block lg:hidden"
          src="/assets/image-product-mobile.jpg"
          alt=""
          width={320}
          height={224}
        />
      </div>
      <div className="flex flex-col gap-3 p-6 lg:justify-between lg:p-10">
        <p className="text-sm uppercase tracking-[0.3rem] text-darkGrayishBlue">
          Perfume
        </p>
        <h1 className="font-fraunces text-3xl font-bold text-veryDarkBlue lg:text-4xl">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-sm text-darkGrayishBlue">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-4">
          <p className="font-fraunces text-3xl font-bold text-darkCyan lg:text-4xl">
            $149.99
          </p>
          <p className="text-xs text-darkGrayishBlue line-through lg:text-sm">
            $169.99
          </p>
        </div>
        <button className="hover:bg-veryDarkCyan flex h-11 items-center justify-center gap-2 rounded-lg bg-darkCyan text-sm font-bold text-white lg:h-12">
          <Image src="/assets/icon-cart.svg" alt="" width={14} height={14} />
          Add to Cart
        </button>
      </div>
    </main>
  );
};

export default Home;
