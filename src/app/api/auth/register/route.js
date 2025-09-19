import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcrypt";


export async function POST(request) {
  await dbConnect();

  const body = await request.json();

  try {
    const isExist = await User.findOne({ email: body.email });
    if (isExist) return Response.json({ message: "User already exist" }, { status: 409 });
    const hashPass = bcrypt.hashSync(body.password, 10);

    await User.create({
      email: body.email,
      password: hashPass,
      name: body.name
    });

    return Response.json({ message: "successfully registered" }, { status: 201 });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }



}