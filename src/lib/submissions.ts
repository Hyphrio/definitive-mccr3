export type SubmissionData = {
    id: number,
    video: string | null,
    video_title: string | null,
    team_name: string | null,
    team_members: string[] | null,
    colour: Colours,
    hyphr_rating: "unrated" | "S" | "A" | "B" | "C" | "D" | "F"
}

export type Colours = "RED" | "ORANGE" | "YELLOW" | "LIME" | "GREEN" | "CYAN" | "AQUA" | "BLUE" | "PURPLE" | "PINK" | null;