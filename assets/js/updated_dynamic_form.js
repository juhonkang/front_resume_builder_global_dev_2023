// Function to update live preview based on user input
function updatePreview() {
    // Extract values from input fields
    const name = document.getElementById('info-name').value;
    const email = document.getElementById('info-email').value;
    const mobile = document.getElementById('info-mobile').value;
    const github = document.getElementById('info-github').value;
    const linkedin = document.getElementById('info-linkedin').value;
    const summary = document.getElementById('summary-text').value;

    // Update preview container with extracted values
    const previewContainer = document.querySelector('.preview-container');
    // Note: The preview structure here is a simple placeholder. This can be enhanced and structured based on the desired template.
    previewContainer.innerHTML = `
    <section id="main">
    <header id="title">
        <h1>${name}</h1>
        <span class="subtitle">${summary}</span>
    </header>

    
    <section class="main-block">
    <h2><i class="fa fa-suitcase"></i> Experiences</h2>
    ${updateExperiences()}
    </section>


    <section class="main-block concise">
    <h2><i class="fa fa-graduation-cap"></i> Educations</h2>
    ${updateEducation()}
    </section>






    </section>
    <aside id="sidebar">
    <div class="side-block" id="contact">
        <h1>Contact Info</h1>
        <ul>
            <li><i class="fa "></i> ${github}</li>
            <li><i class="fa "></i> ${linkedin}</li>
            <li><i class="fa "></i> ${email}</li>
            <li><i class="fa "></i> ${mobile}</li>
        </ul>
    </div>

    <div class="side-block skills">
        <h1>Skills</h1>
        <ul>
            ${updateSkill()}
        </ul>
    </div>
</aside>


    

    `;
}




function updateExperiences() {
    // Fetch elements by class name
    const elementsByClass = document.getElementsByClassName('experience');

    var experience_html = "";

    // Loop through the elements fetched by class name
    for (let element of elementsByClass) {
        let position = element.querySelector('.position').value;
        let start_year = element.querySelector('.start_year').value;
        let end_year = element.querySelector('.end_year').value;
        let company = element.querySelector('.company').value;
        let location = element.querySelector('.location').value;
        let description1 = element.querySelector('.description1').value;
        let description2 = element.querySelector('.description2').value;

        var html_content = `
        <section class="blocks">
        <div class="date"><span>${start_year}</span><span>${end_year}</span></div>
        <div class="decorator"></div>
        <div class="details">
            <header>
                <h3>${position}</h3>
                <span class="place">${company}</span>
                <span class="location">${location}</span>
            </header>
            <div>
                <ul>
                    <li>${description1}</li>
                    <li>${description2}</li>
                </ul>
            </div>
        </div>
    </section>
        `;

        experience_html += html_content;
    }

    return experience_html;
}

function updateEducation() {
    // Fetch elements by class name
    const elementsByClass = document.getElementsByClassName('education');

    var education_html = "";

    // Loop through the elements fetched by class name
    for (let element of elementsByClass) {
        let degree = element.querySelector('.degree').value;
        let start_year = element.querySelector('.start_year').value;
        let end_year = element.querySelector('.end_year').value;
        let university = element.querySelector('.university').value;
        let faculty = element.querySelector('.faculty').value;
        let gpa = element.querySelector('.gpa').value;
        let description1 = element.querySelector('.description1').value;
        let description2 = element.querySelector('.description2').value;

        var html_content = `
        <section class="blocks">
        <div class="date"><span>${start_year}</span><span>${end_year}</span></div>
        <div class="decorator"></div>
        <div class="details">
            <header>
                <h3>${degree}</h3>
                <span class="place">${university} - ${faculty}</span>
                <span class="location">${gpa}</span>
            </header>
            <div>${description1}</div>
            <div>${description2}</div>
        </div>
    </section>
        `;

        education_html += html_content;
    }

    return education_html;
}

function updateSkill() {
    // Fetch elements by class name
    const elementsByClass = document.getElementsByClassName('skill');

    var skill_html = "";

    // Loop through the elements fetched by class name
    for (let element of elementsByClass) {
        let skill = element.value

        var html_content = `
        <li>${skill}</li>
        `;

        skill_html += html_content;
    }

    return skill_html;
}





// Function to add a new experience
function addExperience() {
    const len_experience = document.getElementsByClassName('experience').length;
    if (len_experience < 3) {
        const experienceDiv = document.createElement('div');
        experienceDiv.className = 'experience';
        experienceDiv.innerHTML = `
            <h4>Experience ${len_experience + 1}</h4>
            <input type="text" placeholder="start_year" class="start_year">
            <input type="text" placeholder="end_year" class="end_year">
            <input type="text" placeholder="position" class="position">
            <input type="text" placeholder="company" class="company">
            <input type="text" placeholder="location" class="location">
            <input type="text" placeholder="description" class="description1">
            <input type="text" placeholder="description" class="description2">
`;
        document.getElementById('experience_').appendChild(experienceDiv);



    }

    // Attach event listeners to input fields to trigger live preview updates
    document.querySelectorAll('input, textarea').forEach(function (element) {
        element.addEventListener('input', updatePreview);
    });


}

// Function to add a new education
function addEducation() {
    const len_education = document.getElementsByClassName('education').length;
    if (len_education < 3) {
        const educationDiv = document.createElement('div');
        educationDiv.className = 'education';
        educationDiv.innerHTML = `
            <h4>Education ${len_education + 1}</h4>
            <input type="text" placeholder="degree" class="degree">
            <input type="text" placeholder="start_year" class="start_year">
            <input type="text" placeholder="end_year" class="end_year">
            <input type="text" placeholder="University" class="university">
            <input type="text" placeholder="Faculty" class="faculty">
            <input type="text" placeholder="GPA" class="gpa">
            <input type="text" placeholder="description" class="description1">
            <input type="text" placeholder="description" class="description2">
        `;
        document.getElementById('education_').appendChild(educationDiv);
    }


    // Attach event listeners to input fields to trigger live preview updates
    document.querySelectorAll('input, textarea').forEach(function (element) {
        element.addEventListener('input', updatePreview);
    });


}

// Function to add a new skill
function addSkill() {
    const len_skill = document.getElementsByClassName('skill').length;
    if (len_skill < 5) {
        const skillInput = document.createElement('input');
        skillInput.setAttribute('type', 'text');
        skillInput.setAttribute('class', 'skill');
        skillInput.setAttribute('placeholder', 'Skill');
        document.getElementById('skills_').appendChild(skillInput);
    }

    // Attach event listeners to input fields to trigger live preview updates
    document.querySelectorAll('input, textarea').forEach(function (element) {
        element.addEventListener('input', updatePreview);
    });


}


document.getElementById('add-experience').addEventListener('click', addExperience);
document.getElementById('add-education').addEventListener('click', addEducation);
document.getElementById('add-skill').addEventListener('click', addSkill);


// Attach event listeners to input fields to trigger live preview updates
document.querySelectorAll('input, textarea').forEach(function (element) {
    element.addEventListener('input', updatePreview);
});