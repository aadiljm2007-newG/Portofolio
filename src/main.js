const projects = [
    {
        id: 'intro',
        title: 'WELCOME',
        description: 'Portfolio of Aadil JM - Computer Science & Design Student | AI Researcher | Full Stack Developer | UI/UX Designer.',
        status: 'AVAILABLE',
        tech: 'VIBE CODING / AI / UI/UX',
        image: 'assets/hero_me_new.jpg',
        theme: 'theme-intro'
    },
    {
        id: 'lexicomp',
        title: 'LEXICOMP RETRO',
        description: 'A RAG-based AI lawyer assistant. Facilitating intelligent legal research and document processing with precision.',
        status: 'BEING WORKED ON',
        tech: 'AI / RAG / PYTHON',
        image: 'assets/lexicomp.png',
        theme: 'theme-lexicomp'
    },
    {
        id: 'jamps',
        title: 'JAMPS',
        description: 'A full-scale GitHub clone designed for researchers and developers. Undergoing extensive testing and R&D.',
        status: 'TESTING & R&D',
        tech: 'FULLSTACK / VIBE CODING',
        image: 'assets/jamps.png',
        theme: 'theme-jamps'
    },
    {
        id: 'sarah',
        title: 'SARAH AI',
        description: 'Personal AI assistant developed to explore the boundaries of RAG models and LLM integration.',
        status: 'TESTING & R&D',
        tech: 'LLM / RAG / JS',
        image: 'assets/sarah.jpg',
        theme: 'theme-sarah'
    },
    {
        id: 'drpet',
        title: 'DR. PET',
        description: 'An AI-powered system that analyzes animal behavior using video and audio inputs, combining vision, acoustic signals, and LLM reasoning to deliver structured and explainable insights.',
        status: 'COMPLETED / ACTIVE DEVELOPMENT',
        tech: 'AI / COMPUTER VISION / PYTHON / DSP / LLM',
        image: 'assets/drpet.png',
        theme: 'theme-drpet'
    },
    {
        id: 'skills',
        title: 'SKILLS & TECH',
        description: 'Vibe Coding, UI/UX Development, Prompt Engineering, and Full Stack Versatility with AI tools.',
        status: 'EXPERT',
        tech: 'PYTHON / JAVA / AI',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
        theme: 'theme-blender'
    },
    {
        id: 'education',
        title: 'EDUCATION',
        description: 'Computer Science & Design @ SNS College of Technology (2025-2029). Formerly Hilton Matric Hr Sec School.',
        status: 'CURRENT',
        tech: 'CS & DESIGN',
        image: 'https://images.unsplash.com/photo-1523050338692-7b835a07973f?q=80&w=800&auto=format&fit=crop',
        theme: 'theme-nexqa'
    },
    {
        id: 'contact',
        title: 'CONTACT',
        description: '',
        status: '',
        tech: '',
        image: '',
        theme: 'theme-contact'
    }
];

let currentIndex = 0;
const app = document.getElementById('app');
const title = document.getElementById('project-title');
const desc = document.getElementById('project-description');
const status = document.getElementById('project-status');
const tech = document.querySelector('#tech-stack-container .value');
const img = document.getElementById('project-image');
const currentNum = document.querySelector('.pagination .current');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const totalNum = document.querySelector('.pagination .total');

const projectDetails = document.getElementById('project-details');
const aboutSection = document.getElementById('about-section');
const contactSection = document.getElementById('contact-section');
const characterWrapper = document.querySelector('.character-wrapper');
const educationVisuals = document.getElementById('education-visuals');
const skillsVisuals = document.getElementById('skills-visuals');

function updateProject(index) {
    const project = projects[index];

    // Add exit animations
    title.classList.add('fade-out');
    desc.classList.add('fade-out');
    status.parentElement.classList.add('fade-out');
    tech.parentElement.classList.add('fade-out');
    img.classList.add('img-exit');

    setTimeout(() => {
        // Update content
        app.className = project.theme;

        if (project.id === 'contact') {
            projectDetails.style.display = 'none';
            characterWrapper.style.display = 'none';
            aboutSection.style.display = 'flex';
            contactSection.style.display = 'flex';

            // Trigger animations
            aboutSection.classList.add('fade-in');
            contactSection.classList.add('fade-in');
        } else {
            projectDetails.style.display = 'block';
            characterWrapper.style.display = 'flex';
            aboutSection.style.display = 'none';
            contactSection.style.display = 'none';

            title.textContent = project.title;
            desc.textContent = project.description;
            status.textContent = project.status;
            tech.textContent = project.tech;

            if (project.id === 'education') {
                img.style.display = 'none';
                educationVisuals.style.display = 'flex';
                skillsVisuals.style.display = 'none';
            } else if (project.id === 'skills') {
                img.style.display = 'none';
                educationVisuals.style.display = 'none';
                skillsVisuals.style.display = 'flex';
            } else {
                img.style.display = 'block';
                educationVisuals.style.display = 'none';
                skillsVisuals.style.display = 'none';
                img.src = project.image;
            }

            aboutSection.classList.remove('fade-in');
            contactSection.classList.remove('fade-in');

            // Reset and trigger entrance animations
            title.classList.remove('fade-out');
            desc.classList.remove('fade-out');
            status.parentElement.classList.remove('fade-out');
            tech.parentElement.classList.remove('fade-out');
            img.classList.remove('img-exit');
            educationVisuals.classList.remove('img-exit');
            skillsVisuals.classList.remove('img-exit');

            title.classList.add('fade-in');
            desc.classList.add('fade-in');
            status.parentElement.classList.add('fade-in');
            tech.parentElement.classList.add('fade-in');

            if (project.id === 'education') {
                educationVisuals.classList.add('img-enter');
            } else if (project.id === 'skills') {
                skillsVisuals.classList.add('img-enter');
            } else {
                img.classList.add('img-enter');
            }
        }

        currentNum.textContent = String(index + 1).padStart(2, '0');
        totalNum.textContent = `/ ${String(projects.length).padStart(2, '0')}`;

        // Cleanup entrance classes after animation finishes
        setTimeout(() => {
            if (project.id !== 'contact') {
                title.classList.remove('fade-in');
                desc.classList.remove('fade-in');
                status.parentElement.classList.remove('fade-in');
                tech.parentElement.classList.remove('fade-in');
                img.classList.remove('img-enter');
            }
        }, 800);
    }, 400);
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject(currentIndex);
});

// Preload Images for smoother performance
function preloadProjectImages() {
    projects.forEach(project => {
        if (project.image && !project.image.startsWith('https://images.unsplash.com')) {
            const img = new Image();
            img.src = project.image;
        }
    });
}

// Initial load
updateProject(0);
preloadProjectImages();

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                formSuccess.classList.add('fade-in');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again or use the links below.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

function resetForm() {
    contactForm.reset();
    contactForm.style.display = 'flex';
    formSuccess.style.display = 'none';
    submitBtn.textContent = 'SEND MESSAGE';
    submitBtn.disabled = false;
}

window.resetForm = resetForm; // Make it globally accessible for the onclick handler
