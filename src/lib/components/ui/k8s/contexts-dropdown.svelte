<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { sleep } from '$lib/utils';
	import type { Selected } from 'bits-ui';
	import { RefreshCcw } from 'lucide-svelte';

	export let contexts;
	let loading = false;
	let selected: Selected<string> | undefined;

	$: (selected = getSelectedContextSelectObject()), contexts;

	const switchContext = async (newContext: Selected<string>): Promise<void> => {
		loading = true;
		await sleep(1000);
		console.log(`Switching to context: ${newContext.value}`);
		loading = false;
	};

	const getSelectedContextSelectObject = (): Selected<string> => {
		const selectedContext = contexts.find((context: any) => context.active)?.name;
		return {
			label: selectedContext,
			value: selectedContext
		};
	};
</script>

{#if contexts}
	<div class="absolute top-4 right-4">
		<div class="flex items-center">
			{#if loading}
				<RefreshCcw class="h-4 w-4 animate-spin mr-3 tex-secondary-foreground" />
			{/if}
			<Select.Root
				{selected}
				disabled={loading}
				onSelectedChange={(selected) => {
					if (selected) switchContext(selected);
				}}
			>
				<Select.Trigger class="w-[300px]">
					<Select.Value placeholder="Select a context" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						<Select.Label>Contexts</Select.Label>
						{#each contexts as context}
							<Select.Item value={context.name} label={context.name}>
								{context.name}
							</Select.Item>
						{/each}
					</Select.Group>
				</Select.Content>
				<Select.Input name="selectedContext" />
			</Select.Root>
		</div>
	</div>
{/if}
