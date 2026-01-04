
// --- Extended Data for the Bureau ---

const DETAILED_SERVICES = [
    {
        id: 'tech',
        title: 'Технический перевод',
        desc: 'Перевод инструкций, чертежей (AutoCAD), спецификаций и научных работ. Работаем с инженерами-лингвистами.',
        icon: 'settings',
        features: ['Чертежи и схемы', 'IT документация', 'Руководства']
    },
    {
        id: 'legal',
        title: 'Юридический перевод',
        desc: 'Контракты, уставы, доверенности и судебные решения. Соблюдаем юридическую терминологию и конфиденциальность.',
        icon: 'briefcase',
        features: ['Договоры', 'Учредительные док-ты', 'Судебные иски']
    },
    {
        id: 'medical',
        title: 'Медицинский перевод',
        desc: 'Выписки из истории болезни, протоколы исследований, аннотации к препаратам. Переводят врачи.',
        icon: 'activity',
        features: ['Диагнозы', 'Фарм-документация', 'Заключения']
    },
    {
        id: 'notary',
        title: 'Нотариальное заверение',
        desc: 'Официальное подтверждение подписи переводчика у нотариуса. Полный цикл подготовки документов для посольств.',
        icon: 'stamp',
        features: ['Заверение за 1 час', 'Перевод печатей', 'Многостраничные док-ты']
    },
    {
        id: 'apostille',
        title: 'Апостиль и Легализация',
        desc: 'Проставление штампа «Апостиль» в Минюсте или консульская легализация для стран, не входящих в Гаагскую конвенцию.',
        icon: 'globe-2',
        features: ['Минюст РФ', 'МИД РФ', 'Консульства']
    },
    {
        id: 'personal',
        title: 'Личные документы',
        desc: 'Перевод паспортов, свидетельств о рождении, браке, дипломов с последующим заверением. Срочно от 30 минут.',
        icon: 'user',
        features: ['Паспорт', 'Диплом', 'Справки']
    }
];

const PRICES = [
    { name: 'Английский (перевод страницы)', unit: '1800 знаков', price: 'от 550 ₽' },
    { name: 'Немецкий, Французский', unit: '1800 знаков', price: 'от 650 ₽' },
    { name: 'Китайский, Японский', unit: '1800 знаков', price: 'от 1200 ₽' },
    { name: 'Перевод паспорта (комплект)', unit: '1 документ', price: 'от 1200 ₽' },
    { name: 'Нотариальное заверение', unit: '1 подпись', price: '700 ₽' },
    { name: 'Апостиль (гос. пошлина включена)', unit: '1 документ', price: 'от 5500 ₽' },
    { name: 'Устный перевод (синхрон)', unit: '1 час', price: 'от 3500 ₽' }
];

const FAQS = [
    { q: 'Как быстро вы делаете перевод паспорта?', a: 'Стандартный срок — 1 рабочий день. В срочном режиме мы можем подготовить перевод и заверить его нотариально в течение 1–2 часов.' },
    { q: 'Можно ли прислать фото документа вместо оригинала?', a: 'Да, для предварительного расчета и начала работы достаточно качественного фото или скана. Однако для нотариального заверения к оригиналу или копии часто требуются физические документы.' },
    { q: 'Работаете ли вы с юридическими лицами?', a: 'Безусловно. Мы работаем по договору, принимаем оплату по безналичному расчету и предоставляем все закрывающие документы для бухгалтерии.' },
    { q: 'Что такое апостиль и зачем он нужен?', a: 'Апостиль — это международная стандартизированная форма заполнения сведений о законности документа для предъявления на территории других стран. Он нужен, если вы планируете использовать российский документ за границей.' }
];

const LANGUAGES = [
    { name: 'Английский', flag: '🇬🇧' }, { name: 'Немецкий', flag: '🇩🇪' },
    { name: 'Французский', flag: '🇫🇷' }, { name: 'Итальянский', flag: '🇮🇹' },
    { name: 'Испанский', flag: '🇪🇸' }, { name: 'Китайский', flag: '🇨🇳' },
    { name: 'Японский', flag: '🇯🇵' }, { name: 'Арабский', flag: '🇸🇦' },
    { name: 'Турецкий', flag: '🇹🇷' }, { name: 'Корейский', flag: '🇰🇷' },
    { name: 'Финский', flag: '🇫🇮' }, { name: 'Греческий', flag: '🇬🇷' }
];

// --- Initialization Logic ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Detailed Services
    const svcGrid = document.getElementById('detailed-services-grid');
    if (svcGrid) {
        svcGrid.innerHTML = DETAILED_SERVICES.map(svc => `
            <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                <div class="w-14 h-14 bg-yellow-50 text-yellow-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                    <i data-lucide="${svc.icon}" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">${svc.title}</h3>
                <p class="text-gray-500 mb-8 text-sm leading-relaxed">${svc.desc}</p>
                <ul class="space-y-3 mb-8">
                    ${svc.features.map(f => `
                        <li class="flex items-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                            ${f}
                        </li>
                    `).join('')}
                </ul>
                <button class="flex items-center text-yellow-700 font-bold hover:translate-x-2 transition-transform uppercase text-[10px] tracking-widest">
                    Подробнее <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </button>
            </div>
        `).join('');
    }

    // 2. Render Price Table
    const priceTable = document.getElementById('prices-table-body');
    if (priceTable) {
        priceTable.innerHTML = PRICES.map(p => `
            <tr class="hover:bg-gray-50 transition">
                <td class="p-6 font-bold text-gray-900">${p.name}</td>
                <td class="p-6 text-gray-500 text-sm">${p.unit}</td>
                <td class="p-6 font-bold text-yellow-700">${p.price}</td>
            </tr>
        `).join('');
    }

    // 3. Render Languages
    const langGrid = document.getElementById('languages-grid');
    if (langGrid) {
        langGrid.innerHTML = LANGUAGES.map(lang => `
            <div class="flex items-center justify-center p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-yellow-200 hover:bg-white transition-all cursor-default">
                <span class="text-2xl mr-3">${lang.flag}</span>
                <span class="font-bold text-gray-700 text-sm">${lang.name}</span>
            </div>
        `).join('');
    }

    // 4. Render FAQ
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqContainer.innerHTML = FAQS.map((faq, i) => `
            <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button class="w-full p-6 text-left flex justify-between items-center faq-toggle" data-index="${i}">
                    <span class="font-bold text-gray-800">${faq.q}</span>
                    <i data-lucide="plus" class="w-5 h-5 text-yellow-600 transition-transform"></i>
                </button>
                <div class="max-h-0 overflow-hidden transition-all duration-300 bg-gray-50 faq-content">
                    <div class="p-6 text-gray-600 leading-relaxed">${faq.a}</div>
                </div>
            </div>
        `).join('');
    }

    // Initialize Icons
    // @ts-ignore
    lucide.createIcons();

    // FAQ Toggle Logic
    document.querySelectorAll('.faq-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling as HTMLElement;
            const icon = button.querySelector('[data-lucide="plus"]') as HTMLElement;
            
            const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
            
            // Close all
            document.querySelectorAll('.faq-content').forEach(c => (c as HTMLElement).style.maxHeight = '0px');
            document.querySelectorAll('.faq-toggle i').forEach(i => (i as HTMLElement).style.transform = 'rotate(0deg)');
            
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    menuToggle?.addEventListener('click', () => {
        const isHidden = mobileMenu?.classList.toggle('hidden');
        iconOpen?.classList.toggle('hidden');
        iconClose?.classList.toggle('hidden');
        document.body.style.overflow = isHidden ? 'auto' : 'hidden';
    });

    // Sticky Header Scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header?.classList.add('py-2', 'shadow-lg');
            header?.classList.remove('py-4', 'shadow-sm');
        } else {
            header?.classList.add('py-4', 'shadow-sm');
            header?.classList.remove('py-2', 'shadow-lg');
        }
    });

    // Form Mock Submission
    const form = document.getElementById('order-form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        if (btn) btn.innerText = 'ОТПРАВЛЕНО ✔';
        setTimeout(() => {
            if (btn) btn.innerText = 'ОТПРАВИТЬ';
            (form as HTMLFormElement).reset();
        }, 3000);
    });
});
