<script lang="ts">
	export let data;
	const submissions = data.submissions;
</script>

<div class="p-4">
	{#if submissions}
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Video</th>
					<th>Video Title / Team Name</th>
					<th>Members</th>
					<th>Hyphr's Rating</th>
				</tr>
			</thead>

			<tbody>
				{#each submissions as sub}
					<tr class="prose dark:prose-invert">
						<th>{sub.id}</th>
						<th>
							<a href={sub.video}>{sub.video}</a>
						</th>
						{#if sub.team_name}
							<th>{sub.team_name}</th>
						{:else if sub.video_title}
							<th>{sub.video_title}</th>
						{:else}
							<th>No title</th>
						{/if}

						<th>{sub.team_members ? sub.team_members.join(', ') : 'Unknown'}</th>
						<th>{sub.hyphr_rating}</th>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
