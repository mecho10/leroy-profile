// 語言翻譯數據
const translations = {
    zh: {
        "title": "我的簡歷",
        "home": "首頁",
        "home-link": "首頁",
        "about-link": "關於我",
        "photo-link": "照片",
        "contact-link": "聯絡",
        "autobiography": "自傳",
        "intro-1": "我是 Leroy Chang",
        "intro-2": "沒有相關科系背景與相關工作經驗，透過自學進入前端開發領域",
        "name": "LEROY CHANG",
        "more": "更多...",
        "good-intro-1": "我是 Leroy Chang",
        "good-intro-2": "在我出社會後，所有的工作經驗都是餐飲業，做了6年以上的餐飲業，這段經歷讓我學會了團隊合作、應對挑戰。工作了一陣子後也漸漸地明白工作對自己的意義是什麼以及自己重視的地方，當然這些想法也可能隨著年紀的不同而有所轉變，雖然穩定但因為產業屬性的關係難以想像五年後的自己會是什麼模樣、甚至是十年後二十年後..每天穩定且平淡，這樣沒有不好但總感覺能做的更多，轉職的念頭一直存在我心中，但踏出舒適圈不是件簡單的事情有太多事情要考慮，包括跳槽到哪個行業？沒有經濟來源該怎麼辦？一些看起來很嚴重的問題就讓我遲遲不敢有什麼實際的行動，最後決定在我26歲時獨自遠赴加拿大🇨🇦看看世界，在加拿大的這一年裡我接觸到了各種領域的人，接觸到軟體工程這個領域的朋友後決定先從網頁前端也是大家認為對零程式基礎的人最容易上手作為轉職起點。",
        "motto": "如果你從不嘗試，你將一無所知。",
        "learning-process": "自學過程",
        "learning-1": "開始觀看各種youtube教學影片",
        "learning-2": "掌握必備技能、基礎知識、自訂學習計劃",
        "learning-3": "掌握HTML & CSS 基礎",
        "learning-4": "開始學習JavaScript 基礎",
        "learning-5": "DOM 操作 + 事件處理",
        "learning-6": "整合 HTML / CSS / JS",
        "learning-7": "慢慢開始接觸Vue.js & React.js",
        "learning-goal": "希望能夠透過 Vue.js 與 React.js 建構更完整的 Web 應用，未來也計畫學習後端技術，成為具備全端能力的開發者",
        "contact": "聯絡方式",
        "contact-email": "透過電子郵件聯繫我",
        "send": "發送",
        "copyright": "版權所有 © 2024 LEROY. 保留所有權利。",
        "email-placeholder": "在此輸入您的電子郵件",
        "message-placeholder": "在此輸入您的訊息..."
    },
    en: {
        "title": "My Resume",
        "home": "Home",
        "home-link": "Home",
        "about-link": "About Me",
        "photo-link": "Photos",
        "contact-link": "Contact",
        "autobiography": "Autobiography",
        "intro-1": "I am Leroy Chang",
        "intro-2": "Without relevant academic background or work experience, I entered the front-end development field through self-learning",
        "name": "LEROY CHANG",
        "more": "More...",
        "good-intro-1": "I am Leroy Chang",
        "good-intro-2": "After entering society, all my work experience has been in the catering industry for over 6 years. This experience taught me teamwork and how to face challenges. After working for a while, I gradually understood the meaning of work and what I value. Of course, these thoughts might change with age. Although stable, the industry's nature makes it difficult to imagine what I'll be like in five years, or even ten or twenty years... Every day is stable and plain, which isn't bad, but I feel I could do more. The idea of changing careers has always been in my mind, but stepping out of my comfort zone isn't simple. There are many things to consider, such as which industry to switch to? What if I have no income? Some seemingly serious problems have kept me from taking any real action. Finally, I decided to travel to Canada 🇨🇦 alone when I was 26 to see the world. During that year in Canada, I met people from various fields and after connecting with friends in the software engineering field, I decided to start with web front-end development (which is considered the easiest for those with no programming background) as my career transition point.",
        "motto": "If you never try, you'll never find out.",
        "learning-process": "Learning Process",
        "learning-1": "Started watching various YouTube tutorial videos",
        "learning-2": "Mastered essential skills, basic knowledge, and created a self-study plan",
        "learning-3": "Mastered HTML & CSS basics",
        "learning-4": "Started learning JavaScript basics",
        "learning-5": "DOM manipulation + Event handling",
        "learning-6": "Integrated HTML / CSS / JS",
        "learning-7": "Gradually started exploring Vue.js & React.js",
        "learning-goal": "Hope to build more comprehensive web applications through Vue.js and React.js, and plan to learn backend technologies in the future to become a full-stack developer",
        "contact": "Contact Information",
        "contact-email": "Contact me by Email",
        "send": "Send",
        "copyright": "Copyright © 2024 LEROY. All rights reserved.",
        "email-placeholder": "Enter your email Here",
        "message-placeholder": "Your message here..."
    }
};

// 等待DOM完全加載
document.addEventListener('DOMContentLoaded', () => {
    // 選單功能
    const menuBtn = document.querySelector('.menu');
    const navMenu = document.querySelector('header ul');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // 點擊頁面其他地方關閉選單
    document.addEventListener('click', (e) => {
        if (!e.target.closest('header') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // 滾動效果
    const sections = document.querySelectorAll('section');
    
    const fadeInElements = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始設置
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 初次加載時檢查
    fadeInElements();
    
    // 滾動時檢查
    window.addEventListener('scroll', fadeInElements);
    
    // 表單提交處理
    const form = document.querySelector('.contact form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // 防止表單默認提交行為
            
            const button = form.querySelector('button');
            const emailInput = form.querySelector('input[type="email"]');
            const messageInput = form.querySelector('textarea');
            
            // 顯示提交中動畫
            button.textContent = '發送中...';
            button.disabled = true;
            
            // 使用Fetch API發送表單數據到Formspree
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                // 成功提交後
                button.textContent = '已發送!';
                button.style.backgroundColor = '#4CAF50';
                
                // 清空表單
                emailInput.value = '';
                messageInput.value = '';
                
                // 顯示成功訊息
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Message submitted successfully!';
                successMessage.style.color = '#4CAF50';
                successMessage.style.marginTop = '10px';
                successMessage.style.fontWeight = 'bold';
                form.appendChild(successMessage);
                
                // 定時移除成功訊息
                setTimeout(() => {
                    successMessage.remove();
                    
                    // 恢復按鈕狀態
                    button.textContent = '發送';
                    button.style.backgroundColor = '';
                    button.disabled = false;
                }, 3000);
            })
            .catch(error => {
                // 錯誤處理
                button.textContent = '發送失敗';
                button.style.backgroundColor = '#f44336';
                
                setTimeout(() => {
                    button.textContent = '發送';
                    button.style.backgroundColor = '';
                    button.disabled = false;
                }, 3000);
                
                console.error('Error:', error);
            });
        });
    }
    
    // 獲取所有導航鏈接
    const navLinks = document.querySelectorAll('header ul li a');

    // 為每個鏈接添加點擊事件
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 如果導航選單是打開的，則關閉它
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 語言切換功能
    const zhBtn = document.getElementById('zh-btn');
    const enBtn = document.getElementById('en-btn');
    const htmlRoot = document.getElementById('html-root');

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
            el.textContent = translations[lang][key];
        });

        // 更新表單輸入框的 placeholder
        const emailInput = document.querySelector('input[type="email"]');
        const messageInput = document.querySelector('textarea');
        if (emailInput) {
            emailInput.placeholder = translations[lang]['email-placeholder'];
        }
        if (messageInput) {
            messageInput.placeholder = translations[lang]['message-placeholder'];
        }

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