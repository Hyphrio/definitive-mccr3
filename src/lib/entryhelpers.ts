
function fromYtToEmbed(link: string): string {
    const url = new URL(link);

    const v = url.searchParams.get('v');

    if (v) {
        return `https://www.youtube-nocookie.com/embed/${v}`;
    } else {
        return '';
    }
}

async function mcUsernameToUuid(username: string): Promise<string | null> {
    try {
        const data = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
        if (data.status != 200) return null;
        const json = await data.json();
        return json.id;
    } catch (_) {
        return null;
    }
}

export {
    fromYtToEmbed,
    mcUsernameToUuid
}