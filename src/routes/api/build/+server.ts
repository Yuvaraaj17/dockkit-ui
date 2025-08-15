// src/routes/api/build-image/+server.ts
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const body = await request.json();

	const { base_image, packages } = body;
	console.log('token', process.env.VITE_GITHUB_PAT);

	const response = await fetch(
		'https://api.github.com/repos/Yuvaraaj17/dockkit-backend/actions/workflows/build-image.yml/dispatches',
		{
			method: 'POST',
			headers: {
				// 'Authorization': `token ${env.GITHUB_PAT}`,
				'Accept': 'application/vnd.github.v3+json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				ref: 'main',
				inputs: {
					base_image,
					packages: packages.join(',') // send as comma-separated string
				}
			})
		}
	);

	if (!response.ok) {
		const err = await response.json();
		return json({ success: false, error: err }, { status: response.status });
	}

	return json({ success: true });
}
