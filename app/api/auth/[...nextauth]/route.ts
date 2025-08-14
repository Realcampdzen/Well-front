import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { callRpc } from "@/lib/rpc";

const handler = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				login: { label: "Login", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(creds) {
				if (!creds?.login || !creds?.password) return null;
				const res = await callRpc("core__login", {
					login: creds.login,
					password: creds.password,
					remember: "1",
					system: "2",
				});
				if (res?.success === 1) {
					return { id: "user", auth_key: res.auth_key, user_data: res.user_data } as any;
				}
				return null;
			},
		}),
	],
	session: { strategy: "jwt" },
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.auth_key = (user as any).auth_key;
				token.user_data = (user as any).user_data;
			}
			return token;
		},
		async session({ session, token }) {
			(session as any).auth_key = (token as any).auth_key;
			(session as any).user_data = (token as any).user_data;
			return session;
		},
	},
});

export { handler as GET, handler as POST };


