

import {
  Button,
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addTask } from "./taskSlice"; // fixed import (TaskSlice → taskSlice)
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom"; // fixed import from react-router-dom

export const valSchema = Yup.object({
  title: Yup.string().min(3).max(100).required("Task title is required"),
  description: Yup.string().min(10).max(200).required("Description is required"),
  priority: Yup.string().required("Priority is required"),
  tags: Yup.array().min(1, "Select at least one tag").required(),
  status: Yup.string().required("Select task status"),
  deadline: Yup.date().required("Deadline is required"),
});

export default function TasksForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className="p-5">
      <Formik
        initialValues={{
          title: "",
          description: "",
          priority: "",
          tags: [],
          status: "",
          deadline: "",
        }}
        onSubmit={(val, { resetForm }) => {
          dispatch(addTask({ ...val, id: nanoid() }));
          nav(-1);
        }}
        validationSchema={valSchema}
      >
        {({ handleChange, setFieldValue, handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className="max-w-[400px] space-y-5">

            {/* Task Title */}
            <div>
              <Input
                onChange={handleChange}
                value={values.title}
                label="Task Title"
                name="title"
              />
              {errors.title && touched.title && <h1 className="text-pink-500">{errors.title}</h1>}
            </div>

            {/* Description */}
            <div>
              <Textarea
                label="Description"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
              {errors.description && touched.description && (
                <h1 className="text-pink-500">{errors.description}</h1>
              )}
            </div>

            {/* Tags */}
            <div>
              <Typography>Select Tags</Typography>
              {["work", "personal", "urgent"].map((tag) => (
                <Checkbox
                  key={tag}
                  label={tag}
                  value={tag}
                  name="tags"
                  checked={values.tags.includes(tag)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    if (checked) {
                      setFieldValue("tags", [...values.tags, tag]);
                    } else {
                      setFieldValue("tags", values.tags.filter((t) => t !== tag));
                    }
                  }}
                />
              ))}
              {errors.tags && touched.tags && (
                <h1 className="text-pink-500">{errors.tags}</h1>
              )}
            </div>

            {/* Priority */}
            <div>
              <Typography>Select Priority</Typography>
              <Radio
                onChange={handleChange}
                label="Low"
                value="low"
                color="green"
                name="priority"
                checked={values.priority === "low"}
              />
              <Radio
                onChange={handleChange}
                label="Medium"
                value="medium"
                color="orange"
                name="priority"
                checked={values.priority === "medium"}
              />
              <Radio
                onChange={handleChange}
                label="High"
                value="high"
                color="red"
                name="priority"
                checked={values.priority === "high"}
              />
              {errors.priority && touched.priority && (
                <h1 className="text-pink-500">{errors.priority}</h1>
              )}
            </div>

            {/* Status */}
            <div>
              <Select
                onChange={(e) => setFieldValue("status", e)}
                name="status"
                label="Select Status"
                value={values.status}
              >
                <Option value="pending">Pending</Option>
                <Option value="in-progress">In Progress</Option>
                <Option value="completed">Completed</Option>
              </Select>
              {errors.status && touched.status && (
                <h1 className="text-pink-500">{errors.status}</h1>
              )}
            </div>

            {/* Deadline */}
            <div>
              <Input
                type="date"
                label="Deadline"
                name="deadline"
                onChange={handleChange}
                value={values.deadline}
              />
              {errors.deadline && touched.deadline && (
                <h1 className="text-pink-500">{errors.deadline}</h1>
              )}
            </div>

            <Button type="submit">Create Task</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
