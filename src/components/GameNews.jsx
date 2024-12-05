import { FaNewspaper } from "react-icons/fa";

const GameNews = () => {
  const newsItems = [
    {
      title: "Starfield Expands with New DLC",
      date: "2024-12-05",
      summary:
        "The latest update for Starfield introduces new quests, planets, and features. Learn more about the exciting changes!",
      link: "/news/starfield-dlc",
    },
    {
      title: "Cyberpunk 2077 Update 1.6 Released",
      date: "2024-12-03",
      summary:
        "Cyberpunk 2077 has received another major patch with bug fixes, new content, and performance improvements.",
      link: "/news/cyberpunk-update",
    },
    {
      title: "Hogwarts Legacy New Features Coming Soon",
      date: "2024-12-01",
      summary:
        "Fans of Hogwarts Legacy are in for a treat with new features arriving soon in the next patch. Get ready for more magical adventures.",
      link: "/news/hogwarts-legacy-update",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-800 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Game News and Updates
        </h2>

        <div className="space-y-8">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/3">
                <img
                  src="https://example.com/news-image.jpg"
                  alt={news.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {new Date(news.date).toLocaleDateString()}
                </p>
                <p className="text-base mb-4">{news.summary}</p>
                <a
                  href={news.link}
                  className="text-blue-200 hover:text-blue-300 text-lg font-semibold"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-lg">
            <FaNewspaper className="mr-2" />
            Stay updated with the latest news and updates from the gaming world!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameNews;
