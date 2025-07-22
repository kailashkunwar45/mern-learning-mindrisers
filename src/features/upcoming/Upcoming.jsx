


import BlogList from "../../components/BlogList";
import { useGetUpcomingQuery } from "../../shared/movieApi";

export default function Upcoming() {
  const { data, error, isLoading } = useGetUpcomingQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.data || error.message}</h1>;

  return (
    <div>

      {data && <BlogList movies={data.results} />}

    </div>
  )
}