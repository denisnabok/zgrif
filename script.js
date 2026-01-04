
document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация иконок (критично для отображения)
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Логика FAQ (Аккордеон)
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const body = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            // Если блок уже открыт, закрываем его
            const isOpen = body.style.maxHeight !== '0px' && body.style.maxHeight !== '';
            
            // Сначала закрываем все остальные
            document.querySelectorAll('.faq-body').forEach(el => el.style.maxHeight = '0px');
            document.querySelectorAll('.faq-btn i').forEach(el => el.style.transform = 'rotate(0deg)');
            
            // Если был закрыт — открываем
            if (!isOpen) {
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // 3. Мобильное меню
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            iconOpen.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });
    }

    // Закрытие меню при клике по ссылке
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    });

    // 4. Эффект при скролле (шапка)
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2', 'shadow-md');
            header.classList.remove('py-4', 'shadow-sm');
        } else {
            header.classList.add('py-4', 'shadow-sm');
            header.classList.remove('py-2', 'shadow-md');
        }
    });

    // 5. Обработка формы
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = orderForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'ОТПРАВЛЕНО ✔';
            btn.classList.add('bg-green-600');
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-green-600');
                orderForm.reset();
            }, 3000);
        });
    }
});
