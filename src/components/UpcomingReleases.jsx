import { FaCalendarAlt } from "react-icons/fa";

const UpcomingReleases = () => {
  const upcomingGames = [
    {
      title: "Starfield",
      releaseDate: "2024-12-15",
      imgSrc: "https://i.ibb.co.com/XxzV3zv/3-pikabo.jpg",
      gameLink: "/games/starfield",
    },
    {
      title: "Cyberpunk 2077: Phantom Liberty",
      releaseDate: "2024-12-22",
      imgSrc: "https://i.ibb.co.com/XxzV3zv/3-pikabo.jpg",
      gameLink: "/games/cyberpunk-phantom-liberty",
    },
    {
      title: "Hogwarts Legacy DLC",
      releaseDate: "2025-01-10",
      imgSrc: "https://i.ibb.co.com/XxzV3zv/3-pikabo.jpg",
      gameLink: "/games/hogwarts-legacy-dlc",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Upcoming Game Releases
        </h2>

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
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">{game.title}</h3>
                <p className="mt-2 text-lg">
                  {new Date(game.releaseDate).toLocaleDateString()}
                </p>
                <a
                  href={game.gameLink}
                  className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-lg">
            <FaCalendarAlt className="mr-2" />
            Stay updated with the latest game releases!
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingReleases;
