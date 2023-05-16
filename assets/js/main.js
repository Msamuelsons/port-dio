function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href=`tel:${profileData.phone}`;

    const mail = document.getElementById('profile.email');
    mail.innerText = profileData.email;
    mail.href=`mailto:${profileData.email}`;

}

function updateProfileSoftSkills(profileData) {
    const softskills = document.getElementById('profile.skills.softSkills');
    
   softskills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')
}

function updateProfileHardSkills(profileData) {
    const hardskills = document.getElementById('profile.skills.hardSkills');
    
   hardskills.innerHTML = profileData.skills.hardSkills.map((skill) => `
    <li>
        <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
   </li>`).join('')
}

function updateLanguages(profileData) {
   const languages = document.getElementById('profile.languages');
   languages.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join('');
}


function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map((project) => {
        return `
            <li>
                <span class="title github">${project.name}</span>
                <a href="${project.url}" target="_blank">Clique aqui para mais</a>
            </li>
        ` 
    }).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience');
    experience.innerHTML = profileData.professionalExperience.map((project) => {
        return `
            <li>
                <span class="title">${project.name}</span>
            </li>
        ` 
    }).join('')
}

(async function() {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateProfileSoftSkills(profileData);
    updateProfileHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);

})();