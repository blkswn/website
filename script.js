document.addEventListener('DOMContentLoaded', function() {
    const jobContainer = document.querySelector('.job-listings');

    fetch('jobs.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.classList.add('job-card');

                jobCard.innerHTML = `
                    <h2>${job.title}</h2>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p>${job.description}</p>
                    <a href="${job.link}" class="apply-button">Apply Now</a>
                `;

                jobContainer.appendChild(jobCard);
            });
        })
        .catch(error => {
            console.error('Error fetching jobs:', error);
        });
});
