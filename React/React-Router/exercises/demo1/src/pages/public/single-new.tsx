import { Link, useParams } from "react-router-dom";
import { useFetchSingleNew } from "../../hook/usefetch-news";
import { ArrowBigLeft } from "lucide-react";

export default function SingleNew() {
  const { slug } = useParams();
  const params = useParams();
  console.log("Params", params);
  const { singleNew, loading, error } = useFetchSingleNew(slug);
  //   console.log(singleNew);

  return (
    <div className="py-8">
      {loading ? (
        <>
          <SingleNewsSkeleton />
        </>
      ) : error ? (
        <>
          <p>{error}</p>
        </>
      ) : (
        <>
          <div className="container mx-auto px-2">
            <Link to={"/news"}>
              <ArrowBigLeft />
            </Link>
            <div className="h-110 bg-slate-200 mb-6 mt-4"></div>
            <h1 className="text-2xl pb-3 font-bold">{singleNew?.title}</h1>
            <p className="pb-4">{singleNew?.summary}</p>
            <p className="pb-4">{singleNew?.relevanceReasons}</p>
          </div>
        </>
      )}
    </div>
  );
}

const SingleNewsSkeleton = () => {
  return (
    <div className="container mx-auto px-2 ">
      <div className="h-110 bg-slate-100 mb-6"></div>
      <div className="h-10 bg-slate-100"></div>
    </div>
  );
};
