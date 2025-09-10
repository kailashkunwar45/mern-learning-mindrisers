import React from "react";
import { useParams } from "react-router";
import { useGetOrderQuery } from "./orderApi";
import { baseUrl } from "../../app/apiUrl.js";

export default function OrderDetail() {

  const { id } = useParams();
  const { isLoading, error, data } = useGetOrderQuery(id);

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-red-500">{error.data}</h1>
  console.log(data);

  return <div className="p-5">

    <h1>OrderId: {data._id}</h1>
    <p>CreatedAt: {data.createdAt}</p>


    {data.products.map((product) => {
      return (
        <div key={product.id} className="flex gap-5 items-center my-5">
          <div>
            <img className="h-[200px]" src={`${baseUrl}/${product.image}`} alt="" />

          </div>
          <div className="space-y-3">
            <h1>{product.title}</h1>
            <p>Qty: {product.qty}</p>
            <p>Price: {product.price}</p>
          </div>

        </div>
      );
    })}

    <h1>Total Amount: Rs.{data.totalAmount}</h1>





  </div>;
}