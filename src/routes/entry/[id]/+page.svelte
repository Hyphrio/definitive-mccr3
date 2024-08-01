<script lang="ts">
	import { fromYtToEmbed } from '$lib/entryhelpers.js';
	import { redirect } from '@sveltejs/kit';

	export let data;

	const submission = data.submission;

	const video = fromYtToEmbed(submission.video);

	const title = submission.team_name ? submission.team_name : submission.video_title;

	const members = submission.team_members;
	const rating = submission.hyphr_rating;
</script>

<div class=" flex flex-col items-center my-12 mx-2 gap-8">
	<div class="prose lg:prose-xl dark:prose-invert text-center">
		<h1>{title}</h1>
	</div>
	<div class="flex lg:w-5/12 w-full h-auto aspect-video">
		<iframe
			class="grow"
			src={video}
			{title}
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen
		></iframe>
	</div>
	{#if members}
		<div class="prose dark:prose-invert lg:w-5/12 w-full flex flex-col items-center">
			<h2>Members</h2>
			<div class="flex flex-row gap-3 w-full">
				{#each members as member}
					<div class="flex flex-col items-center justify-start gap-2 flex-1">
						<img alt={member} src={`/ignToImage?name=${member}`} class="w-12 h-12 m-0" />
						<p>{member}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<div class="prose dark:prose-invert lg:w-5/12 w-full flex flex-col items-center">
		<h2>Hyphr's personal rating</h2>
		<h3>{rating}</h3>
	</div>
</div>
