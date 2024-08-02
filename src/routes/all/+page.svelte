<script lang="ts">
	import { shortenYTLinks } from '$lib/entryhelpers.js';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let data;
	const submissions = data.submissions;

	const showRatings: Writable<boolean> = getContext('showRatings');
</script>

<div class="w-full overflow-x-auto">
	{#if submissions}
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Video</th>
					<th>Video Title / Team Name</th>
					<th>Members</th>
					{#if $showRatings}
						<th>Hyphr's Rating</th>
					{/if}
				</tr>
			</thead>

			<tbody>
				{#each submissions as sub}
					<tr class="prose dark:prose-invert">
						<th>
							<a href={`/entry/${sub.id}`}>{sub.id}</a>
						</th>
						<th>
							<a href={shortenYTLinks(sub.video)}>{shortenYTLinks(sub.video)}</a>
						</th>
						{#if sub.team_name}
							<th>{sub.team_name}</th>
						{:else if sub.video_title}
							<th>{sub.video_title}</th>
						{:else}
							<th>No title</th>
						{/if}

						<th>{sub.team_members ? sub.team_members.join(', ') : 'Unable to index'}</th>
						{#if $showRatings}
							<th>{sub.hyphr_rating}</th>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
