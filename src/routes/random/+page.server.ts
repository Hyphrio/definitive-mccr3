import { supabase } from "$lib/supabase";
import { redirect } from "@sveltejs/kit";

export async function load() {
    // Take a random id
    const id = await supabase.rpc('random_submission');

    if (id.error) console.log(id.error)

    throw redirect(307, `/entry/${id.data}`)
}