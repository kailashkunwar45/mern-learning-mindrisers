import { useNavigate } from "react-router";
import { baseUrl } from "../../app/apiUrl.js";
import { useGetProductsQuery } from "./productApi.js"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";

export default function ProductList() {
  const nav = useNavigate();
  const { isLoading, error, data } = useGetProductsQuery();
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-red-500">{error.data}</h1>

  return (
    <div className="grid grid-cols-4 px-10 gap-3">
      {data && data.products.map((product) => {
        return <Card key={product._id} className="mt-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={`${baseUrl}/${product.image}`}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <div className="flex justify-between">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {product.title}
              </Typography>
              <p>Rs.{product.price}</p>
            </div>
            <Rating readonly value={product.rating} />
            <p className="line-clamp-3">
              {product.description}
            </p>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={() => nav(`/product/${product._id}`)}
            >View Detail</Button>
          </CardFooter>
        </Card>
      })}

    </div>
  )
}
