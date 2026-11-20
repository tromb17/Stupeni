/* Уровень A1 — начинающий. Формат урока — см. README.md (раздел «Как добавить урок»). */
(function () {
  const C = (window.COURSE = window.COURSE || {});
  const lv = (C.a1 = []);
  const L = (o) => lv.push(o);

  L({
    id: "a1-1", icon: "👋", title: "Знакомство", topic: "Глагол to be: am, is, are",
    words: [
      ["hello", "привет; здравствуйте", "Hello! My name is Anna.", "Привет! Меня зовут Анна.", "Говорите «Hello!» каждый раз, когда открываете урок, — так слово закрепится само."],
      ["name", "имя", "What is your name?", "Как тебя зовут?", "Похоже на «наименование» — то, как что-то называют."],
      ["friend", "друг, подруга", "Tom is my friend.", "Том — мой друг.", "Внутри friend спрятано end — «конец»: друг рядом до конца."],
      ["student", "студент, ученик", "I am a student.", "Я студент.", "Почти как по-русски — «студент»."],
      ["teacher", "учитель", "She is a teacher.", "Она учитель.", "teach — учить, -er — тот, кто делает: teacher — тот, кто учит."],
      ["country", "страна", "Russia is a big country.", "Россия — большая страна.", "Кантри-музыка — музыка «из страны», из глубинки."],
      ["city", "город", "Moscow is a big city.", "Москва — большой город.", "Вспомните «Москва-Сити» — деловой район города."],
      ["nice to meet you", "приятно познакомиться", "Nice to meet you, Anna!", "Приятно познакомиться, Анна!", "Запомните целиком, как одно слово: «найс-ту-мит-ю»."]
    ],
    rule: {
      title: "Глагол to be: am, is, are",
      text: [
        "В английском нельзя сказать «Я студент» без глагола. Нужен глагол <b>to be</b> — «быть, являться».",
        "Он меняется в зависимости от того, о ком говорим:"
      ],
      head: ["Кто", "Форма", "Пример"],
      table: [["I", "am", "I am a student."], ["he / she / it", "is", "She is a teacher."], ["you / we / they", "are", "They are friends."]],
      note: "Вопрос: ставим глагол вперёд — <b>Are you</b> a student? Отрицание: добавляем <b>not</b> — I am not a teacher. В разговоре сокращают: I'm, he's, she's, it's, you're, we're, they're.",
      ex: [
        ["I am from Russia.", "Я из России."],
        ["He is my friend.", "Он мой друг."],
        ["It is a big city.", "Это большой город."],
        ["We are students.", "Мы студенты."],
        ["Are you a teacher?", "Ты учитель?"],
        ["She is not at home.", "Её нет дома."]
      ],
      mist: [
        ["I student.", "I am a student.", "Без глагола нельзя: «Я студент» = I am a student."],
        ["He are my friend.", "He is my friend.", "С he, she, it — только is."],
        ["I is from Russia.", "I am from Russia.", "С I — только am."]
      ]
    },
    drills: [
      ["I ___ a student.", ["am", "is", "are"], "Я студент.", "С I всегда am."],
      ["She ___ a teacher.", ["is", "am", "are"], "Она учитель.", "С she — is."],
      ["We ___ friends.", ["are", "is", "am"], "Мы друзья.", "С we — are."],
      ["___ you from Moscow?", ["Are", "Is", "Am"], "Ты из Москвы?", "В вопросе глагол идёт первым; с you — are."],
      ["It ___ a big city.", ["is", "are", "am"], "Это большой город.", "С it — is."],
      ["They ___ not at home.", ["are", "is", "am"], "Их нет дома.", "С they — are; отрицание — are not."],
      ["My name ___ Anna.", ["is", "are", "am"], "Меня зовут Анна.", "My name — это «оно» (it), поэтому is."],
      ["Tom and Anna ___ students.", ["are", "is", "am"], "Том и Анна — студенты.", "Двое = they, поэтому are."]
    ],
    order: [["My name is Anna.", "Меня зовут Анна."], ["Are you a student?", "Ты студент?"], ["He is my friend.", "Он мой друг."]],
    dialog: [
      ["Tom", "Hi! I'm Tom. What's your name?", "Привет! Я Том. Как тебя зовут?"],
      ["Anna", "Hello, Tom. I'm Anna.", "Привет, Том. Я Анна."],
      ["Tom", "Nice to meet you, Anna. Are you a student?", "Приятно познакомиться, Анна. Ты студентка?"],
      ["Anna", "Yes, I am. And you?", "Да. А ты?"],
      ["Tom", "I'm a teacher. I'm from London.", "Я учитель. Я из Лондона."],
      ["Anna", "London is a beautiful city!", "Лондон — красивый город!"]
    ]
  });

  L({
    id: "a1-2", icon: "👨‍👩‍👧", title: "Моя семья", topic: "have / has — «у меня есть»",
    words: [
      ["family", "семья", "I have a big family.", "У меня большая семья.", "Русское «фамилия» — от того же слова: family."],
      ["mother", "мама, мать", "My mother is a doctor.", "Моя мама — врач.", "Mother и «мать» звучат похоже: м…т."],
      ["father", "папа, отец", "My father has a car.", "У моего папы есть машина.", "Как mother, только начинается с f: mother — father."],
      ["sister", "сестра", "I have one sister.", "У меня одна сестра.", "Sister и «сестра» — почти одно слово: с-ст-р."],
      ["brother", "брат", "Her brother is ten.", "Её брату десять лет.", "«Бро» — так друзья называют друг друга."],
      ["son", "сын", "They have a son.", "У них есть сын.", "Son звучит как sun (солнце): сын — солнышко."],
      ["daughter", "дочь", "Our daughter is a student.", "Наша дочь — студентка.", "Читается «до́тэ» — буквы gh не произносятся."],
      ["children", "дети", "They have two children.", "У них двое детей.", "Один child — много children. Запомните парой."]
    ],
    rule: {
      title: "have / has — «у меня есть»",
      text: [
        "Русское «у меня есть» по-английски звучит как «я имею»: <b>I have</b>.",
        "С he, she, it глагол меняется на <b>has</b>."
      ],
      head: ["Кто", "Форма", "Пример"],
      table: [["I / you / we / they", "have", "I have a sister."], ["he / she / it", "has", "She has a son."]],
      note: "Вопрос — с do / does: <b>Do</b> you have a brother? <b>Does</b> she have children? После does — снова have, не has. «Нет» — don't have / doesn't have.",
      ex: [
        ["I have two brothers.", "У меня два брата."],
        ["She has a big family.", "У неё большая семья."],
        ["We have a cat.", "У нас есть кошка."],
        ["My father has a car.", "У моего папы есть машина."],
        ["Do you have children?", "У вас есть дети?"],
        ["He doesn't have a sister.", "У него нет сестры."]
      ],
      mist: [
        ["She have a son.", "She has a son.", "С he, she, it — has."],
        ["Does he has a car?", "Does he have a car?", "После does — всегда have."],
        ["I has a brother.", "I have a brother.", "С I — только have."]
      ]
    },
    drills: [
      ["I ___ a sister.", ["have", "has"], "У меня есть сестра.", "С I — have."],
      ["She ___ two children.", ["has", "have"], "У неё двое детей.", "С she — has."],
      ["We ___ a big family.", ["have", "has"], "У нас большая семья.", "С we — have."],
      ["My brother ___ a dog.", ["has", "have"], "У моего брата есть собака.", "My brother = he, поэтому has."],
      ["___ you have a car?", ["Do", "Does", "Are"], "У тебя есть машина?", "Вопрос с you — Do."],
      ["Does he ___ a son?", ["have", "has", "having"], "У него есть сын?", "После does — have."],
      ["They ___ three daughters.", ["have", "has"], "У них три дочери.", "С they — have."],
      ["Our mother ___ a new phone.", ["has", "have"], "У нашей мамы новый телефон.", "Our mother = she, поэтому has."]
    ],
    order: [["I have a big family.", "У меня большая семья."], ["She has two children.", "У неё двое детей."], ["Do you have a brother?", "У тебя есть брат?"]],
    dialog: [
      ["Kate", "Do you have a big family?", "У тебя большая семья?"],
      ["Max", "Yes, I do. I have two sisters and a brother.", "Да. У меня две сестры и брат."],
      ["Kate", "Wow! Do your sisters have children?", "Ого! А у твоих сестёр есть дети?"],
      ["Max", "My older sister has a son. He is three.", "У старшей сестры есть сын. Ему три года."],
      ["Kate", "I have only one brother.", "А у меня только один брат."]
    ]
  });

  L({
    id: "a1-3", icon: "☀️", title: "Мой день", topic: "Present Simple: I work, she works",
    words: [
      ["wake up", "просыпаться", "I wake up at seven.", "Я просыпаюсь в семь.", "wake — будить, up — вверх: проснулся и поднялся."],
      ["breakfast", "завтрак", "I have breakfast at eight.", "Я завтракаю в восемь.", "break — прервать, fast — пост: завтрак прерывает ночной «пост»."],
      ["work", "работать; работа", "She works in an office.", "Она работает в офисе.", "Воркаут (workout) — тоже работа, только над телом."],
      ["go", "идти, ехать", "We go to school by bus.", "Мы ездим в школу на автобусе.", "«Го!» — так говорят, когда пора идти."],
      ["home", "дом; домой", "He goes home at six.", "Он идёт домой в шесть.", "Кнопка Home возвращает «домой», на главный экран."],
      ["usually", "обычно", "I usually drink tea.", "Я обычно пью чай.", "Похоже на «юзать» — то, чем пользуемся обычно."],
      ["always", "всегда", "She always smiles.", "Она всегда улыбается.", "all + ways — «все пути»: при любом раскладе."],
      ["never", "никогда", "He never eats meat.", "Он никогда не ест мясо.", "Never — «не-вер»: «не верю, что такое бывает»."]
    ],
    rule: {
      title: "Present Simple — то, что бывает обычно",
      text: [
        "Present Simple — для привычек и того, что происходит регулярно: каждый день, обычно, всегда.",
        "Глагол берём как в словаре. Но с he, she, it добавляем <b>-s</b>: I work → she work<b>s</b>."
      ],
      head: ["Кто", "Форма", "Пример"],
      table: [["I / you / we / they", "work", "I work every day."], ["he / she / it", "works", "He works every day."]],
      note: "Особые случаи: go → <b>goes</b>, do → <b>does</b>, have → <b>has</b>, watch → <b>watches</b>. Слова always, usually, never ставим <b>перед</b> глаголом: I always get up early.",
      ex: [
        ["I wake up at seven.", "Я просыпаюсь в семь."],
        ["She works in a bank.", "Она работает в банке."],
        ["We usually have breakfast at home.", "Мы обычно завтракаем дома."],
        ["He goes to work by car.", "Он ездит на работу на машине."],
        ["They never watch TV.", "Они никогда не смотрят телевизор."]
      ],
      mist: [
        ["She work in a bank.", "She works in a bank.", "С he, she, it добавляем -s."],
        ["I go always to work by bus.", "I always go to work by bus.", "always, usually, never — перед глаголом."],
        ["He gos home.", "He goes home.", "go, do, watch получают -es: goes, does, watches."]
      ]
    },
    drills: [
      ["I ___ up at seven.", ["wake", "wakes"], "Я просыпаюсь в семь.", "С I — без -s."],
      ["She ___ in an office.", ["works", "work"], "Она работает в офисе.", "С she — добавляем -s."],
      ["He ___ home at six.", ["goes", "go", "gos"], "Он идёт домой в шесть.", "go с he — goes."],
      ["We ___ breakfast at eight.", ["have", "has"], "Мы завтракаем в восемь.", "С we — have."],
      ["My sister ___ TV in the evening.", ["watches", "watch", "watchs"], "Моя сестра смотрит телевизор вечером.", "watch с she — watches."],
      ["I ___ coffee in the morning.", ["usually drink", "drink usually"], "Я обычно пью кофе утром.", "usually — перед глаголом."],
      ["Tom ___ meat.", ["never eats", "eats never", "never eat"], "Том никогда не ест мясо.", "never — перед глаголом, а с he — eats."],
      ["The shop ___ at nine.", ["opens", "open"], "Магазин открывается в девять.", "The shop = it, поэтому -s."]
    ],
    order: [["I wake up at seven.", "Я просыпаюсь в семь."], ["She always drinks tea.", "Она всегда пьёт чай."], ["He goes home at six.", "Он идёт домой в шесть."]],
    dialog: [
      ["Lily", "What time do you wake up?", "Во сколько ты просыпаешься?"],
      ["Sam", "I usually wake up at seven.", "Обычно я просыпаюсь в семь."],
      ["Lily", "And what do you do then?", "А что делаешь потом?"],
      ["Sam", "I have breakfast and go to work.", "Завтракаю и иду на работу."],
      ["Lily", "My brother works at home. He never goes to an office.", "Мой брат работает из дома. Он никогда не ходит в офис."]
    ]
  });

  L({
    id: "a1-4", icon: "❓", title: "Вопросы и «не»", topic: "do / does в Present Simple",
    words: [
      ["like", "нравиться, любить", "I like music.", "Я люблю музыку.", "Лайк в соцсетях — like: «мне нравится»."],
      ["want", "хотеть", "I want a coffee.", "Я хочу кофе.", "Ребёнок тянется к игрушке: «вон-т(о) хочу!»"],
      ["live", "жить", "Where do you live?", "Где ты живёшь?", "Live-трансляция — то, что происходит вживую."],
      ["speak", "говорить", "Do you speak English?", "Ты говоришь по-английски?", "Спикер (speaker) — тот, кто говорит."],
      ["read", "читать", "She reads every evening.", "Она читает каждый вечер.", "Ридер — электронная книжка для чтения."],
      ["watch", "смотреть", "Do you watch films?", "Ты смотришь фильмы?", "Watch — ещё и наручные часы: на них смотрят."],
      ["coffee", "кофе", "He doesn't drink coffee.", "Он не пьёт кофе.", "Звучит почти как по-русски: «ко́фи»."],
      ["weekend", "выходные", "What do you do at the weekend?", "Что ты делаешь на выходных?", "week — неделя, end — конец: конец недели."]
    ],
    rule: {
      title: "Вопросы и «не» в Present Simple: do / does",
      text: [
        "Чтобы задать вопрос или сказать «не», нужен помощник — <b>do</b> (с he, she, it — <b>does</b>).",
        "Важно: когда появляется does, у основного глагола -s пропадает: She works → Does she work? She doesn't work."
      ],
      head: ["", "I / you / we / they", "he / she / it"],
      table: [["Вопрос", "Do you like tea?", "Does he like tea?"], ["Отрицание", "I don't like tea.", "He doesn't like tea."], ["Короткий ответ", "Yes, I do.", "No, he doesn't."]],
      note: "don't = do not, doesn't = does not. Вопросы со словами: <b>Where</b> do you live? <b>What</b> does she want?",
      ex: [
        ["Do you speak English?", "Ты говоришь по-английски?"],
        ["Where does she live?", "Где она живёт?"],
        ["I don't like coffee.", "Я не люблю кофе."],
        ["He doesn't watch TV.", "Он не смотрит телевизор."],
        ["What do you want?", "Что ты хочешь?"]
      ],
      mist: [
        ["Do she like music?", "Does she like music?", "С he, she, it — does."],
        ["He doesn't works.", "He doesn't work.", "После does / doesn't глагол без -s."],
        ["You like tea?", "Do you like tea?", "Правильный вопрос начинается с Do."]
      ]
    },
    drills: [
      ["___ you like music?", ["Do", "Does"], "Ты любишь музыку?", "С you — Do."],
      ["___ she speak English?", ["Does", "Do"], "Она говорит по-английски?", "С she — Does."],
      ["I ___ like coffee.", ["don't", "doesn't"], "Я не люблю кофе.", "С I — don't."],
      ["He doesn't ___ TV.", ["watch", "watches"], "Он не смотрит телевизор.", "После doesn't — без -s."],
      ["Where ___ they live?", ["do", "does"], "Где они живут?", "С they — do."],
      ["My friend ___ want to go.", ["doesn't", "don't"], "Мой друг не хочет идти.", "My friend = he, поэтому doesn't."],
      ["Does your mother ___ books?", ["read", "reads"], "Твоя мама читает книги?", "После does — без -s."],
      ["Do you live here? — Yes, I ___.", ["do", "am", "live"], "Ты живёшь здесь? — Да.", "Короткий ответ повторяет помощника: Yes, I do."]
    ],
    order: [["Do you speak English?", "Ты говоришь по-английски?"], ["She doesn't like coffee.", "Она не любит кофе."], ["Where do you live?", "Где ты живёшь?"]],
    dialog: [
      ["Ben", "Do you like coffee?", "Ты любишь кофе?"],
      ["Mia", "No, I don't. I like tea.", "Нет. Я люблю чай."],
      ["Ben", "What do you do at the weekend?", "Что ты делаешь на выходных?"],
      ["Mia", "I read books and watch films.", "Читаю книги и смотрю фильмы."],
      ["Ben", "Does your sister read too?", "Твоя сестра тоже читает?"],
      ["Mia", "No, she doesn't. She plays football.", "Нет. Она играет в футбол."]
    ]
  });

  L({
    id: "a1-5", icon: "🏠", title: "Дом и магазин", topic: "There is / There are",
    words: [
      ["kitchen", "кухня", "There is a table in the kitchen.", "На кухне есть стол.", "«Китчен»: на кухне всегда что-то кипит — к-ч."],
      ["table", "стол", "The keys are on the table.", "Ключи на столе.", "Таблица (table) — ровные строки, как у стола."],
      ["fridge", "холодильник", "There is milk in the fridge.", "В холодильнике есть молоко.", "Fridge — от freeze, «замораживать»."],
      ["bread", "хлеб", "Is there any bread?", "Хлеб есть?", "Не «бред», а «брэд» — хлеб, который едят каждый день."],
      ["apple", "яблоко", "There are two apples on the table.", "На столе два яблока.", "Логотип Apple — яблоко."],
      ["milk", "молоко", "I drink milk every morning.", "Я пью молоко каждое утро.", "Милкшейк — молочный коктейль."],
      ["shop", "магазин", "There is a shop near my house.", "Рядом с моим домом есть магазин.", "Шопинг — поход по магазинам."],
      ["near", "рядом, около", "I live near the park.", "Я живу рядом с парком.", "Короткое слово — и расстояние короткое: «ни́а» — рядом."]
    ],
    rule: {
      title: "There is / There are — «есть, находится»",
      text: [
        "Когда говорим, что где-то что-то есть, начинаем с <b>there is</b> (одно) или <b>there are</b> (много).",
        "По-русски место обычно в начале («На столе есть яблоко»), а в английском — в конце: There is an apple <b>on the table</b>."
      ],
      head: ["Когда", "Как сказать"],
      table: [["Одна вещь", "There is a shop near my house."], ["Много вещей", "There are two shops near my house."], ["Вопрос", "Is there a shop? / Are there any shops?"], ["Отрицание", "There isn't a shop. / There aren't any shops."]],
      note: "В разговоре there's = there is. В вопросах и отрицаниях часто добавляют <b>any</b>: Are there any apples? There isn't any milk.",
      ex: [
        ["There is a fridge in the kitchen.", "На кухне есть холодильник."],
        ["There are three apples on the table.", "На столе три яблока."],
        ["Is there a shop near here?", "Здесь рядом есть магазин?"],
        ["There isn't any milk.", "Молока нет."],
        ["Are there any children in the park?", "В парке есть дети?"]
      ],
      mist: [
        ["There is two apples.", "There are two apples.", "Если вещей много — are."],
        ["On the table is an apple.", "There is an apple on the table.", "Начинаем с there is, место — в конце."],
        ["In the fridge has milk.", "There is milk in the fridge.", "«Есть» в значении «находится» — there is, а не has."]
      ]
    },
    drills: [
      ["There ___ a shop near my house.", ["is", "are"], "Рядом с моим домом есть магазин.", "Один магазин — is."],
      ["There ___ two apples on the table.", ["are", "is"], "На столе два яблока.", "Два яблока — много, are."],
      ["___ there any milk in the fridge?", ["Is", "Are"], "В холодильнике есть молоко?", "Молоко не посчитать по штукам — is."],
      ["There ___ any bread.", ["isn't", "aren't"], "Хлеба нет.", "bread — одно целое, isn't."],
      ["___ there any shops here?", ["Are", "Is"], "Здесь есть магазины?", "shops — много, Are."],
      ["There ___ a table in the kitchen.", ["is", "are"], "На кухне есть стол.", "Один стол — is."],
      ["There ___ three children in the room.", ["are", "is"], "В комнате трое детей.", "children — много, are."],
      ["Is there a park near here? — Yes, there ___.", ["is", "are", "has"], "Здесь рядом есть парк? — Да.", "Короткий ответ: Yes, there is."]
    ],
    order: [["There is a shop near my house.", "Рядом с моим домом есть магазин."], ["Is there any milk?", "Молоко есть?"], ["There are two apples on the table.", "На столе два яблока."]],
    dialog: [
      ["Mum", "Is there any milk in the fridge?", "В холодильнике есть молоко?"],
      ["Jack", "No, there isn't. And there isn't any bread.", "Нет. И хлеба тоже нет."],
      ["Mum", "Is there a shop near here?", "Тут рядом есть магазин?"],
      ["Jack", "Yes, there is. It's near the park.", "Да. Он рядом с парком."],
      ["Mum", "Great. Buy milk, bread and some apples, please.", "Отлично. Купи, пожалуйста, молоко, хлеб и яблок."]
    ]
  });

  L({
    id: "a1-6", icon: "⏳", title: "Прямо сейчас", topic: "Present Continuous: I am working",
    words: [
      ["now", "сейчас", "I am busy now.", "Я сейчас занят.", "«Нау» — как «ну, давай сейчас!»"],
      ["wait", "ждать", "I am waiting for the bus.", "Я жду автобус.", "Ждём кого-то — wait for: wait for me — подожди меня."],
      ["cook", "готовить (еду); повар", "Dad is cooking dinner.", "Папа готовит ужин.", "Кок на корабле — повар (cook)."],
      ["phone", "телефон; звонить", "She is talking on the phone.", "Она разговаривает по телефону.", "Как «телефон», только без «теле»."],
      ["rain", "дождь; идёт дождь", "It is raining now.", "Сейчас идёт дождь.", "Рейн — река в Германии, а rain — вода с неба."],
      ["look at", "смотреть на", "Look at the sky!", "Посмотри на небо!", "«Лук!» — «глянь!»; перед предметом — at."],
      ["listen to", "слушать", "I am listening to music.", "Я слушаю музыку.", "Лиса навострила уши — «лисен». После listen — to."],
      ["busy", "занятой", "Sorry, I'm busy.", "Извините, я занят.", "Читается «би́зи» — от того же корня, что и «бизнес»."]
    ],
    rule: {
      title: "Present Continuous — то, что происходит сейчас",
      text: [
        "Когда действие идёт прямо сейчас, говорим: <b>am / is / are + глагол с -ing</b>.",
        "Сравните: I read books (вообще, привычка) — I am reading a book (прямо сейчас)."
      ],
      head: ["Кто", "Форма", "Пример"],
      table: [["I", "am + -ing", "I am cooking."], ["he / she / it", "is + -ing", "She is waiting."], ["you / we / they", "are + -ing", "They are listening."]],
      note: "Вопрос: <b>Are you</b> working? Отрицание: I'm <b>not</b> working. Глаголы like, want, know в -ing обычно не ставят: I want tea (не I am wanting).",
      ex: [
        ["I'm waiting for you.", "Я тебя жду."],
        ["It's raining now.", "Сейчас идёт дождь."],
        ["What are you doing?", "Что ты делаешь?"],
        ["She isn't listening to me.", "Она меня не слушает."],
        ["They are cooking dinner.", "Они готовят ужин."]
      ],
      mist: [
        ["I cooking now.", "I am cooking now.", "Перед -ing нужен am / is / are."],
        ["She is cook dinner.", "She is cooking dinner.", "После is — глагол с -ing."],
        ["I am wanting coffee.", "I want coffee.", "want, like, know обычно не ставят в -ing."]
      ]
    },
    drills: [
      ["I ___ waiting for the bus.", ["am", "is", "are"], "Я жду автобус.", "С I — am."],
      ["It ___ raining.", ["is", "are", "am"], "Идёт дождь.", "С it — is."],
      ["They are ___ to music.", ["listening", "listen", "listens"], "Они слушают музыку.", "После are — глагол с -ing."],
      ["What ___ you doing?", ["are", "do", "is"], "Что ты делаешь?", "Прямо сейчас — are you doing."],
      ["She ___ cooking. She is reading.", ["isn't", "doesn't", "aren't"], "Она не готовит, она читает.", "Отрицание здесь — is not (isn't)."],
      ["Look! The children ___ in the park.", ["are playing", "play", "plays"], "Смотри! Дети играют в парке.", "Look! — значит, прямо сейчас."],
      ["I ___ a coffee, please.", ["want", "am wanting"], "Я хочу кофе.", "want не ставят в -ing."],
      ["He usually ___ tea, but now he is drinking coffee.", ["drinks", "is drinking"], "Обычно он пьёт чай, но сейчас пьёт кофе.", "usually — привычка, Present Simple."]
    ],
    order: [["I am waiting for the bus.", "Я жду автобус."], ["What are you doing?", "Что ты делаешь?"], ["It is raining now.", "Сейчас идёт дождь."]],
    dialog: [
      ["Ann", "Hi! What are you doing?", "Привет! Что делаешь?"],
      ["Bob", "I'm cooking dinner.", "Готовлю ужин."],
      ["Ann", "Are you busy? I'm waiting near your house.", "Ты занят? Я жду возле твоего дома."],
      ["Bob", "Come in! It's raining.", "Заходи! Идёт дождь."],
      ["Ann", "Thanks! What are you cooking?", "Спасибо! А что готовишь?"],
      ["Bob", "Pasta. Look at the kitchen — it's a mess!", "Пасту. Посмотри на кухню — тут бардак!"]
    ]
  });
})();
