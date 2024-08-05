<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	let path: string = $derived($page.url.pathname);

	let { href, children }: { href: string; children: Snippet<[]> } = $props();
</script>

<a {href} class={path === href ? 'navbar-active' : ''}>{@render children()}</a>
