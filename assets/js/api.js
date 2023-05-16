async function fetchProfileData() {
    const url = `https://raw.githubusercontent.com/Msamuelsons/introducao-javascript/master/portfolio/data/profile.json`;
    const fetching = await fetch(url);

    return fetching.json();
}

