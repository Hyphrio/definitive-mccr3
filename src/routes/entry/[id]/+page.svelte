<script lang="ts">
	import { fromYtToEmbed } from '$lib/entryhelpers.js';
	import YoutubeConsent from '$lib/youtube-consent.svelte';
	import { getContext, onMount } from 'svelte';
	import { Confetti } from 'svelte-confetti';
	import type { Writable } from 'svelte/store';

	const { data } = $props();

	const submission = data.submission;

	let hideAlert = $state(false);

	const video = fromYtToEmbed(submission.video);

	const title = submission.team_name ? submission.team_name : submission.video_title;

	const members = submission.team_members;
	const colour = submission.colour;
	const rating = submission.hyphr_rating;

	const showRatings: Writable<boolean> = getContext('showRatings');

	showRatings.set(data.showRatings);
</script>

{#if submission.did_get_in && !hideAlert}
	<div class="alert alert-success gap-4">
		<!-- Lucide: Party Popper -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="3rem"
			height="3rem"
			viewBox="0 0 24 24"
			color="#00ba34"
			><g
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				><path
					d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7"
				/><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2" /></g
			></svg
		>
		<div
			class="flex-1 flex flex-row items-center gap-4 prose max-w-none dark:prose-invert text-center"
		>
			<h2>
				{submission.congrats_desc}
				<img
					alt={submission.congrats_team_colour}
					src={`/icons/${submission.congrats_team_colour}.png`}
					class="m-0 h-6 inline ml-2 mb-[0.25em]"
				/>
			</h2>
		</div>
		<button
			class="w-12 h-12 flex items-center justify-center"
			onclick={() => {
				hideAlert = true;
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M18 6L6 18M6 6l12 12"
				/></svg
			>
		</button>
	</div>

	<div
		class="top-[-16rem] fixed w-screen h-screen flex justify-center overflow-hidden pointer-events-none"
	>
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[500, 2000]}
			infinite
			duration={5000}
			amount={200}
			fallDistance="100vh"
		/>
	</div>
{/if}

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
