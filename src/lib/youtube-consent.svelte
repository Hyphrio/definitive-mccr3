<script lang="ts">
	import { browser } from '$app/environment';

	let { video, title }: { video: string; title: string | null } = $props();

	let showYtEmbeds: true | false | undefined = $state(undefined);

	$effect(() => {
		if (browser) {
			showYtEmbeds = localStorage.getItem('yt-consent') === 'true' ? true : false;
		}
	});
</script>

<div class="flex lg:w-5/12 w-full h-auto">
	{#if showYtEmbeds}
		<iframe
			class="grow aspect-video"
			src={video}
			{title}
			frameborder="0"
			allow="autoplay; encrypted-media"
			sandbox="allow-scripts allow-popups allow-same-origin"
			allowfullscreen
		></iframe>
	{:else if showYtEmbeds === false}
		<div
			class="bg-gray-3 flex flex-col p-8 rounded-md w-full h-full prose dark:prose-invert items-center justify-center max-w-none sm:aspect-video"
		>
			<h2 class="text-center">
				By clicking this button, you agree that YouTube may collect personally identifiable
				information in accordance to Google's <a href="https://policies.google.com/privacy"
					>Privacy Policy.</a
				>
			</h2>
			<button
				class="btn btn-primary"
				onclick={() => {
					if (browser) {
						localStorage.setItem('yt-consent', 'true');
						showYtEmbeds = true;
					}
				}}>Agree and show video</button
			>
		</div>
	{:else}
		<div class="not-prose max-w-none w-full h-full bg-black p-8 aspect-video">
			<!-- empty -->
		</div>
	{/if}
</div>
