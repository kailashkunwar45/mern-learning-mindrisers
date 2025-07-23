

import { useParams, useSearchParams } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useGetSearchMovieQuery } from "../../shared/movieApi";
import BlogList from "../../components/BlogList";

export default function SearchPage() {
  const [search, setSearchParams] = useSearchParams();
  const query = search.get('query');


  const { data, error, isLoading } = useGetSearchMovieQuery(query);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.data || error.message}</h1>;
  console.log(data);
  return (
    <div>


      <SearchInput setSearchParams={setSearchParams} />

      {data && <BlogList movies={data.results} />}


    </div>
  )
}