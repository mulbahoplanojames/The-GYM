import { useEffect, useState } from "react";

export default function InfiniteEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(setData);
  }, []);

  console.log(data);

  return <div>{data.length}</div>;
}
