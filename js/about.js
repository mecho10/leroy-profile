// 語言翻譯數據
const translations = {
    zh: {
        "title": "About Leroy CHANG",
        "About me": "關於我",
        "home-link": "首頁",
        "about-link": "關於我",
        "photo-link": "照片",
        "contact-link": "聯絡",
        "Basic Information": "基本資料",
        "name": "姓名: Leroy CHANG",
        "age": "年齡: 28",
        "contact": "聯絡方式: chang861019@gmail.com",
        "project": "專案:",
        "skill": "技能:",
        "Experience": "經歷:",
        "story": "我是自學的前端開發者，沒有的學術背景。雖然我的過去職業與前端開發無關，但透過自學和實作專案，我累積了實際的開發經驗。我獨立開發了個人作品集網站，並熟練掌握 HTML 和 CSS。目前，我正在學習 Vue.js，希望能運用這些技能順利轉職成為前端開發工程師。",
        "workex": "工作經驗",
        "work1": "料理的製作流程與食材處理",
        "work2": "學會了高效運作的廚房管理技巧",
        "work3": "北美地區的餐廳更重視溝通、耐心以及團隊合作",
        "personal-project": "個人專案",
        "project1": "使用HTML, CSS, JavaScript 從零開始建立個人作品集網站",
        "project2": "使用Vue.js 開發小型網頁應用以練習",
        "project3": "參與並貢獻於 GitHub 上的開源專案，這讓我更了解團隊協作、版本控制和開源社區的工作流程"
    },
    en: {
        "title": "About Leroy CHANG",
        "About me": "About me",
        "home-link": "Home",
        "about-link": "About me",
        "photo-link": "Photo",
        "contact-link": "Contact",
        "Basic Information": "Basic Information",
        "name": "Name: Leroy CHANG",
        "age": "Age: 28",
        "contact": "Contact: chang861019@gmail.com",
        "project": "Project",
        "skill": "Skills:",
        "Experience": "Experience:",
        "story": "I am a self-taught front-end developer with no academic background in the field. Although my past career was unrelated to front-end development, I have gained practical experience through self-learning and hands-on projects. I independently developed a personal portfolio website and have a strong command of HTML and CSS. Currently, I am learning Vue.js and hope to leverage these skills to successfully transition into a front-end developer role.",
        "workex": "Work Experience",
        "work1": "Food preparation and ingredient management",
        "work2": "Learned efficient kitchen management skills",
        "work3": "Restaurants in North America emphasize communication, patience, and teamwork",
        "personal-project": "Personal Project",
        "project1": "Built a personal portfolio website from scratch using HTML, CSS, and JavaScript.",
        "project2": "Developed small web applications with Vue.js for practice.",
        "project3": "Contributed to open-source projects on GitHub, gaining experience in team collaboration, version control, and open-source workflows."
    }
};

// 等待DOM完全載入
document.addEventListener('DOMContentLoaded', function() {
    const zhBtn = document.getElementById('zh-btn');
    const enBtn = document.getElementById('en-btn');
    const htmlRoot = document.getElementById('html-root');

    // 確保按鈕存在
    if (!zhBtn || !enBtn) {
        console.error('Language buttons not found');
        return;
    }

    // 切換語言的函數
    function setLanguage(lang) {
        // 更新按鈕狀態
        zhBtn.classList.toggle('active', lang === 'zh');
        enBtn.classList.toggle('active', lang === 'en');

        // 更新語言屬性
        htmlRoot.lang = lang === 'zh' ? 'zh-TW' : 'en';

        // 翻譯所有帶有 data-translate 屬性的元素
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            } else {
                console.warn(`Translation missing for key: ${key}`);
            }
        });

        // 儲存語言偏好
        localStorage.setItem('language', lang);
    }

    // 設置初始語言
    const savedLanguage = localStorage.getItem('language') || 'zh';
    setLanguage(savedLanguage);

    // 添加語言切換事件監聽器
    zhBtn.addEventListener('click', () => setLanguage('zh'));
    enBtn.addEventListener('click', () => setLanguage('en'));
});
document.addEventListener('DOMContentLoaded', function() {
    // 選取漢堡選單按鈕和導航欄
    const menuButton = document.querySelector('.menu');
    const navigation = document.querySelector('header nav ul');

    // 確保元素存在
    if (menuButton && navigation) {
        // 點擊漢堡選單時切換導航欄顯示
        menuButton.addEventListener('click', function() {
            navigation.classList.toggle('active');
        });

        // 添加視窗大小變化監聽器
        window.addEventListener('resize', function() {
            // 當視窗寬度大於768px時，確保導航欄可見
            if (window.innerWidth > 768) {
                navigation.classList.remove('active');
                navigation.style.display = '';
            }
        });
    } else {
        console.error('Menu button or navigation not found');
    }
});