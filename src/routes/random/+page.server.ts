import { supabase } from "$lib/supabase";
import { redirect } from "@sveltejs/kit";

export async function load() {
    const { count, error } = await supabase.from("Submissions")
        .select("id", { count: "exact" });

    if (error) console.log(error)

    throw redirect(307, `/entry/${Math.floor(Math.random() * (count ? count : 1))}`)
}