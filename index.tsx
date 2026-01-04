
// Data Constants
const ADVANTAGES = [
    { title: 'Объёмы и сроки', desc: 'Документы любого объёма. Срочные заказы.', icon: 'clock' },
    { title: 'Все виды услуг', desc: 'Перевод, заверение, верстка, локализация.', icon: 'globe' },
    { title: 'Качество', desc: 'Стандарты ГОСТ и ISO. Бессрочная гарантия.', icon: 'shield-check' },
    { title: 'Индивидуальность', desc: 'Персональное сопровождение каждого клиента.', icon: 'user-check' },
    { title: 'Удобство', desc: 'Офис у метро или дистанционное оформление.', icon: 'smartphone' },
    { title: 'Анонимность', desc: 'Официальный договор о конфиденциальности.', icon: 'lock' }
];

const SERVICES = [
    { title: 'Письменный перевод', items: ['Личные документы', 'Паспорта', 'Техника', 'Юриспруденция'] },
    { title: 'Заверение', items: ['Нотариальный перевод', 'Печать бюро', 'Апостиль', 'Легализация'] },
    { title: 'Доп. услуги', items: ['Верстка текста', 'Локализация сайтов', 'Видео-перевод', 'Доставка'] }
];

const LANGUAGES = [
    { name: 'Английский', flag: '🇬🇧' }, { name: 'Немецкий', flag: '🇩🇪' },
    { name: 'Французский', flag: '🇫🇷' }, { name: 'Итальянский', flag: '🇮🇹' },
    { name: 'Испанский', flag: '🇪🇸' }, { name: 'Китайский', flag: '🇨🇳' },
    { name: 'Японский', flag: '🇯🇵' }, { name: 'Арабский', flag: '🇸🇦' },
    { name: 'Турецкий', flag: '🇹🇷' }, { name: 'Армянский', flag: '🇦🇲' }
];

const REVIEWS = [
    { author: 'Павел П.', text: 'Очень понравилось, качественная работа и приятное общение. Рекомендую!', platform: 'Google' },
    { author: 'Оксана К.', text: 'Быстро перевели сложный технический текст. Буду обращаться ещё.', platform: 'Yandex' },
    { author: 'Ринат М.', text: 'Удобное расположение и адекватные цены. Сделали всё за 3 часа.', platform: 'Google' }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    // Render Advantages
    const advGrid = document.getElementById('advantages-grid');
    if (advGrid) {
        advGrid.innerHTML = ADVANTAGES.map(adv => `
            <div class="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all group">
                <div class="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                    <i data-lucide="${adv.icon}"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">${adv.title}</h3>
                <p class="text-gray-600">${adv.desc}</p>
            </div>
        `).join('');
    }

    // Render Services
    const svcGrid = document.getElementById('services-grid');
    if (svcGrid) {
        svcGrid.innerHTML = SERVICES.map(svc => `
            <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all service-card">
                <h3 class="text-2xl font-bold mb-6 border-b pb-4 border-yellow-600/20">${svc.title}</h3>
                <ul class="space-y-4">
                    ${svc.items.map(item => `
                        <li class="flex items-center text-gray-700">
                            <i data-lucide="check-circle-2" class="w-4 h-4 text-yellow-600 mr-3"></i>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Render Languages
    const langGrid = document.getElementById('languages-grid');
    if (langGrid) {
        langGrid.innerHTML = LANGUAGES.map(lang => `
            <div class="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition">
                <span class="text-2xl mr-3">${lang.flag}</span>
                <span class="font-bold">${lang.name}</span>
            </div>
        `).join('');
    }

    // Render Reviews
    const revGrid = document.getElementById('reviews-grid');
    if (revGrid) {
        revGrid.innerHTML = REVIEWS.map(rev => `
            <div class="bg-gray-50 p-8 rounded-2xl">
                <div class="flex text-yellow-500 mb-4">
                    ${'<i data-lucide="star" class="w-4 h-4 fill-current"></i>'.repeat(5)}
                </div>
                <p class="italic text-gray-600 mb-6">"${rev.text}"</p>
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">${rev.author[0]}</div>
                    <span class="font-bold">${rev.author}</span>
                    <span class="ml-auto text-xs text-gray-400 uppercase">${rev.platform}</span>
                </div>
            </div>
        `).join('');
    }

    // Initialize Icons
    // @ts-ignore
    lucide.createIcons();

    // Sticky Header Logic
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    menuToggle?.addEventListener('click', () => {
        const isOpen = mobileMenu?.classList.toggle('hidden');
        iconOpen?.classList.toggle('hidden');
        iconClose?.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });

    // Close menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
            iconOpen?.classList.remove('hidden');
            iconClose?.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    });

    // Form submission
    const form = document.getElementById('order-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
        (form as HTMLFormElement).reset();
    });
});
