export type Destination = { slug:string; name:string; country:string; hero:string; teaser:string; highlights:string[] };
export type Tour = { slug:string; title:string; country:string; format:string; priceFrom:string; duration:string; image:string; description:string };
export type BlogPost = { slug:string; title:string; excerpt:string; content:string[]; cover:string; date:string };
export const destinations: Destination[] = [
{ slug:'italy',name:'Италия',country:'Италия',hero:'/images/placeholder-italy.jpg',teaser:'Утро с видом на бухту, ужин у воды и маршруты без суеты.',highlights:['Амальфитанское побережье','Сицилия и гастрономия','Бутик-отели у моря']},
{ slug:'montenegro',name:'Черногория',country:'Черногория',hero:'/images/placeholder-montenegro.jpg',teaser:'Камерные пляжи, горы у моря и отели, куда хочется вернуться.',highlights:['Бока-Которская бухта','Семейные резорты','Яхтенные прогулки']},
{ slug:'croatia',name:'Хорватия',country:'Хорватия',hero:'/images/placeholder-croatia.jpg',teaser:'Море, еда, города и свобода на Адриатике.',highlights:['Дубровник и Сплит','Островные маршруты','Пляжи и старые города']},
{ slug:'greece',name:'Греция',country:'Греция',hero:'/images/placeholder-greece.jpg',teaser:'Белые домики, бирюзовые бухты и неспешные вечера.',highlights:['Крит и Родос','Семейный отдых на море','Романтика на Санторини']},
{ slug:'spain',name:'Испания',country:'Испания',hero:'/images/placeholder-spain.jpg',teaser:'Побережья Коста-Брава и города с характером.',highlights:['Барселона + море','Гастро-туры','Премиальные курорты']},
{ slug:'turkey',name:'Турция',country:'Турция',hero:'/images/placeholder-turkey.jpg',teaser:'Стильные отели у моря, сервис и комфорт для семьи.',highlights:['Бодрум и Фетхие','Отдых с детьми','Premium резорты']},
];
export const tours: Tour[] = [
{slug:'family-sea-vacation',title:'Family Sea Vacation',country:'Черногория',format:'Семейный отдых',priceFrom:'от 210 000 ₽',duration:'7 ночей',image:'/images/placeholder-family.jpg',description:'Спокойный маршрут с детской инфраструктурой и отелем у моря.'},
{slug:'gastro-tour',title:'Gastro Tour',country:'Италия',format:'Гастро-тур',priceFrom:'от 320 000 ₽',duration:'8 ночей',image:'/images/placeholder-gastro.jpg',description:'Вино, локальная кухня и красивые города у побережья.'},
{slug:'yacht-weekend',title:'Yacht Weekend',country:'Хорватия',format:'Яхтенный тур',priceFrom:'от 390 000 ₽',duration:'5 ночей',image:'/images/placeholder-yacht.jpg',description:'Острова, приватные бухты и ритм моря без спешки.'},
{slug:'romantic-trip',title:'Romantic Trip',country:'Греция',format:'Романтическое путешествие',priceFrom:'от 280 000 ₽',duration:'6 ночей',image:'/images/placeholder-romance.jpg',description:'Бутик-отель, ужины у воды и идеальный маршрут для двоих.'},
];
export const faqItems = [{q:'Сколько длится подбор тура?',a:'Первичное предложение мы готовим в течение 1–2 часов после квиза.'},{q:'Можно ли подобрать тур под фиксированный бюджет?',a:'Да, мы сразу учитываем бюджет и предлагаем только релевантные варианты.'},{q:'Вы помогаете во время поездки?',a:'Да, сопровождаем до вылета и остаёмся на связи в путешествии.'},];
export const blogPosts: BlogPost[] = [
{slug:'kuda-poehat-na-more-letom',title:'Куда поехать на море летом: 7 направлений',excerpt:'Подборка направлений для яркого отпуска у моря.',date:'2026-04-10',cover:'/images/placeholder-blog-1.jpg',content:['Летом лучше выбирать направления, где комфортный климат и удобная логистика.','Италия, Черногория, Хорватия, Греция, Испания и Турция дают разный ритм отдыха — от размеренного до активного.']},
{slug:'italiya-ili-greciya',title:'Италия или Греция: что выбрать для первого путешествия',excerpt:'Сравниваем два идеальных морских сценария.',date:'2026-04-14',cover:'/images/placeholder-blog-2.jpg',content:['Италия — это гастрономия, красивые города и разнообразие маршрутов.','Греция — островной вайб, прозрачное море и расслабленный темп.']},
{slug:'kak-vybrat-otel-u-morya',title:'Как выбрать отель у моря и не ошибиться',excerpt:'Чек-лист перед бронированием.',date:'2026-04-20',cover:'/images/placeholder-blog-3.jpg',content:['Проверьте вход в море, инфраструктуру рядом и реальные отзывы последних месяцев.']},
{slug:'gastro-tour-more-vino-goroda',title:'Гастро-тур: как совместить море, вино и красивые города',excerpt:'Маршрут, в котором вкус и эстетика идут вместе.',date:'2026-04-24',cover:'/images/placeholder-blog-4.jpg',content:['Лучший гастро-тур строится вокруг локальных ресторанов, виноделен и прогулок вдоль моря.']},
{slug:'semejnyj-otdyh-chto-proverit',title:'Семейный отдых: что важно проверить до бронирования',excerpt:'Чтобы отпуск прошёл спокойно и комфортно.',date:'2026-04-28',cover:'/images/placeholder-blog-5.jpg',content:['Питание, детская инфраструктура, трансфер и мягкий режим дня — база для семейного маршрута.']},
];
