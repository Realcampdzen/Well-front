import { getProfileData, saveReceiptEmail } from "./actions";

export default async function ProfilePage() {
	const data = await getProfileData();

	async function action(formData: FormData) {
		"use server";
		const email = String(formData.get("email") || "");
		await saveReceiptEmail(email);
	}

	return (
		<div className="mx-auto max-w-2xl py-8 space-y-4">
			<h1 className="text-xl font-semibold">Личный кабинет</h1>
			<div>Лицевой счёт: {data?.paycode}</div>
			<div>Баланс: {data?.balance}</div>
			<form action={action} className="space-y-2">
				<label className="block text-sm">Почта для чеков</label>
				<input name="email" defaultValue={data?.receipt_contact_email || ""} className="w-full rounded border px-3 py-2" />
				<button className="rounded bg-black px-3 py-2 text-white">Сохранить</button>
			</form>
		</div>
	);
}


