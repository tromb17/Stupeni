/* Тексты для режима «Перевод и вопросы» (тестовый) и вопросы теста уровня.
   Текст: пары [по-русски, по-английски], словарик [слово, перевод], вопросы
   [вид, вопрос, [верный, …неверные], пояснение]; вид: v — лексика, p — фразы, c — понимание. */
(function () {
  window.READING = [
    {
      id: "r-a1-1", level: "a1", icon: "🌅", title: "Мой день",
      text: [
        ["Меня зовут Олег.", "My name is Oleg."],
        ["Я живу в Казани с семьёй.", "I live in Kazan with my family."],
        ["Каждый день я просыпаюсь в семь часов.", "Every day I wake up at seven o'clock."],
        ["Я завтракаю и пью кофе.", "I have breakfast and drink coffee."],
        ["Потом я еду на работу на автобусе.", "Then I go to work by bus."],
        ["Я работаю в банке.", "I work in a bank."],
        ["Вечером я читаю или смотрю фильмы.", "In the evening I read or watch films."],
        ["Я люблю свой город!", "I love my city!"]
      ],
      gloss: [["wake up", "просыпаться"], ["have breakfast", "завтракать"], ["by bus", "на автобусе"], ["in the evening", "вечером"], ["o'clock", "ровно (о часах)"]],
      q: [
        ["v", "Что значит «have breakfast»?", ["завтракать", "обедать", "ужинать"], "breakfast — завтрак."],
        ["v", "Как по-английски «на автобусе»?", ["by bus", "on bus", "with bus"], "Транспорт — через by: by bus, by car."],
        ["p", "Как сказать «Я просыпаюсь в семь часов»?", ["I wake up at seven o'clock.", "I wake up in seven hours.", "I am wake up at seven."], "Время — с at; am здесь не нужен."],
        ["p", "Верный перевод: «Вечером я читаю».", ["In the evening I read.", "At evening I reading.", "In evening I am read."], "in the evening — вечером."],
        ["c", "Где работает Олег?", ["In a bank.", "In a school.", "At home."], "I work in a bank."],
        ["c", "Как Олег добирается до работы?", ["By bus.", "By car.", "On foot."], "Then I go to work by bus."]
      ]
    },
    {
      id: "r-a1-2", level: "a1", icon: "🏡", title: "Наша квартира",
      text: [
        ["У нас небольшая квартира.", "We have a small flat."],
        ["В ней две комнаты и кухня.", "There are two rooms and a kitchen in it."],
        ["На кухне есть большой стол.", "There is a big table in the kitchen."],
        ["Моя дочь любит рисовать за этим столом.", "My daughter likes drawing at this table."],
        ["Рядом с домом есть парк и магазин.", "There is a park and a shop near the house."],
        ["По выходным мы гуляем в парке.", "At the weekend we walk in the park."]
      ],
      gloss: [["flat", "квартира"], ["rooms", "комнаты"], ["drawing", "рисование"], ["near", "рядом с"], ["at the weekend", "на выходных"]],
      q: [
        ["v", "Что значит «flat» в этом тексте?", ["квартира", "этаж", "плоский"], "В британском английском flat — квартира."],
        ["v", "Как по-английски «на выходных»?", ["at the weekend", "in weekend", "on the week"], "at the weekend (брит.) / on the weekend (амер.)."],
        ["p", "Как сказать «На кухне есть большой стол»?", ["There is a big table in the kitchen.", "In the kitchen has a big table.", "There are a big table in the kitchen."], "Одна вещь — there is, место — в конце."],
        ["p", "Верный перевод: «Моя дочь любит рисовать».", ["My daughter likes drawing.", "My daughter like drawing.", "My daughter likes draw."], "С she — likes; после like — -ing."],
        ["c", "Сколько комнат в квартире?", ["Two.", "Three.", "One."], "There are two rooms…"],
        ["c", "Что есть рядом с домом?", ["A park and a shop.", "A school.", "A bank and a café."], "There is a park and a shop near the house."]
      ]
    },
    {
      id: "r-a2-1", level: "a2", icon: "🌊", title: "Поездка на море",
      text: [
        ["Прошлым летом мы поехали на море.", "Last summer we went to the seaside."],
        ["Мы остановились в маленькой гостинице у пляжа.", "We stayed at a small hotel near the beach."],
        ["Каждое утро мы плавали, а днём гуляли по городу.", "Every morning we swam, and in the afternoon we walked around the town."],
        ["Однажды мы заблудились, но нам помогла добрая женщина.", "One day we got lost, but a kind woman helped us."],
        ["Еда была вкусной и недорогой.", "The food was tasty and cheap."],
        ["Это была лучшая поездка в моей жизни!", "It was the best trip of my life!"]
      ],
      gloss: [["seaside", "морское побережье"], ["swam", "плавали (swim)"], ["got lost", "заблудились"], ["tasty", "вкусный"], ["the best", "лучший"]],
      q: [
        ["v", "Что значит «got lost»?", ["заблудились", "потеряли вещи", "опоздали"], "get lost — заблудиться."],
        ["v", "Как по-английски «вкусный»?", ["tasty", "tasted", "taste"], "tasty — вкусный."],
        ["p", "Как сказать «лучшая поездка в моей жизни»?", ["the best trip of my life", "the better trip in my life", "the most good trip of my life"], "good → better → the best."],
        ["p", "Верный перевод: «Мы остановились в маленькой гостинице».", ["We stayed at a small hotel.", "We stopped in small hotel.", "We were stay at a small hotel."], "stay at a hotel — жить в гостинице."],
        ["c", "Где жила семья?", ["At a small hotel near the beach.", "In a flat in the centre.", "With friends."], "We stayed at a small hotel near the beach."],
        ["c", "Кто им помог, когда они заблудились?", ["A kind woman.", "A police officer.", "A taxi driver."], "…a kind woman helped us."]
      ]
    },
    {
      id: "r-a2-2", level: "a2", icon: "🍝", title: "Новое хобби",
      text: [
        ["Месяц назад я решила научиться готовить.", "A month ago I decided to learn to cook."],
        ["Раньше я делала только бутерброды.", "Before, I only made sandwiches."],
        ["Теперь я готовлю ужин три раза в неделю.", "Now I cook dinner three times a week."],
        ["Муж говорит, что моя паста лучше, чем в ресторане.", "My husband says that my pasta is better than in a restaurant."],
        ["В следующие выходные я собираюсь пригласить друзей.", "Next weekend I'm going to invite my friends."],
        ["Надеюсь, им понравится!", "I hope they will like it!"]
      ],
      gloss: [["decided", "решила"], ["sandwiches", "бутерброды"], ["three times a week", "три раза в неделю"], ["better than", "лучше, чем"], ["I hope", "надеюсь"]],
      q: [
        ["v", "Что значит «three times a week»?", ["три раза в неделю", "три недели", "три часа в неделю"], "time здесь — «раз»."],
        ["v", "Как по-английски «бутерброды»?", ["sandwiches", "breads", "sandwich"], "sandwich — бутерброд, много — sandwiches."],
        ["p", "Как сказать «Я собираюсь пригласить друзей»?", ["I'm going to invite my friends.", "I going to invite my friends.", "I will to invite my friends."], "План — am going to."],
        ["p", "Верный перевод: «лучше, чем в ресторане».", ["better than in a restaurant", "more good than in a restaurant", "better then in a restaurant"], "«чем» — than."],
        ["c", "Как часто автор готовит ужин?", ["Three times a week.", "Every day.", "Only at the weekend."], "Now I cook dinner three times a week."],
        ["c", "Что автор делала раньше?", ["Only sandwiches.", "Pasta.", "Nothing at all."], "Before, I only made sandwiches."]
      ]
    },
    {
      id: "r-b1-1", level: "b1", icon: "💻", title: "Работа из дома",
      text: [
        ["Я работаю из дома уже три года.", "I have worked from home for three years."],
        ["Сначала мне это очень нравилось: не нужно было тратить время на дорогу.", "At first I really liked it: I didn't have to waste time commuting."],
        ["Однако со временем я заметил, что почти не выхожу из квартиры.", "However, over time I noticed that I hardly ever left my flat."],
        ["Поэтому я решил кое-что изменить.", "So I decided to change a few things."],
        ["Теперь я каждое утро гуляю полчаса, а по пятницам работаю в кафе.", "Now I go for a half-hour walk every morning, and on Fridays I work in a café."],
        ["Если бы мне предложили вернуться в офис, я бы, наверное, отказался.", "If someone offered me a job back in the office, I would probably refuse."]
      ],
      gloss: [["commuting", "дорога на работу и обратно"], ["waste time", "тратить время зря"], ["over time", "со временем"], ["hardly ever", "почти никогда"], ["refuse", "отказаться"]],
      q: [
        ["v", "Что значит «hardly ever»?", ["почти никогда", "очень часто", "с трудом"], "hardly ever — почти никогда."],
        ["v", "Что значит «commuting»?", ["дорога на работу и обратно", "общение с коллегами", "работа в офисе"], "commute — ездить на работу."],
        ["p", "Как сказать «Я работаю из дома три года»?", ["I have worked from home for three years.", "I work from home for three years.", "I am working from home since three years."], "Длится до сих пор — Present Perfect + for."],
        ["p", "Верный перевод: «я бы, наверное, отказался».", ["I would probably refuse", "I will probably refuse", "I probably refused"], "Воображаемая ситуация — would."],
        ["c", "Что автор делает по пятницам?", ["Works in a café.", "Goes to the office.", "Doesn't work."], "…on Fridays I work in a café."],
        ["c", "Почему автор решил что-то изменить?", ["He hardly ever left his flat.", "He lost his job.", "His boss asked him."], "…I hardly ever left my flat. So I decided…"]
      ]
    },
    {
      id: "r-b1-2", level: "b1", icon: "📺", title: "Как я выучил язык",
      text: [
        ["Когда я был студентом, я пытался учить английский по учебникам.", "When I was a student, I tried to learn English from textbooks."],
        ["Я знал много правил, но не мог поддержать простой разговор.", "I knew a lot of rules, but I couldn't keep up a simple conversation."],
        ["Всё изменилось, когда я начал смотреть сериалы с субтитрами.", "Everything changed when I started watching TV series with subtitles."],
        ["Сначала я понимал совсем немного, но не сдавался.", "At first I understood very little, but I didn't give up."],
        ["Через полгода я заметил, что понимаю почти всё.", "Six months later, I noticed that I understood almost everything."],
        ["Мой совет: занимайтесь понемногу, но каждый день.", "My advice: study a little, but every day."]
      ],
      gloss: [["textbooks", "учебники"], ["keep up", "поддерживать (разговор)"], ["subtitles", "субтитры"], ["give up", "сдаваться"], ["advice", "совет"]],
      q: [
        ["v", "Что значит «give up»?", ["сдаться", "начать", "подняться"], "give up — бросить, сдаться."],
        ["v", "Как по-английски «учебники»?", ["textbooks", "notebooks", "lessons"], "textbook — учебник; notebook — тетрадь."],
        ["p", "Как сказать «Я начал смотреть сериалы»?", ["I started watching TV series.", "I started watch TV series.", "I have started to watching TV series."], "start + -ing (или start to watch)."],
        ["p", "Верный перевод: «Мой совет: …»", ["My advice: …", "My advices: …", "My an advice: …"], "advice не бывает во множественном числе."],
        ["c", "Что помогло автору?", ["TV series with subtitles.", "More textbooks.", "A private teacher."], "Everything changed when I started watching TV series…"],
        ["c", "Через сколько автор стал понимать почти всё?", ["Six months.", "One month.", "Two years."], "Six months later…"]
      ]
    },
    {
      id: "r-b2-1", level: "b2", icon: "📵", title: "Цифровой детокс",
      text: [
        ["Недавно я осознал, что провожу в телефоне больше пяти часов в день.", "Recently I realised that I spend more than five hours a day on my phone."],
        ["Хотя большая часть этого времени казалась безобидной, я постоянно чувствовал усталость.", "Although most of that time seemed harmless, I felt tired all the time."],
        ["Поэтому я решил на месяц удалить социальные сети.", "So I decided to delete social media for a month."],
        ["Первая неделя далась нелегко: рука сама тянулась к телефону.", "The first week wasn't easy: my hand kept reaching for my phone."],
        ["Однако к концу месяца я прочитал три книги и стал лучше спать.", "However, by the end of the month I had read three books and started sleeping better."],
        ["Оглядываясь назад, я жалею лишь о том, что не сделал этого раньше.", "In hindsight, my only regret is that I didn't do it sooner."]
      ],
      gloss: [["harmless", "безобидный"], ["kept reaching for", "постоянно тянулась к"], ["by the end of", "к концу"], ["in hindsight", "оглядываясь назад"], ["regret", "сожаление"]],
      q: [
        ["v", "Что значит «harmless»?", ["безобидный", "вредный", "бесполезный"], "harm — вред, -less — без."],
        ["v", "Что значит «in hindsight»?", ["оглядываясь назад", "в будущем", "на всякий случай"], "hind — задний, sight — взгляд."],
        ["p", "Как сказать «рука сама тянулась к телефону»?", ["my hand kept reaching for my phone", "my hand was keep reaching my phone", "my hand kept to reach for my phone"], "keep + -ing — «постоянно делать»."],
        ["p", "Верный перевод: «Хотя это казалось безобидным…»", ["Although it seemed harmless…", "Despite it seemed harmless…", "However it seemed harmless…"], "Перед предложением — although."],
        ["c", "На какой срок автор удалил соцсети?", ["For a month.", "For a week.", "Forever."], "…delete social media for a month."],
        ["c", "О чём автор жалеет?", ["That he didn't do it sooner.", "That he deleted social media.", "That he read too little."], "…my only regret is that I didn't do it sooner."]
      ]
    },
    {
      id: "r-b2-2", level: "b2", icon: "🏙️", title: "Город будущего",
      text: [
        ["Многие эксперты считают, что к 2050 году две трети людей будут жить в городах.", "Many experts believe that by 2050 two thirds of people will be living in cities."],
        ["Это создаст серьёзные проблемы: пробки, загрязнение воздуха и нехватку жилья.", "This will create serious problems: traffic jams, air pollution and a shortage of housing."],
        ["Некоторые города уже ищут новые подходы.", "Some cities are already looking for new approaches."],
        ["Например, в Копенгагене на работу больше ездят на велосипеде, чем на машине.", "For example, in Copenhagen more people cycle to work than drive."],
        ["Несмотря на высокую стоимость, такие проекты приносят значительную пользу.", "Despite the high cost, such projects bring significant benefits."],
        ["Вопрос в том, смогут ли другие города последовать этому примеру.", "The question is whether other cities will be able to follow this example."]
      ],
      gloss: [["two thirds", "две трети"], ["traffic jams", "пробки"], ["shortage", "нехватка"], ["cycle", "ездить на велосипеде"], ["follow this example", "последовать этому примеру"]],
      q: [
        ["v", "Что значит «shortage»?", ["нехватка", "избыток", "сокращение рабочего дня"], "a shortage of housing — нехватка жилья."],
        ["v", "Как по-английски «пробки» (на дорогах)?", ["traffic jams", "traffic stops", "road jams"], "traffic jam — пробка."],
        ["p", "Как сказать «Несмотря на высокую стоимость…»?", ["Despite the high cost…", "Despite of the high cost…", "Although the high cost…"], "despite + существительное, без of."],
        ["p", "Верный перевод: «будут жить в городах» (процесс в будущем).", ["will be living in cities", "will have lived in cities", "are living in cities"], "Процесс в момент будущего — will be + -ing."],
        ["c", "Что, по мнению экспертов, будет к 2050 году?", ["Two thirds of people will live in cities.", "Cities will become smaller.", "Nobody will drive cars."], "…two thirds of people will be living in cities."],
        ["c", "Какой пример приводит автор?", ["Copenhagen, where many people cycle.", "London's new metro.", "Tokyo's tall buildings."], "…in Copenhagen more people cycle to work than drive."]
      ]
    }
  ];

  /* Тест уровня: по три вопроса на уровень. [уровень, вопрос, [верный, …неверные]] */
  window.PLACEMENT = [
    ["a1", "She ___ a doctor.", ["is", "are", "am"]],
    ["a1", "I ___ two brothers.", ["have", "has", "am"]],
    ["a1", "___ you like tea?", ["Do", "Does", "Are"]],
    ["a2", "We ___ to Spain last year.", ["went", "go", "have gone"]],
    ["a2", "This car is ___ than mine.", ["faster", "more fast", "fastest"]],
    ["a2", "I have never ___ sushi.", ["tried", "try", "trying"]],
    ["b1", "If I ___ rich, I would travel the world.", ["were", "am", "will be"]],
    ["b1", "The house ___ in 1900.", ["was built", "built", "has built"]],
    ["b1", "I've lived here ___ 2015.", ["since", "for", "from"]],
    ["b2", "If I had known, I ___ you.", ["would have told", "would tell", "had told"]],
    ["b2", "He ___ have forgotten — he's never late.", ["must", "can't", "should"]],
    ["b2", "___ the rain, we went out.", ["Despite", "Although", "However"]]
  ];
})();
