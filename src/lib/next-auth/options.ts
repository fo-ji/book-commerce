import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';

import { GITHUB_ID, GITHUB_SECRET, NEXTAUTH_SECRET } from '@/config/constants';
import prisma from '@/lib/prisma';

export const nextAuthOptions: NextAuthOptions = {
  debug: true,
  secret: NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      // profile(profile) {
      //   console.log("Profile Github: ", profile);
      //   let userRole = "GitHub User";
      //   if (profile?.email === "shincode0712@gmail.com") {
      //     userRole = "admin";
      //   }

      //   return {
      //     id: profile.id.toString(), // 'id' を string 型に変換
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.avatar_url,
      //     role: userRole, // 追加されるカスタムプロパティ
      //     // 必要に応じて他のプロパティを追加
      //   };
      // },
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
};
