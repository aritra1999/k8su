import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = false;

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/context');
	const contexts = response.json();
	return { contexts };
}) satisfies LayoutLoad;
