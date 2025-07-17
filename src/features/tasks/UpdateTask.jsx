






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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { valSchema } from "./TasksForm";
import { updateTask } from "./TaskSlice";

export default function UpdateTask() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { tasks } = useSelector((state) => state.taskSlice);
  const task = tasks.find((t) => t.id === id);

  if (!task) return <Typography className="p-5">Task not found!</Typography>;

  return (
    <div className="p-5">
      <Formik
        initialValues={{
          title: task.title,
          description: task.description,
          priority: task.priority,
          tags: task.tags,
          status: task.status,
          deadline: task.deadline,
        }}
        validationSchema={valSchema}
        onSubmit={(val) => {
          dispatch(updateTask({ ...val, id }));
          nav(-1);
        }}
      >
        {({ handleChange, setFieldValue, handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className="max-w-[350px] space-y-5">

            <Input label="Title" name="title" value={values.title} onChange={handleChange} />
            {errors.title && touched.title && <h1 className="text-pink-500">{errors.title}</h1>}

            <Textarea label="Description" name="description" value={values.description} onChange={handleChange} />
            {errors.description && touched.description && <h1 className="text-pink-500">{errors.description}</h1>}

            <Typography>Tags</Typography>
            {["work", "personal", "urgent"].map((tag) => (
              <Checkbox
                key={tag}
                label={tag}
                name="tags"
                value={tag}
                checked={values.tags.includes(tag)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFieldValue(
                    "tags",
                    checked ? [...values.tags, tag] : values.tags.filter((t) => t !== tag)
                  );
                }}
              />
            ))}
            {errors.tags && touched.tags && <h1 className="text-pink-500">{errors.tags}</h1>}

            <Typography>Priority</Typography>
            {["low", "medium", "high"].map((p) => (
              <Radio
                key={p}
                label={p.charAt(0).toUpperCase() + p.slice(1)}
                name="priority"
                value={p}
                color={p === "low" ? "green" : p === "medium" ? "orange" : "red"}
                checked={values.priority === p}
                onChange={handleChange}
              />
            ))}
            {errors.priority && touched.priority && <h1 className="text-pink-500">{errors.priority}</h1>}

            <Select
              label="Status"
              name="status"
              value={values.status}
              onChange={(e) => setFieldValue("status", e)}
            >
              <Option value="pending">Pending</Option>
              <Option value="in-progress">In Progress</Option>
              <Option value="completed">Completed</Option>
            </Select>
            {errors.status && touched.status && <h1 className="text-pink-500">{errors.status}</h1>}

            <Input
              type="date"
              label="Deadline"
              name="deadline"
              value={values.deadline}
              onChange={handleChange}
            />
            {errors.deadline && touched.deadline && <h1 className="text-pink-500">{errors.deadline}</h1>}

            <Button type="submit">Update Task</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
