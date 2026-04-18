document.addEventListener('DOMContentLoaded', () => {
    const studentPlaceholder = './assets/web/placeholders/student-placeholder.svg';
    const HERO_RANKER_COUNT = 3;

    const students = [
        {
            id: 'chitra-giri-p',
            name: 'Chitra Giri P',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '591/600', rank: 'State 8th Rank' }
            ]
        },
        {
            id: 'preetham-raj-g',
            name: 'Preetham Raj G',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '587/600' }
            ]
        },
        {
            id: 'amritha-vartheni-s',
            name: 'Amritha Vartheni S',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '586/600' }
            ]
        },
        {
            id: 'jyothika-m',
            name: 'Jyothika M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '586/600' }
            ]
        },
        {
            id: 'keerthi-v',
            name: 'Keerthi V',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '585/600' }
            ]
        },
        {
            id: 'deepika-m',
            name: 'Deepika M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '585/600' }
            ]
        },
        {
            id: 'tanisha-jain-c',
            name: 'Tanisha Jain C',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '592/600', rank: 'State 6th Rank' }
            ]
        },
        {
            id: 'komala-r',
            name: 'Komala R',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '592/600', rank: 'State 6th Rank' }
            ]
        },
        {
            id: 'pushpashree-j',
            name: 'Pushpashree J',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '591/600', rank: 'State 9th Rank' }
            ]
        },
        {
            id: 'tanishkaa-c',
            name: 'Tanishkaa C',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '588/600', rank: 'State 10th Rank' }
            ]
        },
        {
            id: 'yogesh-h',
            name: 'Yogesh H',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '584/600', rank: 'State 16th Rank' }
            ]
        },
        {
            id: 'madhushree-h-r',
            name: 'Madhushree H R',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '583/600', rank: 'State 17th Rank' }
            ]
        },
        {
            id: 'deepu-r',
            name: 'Deepu R',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '580/600', rank: 'State 18th Rank' }
            ]
        },
        {
            id: 'harshika-n',
            name: 'Harshika N',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'II PUC', score: '580/600', rank: 'State 18th Rank' }
            ]
        },
        {
            id: 'rishith-k-s',
            name: 'Rishith K S',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '580/600' }
            ]
        },
        {
            id: 'apoorva-n-m',
            name: 'Apoorva N M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Science', score: '579/600' }
            ]
        },
        {
            id: 'varsha-p',
            name: 'Varsha P',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '578/600' }
            ]
        },
        {
            id: 'keerthana-m',
            name: 'Keerthana M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '578/600' }
            ]
        },
        {
            id: 'akshaya-h-r',
            name: 'Akshaya H R',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '576/600' }
            ]
        },
        {
            id: 'shashank-s-2024-commerce',
            name: 'Shashank S',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Commerce', score: '576/600' }
            ]
        },
        {
            id: 'pavani',
            name: 'Pavani',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '572/600' }
            ]
        },
        {
            id: 'samruddhi-jain',
            name: 'Samruddhi Jain',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '571/600' }
            ]
        },
        {
            id: 'chirantana-k',
            name: 'Chirantana K',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Science', score: '573/600' }
            ]
        },
        {
            id: 'dakshina-murthy-r-s',
            name: 'Dakshina Murthy R S',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Science', score: '571/600' }
            ]
        },
        {
            id: 'chandrika-singh-h-s',
            name: 'Chandrika Singh H S',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Science', score: '571/600' }
            ]
        },
        {
            id: 'vinutha-t',
            name: 'Vinutha T',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Commerce', score: '571/600' }
            ]
        },
        {
            id: 'akasha-h-v',
            name: 'Akash H V',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Science', score: '570/600' }
            ]
        },
        {
            id: 'kanaka-r',
            name: 'Kanaka R',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Science', score: '570/600' }
            ]
        },
        {
            id: 'pushpalatha-n',
            name: 'Pushpalatha N',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2024, stream: 'Science', score: '570/600' }
            ]
        },
        {
            id: 'pavan-gowda-v',
            name: 'Pavan Gowda V',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '570/600' }
            ]
        },
        {
            id: 'bindushree-c-m',
            name: 'Bindushree C M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '576/600' }
            ]
        },
        {
            id: 'dhanalakshmi-m',
            name: 'Dhanalakshmi M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '576/600' }
            ]
        },
        {
            id: 'sinchana-m',
            name: 'Sinchana M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '575/600' }
            ]
        },
        {
            id: 'monika-h',
            name: 'Monika H',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '574/600' }
            ]
        },
        {
            id: 'dasari-sai-charitha',
            name: 'Dasari Sai Charitha',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '570/600' }
            ]
        },
        {
            id: 'rujat-m',
            name: 'Rujat M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '570/600' }
            ]
        },
        {
            id: 'shuchitra-t',
            name: 'Shuchitra T',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '570/600' }
            ]
        },
        {
            id: 'karunya-a-s',
            name: 'Karunya A S',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '569/600' }
            ]
        },
        {
            id: 'harshitha',
            name: 'Harshitha',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '568/600' }
            ]
        },
        {
            id: 'bhoomika-r',
            name: 'Bhoomika R',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '567/600' }
            ]
        },
        {
            id: 'yashas-h',
            name: 'Yashas H',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '567/600' }
            ]
        },
        {
            id: 'kruthika-k-k',
            name: 'Kruthika K K',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '565/600' }
            ]
        },
        {
            id: 'ramya-v-b',
            name: 'Ramya V B',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '565/600' }
            ]
        },
        {
            id: 'sinchana-b-k',
            name: 'Sinchana B K',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Science', score: '564/600' }
            ]
        },
        {
            id: 'pushpalatha-k',
            name: 'Pushpalatha K',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '567/600' }
            ]
        },
        {
            id: 'sushanth-acharya-s',
            name: 'Sushanth Acharya S',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '566/600' }
            ]
        },
        {
            id: 'ajith-kumar-g',
            name: 'Ajith Kumar G',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '565/600' }
            ]
        },
        {
            id: 'lakshmi-c-k',
            name: 'Lakshmi C K',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '565/600' }
            ]
        },
        {
            id: 'deekshitha',
            name: 'Deekshitha',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '563/600' }
            ]
        },
        {
            id: 'lakshmi-s-m',
            name: 'Lakshmi S M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '563/600' }
            ]
        },
        {
            id: 'navya-shrees-m',
            name: 'Navya Shrees M',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '563/600' }
            ]
        },
        {
            id: 'bhavani-n',
            name: 'Bhavani N',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '560/600' }
            ]
        },
        {
            id: 'kavitha-r',
            name: 'Kavitha R',
            image: studentPlaceholder,
            achievements: [
                { type: 'board', year: 2026, stream: 'Commerce', score: '558/600' }
            ]
        },
        {
            id: 'srushti-m',
            name: 'Srushti M',
            image: studentPlaceholder,
            achievements: [
                { type: 'neet', year: 2024, score: '612/720' }
            ]
        },
        {
            id: 'tejas-a-c',
            name: 'Tejas A C',
            image: studentPlaceholder,
            achievements: [
                { type: 'neet', year: 2024, score: '595/720' },
                { type: 'kcet', year: 2024, engineeringRank: 4761 }
            ]
        },
        {
            id: 'madhushree-k-r',
            name: 'Madhushree K R',
            image: studentPlaceholder,
            achievements: [
                { type: 'neet', year: 2024, score: '567/720' },
                { type: 'kcet', year: 2024, engineeringRank: 1801, agricultureRank: 269 },
                { type: 'admission', year: 2024, course: 'MBBS', college: 'BGS Global Institute of Medical Science, Bangalore' }
            ]
        },
        {
            id: 'thaniya-v-gowda',
            name: 'Thaniya V Gowda',
            image: studentPlaceholder,
            achievements: [
                { type: 'kcet', year: 2024, architectureRank: 90 },
                { type: 'admission', year: 2024, course: 'B.E Architecture', college: 'UVCE' }
            ]
        },
        {
            id: 'ashok-r',
            name: 'Ashok R',
            image: studentPlaceholder,
            achievements: [
                { type: 'kcet', year: 2024, engineeringRank: 1479, agricultureRank: 748 },
                { type: 'admission', year: 2024, course: 'Aerospace', college: 'RV College' }
            ]
        },
        {
            id: 'mukul-r-kulkarni',
            name: 'Mukul R Kulkarni',
            image: studentPlaceholder,
            achievements: [
                { type: 'kcet', year: 2024, engineeringRank: 2158 }
            ]
        },
        {
            id: 'akshay-ganesh',
            name: 'Akshay Ganesh',
            image: studentPlaceholder,
            achievements: [
                { type: 'kcet', year: 2024, engineeringRank: 2772, agricultureRank: 1518 },
                { type: 'admission', year: 2024, course: 'Aerospace', college: 'RV College' }
            ]
        },
        {
            id: 'amruth-n-murthy',
            name: 'Amruth N Murthy',
            image: studentPlaceholder,
            achievements: [
                { type: 'kcet', year: 2024, engineeringRank: 6408 },
                { type: 'admission', year: 2024, course: 'Biotechnology', college: 'RV College' }
            ]
        },
        {
            id: 'girish-n-s',
            name: 'Girish N S',
            image: studentPlaceholder,
            achievements: [
                { type: 'kcet', year: 2024, engineeringRank: 8150 },
                { type: 'admission', year: 2024, course: 'Computer Science', college: 'RNSIT' }
            ]
        },
        {
            id: 'nandita-s-mathad',
            name: 'Nandita S Mathad',
            image: studentPlaceholder,
            achievements: [
                { type: 'kcet', year: 2024, engineeringRank: 8345 },
                { type: 'admission', year: 2024, course: 'Computer Science', college: 'RNSIT' }
            ]
        },
        {
            id: 'hamsa-m',
            name: 'Hamsa M',
            image: studentPlaceholder,
            achievements: [
                { type: 'admission', year: 2024, course: 'MBBS', college: 'Adichunchanagiri Institute of Medical Science, B.G. Nagar' }
            ]
        },
        {
            id: 'hamsa-s',
            name: 'Hamsa S',
            image: studentPlaceholder,
            achievements: [
                { type: 'admission', year: 2024, course: 'BDS', college: 'KIMS, Bangalore' }
            ]
        },
        {
            id: 'vikas-b-h',
            name: 'Vikas B H',
            image: studentPlaceholder,
            achievements: [
                { type: 'admission', year: 2024, course: 'Mechanical', college: 'RV College' }
            ]
        },
        {
            id: 'kavana-n-murthy',
            name: 'Kavana N Murthy',
            image: studentPlaceholder,
            achievements: [
                { type: 'admission', year: 2024, course: 'Mechanical', college: 'RV College' }
            ]
        }
    ];

    function escapeHTML(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function parseScore(score) {
        if (!score || typeof score !== 'string') {
            return 0;
        }

        const [marks] = score.split('/');
        return Number.parseInt(marks, 10) || 0;
    }

    function getBoardAchievements(student) {
        return student.achievements.filter((achievement) => achievement.type === 'board');
    }

    function getBoardScore(student) {
        return getBoardAchievements(student).reduce((highest, achievement) => {
            return Math.max(highest, parseScore(achievement.score));
        }, 0);
    }

    function getPrimaryBoardAchievement(student) {
        return getBoardAchievements(student)
            .slice()
            .sort((a, b) => parseScore(b.score) - parseScore(a.score))[0];
    }

    function getBestStateRankValue(student) {
        return getBoardAchievements(student).reduce((bestRank, achievement) => {
            const match = String(achievement.rank || '').match(/\d+/);
            const rank = match ? Number.parseInt(match[0], 10) : Number.POSITIVE_INFINITY;
            return Math.min(bestRank, rank);
        }, Number.POSITIVE_INFINITY);
    }

    function hasStateRank(student) {
        return getBoardAchievements(student).some((achievement) => Boolean(achievement.rank));
    }

    function sortByBoardPriority(a, b) {
        if (hasStateRank(a) !== hasStateRank(b)) {
            return Number(hasStateRank(b)) - Number(hasStateRank(a));
        }

        const rankDiff = getBestStateRankValue(a) - getBestStateRankValue(b);
        if (rankDiff !== 0) {
            return rankDiff;
        }

        return getBoardScore(b) - getBoardScore(a);
    }

    function getSectionStudents(sectionType) {
        if (sectionType === 'top-achievers') {
            return students
                .filter((student) => getPrimaryBoardAchievement(student))
                .sort(sortByBoardPriority)
                .slice(0, HERO_RANKER_COUNT);
        }

        if (sectionType === 'all-achievers') {
            return students
                .filter((student) => getPrimaryBoardAchievement(student))
                .sort(sortByBoardPriority);
        }

        return [];
    }

    function renderCard(student, sectionType) {
        const card = document.createElement('article');
        card.className = 'result-card reveal-on-scroll';

        const primaryBoard = getPrimaryBoardAchievement(student);
        const highlight = primaryBoard?.rank || primaryBoard?.score || 'Achievement';
        const supportingDetails = [
            primaryBoard?.year,
            primaryBoard?.stream
        ].filter(Boolean).join(' • ');

        card.innerHTML = `
            <div class="result-card-image">
              <img src="${escapeHTML(student.image || studentPlaceholder)}" alt="${escapeHTML(student.name)}" loading="lazy">
            </div>
            <div class="result-card-body">
              <h3>${escapeHTML(student.name)}</h3>
              <p class="result-highlight">${escapeHTML(highlight)}</p>
              <p class="result-meta">${escapeHTML(supportingDetails)}</p>
            </div>
        `;

        return card;
    }

    function renderStandardSection(section, sectionStudents, sectionType) {
        const fragment = document.createDocumentFragment();
        sectionStudents
            .map((student) => renderCard(student, sectionType))
            .forEach((card) => fragment.appendChild(card));
        section.replaceChildren(fragment);
    }

    function observeRevealItems(items) {
        if (!('IntersectionObserver' in window)) {
            items.forEach((item) => item.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        items.forEach((item) => observer.observe(item));
    }

    document.querySelectorAll('[data-results-section]').forEach((section) => {
        const sectionType = section.dataset.resultsSection;

        const sectionStudents = getSectionStudents(sectionType);
        renderStandardSection(section, sectionStudents, sectionType);

        if (!sectionStudents.length) {
            section.closest('section')?.remove();
        }
    });

    observeRevealItems(document.querySelectorAll('.reveal-on-scroll'));

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
