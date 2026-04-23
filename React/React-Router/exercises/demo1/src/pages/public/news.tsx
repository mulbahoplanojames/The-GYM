import { Link } from "react-router-dom";
import { useFetchNews } from "../../hook/usefetch-news";
import type { News } from "../../types/types";

export default function News() {
  const { news, loading, error } = useFetchNews();
  //   console.log(news);
  return (
    <div className="container mx-auto px-2">
      {loading ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          {Array.from({ length: 12 }).map((item) => (
            <>
              <LoadingSkeletonCard />
            </>
          ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          {news.map((item: News) => (
            <div key={item.id} className="shadow-lg p-4">
              <img
                src={""}
                alt={item.sourceTitle}
                className="h-48 w-full bg-slate-200 mb-4"
              />
              <h2 className="text-2xl font-bold pb-2 ">{item.title}</h2>
              <p className="text-gray-600">{item.emotionTag}</p>
              <p className="text-gray-600 line-clamp-5">{item.summary}</p>
              <Link
                to={`/news/${item.slug}`}
                className="px-5 py-2 bg-black text-white mt-3 block w-32 "
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const LoadingSkeletonCard = () => {
  return (
    <div className="shadow-lg p-4">
      <div className="h-48 bg-gray-100 rounded-4xl mb-2"></div>
      <div className="h-24 bg-gray-100 rounded-4xl mb-2"></div>
      <div className="h-12 bg-gray-100 rounded-4xl mb-2"></div>
      <div className="h-12 bg-gray-100 rounded-4xl mb-2"></div>
    </div>
  );
};
