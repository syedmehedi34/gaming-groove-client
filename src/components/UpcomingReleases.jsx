import { FaCalendarAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const UpcomingReleases = () => {
  const upcomingGames = [
    {
      title: "Starfield",
      releaseDate: "2024-12-15",
      imgSrc:
        "https://i.ytimg.com/vi/EbxaVRhRdLA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0WzDvHv85yyS_1LtcolT3mWB_Hw",
      gameLink: "/games/starfield",
    },
    {
      title: "Wondered",
      releaseDate: "2024-12-22",
      imgSrc:
        "https://techecholabs.com/wp-content/uploads/2024/06/image_search_1718629067993-1024x576.jpg.webp",
      gameLink: "/games/cyberpunk-phantom-liberty",
    },
    {
      title: "Hogwarts Legacy",
      releaseDate: "2025-01-10",
      imgSrc:
        "https://gamefragger.com/images/articles/banners/hogwarts-legacy-definitive-edition-reportedly-in-development-with-tentative-2025-launch-ab26758.jpg",
      gameLink: "/games/hogwarts-legacy-dlc",
    },
  ];

  return (
    <section className="relative py-16 bg-image bg-blend-darken mb-20 rounded-2xl">
      {/* Dark Overlay */}
      <div className="absolute inset-0 dark:bg-dark dark:bg-opacity-80 z-0 rounded-2lg"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="w-fit mx-auto mb-5">
          <h2 className="text-3xl font-bold mb-8 text-center pb-1 partial-underline dark:text-white">
            Upcoming Game Releases
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingGames.map((game, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={game.imgSrc}
                alt={game.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-5">
                <h3 className="text-xl font-extrabold text-white ">
                  {game.title}
                </h3>
                <p className="text-lg text-white font-extrabold">
                  {new Date(game.releaseDate).toLocaleDateString()}
                </p>
                <div>
                  <p className="mt-4 btn btn-accent font-extrabold hover:bg-blue-600 rounded-lg">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="items-center justify-center text-lg">
            <div>
              <p className="text-2xl font-bold dark:text-white">
                Subscribe us!! ...
              </p>
            </div>

            <p className="text-blue-800 dark:text-blue-300">
              <Typewriter
                words={["Stay updated with the latest game releases!"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-1/2 lg:w-1/3"
            />
            <button className="text-white font-bold btn btn-primary bg-custom-gradient2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingReleases;
