// 語言翻譯數據
const translations = {
    zh: {
        "home-link": "首頁",
        "about-link": "自介",
        "photo-link": "照片",
        "contact-link": "聯絡",
        "me1": "我的照片收藏",
        "me2": "個人照片畫廊",
        "me3": "捕捉的回憶",
        "me4": "點擊任何一張照片以查看完整尺寸",
        "you1": "全部",
        "you2": "旅行",
        "you3": "個人",
        "you4" : "大自然",
        "travel1": "旅行冒險",
        "travel4": "極光",
        "travel6": "極光",
        "contact": "聯絡方式"
    },
    en: {
        "home-link": "Home",
        "about-link": "About",
        "photo-link": "Photo",
        "contact-link": "Contact",
        "me1": "My photo collection",
        "me2": "Personal gallery",
        "me3": "Memories",
        "me4": "Click any photo to view full size",
        "you1": "All",
        "you2": "Travel",
        "you3": "Personal",
        "you4" : "Nature",
        "travel1": "Travel adventures",
        "travel4": "Aurora",
        "travel6": "Aurora",
        "contact": "Contact"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Set animation delays for gallery items
    galleryItems.forEach((item, index) => {
        // Ensure each item has its own delay for the staggered effect
        item.style.animationDelay = `${0.1 * index}s`;
    });
    
    // Filter gallery items by category
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // Reset animation
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = 'staggerFadeIn 0.5s ease forwards';
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Open lightbox when clicking on gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('h4').textContent;
            const description = item.querySelector('p').textContent;
            
            lightboxImg.src = imgSrc;
            lightboxCaption.textContent = `${title} - ${description}`;
            lightbox.classList.add('active');
            
            // Prevent scrolling on the body
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Add hover effect to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.gallery-overlay');
            overlay.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.gallery-overlay');
            overlay.style.transform = 'translateY(100%)';
        });
    });
});
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
                el.textContent = translations[lang][key];
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
function setLanguage(lang) {
    console.log(`Setting language: ${lang}`);  // 🐛 Debug
    zhBtn.classList.toggle('active', lang === 'zh');
    enBtn.classList.toggle('active', lang === 'en');
    htmlRoot.lang = lang === 'zh' ? 'zh-TW' : 'en';

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        console.log(`Translating key: ${key}, Value: ${translations[lang][key]}`); // 🐛 Debug

        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        } else {
            console.warn(`Translation missing for key: ${key}`);
        }
    });

    localStorage.setItem('language', lang);
};