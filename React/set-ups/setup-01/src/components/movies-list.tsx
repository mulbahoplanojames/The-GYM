import React from "react";
import { movies } from "../data/movies.json";

export default function MoviesList() {
  return (
    <>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grc2 grid-cols-1 gap-4 ">
        {movies.map((movie, idx: number) => (
          <div className="border-white border p-2" key={idx}>
            <img src={movie.image} alt={movie.name} className="w-full h-64" />
            <h2 className="text-xl pt-4 pb-2">{movie.name}</h2>
            <p className="pb-3">{movie.description}</p>
            <div className="flex justify-between items-center ">
              <p>{movie.likes}</p>
              <p>{movie.yearPublished}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

//Docs:  Props simply the short form for property, is a machenicism that that use to pass Data from a parent component to
// a child component.
// props is pass from the parent component to a child component as an artribute like syntax
// props data is pass as unidirectional which means in a one way from parent to child
// props are immutable
// props help to make our code more readable, reusable and easy to use.
