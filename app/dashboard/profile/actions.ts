"use server";
import { auth } from "next-auth";
import { callRpc } from "@/lib/rpc";

export async function getProfileData() {
	const session = await auth();
	const authKey = (session as any)?.auth_key as string | undefined;
	const res = await callRpc("core__data", {}, authKey);
	return res.user_data;
}

export async function saveReceiptEmail(email: string) {
	const session = await auth();
	const authKey = (session as any)?.auth_key as string | undefined;
	await callRpc("core__set_receipt_contact", { contact: email }, authKey);
}


