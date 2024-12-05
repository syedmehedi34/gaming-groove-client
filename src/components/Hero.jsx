const Hero = () => {
  return (
    <div className="carousel w-full shadow-xl rounded-3xl bg-slate-50">
      {/*  page - 1 */}
      <div
        id="slide1"
        className="carousel-item relative w-full border rounded-3xl"
      >
        {/*  */}
        <div className="flex flex-col md:flex-row h-[450px] w-full">
          <div className="flex-1 flex flex-col justify-center p-6 *:text-center">
            <h1 className="text-3xl font-bold mb-4 ">
              Unlock Deals, Embrace Savings!
            </h1>
            <p className="text-gray-600">
              Save big on your favorite brands with exclusive coupons and
              discounts—completely free! Your one-stop shop for unbeatable
              savings.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/BN4yQ31/coupon-1.png"
              alt="Placeholder"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        {/*  */}

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/*  page - 1 */}

      <div
        id="slide2"
        className="carousel-item relative w-full rounded-3xl border"
      >
        <div className="flex flex-col md:flex-row  h-[450px] w-full">
          <div className="flex-1 flex flex-col justify-center p-6 *:text-center">
            <h1 className="text-3xl font-bold mb-4 ">
              Your Free Pass to Incredible Savings!
            </h1>
            <p className="text-gray-600">
              Discover the latest coupons from over 500 online shops. Shop
              smarter, save bigger, and enjoy more!
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/YhNs0Th/coupon-2.jpg"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className="carousel-item relative w-full border  rounded-3xl"
      >
        <div className="flex flex-col md:flex-row  h-[450px] w-full">
          <div className="flex-1 flex flex-col justify-center p-6 *:text-center">
            <h1 className="text-3xl font-bold mb-4 ">
              500+ Online Shops, Unlimited Discounts!
            </h1>
            <p className="text-gray-600">
              Browse a wide range of free coupons and make your online shopping
              more affordable than ever before. Start saving now!
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/SVYS7hQ/coupon-3.jpg"
              alt="Placeholder"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
