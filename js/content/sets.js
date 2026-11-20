/* Готовые наборы слов: [слово, перевод, пример]. Наборы независимы от уроков — слова могут повторяться. */
(function () {
  window.SETS = [
    {
      id: "ts-travel", icon: "✈️", title: "В аэропорту и в дороге", desc: "регистрация, посадка, багаж",
      words: [
        ["boarding pass", "посадочный талон", "Can I see your boarding pass, please?"],
        ["check in", "зарегистрироваться (на рейс)", "We need to check in two hours before the flight."],
        ["gate", "выход на посадку", "The flight leaves from gate 12."],
        ["delay", "задержка; задерживать", "There is a two-hour delay."],
        ["luggage", "багаж", "How much luggage can I take?"],
        ["carry-on bag", "ручная кладь", "Only one carry-on bag is allowed."],
        ["departure", "вылет, отправление", "Departure is at 6:40."],
        ["arrival", "прибытие", "Our arrival time is 10 pm."],
        ["customs", "таможня", "We went through customs quickly."],
        ["passport control", "паспортный контроль", "There was a long queue at passport control."],
        ["aisle seat", "место у прохода", "Could I have an aisle seat, please?"],
        ["window seat", "место у окна", "I always ask for a window seat."],
        ["one-way ticket", "билет в одну сторону", "A one-way ticket to Rome, please."],
        ["return ticket", "билет туда и обратно", "A return ticket is cheaper."],
        ["miss a flight", "опоздать на рейс", "Hurry up, or we'll miss our flight!"],
        ["lost and found", "бюро находок", "Ask at the lost and found office."]
      ]
    },
    {
      id: "ts-hotel", icon: "🏨", title: "Гостиница", desc: "бронь, номер, просьбы",
      words: [
        ["reservation", "бронь", "I have a reservation under the name Ivanov."],
        ["book a room", "забронировать номер", "I'd like to book a room for two nights."],
        ["single room", "одноместный номер", "A single room costs 60 euros."],
        ["double room", "двухместный номер", "Do you have a double room with a sea view?"],
        ["check out", "выехать из гостиницы", "What time do we have to check out?"],
        ["key card", "ключ-карта", "My key card doesn't work."],
        ["breakfast included", "завтрак включён", "Is breakfast included?"],
        ["reception", "стойка регистрации", "Please leave your key at reception."],
        ["towel", "полотенце", "Could we have some extra towels?"],
        ["air conditioning", "кондиционер", "The air conditioning is too loud."],
        ["Wi-Fi password", "пароль от вай-фая", "What's the Wi-Fi password?"],
        ["room service", "обслуживание в номере", "I ordered breakfast from room service."],
        ["available", "свободный, в наличии", "Are there any rooms available?"],
        ["floor", "этаж", "Your room is on the fifth floor."],
        ["complaint", "жалоба", "I'd like to make a complaint."],
        ["wake-up call", "звонок-будильник", "Can I have a wake-up call at seven?"]
      ]
    },
    {
      id: "ts-food", icon: "🍽️", title: "В кафе и ресторане", desc: "заказ, счёт, пожелания",
      words: [
        ["menu", "меню", "Could we see the menu, please?"],
        ["order", "заказывать; заказ", "Are you ready to order?"],
        ["starter", "закуска", "For a starter, I'll have the soup."],
        ["main course", "основное блюдо", "What would you like for the main course?"],
        ["dessert", "десерт", "Let's share a dessert."],
        ["the bill", "счёт", "Could we have the bill, please?"],
        ["tip", "чаевые", "Is the tip included?"],
        ["table for two", "столик на двоих", "A table for two, please."],
        ["vegetarian", "вегетарианский", "Do you have any vegetarian dishes?"],
        ["spicy", "острый", "Is this dish very spicy?"],
        ["still water", "вода без газа", "A bottle of still water, please."],
        ["sparkling water", "газированная вода", "I'd prefer sparkling water."],
        ["allergic to", "аллергия на", "I'm allergic to nuts."],
        ["recommend", "советовать, рекомендовать", "What do you recommend?"],
        ["takeaway", "еда навынос", "Is it for here or takeaway?"],
        ["delicious", "очень вкусный", "The soup was delicious!"]
      ]
    },
    {
      id: "ts-shop", icon: "🛍️", title: "Покупки", desc: "размер, цена, возврат",
      words: [
        ["price", "цена", "What's the price of this jacket?"],
        ["How much is it?", "Сколько это стоит?", "How much is it? — It's twenty dollars."],
        ["size", "размер", "Do you have this in a bigger size?"],
        ["try on", "примерять", "Can I try this on?"],
        ["fitting room", "примерочная", "The fitting rooms are over there."],
        ["on sale", "со скидкой, на распродаже", "These shoes are on sale."],
        ["discount", "скидка", "Is there a student discount?"],
        ["receipt", "чек", "Keep the receipt."],
        ["refund", "возврат денег", "I'd like a refund, please."],
        ["exchange", "обменять", "Can I exchange it for a smaller size?"],
        ["pay by card", "платить картой", "Can I pay by card?"],
        ["cash", "наличные", "Sorry, we only take cash."],
        ["change", "сдача", "Here's your change."],
        ["checkout", "касса", "Please pay at the checkout."],
        ["just looking", "просто смотрю", "Can I help you? — No, thanks, I'm just looking."],
        ["out of stock", "нет в наличии", "This model is out of stock."]
      ]
    },
    {
      id: "ts-health", icon: "🩺", title: "Здоровье и врач", desc: "симптомы, аптека, приём",
      words: [
        ["appointment", "запись (к врачу), встреча", "I'd like to make an appointment with a doctor."],
        ["headache", "головная боль", "I have a terrible headache."],
        ["sore throat", "боль в горле", "I've got a sore throat."],
        ["fever", "температура, жар", "She has a high fever."],
        ["cough", "кашель; кашлять", "This cough won't go away."],
        ["feel sick", "тошнить; плохо себя чувствовать", "I feel sick after the boat trip."],
        ["hurt", "болеть (о части тела)", "My back hurts."],
        ["medicine", "лекарство", "Take this medicine twice a day."],
        ["prescription", "рецепт", "You need a prescription for these pills."],
        ["pharmacy", "аптека", "Is there a pharmacy near here?"],
        ["painkiller", "обезболивающее", "Can I have a painkiller?"],
        ["injury", "травма", "It's a sports injury."],
        ["recover", "выздоравливать", "He recovered quickly."],
        ["insurance", "страховка", "Do you have travel insurance?"],
        ["symptoms", "симптомы", "What are your symptoms?"],
        ["get better", "поправляться", "Get better soon!"]
      ]
    },
    {
      id: "ts-work", icon: "💼", title: "Работа и офис", desc: "встречи, письма, собеседование",
      words: [
        ["meeting", "встреча, совещание", "The meeting starts at ten."],
        ["coworker", "коллега", "My coworker helped me with the report."],
        ["report", "отчёт", "I need to finish the report today."],
        ["task", "задача", "I have three tasks for today."],
        ["schedule a call", "назначить созвон", "Let's schedule a call for Monday."],
        ["be in charge of", "отвечать за", "She's in charge of marketing."],
        ["salary", "зарплата", "The salary is paid monthly."],
        ["day off", "выходной", "I'm taking a day off tomorrow."],
        ["apply for", "подавать заявку на", "I'm applying for a new job."],
        ["job interview", "собеседование", "I have a job interview on Friday."],
        ["skills", "навыки", "What skills do you have?"],
        ["remote work", "удалённая работа", "Remote work saves a lot of time."],
        ["follow up", "уточнить, вернуться к вопросу", "I'll follow up by email."],
        ["attach", "прикреплять", "I've attached the file."],
        ["as soon as possible", "как можно скорее", "Please reply as soon as possible."],
        ["promotion", "повышение", "She got a promotion last month."]
      ]
    },
    {
      id: "ts-talk", icon: "💬", title: "Фразы для разговора", desc: "поддержать беседу, переспросить",
      words: [
        ["How's it going?", "Как дела?", "Hi Tom! How's it going?"],
        ["Not bad, thanks.", "Неплохо, спасибо.", "How are you? — Not bad, thanks."],
        ["What do you do?", "Кем ты работаешь?", "So, what do you do? — I'm a designer."],
        ["Where are you from?", "Откуда ты?", "Where are you from? — I'm from Russia."],
        ["Nice to see you again!", "Рад снова тебя видеть!", "Anna! Nice to see you again!"],
        ["Could you repeat that?", "Можете повторить?", "Sorry, could you repeat that? I didn't catch it."],
        ["Could you speak more slowly?", "Можете говорить помедленнее?", "Could you speak more slowly, please?"],
        ["What does it mean?", "Что это значит?", "“Awkward”? What does it mean?"],
        ["I see.", "Понятно.", "It's closed on Mondays. — I see."],
        ["That sounds great!", "Звучит здорово!", "Let's go to the beach! — That sounds great!"],
        ["No worries.", "Ничего страшного.", "Sorry I'm late! — No worries."],
        ["I'm not sure.", "Я не уверен.", "Is it far? — I'm not sure."],
        ["by the way", "кстати", "By the way, did you call Mike?"],
        ["anyway", "в общем, ладно", "Anyway, I have to go now."],
        ["Take care!", "Береги себя! (на прощание)", "See you next week. Take care!"],
        ["Catch you later!", "Увидимся!", "I'm off. Catch you later!"]
      ]
    },
    {
      id: "ts-home", icon: "🏠", title: "Дом и быт", desc: "аренда, уборка, поломки",
      words: [
        ["rent", "арендовать; аренда", "We rent a flat in the centre."],
        ["flatmate", "сосед по квартире", "My flatmate is very tidy."],
        ["bills", "счета (за квартиру)", "The bills are included in the rent."],
        ["washing machine", "стиральная машина", "The washing machine is broken."],
        ["do the dishes", "мыть посуду", "It's your turn to do the dishes."],
        ["do the laundry", "стирать", "I do the laundry on Sundays."],
        ["vacuum", "пылесосить", "Can you vacuum the living room?"],
        ["tidy up", "прибраться", "Let's tidy up before the guests come."],
        ["take out the rubbish", "вынести мусор", "Don't forget to take out the rubbish."],
        ["neighbour", "сосед", "Our neighbours are very friendly."],
        ["fix", "чинить", "Can you fix the tap?"],
        ["leak", "течь; протекать", "There's a leak in the bathroom."],
        ["heating", "отопление", "The heating doesn't work."],
        ["move in", "въехать", "We moved in last week."],
        ["furniture", "мебель", "The flat comes with furniture."],
        ["cosy", "уютный", "What a cosy room!"]
      ]
    },
    {
      id: "ts-feel", icon: "😊", title: "Чувства и характер", desc: "как описать себя и других",
      words: [
        ["excited", "радостно взволнован, в предвкушении", "I'm so excited about the trip!"],
        ["nervous", "нервничающий", "I'm nervous before exams."],
        ["upset", "расстроенный", "She was upset about the news."],
        ["annoyed", "раздражённый", "I'm annoyed with the noise."],
        ["worried", "обеспокоенный", "Don't be worried, everything is fine."],
        ["proud", "гордый", "I'm proud of you!"],
        ["embarrassed", "смущённый", "I was so embarrassed!"],
        ["relieved", "испытывающий облегчение", "I'm relieved it's over."],
        ["bored", "скучающий", "I'm bored. Let's do something."],
        ["confident", "уверенный", "She feels confident at work."],
        ["shy", "застенчивый", "He's shy with new people."],
        ["friendly", "дружелюбный", "The locals are very friendly."],
        ["lazy", "ленивый", "I feel lazy today."],
        ["hard-working", "трудолюбивый", "She's very hard-working."],
        ["patient", "терпеливый", "Be patient, it takes time."],
        ["reliable", "надёжный", "Tom is a reliable friend."]
      ]
    },
    {
      id: "ts-phrasal", icon: "🔁", title: "Частые фразовые глаголы", desc: "16 глаголов на каждый день",
      words: [
        ["get up", "вставать", "I get up at seven."],
        ["look for", "искать", "I'm looking for my keys."],
        ["find out", "узнать", "I found out the truth."],
        ["turn on", "включить", "Turn on the light, please."],
        ["turn off", "выключить", "Turn off your phone."],
        ["pick up", "забрать (кого-то); поднять", "I'll pick you up at six."],
        ["put on", "надеть", "Put on your coat, it's cold."],
        ["take off", "снять (одежду); взлететь", "Take off your shoes, please."],
        ["call back", "перезвонить", "I'll call you back later."],
        ["go out", "сходить куда-нибудь", "Let's go out tonight."],
        ["come back", "вернуться", "When are you coming back?"],
        ["look after", "присматривать", "Can you look after my cat?"],
        ["set up", "настроить, организовать", "I need to set up my new phone."],
        ["calm down", "успокоиться", "Calm down, it's not a big deal."],
        ["work out", "тренироваться; получиться", "I work out three times a week."],
        ["check out", "посмотреть, заценить", "Check out this video!"]
      ]
    }
  ];
})();
