<script lang="ts">
	import '@fontsource-variable/outfit';
	import './app.css';
	import { ModeWatcher, toggleMode, mode, setTheme, theme } from 'mode-watcher';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	let { children } = $props();

	function themeToggle() {
		toggleMode();
		console.log('mode is', $mode, '; theme is', $theme);
		if ($mode === 'dark') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	let showRatings = writable(false);
	setContext('showRatings', showRatings);
</script>

<ModeWatcher></ModeWatcher>

<div class="navbar navbar-bordered">
	<div class="navbar-start">
		<a href="/" class="navbar-item"><div class="px-4">TDRMCCR3ST</div></a>
	</div>
	<div class="navbar-end">
		<div class="px-4 flex gap-2">
			<span class="tooltip tooltip-bottom" data-tooltip="Toggle mode">
				<button class="btn btn-ghost" onclick={themeToggle} aria-label="Toggle mode">
					{#if $mode === 'light'}
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 1.992a10 10 0 1 0 9.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 0 1-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006z"
							/></svg
						>{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m6.313-2.09l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 1.218-1.567zm-11.306.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM6.213 4.81l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7A1 1 0 0 1 6.11 4.74zm12.894.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m0 5a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
							/></svg
						>
					{/if}
				</button>
			</span>
			<span
				class="tooltip tooltip-bottom"
				data-tooltip={`${!$showRatings ? 'Show' : 'Hide'} ratings`}
				><button
					class="btn btn-ghost"
					aria-label="Toggle ratings"
					onclick={() => showRatings.update((r) => !r)}
				>
					{#if $showRatings === false}
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22.379l.045.1l.03.083l.014.055l.014.082l.011.1v.11l-.014.111a1 1 0 0 1-.026.11l-.039.108l-.036.075l-.016.03c-2.764 4.836-6.3 7.38-10.555 7.499L12 20c-4.396 0-8.037-2.549-10.868-7.504a1 1 0 0 1 0-.992C3.963 6.549 7.604 4 12 4m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
							/></svg
						>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
							><g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path
									d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18"
								/></g
							></svg
						>
					{/if}
				</button></span
			>
		</div>
	</div>
</div>

<div class="p-2">
	{@render children()}
</div>

<footer class="bg-gray-3 p-8">
	<div class="prose dark:prose-invert max-w-none">
		<p class="w-full">
			Made by Hyphr (@Hyphrio) <br />
			Not affiliated with MC Championship, Noxcrew, Mojang Studios or Microsoft. <br />
			Player icons from <a href="https://mineatar.io">Mineatar.</a> <br /> <br />

			Members might be missing players due to being unable to index the IGN's, if you know the
			missing IGN's please message me at MCC Island (Hyphr) or at Discord. (@Hyphrio) <br />
			Disclaimer: <br />
			Ratings here are my opinion and does not reflect whether or not the team would get in MCC Rising.
			Noxcrew makes the decision if the team's getting in, not me, so keep your hopes up! Even if I rated
			you low, your app is still goated! :D
		</p>
	</div>
</footer>
