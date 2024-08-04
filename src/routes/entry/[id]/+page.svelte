<script lang="ts">
	import { browser } from '$app/environment';
	import { fromYtToEmbed } from '$lib/entryhelpers.js';
	import YoutubeConsent from '$lib/youtube-consent.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const { data } = $props();

	const submission = data.submission;

	const video = fromYtToEmbed(submission.video);

	const title = submission.team_name ? submission.team_name : submission.video_title;

	const members = submission.team_members;
	const colour = submission.colour;
	const rating = submission.hyphr_rating;

	const showRatings: Writable<boolean> = getContext('showRatings');

	showRatings.set(data.showRatings);
</script>

<div class=" flex flex-col items-center my-12 gap-8">
	<div class="prose lg:prose-xl dark:prose-invert text-center">
		<h1>{title}</h1>
	</div>
	<YoutubeConsent {video} {title}></YoutubeConsent>
	{#if members}
		<div class="prose dark:prose-invert lg:w-5/12 w-full flex flex-col flex-wrap items-center">
			<h2>Members</h2>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
				{#each members as member}
					<div class="flex flex-col items-center justify-start gap-2">
						<img alt={member} src={`/ignToImage?name=${member}`} class="w-12 h-12 m-0" />
						<p>{member}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if colour}
		<div class="prose dark:prose-invert lg:w-5/12 w-full flex flex-col items-center">
			<h2>Team Colour</h2>
			<div class="flex flex-row gap-3 w-full">
				<div class="flex flex-col items-center justify-start gap-2 flex-1">
					<img alt={colour} src={`/icons/${colour}.png`} class="w-12 h-12 m-0" />
				</div>
			</div>
		</div>
	{/if}
	{#if $showRatings}
		<div class="prose dark:prose-invert lg:w-5/12 w-full flex flex-col items-center">
			<h2>Hyphr's personal rating</h2>
			<h3>{rating}</h3>
		</div>
	{/if}
</div>
