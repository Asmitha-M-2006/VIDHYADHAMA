document.addEventListener('DOMContentLoaded', () => {
    const studentPlaceholder = './assets/web/placeholders/student-placeholder.svg';
    const HERO_RANKER_COUNT = 3;
    const FEATURED_COUNT = 5;
    const TOP_BOARD_INITIAL_COUNT = 9;
    const DISTINCTION_INITIAL_COUNT = 10;
    const usedStudentIds = new Set();

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

    function isCompetitive(student) {
        return student.achievements.some((achievement) => {
            return ['neet', 'kcet', 'admission'].includes(achievement.type);
        });
    }

    function getCompetitivePriority(student) {
        const bestKcetRank = student.achievements
            .filter((achievement) => achievement.type === 'kcet')
            .flatMap((achievement) => [
                achievement.architectureRank,
                achievement.engineeringRank,
                achievement.agricultureRank
            ])
            .filter(Boolean)
            .sort((a, b) => a - b)[0] || 999999;

        const bestNeetScore = student.achievements
            .filter((achievement) => achievement.type === 'neet')
            .reduce((highest, achievement) => Math.max(highest, parseScore(achievement.score)), 0);

        const hasAdmission = student.achievements.some((achievement) => achievement.type === 'admission');

        return (hasAdmission ? 1000000 : 0) + bestNeetScore * 1000 - bestKcetRank;
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
        if (sectionType === 'hero-rankers') {
            return students
                .filter((student) => hasStateRank(student))
                .sort(sortByBoardPriority)
                .slice(0, HERO_RANKER_COUNT);
        }

        if (sectionType === 'featured') {
            return students
                .filter((student) => !usedStudentIds.has(student.id))
                .filter((student) => hasStateRank(student) || getBoardScore(student) >= 585)
                .sort(sortByBoardPriority)
                .slice(0, FEATURED_COUNT);
        }

        if (sectionType === 'top-board') {
            return students
                .filter((student) => !usedStudentIds.has(student.id))
                .filter((student) => getBoardScore(student) >= 570)
                .sort(sortByBoardPriority);
        }

        if (sectionType === 'science' || sectionType === 'commerce') {
            return students
                .filter((student) => !usedStudentIds.has(student.id))
                .filter((student) => {
                    const achievement = getPrimaryBoardAchievement(student);
                    const score = getBoardScore(student);

                    return achievement
                        && achievement.stream.toLowerCase() === sectionType
                        && score >= 510
                        && score <= 569;
                })
                .sort((a, b) => getBoardScore(b) - getBoardScore(a));
        }

        if (sectionType === 'competitive') {
            return students
                .filter((student) => !usedStudentIds.has(student.id))
                .filter(isCompetitive)
                .sort((a, b) => getCompetitivePriority(b) - getCompetitivePriority(a));
        }

        if (sectionType === 'archive') {
            return students
                .filter((student) => !usedStudentIds.has(student.id))
                .sort((a, b) => {
                    const boardDiff = getBoardScore(b) - getBoardScore(a);
                    return boardDiff || a.name.localeCompare(b.name);
                });
        }

        return [];
    }

    function getYears(student) {
        return [...new Set(student.achievements.map((achievement) => achievement.year).filter(Boolean))]
            .sort((a, b) => b - a);
    }

    function getCategory(student, sectionType) {
        if (sectionType === 'hero-rankers' || sectionType === 'featured') {
            return hasStateRank(student) ? 'State Rank' : 'Board Topper';
        }

        if (sectionType === 'top-board') {
            return 'Board';
        }

        if (sectionType === 'science' || sectionType === 'commerce') {
            return 'Distinction';
        }

        if (isCompetitive(student)) {
            return 'Competitive';
        }

        return 'Archive';
    }

    function getHighlight(student, sectionType) {
        const primaryBoard = getPrimaryBoardAchievement(student);

        if (hasStateRank(student) && primaryBoard?.rank) {
            return primaryBoard.rank;
        }

        if (sectionType === 'competitive') {
            const admission = student.achievements.find((achievement) => achievement.type === 'admission');
            const neet = student.achievements.find((achievement) => achievement.type === 'neet');
            const kcet = student.achievements.find((achievement) => achievement.type === 'kcet');

            if (admission) {
                return `${admission.course} - ${admission.college}`;
            }

            if (neet) {
                return `NEET ${neet.score}`;
            }

            if (kcet) {
                return 'KCET Achiever';
            }
        }

        if (primaryBoard?.score) {
            return primaryBoard.score;
        }

        return getCategory(student, sectionType);
    }

    // Priority classes keep visual hierarchy in CSS without changing the data model.
    function getPriorityClasses(student, sectionType) {
        const classes = [];
        const boardScore = getBoardScore(student);

        if (sectionType === 'hero-rankers') {
            classes.push('result-card-hero-ranker');
        }

        if (hasStateRank(student)) {
            classes.push('ranker');
        }

        if (boardScore >= 590) {
            classes.push('topper');
        }

        if (sectionType === 'archive') {
            classes.push('result-card-archive-light');
        }

        return classes.join(' ');
    }

    function formatAchievement(achievement) {
        if (achievement.type === 'board') {
            return [
                achievement.year,
                achievement.stream,
                achievement.score,
                achievement.rank
            ].filter(Boolean).join(' · ');
        }

        if (achievement.type === 'neet') {
            return ['NEET', achievement.score].filter(Boolean).join(' · ');
        }

        if (achievement.type === 'kcet') {
            return [
                achievement.architectureRank ? `Architecture Rank ${achievement.architectureRank}` : '',
                achievement.engineeringRank ? `Engineering Rank ${achievement.engineeringRank}` : '',
                achievement.agricultureRank ? `Agriculture Rank ${achievement.agricultureRank}` : ''
            ].filter(Boolean).join(' · ');
        }

        if (achievement.type === 'admission') {
            return [achievement.course, achievement.college].filter(Boolean).join(' · ');
        }

        return '';
    }

    function buildMetaItems(student, sectionType) {
        if (sectionType === 'competitive') {
            return student.achievements.map(formatAchievement).filter(Boolean);
        }

        const primaryBoard = getPrimaryBoardAchievement(student);

        return [
            primaryBoard?.year,
            primaryBoard?.stream,
            primaryBoard?.score,
            primaryBoard?.rank
        ].filter(Boolean);
    }

    function renderCard(student, sectionType) {
        const card = document.createElement('article');
        card.className = [
            'result-card',
            `result-card-${sectionType}`,
            getPriorityClasses(student, sectionType),
            'reveal-on-scroll'
        ].filter(Boolean).join(' ');

        const years = getYears(student);
        const yearLabel = years.length ? years[0] : 'Result';
        const metaItems = buildMetaItems(student, sectionType)
            .map((item) => `<li>${escapeHTML(item)}</li>`)
            .join('');

        card.innerHTML = `
            <div class="result-card-image">
              <img src="${escapeHTML(student.image || studentPlaceholder)}" alt="${escapeHTML(student.name)}" loading="lazy">
            </div>
            <div class="result-card-body">
              <div class="result-card-topline">
                <span class="year-badge">${escapeHTML(yearLabel)}</span>
                <span class="result-category">${escapeHTML(getCategory(student, sectionType))}</span>
              </div>
              <h3>${escapeHTML(student.name)}</h3>
              <p class="result-highlight">${escapeHTML(getHighlight(student, sectionType))}</p>
              <ul class="result-meta-list">${metaItems}</ul>
            </div>
        `;

        return card;
    }

    function addStudentsToUsedList(sectionStudents) {
        sectionStudents.forEach((student) => usedStudentIds.add(student.id));
    }

    function renderStandardSection(section, sectionStudents, sectionType) {
        const fragment = document.createDocumentFragment();
        sectionStudents
            .map((student) => renderCard(student, sectionType))
            .forEach((card) => fragment.appendChild(card));
        section.replaceChildren(fragment);
    }

    // Large sections render a short first view and expand only when requested.
    function renderLimitedSection(section, sectionStudents, sectionType, limit, buttonLabel = 'View Full Results') {
        const visibleStudents = sectionStudents.slice(0, limit);
        renderStandardSection(section, visibleStudents, sectionType);

        const oldToggle = section.parentElement.querySelector('.results-section-toggle');
        oldToggle?.remove();

        if (sectionStudents.length <= limit) {
            return;
        }

        const toggle = document.createElement('button');
        toggle.className = 'btn btn-primary results-section-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = buttonLabel;

        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const nextStudents = isExpanded ? sectionStudents.slice(0, limit) : sectionStudents;

            toggle.setAttribute('aria-expanded', String(!isExpanded));
            toggle.textContent = isExpanded ? buttonLabel : 'Hide Results';
            section.classList.toggle('is-expanded', !isExpanded);
            renderStandardSection(section, nextStudents, sectionType);
            observeRevealItems(section.querySelectorAll('.reveal-on-scroll'));
        });

        section.insertAdjacentElement('afterend', toggle);
    }

    function renderDistinctionSection(section, sectionStudents, sectionType) {
        const visibleStudents = sectionStudents.slice(0, DISTINCTION_INITIAL_COUNT);
        renderStandardSection(section, visibleStudents, sectionType);

        const oldToggle = section.parentElement.querySelector('.results-distinction-toggle');
        oldToggle?.remove();

        if (sectionStudents.length <= DISTINCTION_INITIAL_COUNT) {
            return;
        }

        const toggle = document.createElement('button');
        toggle.className = 'btn btn-primary results-section-toggle results-distinction-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'View More';

        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isExpanded));
            toggle.textContent = isExpanded ? 'View More' : 'Show Less';
            section.classList.toggle('is-expanded', !isExpanded);
            renderStandardSection(
                section,
                isExpanded ? sectionStudents.slice(0, DISTINCTION_INITIAL_COUNT) : sectionStudents,
                sectionType
            );
            observeRevealItems(section.querySelectorAll('.reveal-on-scroll'));
        });

        section.insertAdjacentElement('afterend', toggle);
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

        if (['state-rank', 'neet', 'kcet', 'professional'].includes(sectionType)) {
            section.closest('.results-subsection, .competitive-group')?.remove();
            return;
        }

        const sectionStudents = getSectionStudents(sectionType);

        if (sectionType === 'top-board') {
            renderLimitedSection(section, sectionStudents, sectionType, TOP_BOARD_INITIAL_COUNT);
        } else if (sectionType === 'science' || sectionType === 'commerce') {
            renderDistinctionSection(section, sectionStudents, sectionType);
        } else {
            renderStandardSection(section, sectionStudents, sectionType);
        }

        addStudentsToUsedList(sectionStudents);

        if (!sectionStudents.length) {
            section.closest('.results-subsection, .competitive-group')?.remove();
        }
    });

    const archiveToggle = document.querySelector('.results-archive-toggle');
    const archivePanel = document.getElementById('resultsArchiveGrid');

    if (archiveToggle && archivePanel) {
        archiveToggle.addEventListener('click', () => {
            const isExpanded = archiveToggle.getAttribute('aria-expanded') === 'true';
            archiveToggle.setAttribute('aria-expanded', String(!isExpanded));
            archivePanel.hidden = isExpanded;
            archiveToggle.textContent = isExpanded ? 'View Full Results Archive' : 'Hide Results Archive';
            observeRevealItems(archivePanel.querySelectorAll('.reveal-on-scroll'));
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

    observeRevealItems(document.querySelectorAll('.reveal-on-scroll'));

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
