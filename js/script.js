//header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    const offset = -currentIndex * 100;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${offset}%)`;

    slides[currentIndex].classList.add('active');
}

setInterval(() => {
    changeSlide(1);
}, 3000);


// JavaScript for opening and closing the modal
const readMoreButtons = document.querySelectorAll('.read-more');
const modal = document.getElementById('successStoryModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const successStories = [
    {
        title: "Smart Transportation Solutions",
        description: "Implemented an intelligent traffic management system that reduced congestion by 30%. This innovative system uses real-time data analytics to optimize traffic signals, ensuring smoother vehicle flow during peak hours. Additionally, it integrates with public transport schedules to enhance commuter convenience, significantly improving overall travel experience for city residents.",
    },
    {
        title: "Sustainable Energy Management",
        description: "Developed solar energy initiatives that powered 50% of city facilities, contributing to a cleaner environment and reducing carbon footprint. This project not only harnesses renewable energy but also involves the installation of energy-efficient systems in municipal buildings, resulting in substantial savings on energy costs and paving the way for a sustainable future for the community.",
    },
    {
        title: "Community Engagement Programs",
        description: "Launched programs that increased citizen participation in urban planning by 40%, fostering a sense of ownership and collaboration within the community. Through workshops and interactive platforms, residents were encouraged to voice their opinions and contribute ideas, leading to more inclusive decision-making and projects that truly reflect the needs and desires of the population.",
    },
    {
        title: "Smart Waste Management",
        description: "Implemented smart bins that improved recycling rates by 25% across the city, utilizing sensors to monitor waste levels and optimize collection routes. This system not only reduces operational costs but also educates citizens about proper waste disposal through a user-friendly app, turning waste management into a community effort and enhancing environmental sustainability.",
    },
    {
        title: "Smart Education Initiatives",
        description: "Introduced digital learning platforms that enhanced educational access for over 10,000 students, bridging the gap in remote areas. These platforms offer a wide range of resources, including interactive lessons and virtual classrooms, empowering students to learn at their own pace and providing educators with innovative tools to enrich their teaching methods.",
    },
    {
        title: "Smart Healthcare Solutions",
        description: "Implemented telemedicine services that increased healthcare access for residents by 50%, especially benefiting those in remote locations. This initiative allows patients to consult with healthcare professionals from the comfort of their homes, reducing travel time and wait periods while ensuring that quality medical advice is just a click away.",
    },
];


readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modalTitle.textContent = successStories[index].title;
        modalDescription.textContent = successStories[index].description;
        modal.style.display = "block";
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// grafik konten

// Data for the health chart (e.g., monthly data for a year)
const healthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const healthData = [80, 82, 85, 87, 90, 92, 95, 96, 94, 93, 92, 95]; // Example data

const ctx = document.getElementById('healthChart').getContext('2d');
const healthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: healthLabels,
        datasets: [{
            label: 'access to health services (%)',
            data: healthData,
            borderColor: '#36a2eb',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.1, // Adjusts the curve of the line
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Persentase (%)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'access to health services in Reduktor City'
            }
        }
    }
});

// Data for the education chart (e.g., annual data)
const eduLabels = ['2019', '2020', '2021', '2022', '2023'];
const eduData = [85, 87, 90, 92, 95]; // Example data

const eduCtx = document.getElementById('educationChart').getContext('2d');
const educationChart = new Chart(eduCtx, {
    type: 'line',
    data: {
        labels: eduLabels,
        datasets: [{
            label: 'Student Participation Level (%)',
            data: eduData,
            borderColor: '#4bc0c0',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1, // Adjusts the curve of the line
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Persentase (%)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Student Participation Level in Reduktor City'
            }
        }
    }
});

// pop up
document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-moree');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    const closeButton = document.querySelector('.closee');

    // Event listener for each "Read More" link
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Safely get title and content attributes
            const titlee = this.getAttribute('data-title');
            const content = this.getAttribute('data-content');

            // Check if title and content are defined
            if (titlee && content) {
                // Set the title and content for the pop-up
                popupTitle.textContent = titlee;
                popupContent.textContent = content;
                popup.style.display = 'block'; // Show the pop-up
            } else {
                console.error('Title or content is undefined for this link:', this);
            }
        });
    });

    // Close the pop-up when the close button is clicked
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none'; // Hide the pop-up
    });

    // Close the pop-up when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none'; // Hide the pop-up
        }
    });
});

// comen
// Function to add comment to the container
function addCommentToContainer(name, text) {
    const commentContainer = document.getElementById('comments-container');
    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');
    commentCard.innerHTML = `
        <h4>${name}</h4>
        <p>${text}</p>
    `;
    commentContainer.appendChild(commentCard);
}

// Function to check if comments overflow and toggle navigation buttons
function checkOverflowAndToggleNav() {
    const commentContainer = document.getElementById('comments-container');
    const containerWidth = commentContainer.offsetWidth;
    const contentWidth = commentContainer.scrollWidth;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Hide navigation on mobile, show on desktop if overflow occurs
    if (window.innerWidth > 768 && contentWidth > containerWidth) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

// Load comments from API and add them to the container
function loadComments() {
    fetch('https://672c4cc71600dda5a9f7dcd4.mockapi.io/komentar')
        .then(response => response.json())
        .then(data => {
            data.forEach(comment => {
                addCommentToContainer(comment.name, comment.text);
            });
            checkOverflowAndToggleNav();
        })
        .catch(error => {
            console.error('Error loading comments:', error);
        });
}

// Add comment to the API and container
function addComment() {
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;

    if (name && commentText) {
        fetch('https://672c4cc71600dda5a9f7dcd4.mockapi.io/komentar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, text: commentText })
        })
            .then(response => response.json())
            .then(data => {
                addCommentToContainer(data.name, data.text);
                checkOverflowAndToggleNav();
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });

        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert("Nama dan komentar harus diisi!");
    }
}

// Handle scrolling functionality for the comments container
let isMouseDown = false;
let startX;
let scrollLeft;

const commentContainer = document.getElementById('comments-container');

commentContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - commentContainer.offsetLeft;
    scrollLeft = commentContainer.scrollLeft;
});

commentContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

commentContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
});

commentContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - commentContainer.offsetLeft;
    const walk = (x - startX) * 3;
    commentContainer.scrollLeft = scrollLeft - walk;
});

commentContainer.addEventListener('touchstart', (e) => {
    isMouseDown = true;
    startX = e.touches[0].pageX - commentContainer.offsetLeft;
    scrollLeft = commentContainer.scrollLeft;
});

commentContainer.addEventListener('touchend', () => {
    isMouseDown = false;
});

commentContainer.addEventListener('touchmove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - commentContainer.offsetLeft;
    const walk = (x - startX) * 3;
    commentContainer.scrollLeft = scrollLeft - walk;
});

// Add functionality to scroll using navigation buttons
let scrollPosition = 0;
const scrollAmount = 300; // Adjust scroll distance

document.getElementById('prev-btn').addEventListener('click', () => {
    const commentContainer = document.getElementById('comments-container');
    scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
    commentContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

document.getElementById('next-btn').addEventListener('click', () => {
    const commentContainer = document.getElementById('comments-container');
    scrollPosition = Math.min(scrollPosition + scrollAmount, commentContainer.scrollWidth - commentContainer.offsetWidth);
    commentContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

// Load comments on page load
document.addEventListener('DOMContentLoaded', loadComments);