"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError("");
		const res = await signIn("credentials", {
			login,
			password,
			redirect: false,
		});
		if (res?.ok) {
			router.push("/dashboard/profile");
		} else {
			setError("Неверный логин или пароль");
		}
	}

	return (
		<div className="mx-auto max-w-sm py-10">
			<h1 className="mb-4 text-xl font-semibold">Вход</h1>
			<form onSubmit={onSubmit} className="space-y-3">
				<input className="w-full rounded border px-3 py-2" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
				<input className="w-full rounded border px-3 py-2" placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				{error && <div className="text-sm text-red-600">{error}</div>}
				<button className="w-full rounded bg-black px-3 py-2 text-white">Войти</button>
			</form>
		</div>
	);
}


