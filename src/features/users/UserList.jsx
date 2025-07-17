import { IconButton, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux"


export default function UserList() {
  const { users } = useSelector((state) => state.userSlice);

  return (
    <div className="p-5">

      {users.map((user) => {
        return <div key={user.id}>
          <Typography variant="h5">{user.username}</Typography>
          <p className="italic">{user.email}</p>
          <p>{user.country}</p>
          <p>{user.gender}</p>
          <p>{user.detail}</p>
          <div className="flex gap-6">
            {user.habits.map((habit) => {
              return <p key={habit}>{habit}</p>
            })}
          </div >
          <div className="space-x-5 mt-4">
            <IconButton size="sm">
              <i></i>
            </IconButton>

          </div>

        </div>
      })}

    </div>
  )
}
