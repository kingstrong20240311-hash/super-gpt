import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.isAdmin === true;
      const isAdminPage = nextUrl.pathname.startsWith("/admin");

      if (isAdminPage) {
        if (isLoggedIn) {
          if (isAdmin) return true;
          return Response.redirect(new URL("/", nextUrl));
        }
        return false;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = !!token.isAdmin;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
