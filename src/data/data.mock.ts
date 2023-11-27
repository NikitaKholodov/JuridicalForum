export const headerData = {
  title: "XI ПЕТЕРБУРГСКИЙ МЕЖДУНАРОДНЫЙ ЮРИДИЧЕСКОЙ ФОРУМ 2023",
  subtitle: "11-13 мая • КВЦ «Экспофорум» • Санкт-Петербург, Россия",
  logo: "./img/logo.png",
  background: "./img/background.png",
  bgcolor: "#122a5b",
  isMember: true,
};

export const tabsData = [
  {
    name: "Сервисы",
    active: true,
  },
  {
    name: "Описание",
    active: false,
  },
  {
    name: "Контакты",
    active: false,
  },
];

export const cardData = [
  {
    name: "Фирменное фото",
    icon: "./img/camera.png",
    color: "163.42deg, #114165 19.15%, #309C75 133.82%, #6EE4EC 172.91%",
  },
  {
    name: "Биржа деловых контактов",
    icon: "./img/people.png",
    color:
      "241.64deg, #114063 1.04%, rgba(38, 40, 83, 0.97) 48.07%, #F7306E 172.19%",
  },
  {
    name: "Карта площадки",
    icon: "./img/map.png",
    color:
      "61.72deg, #582A8B -5.37%, #174970 62.33%, #18CC5A 149.83%, #30E79E 152.63%",
  },
  {
    name: "Фотобанк",
    icon: "./img/gallery.png",
    color:
      "303.15deg, #FF9101 -56.24%, #143D60 49.14%, #143D60 65.67%, #BD1B7C 145.42%",
  },
  {
    name: "Запрос статусов беджа, ПЦР, ТС",
    icon: "./img/note.png",
    color: "222.24deg, #D12AAC -80.67%, #174264 58.84%, #09647B 116.61%",
  },
  {
    name: "Центр информирования",
    icon: "./img/messages.png",
    color: "123.16deg, #114063 -0.48%, #115463 39.45%, #F89931 109.61%",
  },
];

export const accordionData = {
  title: "Описание",
  content: `Петербургский международный юридический форум – крупнейшая площадка для диалога между представителями юридического, предпринимательского, политического и правоохранительного сообществ по вопросам права в интересах граждан, бизнеса, совершенствования правоприменительной практики, продвижения законодательных инициатив в целях развития правовой культуры и регулирования социально-экономической сферы в современных условиях. Форум проводится Министерством юстиции Российской Федерации и Фондом Росконгресс в соответствии с Указом Президента Российской Федерации от 15 февраля 2022 г. № 55.
Ключевая цель Форума – продвижение идей модернизации права в условиях происходящих сегодня глобальных изменений, в том числе:
улучшение взаимодействия правовых систем и выработка единых подходов к решению правовых вопросов в современном мире;
модернизация российского и международного права с учетом лучшего опыта для защиты прав и интересов всех субъектов правовых отношений;
содействие развитию современной юридической науки и юридического образования в России и в мире;
развитие цифровых технологий в области права, государственного управления и экономики.`,
};

export const contactsData = [
  { icon: "./img/phone.png", info: "+7 (812) 406 77 02", linkType: "tel:" },
  { icon: "./img/link.png", info: "https://legalforum.info", linkType: "" },
  {
    icon: "./img/mail.png",
    info: "contact@legalforum.info",
    linkType: "mailto:",
  },
];

export const menuData = [
  {
    name: "Сервисы",
    sublist: [
      "Программа",
      "Карта",
      "Спикеры",
      "Партнеры",
      "Фотографии",
      "Найти стенд",
    ],
  },
  { name: "Описание", sublist: [] },
  { name: "Контакты", sublist: [] },
  { name: "FAQ", sublist: [] },
  { name: "Обратная связь", sublist: [] },
  { name: "Пройти опрос", sublist: [] },
];


export const programmsData = {
  topTabs: ["Программы", "Спикеры", "Партнеры"],
  date: {
    currentMonth: "Август",
    currentYear: 2023,
    activeDays: [
      { dayName: "Вт", dayNumber: 12, isChosen: true, fullDate: "12.08.2023" },
      { dayName: "Ср", dayNumber: 13, isChosen: false, fullDate: "13.08.2023" },
      { dayName: "Чт", dayNumber: 14, isChosen: false, fullDate: "14.08.2023" },
      { dayName: "Пт", dayNumber: 15, isChosen: false, fullDate: "15.08.2023" },
      { dayName: "Сб", dayNumber: 16, isChosen: false, fullDate: "16.08.2023" },
    ],
    disabledDays: [
      { dayName: "Вс", dayNumber: 17 },
      { dayName: "Пн", dayNumber: 18 },
      { dayName: "Вт", dayNumber: 19 },
      { dayName: "Ср", dayNumber: 20 },
    ],
  },
  programm: [
    {
      date: "12.08.2023",
      ivents: [
        {
          time: "10:00 - 11:30",
          gtm: "GTM+3",
          card: [
            {
              status: "Трансляция",
              category: "Право, бизнес, санкции",
              title: "Ответственность топ-менеджеров в новой реальности",
              place: "Конгресс-центр,конференц-зал B1",
              datetime: "29 июн 2022 • 10:00–11:30 ",
              background: "",
            },
            {
              status: "Трансляция",
              category: "Человек и право",
              title:
                "Открытый диалог «О правовых проблемах, возникающих при рассмотрении споров потребителей финансовых услуг с финансовыми организациями»",
              place: "Конгресс-центр, конференц-зал B2",
              datetime: "29 июн 2022 • 10:00–11:30 ",
              background: "./img/cardBackground.jpg",
            },
          ],
        },
        {
          time: "12:00",
          gtm: "GTM+3",
          card: [
            {
              status: "Трансляция",
              category: "Цифровая трансформация",
              title: "Криптовалюты и их место в экономике будущего",
              place: "Конгресс-центр, конференц-зал B1",
              datetime: "29 июн 2022 • 12:00",
              background: "",
            },
            {
              status: "Трансляция",
              category: "Право, бизнес, санкции",
              title:
                "Участие нотариуса в корпоративном управлении: нужна ли бизнесу нотариальная опека?",
              place: "Конгресс-центр, конференц-зал B2",
              datetime: "29 июн 2022 • 10:00–11:30 ",
              background: "./img/cardBackground.jpg",
            },
          ],
        },
      ],
    },
    {
      date: "13.08.2023",
      ivents: [
        {
          time: "12:00",
          gtm: "GTM+3",
          card: [
            {
              status: "Трансляция",
              category: "Цифровая трансформация",
              title: "Криптовалюты и их место в экономике будущего",
              place: "Конгресс-центр, конференц-зал B1",
              datetime: "29 июн 2022 • 12:00",
              background: "",
            },
            {
              status: "Трансляция",
              category: "Право, бизнес, санкции",
              title:
                "Участие нотариуса в корпоративном управлении: нужна ли бизнесу нотариальная опека?",
              place: "Конгресс-центр, конференц-зал B2",
              datetime: "29 июн 2022 • 10:00–11:30 ",
              background: "",
            },
          ],
        },
      ],
    },
  ],
};
