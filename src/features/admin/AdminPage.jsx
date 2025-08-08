import { useGetProductsQuery } from "../product/productApi.js"

export default function AdminPage() {

  const { isLoading, data, error } = useGetProductsQuery();

  console.log(data);
  return (
    <div>

    </div>
  )
}