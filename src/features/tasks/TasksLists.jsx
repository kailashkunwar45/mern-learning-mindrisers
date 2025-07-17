


import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "./TaskSlice";

export default function TasksLists() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { tasks } = useSelector((state) => state.taskSlice);

  return (
    <div className="p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {tasks.length === 0 && (
        <div className="col-span-full text-center">
          <Typography variant="h6" color="gray">
            No tasks added yet!
          </Typography>
        </div>
      )}

      {tasks.map((task) => (
        <Card key={task.id} className="shadow-lg border-l-4 border-gray-300">
          <CardBody className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <Typography variant="h6" color="blue-gray">
                  {task.title}
                </Typography>
                <Typography variant="small" color="gray">
                  {task.description}
                </Typography>
              </div>

              <div className="flex gap-1">
                <Tooltip content="Edit">
                  <IconButton
                    variant="text"
                    size="sm"
                    onClick={() => nav(`/update-user/${task.id}`)}
                  >
                    <PencilIcon className="h-5 w-5 text-blue-500" />
                  </IconButton>
                </Tooltip>
                <Tooltip content="Delete">
                  <IconButton
                    variant="text"
                    size="sm"
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Chip value={task.status} size="sm" />
              <Chip
                value={`Deadline: ${task.deadline}`}
                variant="ghost"
                size="sm"
              />
            </div>

            <div className="flex flex-wrap gap-1">
              {task.tags?.map((tag, i) => (
                <Chip key={i} value={tag} variant="ghost" size="sm" />
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
