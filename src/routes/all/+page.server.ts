import type { SubmissionData } from "$lib/submissions";
import { supabase } from "$lib/supabase";

export async function load() {
    const { data, error } = await supabase.from("Submissions")
        .select("*")

    if (error) console.log(error)

    const submissions: SubmissionData[] | null = data;

    return {
        submissions
    }
}