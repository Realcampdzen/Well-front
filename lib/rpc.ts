export async function callRpc<T = any>(
	method: string,
	params: Record<string, any> = {},
	authKey?: string
): Promise<T> {
	const body: any = { jsonrpc: "2.0", id: 1, method, params: { ...params } };
	if (authKey) body.params.auth_key = authKey;
	const url = process.env.BACKEND_URL;
	if (!url) throw new Error("BACKEND_URL is not set");
	const res = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
		cache: "no-store",
	});
	if (!res.ok) throw new Error(`RPC ${method} HTTP ${res.status}`);
	const json = await res.json();
	if (method !== "core__login" && json?.result?.success !== 1) {
		throw new Error(`RPC ${method} backend error`);
	}
	return json.result as T;
}


