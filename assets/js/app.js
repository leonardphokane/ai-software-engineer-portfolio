document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    document.getElementById('current-year').textContent = new Date().getFullYear();

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Skill Filtering Logic
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-brand-500', 'text-dark-bg', 'font-semibold');
                b.classList.add('glass-card', 'text-gray-300');
            });

            btn.classList.add('bg-brand-500', 'text-dark-bg', 'font-semibold');
            btn.classList.remove('glass-card', 'text-gray-300');

            const category = btn.getAttribute('data-category');

            skillCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            contactForm.reset();

            setTimeout(() => {
                toast.classList.add('hidden');
            }, 4000);
        });
    }
});

// Project Details Data
const projectDetails = {
    'modal-project-1': {
        title: 'Visual AI Flow Builder',
        tech: ['React', 'TypeScript', 'React Flow', 'OpenAI API'],
        desc: 'A robust low-code visual automation builder. Users can drag-and-drop custom node components to create execution graphs that chain OpenAI prompts.',
        highlights: [
            'Built with React Flow for canvas rendering and state persistence',
            'Asynchronous workflow execution via serverless queues',
            'Interactive prompt testing directly inside node inspection panels'
        ]
    },
    'modal-project-2': {
        title: 'Usage Metering & Billing Engine',
        tech: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'Pydantic'],
        desc: 'Designed for high throughput, this engine records real-time API call counts and compute metrics for tier-based subscription billing.',
        highlights: [
            'Structured data validation using Pydantic schemas',
            'Atomic database transactions to prevent double-billing under heavy load'
        ]
    },
    'modal-project-3': {
        title: 'Social Campaign Publisher Platform',
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'RESTful APIs'],
        desc: 'A complete social media automation engine capable of queuing and scheduling multi-channel posts with automated image asset processing.',
        highlights: [
            'Cron-style background workers for automated publishing',
            'JWT authentication with role-based access for team collaboration'
        ]
    }
};

function openModal(projectId) {
    const container = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    const data = projectDetails[projectId];

    if (!data) return;

    content.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-gray-800 pb-3">
                <h3 class="text-2xl font-bold text-white">${data.title}</h3>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">${data.desc}</p>
            <div>
                <span class="text-xs font-mono text-brand-400 uppercase tracking-wider block mb-2">Technologies Used</span>
                <div class="flex flex-wrap gap-2">
                    ${data.tech.map(t => `<span class="px-2.5 py-1 bg-gray-900 border border-gray-800 text-brand-accent rounded-lg text-xs font-mono">${t}</span>`).join('')}
                </div>
            </div>
            <div>
                <span class="text-xs font-mono text-brand-400 uppercase tracking-wider block mb-2">Key Engineering Highlights</span>
                <ul class="list-disc list-inside text-gray-300 text-xs space-y-1">
                    ${data.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    container.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
}

function downloadResume() {
    const toast = document.getElementById('toast');
    document.getElementById('toast-title').textContent = "Resume Requested";
    document.getElementById('toast-body').textContent = "Preparing Leonard Phokane's PDF resume for download...";
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3500);
}