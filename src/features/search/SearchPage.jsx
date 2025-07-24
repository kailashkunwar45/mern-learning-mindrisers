import { useSearchParams } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useSearchDrinksQuery } from "../../shared/cocktailApi";
import DrinkList from "../../components/DrinkList";

export default function SearchPage() {
  const [search, setSearchParams] = useSearchParams();

  const query = search.get('query');

  const { data, error, isLoading } = useSearchDrinksQuery(query);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.data || error.message}</h1>;

  return (
    <div>

      <SearchInput setSearchParams={setSearchParams} />

      {data && <DrinkList drinks={data.drinks} />}


    </div>
  )
}

