export type Locale = "en" | "ru";

type SummaryItem = [string, string];

type ProjectCopy = {
  category: string;
  description: string;
  projectType: string;
  role: string;
  projectStatus: string;
  liveLabel?: string;
  caseStory?: Array<[string, string]>;
  summaryLabel?: string;
  summaryTitle?: string;
  summaryItems?: SummaryItem[];
};

export type Project = {
  title: string;
  year: string;
  image: string;
  liveUrl?: string;
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
  "home-pilates",
  "timremont",
  "pantheon",
  "goose",
] as const;

export const moreSlugs = ["bitplus", "web3"] as const;

export const projects: Record<string, Project> = {
  "home-pilates": {
    title: "Home Pilates",
    year: "2025–2026",
    image: "/work/pilates.jpg",
    liveUrl: "https://apps.apple.com/us/app/home-pilates-pilates-at-home/id6754236907",
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
        projectType: "Independent product",
        role: "Product design & production",
        projectStatus: "Released on iOS",
        liveLabel: "App Store ↗",
        caseStory: [
          [
            "The challenge",
            "Create a home Pilates app that makes it easy to choose a workout, follow a programme and come back the next day.",
          ],
          [
            "My role",
            "I developed the product concept, researched competing apps, designed the user journey and interface, and produced the workout content and launch materials. The app was built with a developer.",
          ],
          [
            "The design decision",
            "The experience centres on a clear daily workout and visible progress through the programme. The interface, workout content and promotional materials were designed as parts of the same product.",
          ],
          [
            "What happened",
            "Home Pilates was released on the App Store. At the time this case study was prepared, the app had generated $323 in total revenue and had 7 active subscriptions. Paid acquisition spend was approximately $400.",
          ],
        ],
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
        projectType: "Независимый продукт",
        role: "Продуктовый дизайн и продакшн",
        projectStatus: "Выпущен в App Store",
        liveLabel: "App Store ↗",
        caseStory: [
          [
            "Задача",
            "Создать приложение для домашних занятий пилатесом, в котором легко выбрать тренировку, пройти программу и вернуться к занятиям на следующий день.",
          ],
          [
            "Моя роль",
            "Я разработал концепцию продукта, изучил конкурентов, спроектировал пользовательский сценарий и интерфейс, подготовил тренировочный контент и материалы для запуска. Приложение создавалось совместно с разработчиком.",
          ],
          [
            "Ключевое решение",
            "В центре сценария — понятная тренировка на сегодня и видимый прогресс в программе. Интерфейс, тренировочный контент и рекламные материалы были задуманы как части одного продукта.",
          ],
          [
            "Результат",
            "Home Pilates выпущен в App Store. На дату подготовки кейса приложение принесло $323 совокупной выручки и имело 7 активных подписок. Расходы на платное привлечение составили около $400.",
          ],
        ],
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
        projectType: "Brand identity concept",
        role: "Strategy, identity & web design",
        projectStatus: "Completed design concept",
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
        projectType: "Концепт айдентики",
        role: "Стратегия, айдентика и веб-дизайн",
        projectStatus: "Завершённый дизайн-концепт",
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
          "A design concept for a digital archive of crypto culture, exploring its people and events through a museum-inspired product experience. The project is currently on hold and has not launched.",
        projectType: "Digital product",
        role: "Product design, UX & art direction",
        projectStatus: "On hold · Not launched",
        summaryLabel: "Project Scope",
        summaryTitle: "A digital archive\nbuilt as a system.",
        summaryItems: [
          ["01", "Product architecture"],
          ["02", "UX exploration"],
          ["03", "Art direction"],
          ["04", "Interface concepts"],
          ["05", "AI-assisted portrait system"],
        ],
      },
      ru: {
        category: "Цифровой продукт / Арт-дирекшн",
        description:
          "Концепция цифрового архива о людях и событиях криптокультуры с подачей, вдохновлённой музеем. Сейчас проект на паузе и не запущен.",
        projectType: "Цифровой продукт",
        role: "Продуктовый дизайн, UX и арт-дирекшн",
        projectStatus: "На паузе · Не запущен",
        summaryLabel: "Объём работ",
        summaryTitle: "Цифровой архив,\nпостроенный как система.",
        summaryItems: [
          ["01", "Архитектура продукта"],
          ["02", "UX-исследование"],
          ["03", "Арт-дирекшн"],
          ["04", "Концепции интерфейсов"],
          ["05", "Система портретов с использованием ИИ"],
        ],
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
        projectType: "Brand identity concept",
        role: "Brand direction & visual identity",
        projectStatus: "Completed identity concept",
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
        projectType: "Концепт айдентики",
        role: "Бренд-направление и визуальная айдентика",
        projectStatus: "Завершённый концепт айдентики",
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
        projectType: "Digital product redesign",
        role: "UX/UI design & art direction",
        projectStatus: "Released",
        caseStory: [
          [
            "The challenge",
            "Redesign a crypto product spanning Telegram and web while giving its different features a consistent interface.",
          ],
          [
            "My role",
            "I worked on the product structure, UX/UI redesign, visual direction and interface system, including the integration of 3D assets.",
          ],
          [
            "The design decision",
            "I organised the experience around a central hub and a shared set of interface rules. Gameplay, profile, referrals, tasks, storage and finance could then feel like parts of one product.",
          ],
          [
            "What was delivered",
            "A connected set of screens and interface patterns covering the main product areas and wallet flow. This case shows the design work delivered; it does not claim a measured change in product performance.",
          ],
        ],
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
        projectType: "Редизайн цифрового продукта",
        role: "UX/UI-дизайн и арт-дирекшн",
        projectStatus: "Выпущен",
        caseStory: [
          [
            "Задача",
            "Переработать интерфейс криптопродукта для Telegram и веба и объединить его разные функции в понятную систему.",
          ],
          [
            "Моя роль",
            "Я работал над структурой продукта, UX/UI, визуальным направлением и системой интерфейсов, включая интеграцию 3D-элементов.",
          ],
          [
            "Ключевое решение",
            "Я выстроил сценарии вокруг центрального хаба и общих правил интерфейса. Игровые механики, профиль, приглашения, задания, хранилище и финансы стали восприниматься как части одного продукта.",
          ],
          [
            "Что было подготовлено",
            "Связанная система экранов и интерфейсных решений для основных разделов продукта и сценария кошелька. Кейс показывает выполненную дизайн-работу; подтверждённые показатели влияния на продукт здесь не заявлены.",
          ],
        ],
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
    title: "BASE",
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
        category: "Website / UI Concept",
        description:
          "Concept design for a crypto analytics platform — combining a marketing website and product dashboard into one coherent visual system.",
        projectType: "Website concept",
        role: "Web design & UI concept",
        projectStatus: "Concept",
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
        category: "Веб-сайт / UI-концепт",
        description:
          "Концепт дизайна платформы для криптоаналитики, объединяющий маркетинговый сайт и продуктовый интерфейс в единую визуальную систему.",
        projectType: "Концепт веб-дизайна",
        role: "Веб-дизайн и UI-концепт",
        projectStatus: "Концепт",
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
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    kicker: "Independent design studio",
    headline: (
      <>
        Identity, websites
        <br />
        & digital products.
      </>
    ),
    intro:
      "Independent design studio creating visual identities, websites and digital experiences for businesses.",
    worldwide: "Worldwide",
    startProject: "Start a project →",
    selectedWork: "Selected Work",
    selectedWorkIntro:
      "Identity, websites and digital products across different industries.",
    moreWork: "More Work",
    archive: "Archive",
    services: "What we do",
    serviceRows: [
      ["01", "Brand Identity"],
      ["02", "Web Design"],
      ["03", "Digital Products"],
      ["04", "Art Direction"],
    ],
    about: "About",
    aboutHeadline: "Independent by design.",
    aboutBody1:
      "ZYKOV is an independent brand and digital studio founded by Alexey Zykov. I lead the creative direction and design work across identity, websites and digital products, bringing in collaborators when a project needs additional expertise.",
    aboutProcessHeadline: "From direction to launch.",
    aboutBody2:
      "We start by defining the task and what the design needs to achieve. Then I develop the visual direction, build the system and apply it across the required screens and materials. The result is prepared for a real launch or a clear handoff to the team building it.",
    contactLabel: "Start a project",
    contactHeadline: (
      <>
        Have a project
        <br />
        in mind?
      </>
    ),
    contactBody:
      "Tell me what you’re building, what you need help with and your approximate timing.",
    contactResponse:
      "I’ll review the brief and reply within 1–2 business days with the next step.",
    email: "Email",
    studio: "Independent Brand & Digital Studio",
  },
  ru: {
    nav: {
      work: "Работы",
      services: "Услуги",
      about: "О студии",
      contact: "Контакты",
    },
    kicker: "Независимая дизайн-студия",
    headline: (
      <>
        Айдентика, сайты
        <br />
        и цифровые продукты.
      </>
    ),
    intro:
      "Независимая дизайн-студия, которая создаёт визуальные системы, сайты и цифровые продукты для бизнеса.",
    worldwide: "По всему миру",
    startProject: "Обсудить проект →",
    selectedWork: "Избранные проекты",
    selectedWorkIntro:
      "Айдентика, сайты и цифровые продукты для разных индустрий.",
    moreWork: "Другие проекты",
    archive: "Архив",
    services: "Что мы делаем",
    serviceRows: [
      ["01", "Айдентика"],
      ["02", "Веб-дизайн"],
      ["03", "Цифровые продукты"],
      ["04", "Арт-дирекшн"],
    ],
    about: "О студии",
    aboutHeadline: "Независимая студия. Осознанный подход.",
    aboutBody1:
      "ZYKOV — независимая студия брендинга и цифрового дизайна, основанная Алексеем Зыковым. Я отвечаю за визуальное направление и дизайн айдентики, сайтов и цифровых продуктов, подключая специалистов, когда проекту нужны дополнительные компетенции.",
    aboutProcessHeadline: "От направления до запуска.",
    aboutBody2:
      "Сначала мы определяем задачу и то, чего должен достичь дизайн. Затем я разрабатываю визуальное направление, собираю систему и применяю её к нужным экранам и материалам. В результате проект готов к запуску или передаче команде, которая будет его реализовывать.",
    contactLabel: "Обсудить проект",
    contactHeadline: (
      <>
        Есть проект?
      </>
    ),
    contactBody:
      "Расскажите, что вы создаёте, с чем нужна помощь и какие у проекта примерные сроки.",
    contactResponse:
      "Я изучу задачу и отвечу в течение 1–2 рабочих дней с предложением следующего шага.",
    email: "Email",
    studio: "Независимая студия брендинга и цифрового дизайна",
  },
};
