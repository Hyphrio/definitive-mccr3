import type { SubmissionData } from '$lib/submissions.js';
import { supabase } from '$lib/supabase.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const id = params.id;

    // Pull the data of the id
    const { data, error } = await supabase.from('Submissions')
        .select()
        .eq('id', id);

    if (error) throw redirect(404, "/404")

    console.log(data)

    // Cast type
    const submission: SubmissionData = data[0];

    return {
        submission
    }
}