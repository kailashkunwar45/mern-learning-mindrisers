import axios from "axios";

export async function generateStaticParams() {
  try {
    const response = await axios.get(
      "https://6878a22f63f24f1fdc9ec3af.mockapi.io/employees"
    );

    return response.data.map((employee) => ({
      id: employee.id,
    }));
  } catch (error) {
    console.error("Failed to fetch employees:", error.message);
    return [];
  }
}

export default async function Page({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(
      `https://6878a22f63f24f1fdc9ec3af.mockapi.io/employees/${id}`
    );

    return (
      <div className="p-5">
        <h1>{response.data.fullname}</h1>
        <p>{response.data.position}</p>
        <p>{response.data.age}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-5">
        <h1>Error fetching employee</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
