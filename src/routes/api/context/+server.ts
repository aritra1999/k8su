import { k8sClient } from '$lib/k8s';
import { json } from '@sveltejs/kit';

export async function GET() {
	const contexts = k8sClient.getContexts();
	const currentContext = k8sClient.getCurrentContext();
	const contextResponse = contexts.map((context) => {
		return {
			name: context.name,
			active: context.name === currentContext
		};
	});
	return json(contextResponse);
}
