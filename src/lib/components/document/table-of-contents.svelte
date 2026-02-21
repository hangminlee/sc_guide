<script lang="ts">
	import Button from '../ui/button/button.svelte';
	import { TableOfContents } from './toc.svelte.js';

	import { ChevronRight } from 'lucide-svelte';
	let toc = $state(TableOfContents.getInstance());
	
	let hasH1 = $derived(toc.headings.some(h => h.level === 1));
</script>

<div class="mb-4">
	<h5
		id="docs-on-this-page-sidebar-label"
		class="mb-3 text-sm font-semibold text-gray-800 dark:text-neutral-300"
	>
		이 페이지의 내용
	</h5>
	<ul>
		{#each toc.headings as heading}
			<li class="flex overflow-hidden"
			style="padding-left: {(heading.level - 1 - (!hasH1 ? 1 : 0)) * 1}rem">
				<Button
					variant="link"
					href="#{heading.id}"
					class="font-base text-sm text-gray-800 dark:text-neutral-300 justify-start w-full"
					title={heading.text}
				>
					{#if heading.level > 1}
						<ChevronRight class="mt-[5px] size-3.5 shrink-0" />
					{/if}
					<span class="truncate">{heading.text}</span>
				</Button>
			</li>
		{/each}
	</ul>
</div>
