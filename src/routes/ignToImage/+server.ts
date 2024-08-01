import { mcUsernameToUuid } from '$lib/entryhelpers.js';

export async function GET({ url }) {
    const name = url.searchParams.get("name");

    if (name) {
        const uuid = await mcUsernameToUuid(name);
        const img = await fetch(`https://api.mineatar.io/face/${uuid}`);

        return img
    }
}