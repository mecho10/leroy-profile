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
});