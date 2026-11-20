/* Уровень B2 — выше среднего. */
(function () {
  const C = (window.COURSE = window.COURSE || {});
  const lv = (C.b2 = []);
  const L = (o) => lv.push(o);

  L({
    id: "b2-1", icon: "🕰️", title: "Если бы тогда…", topic: "Третий тип условий и I wish",
    words: [
      ["regret", "сожалеть; сожаление", "I regret not studying harder.", "Жаль, что я не учился усерднее.", "regret + -ing: regret saying, regret not going."],
      ["consequence", "последствие", "Every decision has consequences.", "У каждого решения есть последствия.", "con- «вместе» + sequ- «следовать»: то, что следует за решением."],
      ["blame", "винить", "Don't blame yourself.", "Не вини себя.", "blame someone for something — винить кого-то в чём-то."],
      ["opportunity", "возможность", "It was a great opportunity.", "Это была отличная возможность.", "Внутри слова — port: «порт открыт, заходи»."],
      ["in hindsight", "оглядываясь назад", "In hindsight, it was a mistake.", "Оглядываясь назад, это была ошибка.", "hind — задний, sight — взгляд: «взгляд назад»."],
      ["realise", "осознавать, понимать", "I didn't realise it was so late.", "Я не заметил, что уже так поздно.", "Не «реализовать»! realise — «осознать». В американском — realize."],
      ["outcome", "результат, исход", "The outcome was better than expected.", "Результат оказался лучше ожидаемого.", "out + come: то, что «вышло» в итоге."],
      ["turn down", "отклонять, отказываться", "She turned down the offer.", "Она отклонила предложение.", "turn down — убавить звук; убавить до нуля — отказать."]
    ],
    rule: {
      title: "Третий тип условий и I wish",
      text: [
        "<b>Третий тип</b> — о прошлом, которое уже не изменить: <b>If + had + 3-я форма, would have + 3-я форма</b>. If I had left earlier, I wouldn't have missed the train.",
        "<b>I wish</b> — «жаль, что / хотел бы»: о настоящем — <b>I wish + прошедшее</b> (I wish I knew), о прошлом — <b>I wish + had + 3-я форма</b> (I wish I had listened)."
      ],
      head: ["Что", "Английский", "По-русски"],
      table: [["Прошлое, нереальное", "If I had known, I would have helped.", "Если бы я знал, я бы помог."], ["Жаль сейчас", "I wish I had more time.", "Жаль, что у меня мало времени."], ["Жаль о прошлом", "I wish I hadn't said that.", "Зря я это сказал."]],
      note: "<b>If only</b> — более эмоциональное I wish: If only I had listened to you! В разговоре would have → would've, звучит «вудэв».",
      ex: [
        ["If I had known, I would have called you.", "Если бы я знал, я бы тебе позвонил."],
        ["She wouldn't have failed if she had studied.", "Она бы не провалилась, если бы занималась."],
        ["I wish I spoke French.", "Жаль, что я не говорю по-французски."],
        ["I wish I hadn't turned down that job.", "Зря я отказался от той работы."],
        ["If only we had left earlier!", "Если бы только мы вышли пораньше!"]
      ],
      mist: [
        ["If I would have known, I would have come.", "If I had known, I would have come.", "После if — had + 3-я форма, не would."],
        ["I wish I have a car.", "I wish I had a car.", "После I wish о настоящем — прошедшее время."],
        ["If I had studied, I would pass.", "If I had studied, I would have passed.", "Результат в прошлом — would have + 3-я форма."]
      ]
    },
    drills: [
      ["If I ___ earlier, I wouldn't have missed the train.", ["had left", "left", "would have left"], "Если бы я вышел раньше, я бы не опоздал на поезд.", "После if — had + 3-я форма."],
      ["If she had asked, I ___ her.", ["would have helped", "would help", "had helped"], "Если бы она попросила, я бы ей помог.", "Результат в прошлом — would have + 3-я форма."],
      ["I wish I ___ more free time.", ["had", "have", "would have"], "Жаль, что у меня мало свободного времени.", "I wish о настоящем — прошедшее время."],
      ["I wish I ___ that. It was rude.", ["hadn't said", "didn't say", "wouldn't say"], "Зря я это сказал. Это было грубо.", "Сожаление о прошлом — had + 3-я форма."],
      ["___ hindsight, it was the right decision.", ["In", "On", "With"], "Оглядываясь назад, это было верное решение.", "Устойчивое выражение: in hindsight."],
      ["Don't ___ yourself. It wasn't your fault.", ["blame", "regret", "realise"], "Не вини себя. Это была не твоя вина.", "«Винить» — blame."],
      ["He turned ___ the offer.", ["down", "off", "up"], "Он отклонил предложение.", "turn down — отклонить."],
      ["I regret ___ to university.", ["not going", "not to go", "don't go"], "Жалею, что не пошёл в университет.", "regret + -ing, «не» — перед -ing."]
    ],
    order: [["If I had known, I would have helped.", "Если бы я знал, я бы помог."], ["I wish I had more time.", "Жаль, что у меня мало времени."], ["She turned down the offer.", "Она отклонила предложение."]],
    dialog: [
      ["Lena", "I heard you turned down the job in London.", "Я слышала, ты отказался от работы в Лондоне."],
      ["Chris", "Yes. Sometimes I wish I hadn't.", "Да. Иногда жалею."],
      ["Lena", "Why did you do it?", "Почему ты так сделал?"],
      ["Chris", "My mum was ill. If I had left, I would have felt guilty.", "Мама болела. Если бы я уехал, чувствовал бы вину."],
      ["Lena", "Then it was the right decision. Don't blame yourself.", "Тогда это было правильное решение. Не вини себя."],
      ["Chris", "You're right. In hindsight, the outcome wasn't so bad.", "Ты права. Оглядываясь назад, всё вышло не так уж плохо."]
    ]
  });

  L({
    id: "b2-2", icon: "🔍", title: "Наверное, так и было", topic: "must, might, can't — догадки",
    words: [
      ["evidence", "доказательства, улики", "There is no evidence.", "Доказательств нет.", "evident — очевидный. Неисчисляемое: some evidence."],
      ["obviously", "очевидно", "Obviously, he was lying.", "Очевидно, он врал.", "Обвиус — «обвёл»: видно всем."],
      ["apparently", "судя по всему, говорят", "Apparently, the meeting is cancelled.", "Похоже, встречу отменили.", "appear — «казаться»: «как кажется»."],
      ["assume", "предполагать, полагать", "I assume you're tired.", "Полагаю, ты устал.", "«А сам думаю» — assume."],
      ["clue", "подсказка, улика", "The police found a clue.", "Полиция нашла улику.", "«Ключ» к разгадке; I have no clue — понятия не имею."],
      ["rumour", "слух", "There's a rumour that he's leaving.", "Ходит слух, что он уходит.", "В американском — rumor."],
      ["suspect", "подозревать; подозреваемый", "I suspect he knows the truth.", "Подозреваю, он знает правду.", "Глагол: су-СПЕКТ; существительное: СА-спект."],
      ["conclude", "делать вывод", "We concluded that it was a mistake.", "Мы пришли к выводу, что это ошибка.", "Conclusion — вывод, заключение."]
    ],
    rule: {
      title: "must, might, can't — догадки",
      text: [
        "Модальными глаголами выражают уверенность: <b>must</b> — «наверняка» (90%), <b>might / may / could</b> — «возможно» (50%), <b>can't</b> — «не может быть» (почти 0%).",
        "О прошлом добавляем <b>have + 3-я форма</b>: She must have forgotten. He can't have seen us."
      ],
      head: ["Уверенность", "Форма", "Пример"],
      table: [["Почти уверен, что да", "must (have done)", "He must be at home. / He must have left."], ["Возможно", "might / may / could (have done)", "She might be busy. / She might have missed the bus."], ["Почти уверен, что нет", "can't / couldn't (have done)", "It can't be true. / He can't have done it."]],
      note: "Противоположность must в значении догадки — <b>can't</b>, а не mustn't: It can't be him (это не может быть он).",
      ex: [
        ["You must be tired after the flight.", "Ты, наверное, устал после перелёта."],
        ["She isn't answering. She might be asleep.", "Она не отвечает. Может, спит."],
        ["That can't be true!", "Не может быть!"],
        ["He must have forgotten about the meeting.", "Он, должно быть, забыл о встрече."],
        ["They can't have seen us.", "Они не могли нас видеть."]
      ],
      mist: [
        ["He mustn't be at home; the lights are off.", "He can't be at home; the lights are off.", "Догадка «не может быть» — can't."],
        ["She must forgot.", "She must have forgotten.", "О прошлом — must have + 3-я форма."],
        ["It might rains.", "It might rain.", "После might — глагол без -s."]
      ]
    },
    drills: [
      ["The lights are off. They ___ be at home.", ["can't", "mustn't", "might not to"], "Свет выключен. Их не может быть дома.", "«Не может быть» — can't."],
      ["You've worked all day. You ___ be exhausted.", ["must", "can't", "should to"], "Ты работал весь день. Ты, наверное, без сил.", "Почти уверены — must."],
      ["She isn't answering. She ___ be in a meeting.", ["might", "must to", "can't to"], "Она не отвечает. Может, она на совещании.", "«Возможно» — might."],
      ["He's late. He must ___ the bus.", ["have missed", "missed", "has missed"], "Он опаздывает. Должно быть, опоздал на автобус.", "О прошлом — must have + 3-я форма."],
      ["That ___ have been Anna — she's in Paris now.", ["can't", "must", "might to"], "Это не могла быть Анна — она сейчас в Париже.", "Невозможно — can't have."],
      ["There's no ___ that he did it.", ["evidence", "evidences", "an evidence"], "Нет доказательств, что это сделал он.", "evidence — неисчисляемое."],
      ["___, the meeting has been cancelled.", ["Apparently", "Apparent", "Appear"], "Судя по всему, встречу отменили.", "Наречие в начале — Apparently."],
      ["I ___ you've already heard the news.", ["assume", "clue", "rumour"], "Полагаю, ты уже слышал новости.", "«Полагаю» — I assume."]
    ],
    order: [["You must be tired.", "Ты, наверное, устал."], ["She might have missed the bus.", "Может, она опоздала на автобус."], ["That can't be true.", "Этого не может быть."]],
    dialog: [
      ["Pam", "Where's Steve? He's never late.", "Где Стив? Он никогда не опаздывает."],
      ["Rob", "He might be stuck in traffic.", "Может, застрял в пробке."],
      ["Pam", "He can't be. He lives next door!", "Не может быть. Он живёт по соседству!"],
      ["Rob", "Then he must have overslept.", "Тогда он, наверное, проспал."],
      ["Pam", "Apparently, there's a rumour he's looking for a new job.", "Говорят, ходит слух, что он ищет новую работу."],
      ["Rob", "Well, that might explain it!", "Что ж, это многое объясняет!"]
    ]
  });

  L({
    id: "b2-3", icon: "🔗", title: "Тот, который…", topic: "who, which, that, whose",
    words: [
      ["colleague", "коллега", "A colleague of mine helped me.", "Мне помог один коллега.", "Читается «ко́лиг»."],
      ["purpose", "цель, назначение", "What's the purpose of this meeting?", "Какова цель этой встречи?", "on purpose — нарочно."],
      ["feature", "особенность, функция", "The phone has a new feature.", "У телефона новая функция.", "«Фича» — так говорят программисты."],
      ["device", "устройство", "Turn off all devices.", "Выключите все устройства.", "Девайс — устройство."],
      ["resident", "житель", "Local residents complained about the noise.", "Местные жители пожаловались на шум.", "Резидент — тот, кто живёт где-то постоянно."],
      ["landlord", "хозяин (сдаваемого жилья)", "Our landlord, who lives upstairs, is very kind.", "Наш хозяин, который живёт наверху, очень добрый.", "land — земля, lord — господин."],
      ["generous", "щедрый", "She's the most generous person I know.", "Она самый щедрый человек из всех, кого я знаю.", "«Генерирует» подарки — щедрый."],
      ["whose", "чей; у которого", "That's the man whose car was stolen.", "Это тот человек, у которого угнали машину.", "who's = who is, а whose — «чей». Звучат одинаково!"]
    ],
    rule: {
      title: "who, which, that, whose — «который»",
      text: [
        "<b>who</b> — для людей, <b>which</b> — для вещей и животных, <b>that</b> — для тех и других (в разговоре чаще всего), <b>whose</b> — «чей, у которого».",
        "Если «который» — дополнение, его можно пропустить: The book (that) I bought is great."
      ],
      head: ["Для чего", "Слово", "Пример"],
      table: [["Люди", "who / that", "The woman who lives here is a doctor."], ["Вещи", "which / that", "The phone which I bought is new."], ["Принадлежность", "whose", "The boy whose dog is lost."], ["Пояснение в запятых", "who / which, не that", "My brother, who lives in Kazan, is a pilot."]],
      note: "Часть в запятых — просто дополнительная информация, и that там нельзя. Сравните: My sister who lives in Omsk… (у меня несколько сестёр) — My sister, who lives in Omsk, … (сестра одна).",
      ex: [
        ["The colleague who helped me is from Minsk.", "Коллега, который мне помог, из Минска."],
        ["This is the device that I told you about.", "Это то устройство, о котором я тебе говорил."],
        ["That's the woman whose son plays football.", "Это та женщина, чей сын играет в футбол."],
        ["Our landlord, who lives upstairs, is very generous.", "Наш хозяин, который живёт наверху, очень щедрый."],
        ["The film we watched was boring.", "Фильм, который мы смотрели, был скучным."]
      ],
      mist: [
        ["The man which lives here is a doctor.", "The man who lives here is a doctor.", "Для людей — who (или that), не which."],
        ["My mother, that lives in Omsk, is a teacher.", "My mother, who lives in Omsk, is a teacher.", "В запятых — без that."],
        ["That's the man who his car was stolen.", "That's the man whose car was stolen.", "«У которого / чей» — whose."]
      ]
    },
    drills: [
      ["The woman ___ lives next door is a doctor.", ["who", "which", "whose"], "Женщина, которая живёт по соседству, — врач.", "Для людей — who."],
      ["This is the phone ___ I bought yesterday.", ["that", "who", "whose"], "Это телефон, который я купил вчера.", "Для вещей — that / which."],
      ["That's the boy ___ dog bit me.", ["whose", "who", "which"], "Это мальчик, чья собака меня укусила.", "«Чей» — whose."],
      ["My car, ___ is ten years old, still runs perfectly.", ["which", "that", "who"], "Моей машине десять лет, и она до сих пор отлично ездит.", "В запятых — which, не that."],
      ["Our new colleague, ___ is from Italy, speaks five languages.", ["who", "that", "which"], "Наш новый коллега из Италии говорит на пяти языках.", "Человек, в запятых — who."],
      ["The device ___ you need is on the table.", ["that", "who", "whose"], "Устройство, которое тебе нужно, на столе.", "Для вещей — that."],
      ["He's a very ___ person — he always helps others.", ["generous", "generosity", "generously"], "Он очень щедрый человек — всегда помогает другим.", "Перед person — прилагательное."],
      ["What's the ___ of your visit?", ["purpose", "feature", "resident"], "Какова цель вашего визита?", "«Цель» — purpose."]
    ],
    order: [["The man who lives here is a doctor.", "Мужчина, который здесь живёт, — врач."], ["This is the book that I bought.", "Это книга, которую я купил."], ["That is the woman whose son is a pilot.", "Это женщина, чей сын — пилот."]],
    dialog: [
      ["Sue", "Who's the man who just said hello?", "Кто этот мужчина, который сейчас поздоровался?"],
      ["Dan", "That's my landlord. He's the one whose dog barks all night.", "Это мой хозяин. Тот самый, чья собака лает всю ночь."],
      ["Sue", "Oh! And the neighbour who complained about it lives on your floor?", "Ой! А соседка, которая жаловалась, живёт на твоём этаже?"],
      ["Dan", "Yes. She's a colleague of mine, which makes it awkward.", "Да. Она моя коллега, что всё усложняет."],
      ["Sue", "Awkward indeed!", "Действительно неловко!"]
    ]
  });

  L({
    id: "b2-4", icon: "🧩", title: "Фразовые глаголы", topic: "give up, put off и место дополнения",
    words: [
      ["put off", "откладывать", "Don't put off your homework.", "Не откладывай домашнее задание.", "put — класть, off — в сторону: отложить."],
      ["come up with", "придумать", "She came up with a great idea.", "Ей пришла в голову отличная идея.", "Идея «поднимается» (up) к тебе."],
      ["run out of", "заканчиваться (о запасах)", "We've run out of milk.", "У нас закончилось молоко.", "run out — «выбежать»: молоко «убежало»."],
      ["get over", "оправиться, пережить", "It took him weeks to get over the flu.", "Ему понадобились недели, чтобы оправиться от гриппа.", "«Перебраться через» трудность."],
      ["look into", "изучить, разобраться", "We'll look into the problem.", "Мы разберёмся с проблемой.", "«Заглянуть внутрь»."],
      ["take up", "начать заниматься (хобби)", "I've taken up yoga.", "Я начал заниматься йогой.", "«Взять в руки» новое увлечение."],
      ["give up", "бросить, сдаться", "Never give up!", "Никогда не сдавайся!", "Поднять руки вверх (up) — сдаться."],
      ["figure out", "понять, разобраться", "I can't figure out this app.", "Не могу разобраться в этом приложении.", "figure — цифра: «вычислить» ответ."]
    ],
    rule: {
      title: "Фразовые глаголы и место дополнения",
      text: [
        "Фразовый глагол = глагол + маленькое слово (up, off, out…), и смысл часто новый: give — «давать», give up — «бросить».",
        "У многих дополнение может стоять в середине или в конце: put off the meeting = put the meeting off. Но если это местоимение (it, them, him) — <b>только в середине</b>: put it off."
      ],
      head: ["Дополнение", "Как", "Заметка"],
      table: [["Существительное", "turn off the TV / turn the TV off", "оба варианта"], ["Местоимение", "turn it off", "только так (не turn off it)"], ["Неразделимые", "look into it, get over it, run out of it", "всегда вместе"]],
      note: "Неразделимые нужно запоминать: look after, look into, get over, come across, run out of, come up with. Учите фразовые глаголы сразу с примером.",
      ex: [
        ["Let's put the meeting off until Monday.", "Давай перенесём встречу на понедельник."],
        ["Can you turn it down, please?", "Можешь сделать потише?"],
        ["I've finally figured it out.", "Я наконец разобрался."],
        ["We've run out of coffee.", "У нас кончился кофе."],
        ["She gave up smoking last year.", "Она бросила курить в прошлом году."]
      ],
      mist: [
        ["Turn off it.", "Turn it off.", "Местоимение — в середину."],
        ["I'll look the problem into.", "I'll look into the problem.", "look into не разделяется."],
        ["We've run out milk.", "We've run out of milk.", "run out of — с of."]
      ]
    },
    drills: [
      ["The TV is too loud. Can you turn ___?", ["it down", "down it", "it"], "Телевизор слишком громкий. Сделаешь тише?", "Местоимение — в середину: turn it down."],
      ["We've run ___ sugar.", ["out of", "out", "off"], "У нас кончился сахар.", "run out of + что."],
      ["She came ___ a brilliant idea.", ["up with", "up", "with up"], "Она придумала блестящую идею.", "come up with — придумать."],
      ["Don't give ___! You're almost there.", ["up", "off", "in up"], "Не сдавайся! Ты почти у цели.", "give up — сдаться."],
      ["I'll look ___ the problem tomorrow.", ["into", "after", "up"], "Я разберусь с проблемой завтра.", "look into — разобраться."],
      ["He took ___ tennis last year.", ["up", "off", "over"], "Он начал играть в теннис в прошлом году.", "take up — начать заниматься."],
      ["It took her a long time to get ___ the breakup.", ["over", "out", "through with"], "Ей понадобилось много времени, чтобы пережить расставание.", "get over — пережить."],
      ["I can't figure ___ how this works.", ["out", "up", "in"], "Не могу понять, как это работает.", "figure out — разобраться."]
    ],
    order: [["Can you turn it off?", "Можешь выключить?"], ["We have run out of milk.", "У нас закончилось молоко."], ["She came up with a great idea.", "Она придумала отличную идею."]],
    dialog: [
      ["Max", "I've decided to take up running.", "Я решил начать бегать."],
      ["Liv", "Great! Last time you gave up after a week.", "Здорово! В прошлый раз ты бросил через неделю."],
      ["Max", "I know. I kept putting it off. This time I've come up with a plan.", "Знаю. Я всё откладывал. На этот раз я придумал план."],
      ["Liv", "What plan?", "Какой план?"],
      ["Max", "An app that tracks my runs. I just need to figure it out.", "Приложение, которое отслеживает пробежки. Осталось в нём разобраться."],
      ["Liv", "Let me look into it. I'm good with apps.", "Давай я посмотрю. Я хорошо разбираюсь в приложениях."]
    ]
  });

  L({
    id: "b2-5", icon: "🚀", title: "К тому времени", topic: "Future Continuous и Future Perfect",
    words: [
      ["deadline", "крайний срок", "The deadline is Friday.", "Крайний срок — пятница.", "dead — мёртвый, line — линия: черта, после которой поздно."],
      ["by then", "к тому времени", "By then, I'll have finished.", "К тому времени я закончу.", "by — «к» сроку: by Monday — к понедельнику."],
      ["complete", "завершить; полный", "The project will be completed in May.", "Проект завершат в мае.", "Комплект — полный набор: complete — сделать полностью."],
      ["schedule", "расписание, график", "I have a busy schedule.", "У меня плотный график.", "«Ске́джул» (амер.) или «ше́джул» (брит.)."],
      ["available", "свободный, доступный", "Will you be available tomorrow?", "Ты будешь свободен завтра?", "Есть в наличии — available."],
      ["launch", "запускать; запуск", "We'll be launching the app in June.", "Мы запускаем приложение в июне.", "Не «ланч», а «лонч»: запуск ракеты."],
      ["overtime", "сверхурочно", "I'll be working overtime this week.", "На этой неделе я буду работать сверхурочно.", "over + time: сверх времени."],
      ["retire", "выйти на пенсию", "By 2040, I'll have retired.", "К 2040 году я уже выйду на пенсию.", "re- + tire (уставать): устал — на пенсию."]
    ],
    rule: {
      title: "Future Continuous и Future Perfect",
      text: [
        "<b>will be + -ing</b> — процесс в определённый момент будущего: This time tomorrow I'll be flying to Sochi.",
        "<b>will have + 3-я форма</b> — что будет уже сделано к моменту в будущем: By Friday, I'll have finished the report."
      ],
      head: ["Что", "Форма", "Пример"],
      table: [["Будет в процессе", "will be + -ing", "At 10, I'll be working."], ["Будет уже сделано", "will have + 3-я форма", "By 10, I'll have finished."], ["Вежливый вопрос о планах", "Will you be + -ing?", "Will you be using the car tonight?"]],
      note: "Future Perfect почти всегда с <b>by</b>: by then, by Monday, by the time… Вопрос «Will you be using…?» звучит мягче, чем «Will you use…?».",
      ex: [
        ["This time next week, I'll be lying on the beach.", "В это время на следующей неделе я буду лежать на пляже."],
        ["By the end of the year, we'll have launched the app.", "К концу года мы уже запустим приложение."],
        ["Will you be working late tonight?", "Ты будешь сегодня работать допоздна?"],
        ["She'll have retired by 2030.", "К 2030 году она уже выйдет на пенсию."],
        ["Don't call at 8 — we'll be having dinner.", "Не звони в 8 — мы будем ужинать."]
      ],
      mist: [
        ["By Friday I will finish.", "By Friday I will have finished.", "«Уже сделаю к сроку» — will have + 3-я форма."],
        ["At 10 I will work.", "At 10 I will be working.", "Процесс в момент — will be + -ing."],
        ["I will have finish.", "I will have finished.", "После will have — 3-я форма."]
      ]
    },
    drills: [
      ["This time tomorrow, I ___ to Paris.", ["will be flying", "will fly", "will have flown"], "Завтра в это время я буду лететь в Париж.", "Процесс в момент — will be + -ing."],
      ["By Friday, we ___ the project.", ["will have completed", "will be completing", "complete"], "К пятнице мы закончим проект.", "by + срок — will have + 3-я форма."],
      ["Don't call at 7 — I ___ dinner.", ["will be having", "will have had", "have"], "Не звони в 7 — я буду ужинать.", "Процесс в 7 — will be + -ing."],
      ["By 2035, he ___.", ["will have retired", "will be retiring", "retires"], "К 2035 году он уже выйдет на пенсию.", "by 2035 — will have + 3-я форма."],
      ["___ you be using the car tonight?", ["Will", "Are", "Do"], "Ты будешь сегодня брать машину?", "Вежливый вопрос — Will you be…?"],
      ["The deadline is Monday. By ___, I'll have sent everything.", ["then", "than", "the"], "Срок — понедельник. К тому времени я всё отправлю.", "by then — к тому времени."],
      ["Will you be ___ tomorrow afternoon?", ["available", "availability", "avail"], "Ты будешь свободен завтра днём?", "be + прилагательное: available."],
      ["I'll have ___ the report by noon.", ["finished", "finish", "finishing"], "К полудню я закончу отчёт.", "will have + 3-я форма."]
    ],
    order: [["I will be working at ten.", "В десять я буду работать."], ["By Friday we will have finished.", "К пятнице мы закончим."], ["Will you be using the car?", "Ты будешь брать машину?"]],
    dialog: [
      ["Boss", "Will you be available on Thursday?", "Вы будете свободны в четверг?"],
      ["Kate", "I'll be meeting clients in the morning, but I'm free after lunch.", "Утром у меня встреча с клиентами, но после обеда я свободна."],
      ["Boss", "Good. The deadline for the launch is next Monday.", "Хорошо. Крайний срок запуска — следующий понедельник."],
      ["Kate", "Don't worry. By then, we'll have tested everything.", "Не волнуйтесь. К тому времени мы всё протестируем."],
      ["Boss", "Will the team be working overtime?", "Команда будет работать сверхурочно?"],
      ["Kate", "Only on Friday. We'll have completed most tasks by Thursday.", "Только в пятницу. Большую часть задач мы закончим к четвергу."]
    ]
  });

  L({
    id: "b2-6", icon: "🪢", title: "Хотя и несмотря на", topic: "although, despite, however, whereas",
    words: [
      ["tackle", "браться за, решать", "We need to tackle this problem.", "Нам нужно взяться за эту проблему.", "Такл в футболе — смелый отбор мяча."],
      ["issue", "вопрос, проблема", "That's a serious issue.", "Это серьёзный вопрос.", "Issue на GitHub — задача или проблема."],
      ["significant", "значительный", "There's a significant difference.", "Есть значительная разница.", "sign — знак: «знаковый, значимый»."],
      ["approach", "подход; приближаться", "We need a new approach.", "Нам нужен новый подход.", "approach to — подход к чему-то."],
      ["benefit", "польза, преимущество", "What are the benefits of this plan?", "Какие у этого плана преимущества?", "Бенефис — выгодный вечер для артиста."],
      ["drawback", "недостаток", "The main drawback is the price.", "Главный недостаток — цена.", "draw back — «оттянуть назад»: то, что тянет назад."],
      ["consistent", "последовательный, стабильный", "Be consistent with your studies.", "Занимайтесь регулярно.", "Консистенция — постоянство состава."],
      ["reluctant", "неохотный", "He was reluctant to agree.", "Он не хотел соглашаться.", "reluctant to do — делать неохотно."]
    ],
    rule: {
      title: "although, despite, however, whereas",
      text: [
        "Чтобы речь звучала связно, нужны связки «хотя», «несмотря на», «однако».",
        "Главная разница — что идёт после них: целое предложение или просто существительное / -ing."
      ],
      head: ["Связка", "Что после", "Пример"],
      table: [["although / even though", "+ предложение", "Although it was cold, we went out."], ["despite / in spite of", "+ существительное или -ing", "Despite the cold, we went out."], ["however", "новое предложение, после — запятая", "It was cold. However, we went out."], ["whereas / while", "сравнение двух фактов", "I like tea, whereas my wife prefers coffee."]],
      note: "<b>despite the fact that</b> + предложение — способ «спасти» despite. И никогда не «despite of» — только despite или in spite of.",
      ex: [
        ["Although he was tired, he finished the work.", "Хотя он устал, он закончил работу."],
        ["Despite the rain, the match continued.", "Несмотря на дождь, матч продолжился."],
        ["The plan has benefits. However, it's expensive.", "У плана есть плюсы. Однако он дорогой."],
        ["I'm an early bird, whereas my husband loves late nights.", "Я жаворонок, а мой муж любит засиживаться допоздна."],
        ["In spite of feeling ill, she went to work.", "Несмотря на плохое самочувствие, она пошла на работу."]
      ],
      mist: [
        ["Despite of the rain, we went out.", "Despite the rain, we went out.", "despite — без of."],
        ["Although the rain, we went out.", "Although it was raining, we went out.", "После although нужно предложение; перед существительным — despite."],
        ["It was cold, however we went out.", "It was cold. However, we went out.", "however — в новом предложении, с запятой после."]
      ]
    },
    drills: [
      ["___ it was raining, we went for a walk.", ["Although", "Despite", "However"], "Хотя шёл дождь, мы пошли гулять.", "Дальше предложение — although."],
      ["___ the traffic, we arrived on time.", ["Despite", "Although", "However"], "Несмотря на пробки, мы приехали вовремя.", "Дальше существительное — despite."],
      ["The flat is lovely. ___, it's too far from the centre.", ["However", "Although", "Despite"], "Квартира чудесная. Однако она слишком далеко от центра.", "Новое предложение с запятой — however."],
      ["I love the sea, ___ my sister prefers the mountains.", ["whereas", "despite", "however"], "Я люблю море, а моя сестра предпочитает горы.", "Сравнение двух фактов — whereas."],
      ["In spite ___ feeling tired, he kept working.", ["of", "from", "by"], "Несмотря на усталость, он продолжал работать.", "in spite of — с of (а despite — без)."],
      ["The main ___ of this phone is the battery.", ["drawback", "benefit", "approach"], "Главный недостаток этого телефона — батарея.", "«Недостаток» — drawback."],
      ["She was ___ to accept the offer.", ["reluctant", "reluctance", "reluctantly"], "Она не хотела принимать предложение.", "be + прилагательное: reluctant."],
      ["We need a different ___ to this issue.", ["approach", "approaching", "approached"], "Нам нужен другой подход к этому вопросу.", "a … approach — существительное."]
    ],
    order: [["Although it was cold, we went out.", "Хотя было холодно, мы вышли."], ["Despite the rain, we played football.", "Несмотря на дождь, мы играли в футбол."], ["I like tea, whereas she prefers coffee.", "Я люблю чай, а она предпочитает кофе."]],
    dialog: [
      ["Ann", "So, should we move to the suburbs?", "Ну что, переезжаем за город?"],
      ["Paul", "Well, there are significant benefits. The air is cleaner, and it's cheaper.", "Ну, плюсы значительные. Воздух чище, и дешевле."],
      ["Ann", "However, the commute would take two hours.", "Однако дорога на работу займёт два часа."],
      ["Paul", "True. Although I could work from home twice a week.", "Верно. Хотя я мог бы работать из дома два раза в неделю."],
      ["Ann", "Despite that, I'm still reluctant. The kids love their school.", "И всё же я сомневаюсь. Дети любят свою школу."],
      ["Paul", "Let's tackle one issue at a time.", "Давай решать вопросы по одному."]
    ]
  });
})();
