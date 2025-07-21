

import { Button } from "@material-tailwind/react";
import { useRemoveBlogMutation } from "./blogApi";
import toast from "react-hot-toast";

export default function RemoveButton({ id }) {
  const [remove, { isLoading }] = useRemoveBlogMutation();

  const handleDelete = async () => {
    try {
      await remove(id).unwrap();
      toast.success('Blog removed successfully');
    } catch (err) {
      toast.error('Failed to remove blog. Please try again.');
    }

  }
  return (
    <Button onClick={() => handleDelete()} loading={isLoading} className="px-3" size="sm" color="pink">
      <i className="fas fa-trash" />
    </Button>
  )
}