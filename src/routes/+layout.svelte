<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/ui/nav/nav.svelte';
</script>

<ModeWatcher />
<main class="flex">
	<Nav />
	<section class="h-screen w-[calc(100vw-4rem)] p-4">
		<slot />
	</section>
</main>
