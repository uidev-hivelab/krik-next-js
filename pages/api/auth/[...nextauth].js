import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
// import Auth0Provider from "next-auth/providers/auth0";
// import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb.ts";
// import User from "../../../models/User";
import bcrypt from "bcrypt";
import db from "../../../utils/db";
db.connectDb();
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const name = credentials.name;
        const password = credentials.password;

        // const user = { name: credentials.name, password: credentials.password };
        // console.log(user);
        if (name) {
          return SignInUser({ name, password });
        } else {
          throw new Error("Tài khoản không tồn tại");
        }
      },
    }),
    // OAuth authentication providers...
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
});

const SignInUser = async ({ name, password }) => {
  if (!password) {
    throw new Error("Vui lòng điền mật khẩu");
  }
  const testPassword = await bcrypt.compare(password, user.password);
  if (!testPassword) {
    throw new Error("Tên đăng nhâp hoặc mật khẩu sai");
  }
  return user;
};
