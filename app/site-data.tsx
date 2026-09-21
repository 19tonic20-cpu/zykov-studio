export type Locale = "en" | "ru";

type SummaryItem = [string, string];

type ProjectCopy = {
  category: string;
  description: string;
  summaryLabel?: string;
  summaryTitle?: string;
  summaryItems?: SummaryItem[];
  status?: string;
};

export type Project = {
  title: string;
  year: string;
  image: string;
  caseBackground?: string;
  caseRows: string[][];
  ruCaseRows?: string[][];
  nextProject: {
    slug: string;
    number: string;
  };
  copy: Record<Locale, ProjectCopy>;
};

export const featuredSlugs = [
  "pantheon",
  "timremont",
  "home-pilates",
  "goose",
] as const;

export const moreSlugs = ["bitplus", "web3"] as const;

export const projects: Record<string, Project> = {
  "home-pilates": {
    title: "Home Pilates",
    year: "2025–2026",
    image: "/work/pilates.jpg",
    caseRows: [
      ["/cases/home-pilates/01.webp"],
      ["/cases/home-pilates/02.webp"],
      ["/cases/home-pilates/03.webp"],
      ["/cases/home-pilates/04.webp"],
      ["/cases/home-pilates/05.webp"],
      ["/cases/home-pilates/06.webp"],
    ],
    ruCaseRows: [
  ["/cases/home-pilates/ru/01.webp"],
  ["/cases/home-pilates/ru/02.webp"],
  ["/cases/home-pilates/ru/03.webp"],
  ["/cases/home-pilates/ru/04.webp"],
  ["/cases/home-pilates/ru/05.webp"],
  ["/cases/home-pilates/ru/06.webp"],
],
    nextProject: { slug: "timremont", number: "02" },
    copy: {
      en: {
        category: "Product Design / Brand / iOS",
        description:
          "A home workout product developed from concept to App Store launch — covering product thinking, UX/UI, visual direction and content production.",
        summaryLabel: "Project Results",
        summaryTitle: "Designed, launched\nand tested in market.",
        summaryItems: [
          ["Launch", "App Store"],
          ["Revenue", "$323"],
          ["Active subscriptions", "7"],
        ],
      },
      ru: {
        category: "Продуктовый дизайн / Бренд / iOS",
        description:
          "Приложение для домашних тренировок, разработанное от идеи до запуска в App Store — от продуктовой логики и UX/UI до визуального направления и производства контента.",
        summaryLabel: "Результаты проекта",
        summaryTitle: "Спроектировано, запущено\nи проверено рынком.",
        summaryItems: [
          ["Запуск", "App Store"],
          ["Выручка", "$323"],
          ["Активные подписки", "7"],
        ],
      },
    },
  },

  timremont: {
    title: "TIMREMONT",
    year: "2026",
    image: "/work/timremont.jpg",
    caseBackground: "#F6F6F4",
    caseRows: [
      ["/cases/timremont/1.webp"],
      ["/cases/timremont/2.webp"],
      ["/cases/timremont/3.webp"],
      ["/cases/timremont/4.webp"],
      ["/cases/timremont/5.webp", "/cases/timremont/6.webp"],
      ["/cases/timremont/7.webp"],
      ["/cases/timremont/8.webp"],
      ["/cases/timremont/9.webp", "/cases/timremont/10.webp"],
      ["/cases/timremont/11.webp"],
      ["/cases/timremont/12.webp"],
    ],
    ruCaseRows: [
  ["/cases/timremont/ru/01.webp"],
  ["/cases/timremont/ru/02.webp"],
  ["/cases/timremont/ru/03.webp"],
  ["/cases/timremont/ru/04.webp"],
  [
    "/cases/timremont/ru/05.webp",
    "/cases/timremont/ru/06.webp",
  ],
  ["/cases/timremont/ru/07.webp"],
  ["/cases/timremont/ru/08.webp"],
  [
    "/cases/timremont/ru/09.webp",
    "/cases/timremont/ru/10.webp",
  ],
  ["/cases/timremont/ru/11.webp"],
  ["/cases/timremont/ru/12.webp"],
],
    nextProject: { slug: "pantheon", number: "03" },
    copy: {
      en: {
        category: "Brand Identity / Web",
        description:
          "Brand identity and digital direction for a renovation and interior design studio — from strategy and visual system to physical applications and web.",
        summaryLabel: "Project Scope",
        summaryTitle: "One identity\nacross every touchpoint.",
        summaryItems: [
          ["01", "Brand strategy"],
          ["02", "Visual identity"],
          ["03", "Brand applications"],
          ["04", "Digital direction"],
        ],
      },
      ru: {
        category: "Айдентика / Веб",
        description:
          "Айдентика и цифровое направление для студии ремонта и дизайна интерьеров — от стратегии и визуальной системы до физических носителей и сайта.",
        summaryLabel: "Объём работ",
        summaryTitle: "Единая айдентика\nдля всех точек контакта.",
        summaryItems: [
          ["01", "Бренд-стратегия"],
          ["02", "Визуальная айдентика"],
          ["03", "Фирменные носители"],
          ["04", "Цифровое направление"],
        ],
      },
    },
  },

  pantheon: {
    title: "Crypto Hall of Fame",
    year: "2026",
    image: "/work/pantheon.jpg",
    caseBackground: "#05070A",
    caseRows: [
      ["/cases/pantheon/01.webp"],
      ["/cases/pantheon/02.webp"],
      ["/cases/pantheon/03.webp"],
      ["/cases/pantheon/04.webp"],
      ["/cases/pantheon/05.webp"],
      ["/cases/pantheon/06.webp"],
      ["/cases/pantheon/07.webp"],
      ["/cases/pantheon/08.webp"],
      ["/cases/pantheon/09.webp"],
      ["/cases/pantheon/10.webp"],
      ["/cases/pantheon/11.webp"],
    ],
    ruCaseRows: [
  ["/cases/pantheon/ru/01.webp"],
  ["/cases/pantheon/ru/02.webp"],
  ["/cases/pantheon/ru/03.webp"],
  ["/cases/pantheon/ru/04.webp"],
  ["/cases/pantheon/ru/05.webp"],
  ["/cases/pantheon/ru/06.webp"],
  ["/cases/pantheon/ru/07.webp"],
  ["/cases/pantheon/ru/08.webp"],
  ["/cases/pantheon/ru/09.webp"],
  ["/cases/pantheon/ru/10.webp"],
  ["/cases/pantheon/ru/11.webp"],
],
    nextProject: { slug: "goose", number: "04" },
    copy: {
      en: {
        category: "Digital Product / Art Direction",
        description:
          "A digital archive exploring the people, events and cultural history of crypto through a museum-inspired product experience.",
        summaryLabel: "Project Scope",
        summaryTitle: "A digital archive\nbuilt as a system.",
        summaryItems: [
          ["01", "Product architecture"],
          ["02", "UX exploration"],
          ["03", "Art direction"],
          ["04", "Interface concepts"],
          ["05", "AI-assisted portrait system"],
        ],
        status: "On hold · Not launched",
      },
      ru: {
        category: "Цифровой продукт / Арт-дирекшн",
        description:
          "Цифровой архив о людях, событиях и культурной истории криптоиндустрии, построенный как музейный продуктовый опыт.",
        summaryLabel: "Объём работ",
        summaryTitle: "Цифровой архив,\nпостроенный как система.",
        summaryItems: [
          ["01", "Архитектура продукта"],
          ["02", "UX-исследование"],
          ["03", "Арт-дирекшн"],
          ["04", "Концепции интерфейсов"],
          ["05", "Система портретов с использованием ИИ"],
        ],
        status: "Приостановлен · Не запущен",
      },
    },
  },

  goose: {
    title: "Goose",
    year: "2026",
    image: "/work/goose.jpg",
    caseBackground: "#263128",
    caseRows: [
      ["/cases/goose/01.webp"],
      ["/cases/goose/02.webp"],
      ["/cases/goose/03.webp"],
      ["/cases/goose/04.webp"],
      ["/cases/goose/05.webp"],
      ["/cases/goose/06.webp"],
      ["/cases/goose/07.webp"],
      ["/cases/goose/08.webp"],
      ["/cases/goose/09.webp"],
      ["/cases/goose/10.webp"],
      ["/cases/goose/11.webp"],
      ["/cases/goose/12.webp"],
    ],
    ruCaseRows: [
  ["/cases/goose/ru/01.webp"],
  ["/cases/goose/ru/02.webp"],
  ["/cases/goose/ru/03.webp"],
  ["/cases/goose/ru/04.webp"],
  ["/cases/goose/ru/05.webp"],
  ["/cases/goose/ru/06.webp"],
  ["/cases/goose/ru/07.webp"],
  ["/cases/goose/ru/08.webp"],
  ["/cases/goose/ru/09.webp"],
  ["/cases/goose/ru/10.webp"],
  ["/cases/goose/ru/11.webp"],
  ["/cases/goose/ru/12.webp"],
],
    nextProject: { slug: "bitplus", number: "05" },
    copy: {
      en: {
        category: "Brand Identity",
        description:
          "A brand identity built around a distinctive character, restrained visual language and a flexible system across physical and digital touchpoints.",
        summaryLabel: "Project Scope",
        summaryTitle: "A character-led identity\nbuilt to stay consistent.",
        summaryItems: [
          ["01", "Brand direction"],
          ["02", "Visual identity"],
          ["03", "Graphic system"],
          ["04", "Brand applications"],
        ],
      },
      ru: {
        category: "Айдентика",
        description:
          "Айдентика, построенная вокруг характерного персонажа, сдержанного визуального языка и гибкой системы для физических и цифровых носителей.",
        summaryLabel: "Объём работ",
        summaryTitle: "Айдентика вокруг персонажа,\nсобранная в цельную систему.",
        summaryItems: [
          ["01", "Бренд-направление"],
          ["02", "Визуальная айдентика"],
          ["03", "Графическая система"],
          ["04", "Фирменные носители"],
        ],
      },
    },
  },

  bitplus: {
    title: "BIT+",
    year: "2026",
    image: "/work/bitplus.jpg",
    caseBackground: "#05070A",
    caseRows: [
      ["/cases/bitplus/01.webp"],
      ["/cases/bitplus/02.webp"],
      ["/cases/bitplus/03.webp"],
      ["/cases/bitplus/04.webp"],
      ["/cases/bitplus/05.webp"],
      ["/cases/bitplus/06.webp"],
      ["/cases/bitplus/07.webp"],
      ["/cases/bitplus/08.webp"],
      ["/cases/bitplus/09.webp"],
      ["/cases/bitplus/10.webp"],
    ],
    ruCaseRows: [
  ["/cases/bitplus/ru/01.webp"],
  ["/cases/bitplus/ru/02.webp"],
  ["/cases/bitplus/ru/03.webp"],
  ["/cases/bitplus/ru/04.webp"],
  ["/cases/bitplus/ru/05.webp"],
  ["/cases/bitplus/ru/06.webp"],
  ["/cases/bitplus/ru/07.webp"],
  ["/cases/bitplus/ru/08.webp"],
  ["/cases/bitplus/ru/09.webp"],
  ["/cases/bitplus/ru/10.webp"],
],
    nextProject: { slug: "web3", number: "06" },
    copy: {
      en: {
        category: "UX/UI / Art Direction / Interface System",
        description:
          "UX/UI redesign, art direction and interface system for a cyber arcade crypto ecosystem across Telegram and web.",
        summaryLabel: "Project Scope",
        summaryTitle: "From product structure\nto a unified interface system.",
        summaryItems: [
          ["01", "UX/UI redesign"],
          ["02", "Product architecture"],
          ["03", "Interface system"],
          ["04", "Art direction"],
          ["05", "3D asset integration"],
        ],
      },
      ru: {
        category: "UX/UI / Арт-дирекшн / Система интерфейсов",
        description:
          "Редизайн UX/UI, арт-дирекшн и система интерфейсов для игровой криптоэкосистемы в Telegram и вебе.",
        summaryLabel: "Объём работ",
        summaryTitle: "От структуры продукта\nк единой системе интерфейсов.",
        summaryItems: [
          ["01", "Редизайн UX/UI"],
          ["02", "Архитектура продукта"],
          ["03", "Система интерфейсов"],
          ["04", "Арт-дирекшн"],
          ["05", "Интеграция 3D-ассета"],
        ],
      },
    },
  },

  web3: {
    title: "Web3",
    year: "2026",
    image: "/work/web3.jpg",
    caseBackground: "#0B0F19",
    caseRows: [
      ["/cases/web3/01.webp"],
      ["/cases/web3/02.webp"],
    ],
    ruCaseRows: [
  ["/cases/web3/ru/01.webp"],
],
    nextProject: { slug: "home-pilates", number: "01" },
    copy: {
      en: {
        category: "Website / Digital",
        description:
          "Website design and visual direction for a Web3 product, built around a focused digital experience and a distinctive visual language.",
        summaryLabel: "Project Scope",
        summaryTitle: "A focused digital experience\nfrom concept to interface.",
        summaryItems: [
          ["01", "Visual direction"],
          ["02", "Website design"],
          ["03", "Responsive interface"],
          ["04", "Digital system"],
        ],
      },
      ru: {
        category: "Веб-сайт / Цифровой дизайн",
        description:
          "Дизайн сайта и визуальное направление для Web3-продукта — с фокусом на цельный цифровой опыт и выразительный визуальный язык.",
        summaryLabel: "Объём работ",
        summaryTitle: "Цельный цифровой опыт\nот концепции до интерфейса.",
        summaryItems: [
          ["01", "Визуальное направление"],
          ["02", "Дизайн сайта"],
          ["03", "Адаптивный интерфейс"],
          ["04", "Цифровая система"],
        ],
      },
    },
  },
};

export const homeCopy = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact" },
    kicker: "Independent Brand & Digital Studio",
    // EN
headline: (
  <>
    Identity, websites
    <br />
    & digital products —
    <br />
    built as one system.
  </>
),intro: "Strategy, identity, web and product design — from first direction to launch.",
    worldwide: "Worldwide",
    startProject: "Start a project →",
    selectedWork: "Selected Work",
    moreWork: "More Work",
    archive: "Archive",
    services: "Services",
    servicesHeadline: <>From first direction<br />to launch.</>,
    serviceRows: [
      ["01", "Brand + Website", "Positioning, visual identity and a custom website built as one coherent system.", "Core service"],
      ["02", "Launch Support", "Key launch materials, presentations, campaign creatives and digital touchpoints.", "Extended"],
      ["03", "Digital Products", "UX/UI, visual systems and digital experiences for apps, SaaS and emerging products.", "By scope"],
    ],
   about: "About",
aboutHeadline: <>Independent studio for brands,<br />websites & digital products.</>,
aboutBody1:
  "We work across brand identity, websites and digital products, connecting strategy, visual direction and execution into one coherent system.",
aboutBody2:
  "Each project is shaped around the task — from focused identity work to complete brand and digital experiences.", contactLabel: "Start a project",
    contactHeadline: <>Let&apos;s make<br />something that matters.</>,
    email: "Email",
    social: "Social",
    studio: "Brand & Digital Studio",
  },
  ru: {
    nav: { work: "Работы", services: "Услуги", about: "О студии", contact: "Контакты" },
    kicker: "Независимая студия брендинга и цифрового дизайна",
    // EN
headline: (
  <>
    Айдентика, сайты
    <br />
    и цифровые продукты —
    <br />
    как единая система.
  </>
),intro: "Стратегия, айдентика, веб- и продуктовый дизайн — от первого направления до запуска.",
    worldwide: "По всему миру",
    startProject: "Обсудить проект →",
    selectedWork: "Избранные проекты",
    moreWork: "Другие проекты",
    archive: "Архив",
    services: "Услуги",
    servicesHeadline: <>От первого направления<br />до запуска.</>,
    serviceRows: [
      ["01", "Бренд + сайт", "Позиционирование, визуальная айдентика и кастомный сайт, собранные в единую систему.", "Основная услуга"],
      ["02", "Поддержка запуска", "Ключевые материалы для запуска, презентации, рекламные креативы и цифровые точки контакта.", "Расширенный формат"],
      ["03", "Цифровые продукты", "UX/UI, визуальные системы и цифровые интерфейсы для приложений, SaaS и новых продуктов.", "По задаче"],
    ],
   about: "О студии",
aboutHeadline: <>Независимая студия брендинга,<br />веба и цифровых продуктов.</>,
aboutBody1:
  "Мы работаем с айдентикой, сайтами и цифровыми продуктами, объединяя стратегию, визуальное направление и реализацию в единую систему.",
aboutBody2:
  "Каждый проект строится вокруг задачи — от разработки айдентики до комплексных брендовых и цифровых решений.",contactLabel: "Обсудить проект",
    contactHeadline: <>Создадим то,<br />что действительно важно.</>,
    email: "Email",
    social: "Соцсети",
    studio: "Студия брендинга и цифрового дизайна",
  },
};
