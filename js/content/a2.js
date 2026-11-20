/* Уровень A2 — элементарный. */
(function () {
  const C = (window.COURSE = window.COURSE || {});
  const lv = (C.a2 = []);
  const L = (o) => lv.push(o);

  L({
    id: "a2-1", icon: "🏖️", title: "Как прошла поездка", topic: "Past Simple: was / were и глаголы на -ed",
    words: [
      ["yesterday", "вчера", "I was at home yesterday.", "Вчера я был дома.", "Песня The Beatles «Yesterday» — про вчерашний день."],
      ["ago", "назад", "I visited Paris two years ago.", "Я был в Париже два года назад.", "Ставится после срока, как и по-русски: two days ago — два дня назад."],
      ["last week", "на прошлой неделе", "Last week I was in London.", "На прошлой неделе я был в Лондоне.", "last — последний: последняя прошедшая неделя."],
      ["visit", "посещать, навещать", "We visited my grandmother.", "Мы навестили бабушку.", "Визит — visit."],
      ["stay", "останавливаться, оставаться", "We stayed at a small hotel.", "Мы остановились в маленькой гостинице.", "Stay home — «оставайся дома»."],
      ["trip", "поездка", "The trip was great!", "Поездка была отличной!", "Трип — короткое путешествие, как «тропа»."],
      ["hotel", "гостиница", "The hotel was near the sea.", "Гостиница была у моря.", "Отель — hotel, ударение на второй слог: хоу-ТЕЛ."],
      ["beach", "пляж", "We walked on the beach.", "Мы гуляли по пляжу.", "Читается «би-ич» с долгим «и»."]
    ],
    rule: {
      title: "Прошедшее время: was / were и глаголы на -ed",
      text: [
        "О прошлом: am и is превращаются в <b>was</b>, are — в <b>were</b>.",
        "К обычным глаголам добавляем <b>-ed</b>: visit → visited, stay → stayed. Хорошая новость: форма одна для всех — I, she, they visited."
      ],
      head: ["Кто", "Форма", "Пример"],
      table: [["I / he / she / it", "was", "I was tired."], ["you / we / they", "were", "They were at home."], ["любой", "глагол + -ed", "We visited Rome."]],
      note: "Правописание: live → lived, study → studied, stop → stopped. Вопрос и «не» — через <b>did</b>: Did you visit? I didn't visit. После did — глагол без -ed.",
      ex: [
        ["I was in Spain last summer.", "Прошлым летом я был в Испании."],
        ["The hotels were expensive.", "Гостиницы были дорогими."],
        ["We stayed there for a week.", "Мы пробыли там неделю."],
        ["She visited her friend yesterday.", "Вчера она навестила подругу."],
        ["Did you like the trip?", "Тебе понравилась поездка?"]
      ],
      mist: [
        ["We was at home.", "We were at home.", "С we, you, they — were."],
        ["Did you visited Rome?", "Did you visit Rome?", "После did — без -ed."],
        ["I visit my friend yesterday.", "I visited my friend yesterday.", "yesterday — это прошлое, нужен -ed."]
      ]
    },
    drills: [
      ["I ___ at home yesterday.", ["was", "were"], "Вчера я был дома.", "С I — was."],
      ["They ___ in London last week.", ["were", "was"], "На прошлой неделе они были в Лондоне.", "С they — were."],
      ["We ___ at a nice hotel.", ["stayed", "stay", "staied"], "Мы остановились в хорошей гостинице.", "stay → stayed (после гласной y не меняется)."],
      ["She ___ her grandmother two days ago.", ["visited", "visits", "visit"], "Она навестила бабушку два дня назад.", "ago — прошлое, нужен -ed."],
      ["Did you ___ the trip?", ["enjoy", "enjoyed", "enjoys"], "Тебе понравилась поездка?", "После did — глагол без -ed."],
      ["The beach ___ beautiful.", ["was", "were"], "Пляж был красивым.", "The beach = it, поэтому was."],
      ["We ___ the museum. It was closed.", ["didn't visit", "didn't visited", "not visited"], "Мы не пошли в музей. Он был закрыт.", "Отрицание — didn't + глагол без -ed."],
      ["I ___ English at school.", ["studied", "studyed", "studed"], "Я учил английский в школе.", "study → studied (y меняется на i)."]
    ],
    order: [["We stayed at a small hotel.", "Мы остановились в маленькой гостинице."], ["Where were you yesterday?", "Где ты был вчера?"], ["I visited Paris two years ago.", "Я был в Париже два года назад."]],
    dialog: [
      ["Liz", "Where were you last week?", "Где ты был на прошлой неделе?"],
      ["Dan", "I was in Sochi. It was a family trip.", "В Сочи. Это была семейная поездка."],
      ["Liz", "Did you stay at a hotel?", "Вы жили в гостинице?"],
      ["Dan", "Yes, we stayed at a hotel near the beach.", "Да, мы жили в гостинице у пляжа."],
      ["Liz", "Was the weather good?", "Погода была хорошая?"],
      ["Dan", "It was sunny every day!", "Каждый день было солнечно!"]
    ]
  });

  L({
    id: "a2-2", icon: "🔑", title: "Что случилось", topic: "Неправильные глаголы в прошедшем",
    words: [
      ["buy", "покупать (bought)", "I bought a new jacket.", "Я купил новую куртку.", "buy — bought. «Купил и bye!» — buy звучит как bye."],
      ["bring", "приносить (brought)", "She brought a cake.", "Она принесла торт.", "bring — brought: так же на -ought, как buy — bought."],
      ["meet", "встречать, знакомиться (met)", "I met Tom at the station.", "Я встретил Тома на вокзале.", "Митинг (meeting) — встреча."],
      ["see", "видеть (saw)", "We saw a great film.", "Мы посмотрели отличный фильм.", "see — saw: «си — со»."],
      ["lose", "терять (lost)", "I lost my keys.", "Я потерял ключи.", "Лузер (loser) — тот, кто проиграл, «потерял»."],
      ["find", "находить (found)", "He found his phone under the bed.", "Он нашёл телефон под кроватью.", "found — как «фунт»: нашёл фунт на дороге!"],
      ["forget", "забывать (forgot)", "I forgot her name.", "Я забыл её имя.", "for + get: «получил» — и тут же забыл."],
      ["tell", "рассказывать, говорить кому-то (told)", "She told me a secret.", "Она рассказала мне секрет.", "После tell сразу — кому: tell me, told him."]
    ],
    rule: {
      title: "Неправильные глаголы в прошедшем",
      text: [
        "Около сотни частых глаголов не получают -ed, а меняются целиком: go → <b>went</b>, buy → <b>bought</b>, see → <b>saw</b>.",
        "Их нужно просто запомнить. Утешение: вопрос и «не» строятся одинаково для всех — через <b>did</b>, а глагол возвращается в обычную форму."
      ],
      head: ["", "Английский", "Перевод"],
      table: [["Утверждение", "I saw him.", "Я его видел."], ["Вопрос", "Did you see him?", "Ты его видел?"], ["Отрицание", "I didn't see him.", "Я его не видел."]],
      note: "Самые нужные: go – went, have – had, do – did, make – made, get – got, take – took, come – came, say – said. Учите их парами, вслух.",
      ex: [
        ["We went to the cinema and saw a comedy.", "Мы сходили в кино и посмотрели комедию."],
        ["I lost my wallet, but then I found it.", "Я потерял кошелёк, но потом нашёл."],
        ["Did you buy any bread?", "Ты купил хлеба?"],
        ["She didn't tell me about the party.", "Она не сказала мне про вечеринку."],
        ["Where did you meet your husband?", "Где ты познакомилась с мужем?"]
      ],
      mist: [
        ["I buyed a phone.", "I bought a phone.", "buy — неправильный глагол: bought."],
        ["Did you saw it?", "Did you see it?", "После did — обычная форма: see."],
        ["I didn't went.", "I didn't go.", "didn't + обычная форма."]
      ]
    },
    drills: [
      ["I ___ a new jacket yesterday.", ["bought", "buyed", "buy"], "Вчера я купил новую куртку.", "buy — bought."],
      ["We ___ a great film last night.", ["saw", "seed", "see"], "Вчера вечером мы посмотрели отличный фильм.", "see — saw."],
      ["Did you ___ your keys?", ["find", "found", "finded"], "Ты нашёл ключи?", "После did — обычная форма find."],
      ["She ___ me her secret.", ["told", "telled", "tell"], "Она рассказала мне свой секрет.", "tell — told."],
      ["I ___ her birthday!", ["forgot", "forgetted", "forget"], "Я забыл про её день рождения!", "forget — forgot."],
      ["They didn't ___ any food.", ["bring", "brought", "brings"], "Они не принесли еды.", "После didn't — обычная форма."],
      ["Where ___ you meet him?", ["did", "were", "do"], "Где ты с ним познакомилась?", "Вопрос о прошлом — did."],
      ["He ___ his phone on the bus.", ["lost", "losed", "lose"], "Он потерял телефон в автобусе.", "lose — lost."]
    ],
    order: [["I lost my keys yesterday.", "Вчера я потерял ключи."], ["Did you see the film?", "Ты посмотрел фильм?"], ["She didn't tell me.", "Она мне не сказала."]],
    dialog: [
      ["Amy", "You look sad. What happened?", "Ты грустный. Что случилось?"],
      ["Joe", "I lost my phone on the bus.", "Я потерял телефон в автобусе."],
      ["Amy", "Oh no! Did you call the bus company?", "Ой! Ты звонил в автобусную компанию?"],
      ["Joe", "Yes, and a driver found it!", "Да, и водитель его нашёл!"],
      ["Amy", "Great! Did you get it back?", "Здорово! Тебе его вернули?"],
      ["Joe", "Yes, I met him at the station this morning.", "Да, утром встретился с ним на вокзале."]
    ]
  });

  L({
    id: "a2-3", icon: "🗓️", title: "Планы на будущее", topic: "going to и will",
    words: [
      ["plan", "план; планировать", "What are your plans for the summer?", "Какие у тебя планы на лето?", "Как по-русски — «план»."],
      ["tomorrow", "завтра", "I'll call you tomorrow.", "Я позвоню тебе завтра.", "to + morrow (утро): «к утру» — завтра."],
      ["soon", "скоро", "See you soon!", "До скорого!", "«Сун» — сунул вещи в сумку: скоро выезжаем."],
      ["probably", "наверное, вероятно", "It will probably rain.", "Наверное, пойдёт дождь.", "Как «проба»: вероятно, но не точно."],
      ["decide", "решать", "I decided to learn English.", "Я решил учить английский.", "decide — решать, decision — решение."],
      ["ticket", "билет", "We are going to buy tickets.", "Мы собираемся купить билеты.", "Тикет — билет или заявка в поддержку."],
      ["invite", "приглашать", "I'm going to invite my friends.", "Я собираюсь пригласить друзей.", "Инвайт — приглашение."],
      ["promise", "обещать; обещание", "I promise I'll help you.", "Обещаю, я тебе помогу.", "«Про-мис»: обещал — промахнуться нельзя."]
    ],
    rule: {
      title: "Будущее: going to и will",
      text: [
        "<b>going to</b> — когда уже есть план, решили заранее: I'm going to visit Rome (билеты куплены).",
        "<b>will</b> — когда решаем прямо сейчас, обещаем или предполагаем: It's cold — I'll close the window. I think it will rain."
      ],
      head: ["Когда", "Форма", "Пример"],
      table: [["План, намерение", "am / is / are going to + глагол", "We're going to buy a car."], ["Решение сейчас", "will + глагол", "I'll help you!"], ["Прогноз, мнение", "will + глагол", "You'll love it."]],
      note: "Сокращения: I'll = I will, won't = will not. После will и going to — глагол без to и без -s: She will come (не will comes).",
      ex: [
        ["I'm going to visit my parents tomorrow.", "Завтра я собираюсь навестить родителей."],
        ["The phone is ringing. — I'll answer it!", "Телефон звонит. — Я отвечу!"],
        ["I think it will be sunny.", "Думаю, будет солнечно."],
        ["She isn't going to come.", "Она не собирается приходить."],
        ["I won't forget, I promise.", "Не забуду, обещаю."]
      ],
      mist: [
        ["I will to call you.", "I will call you.", "После will — без to."],
        ["She going to buy a car.", "She is going to buy a car.", "Перед going to нужен am / is / are."],
        ["He will comes tomorrow.", "He will come tomorrow.", "После will — глагол без -s."]
      ]
    },
    drills: [
      ["We bought tickets. We ___ fly to Rome.", ["are going to", "will"], "Мы купили билеты. Мы летим в Рим.", "Есть готовый план — going to."],
      ["It's cold. — I ___ close the window.", ["will", "am going to"], "Холодно. — Я закрою окно.", "Решение прямо сейчас — will."],
      ["I think she ___ like the present.", ["will", "is going"], "Думаю, ей понравится подарок.", "Мнение о будущем — will."],
      ["He ___ going to invite us.", ["is", "will", "does"], "Он собирается нас пригласить.", "going to — с am / is / are."],
      ["I promise I ___ be late.", ["won't", "don't", "am not"], "Обещаю, я не опоздаю.", "Обещание — will not = won't."],
      ["They will ___ tomorrow.", ["arrive", "arrives", "to arrive"], "Они приедут завтра.", "После will — без -s и без to."],
      ["What ___ you going to do this weekend?", ["are", "will", "do"], "Что ты собираешься делать в эти выходные?", "going to — с are you."],
      ["Look at the sky! It ___ rain.", ["is going to", "will to"], "Посмотри на небо! Сейчас пойдёт дождь.", "Видим признаки — going to."]
    ],
    order: [["I am going to buy a ticket.", "Я собираюсь купить билет."], ["I will call you tomorrow.", "Я позвоню тебе завтра."], ["What are you going to do?", "Что ты собираешься делать?"]],
    dialog: [
      ["Nina", "What are you going to do this summer?", "Что ты собираешься делать этим летом?"],
      ["Paul", "I'm going to visit my cousin in Kazan.", "Собираюсь навестить двоюродного брата в Казани."],
      ["Nina", "Sounds great! Did you buy tickets?", "Звучит здорово! Билеты купил?"],
      ["Paul", "Not yet. I'll probably buy them tomorrow.", "Ещё нет. Наверное, куплю завтра."],
      ["Nina", "Send me photos!", "Пришли мне фото!"],
      ["Paul", "I will, I promise!", "Пришлю, обещаю!"]
    ]
  });

  L({
    id: "a2-4", icon: "⚖️", title: "Что лучше?", topic: "Сравнение: cheaper, more expensive, the best",
    words: [
      ["cheap", "дешёвый", "This phone is cheaper.", "Этот телефон дешевле.", "Читается «чи-ип» — коротко и дёшево."],
      ["expensive", "дорогой", "London is very expensive.", "Лондон очень дорогой.", "«Экс-пенсия»: на это уходит вся пенсия."],
      ["fast", "быстрый; быстро", "The train is faster than the bus.", "Поезд быстрее автобуса.", "Фастфуд — быстрая еда."],
      ["slow", "медленный", "My computer is so slow!", "Мой компьютер такой медленный!", "Слоу-мо (slow motion) — замедленная съёмка."],
      ["comfortable", "удобный", "This chair is more comfortable.", "Этот стул удобнее.", "Комфорт — comfortable. Читается «ка́мфтэбл»."],
      ["crowded", "людный, переполненный", "The metro is crowded in the morning.", "Утром в метро толпа.", "crowd — толпа; crowded — полный толпы."],
      ["quiet", "тихий", "Our street is quieter than yours.", "Наша улица тише вашей.", "Не путайте: quiet («ква́йет», тихий) и quite («квайт», довольно)."],
      ["the best", "лучший, самый хороший", "It's the best café in town.", "Это лучшее кафе в городе.", "Бестселлер — лучшая по продажам книга."]
    ],
    rule: {
      title: "Сравнение: faster, more expensive, the best",
      text: [
        "Короткие слова (1 слог) получают <b>-er</b> для сравнения и <b>the -est</b> для «самый»: cheap → cheaper → the cheapest.",
        "Длинные слова — через <b>more</b> и <b>the most</b>: expensive → more expensive → the most expensive. «Чем» — это <b>than</b>."
      ],
      head: ["Тип слова", "Формы"],
      table: [["Короткое", "fast → faster → the fastest"], ["На -y", "easy → easier → the easiest"], ["Длинное", "comfortable → more comfortable → the most comfortable"], ["Особые", "good → better → the best; bad → worse → the worst"]],
      note: "Удвоение: big → bigger, hot → hotter. Равенство: <b>as … as</b> — My car is as fast as yours.",
      ex: [
        ["The train is faster than the bus.", "Поезд быстрее автобуса."],
        ["This hotel is more expensive than that one.", "Эта гостиница дороже той."],
        ["It's the cheapest shop in the city.", "Это самый дешёвый магазин в городе."],
        ["Today is better than yesterday.", "Сегодня лучше, чем вчера."],
        ["My room is not as big as yours.", "Моя комната не такая большая, как твоя."]
      ],
      mist: [
        ["This shop is more cheap.", "This shop is cheaper.", "Короткие слова — с -er, без more."],
        ["She is taller then me.", "She is taller than me.", "«Чем» — than (через a). then — «потом»."],
        ["It's the most good pizza.", "It's the best pizza.", "good — особое слово: better, the best."]
      ]
    },
    drills: [
      ["The train is ___ than the bus.", ["faster", "more fast", "fastest"], "Поезд быстрее автобуса.", "fast — короткое слово: faster."],
      ["This chair is ___ than that one.", ["more comfortable", "comfortabler", "most comfortable"], "Этот стул удобнее того.", "Длинное слово — с more."],
      ["It's the ___ café in town.", ["best", "goodest", "better"], "Это лучшее кафе в городе.", "good → better → the best."],
      ["Moscow is bigger ___ Kazan.", ["than", "then", "as"], "Москва больше Казани.", "«Чем» — than."],
      ["Today is ___ than yesterday.", ["hotter", "hoter", "more hot"], "Сегодня жарче, чем вчера.", "hot → hotter (удваиваем t)."],
      ["This is the ___ expensive hotel here.", ["most", "more", "much"], "Это самая дорогая гостиница здесь.", "«Самый» у длинных слов — the most."],
      ["English is ___ than Chinese.", ["easier", "easyer", "more easy"], "Английский легче китайского.", "easy → easier (y → i)."],
      ["My street is as ___ as yours.", ["quiet", "quieter", "quietest"], "Моя улица такая же тихая, как твоя.", "В as … as — обычная форма."]
    ],
    order: [["The train is faster than the bus.", "Поезд быстрее автобуса."], ["This is the best café in town.", "Это лучшее кафе в городе."], ["My room is bigger than yours.", "Моя комната больше твоей."]],
    dialog: [
      ["Ella", "Let's take the bus to the centre.", "Давай поедем в центр на автобусе."],
      ["Max", "The metro is faster than the bus.", "Метро быстрее автобуса."],
      ["Ella", "Yes, but it's more crowded.", "Да, но там больше народу."],
      ["Max", "OK, the bus is more comfortable. And cheaper!", "Ладно, автобус удобнее. И дешевле!"],
      ["Ella", "And then let's go to the best café in town.", "А потом пойдём в лучшее кафе в городе."]
    ]
  });

  L({
    id: "a2-5", icon: "🚦", title: "Можно и нужно", topic: "can, have to, must",
    words: [
      ["drive", "водить машину", "Can you drive?", "Ты умеешь водить?", "Драйв — езда; driver — водитель."],
      ["swim", "плавать", "I can't swim.", "Я не умею плавать.", "Swimming pool — бассейн."],
      ["borrow", "брать на время, взаймы", "Can I borrow your pen?", "Можно взять твою ручку?", "Берёшь — потом вернёшь: borrow — «бо́роу»."],
      ["allow", "разрешать", "Dogs are not allowed here.", "Сюда нельзя с собаками.", "«Алло, можно?» — allow, разрешать."],
      ["rule", "правило", "You must follow the rules.", "Нужно соблюдать правила.", "«Рулить» — управлять по правилам."],
      ["wear", "носить (одежду)", "You have to wear a uniform.", "Ты обязан носить форму.", "Footwear — обувь, то, что носят на ногах."],
      ["careful", "осторожный", "Be careful! The floor is wet.", "Осторожно! Пол мокрый.", "care — забота, -ful — полный: «полный заботы»."],
      ["mistake", "ошибка", "Everyone makes mistakes.", "Все ошибаются.", "mis- — «не так», take — «взять»: взял не то."]
    ],
    rule: {
      title: "can, have to, must",
      text: [
        "<b>can</b> — «могу, умею, можно»: I can swim. Can I sit here?",
        "<b>have to</b> — «приходится, нужно» из-за обстоятельств: I have to work on Saturday. <b>must</b> — «должен»: строгое правило или собственное решение: You must stop at a red light."
      ],
      head: ["Слово", "Значение", "Пример"],
      table: [["can / can't", "умею, можно / не умею, нельзя", "I can't drive."], ["have to / has to", "надо (обстоятельства)", "She has to wear a uniform."], ["don't have to", "не обязательно", "You don't have to come."], ["mustn't", "нельзя, запрещено", "You mustn't smoke here."]],
      note: "После can и must глагол без to: I can swim (не can to swim). Осторожно: <b>don't have to</b> — «не нужно», а <b>mustn't</b> — «нельзя».",
      ex: [
        ["Can you help me?", "Можешь мне помочь?"],
        ["I have to get up early tomorrow.", "Завтра мне нужно рано вставать."],
        ["You must be careful on the road.", "На дороге нужно быть осторожным."],
        ["You don't have to pay. It's free.", "Платить не нужно. Это бесплатно."],
        ["You mustn't park here.", "Здесь нельзя парковаться."]
      ],
      mist: [
        ["I can to swim.", "I can swim.", "После can — без to."],
        ["She have to work.", "She has to work.", "С she — has to."],
        ["You mustn't pay, it's free.", "You don't have to pay, it's free.", "«Не нужно» — don't have to; mustn't — «запрещено»."]
      ]
    },
    drills: [
      ["I ___ swim. I learned when I was five.", ["can", "must", "have"], "Я умею плавать. Я научился в пять лет.", "«Умею» — can."],
      ["___ I borrow your pen?", ["Can", "Must", "Have"], "Можно взять твою ручку?", "Просьба «можно?» — Can I…?"],
      ["She ___ wear a uniform at work.", ["has to", "have to", "must to"], "На работе ей приходится носить форму.", "С she — has to."],
      ["You ___ smoke here. It's not allowed.", ["mustn't", "don't have to", "can"], "Здесь нельзя курить. Это запрещено.", "Запрет — mustn't."],
      ["It's Sunday. I ___ get up early.", ["don't have to", "mustn't", "can't to"], "Сегодня воскресенье. Мне не нужно рано вставать.", "«Не обязательно» — don't have to."],
      ["He can ___ a car.", ["drive", "to drive", "drives"], "Он умеет водить машину.", "После can — глагол без to и без -s."],
      ["Be ___! The road is wet.", ["careful", "care", "carefully"], "Осторожно! Дорога мокрая.", "Be + прилагательное: careful."],
      ["Do you ___ work on Saturdays?", ["have to", "must", "can to"], "Тебе приходится работать по субботам?", "Вопрос: Do you have to…?"]
    ],
    order: [["Can I borrow your pen?", "Можно взять твою ручку?"], ["You have to wear a uniform.", "Ты должен носить форму."], ["You mustn't park here.", "Здесь нельзя парковаться."]],
    dialog: [
      ["Tim", "Can I park here?", "Можно здесь припарковаться?"],
      ["Guard", "No, you mustn't. It's not allowed.", "Нет, нельзя. Это запрещено."],
      ["Tim", "Where can I park?", "А где можно?"],
      ["Guard", "There's a car park near the bank. You have to pay there.", "Есть парковка у банка. Там нужно платить."],
      ["Tim", "Do I have to pay by card?", "Нужно платить картой?"],
      ["Guard", "No, you don't have to. Cash is fine.", "Нет, не обязательно. Можно наличными."]
    ]
  });

  L({
    id: "a2-6", icon: "🌍", title: "Опыт и впечатления", topic: "Present Perfect: have you ever…?",
    words: [
      ["ever", "когда-нибудь", "Have you ever been to Italy?", "Ты когда-нибудь был в Италии?", "Forever — навсегда; ever — «когда-либо»."],
      ["once", "однажды, один раз", "I've been there once.", "Я был там один раз.", "one — один, once — один раз."],
      ["already", "уже", "I've already finished.", "Я уже закончил.", "all + ready — «всё готово»: уже."],
      ["yet", "ещё (не); уже (в вопросе)", "Have you eaten yet?", "Ты уже поел?", "Ставится в конце: I haven't finished yet."],
      ["just", "только что", "She has just left.", "Она только что ушла.", "«Джаст» — прямо сейчас, только что."],
      ["abroad", "за границей, за границу", "Have you ever lived abroad?", "Ты когда-нибудь жил за границей?", "a + broad (широкий): в широкий мир — за границу."],
      ["try", "пробовать", "I've never tried sushi.", "Я никогда не пробовал суши.", "«Трай!» — «попробуй!»: try again."],
      ["experience", "опыт", "It was a great experience.", "Это был отличный опыт.", "Эксперимент — от того же корня: опыт."]
    ],
    rule: {
      title: "Present Perfect: «я когда-нибудь…», «уже», «ещё не»",
      text: [
        "Present Perfect — <b>have / has + третья форма глагола</b>. Его используют, когда важен опыт или результат, а не точное время: I have been to Paris (бывал, есть такой опыт).",
        "Третья форма: у правильных — с -ed (visited), у неправильных — своя: be → <b>been</b>, see → <b>seen</b>, eat → <b>eaten</b>."
      ],
      head: ["Кто", "Форма", "Пример"],
      table: [["I / you / we / they", "have + 3-я форма", "I have tried it."], ["he / she / it", "has + 3-я форма", "She has left."], ["Вопрос", "Have you ever…?", "Have you ever been abroad?"]],
      note: "Слова-подсказки: ever, never, already, yet, just. Если есть точное время (yesterday, in 2020) — нужен Past Simple: I went there in 2020.",
      ex: [
        ["I have never been to Italy.", "Я никогда не был в Италии."],
        ["Have you ever tried Indian food?", "Ты когда-нибудь пробовал индийскую еду?"],
        ["She has just called me.", "Она только что мне звонила."],
        ["We haven't bought tickets yet.", "Мы ещё не купили билеты."],
        ["They've already seen this film.", "Они уже видели этот фильм."]
      ],
      mist: [
        ["I have been to Italy last year.", "I went to Italy last year.", "Точное время (last year) — Past Simple."],
        ["She have just left.", "She has just left.", "С she — has."],
        ["Have you ever try sushi?", "Have you ever tried sushi?", "После have — третья форма: tried."]
      ]
    },
    drills: [
      ["Have you ever ___ to London?", ["been", "was", "be"], "Ты когда-нибудь был в Лондоне?", "be → been."],
      ["She ___ just called me.", ["has", "have", "is"], "Она только что мне звонила.", "С she — has."],
      ["I have never ___ sushi.", ["tried", "try", "tryed"], "Я никогда не пробовал суши.", "try → tried."],
      ["We haven't finished ___.", ["yet", "already", "just"], "Мы ещё не закончили.", "«Ещё не» — yet в конце."],
      ["They have ___ seen this film.", ["already", "yet", "ever"], "Они уже видели этот фильм.", "«Уже» в утверждении — already."],
      ["I ___ to Paris in 2019.", ["went", "have been", "have gone"], "Я был в Париже в 2019 году.", "Точный год — Past Simple."],
      ["Has he ever ___ abroad?", ["lived", "live", "living"], "Он когда-нибудь жил за границей?", "После has — третья форма."],
      ["I've ___ this book twice.", ["read", "readed", "reading"], "Я читал эту книгу дважды.", "read — read — read (третья форма читается «рэд»)."]
    ],
    order: [["Have you ever been abroad?", "Ты когда-нибудь был за границей?"], ["I have never tried sushi.", "Я никогда не пробовал суши."], ["She has just left.", "Она только что ушла."]],
    dialog: [
      ["Ivan", "Have you ever been abroad?", "Ты когда-нибудь был за границей?"],
      ["Sara", "Yes, I've been to Turkey and Spain.", "Да, я была в Турции и Испании."],
      ["Ivan", "I've never been abroad.", "А я никогда не был за границей."],
      ["Sara", "Really? You have to try! It's a great experience.", "Правда? Обязательно попробуй! Это отличный опыт."],
      ["Ivan", "I've already started saving money.", "Я уже начал копить деньги."],
      ["Sara", "Great! Have you chosen a country yet?", "Отлично! А страну уже выбрал?"]
    ]
  });
})();
