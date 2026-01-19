<!-- DocHero.svelte -->
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Clipboard, Check } from 'lucide-svelte';
	import { siteConfig } from '$lib/config';
	import { toast } from 'svelte-sonner';

	let isCopied = false;
	const npmCommand = `npm install ${siteConfig.npm}`;

	async function copyNpmCommand() {
		try {
			await navigator.clipboard.writeText(npmCommand);
			isCopied = true;
			toast.success('Copied to clipboard');

			// Reset the copied state after 2 seconds
			setTimeout(() => {
				isCopied = false;
			}, 2000);
		} catch (err) {
			toast.error('Failed to copy to clipboard');
		}
	}
</script>

<div class="relative overflow-hidden">
	<div class="relative mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
		<!-- Version badge -->
		<div class="flex justify-center">
			<span
				class="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-1 px-3 text-sm text-gray-800 transition hover:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
			>
				Version {siteConfig.version}
		</span>
		</div>

		<!-- Title -->
		<div class="mx-auto mt-5 max-w-3xl text-center">
			<h1
				class="block text-4xl font-bold text-gray-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"
			>
				{siteConfig.title}
			</h1>
		</div>

		<!-- Description -->
		<div class="mx-auto mt-5 max-w-3xl text-center">
			<p class="text-lg text-gray-600 dark:text-neutral-400">
				{siteConfig.description}
			</p>
		</div>

		<!-- Action Buttons -->
		<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
			<Button href="/docs" variant="default">
				시작하기
				<ChevronRight class="size-4" />
			</Button>

			{#if siteConfig.npm !== ''}
				<Button variant="outline" class="font-mono" onclick={copyNpmCommand}>
					{npmCommand}
					<span class="ml-2 rounded bg-gray-200 p-1 dark:bg-neutral-700">
						{#if isCopied}
							<Check class="size-4 text-green-500 transition-transform" />
						{:else}
							<Clipboard class="size-4 transition-transform hover:rotate-6" />
						{/if}
					</span>
				</Button>
			{/if}
		</div>
	</div>
</div>
