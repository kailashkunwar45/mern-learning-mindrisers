import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useRemoveProductMutation } from "../product/productApi.js";
import toast from "react-hot-toast";

export default function RemoveProduct({ id }) {
  const [removeProduct, { isLoading }] = useRemoveProductMutation();
  const { user } = useSelector((state) => state.userSlice);

  const handeleRemove = async () => {
    try {
      await removeProduct({ id, token: user.token }).unwrap();
      toast.success("Product removed successfully");
    } catch (err) {
      toast.error(err.data.message);
    }
  }

  return (
    <div>
      <Button
        onClick={handeleRemove}
        loading={isLoading}
        size="sm" className="px-3" color="pink">
        <i className="fas fa-trash" />
      </Button>
    </div>
  )
}