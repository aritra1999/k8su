<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/ui/nav/nav.svelte';
	import ContextsDropdown from '$lib/components/ui/k8s/contexts-dropdown.svelte';

	export let data;
</script>

<ModeWatcher />
{#await data.contexts then contexts}
	{#if contexts}
		<ContextsDropdown {contexts} />
	{/if}
{/await}

<main class="flex bg-secondary">
	<Nav />
	<section class="h-screen w-[calc(100vw-4rem)] py-2 pr-2">
		<div class="p-4 bg-background h-[calc(100vh-1rem)] rounded-lg shadow-lg">
			<slot />
		</div>
	</section>
</main>
