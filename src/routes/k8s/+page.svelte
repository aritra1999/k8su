<script lang="ts">
	import ContextsDropdown from '$lib/components/ui/k8s/contexts-dropdown.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<div>
		<h1 class="text-2xl font-black">k8s</h1>
	</div>
	<div>
		{#await data.contexts then contexts}
			{#if contexts}
				<ContextsDropdown {contexts} />
			{/if}
		{/await}
	</div>
</section>
<section></section>
