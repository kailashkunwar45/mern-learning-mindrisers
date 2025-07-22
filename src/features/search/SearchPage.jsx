

import { useParams } from "react-router";
import SearchInput from "./SearchInput";
import { useGetSearchMovieQuery } from "../../shared/movieApi";
import BlogList from "../../components/BlogList";

export default function SearchPage() {
  const { query } = useParams();
  const { data, error, isLoading } = useGetSearchMovieQuery(query);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.data || error.message}</h1>;
  console.log(data);
  return (
    <div>

      <SearchInput />

      {data && <BlogList movies={data.results} />}


    </div>
  )
}