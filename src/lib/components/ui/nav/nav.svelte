<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import ThemeToggle from '$lib/components/ui/nav/toggle.svelte';
	import { Sun, CircleHelp, FileClock, Github, Database, Home, Telescope } from 'lucide-svelte';

	const navbarItemSections = [
		[
			{
				name: 'Home',
				icon: Home,
				link: '/'
			},
			{
				name: 'K8s',
				icon: Telescope,
				link: '/k8s'
			},
			{
				name: 'Database',
				icon: Database,
				link: '/db'
			},
			{
				name: 'Logs',
				icon: FileClock,
				link: '/logs'
			}
		],
		[
			{
				name: 'Help',
				icon: CircleHelp,
				link: '/help'
			},
			{
				name: 'Github',
				icon: Github,
				link: 'https://github.com/aritra1999/k8su'
			},
			{
				name: 'Theme Toggle',
				icon: Sun,
				link: ''
			}
		]
	];

	const isSelected = (link: string) => {
		const activeRoute = $page.url.pathname.split('/');
		return activeRoute.pop() === link.slice(1);
	};
</script>

<nav class="h-screen w-16">
	<div class="flex h-full flex-col justify-between py-4 border-r">
		{#key $page.url.pathname}
			{#each navbarItemSections as navbarItems}
				<ul class="space-y-4">
					{#each navbarItems as navbarItem}
						<li class="flex flex-col items-center">
							{#if navbarItem.name === 'Theme Toggle'}
								<ThemeToggle />
							{:else}
								<Button
									variant={isSelected(navbarItem.link) ? 'default' : 'ghost'}
									size="icon"
									href={navbarItem.link}
								>
									<svelte:component this={navbarItem.icon} class="w-4 h-4" />
								</Button>
							{/if}
						</li>
					{/each}
				</ul>
			{/each}
		{/key}
	</div>
</nav>
