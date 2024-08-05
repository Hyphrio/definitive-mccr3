import { supabase } from "$lib/supabase";
import { redirect } from "@sveltejs/kit";

export async function load() {
    // Take a random id
    //
    // SQL function:
    // SELECT id FROM "Submissions" TABLESAMPLE SYSTEM_ROWS(1*10) ORDER BY RANDOM() LIMIT 1;
    const id = await supabase.rpc('random_submission');

    if (id.error) console.log(id.error)

    throw redirect(307, `/entry/${id.data}`)
}