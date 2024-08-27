import type { SubmissionData } from '$lib/submissions.js';
import { supabase } from '$lib/supabase.js';
import { error as skError } from '@sveltejs/kit';

export async function load({ params, url }) {
    const showRatingsParams = url.searchParams.get("showRatings");
    const showRatings = showRatingsParams && showRatingsParams === "true" ? true : false

    const id = params.id;

    // Pull the data of the id
    const { data, error } = await supabase.from('Submissions')
        .select()
        .eq('id', id);

    if (!data || data?.length === 0) throw skError(404)

    // Cast type
    const submission: SubmissionData = data[0];


    return {
        submission,
        showRatings,
    }
}