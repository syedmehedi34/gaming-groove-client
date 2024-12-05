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
            <h1 className="text-3xl font-bold mb-4 ">BattleZone Royale</h1>
            <p className="text-gray-600">
              Enter the battlegrounds where survival is the only rule. Outplay,
              outlast, and claim victory against the odds.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://www.levelinfinite.com/wp-content/uploads/2024/02/pubg-mobile-game-image-5.jpg"
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
              The White Wolf Chronicles
            </h1>
            <p className="text-gray-600">
              Step into the boots of Geralt of Rivia, a monster hunter
              navigating a world of treachery, magic, and untold dangers.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://miro.medium.com/v2/resize:fit:2000/0*0bukiqD7QkSm1La_"
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
              Legends of the Forgotten Realms
            </h1>
            <p className="text-gray-600">
              Dive into a realm of magic, mystery, and choice. Shape your story
              in a world where every decision leaves its mark.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.1920x1080.jpg?t=1730212926"
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
