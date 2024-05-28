import { sleep } from '$lib/utils';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = false;

const mockContexts = [
	{
		name: 'aks-australiaeast-prod-bogong',
		active: false
	},
	{
		name: 'aks-brazilsouth-prod-1',
		active: false
	},
	{
		name: 'aks-canadacentral-prod-logan',
		active: false
	},
	{
		name: 'aks-eastus-prod-kilauea',
		active: false
	},
	{
		name: 'aks-germanywestcentral-prod-watzmann',
		active: false
	},
	{
		name: 'aks-switzerlandnorth-prod-matterhorn',
		active: false
	},
	{
		name: 'aks-uaenorth-prod-1',
		active: false
	},
	{
		name: 'aks-uksouth-prod-1',
		active: false
	},
	{
		name: 'aks-westeurope-prod-grossglockner',
		active: true
	},
	{
		name: 'aks-westeurope-test-dufourspitze',
		active: false
	},
	{
		name: 'kind-kind',
		active: false
	}
];

export const load = (async () => {
	// const response = await fetch('/api/context');
	// const contexts = response.json();
	await sleep(200);
	const contexts = mockContexts;
	return { contexts };
}) satisfies LayoutLoad;
