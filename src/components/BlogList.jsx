
export default function BlogList({ movies }) {


  return (
    <div className="p-5 grid grid-cols-4 gap-5">

      {movies.map((movie) => {
        return <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

        </div>
      })}

    </div>
  )
}
