

import BlogList from "../../components/BlogList";
import { useGetNowPlayingQuery } from "../../shared/movieApi"
import SearchInput from "../search/SearchInput";


export default function NowPlaying() {
  const { data, error, isLoading } = useGetNowPlayingQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.data || error.message}</h1>;

  return (
    <div>

      <SearchInput isNav={true} />

      {data && <BlogList movies={data.results} />}

    </div>
  )
}