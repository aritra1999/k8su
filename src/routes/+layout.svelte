<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/ui/nav/nav.svelte';
	export let data;
</script>

<ModeWatcher />
<main class="flex">
	<Nav />
	<section class="h-screen w-[calc(100vw-4rem)]">
		<div class="p-4 h-screen">
			<slot />
		</div>
	</section>
</main>
