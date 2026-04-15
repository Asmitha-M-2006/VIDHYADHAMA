document.addEventListener('DOMContentLoaded', () => {
    const studentPlaceholder = './assets/web/placeholders/student-placeholder.svg';

    const achievers = [
        {
            name: 'Chitra Giri P',
            year: 2026,
            category: 'Board',
            stream: 'II PUC Science',
            marks: '591/600',
            rank: 'State 7th Rank',
            image: studentPlaceholder,
            type: 'featured'
        },
        {
            name: 'Tanishkaa C',
            year: 2024,
            category: 'Board',
            stream: 'II PUC',
            marks: '592/600',
            rank: 'State 6th Rank',
            image: studentPlaceholder,
            type: 'featured'
        },
        {
            name: 'Komala R',
            year: 2024,
            category: 'Board',
            stream: 'II PUC',
            marks: '592/600',
            rank: 'State 6th Rank',
            image: studentPlaceholder,
            type: 'featured'
        },
        {
            name: 'Madhushree KR',
            year: 2024,
            category: 'NEET',
            stream: 'NEET',
            marks: '567/720',
            percentile: '97.81 percentile',
            highlight: 'NEET Achiever',
            course: 'Medical Entrance',
            image: studentPlaceholder,
            type: 'featured'
        },
        {
            name: 'Mukul R Kulkarni',
            year: 2024,
            category: 'KCET',
            stream: 'KCET',
            rank: 'Rank 2158',
            highlight: 'KCET Achiever',
            course: 'Engineering Entrance',
            image: studentPlaceholder,
            type: 'featured'
        },
        {
            name: 'Vijay N',
            year: 2024,
            category: 'Professional',
            stream: 'CA Foundation',
            highlight: 'Qualified for CA Intermediate',
            course: 'Chartered Accountancy',
            image: studentPlaceholder,
            type: 'featured'
        },
        {
            name: 'Chitra Giri P',
            year: 2026,
            category: 'Board',
            stream: 'Science',
            marks: '591/600',
            rank: 'State 7th Rank',
            image: studentPlaceholder,
            type: 'top-board state-rank'
        },
        {
            name: 'Tanishkaa C',
            year: 2024,
            category: 'Board',
            stream: 'II PUC',
            marks: '592/600',
            rank: 'State 6th Rank',
            image: studentPlaceholder,
            type: 'top-board state-rank'
        },
        {
            name: 'Komala R',
            year: 2024,
            category: 'Board',
            stream: 'II PUC',
            marks: '592/600',
            rank: 'State 6th Rank',
            image: studentPlaceholder,
            type: 'top-board state-rank'
        },
        {
            name: 'Shreya M',
            year: 2026,
            category: 'Board',
            stream: 'Science',
            marks: '586/600',
            image: studentPlaceholder,
            type: 'science'
        },
        {
            name: 'Nithin K',
            year: 2026,
            category: 'Board',
            stream: 'Science',
            marks: '582/600',
            image: studentPlaceholder,
            type: 'archive'
        },
        {
            name: 'Apoorva S',
            year: 2026,
            category: 'Board',
            stream: 'Science',
            marks: '579/600',
            image: studentPlaceholder,
            type: 'archive'
        },
        {
            name: 'Sahana P',
            year: 2026,
            category: 'Board',
            stream: 'Commerce',
            marks: '584/600',
            image: studentPlaceholder,
            type: 'commerce'
        },
        {
            name: 'Karthik R',
            year: 2026,
            category: 'Board',
            stream: 'Commerce',
            marks: '578/600',
            image: studentPlaceholder,
            type: 'archive'
        },
        {
            name: 'Meghana B',
            year: 2026,
            category: 'Board',
            stream: 'Commerce',
            marks: '574/600',
            image: studentPlaceholder,
            type: 'archive'
        },
        {
            name: 'Madhushree KR',
            year: 2024,
            category: 'NEET',
            stream: 'NEET',
            marks: '567/720',
            percentile: '97.81 percentile',
            course: 'MBBS/BDS eligibility track',
            image: studentPlaceholder,
            type: 'neet'
        },
        {
            name: 'Mukul R Kulkarni',
            year: 2024,
            category: 'KCET',
            stream: 'KCET',
            rank: 'Rank 2158',
            course: 'Engineering entrance',
            image: studentPlaceholder,
            type: 'kcet'
        },
        {
            name: 'Vijay N',
            year: 2024,
            category: 'Professional',
            stream: 'CA Foundation',
            highlight: 'Qualified for CA Intermediate',
            course: 'Chartered Accountancy',
            image: studentPlaceholder,
            type: 'professional'
        },
        {
            name: 'Aishwarya K',
            year: 2025,
            category: 'Board',
            stream: 'Science',
            marks: '571/600',
            image: studentPlaceholder,
            type: 'archive'
        },
        {
            name: 'Dhanush S',
            year: 2025,
            category: 'Board',
            stream: 'Commerce',
            marks: '568/600',
            image: studentPlaceholder,
            type: 'archive'
        },
        {
            name: 'Prajwal H',
            year: 2025,
            category: 'KCET',
            stream: 'KCET',
            rank: 'Rank details updated soon',
            course: 'Engineering entrance',
            image: studentPlaceholder,
            type: 'archive'
        },
        {
            name: 'Anusha R',
            year: 2025,
            category: 'NEET',
            stream: 'NEET',
            marks: 'Score details updated soon',
            course: 'Medical entrance',
            image: studentPlaceholder,
            type: 'archive'
        }
    ];

    const sections = document.querySelectorAll('[data-results-section]');

    function buildMetaItems(achiever) {
        return [
            achiever.stream,
            achiever.marks,
            achiever.rank,
            achiever.percentile,
            achiever.course
        ].filter(Boolean);
    }

    function getHighlight(achiever) {
        return achiever.highlight || achiever.rank || achiever.category;
    }

    function renderCard(achiever, sectionType) {
        const card = document.createElement('article');
        card.className = `result-card result-card-${sectionType} reveal-on-scroll`;

        const image = achiever.image || studentPlaceholder;
        const metaItems = buildMetaItems(achiever)
            .map((item) => `<li>${item}</li>`)
            .join('');

        card.innerHTML = `
            <div class="result-card-image">
              <img src="${image}" alt="${achiever.name}" loading="lazy">
            </div>
            <div class="result-card-body">
              <div class="result-card-topline">
                <span class="year-badge">${achiever.year}</span>
                <span class="result-category">${achiever.category}</span>
              </div>
              <h3>${achiever.name}</h3>
              <p class="result-highlight">${getHighlight(achiever)}</p>
              <ul class="result-meta-list">${metaItems}</ul>
            </div>
        `;

        if (achiever.poster) {
            const button = document.createElement('button');
            button.className = 'result-poster-button';
            button.type = 'button';
            button.textContent = 'View poster';
            button.dataset.poster = achiever.poster;
            button.dataset.posterAlt = `${achiever.name} result poster`;
            card.querySelector('.result-card-body').appendChild(button);
        }

        return card;
    }

    sections.forEach((section) => {
        const sectionType = section.dataset.resultsSection;
        const fragment = document.createDocumentFragment();
        achievers
            .filter((achiever) => achiever.type.split(' ').includes(sectionType))
            .forEach((achiever) => fragment.appendChild(renderCard(achiever, sectionType)));
        section.appendChild(fragment);
    });

    const archiveToggle = document.querySelector('.results-archive-toggle');
    const archivePanel = document.getElementById('resultsArchiveGrid');

    if (archiveToggle && archivePanel) {
        archiveToggle.addEventListener('click', () => {
            const isExpanded = archiveToggle.getAttribute('aria-expanded') === 'true';
            archiveToggle.setAttribute('aria-expanded', String(!isExpanded));
            archivePanel.hidden = isExpanded;
            archiveToggle.textContent = isExpanded ? 'View Full Results Archive' : 'Hide Results Archive';
        });
    }

    const lightbox = document.getElementById('resultsLightbox');
    const lightboxImage = lightbox ? lightbox.querySelector('img') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('.results-lightbox-close') : null;

    document.addEventListener('click', (event) => {
        const posterButton = event.target.closest('.result-poster-button');
        if (!posterButton || !lightbox || !lightboxImage) {
            return;
        }
        lightboxImage.src = posterButton.dataset.poster;
        lightboxImage.alt = posterButton.dataset.posterAlt || 'Result poster preview';
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.classList.add('is-open');
        lightboxClose?.focus();
    });

    function closeLightbox() {
        if (!lightbox || !lightboxImage) {
            return;
        }
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
    }

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });

    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
