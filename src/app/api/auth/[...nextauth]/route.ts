import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  // @ts-ignore
  async session({ session }: any) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });

    session.user.id = sessionUser._id.toString();
    return session;
  },
  async signIn({ profile }: any) {
    try {
      await connectToDatabase();

      // Check if user exist
      const userExist = await User.findOne({
        email: profile.email,
      });

      // Create new user
      if (!userExist) {
        await User.create({
          email: profile?.email,
          username: profile?.name.replace(" ", "").toLowerCase(),
          image: profile?.picture,
        });
      }

      return true;
    } catch (error) {
      console.log("Sign in failed");
      return false;
    }
  },
});

export { handler as GET, handler as POST };
