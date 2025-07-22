

import BlogList from "../../components/BlogList";
import { useGetTopRatedQuery } from "../../shared/movieApi";

export default function TopRated() {
  const { data, error, isLoading } = useGetTopRatedQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.data || error.message}</h1>;

  return (
    <div>

      {data && <BlogList movies={data.results} />}

    </div>
  )
}
