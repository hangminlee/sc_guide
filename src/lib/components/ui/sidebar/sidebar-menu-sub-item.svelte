<script lang="ts">
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		children,
		level,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLLIElement>> & { level?: number } = $props();
</script>

<li bind:this={ref} data-sidebar="menu-sub-item" class={[level && level > 3 && `sub-item`]} {...restProps} style="margin-left: {level && level > 3 ?(level??0) * 0.25:0}em">
	{@render children?.()}
</li>

<style>
	.sub-item {
		position: relative;
	}
	.sub-item::before {
		content: "";
		position: absolute;
		top: -0.125em;
		left: -0.5em;
		width: 1px;
		height: calc(100% + 0.25em);
		background-color: hsl(var(--sidebar-border));
	}
</style>