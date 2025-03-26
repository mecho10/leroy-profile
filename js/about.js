// 翻譯資源
const translations = {
    zh: {
        'page-title': '關於我',
        'nav-home': '首頁',
        'nav-about': '自介',
        'nav-photo': '照片',
        'nav-contact': '聯絡',
        'basic-info': '基本資料',
        'name-label': '姓名:',
        'age-label': '年齡:',
        'location-label': '居住地:',
        'contact-label': '聯絡方式:',
        'project-label': '專案:',
        'skills-label': '技能:',
        'experience-title': '經歷:',
        'experience-description': '我是自學的前端開發者，沒有的學術背景。雖然我的過去職業與前端開發無關，但透過自學和實作專案，我累積了實際的開發經驗。我獨立開發了個人作品集網站，並熟練掌握 HTML 和 CSS。目前，我正在學習 Vue.js，希望能運用這些技能順利轉職成為前端開發工程師。',
        'work-experience-title': '工作經驗',
        'job-1': {
            'title': 'Sushi Cushi Restaurant (Canada)',
            'period': '2024 Jan - 2024 Dec',
            'description': [
                '料理的製作流程與食材處理',
                '學會了高效運作的廚房管理技巧',
                '北美地區的餐廳更重視溝通、耐心以及團隊合作'
            ]
        },
        'job-2': {
            'title': '個人專案',
            'period': '2024 - Present',
            'description': [
                '使用HTML, CSS, JavaScript 從零開始建立個人作品集網站',
                '使用Vue.js 開發小型網頁應用以練習',
                '參與並貢獻於 GitHub 上的開源專案'
            ]
        },
        'copyright': 'Copyright © 2024 LEROY. All rights reserved.'
    },
    en: {
        'page-title': 'About Me',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-photo': 'Photos',
        'nav-contact': 'Contact',
        'basic-info': 'Basic Information',
        'name-label': 'Name:',
        'age-label': 'Age:',
        'location-label': 'Location:',
        'contact-label': 'Contact:',
        'project-label': 'Projects:',
        'skills-label': 'Skills:',
        'experience-title': 'Experience:',
        'experience-description': 'I am a self-taught front-end developer without an academic background. Although my previous occupation was unrelated to front-end development, I have accumulated practical development experience through self-learning and project implementation. I have independently developed a personal portfolio website and have a solid grasp of HTML and CSS. Currently, I am learning Vue.js, hoping to successfully transition into a front-end development engineer.',
        'work-experience-title': 'Work Experience',
        'job-1': {
            'title': 'Sushi Cushi Restaurant (Canada)',
            'period': 'Jan 2024 - Dec 2024',
            'description': [
                'Culinary process and ingredient handling',
                'Learned efficient kitchen management skills',
                'North American restaurants emphasize communication, patience, and teamwork'
            ]
        },
        'job-2': {
            'title': 'Personal Projects',
            'period': '2024 - Present',
            'description': [
                'Built personal portfolio website from scratch using HTML, CSS, JavaScript',
                'Developed small web applications using Vue.js for practice',
                'Participated and contributed to open-source projects on GitHub'
            ]
        },
        'copyright': 'Copyright © 2024 LEROY. All rights reserved.'
    }
};

// 切換語言
function setLanguage(language) {
    // 更新語言按鈕狀態
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === language);
    });

    // 翻譯單一元素
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[language][key];
    });

    // 翻譯元素組
    document.querySelectorAll('[data-translate-group]').forEach(el => {
        const group = el.dataset.translateGroup;
        
        if (group.startsWith('job-')) {
            const jobData = translations[language][group];
            const childElements = el.querySelectorAll('h3, .job-period, .job-description li');
            
            childElements[0].textContent = jobData.title;
            childElements[1].textContent = jobData.period;
            
            jobData.description.forEach((desc, index) => {
                childElements[index + 2].textContent = desc;
            });
        }
    });

    // 保存語言選擇
    localStorage.setItem('selectedLanguage', language);
}

// 初始化語言
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'zh';
    
    // 添加語言切換事件
    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.lang;
            setLanguage(language);
        });
    });

    // 設置初始語言
    setLanguage(savedLanguage);
});