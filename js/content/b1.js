/* Уровень B1 — средний. */
(function () {
  const C = (window.COURSE = window.COURSE || {});
  const lv = (C.b1 = []);
  const L = (o) => lv.push(o);

  L({
    id: "b1-1", icon: "💼", title: "Работа и карьера", topic: "Present Perfect или Past Simple; for и since",
    words: [
      ["since", "с (какого-то момента)", "I've lived here since 2015.", "Я живу здесь с 2015 года.", "since + момент: since Monday, since 2015."],
      ["for", "в течение (срок)", "I've known her for ten years.", "Я знаю её десять лет.", "for + срок: for two years, for a week."],
      ["recently", "недавно", "I've recently changed jobs.", "Я недавно сменил работу.", "recent — «недавний»; -ly делает «недавно»."],
      ["lately", "в последнее время", "Have you seen Tom lately?", "Ты видел Тома в последнее время?", "Не «поздно»! late — поздний, а lately — «в последнее время»."],
      ["achieve", "достигать", "She has achieved a lot.", "Она многого добилась.", "Ачивка в игре — achievement, достижение."],
      ["career", "карьера", "He started his career in 2010.", "Он начал карьеру в 2010 году.", "Ударение на последний слог: ка-РИ́А."],
      ["graduate", "окончить (вуз)", "I graduated from university in 2018.", "Я окончил университет в 2018 году.", "Градуировка — деление по ступеням: graduate — пройти все ступени."],
      ["move", "переезжать; двигаться", "We moved to Moscow two years ago.", "Мы переехали в Москву два года назад.", "Movie — «движущиеся картинки», кино."]
    ],
    rule: {
      title: "Present Perfect или Past Simple? for и since",
      text: [
        "<b>Past Simple</b> — законченное прошлое, когда время названо или понятно: I moved here in 2015.",
        "<b>Present Perfect</b> — связь с настоящим: действие началось в прошлом и продолжается (I have lived here for 8 years — и сейчас живу) или важен результат без даты."
      ],
      head: ["Слово", "С чем", "Пример"],
      table: [["for", "срок: two years, a month", "I've worked here for two years."], ["since", "момент: 2020, Monday", "I've worked here since 2020."], ["ago", "только Past Simple", "I started two years ago."]],
      note: "Вопрос «как долго?» — <b>How long have you…?</b> Русское «Я живу здесь пять лет» в английском — Present Perfect: I have lived here for five years (не I live here for five years).",
      ex: [
        ["I've worked here since 2019.", "Я работаю здесь с 2019 года."],
        ["We've known each other for ten years.", "Мы знакомы десять лет."],
        ["How long have you lived in Moscow?", "Сколько ты живёшь в Москве?"],
        ["She graduated three years ago.", "Она окончила вуз три года назад."],
        ["Have you been busy lately?", "Ты был занят в последнее время?"]
      ],
      mist: [
        ["I live here for five years.", "I have lived here for five years.", "Началось в прошлом и длится — Present Perfect."],
        ["I have seen him yesterday.", "I saw him yesterday.", "yesterday — точное время, Past Simple."],
        ["I've known her since three years.", "I've known her for three years.", "Срок — for, момент — since."]
      ]
    },
    drills: [
      ["I've lived here ___ 2015.", ["since", "for", "from"], "Я живу здесь с 2015 года.", "2015 — момент, значит since."],
      ["She has worked there ___ six months.", ["for", "since", "during"], "Она работает там шесть месяцев.", "Шесть месяцев — срок, значит for."],
      ["We ___ to Kazan two years ago.", ["moved", "have moved", "move"], "Мы переехали в Казань два года назад.", "ago — только Past Simple."],
      ["How long ___ you known him?", ["have", "did", "do"], "Как давно ты его знаешь?", "How long + Present Perfect."],
      ["I ___ him at a conference last year.", ["met", "have met", "meet"], "Я познакомился с ним на конференции в прошлом году.", "last year — Past Simple."],
      ["He has ___ a lot in his career.", ["achieved", "achieve", "achieving"], "Он многого добился в карьере.", "После has — третья форма."],
      ["I ___ here for three years, and I still love it.", ["have worked", "work", "worked"], "Я работаю здесь три года и до сих пор люблю это.", "Длится до сих пор — Present Perfect."],
      ["She ___ from university in 2018.", ["graduated", "has graduated", "graduates"], "Она окончила университет в 2018 году.", "Точный год — Past Simple."]
    ],
    order: [["I have lived here for five years.", "Я живу здесь пять лет."], ["How long have you known her?", "Как давно ты её знаешь?"], ["We moved here two years ago.", "Мы переехали сюда два года назад."]],
    dialog: [
      ["Olga", "How long have you worked at this company?", "Как давно ты работаешь в этой компании?"],
      ["Mark", "For about three years. I joined right after I graduated.", "Около трёх лет. Я пришёл сразу после вуза."],
      ["Olga", "And have you enjoyed it?", "И как, нравится?"],
      ["Mark", "Yes. I've learned a lot. Recently I've become a team leader.", "Да. Я многому научился. Недавно стал руководителем команды."],
      ["Olga", "Congratulations! When did that happen?", "Поздравляю! Когда это случилось?"],
      ["Mark", "Last month.", "В прошлом месяце."]
    ]
  });

  L({
    id: "b1-2", icon: "🎬", title: "История из прошлого", topic: "Past Continuous: I was doing",
    words: [
      ["suddenly", "вдруг, внезапно", "Suddenly the lights went out.", "Вдруг погас свет.", "sudden — внезапный; -ly — «внезапно»."],
      ["while", "пока, в то время как", "I was cooking while he was sleeping.", "Я готовил, пока он спал.", "Пока длится одно, идёт другое — while."],
      ["happen", "случаться", "What happened?", "Что случилось?", "Хэппи-энд — счастливый конец; happen — то, что случается."],
      ["notice", "замечать", "I didn't notice the sign.", "Я не заметил знак.", "Нотис — уведомление, то, что надо заметить."],
      ["accident", "авария, несчастный случай", "He saw an accident on his way home.", "По дороге домой он увидел аварию.", "by accident — случайно."],
      ["ring", "звонить; звенеть (rang)", "The phone rang while I was in the shower.", "Телефон зазвонил, пока я был в душе.", "Рингтон — звук звонка. ring — rang — rung."],
      ["drop", "ронять", "She dropped her glass.", "Она уронила стакан.", "Дроп — капля; капля падает."],
      ["crowd", "толпа", "A crowd was waiting outside.", "Снаружи ждала толпа.", "Краудфандинг — деньги «от толпы»."]
    ],
    rule: {
      title: "Past Continuous: процесс в прошлом",
      text: [
        "<b>was / were + -ing</b> — действие шло в какой-то момент в прошлом: At 8 pm I was having dinner.",
        "Часто вместе с Past Simple: длинное действие (фон) прерывается коротким. I <b>was walking</b> home when I <b>saw</b> an accident."
      ],
      head: ["Что", "Форма", "Пример"],
      table: [["Фон (длилось)", "was / were + -ing", "I was reading…"], ["Событие (случилось)", "Past Simple", "…when the phone rang."], ["Два процесса сразу", "while", "I was cooking while she was working."]],
      note: "<b>when</b> — обычно перед коротким действием, <b>while</b> — перед длинным: While I was sleeping, the phone rang.",
      ex: [
        ["I was watching TV when you called.", "Я смотрел телевизор, когда ты позвонил."],
        ["What were you doing at 10 last night?", "Что ты делал вчера в 10 вечера?"],
        ["She dropped her phone while she was running.", "Она уронила телефон, когда бежала."],
        ["It was raining, so we stayed at home.", "Шёл дождь, поэтому мы остались дома."],
        ["While we were talking, a crowd appeared.", "Пока мы разговаривали, собралась толпа."]
      ],
      mist: [
        ["When I walked home, I saw an accident.", "I was walking home when I saw an accident.", "Фоновое, длительное действие — was / were + -ing."],
        ["I was call you yesterday.", "I called you yesterday.", "Короткое событие — Past Simple."],
        ["They was waiting.", "They were waiting.", "С they — were."]
      ]
    },
    drills: [
      ["I ___ TV when you called.", ["was watching", "watched", "were watching"], "Я смотрел телевизор, когда ты позвонил.", "Фон — was + -ing."],
      ["The phone ___ while I was in the shower.", ["rang", "was ringing", "ringed"], "Телефон зазвонил, пока я был в душе.", "Короткое событие — Past Simple: rang."],
      ["What ___ you doing at 8 pm?", ["were", "was", "did"], "Что ты делал в 8 вечера?", "С you — were."],
      ["She ___ her glass while she was dancing.", ["dropped", "was dropping", "drops"], "Она уронила стакан, когда танцевала.", "Уронила — короткое событие."],
      ["___ I was walking home, I noticed a strange car.", ["While", "When", "During"], "Пока я шёл домой, я заметил странную машину.", "Перед длинным действием — while."],
      ["It ___ when we left the house.", ["was raining", "rained", "were raining"], "Когда мы вышли из дома, шёл дождь.", "Фон — was raining."],
      ["They ___ for the bus when the accident happened.", ["were waiting", "was waiting", "waited"], "Они ждали автобус, когда случилась авария.", "Фон, с they — were waiting."],
      ["Suddenly, the lights ___ out.", ["went", "were going", "goed"], "Вдруг погас свет.", "suddenly — короткое событие, Past Simple."]
    ],
    order: [["I was cooking when you called.", "Я готовил, когда ты позвонил."], ["What were you doing at eight?", "Что ты делал в восемь?"], ["It was raining all day.", "Весь день шёл дождь."]],
    dialog: [
      ["Kim", "Why are you late?", "Почему ты опоздал?"],
      ["Leo", "Sorry! I was driving to work when I saw an accident.", "Извини! Я ехал на работу и увидел аварию."],
      ["Kim", "Oh no! What happened?", "Ой! Что случилось?"],
      ["Leo", "A car hit a bus. Nobody was hurt, but a crowd was standing in the road.", "Машина врезалась в автобус. Никто не пострадал, но на дороге стояла толпа."],
      ["Kim", "Did the police come?", "Полиция приехала?"],
      ["Leo", "Yes, they arrived while I was waiting.", "Да, приехала, пока я ждал."]
    ]
  });

  L({
    id: "b1-3", icon: "🤔", title: "Если бы…", topic: "Условия: if I have… и if I had…",
    words: [
      ["unless", "если не", "I won't go unless you come with me.", "Я не пойду, если ты не пойдёшь со мной.", "unless = if not. Отрицание уже внутри — второе не нужно."],
      ["afford", "позволить себе", "I can't afford a new car.", "Я не могу позволить себе новую машину.", "Почти всегда с can: can afford — «по карману»."],
      ["chance", "шанс, возможность", "If I had the chance, I'd travel more.", "Будь у меня возможность, я бы больше путешествовал.", "Шанс — chance."],
      ["decision", "решение", "It's a difficult decision.", "Это трудное решение.", "decide — решать, decision — решение."],
      ["situation", "ситуация", "What would you do in my situation?", "Что бы ты сделал на моём месте?", "Почти одинаково с русским: ситуация."],
      ["choose", "выбирать (chose)", "If I were you, I'd choose the red one.", "На твоём месте я бы выбрал красный.", "choose — chose — chosen. Читается «чу-уз»."],
      ["risk", "риск; рисковать", "If you don't take risks, you won't win.", "Если не рискуешь, не выиграешь.", "take a risk — пойти на риск."],
      ["advice", "совет", "Can you give me some advice?", "Можешь дать мне совет?", "Неисчисляемое: some advice, a piece of advice (не an advice)."]
    ],
    rule: {
      title: "Условия: if I have… и if I had…",
      text: [
        "<b>Первый тип</b> — реальное будущее: <b>If + настоящее, will + глагол</b>. If it rains, we will stay at home.",
        "<b>Второй тип</b> — нереальное, воображаемое сейчас: <b>If + прошедшее, would + глагол</b>. If I had a million, I would buy a house (но миллиона нет)."
      ],
      head: ["Тип", "Английский", "По-русски"],
      table: [["Реально", "If I have time, I will call you.", "Если будет время — позвоню."], ["Воображаемо", "If I had time, I would call you.", "Было бы время — позвонил бы."], ["Совет", "If I were you, I would…", "На твоём месте я бы…"]],
      note: "После if не ставим will: If it rains (не if it will rain). Во втором типе с I / he / she часто говорят were: If I were rich…",
      ex: [
        ["If you hurry, you'll catch the bus.", "Если поторопишься, успеешь на автобус."],
        ["If I had more money, I'd travel.", "Будь у меня больше денег, я бы путешествовал."],
        ["If I were you, I'd take this job.", "На твоём месте я бы согласился на эту работу."],
        ["We won't go unless the weather is good.", "Мы не поедем, если погода не будет хорошей."],
        ["What would you do if you lost your job?", "Что бы ты делал, если бы потерял работу?"]
      ],
      mist: [
        ["If it will rain, we will stay home.", "If it rains, we will stay home.", "После if — без will."],
        ["If I would have money, I would buy it.", "If I had money, I would buy it.", "would — только во второй части."],
        ["Unless you don't hurry, you'll be late.", "Unless you hurry, you'll be late.", "unless уже значит «если не»."]
      ]
    },
    drills: [
      ["If it ___ tomorrow, we'll stay at home.", ["rains", "will rain", "rained"], "Если завтра будет дождь, мы останемся дома.", "После if — настоящее время."],
      ["If I had more time, I ___ learn Spanish.", ["would", "will", "did"], "Будь у меня больше времени, я бы выучил испанский.", "Воображаемое — would."],
      ["If I ___ you, I'd accept the offer.", ["were", "am", "will be"], "На твоём месте я бы принял предложение.", "If I were you — устойчивая фраза."],
      ["She'll be angry if you ___ late again.", ["are", "will be", "were"], "Она рассердится, если ты снова опоздаешь.", "После if — настоящее."],
      ["We can't ___ a new flat right now.", ["afford", "allow", "achieve"], "Сейчас мы не можем позволить себе новую квартиру.", "«Позволить себе по деньгам» — afford."],
      ["I won't go ___ you come with me.", ["unless", "if", "when"], "Я не пойду, если ты не пойдёшь со мной.", "«Если не» — unless."],
      ["What would you do if you ___ a million dollars?", ["won", "win", "will win"], "Что бы ты сделал, если бы выиграл миллион долларов?", "Воображаемое — прошедшее после if."],
      ["Can you give me some ___?", ["advice", "advices", "an advice"], "Можешь дать совет?", "advice не бывает во множественном числе."]
    ],
    order: [["If I had time, I would help you.", "Если бы у меня было время, я бы тебе помог."], ["If you hurry, you will catch the bus.", "Если поторопишься, успеешь на автобус."], ["What would you do?", "Что бы ты сделал?"]],
    dialog: [
      ["Ira", "I got a job offer in another city.", "Мне предложили работу в другом городе."],
      ["Ken", "That's great! Are you going to take it?", "Здорово! Согласишься?"],
      ["Ira", "I don't know. If I move, I'll miss my friends.", "Не знаю. Если перееду, буду скучать по друзьям."],
      ["Ken", "If I were you, I'd take the risk.", "На твоём месте я бы рискнул."],
      ["Ira", "Really? What would you do if it didn't work out?", "Правда? А что бы ты делал, если бы ничего не вышло?"],
      ["Ken", "I'd come back! It's not a forever decision.", "Вернулся бы! Это решение не навсегда."]
    ]
  });

  L({
    id: "b1-4", icon: "🏗️", title: "Как это сделано", topic: "Пассивный залог: it was built",
    words: [
      ["build", "строить (built)", "The bridge was built in 1990.", "Мост построили в 1990 году.", "Билдинг — здание. build — built — built."],
      ["invent", "изобретать", "The telephone was invented by Bell.", "Телефон изобрёл Белл.", "Инвентор — изобретатель."],
      ["produce", "производить", "These cars are produced in Japan.", "Эти машины производят в Японии.", "Продюсер — тот, кто «производит» фильм."],
      ["deliver", "доставлять", "Your order will be delivered tomorrow.", "Ваш заказ доставят завтра.", "Деливери — доставка еды."],
      ["damage", "повреждать; ущерб", "The roof was damaged by the storm.", "Крыша была повреждена бурей.", "Дэмидж — урон в играх."],
      ["publish", "издавать, публиковать", "The book was published in 2020.", "Книга вышла в 2020 году.", "Паблик — публика: publish — сделать публичным."],
      ["require", "требовать", "A passport is required.", "Требуется паспорт.", "Requirements — требования в вакансии."],
      ["local", "местный", "The café is popular with local people.", "Кафе популярно у местных.", "Локальный — местный."]
    ],
    rule: {
      title: "Пассивный залог: «сделано кем-то»",
      text: [
        "Когда важно действие или предмет, а не тот, кто делает, используем пассив: <b>be + третья форма</b>.",
        "Русское «Мост построили» или «Мост был построен» — The bridge was built. Кто сделал — добавляем через <b>by</b>: by Bell."
      ],
      head: ["Время", "Форма", "Пример"],
      table: [["Настоящее", "is / are + 3-я форма", "English is spoken here."], ["Прошедшее", "was / were + 3-я форма", "It was built in 1990."], ["Будущее", "will be + 3-я форма", "It will be delivered."], ["Present Perfect", "has / have been + 3-я форма", "The order has been sent."]],
      note: "Пассив очень частый в новостях, инструкциях и объявлениях: Smoking is not allowed. Breakfast is included.",
      ex: [
        ["This house was built 100 years ago.", "Этот дом построили 100 лет назад."],
        ["English is spoken all over the world.", "На английском говорят по всему миру."],
        ["Your parcel will be delivered on Monday.", "Вашу посылку доставят в понедельник."],
        ["The road has been closed.", "Дорогу закрыли."],
        ["Breakfast is included in the price.", "Завтрак включён в стоимость."]
      ],
      mist: [
        ["The bridge built in 1990.", "The bridge was built in 1990.", "Нужен be: was built."],
        ["The book was wrote by him.", "The book was written by him.", "После was — третья форма: written."],
        ["It is speaking English here.", "English is spoken here.", "Пассив: is + spoken, а не -ing."]
      ]
    },
    drills: [
      ["The bridge ___ in 1990.", ["was built", "built", "was build"], "Мост построили в 1990 году.", "Пассив в прошлом: was + built."],
      ["These phones ___ in China.", ["are produced", "produce", "are producing"], "Эти телефоны производят в Китае.", "Пассив в настоящем: are + produced."],
      ["Your order will ___ tomorrow.", ["be delivered", "delivered", "deliver"], "Ваш заказ доставят завтра.", "Будущее: will be + 3-я форма."],
      ["The telephone was invented ___ Bell.", ["by", "from", "with"], "Телефон изобрёл Белл.", "«Кем» — by."],
      ["The book ___ in 2020.", ["was published", "published", "is publishing"], "Книга вышла в 2020 году.", "Книгу издали — пассив."],
      ["A passport ___ for this trip.", ["is required", "requires", "is require"], "Для этой поездки нужен паспорт.", "is + 3-я форма: required."],
      ["The roof ___ by the storm last night.", ["was damaged", "damaged", "was damage"], "Прошлой ночью буря повредила крышу.", "was + damaged."],
      ["The letter has ___ sent.", ["been", "be", "was"], "Письмо отправлено.", "Present Perfect пассив: has been sent."]
    ],
    order: [["The house was built in 1990.", "Дом построили в 1990 году."], ["English is spoken here.", "Здесь говорят по-английски."], ["Your order will be delivered tomorrow.", "Ваш заказ доставят завтра."]],
    dialog: [
      ["Guest", "Excuse me, is breakfast included?", "Извините, завтрак включён?"],
      ["Receptionist", "Yes, it is. Breakfast is served from 7 to 10.", "Да. Завтрак подают с 7 до 10."],
      ["Guest", "Great. Is this hotel new?", "Отлично. Эта гостиница новая?"],
      ["Receptionist", "No, the building was built in 1890, but it was renovated last year.", "Нет, здание построено в 1890 году, но в прошлом году его отремонтировали."],
      ["Guest", "It looks beautiful.", "Выглядит прекрасно."],
      ["Receptionist", "Thank you. Your bags will be taken to your room.", "Спасибо. Ваши сумки отнесут в номер."]
    ]
  });

  L({
    id: "b1-5", icon: "💬", title: "Он сказал, что…", topic: "Косвенная речь",
    words: [
      ["explain", "объяснять", "He explained that he was ill.", "Он объяснил, что болел.", "explain to me — «объясни мне» (с to!)."],
      ["mention", "упоминать", "She mentioned that she was moving.", "Она упомянула, что переезжает.", "@mention в чатах — упоминание."],
      ["admit", "признавать", "He admitted that he was wrong.", "Он признал, что был неправ.", "Admit — «впустить», в том числе правду."],
      ["complain", "жаловаться", "She complained about the noise.", "Она пожаловалась на шум.", "complain about — жаловаться на что-то."],
      ["suggest", "предлагать", "He suggested going to the cinema.", "Он предложил сходить в кино.", "После suggest — -ing: suggest going."],
      ["reply", "отвечать", "She replied that she was busy.", "Она ответила, что занята.", "Реплай в почте — ответ."],
      ["claim", "утверждать, заявлять", "He claims that he saw a UFO.", "Он утверждает, что видел НЛО.", "Claim — заявка, претензия: заявлять своё."],
      ["warn", "предупреждать", "They warned us not to go there.", "Нас предупредили не ходить туда.", "Warning — предупреждение на табличках."]
    ],
    rule: {
      title: "Косвенная речь: он сказал, что…",
      text: [
        "Когда пересказываем чужие слова в прошлом (he said, she told me), время «сдвигается» на шаг назад: <b>am → was, will → would, can → could</b>.",
        "“I am tired,” she said. → She said (that) she <b>was</b> tired."
      ],
      head: ["Сказали", "Пересказ"],
      table: [["“I work here.”", "He said he worked there."], ["“I am leaving.”", "She said she was leaving."], ["“I will call.”", "He said he would call."], ["“I can help.”", "She said she could help."], ["“I saw it.”", "He said he had seen it."]],
      note: "<b>say</b> — без «кому»: He said that…; <b>tell</b> — обязательно кому: He told me that… Просьбы: “Please wait” → She asked me to wait.",
      ex: [
        ["He said he was tired.", "Он сказал, что устал."],
        ["She told me she would come.", "Она сказала мне, что придёт."],
        ["They said they couldn't help.", "Они сказали, что не могут помочь."],
        ["He admitted he had made a mistake.", "Он признал, что ошибся."],
        ["She asked me to close the door.", "Она попросила меня закрыть дверь."]
      ],
      mist: [
        ["He said me that he was busy.", "He told me that he was busy.", "said — без «кому». С «кому» — told me."],
        ["She said she will come.", "She said she would come.", "После said will меняется на would."],
        ["He told to wait.", "He told me to wait.", "tell требует «кому»: told me."]
      ]
    },
    drills: [
      ["“I'm tired.” → She said she ___ tired.", ["was", "is", "will be"], "Она сказала, что устала.", "am → was."],
      ["“I will call you.” → He said he ___ call me.", ["would", "will", "can"], "Он сказал, что позвонит мне.", "will → would."],
      ["She ___ me that she was busy.", ["told", "said", "spoke"], "Она сказала мне, что занята.", "С «кому» (me) — told."],
      ["He ___ that he had a new job.", ["said", "told", "talked"], "Он сказал, что у него новая работа.", "Без «кому» — said."],
      ["“I can't swim.” → She said she ___ swim.", ["couldn't", "can't", "didn't"], "Она сказала, что не умеет плавать.", "can't → couldn't."],
      ["The doctor warned me ___ eat so much sugar.", ["not to", "don't", "to not"], "Врач предупредил меня не есть так много сахара.", "warn someone not to do."],
      ["He suggested ___ to the cinema.", ["going", "to go", "go"], "Он предложил сходить в кино.", "suggest + -ing."],
      ["She complained ___ the noise.", ["about", "on", "for"], "Она пожаловалась на шум.", "complain about."]
    ],
    order: [["She said that she was tired.", "Она сказала, что устала."], ["He told me he would call.", "Он сказал мне, что позвонит."], ["They asked us to wait.", "Они попросили нас подождать."]],
    dialog: [
      ["Ann", "Did you talk to the landlord?", "Ты поговорил с хозяином квартиры?"],
      ["Tom", "Yes. He said he would fix the heating tomorrow.", "Да. Он сказал, что завтра починит отопление."],
      ["Ann", "He told me the same thing last week!", "Он то же самое говорил мне на прошлой неделе!"],
      ["Tom", "I know. I complained about it, and he admitted it was his fault.", "Знаю. Я пожаловался, и он признал, что это его вина."],
      ["Ann", "Did he mention the rent?", "А про аренду он что-нибудь сказал?"],
      ["Tom", "He said it wouldn't change this year.", "Сказал, что в этом году она не изменится."]
    ]
  });

  L({
    id: "b1-6", icon: "🎯", title: "Люблю делать", topic: "-ing или to: enjoy doing, want to do",
    words: [
      ["avoid", "избегать", "I avoid driving at night.", "Я стараюсь не ездить ночью.", "avoid + -ing: avoid eating, avoid going."],
      ["enjoy", "получать удовольствие", "I enjoy cooking.", "Я люблю готовить.", "«Enjoy!» — «Наслаждайся!» После enjoy — -ing."],
      ["manage", "суметь, справиться", "I managed to finish on time.", "Я успел закончить вовремя.", "Менеджер справляется: manage to do — суметь сделать."],
      ["refuse", "отказываться", "He refused to help.", "Он отказался помочь.", "refuse + to: refuse to pay."],
      ["consider", "обдумывать, рассматривать", "I'm considering changing jobs.", "Я подумываю сменить работу.", "consider + -ing: consider moving."],
      ["mind", "возражать, быть против", "Do you mind opening the window?", "Ты не против открыть окно?", "Do you mind…? — вежливая просьба, дальше -ing."],
      ["intend", "намереваться", "I intend to stay.", "Я намерен остаться.", "Интенция — намерение."],
      ["look forward to", "ждать с нетерпением", "I look forward to seeing you.", "С нетерпением жду встречи.", "Здесь to — предлог, поэтому дальше -ing: look forward to seeing."]
    ],
    rule: {
      title: "-ing или to? (enjoy doing / want to do)",
      text: [
        "После одних глаголов идёт форма с <b>-ing</b>: enjoy, avoid, mind, consider, finish, keep. I enjoy reading.",
        "После других — <b>to + глагол</b>: want, decide, plan, refuse, manage, hope, intend. I decided to stay."
      ],
      head: ["После чего", "Глаголы", "Пример"],
      table: [["+ -ing", "enjoy, avoid, mind, finish, keep, consider, suggest", "I finished working at six."], ["+ to", "want, decide, hope, plan, refuse, manage, promise", "She promised to call."], ["После предлога — -ing", "interested in, good at, before, after", "I'm good at cooking."]],
      note: "Некоторые меняют смысл: stop smoking (бросить курить) — stop to smoke (остановиться, чтобы покурить); remember to call (не забыть позвонить) — remember calling (помнить, что звонил).",
      ex: [
        ["I enjoy walking in the park.", "Мне нравится гулять в парке."],
        ["She decided to learn Japanese.", "Она решила учить японский."],
        ["Would you mind waiting a minute?", "Не могли бы вы подождать минутку?"],
        ["He managed to fix the car.", "Ему удалось починить машину."],
        ["I'm looking forward to meeting you.", "С нетерпением жду встречи с вами."]
      ],
      mist: [
        ["I enjoy to read.", "I enjoy reading.", "После enjoy — -ing."],
        ["I want going home.", "I want to go home.", "После want — to + глагол."],
        ["I look forward to see you.", "I look forward to seeing you.", "to здесь — предлог, дальше -ing."]
      ]
    },
    drills: [
      ["I enjoy ___ in the evening.", ["reading", "to read", "read"], "Я люблю читать по вечерам.", "enjoy + -ing."],
      ["She decided ___ a new car.", ["to buy", "buying", "buy"], "Она решила купить новую машину.", "decide + to."],
      ["Would you mind ___ the door?", ["closing", "to close", "close"], "Не могли бы вы закрыть дверь?", "mind + -ing."],
      ["He refused ___ for the damage.", ["to pay", "paying", "pay"], "Он отказался платить за ущерб.", "refuse + to."],
      ["I'm considering ___ abroad.", ["moving", "to move", "move"], "Я подумываю переехать за границу.", "consider + -ing."],
      ["We managed ___ the train.", ["to catch", "catching", "catch"], "Мы успели на поезд.", "manage + to."],
      ["I look forward to ___ from you.", ["hearing", "hear", "to hear"], "Жду вашего ответа.", "look forward to + -ing."],
      ["Try to avoid ___ during rush hour.", ["driving", "to drive", "drive"], "Старайтесь не ездить в час пик.", "avoid + -ing."]
    ],
    order: [["I enjoy cooking for my friends.", "Я люблю готовить для друзей."], ["She decided to learn Japanese.", "Она решила учить японский."], ["I look forward to seeing you.", "С нетерпением жду встречи."]],
    dialog: [
      ["Emma", "Have you finished packing?", "Ты закончил собираться?"],
      ["Jake", "Almost. I can't decide what to take.", "Почти. Не могу решить, что взять."],
      ["Emma", "Avoid taking too many clothes. The bag is small.", "Не бери много одежды. Сумка маленькая."],
      ["Jake", "OK. Would you mind checking the tickets?", "Хорошо. Не могла бы ты проверить билеты?"],
      ["Emma", "Sure. I'm really looking forward to seeing the mountains!", "Конечно. Мне так хочется увидеть горы!"],
      ["Jake", "Me too. I hope to take some great photos.", "Мне тоже. Надеюсь сделать классные фото."]
    ]
  });
})();
