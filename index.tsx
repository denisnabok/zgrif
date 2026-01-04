
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    // @ts-ignore
    if (window.lucide) {
        // @ts-ignore
        window.lucide.createIcons();
    }

    // 2. FAQ Toggle Logic
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const body = btn.nextElementSibling as HTMLElement;
            const icon = btn.querySelector('i') as HTMLElement;
            
            const isOpen = body.style.maxHeight !== '0px' && body.style.maxHeight !== '';
            
            // Close all first
            document.querySelectorAll('.faq-body').forEach(el => (el as HTMLElement).style.maxHeight = '0px');
            document.querySelectorAll('.faq-btn i').forEach(el => (el as HTMLElement).style.transform = 'rotate(0deg)');
            
            if (!isOpen) {
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // 3. Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    menuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
        iconOpen?.classList.toggle('hidden');
        iconClose?.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });

    // Close mobile menu on links
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
            iconOpen?.classList.remove('hidden');
            iconClose?.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    });

    // 4. Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('py-2', 'shadow-md');
            header?.classList.remove('py-4', 'shadow-sm');
        } else {
            header?.classList.add('py-4', 'shadow-sm');
            header?.classList.remove('py-2', 'shadow-md');
        }
    });

    // 5. Order Form Mock
    const orderForm = document.getElementById('order-form');
    orderForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = orderForm.querySelector('button');
        if (btn) btn.innerText = 'ОТПРАВЛЕНО ✔';
        setTimeout(() => {
            if (btn) btn.innerText = 'ОТПРАВИТЬ ЗАЯВКУ';
            (orderForm as HTMLFormElement).reset();
        }, 3000);
    });
});
