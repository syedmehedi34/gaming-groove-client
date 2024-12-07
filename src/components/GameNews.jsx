import { FaNewspaper } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const GameNews = () => {
  const newsItems = [
    {
      title: "Starfield Expands with New DLC",
      date: "2024-12-05",
      summary:
        "The latest update for Starfield introduces new quests, planets, and features. Learn more about the exciting changes!",
      link: "/news/starfield-dlc",
      imgSrc:
        "https://i.ytimg.com/vi/EbxaVRhRdLA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0WzDvHv85yyS_1LtcolT3mWB_Hw",
    },
    {
      title: "Cyberpunk 2077 Update 1.6 Released",
      date: "2024-12-03",
      summary:
        "Cyberpunk 2077 has received another major patch with bug fixes, new content, and performance improvements.",
      link: "/news/cyberpunk-update",
      imgSrc:
        "https://techecholabs.com/wp-content/uploads/2024/06/image_search_1718629067993-1024x576.jpg.webp",
    },
    {
      title: "Hogwarts Legacy New Features Coming Soon",
      date: "2024-12-01",
      summary:
        "Fans of Hogwarts Legacy are in for a treat with new features arriving soon in the next patch. Get ready for more magical adventures.",
      link: "/news/hogwarts-legacy-update",
      imgSrc:
        "https://gamefragger.com/images/articles/banners/hogwarts-legacy-definitive-edition-reportedly-in-development-with-tentative-2025-launch-ab26758.jpg",
    },
  ];

  return (
    <section className="py-16 mb-20 drop-shadow-md bg-sky-50 rounded-3xl dark:bg-dark/80 dark:border dark:border-white/25">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-fit mx-auto mb-5">
          <h2 className="text-3xl font-extrabold text-gray-700 mb-8 pb-1 text-center partial-underline dark:text-white">
            Game News and Updates
          </h2>
        </div>

        <div className="space-y-8">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/3">
                <img
                  src={news.imgSrc}
                  alt={news.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md dark:border border-white/25"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-white">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 dark:text-white/70">
                  {new Date(news.date).toLocaleDateString()}
                </p>
                <p className="text-base mb-4 text-gray-600 dark:text-white/70">
                  {news.summary}
                </p>
                <p
                  href={news.link}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read More</span>
                  <MdArrowOutward />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-lg dark:text-white/60">
            <FaNewspaper className="mr-2" />
            Stay updated with the latest news and updates from the gaming world!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameNews;
