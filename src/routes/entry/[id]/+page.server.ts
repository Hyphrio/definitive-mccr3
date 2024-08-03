import type { SubmissionData } from '$lib/submissions.js';
import { supabase } from '$lib/supabase.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params, url }) {
    const showRatingsParams = url.searchParams.get("showRatings");
    const showRatings = showRatingsParams && showRatingsParams === "true" ? true : false

    const id = params.id;

    // Pull the data of the id
    const { data, error } = await supabase.from('Submissions')
        .select()
        .eq('id', id);

    if (error) throw redirect(404, "/404")

    // Cast type
    const submission: SubmissionData = data[0];

    if (!submission.video) throw redirect(404, "/404")

    return {
        submission,
        showRatings
    }
}