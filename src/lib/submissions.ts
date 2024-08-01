export type SubmissionData = {
    id: number,
    video: string,
    video_title: string | null,
    team_name: string | null,
    team_members: string[] | null,
    colour: "RED" | "ORANGE" | "YELLOW" | "LIME" | "GREEN" | "CYAN" | "AQUA" | "BLUE" | "PURPLE" | "PINK" | null,
    hyphr_rating: "unrated" | "S" | "A" | "B" | "C" | "D" | "F"
}