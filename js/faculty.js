document.addEventListener('DOMContentLoaded', async () => {
    const facultyDataPath = './data/faculty-2026.json';

    const createTextElement = (tagName, className, text) => {
        const element = document.createElement(tagName);
        element.className = className;
        element.textContent = text;
        return element;
    };

    const formatExperience = (experience) => {
        if (experience === undefined || experience === null || experience === '') {
            return '';
        }

        return `${experience} Years of Experience`;
    };

    const createProfileImage = (person) => {
        const image = document.createElement('img');
        image.src = person.image;
        image.alt = person.name;

        if (person.fallbackImage) {
            image.addEventListener('error', () => {
                image.src = person.fallbackImage;
            }, { once: true });
        }

        return image;
    };

    const getLeadershipRankByName = (administrators) => {
        const rankByName = new Map();

        if (!Array.isArray(administrators)) {
            return rankByName;
        }

        administrators.forEach((administrator, index) => {
            rankByName.set(administrator.name, administrator.leadershipRank ?? index + 1);
        });

        return rankByName;
    };

    const sortFacultyMembers = (facultyMembers, leadershipRankByName) => {
        return [...facultyMembers].sort((firstFacultyMember, secondFacultyMember) => {
            const firstLeadershipRank = leadershipRankByName.get(firstFacultyMember.name);
            const secondLeadershipRank = leadershipRankByName.get(secondFacultyMember.name);
            const firstIsLeader = Number.isFinite(firstLeadershipRank);
            const secondIsLeader = Number.isFinite(secondLeadershipRank);

            if (firstIsLeader && secondIsLeader) {
                return firstLeadershipRank - secondLeadershipRank;
            }

            if (firstIsLeader) {
                return -1;
            }

            if (secondIsLeader) {
                return 1;
            }

            const firstExperience = Number(firstFacultyMember.experience) || 0;
            const secondExperience = Number(secondFacultyMember.experience) || 0;

            return secondExperience - firstExperience;
        });
    };

    const renderAdministration = (administrators) => {
        const adminGrid = document.querySelector('[data-admin-grid]');
        if (!adminGrid || !Array.isArray(administrators)) {
            return;
        }

        const fragment = document.createDocumentFragment();

        administrators.forEach((administrator) => {
            const card = document.createElement('article');
            card.className = 'admin-card';

            const avatar = document.createElement('div');
            avatar.className = 'admin-avatar';
            avatar.setAttribute('aria-hidden', 'true');

            if (administrator.image) {
                avatar.appendChild(createProfileImage(administrator));
            } else {
                avatar.textContent = administrator.initials || '';
            }

            const info = document.createElement('div');
            info.className = 'admin-info';
            info.appendChild(createTextElement('h3', 'admin-name', administrator.name));

            const adminMeta = administrator.department
                ? `${administrator.role} • ${administrator.department}`
                : administrator.role;

            info.appendChild(createTextElement('p', 'admin-meta', adminMeta));

            card.append(avatar, info);

            fragment.appendChild(card);
        });

        adminGrid.replaceChildren(fragment);
    };

    const renderFacultyCard = (facultyMember) => {
        const card = document.createElement('article');
        card.className = 'faculty-card';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'faculty-image-container';

        imageContainer.appendChild(createProfileImage(facultyMember));

        const info = document.createElement('div');
        info.className = 'faculty-info';
        info.appendChild(createTextElement('h3', 'faculty-name', facultyMember.name));

        if (facultyMember.qualification) {
            info.appendChild(createTextElement('p', 'faculty-qualification', facultyMember.qualification));
        }

        if (facultyMember.subject) {
            info.appendChild(createTextElement('p', 'faculty-subject', `Subject: ${facultyMember.subject}`));
        }

        const experience = formatExperience(facultyMember.experience);
        if (experience) {
            info.appendChild(createTextElement('p', 'faculty-experience', experience));
        }

        if (facultyMember.profilePending) {
            info.appendChild(createTextElement('p', 'faculty-details-pending', 'Profile details will be updated shortly.'));
        }

        card.append(imageContainer, info);
        return card;
    };

    const renderDepartments = (departments, administrators) => {
        const leadershipRankByName = getLeadershipRankByName(administrators);

        document.querySelectorAll('[data-faculty-department]').forEach((grid) => {
            const departmentKey = grid.dataset.facultyDepartment;
            const facultyMembers = departments?.[departmentKey];

            if (!Array.isArray(facultyMembers)) {
                return;
            }

            const fragment = document.createDocumentFragment();
            sortFacultyMembers(facultyMembers, leadershipRankByName).forEach((facultyMember) => {
                fragment.appendChild(renderFacultyCard(facultyMember));
            });

            grid.replaceChildren(fragment);
        });
    };

    try {
        const response = await fetch(facultyDataPath);

        if (!response.ok) {
            throw new Error(`Unable to load faculty data: ${response.status}`);
        }

        const facultyData = await response.json();
        renderAdministration(facultyData.administration);
        renderDepartments(facultyData.departments, facultyData.administration);
    } catch (error) {
        console.error(error);
    }
});
