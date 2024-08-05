import { supabase } from "$lib/supabase";

export async function load() {
    const { data, error } = await supabase.from("Submissions")
        .select("hyphr_rating");

    let rating: HyphrRating = new HyphrRating();

    if (error) console.log(error)

    data?.forEach(({ hyphr_rating }) => {
        switch (hyphr_rating) {
            case "S": rating.addSTier();
            case "A": rating.addATier();
            case "B": rating.addBTier();
            case "C": rating.addCTier();
            case "D": rating.addDTier();
            case "F": rating.addFTier();
        }
    })

    return {
        S: rating.S,
        A: rating.A,
        B: rating.B,
        C: rating.C,
        D: rating.D,
        F: rating.F,
    }
}

class HyphrRating {
    S: number
    A: number
    B: number
    C: number
    D: number
    F: number

    constructor() {
        this.S = 0;
        this.A = 0;
        this.B = 0;
        this.C = 0;
        this.D = 0;
        this.F = 0;
    }

    addSTier() {
        this.S += 1;
    }

    addATier() {
        this.A += 1;
    }
    addBTier() {
        this.B += 1;
    }
    addCTier() {
        this.C += 1;
    }
    addDTier() {
        this.D += 1;
    }
    addFTier() {
        this.F += 1;
    }
}