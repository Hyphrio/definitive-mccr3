<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	let path: string = $derived($page.url.pathname);

	let { href, children }: { href: string; children: Snippet<[]> } = $props();
</script>

<a tabindex="-1" {href} class={path === href ? 'dropdown-item dropdown-active' : 'dropdown-item'}
	>{@render children()}</a
>
