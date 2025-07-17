


import { IconButton, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "./userSlice";
import { useNavigate } from "react-router";


export default function UserList() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { users } = useSelector((state) => state.userSlice);

  return (
    <div className="p-5">

      {users.map((user, index) => {
        return <div key={user.id} className="mb-5">
          <Typography variant="h5">{user.username}</Typography>
          <p className="italic">{user.email}</p>
          <p>{user.country}</p>
          <p>{user.gender}</p>
          <p>{user.detail}</p>
          <div className="flex gap-6">
            {user.habits.map((habit) => {
              return <p key={habit}>{habit}</p>
            })}
          </div>

          <div className="space-x-5 mt-4">
            <IconButton
              onClick={() => nav(`/update-user/${user.id}`)}
              size="sm">
              <i className="fas fa-edit" />
            </IconButton>
            <IconButton
              onClick={() => dispatch(removeUser(index))}
              size="sm" color="pink">
              <i className="fas fa-trash" />
            </IconButton>
          </div>

        </div>
      })}

    </div>
  )
}