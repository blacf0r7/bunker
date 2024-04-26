const professions = [
    "Акушер-гинеколог (специалист по женским репродуктивным функциям организма)",
    "Аллерголог-иммунолог (специалист по аллергическим реакциям и в иммунологии)",
    "Андролог (специалист по особенностям мужского организма)",
    "Военно-полевой хирург",
    "Анестезиолог (специалист по анестезии)",
    "Бактериолог (специалист по бактериям)",
    "Венеролог (специалист по ЗППП)",
    "Вертебролог",
    "Вирусолог (специалист по вирусам)",
    "Врач скорой медицинской помощи",
    "Врач УЗ-диагностики",
    "Врач МСЭК (медико-социальной экспертизы)",
    "Врач функциональной диагностики",
    "Гастроэнтеролог (специалист в области ЖКТ человека)",
    "Гирудотерапевт",
    "Генетик",
    "Гепатолог (специалист по человеческой печени)",
    "Гомеопат (врач, использующий в качестве лечения другие средства: животные, растительные и минеральные. Лечит не определённые заболевания, а скорее всего́ человека и его иммунную систему)",
    "Гематолог (специалист по крови и органам кроветворения)",
    "Дерматолог (специалист по коже и ее придаткам)",
    "Диетолог (специалист по питанию)",
    "Инфекционист (специалист по профилактике, диагностике и лечению инфекций)",
    "Иммунолог",
    "Кардиолог (специалист в области сердечно-сосудистой системы человека)",
    "Кардиохирург (хирург, выполняющий хирургические операции на сердце)",
    "Кинезитерапевт",
    "Косметолог",
    "Врач клинической лабораторной диагностики (специалист лабораторной диагностики)",
    "Логопед (специалист по нарушениям речи)",
    "Мануальный терапевт (специалист по лечению позвоночника, суставов, систем мышц и внутренних органов воздействием рук)",
    "Массажист (специалист по массажу)",
    "Маммолог (специалист по патологии молочных желез человека)",
    "Медицинская сестра",
    "Нарколог",
    "Невролог (специалист по заболеваниям нервной системы)",
    "Неонатолог",
    "Нейрохирург (хирург, выполняющий оперативное лечение заболеваний нервной системы)",
    "Нефролог (специалист по заболеваниям почек)",
    "Онколог (лечит рак и другие онкологические заболевания)",
    "Ортодонт (специалист в области зубо-челюстных аномалий)",
    "Ортопед (специалист в области лечения заболеваний костно-мышечной системы)",
    "Оториноларинголог (ЛОР, специалист в области заболеваний уха, горла и носа)",
    "Офтальмолог (специалист по глазу)",
    "Патологоанатом (специалист в области биопсийной диагностики и аутопсии)",
    "Педиатр (врач, занимающийся профилактикой, диагностикой и лечением детских болезней)",
    "Пластический хирург",
    "Подолог (врач, занимающийся лечением ногтей)",
    "Прозектор",
    "Проктолог",
    "Профпатолог",
    "Психиатр (специалист по психическим расстройствам)",
    "Психоневропатолог",
    "Психотерапевт",
    "Пульмонолог (врач, занимающийся диагностикой, лечением и профилактикой болезней дыхательной системы)",
    "Радиолог",
    "Реаниматолог",
    "Ревматолог (специалист по аутоиммунным заболеваниям суставов и соединительной ткани)",
    "Рентгенолог",
    "Рефлексотерапевт",
    "Репродуктолог",
    "Санитар (работник, выполняющий вспомогательные функции)",
    "Сексолог",
    "Сексопатолог",
    "Семейный врач",
    "Специалист по клеточным технологиям",
    "Спортивный врач",
    "Сомнолог",
    "Стоматолог (специалист по зубам, не путать с зубным врачом)",
    "Сурдолог (специалист, который занимается диагностикой, лечением нарушений слуха и коррекцией уже имеющихся проблем в этой области —  подбором слуховых аппаратов)",
    "Танатолог",
    "Терапевт",
    "Торакальный хирург",
    "Травматолог",
    "Трансфузиолог",
    "Трихолог (специалист по волосам и волосистой части кожи головы)",
    "Токсиколог (врач, биолог или химик, специалист в области токсикологии)",
    "Фармацевт",
    "Фельдшер (врач, проводит диагностику, лечение или направляет пациентов к соотв. специалисту)",
    "Физиотерапевт",
    "Флеболог",
    "Фтизиатр (специалист по туберкулёзу)",
    "Хирург (специалист по методам диагностики и хирургического лечения заболеваний и травм)",
    "Уролог (специалист по заболеваниям репродуктивного органа у мужчин)",
    "Эндокринолог (специалист по патологии эндокринной системы)",
    "Эндоскопист",
    "Эпидемиолог",
    "Эфферентолог",
    "Биоинженер",
    "Учёный",
    "Антрополог",
    "Археолог",
    "Архивариус",
    "Астроном",
    "Астрофизик",
    "Астрохимик",
    "Бактериолог",
    "Биолог",
    "Биофизик",
    "Биохимик",
    "Библиотековед",
    "Ботаник (профессия)",
    "Вирусолог",
    "Востоковед",
    "Генетик",
    "Географ",
    "Геодезист",
    "Геолог",
    "Гидролог",
    "Гляциолог",
    "Египтолог",
    "Зоолог",
    "Искусствовед",
    "Историк",
    "Ихтиолог",
    "Логик",
    "Криптозоолог",
    "Культуролог",
    "Лингвист",
    "Математик",
    "Миколог",
    "Микробиолог",
    "Метеоролог",
    "Океанолог",
    "Орнитолог",
    "Палеонтолог",
    "Политолог",
    "Религиовед",
    "Серпентолог",
    "Социолог",
    "Теолог",
    "Териолог",
    "Физик",
    "Философ",
    "Филолог",
    "Футуролог",
    "Химик",
    "Эколог",
    "Энтомолог",
    "Блоггер",
    "Диктор",
    "Контент-менеджер",
    "Копирайтер",
    "Машинистка",
    "Переводчик",
    "Тележурналист",
    "Администратор базы данных",
    "Веб-интегратор",
    "Веб-мастер",
    "Монтажник связи",
    "Оператор ПК",
    "Программист",
    "Кодер",
    "Веб-программист",
    "Радист",
    "Робототехник",
    "Системный администратор",
    "Телеграфист",
    "Телефонист",
    "Тестировщик",
    "Автослесарь",
    "Автоэлектрик",
    "Аккумуляторщик",
    "Бондарь",
    "Бульдозерист",
    "Горняк",
    "Грейдерист",
    "Дизайнер-конструктор",
    "Драпировщик",
    "Заточник",
    "Землекоп",
    "Инженер",
    "Инженер-акустик",
    "Инженер-взрывотехник",
    "Инженер-гальваник",
    "Инженер-гидравлик",
    "Инженер КИПиА",
    "Инженер-конструктор",
    "Инженер-механик",
    "Инженер по Технике Безопасности",
    "Инженер-системотехник",
    "Инженер-строитель",
    "Инженер-технолог",
    "Инженер-физик",
    "Инженер-электрик",
    "Инженер-энергетик",
    "Кабельщик",
    "Каменотёс",
    "Крановщик",
    "Кровельщик",
    "Кромкозакатчик",
    "Кузнец",
    "Лекальщик",
    "Литейщик",
    "Маляр",
    "Маркшейдер",
    "Машинист",
    "Медник",
    "Металлург",
    "Механик",
    "Монтажник",
    "Монтажник радиоэлектронной аппаратуры и приборов",
    "Моторист",
    "Печник",
    "Плиточник",
    "Плотник",
    "Промышленный альпинист",
    "Проходчик",
    "Радиомеханик",
    "Распиловщик",
    "Расточник",
    "Рихтовщик",
    "Сантехник",
    "Сборщик",
    "Сварщик",
    "Слесарь",
    "Скорняк",
    "Сталевар",
    "Столяр",
    "Столяр-краснодеревщик",
    "Строитель",
    "Техник",
    "Технолог",
    "Токарь",
    "Токарь-карусельщик",
    "Формовщик",
    "Фрезеровщик",
    "Холодильщик",
    "Шахтёр",
    "Швея",
    "Шлифовщик",
    "Шорник",
    "Штукатур",
    "Электрик",
    "Инженер-лаборант",
    "Инженер-химик",
    "Химик-аналитик",
    "Химик-технолог",
    "Химик-контролер",
    "Верстальщик",
    "Выпускающий редактор",
    "Издатель",
    "Корректор",
    "Метранпаж (устар)",
    "Переплётчик",
    "Печатник (профессия)",
    "Редактор (профессия)",
    "Типограф (профессия)",
    "Фальцовщик",
    "Водитель",
    "Диспетчер",
    "Кондуктор",
    "Машинист локомотива",
    "Моторист",
    "Проводник (железнодорожный служащий)",
    "Слесарь-механик",
    "Стрелочник (профессия)",
    "Таксист",
    "Экспедитор на дальних поездках",
    "Авиадиспетчер",
    "Авиатехник",
    "Бортмеханик",
    "Бортинженер",
    "Воздухоплаватель",
    "Донкерман",
    "Капитан судна",
    "Кок",
    "Космонавт",
    "Лётчик",
    "Бортпроводник/стюард",
    "Лоцман",
    "Тальман",
    "Шкипер",
    "Актёр",
    "Артист цирка",
    "Архитектор",
    "Балетмейстер",
    "Балерина",
    "Брейдер",
    "Вокалист",
    "Визажист",
    "Геймдизайнер",
    "Гитарист",
    "Гример",
    "Диджей",
    "Дизайнер",
    "Дирижёр",
    "Декоратор",
    "Журналист",
    "Звукорежиссёр",
    "Златокузнец",
    "Изобретатель",
    "Иллюстратор",
    "Имиджмейкер",
    "Инженер",
    "Композитор",
    "Кондитер",
    "Мастер маникюра",
    "Мастер педикюра",
    "Манекенщица",
    "Модель",
    "Модельер",
    "Музыкант",
    "Парикмахер",
    "Парфюмер",
    "Писатель",
    "Поэт",
    "Повар",
    "Программист",
    "Режиссёр",
    "Реставратор",
    "Скульптор",
    "Стилист",
    "Танцор",
    "Татуировщик",
    "Флорист",
    "Фотограф",
    "Фотомодель",
    "Хореограф",
    "Художник",
    "Ювелир",
    "Художник по свету",
    "Дизайнер рекламы",
    "Каскадёр",
    "Кинодраматург",
    "Киномеханик",
    "Кинооператор",
    "Кинорежиссер",
    "Оператор кино и телевидения",
    "Постановщик трюков",
    "Продюсер",
    "Сценарист",
    "Критик",
    "Предприниматель (прикладывает рабочую потенцию работника)",
    "Задумщик",
    "Бармен",
    "Библиотекарь",
    "Витолье",
    "Горничная",
    "Грузчик",
    "Доула (профессия)",
    "Кладовщик",
    "Кнопочник (заклёпочник, мастер-специалист по замене и установке швейной и кожгалантерейной металлофурнитуры)",
    "Крупье",
    "Лифтёр",
    "Мастер маникюра",
    "Менеджер",
    "Мерчандайзер",
    "Метрдотель",
    "Няня",
    "Оператор коллцентра",
    "Официант",
    "Парикмахер",
    "Портной",
    "Портье",
    "Почтальон",
    "Продавец",
    "Сиделка",
    "Сапожник",
    "Сомелье",
    "Телемастер",
    "Торседор",
    "Упаковщик",
    "Флорист (дизайнер)",
    "Швейцар",
    "Дворник",
    "Клинер",
    "Мусоропроводчик",
    "Мусорщик (профессия)",
    "Садовник",
    "Уборщик",
    "Воспитатель",
    "Декан",
    "Дефектолог",
    "Логопед",
    "Педагог",
    "Преподаватель",
    "Проректор",
    "Психолог",
    "Ректор",
    "Сурдопедагог",
    "Тифлопедагог",
    "Учитель",
    "Булочник",
    "Квасник",
    "Кондитер",
    "Мельник",
    "Месильщик",
    "Пекарь",
    "Повар",
    "Сыровар",
    "Хлебопёк",
    "Агроном",
    "Бахчевод",
    "Агроном-почвовед",
    "Агроном по защите растений",
    "Ветеринар",
    "Виноградарь",
    "Доярка",
    "Животновод",
    "Жиловщик/Обвальщик",
    "Зоотехник",
    "Коневод",
    "Комбайнер",
    "Инженер-лесотехник",
    "Инженер по механизации",
    "Механизатор",
    "Мелиоратор",
    "Мясник",
    "Оператор машинного доения",
    "Овчар",
    "Пастух",
    "Растениевод",
    "Садовод",
    "Свинопас",
    "Скотник",
    "Специалист по стрижке овец",
    "Табаковод",
    "Табунщик",
    "Тракторист",
    "Пчеловод",
    "Фермер",
    "Хлебороб",
    "Хлопокороб",
    "Адвокат",
    "Военнослужащий",
    "Государственный исполнитель",
    "Детектив (профессия)",
    "Дипломат",
    "Дознаватель",
    "Кинолог",
    "Конвоир",
    "Министр",
    "Нотариус",
    "Оперативный работник",
    "Полицейский",
    "Пожарный",
    "Правовед",
    "Прокурор",
    "Работник органов ЗАГСа",
    "Следователь",
    "Судебный пристав",
    "Судья",
    "Телохранитель",
    "Тюремный надзиратель",
    "Эксперт-криминалист",
    "Юрисконсульт",
    "Юрист",
    "Таможенник",
    "Артиллерист",
    "Авиационный техник",
    "Баталер",
    "Борт-инженер",
    "Борт-механик",
    "Борт-радист",
    "Борт-стрелок",
    "Военный дознаватель",
    "Военный переводчик",
    "Военный консультант",
    "Военно-полевой хирург",
    "Военный полицейский",
    "Военный прокурор",
    "Военный судья",
    "Военный юрист",
    "Водолаз",
    "Воспитатель",
    "Гренадер",
    "Горнострелок",
    "Гранатомётчик",
    "Десантник",
    "Диверсант",
    "Заряжающий",
    "Интендант",
    "Зенитчик",
    "Кавалерист",
    "Канонир",
    "Каптенармус",
    "Командир",
    "Комендант",
    "Корректировщик",
    "Лётчик",
    "Механик-Водитель",
    "Маркитант",
    "Мотострелок",
    "Морской пехотинец",
    "Наводчик орудия",
    "Начальник военного оркестра",
    "Начальник гаупвахты",
    "Начальник службы",
    "Начальник склада",
    "Начальник штаба",
    "Огнемётчик",
    "Особист",
    "Оператор вооружения",
    "Оператор РЛС",
    "Пограничник",
    "Подводник",
    "Пулемётчик",
    "Разведчик",
    "Радист",
    "Радиотелефонист",
    "Ракетчик",
    "Сапёр",
    "Связист",
    "Секретчик",
    "Старшина",
    "Стрелок",
    "Снайпер",
    "Танкист",
    "Техник",
    "Топограф",
    "Тыловик",
    "Фельдшер",
    "Финансист",
    "Фортификатор",
    "Фуражир",
    "Химик",
    "Шифровальщик",
    "Штурман",
    "Епископ",
    "Священник",
    "Диакон",
    "Иподиакон",
    "Певец (певчий церковного хора)",
    "Пономарь (алтарник)",
    "Регент",
    "Иконописец",
    "Сестра милосердия",
    "Звонарь",
    "Диаконисса",
    "Автоугонщик",
    "Аферист",
    "Барыга",
    "Барсеточник",
    "Браконьер",
    "Бутлегер",
    "Вор",
    "Влад кабась",
    "Грабитель",
    "Домушник",
    "Карманник",
    "Катала",
    "Киллер",
    "Кидала",
    "Клофелинщик",
    "Контрабандист",
    "Коррупционер",
    "Медвежатник",
    "Мошенник",
    "Напёрсточник",
    "Наркоделец",
    "Пират",
    "Разбойник",
    "Рейдер",
    "Рекитёр",
    "Скотокрад",
    "Сутенёр",
    "Фальшивомонетчик",
    "Форточник",
    "Хакер",
    "Чёрный археолог",
    "Чёрный риэлтор",
    "Чёрный копатель",
    "Цеховик",
    "Шантажист",
    "Щипач",
    "Шулер",
    "Колхозник",
    "Дипломат",
    "Дипломатический работник",
    "Кинолог",
    "Организатор свадеб",
    "Переводчик",
    "Промышленный альпинист",
    "Безработный"
]

export default professions