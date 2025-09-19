import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";

import bcrypt from "bcrypt";



export const option = {
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "password", type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        const isExist = await User.findOne({ email: credentials.email });
        if (!isExist) throw new Error("User not found");
        const pass = bcrypt.compareSync(credentials.password, isExist.password);
        if (!pass) throw new Error("Invalid password");
        return isExist;
      }
    }),

  ],
  pages: {
    signIn: '/form/login',
  }

};