/* Complete English ↔ Russian reading layer for Victory's Universe. */
const RU_TRANSLATIONS = new Map();
const addRu = (english, russian) => RU_TRANSLATIONS.set(String(english).replace(/\s+/g,' ').trim(), russian);

[
  ['For Victory — Happy Birthday','Для Виктори — С днём рождения'],
  ['Presents','представляет'],
  ['tap to skip','нажми, чтобы пропустить'],
  ['universe explored','вселенная исследована'],
  ['tap me','нажми на меня'],
  ['I made something for you...','Я сделал кое-что для тебя...'],
  ['Happy Birthday,','С днём рождения,'],
  ['a love letter from across the world 🤍','любовное письмо через весь мир 🤍'],
  ['Continue','Продолжить'],
  ['welcome to','добро пожаловать во'],
  ["Victory's Universe",'Вселенную Виктори'],
  ['Good day, Victory.','Добрый день, Виктори.'],
  ['Your universe has been waiting.','Твоя вселенная ждала тебя.'],
  ['Five little worlds made from the things I remember, admire and still hope for. Choose anywhere to begin.','Пять маленьких миров, созданных из того, что я помню, чем восхищаюсь и на что всё ещё надеюсь. Начни с любого.'],
  ['tap a planet to enter · drag it to rearrange the universe','нажми на планету, чтобы войти · перетащи её, чтобы изменить вселенную'],
  ['Memories','Воспоминания'],
  ['the things I kept','то, что я сохранил'],
  ['Things I Love','Что я люблю'],
  ['About You','в тебе'],
  ['spin for a reason','крути ради причины'],
  ['Your Best','Твои лучшие'],
  ['Qualities','качества'],
  ['the light I see','свет, который я вижу'],
  ['Our Moments','Наши моменты'],
  ['ASABA, NIGERIA ✦ RUSSIA','АСАБА, НИГЕРИЯ ✦ РОССИЯ'],
  ['Nigeria ↔ Russia','Нигерия ↔ Россия'],
  ['Your Future','Твоё будущее'],
  ['and maybe ours','и, возможно, наше'],
  ["Tonight's bright stars · Russia UTC+5 estimate",'Яркие звёзды сегодня · приблизительно Россия UTC+5'],
  ["Tonight's bright stars · your current sky",'Яркие звёзды сегодня · твоё нынешнее небо'],
  ['match the stars to your exact sky','сопоставить звёзды с твоим небом'],
  ['✦ call your meteor','✦ позвать свой метеор'],
  ['💌 open your letter','💌 открыть твоё письмо'],
  ['← universe','← вселенная'],
  ['this is still one of my favorite pictures of you','это всё ещё одна из моих любимых твоих фотографий'],
  ['Our first call—not every sentence, but the nervous excitement and how quickly your voice began to feel familiar.','Наш первый звонок — я не помню каждое предложение, но помню волнение и то, как быстро твой голос стал родным.'],
  ['The video calls where seeing your face made the kilometres between Nigeria and Russia feel less powerful.','Видеозвонки, во время которых твоё лицо делало километры между Нигерией и Россией менее значительными.'],
  ['Every random voice note and simple “goodnight” that looked small on a screen but never felt small to me.','Каждое случайное голосовое и простое «спокойной ночи», которое казалось маленьким на экране, но никогда не было маленьким для меня.'],
  ['That little pause before hanging up, when the conversation was over but neither of us seemed ready to leave.','Та короткая пауза перед завершением звонка, когда разговор уже закончился, но никто из нас не был готов уйти.'],
  ['as close as I remember it','насколько я это помню'],
  ['The conversation that started everything','Разговор, с которого всё началось'],
  ['I cannot pretend I remember every punctuation mark, but I remember the shape of it.','Я не буду притворяться, что помню каждый знак препинания, но я помню, как всё было.'],
  ['I got your number from Pelumi','Я взяла твой номер у Пелуми'],
  ['Meanwhile, I secretly went to confirm with Pelumi 😭','А я тем временем тайком пошёл уточнять у Пелуми 😭'],
  ["I’m short—but not too short—and the first thing you’ll probably notice is my ass 😭",'Я невысокая — но не слишком — и первое, что ты, наверное, заметишь, будет моя попа 😭'],
  ['Safe to say, that introduction was impossible to forget.','Можно смело сказать: такое знакомство невозможно забыть.'],
  ['to the Victory I first met','той Виктори, которую я встретил впервые'],
  ['You became so much more than my first impression','Ты стала гораздо большим, чем моё первое впечатление'],
  ['I still laugh because, yes, I noticed your ass first—you practically warned me to. But I had no idea I was meeting one of the most caring and loving souls I would ever know. The person I see now is stronger, wiser and more mature than the girl I met in 2023. I appreciate you deeply, I am genuinely proud of you, and I hope life gives you more wins than you have had to fight for. I hope every honest desire in your heart finds its way to you.','Я до сих пор смеюсь, потому что да — сначала я заметил твою попу; ты практически предупредила меня об этом. Но я не знал, что встречаю одну из самых заботливых и любящих душ в своей жизни. Сейчас я вижу человека сильнее, мудрее и взрослее той девушки, которую встретил в 2023 году. Я очень ценю тебя, искренне горжусь тобой и надеюсь, что жизнь подарит тебе больше побед, чем тебе пришлось за них бороться. Пусть каждое искреннее желание твоего сердца найдёт дорогу к тебе.'],
  ['letters for later','письма на потом'],
  ['Open when...','Открой, когда...'],
  ['Six small pieces of me for the moments I cannot be beside you.','Шесть маленьких частиц меня для моментов, когда я не могу быть рядом.'],
  ['you miss me','ты скучаешь по мне'],
  ['you feel sad','тебе грустно'],
  ['you cannot sleep','ты не можешь уснуть'],
  ['you doubt yourself','ты сомневаешься в себе'],
  ['the day was hard','день был тяжёлым'],
  ['you want to remember us','ты хочешь вспомнить нас'],
  ['Things I Love About You','Что я люблю в тебе'],
  ['tap the wheel to spin','нажми на колесо'],
  ['one hundred little truths','сто маленьких истин'],
  ['100 Reasons I Love You','100 причин, почему я люблю тебя'],
  ['Tap slowly. I wrote every one with you in mind.','Нажимай не спеша. Каждую я писал, думая о тебе.'],
  ['reason','причина'],
  ['of 100','из 100'],
  ['tap to reveal the first one','нажми, чтобы открыть первую'],
  ['each tap opens another','каждое нажатие открывает следующую'],
  ['just us being us','просто мы'],
  ['Would you rather...','Что бы ты выбрала...'],
  ['next question →','следующий вопрос →'],
  ['play again ↻','сыграть снова ↻'],
  ['for the distance','против расстояния'],
  ['One hug, sent properly','Одно настоящее объятие'],
  ['Hold the button. Let your phone do the tiny part distance will not let me do myself.','Удерживай кнопку. Пусть телефон сделает хотя бы малую часть того, чего расстояние не позволяет сделать мне.'],
  ['hold to receive a hug','удерживай, чтобы получить объятие'],
  ['a warm hug, across every kilometre 🤍','тёплое объятие через каждый километр 🤍'],
  ['Your Best Qualities','Твои лучшие качества'],
  ['Honest','Честная'],
  ['Even when it would be easier not to be.','Даже когда проще было бы промолчать.'],
  ['Resilient','Стойкая'],
  ['You keep going no matter what gets thrown at you.','Ты продолжаешь идти, что бы ни подбрасывала жизнь.'],
  ['Warm','Тёплая'],
  ['People feel safe just being around you.','Рядом с тобой люди чувствуют себя в безопасности.'],
  ['Loyal','Верная'],
  ['You show up for the people you actually care about.','Ты рядом с теми, кто тебе действительно дорог.'],
  ['Growth-minded','Стремящаяся к росту'],
  ['Always working on becoming a better version of yourself.','Ты всегда работаешь над тем, чтобы стать лучшей версией себя.'],
  ['Big-hearted','С большим сердцем'],
  ['You give more than you probably even realize.','Ты отдаёшь больше, чем, возможно, сама замечаешь.'],
  ['the wins that deserve to be named','победы, которые нужно назвать'],
  ['Your small wins were never actually small','Твои маленькие победы никогда не были маленькими'],
  ['People usually notice the destination. I notice how many times you had to choose not to give up before you got there.','Люди обычно замечают результат. Я замечаю, сколько раз тебе пришлось выбирать не сдаваться, прежде чем ты дошла до него.'],
  ['You waited without surrendering','Ты ждала, но не сдалась'],
  ['Almost two years outside school could have made you stop believing. You kept going.','Почти два года вне учёбы могли заставить тебя перестать верить. Но ты продолжала идти.'],
  ['You fought for the move','Ты боролась за переезд'],
  ['Living abroad did not simply happen to you. You wanted it, worked for it and made it real.','Жизнь за границей не просто случилась с тобой. Ты хотела этого, работала ради этого и сделала это реальностью.'],
  ['You travelled on your own','Ты уехала одна'],
  ['You crossed countries and began again with more courage than most people ever have to find.','Ты пересекла границы и начала заново, проявив смелость, которую многим никогда не приходится искать в себе.'],
  ['You started learning Russian','Ты начала учить русский'],
  ['A whole new language is now one more bridge between you and the medical future you want.','Новый язык стал ещё одним мостом между тобой и медицинским будущим, которого ты хочешь.'],
  ['You adapted','Ты адаптировалась'],
  ['New place, new language, new routines—and you found ways to keep becoming yourself inside all of it.','Новое место, новый язык, новые привычки — и среди всего этого ты продолжала становиться собой.'],
  ['You survived a health chapter','Ты пережила трудный период со здоровьем'],
  ['Your body put you through a frightening, painful season. You came through it.','Твоё тело провело тебя через страшный и болезненный период. Ты прошла через него.'],
  ['You outgrew darker seasons','Ты переросла тёмные времена'],
  ['The difficult days do not seem to own you the way they once did. That growth matters.','Трудные дни больше не владеют тобой так, как раньше. Этот рост имеет значение.'],
  ['You became stronger and wiser','Ты стала сильнее и мудрее'],
  ['You are not the same person I met four years ago. The change in you genuinely impresses me.','Ты уже не та, кого я встретил четыре года назад. Твои перемены искренне восхищают меня.'],
  ['who you are outside of us','кто ты вне нашей истории'],
  ['I can see the surgeon you are fighting to become','Я вижу хирурга, которым ты борешься стать'],
  ['Your dream is not just a title. It is the admission you kept chasing, the years you refused to treat as wasted, the Russian you are learning now and the life you crossed a border to build. You have the steadiness, strength and care the work will ask from you.','Твоя мечта — не просто звание. Это поступление, к которому ты продолжала идти; годы, которые ты отказалась считать потерянными; русский, который ты сейчас учишь; и жизнь, ради которой пересекла границу. В тебе есть спокойствие, сила и забота, которых потребует эта работа.'],
  ['What makes me proudest is not only that you moved abroad. It is your strength and adaptability—the way you keep meeting a new version of life and learning how to stand inside it.','Больше всего я горжусь не только тем, что ты переехала. Я горжусь твоей силой и адаптивностью — тем, как ты встречаешь каждую новую версию жизни и учишься уверенно стоять в ней.'],
  ['Future surgeon, currently in progress','Будущий хирург — работа уже идёт'],
  ['Russian first. Admission next. White coat after that. One hard-earned step at a time.','Сначала русский. Затем поступление. Потом белый халат. Один заслуженный шаг за другим.'],
  ['13 October · Air sign','13 октября · знак Воздуха'],
  ['Libra','Весы'],
  ['They say Libra is drawn to balance, warmth and beauty. Maybe that explains a little of you—but no zodiac card could hold the full person I know:','Говорят, Весы тянутся к равновесию, теплу и красоте. Возможно, это немного объясняет тебя — но ни одна карточка зодиака не вместит человека, которого знаю я:'],
  ['honest enough to tell the truth, resilient enough to keep growing, and warm enough to make ordinary moments feel important.','достаточно честного, чтобы говорить правду; достаточно стойкого, чтобы продолжать расти; и достаточно тёплого, чтобы обычные моменты становились важными.'],
  ['The stars may call you Libra. I just call you unforgettable.','Звёзды называют тебя Весами. Я называю тебя незабываемой.']
].forEach(([en,ru])=>addRu(en,ru));

const ONE_HUNDRED_REASONS_RU = [
  'Твоя настоящая улыбка меняет всё настроение вокруг.','Твой голос способен сделать обычный момент важным.','Твой искренний смех невозможно не любить.','Твои глаза говорят раньше слов.','Ты тёплая без необходимости это изображать.','Ты продолжаешь идти, даже когда жизнь требует слишком многого.','Твоя честность делает каждый настоящий разговор значимым.','Ты глубоко заботишься, даже когда пытаешься это скрыть.','Ты заставляешь расстояние казаться меньше.','Ты так естественно стала частью моей жизни.',
  'Простое «спокойной ночи» от тебя остаётся со мной.','Ты превращаешь видеозвонки в общую комнату.','Ты прекрасно сложная — с тобой никогда не скучно.','Ты постоянно становишься сильнее.','Ты замечаешь детали, которые другие пропускают.','В тебе есть мягкость, которую стоит защищать.','Ты умеешь делать привычное новым.','Ты запоминаешься, даже не стараясь.','Ты заставляешь меня лучше понимать любовь.','Рядом с тобой мне хочется слушать внимательнее.',
  'Твоя стойкость заслуживает большей оценки, чем ты ей даёшь.','Ты можешь быть игривой и серьёзной в одном разговоре.','У тебя свой особенный взгляд на мир.','Рядом с тобой молчание не кажется неловким.','На твоё лицо мне никогда не надоедает смотреть.','Твоё присутствие может перезапустить тяжёлый день.','Ты достаточно смелая, чтобы говорить трудную правду.','В тебе есть тихая сила.','Ты всё ещё заставляешь меня приятно волноваться.','Ты превращаешь маленькие воспоминания в постоянные.',
  'Ты не боишься перерасти прежнюю версию себя.','Твоя забота всегда личная, а не общая.','Твои реакции во время звонков стали любимыми воспоминаниями.','Твоя красота выдерживает любой ракурс камеры.','Ты умеешь начинать заново.','Ты добавляешь краски в разговоры на расстоянии.','Мне хочется знать каждую часть твоего дня.','Ради тебя стоит пересекать часовые пояса.','Ты делаешь обычные сообщения достойными ожидания.','Ты сильнее дней, которые пытались сделать тебя меньше.',
  'Под твоей уверенностью есть нежность.','Твои особенности делают тебя только тобой.','Ты заставляешь меня улыбаться экрану как дурак.','Твоё доверие всегда было для меня серьёзным.','С тобой привязанность ощущается как внимание.','У тебя есть мечты, которые я искренне хочу увидеть исполненными.','Ты всё ещё растёшь, и это прекрасно.','Ты делаешь честность необходимой.','Ты научила меня, что любовь должна включать терпение.','В моей истории тебя нельзя заменить.',
  'Ты пережила перемены, которые могли сделать тебя жёсткой.','И всё равно сохранила нежность.','Ты заставляешь меня помнить точные чувства, а не только события.','Ты превращаешь голосовое в то, что хочется переслушать.','Тобой легко восхищаться и невозможно описать полностью.','Ты заслуживаешь покоя, который не нужно зарабатывать.','Ты заставляешь меня заботиться о местах просто потому, что ты там.','Ты можешь быть далеко и всё равно ощущаться рядом.','Твоё счастье действительно важно для меня.','Твоя грусть заставляет меня мечтать о кнопке выключения расстояния.',
  'Ради тебя дни рождения стоят построенных вселенных.','С тобой связаны одни из самых нежных моих воспоминаний.','Ты умеешь становиться той деталью, которую я помню лучше всего.','Ты заставляешь надеяться осторожнее, но не слабее.','Твои границы научили меня любить уважительнее.','Ты заслуживаешь постоянства, безопасности и спокойствия.','Ты ценна и в продуктивные дни, и в дни без сил.','С твоим сердцем нужно обращаться бережно.','Ты делаешь будущее представимым.','Ты придаёшь прошлому смысл, не удерживая меня в нём.',
  'Ты достаточно честная, чтобы отказаться от того, что тебе не подходит.','У тебя есть смелость выбирать себя.','Ты можешь быть уроком и благословением, не сводясь ни к одному из них.','Ты заставляешь меня хотеть стать безопаснее для любимых людей.','Ты красива нарядная и просто существующая.','Ты превращаешь разницу во времени в маленькую техническую проблему.','Ты подарила мне звонки, которые я помню по ощущениям.','Ты придала словам «спокойной ночи» больше веса, чем они должны иметь.','Ты доказываешь, что связь через экран может быть настоящей.','Из-за тебя я благодарен, что технологии появились вовремя.',
  'Твой смех я узнаю где угодно.','С тобой привязанность всегда конкретна.','Ты не идеальна — значит, я полюбил настоящего человека.','Ты позволила мне увидеть части тебя, которые мир видит не всегда.','После трудных глав ты заслуживаешь мягкой жизни.','Мне хочется праздновать твои победы как свои.','У тебя хватает силы построить жизнь в новом месте.','Ты умеешь держаться, даже чувствуя неуверенность.','Ты делаешь «может быть, когда-нибудь» достойным тихой надежды.','Ты всё ещё тот человек, которому я желаю хорошего.',
  'Ты изменила меня так, что я до сих пор учусь это называть.','Ты показала, к чему приводит любовь без терпения.','Ты дала мне причины учиться, извиняться и расти.','С тобой искренность важнее идеальных слов.','Ради тебя стоит говорить трудную правду.','Ты целая вселенная, а не роль в моей жизни.','Ты заслуживаешь быть увиденной без давления.','Ты существуешь — и мой мир действительно изменился из-за тебя.','После девяноста девяти причин у меня всё ещё есть ещё.','Потому что ты Амарачи — Виктори — и такая ты одна.'
];
oneHundredReasons.forEach((reason,index)=>addRu(reason,ONE_HUNDRED_REASONS_RU[index]));

[
  ['calculating…','считаем…'],
  ['20 December 2022','20 декабря 2022'],
  ['Your browser cannot play this voice memo.','Браузер не может воспроизвести это голосовое сообщение.'],
  ['Good morning, Victory.','Доброе утро, Виктори.'],['Your universe woke up with you.','Твоя вселенная проснулась вместе с тобой.'],
  ['Good afternoon, Victory.','Добрый день, Виктори.'],['There is still light waiting for you here.','Здесь тебя всё ещё ждёт свет.'],
  ['Good evening, Victory.','Добрый вечер, Виктори.'],['The stars are turning on for you.','Звёзды зажигаются для тебя.'],
  ["It's late there, Victory.",'У тебя уже поздно, Виктори.'],['Your universe is keeping the lights low.','Твоя вселенная приглушила свет.'],
  ['asking your browser…','спрашиваем разрешение у браузера…'],
  ['your current sky','твоё нынешнее небо'],
  ['Updated for where you are now. Your coordinates were not saved or shared.','Обновлено для твоего текущего места. Координаты не были сохранены или переданы.'],
  ["Tonight's bright stars · your current location",'Яркие звёзды сегодня · твоё текущее местоположение'],
  ['location updated privately','местоположение обновлено конфиденциально'],
  ['stars matched to your sky ✓','звёзды совпали с твоим небом ✓'],
  ['use your actual location for your side','использовать твоё точное местоположение'],
  ['match the stars to your exact sky','сопоставить звёзды с твоим небом'],
  ['Location was not shared. The Russia UTC+5 estimate is still showing.','Местоположение не передано. По-прежнему показана оценка для России UTC+5.'],
  ['This browser does not support location. The four-hour-ahead Russia estimate will stay visible.','Этот браузер не поддерживает геолокацию. Останется приблизительное местоположение в России с разницей в четыре часа.'],
  ['location unavailable on this browser','геолокация недоступна в этом браузере'],
  ['sky unavailable','небо недоступно'],['check again when connected','проверь снова после подключения'],
  ['clear sky','ясно'],['mostly clear','в основном ясно'],['partly cloudy','переменная облачность'],['overcast','пасмурно'],['foggy','туман'],
  ['light drizzle','лёгкая морось'],['drizzle','морось'],['heavy drizzle','сильная морось'],['light rain','лёгкий дождь'],['rain','дождь'],['heavy rain','сильный дождь'],
  ['light snow','лёгкий снег'],['snow','снег'],['heavy snow','сильный снег'],['rain showers','ливни'],['showers','ливень'],['thunderstorm','гроза'],
  ['voice memo loads here when favour-voice-memo.mp3 is beside this file','голосовое появится здесь, когда файл favour-voice-memo.mp3 будет рядом с сайтом'],
  ['from Favour, across every kilometre','от Фавора, через каждый километр'],
  ['keep this for the days you need to hear it again','сохрани это для дней, когда захочется услышать снова'],
  ['listening... say your wish','слушаю... произнеси своё желание'],
  ['wrapping up...','заканчиваем...'],
  ["got it — here's your wish",'готово — вот твоё желание'],
  ["didn't catch much, but that's okay",'почти ничего не услышал, но всё в порядке'],
  ["voice recording isn't supported on this browser",'этот браузер не поддерживает запись голоса'],
  ["couldn't get mic access — but I hope your wish comes true anyway",'не удалось получить доступ к микрофону — но пусть желание всё равно сбудется'],
  ['Write something first—whatever feels honest.','Сначала напиши что-нибудь — всё, что кажется искренним.'],
  ['Saved privately on this device. Nothing was sent.','Сохранено лично на этом устройстве. Ничего не отправлено.'],
  ['This browser blocked private storage. You can still share or copy it.','Браузер заблокировал личное хранение. Текст всё ещё можно скопировать или отправить.'],
  ['Your reply is ready to travel wherever you chose.','Твой ответ готов отправиться туда, куда ты выбрала.'],
  ['Copied. You can paste it into your message to Favour.','Скопировано. Можешь вставить это в сообщение Фавору.'],
  ['Nothing was shared.','Ничего не отправлено.'],
  ['Select and copy your reply, then send it wherever you want.','Выдели и скопируй ответ, затем отправь его куда захочешь.'],
  ['Sharing was unavailable, but your words are still here.','Отправка недоступна, но твои слова остались здесь.'],
  ['preparing your keepsake…','готовим твою открытку…'],
  ['Saved—a piece of the universe for your camera roll.','Сохранено — частица вселенной в твоей галерее.'],
  ['The card could not be created on this browser.','В этом браузере не удалось создать открытку.'],
  ['The handwriting image could not load.','Не удалось загрузить изображение с почерком.'],
  ['the light is ready for you','свет готов для тебя'],
  ['open your returning star','открыть вернувшуюся звезду'],
  ['You came back. The star kept its promise.','Ты вернулась. Звезда сдержала обещание.'],
  ['welcome back, Victory','с возвращением, Виктори'],
  ['Ibadan · first meeting','Ибадан · первая встреча'],
  ['Bread, Bama and Milo—the food combination I may never recover from 😭','Хлеб, Bama и Milo — сочетание, после которого я, возможно, никогда не оправлюсь 😭'],
  ['Port Harcourt · a private memory','Порт-Харкорт · личное воспоминание'],
  ['A night we both remember. The personal details stay ours.','Ночь, которую мы оба помним. Личные детали остаются между нами.'],
  ['Asaba · where Favour finished this','Асаба · где Фавор закончил это'],
  ['The Nigerian side of the universe now.','Теперь нигерийская сторона вселенной.'],
  ['Russia · Victory building her future','Россия · Виктори строит своё будущее'],
  ['A broad UTC+5 estimate, never an exact address.','Общая оценка UTC+5, а не точный адрес.'],
  ['United Kingdom · maybe','Великобритания · возможно'],
  ['For the accent you like—and whatever dream waits after it.','Ради любимого акцента — и любой мечты, которая ждёт после него.'],
  ['Maldives · maybe','Мальдивы · возможно'],
  ['Clear water, proper rest and no admission stress.','Прозрачная вода, настоящий отдых и никакого стресса из-за поступления.'],
  ['The map appears when the site is online. The memory cards below still tell the story.','Карта появится, когда сайт будет онлайн. Карточки ниже всё равно рассказывают историю.']
].forEach(([en,ru])=>addRu(en,ru));

const RU_ATTRIBUTE_TRANSLATIONS = new Map([
  ['Write whatever feels honest…','Напиши всё, что кажется искренним…'],
  ["Switch between English and Russian",'Переключить английский и русский'],
  ["Explore Victory's universe",'Исследовать вселенную Виктори'],
  ['Open Memories','Открыть воспоминания'],
  ['Open Things I Love About You','Открыть то, что я люблю в тебе'],
  ['Open Your Best Qualities','Открыть твои лучшие качества'],
  ['Open Our Moments','Открыть наши моменты'],
  ['Open Your Future','Открыть твоё будущее'],
  ['How much Favour loves you','Как сильно Фавор любит тебя'],
  ['Toggle soft dark mode','Переключить мягкий тёмный режим'],
  ['Record your birthday wish','Записать желание на день рождения'],
  ['Play','Воспроизвести'],
  ['Play or pause Like I Want You by Giveon','Воспроизвести или поставить на паузу Like I Want You от Giveon']
]);

const RU_VALUES = new Set([...RU_TRANSLATIONS.values()].map(value=>String(value).replace(/\s+/g,' ').trim()));
const normalizeLanguageText = value => String(value || '').replace(/\s+/g,' ').trim();
let languageObserver = null;

function preserveNodeSpacing(original,replacement) {
  const leading=(original.match(/^\s*/) || [''])[0], trailing=(original.match(/\s*$/) || [''])[0];
  return leading+replacement+trailing;
}

function translateTextNode(node) {
  if (!node || node.nodeType!==Node.TEXT_NODE || !normalizeLanguageText(node.nodeValue)) return;
  const parent=node.parentElement;
  if (!parent || parent.closest('script,style,[lang="ru"],.leaflet-control-attribution')) return;
  if (currentLanguage==='en') {
    if (node.__victoryEnglish) node.nodeValue=node.__victoryEnglish;
    return;
  }
  const normalized=normalizeLanguageText(node.nodeValue);
  if (RU_VALUES.has(normalized)) return;
  const translated=RU_TRANSLATIONS.get(normalized);
  if (!translated) return;
  node.__victoryEnglish=node.nodeValue;
  node.nodeValue=preserveNodeSpacing(node.nodeValue,translated);
}

function walkLanguage(root=document.body) {
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];let node;
  while((node=walker.nextNode()))nodes.push(node);
  nodes.forEach(translateTextNode);
}

function translateAttributes() {
  document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(element=>{
    ['placeholder','aria-label','title'].forEach(attribute=>{
      if(!element.hasAttribute(attribute))return;
      const storage='victoryEn'+attribute.replace('-','');
      if(!element.dataset[storage])element.dataset[storage]=element.getAttribute(attribute);
      const english=element.dataset[storage];
      element.setAttribute(attribute,currentLanguage==='ru'?(RU_ATTRIBUTE_TRANSLATIONS.get(english)||english):english);
    });
  });
}

const WEATHER_EN={...weatherDescriptions};
const WEATHER_RU={0:'ясно',1:'в основном ясно',2:'переменная облачность',3:'пасмурно',45:'туман',48:'ледяной туман',51:'лёгкая морось',53:'морось',55:'сильная морось',56:'ледяная морось',57:'сильная ледяная морось',61:'лёгкий дождь',63:'дождь',65:'сильный дождь',66:'ледяной дождь',67:'сильный ледяной дождь',71:'лёгкий снег',73:'снег',75:'сильный снег',77:'снежная крупа',80:'ливни',81:'ливень',82:'сильный ливень',85:'снежные заряды',86:'сильные снежные заряды',95:'гроза',96:'гроза с градом',99:'сильная гроза с градом'};

function refreshLanguageDependentContent() {
  document.documentElement.lang=currentLanguage;
  Object.keys(weatherDescriptions).forEach(code=>weatherDescriptions[code]=(currentLanguage==='ru'?WEATHER_RU:WEATHER_EN)[code]);
  renderTwentyWishes();renderBucketList();paintFortune();
  paintWyr();updateTimeGreeting();updateReturnCapsule();updateTimeTogether();
  fortuneBtn.textContent=currentLanguage==='ru'?'вытянуть другое предсказание':'draw another fortune';
  readerToggle.textContent=document.body.classList.contains('reader-mode')?(currentLanguage==='ru'?'обычный вид':'normal view'):(currentLanguage==='ru'?'режим чтения':'reader mode');
  letterParas.forEach(paragraph=>{
    const english=paragraph.dataset.englishText || paragraph.textContent.trim();
    paragraph.dataset.englishText=english;
    const selected=currentLanguage==='ru'?(RU_TRANSLATIONS.get(normalizeLanguageText(english))||english):english;
    paragraph.setAttribute('data-text',selected);
    paragraph.textContent=selected;
  });
  if(letterCard.classList.contains('opening')){skipTyping=true;skipTypingBtn.hidden=true;}
  updateBucketProgress();
  if(journeyMapInstance){journeyMapInstance.remove();journeyMapInstance=null;document.getElementById('journeyMap').innerHTML='';ensureJourneyMap();}
  if(dreamMapInstance){dreamMapInstance.remove();dreamMapInstance=null;document.getElementById('dreamMap').innerHTML='';ensureDreamMap();}
  loadBothSkies(currentSkyPlace);
  const isExact=currentSkyPlace.label==='your current sky';
  const km=Math.round(haversineKm(ASABA,currentSkyPlace)).toLocaleString();
  distanceValue.textContent=km+(currentLanguage==='ru'?' км':' km');
  if(currentLanguage==='ru')distanceNote.textContent=isExact?`Примерное расстояние по прямой от Асабы до твоего текущего места: ${km} км. Координаты остаются на этом устройстве.`:`Примерное расстояние по прямой от Асабы до региона России UTC+5: ${km} км. Нажми ниже для более точной оценки.`;
  else showDistance(currentSkyPlace,isExact);
  languageToggle.textContent=currentLanguage==='ru'?'RU · EN':'EN · RU';
  languageToggle.setAttribute('aria-pressed',String(currentLanguage==='ru'));
  document.title=currentLanguage==='ru'?'Для Виктори — С днём рождения':'For Victory — Happy Birthday';
}

function applyLanguage(language,persist=true) {
  currentLanguage=language==='ru'?'ru':'en';
  if(languageObserver)languageObserver.disconnect();
  if(currentLanguage==='en')walkLanguage(document.body);
  refreshLanguageDependentContent();
  translateAttributes();
  if(currentLanguage==='ru')walkLanguage(document.body);
  if(persist){try{localStorage.setItem('victory-language',currentLanguage);}catch(err){}}
  languageObserver=new MutationObserver(mutations=>{
    if(currentLanguage!=='ru')return;
    mutations.forEach(mutation=>{
      if(mutation.type==='characterData')translateTextNode(mutation.target);
      mutation.addedNodes.forEach(added=>{
        if(added.nodeType===Node.TEXT_NODE)translateTextNode(added);
        else if(added.nodeType===Node.ELEMENT_NODE)walkLanguage(added);
      });
    });
  });
  languageObserver.observe(document.body,{subtree:true,childList:true,characterData:true});
}

languageToggle.addEventListener('click',()=>applyLanguage(currentLanguage==='en'?'ru':'en'));



[
  ['Open when you miss me','Открой, когда скучаешь по мне'],
  ['Close your eyes for a second and remember our first call—the nerves fading, your voice becoming familiar, and that tiny reluctance to hang up. Distance can keep two people in different rooms, but it cannot delete what was real. Somewhere in Nigeria, I am grateful that I got to know your voice, your laugh and the person behind them. You are missed too.','Закрой глаза на секунду и вспомни наш первый звонок: как уходило волнение, твой голос становился знакомым и как не хотелось заканчивать разговор. Расстояние может держать людей в разных комнатах, но не может стереть настоящее. Где-то в Нигерии я благодарен за то, что узнал твой голос, смех и человека за ними. По тебе тоже скучают.'],
  ['Open when you feel sad','Открой, когда тебе грустно'],
  ['You do not have to be strong every minute today. Let the day be heavy without believing it will stay heavy forever. Drink something, breathe slowly, and give yourself the same patience you give other people. I wish I could sit beside you quietly until the sadness loosened its grip. Since I cannot, let these words sit there for me: you matter, you are loved, and this feeling will move.','Сегодня не нужно быть сильной каждую минуту. Позволь дню быть тяжёлым, не думая, что так будет всегда. Выпей воды, дыши медленно и дай себе столько же терпения, сколько даёшь другим. Хотел бы я тихо сидеть рядом, пока грусть не ослабнет. Раз не могу, пусть эти слова побудут вместо меня: ты важна, тебя любят, и это чувство пройдёт.'],
  ['Open when you cannot sleep','Открой, когда не можешь уснуть'],
  ['Imagine this as one of those calls where neither of us has anything urgent left to say, but neither wants to leave. Put the phone down, unclench your shoulders, and let the room go quiet. You have done enough for today. Tomorrow can wait outside the door. Goodnight, amarachiii. I hope sleep finds you gently.','Представь один из тех звонков, когда нам уже нечего срочно сказать, но никто не хочет уходить. Положи телефон, расслабь плечи и позволь комнате затихнуть. На сегодня ты сделала достаточно. Завтра может подождать за дверью. Спокойной ночи, amarachiii. Пусть сон найдёт тебя мягко.'],
  ['Open when you doubt yourself','Открой, когда сомневаешься в себе'],
  ['I have watched you survive changes, distance and difficult chapters while still finding ways to grow. That is not luck. That is you. You are more capable than the frightened version of your thoughts allows you to remember. Take the next small step—not because you feel fearless, but because you have already proved that fear does not get the final word.','Я видел, как ты переживала перемены, расстояние и трудные главы, всё равно находя способы расти. Это не удача. Это ты. Ты способнее, чем позволяют помнить испуганные мысли. Сделай следующий маленький шаг — не потому, что тебе не страшно, а потому, что ты уже доказала: страх не получает последнее слово.'],
  ['Open when the day was hard','Открой, когда день был тяжёлым'],
  ['I am sorry today asked too much of you. You do not need to turn it into a lesson tonight. Eat, rest, complain if you need to, and begin again when you actually have the energy. A bad day is not a bad life, and one difficult chapter is not the ending. I hope tomorrow handles you more gently.','Мне жаль, что сегодня потребовал от тебя слишком многого. Не нужно превращать его в урок прямо сейчас. Поешь, отдохни, пожалуйся, если нужно, и начни снова, когда появятся силы. Плохой день — не плохая жизнь, а трудная глава — не финал. Пусть завтра будет бережнее.'],
  ['Open when you want to remember us','Открой, когда хочешь вспомнить нас'],
  ['Remember the first call. The video calls. Your face appearing on my screen and making the kilometres feel temporarily powerless. Remember the voice notes, the goodnights, the laughter and even the quiet seconds. We were real people in real moments, not just a story I made prettier afterward. Whatever our future becomes, I am genuinely grateful those memories exist.','Вспомни первый звонок. Видеозвонки. Твоё лицо на экране, на время лишавшее километры силы. Вспомни голосовые, пожелания спокойной ночи, смех и даже тихие секунды. Мы были настоящими людьми в настоящих моментах, а не просто историей, которую я потом приукрасил. Каким бы ни стало будущее, я искренне благодарен за эти воспоминания.'],
  ['A whole day of video calls','Целый день видеозвонков'],
  ['One perfect hour together in person','Один идеальный час вместе вживую'],
  ['I know the one-hour answer is unfairly powerful 😭','Я знаю, вариант с одним часом нечестно сильный 😭'],
  ['Recreate our first call','Повторить наш первый звонок'],
  ['Fast-forward to our first day without distance','Перемотать к первому дню без расстояния'],
  ['Both belong in the same story, honestly.','Честно говоря, оба варианта принадлежат одной истории.'],
  ['A quiet date with no phones','Тихое свидание без телефонов'],
  ['A chaotic adventure with too many pictures','Хаотичное приключение со слишком большим количеством фото'],
  ['Whichever you choose, I am keeping the pictures.','Что бы ты ни выбрала, фотографии останутся у меня.'],
  ['Cook together and risk the kitchen','Готовить вместе, рискуя кухней'],
  ['Order food and judge each other’s choices','Заказать еду и оценивать выбор друг друга'],
  ['Either way, I am stealing a bite from yours.','В любом случае я украду кусочек твоего.'],
  ['A snowy walk in Russia','Снежная прогулка по России'],
  ['A warm night drive in Nigeria','Тёплая ночная поездка по Нигерии'],
  ['Different weather. Same passenger seat.','Разная погода. Одно пассажирское место.'],
  ['Relive our funniest call','Заново прожить самый смешной звонок'],
  ['Hear one honest thing we never said','Услышать одну честную вещь, которую мы не говорили'],
  ['That second option could change a whole chapter.','Второй вариант способен изменить целую главу.'],
  ['Matching playlists','Одинаковые плейлисты'],
  ['Matching hoodies','Одинаковые худи'],
  ['I am quietly voting for both.','Я тихо голосую за оба.'],
  ['One more beginning','Ещё одно начало'],
  ['One perfect ending','Один идеальный финал'],
  ['I will always have a soft spot for another beginning.','У меня всегда будет слабость к ещё одному началу.']
].forEach(([en,ru])=>addRu(en,ru));

[
  ['7,305 days','7 305 дней'],
  ['reader mode','режим чтения'],
  ['normal view','обычный вид'],
  ['show full letter','показать всё письмо'],
  ['For you','Для тебя'],
  ['13th of October','13 октября'],
  ['Happy birthday, amarachiii.','С днём рождения, amarachiii.'],
  ['I tried to make this sound perfect, but nothing about how I feel fits neatly into perfect words.','Я пытался сделать эти слова идеальными, но мои чувства не помещаются в идеальные формулировки.'],
  ['I still remember our first call—not because I can repeat every sentence, but because I remember how it felt. I remember hearing your voice, feeling the nervousness fade, and not wanting the moment to end. Then came the video calls: your face on my screen, your reactions, your laugh, and those quiet seconds when neither of us needed to say anything important. Those moments became important anyway.','Я до сих пор помню наш первый звонок — не потому, что могу повторить каждое предложение, а потому, что помню ощущение. Помню твой голос, исчезающее волнение и нежелание заканчивать момент. Потом были видеозвонки: твоё лицо на экране, реакции, смех и тихие секунды, когда нам не нужно было говорить ничего важного. Но эти моменты всё равно стали важными.'],
  ['You became part of my routine without me noticing when it happened. A voice note from you could change my mood. A simple “goodnight” could stay with me after I put my phone down. There were days when the distance felt huge, and then your face would appear on my screen and the world would feel manageable again.','Ты стала частью моей жизни, и я даже не заметил, когда это произошло. Твоё голосовое могло изменить моё настроение. Простое «спокойной ночи» оставалось со мной после того, как я откладывал телефон. Иногда расстояние казалось огромным, а затем твоё лицо появлялось на экране — и мир снова становился терпимым.'],
  ['I also know that loving you has not always looked the way it should have. I made mistakes. There were times I held on too tightly, reacted from fear instead of listening, and made my feelings feel like pressure you did not deserve to carry. I cannot erase that with a birthday website. I can only own it and tell you I understand more now than I did then.','Я также знаю, что моя любовь не всегда выглядела так, как должна. Я ошибался. Иногда держался слишком крепко, реагировал из страха вместо того, чтобы слушать, и превращал чувства в давление, которого ты не заслуживала. Сайт ко дню рождения этого не сотрёт. Я могу лишь признать это и сказать, что теперь понимаю больше.'],
  ['Losing the ease we once had taught me that love is not proved by how desperately you hold onto someone. It is proved through patience, respect, safety, consistency, and letting the other person breathe. I wish I understood that sooner. I am trying to understand it properly now.','Потеря той лёгкости научила меня: любовь доказывается не отчаянным удержанием человека. Она доказывается терпением, уважением, безопасностью, постоянством и свободой дышать. Жаль, что я не понял этого раньше. Теперь я стараюсь понять это правильно.'],
  ['I am grateful there are still words between us. Even if this chapter is quieter and we take it one message at a time, hearing from you still matters to me. I do not want to rush you or turn every conversation into a question about what we are. I want to treat whatever remains between us with care.','Я благодарен, что между нами всё ещё есть слова. Даже если эта глава тише и мы идём по одному сообщению, слышать тебя по-прежнему важно. Я не хочу торопить тебя или превращать каждый разговор в вопрос о нас. Я хочу бережно относиться к тому, что осталось между нами.'],
  ['And because I promised myself I would be honest: I still love you. Not only the memory of us, and not only the future I sometimes imagine. I love the honest, resilient, complicated, warm and growing person behind the screen.','И поскольку я пообещал себе быть честным: я всё ещё люблю тебя. Не только воспоминание о нас и не только будущее, которое иногда представляю. Я люблю честного, стойкого, сложного, тёплого и растущего человека по ту сторону экрана.'],
  ['I still hope for a future where distance is no longer measured in kilometres or time zones. I still imagine saying goodnight beside you and laughing about how many calls it took to get there. I know that future cannot be decided by me alone, and I know hope must never become pressure. So I am holding it gently.','Я всё ещё надеюсь на будущее, где расстояние не измеряется километрами и часовыми поясами. Всё ещё представляю, как говорю «спокойной ночи» рядом и смеюсь над тем, сколько звонков понадобилось, чтобы добраться туда. Я знаю, что не могу решить такое будущее один и что надежда не должна становиться давлением. Поэтому держу её осторожно.'],
  ["Today, more than anything, I want you to feel seen. Your existence made a real difference in another person's life—mine. You are not easy to forget, and you are not replaceable in the story I have lived.",'Сегодня больше всего я хочу, чтобы ты чувствовала: тебя видят. Твоё существование по-настоящему изменило жизнь другого человека — мою. Тебя невозможно легко забыть, и в моей истории тебя нельзя заменить.'],
  ['Today, I just hope you feel celebrated, seen and deeply cared for.','Сегодня я просто надеюсь, что ты чувствуешь себя окружённой праздником, замеченной и глубоко любимой.'],
  ['Happy birthday, Victory. Thank you for the calls, the video calls, the laughter, the lessons and even the difficult truths. If our first call was the beginning, I hope this is not the last chapter. I mean every word.','С днём рождения, Виктори. Спасибо за звонки, видеозвонки, смех, уроки и даже трудную правду. Если первый звонок был началом, я надеюсь, что это не последняя глава. Я искренне говорю каждое слово.'],
  ['the person I saw then · the person I see now','человек, которого я видел тогда · человек, которого вижу сейчас'],
  ['Favour then and Favour now','Фавор тогда и Фавор сейчас'],
  ['Then · 2023','Тогда · 2023'],
  ['I noticed your body first—partly because you made sure I knew I would. I liked you, I was curious about you, and I had no idea how important your heart would become to me.','Сначала я заметил твоё тело — отчасти потому, что ты сама предупредила меня. Ты мне понравилась, мне было интересно узнать тебя, и я не представлял, насколько важным станет для меня твоё сердце.'],
  ['Now · 2026','Сейчас · 2026'],
  ['Now I see the woman who fought for a new country, adapted, learned a new language and kept moving toward medicine. Your strength is the first thing I think about. Your caring heart is the thing I value most.','Теперь я вижу женщину, которая боролась за новую страну, адаптировалась, учит новый язык и продолжает идти к медицине. Теперь первое, о чём я думаю, — твоя сила. А больше всего ценю твоё заботливое сердце.'],
  ['FEBRUARY · AFTER VALENTINE’S','ФЕВРАЛЬ · ПОСЛЕ ДНЯ СВЯТОГО ВАЛЕНТИНА'],
  ['I started working on this because I could not do what I wanted for Valentine’s, and I wanted your birthday to feel different. You probably thought I could never keep something this big a secret. Honestly, fair.','Я начал делать это, потому что не смог устроить то, что хотел, на День святого Валентина, а твой день рождения хотел сделать другим. Ты наверняка думала, что я не смогу сохранить такой большой секрет. Честно — справедливо.'],
  ['OCTOBER · FINISHING THE UNIVERSE','ОКТЯБРЬ · ЗАКАНЧИВАЮ ВСЕЛЕННУЮ'],
  ['I finished it in a chapter that did not look exactly how I imagined in February. I still felt I should show you. If it makes your day even a little softer, then every hour I spent hiding this was worth it.','Я закончил это в главе, которая выглядит не так, как я представлял в феврале. Но всё равно решил показать тебе. Если это сделает твой день хотя бы немного теплее, каждый час, потраченный втайне, был не зря.'],
  ['actually written by me','действительно написано моей рукой'],
  ['Watch my handwriting appear','Смотри, как появляется мой почерк'],
  ['Not a font. Not polished. Just my hand writing something simple for you.','Не шрифт. Не идеально. Просто моя рука пишет для тебя простые слова.'],
  ['play the handwritten note','воспроизвести рукописную записку'],
  ['The writing can play now. Add your recorded voice file beside the site to hear Favour read it.','Почерк уже может появляться. Добавь файл с записанным голосом рядом с сайтом, чтобы услышать Фавора.'],
  ['from my voice to you','от моего голоса к тебе'],
  ['A voice memo from Favour','Голосовое от Фавора'],
  ['Some things should be heard, not typed.','Некоторые вещи нужно услышать, а не прочитать.'],
  ['press play whenever you are ready','нажми, когда будешь готова'],
  ["there's more below",'ниже есть ещё'],
  ['how much do I love you?','как сильно я люблю тебя?'],
  ['you found it… I still get lost in your eyes.','ты нашла это… я всё ещё теряюсь в твоих глазах.'],
  ['one more thing — make a wish','ещё кое-что — загадай желание'],
  ['Whatever you wished for — I hope it finds its way to you.','Что бы ты ни загадала — надеюсь, оно найдёт дорогу к тебе.'],
  ['want to say it out loud instead?','хочешь произнести его вслух?'],
  ['tap to record your wish','нажми, чтобы записать желание'],
  ["I'm done",'готово'],
  ['record again','записать снова'],
  ['save wish','сохранить желание'],
  ['Come back next year. This universe will still be here.','Возвращайся в следующем году. Эта вселенная всё ещё будет здесь.'],
  ['continue →','продолжить →'],
  ['Happy Birthday','С днём рождения'],
  ['I hope today felt like everything you deserve.','Надеюсь, сегодняшний день был таким, какого ты заслуживаешь.'],
  ['hold to unlock one more thing','удерживай, чтобы открыть ещё кое-что'],
  ["I'm glad you exist. Genuinely.",'Я рад, что ты существуешь. Искренне.'],
  ['Happy birthday, amarachiii. 🤍','С днём рождения, amarachiii. 🤍'],
  ['one last light','последний свет'],
  ['The universe learned your name','Вселенная выучила твоё имя'],
  ['some names were always meant to be written in stars.','некоторые имена всегда должны были быть написаны звёздами.'],
  ['13 October 2026','13 октября 2026'],
  ['Special birthday edition','Специальный выпуск ко дню рождения'],
  ['Price: one smile','Цена: одна улыбка'],
  ['THE VICTORY TIMES','ВЕСТИ ВИКТОРИ'],
  ['All the news worth celebrating','Все новости, которые стоит праздновать'],
  ['Future surgeon crosses continents and refuses to give up','Будущий хирург пересекает континенты и отказывается сдаваться'],
  ['After years of waiting, fighting, adapting and beginning again, Victory enters twenty stronger, wiser and closer to the life she chose.','После лет ожидания, борьбы, адаптации и новых начал Виктори входит в двадцатилетие сильнее, мудрее и ближе к выбранной жизни.'],
  ['Victory—future doctor, current Russian student and living proof that a delayed chapter is not a cancelled future.','Виктори — будущий врач, нынешняя студентка русского и живое доказательство того, что задержанная глава не означает отменённое будущее.'],
  ['Victory did not take the easy route to twenty. She spent nearly two years outside school without allowing the delay to decide what her life would become. She fought for the chance to move abroad, travelled on her own and began learning Russian before applying to university.','Путь Виктори к двадцати не был лёгким. Она провела почти два года вне учёбы, не позволив задержке решить, какой будет её жизнь. Она боролась за переезд, уехала одна и начала учить русский перед поступлением.'],
  ['Her goal is medicine, specifically surgery. The work ahead is serious, but so is she. Those close enough to watch her journey describe strength and adaptability as her defining qualities.','Её цель — медицина, особенно хирургия. Впереди серьёзная работа, но и она серьёзна. Те, кто видел её путь, называют силу и адаптивность её главными качествами.'],
  ['She has also come through a difficult health chapter and darker emotional seasons without losing the caring, loving person underneath them. The person she is today is not the girl Favour first met in 2023—and that growth is worth its own headline.','Она также прошла через трудный период со здоровьем и тёмные эмоциональные времена, не потеряв заботливого и любящего человека внутри. Сегодня она уже не та девушка, которую Фавор встретил в 2023 году, — и этот рост заслуживает отдельного заголовка.'],
  ['Asked for comment, Favour said: “I am proud of how she keeps becoming more of herself. I hope twenty gives her the admission, peace, health and wins she has worked so hard for.”','Фавор сказал: «Я горжусь тем, как она продолжает становиться собой. Пусть двадцать принесёт ей поступление, покой, здоровье и победы, ради которых она так много работала».'],
  ['BREAKING: Amarachiii remains impossible to forget.','СРОЧНО: Amarachiii по-прежнему невозможно забыть.'],
  ['the universe remembers','вселенная помнит'],
  ['A light for next year','Свет на следующий год'],
  ['This star is sealed until your next birthday.','Эта звезда запечатана до твоего следующего дня рождения.'],
  ['calculating the orbit…','рассчитываем орбиту…'],
  ['unlocks 13 October 2027','откроется 13 октября 2027'],
  ['sealed in starlight','запечатано звёздным светом'],
  ['You came back. I meant it—the universe kept your place. Happy birthday again, Victory. 🤍','Ты вернулась. Я не шутил — вселенная сохранила твоё место. Снова с днём рождения, Виктори. 🤍'],
  ['your side of the story','твоя сторона истории'],
  ['Leave something in this universe','Оставь что-нибудь в этой вселенной'],
  ['If this left anything in your heart, you can put it into words here. Nothing is sent unless you choose to share it.','Если это оставило что-то в твоём сердце, можешь написать здесь. Ничего не отправится, пока ты сама не выберешь поделиться.'],
  ['Your reply to Favour','Твой ответ Фавору'],
  ['save privately','сохранить лично'],
  ['share my reply','поделиться ответом'],
  ['Saved replies stay only on this device. “Share” opens the phone\'s normal share menu.','Сохранённый ответ остаётся только на этом устройстве. «Поделиться» откроет обычное меню телефона.'],
  ['something to keep','что-то на память'],
  ['Your silver birthday card','Твоя серебряная открытка'],
  ['A little piece of this universe, made for your camera roll.','Маленькая частица этой вселенной для твоей галереи.'],
  ['13 October · for one person','13 октября · для одного человека'],
  ['download silver keepsake','скачать серебряную открытку'],
  ['keep the universe on your phone','сохрани вселенную на телефоне'],
  ['Install Victory’s Universe','Установить Вселенную Виктори'],
  ['It can sit on your home screen like an app, with your portrait as its icon.','Она может быть на главном экране как приложение, с твоим портретом на значке.'],
  ['add to home screen','добавить на главный экран'],
  ['Your browser will show the safest install option available.','Браузер покажет доступный безопасный способ установки.'],
  ['made with intention by','создано с душой'],
  ['explore the universe again','исследовать вселенную снова']
].forEach(([en,ru])=>addRu(en,ru));


[
  ['the love I have for you knows no distance','моя любовь к тебе не знает расстояний'],
  ['the space between us','пространство между нами'],
  ['Nigeria to Russia','Из Нигерии в Россию'],
  ["An honest estimate from Asaba to Russia's UTC+5 region until you choose to share your current location.",'Честная оценка расстояния от Асабы до региона России UTC+5, пока ты сама не решишь поделиться текущим местоположением.'],
  ['West Africa time','западноафриканское время'],
  ['same moment','одно мгновение'],
  ['your time · four hours ahead','твоё время · на четыре часа вперёд'],
  ['different clocks. the same sky. still us.','разные часы. одно небо. всё ещё мы.'],
  ['the same moment, seen from two places','одно мгновение с двух сторон'],
  ['Our live skies','Наше небо сейчас'],
  ['Asaba on one side. Your UTC+5 sky on the other—an honest estimate until you choose to let the browser use your exact location.','Асаба с одной стороны. Твоё небо UTC+5 — с другой. Это честная оценка, пока ты сама не разрешишь браузеру использовать точное местоположение.'],
  ['Asaba','Асаба'],
  ['Victory’s sky','Небо Виктори'],
  ['Russia · UTC+5 estimate','Россия · приблизительно UTC+5'],
  ['one light travelling both ways','один свет, летящий в обе стороны'],
  ['under the same sky','под одним небом'],
  ['Our weather, right now','Наша погода сейчас'],
  ['Asaba, Nigeria','Асаба, Нигерия'],
  ['loading…','загрузка…'],
  ['checking the sky','проверяем небо'],
  ['use your actual location for your side','использовать твоё местоположение'],
  ['Location is only used in this browser and is never saved or sent to Favour.','Местоположение используется только в этом браузере, не сохраняется и не отправляется Фавору.'],
  ['four places, one strange little story','четыре места, одна странная маленькая история'],
  ['The places that hold pieces of us','Места, в которых остались части нашей истории'],
  ['These are city-level memories only—the personal details stay ours.','Здесь указаны только города — личные детали остаются между нами.'],
  ['Ibadan · where we first met in person','Ибадан · где мы впервые встретились лично'],
  ['I still cannot believe I watched someone eat bread with Bama and Milo. You genuinely scarred me 😭','Я до сих пор не могу поверить, что видел, как кто-то ест хлеб с Bama и Milo. Ты правда оставила мне травму 😭'],
  ['Port Harcourt · a night that belongs to us','Порт-Харкорт · ночь, которая принадлежит нам'],
  ['Some memories do not need a public caption. You know exactly which night—and yes, I remember the bath too.','Некоторым воспоминаниям не нужна публичная подпись. Ты точно знаешь, о какой ночи речь — и да, ванну я тоже помню.'],
  ['Asaba · where I am finishing this','Асаба · где я заканчиваю это'],
  ['A different city, still thinking carefully about how to make your birthday feel special.','Другой город, но я всё так же думаю, как сделать твой день рождения особенным.'],
  ['Russia · where you began again','Россия · где ты начала заново'],
  ['The place you travelled to alone, learned to adapt and started building the road toward medicine.','Место, куда ты уехала одна, научилась адаптироваться и начала строить путь к медицине.'],
  ["we've known each other for",'мы знаем друг друга уже'],
  ['Where our story began','Где началась наша история'],
  ['The first page of everything that followed—the conversations, the laughter, and all the little things that slowly started to matter.','Первая страница всего, что последовало: разговоров, смеха и маленьких вещей, которые постепенно стали важными.'],
  ['Our first call','Наш первый звонок'],
  ['When your voice became a real memory','Когда твой голос стал настоящим воспоминанием'],
  ['I cannot honestly repeat every word. I remember the nervousness fading, the conversation becoming easier, and wishing we did not have to hang up yet.','Я честно не могу повторить каждое слово. Я помню, как исчезало волнение, разговор становился легче и как мне не хотелось завершать звонок.'],
  ['The video calls','Видеозвонки'],
  ['For a while, the screen felt like enough','Какое-то время экрана было достаточно'],
  ['Seeing your expressions instead of imagining them, watching you laugh, and sharing quiet moments without needing to fill every second.','Видеть твою мимику, а не представлять её; смотреть, как ты смеёшься; делить тихие моменты, не пытаясь заполнить каждую секунду.'],
  ['The little rituals','Маленькие ритуалы'],
  ['Calls, voice notes and goodnights','Звонки, голосовые и пожелания спокойной ночи'],
  ['Random voice notes, calls that lasted longer than planned, and simple “goodnight” messages that always meant more than they looked.','Случайные голосовые, звонки дольше запланированного и простые «спокойной ночи», которые всегда значили больше, чем казалось.'],
  ['Across the world, never forgotten','Через весь мир, но никогда не забыто'],
  ['Different countries and different clocks, but there were still moments when one message made the distance feel much smaller.','Разные страны и часы, но один текст иногда делал расстояние гораздо меньше.'],
  ['The present chapter','Нынешняя глава'],
  ['Finding our way back to conversation','Снова находя дорогу к разговору'],
  ['A softer chapter, taken one message at a time. No pressure—just gratitude for every honest conversation and hope that this is not the final chapter.','Более тихая глава, одно сообщение за другим. Без давления — только благодарность за каждый честный разговор и надежда, что это не последняя глава.'],
  ['and our story is still being written…','и наша история всё ещё пишется…'],
  ["I don't know everything that's ahead for you, but I hope it is gentle. I hope the work pays off, the quiet dreams become real, and you receive the peace and recognition you deserve.",'Я не знаю всего, что ждёт тебя впереди, но надеюсь, что жизнь будет бережной. Пусть труд окупится, тихие мечты станут реальностью, а ты получишь покой и признание, которых заслуживаешь.'],
  ['And if I am being completely honest, I still imagine a future where there is no screen between us—where “goodnight” is something I can say beside you instead of sending across time zones, and where the difficult chapters become something we grew through, not the thing that ended our story.','Если быть полностью честным, я всё ещё представляю будущее без экрана между нами — где я могу сказать «спокойной ночи» рядом, а не отправлять это через часовые пояса; где трудные главы становятся тем, через что мы выросли, а не тем, что закончило историю.'],
  ['I know that future cannot be decided by me alone. I am not asking this birthday page to decide anything. I only want to be honest that the hope is still here: quieter now, more patient, but real.','Я знаю, что такое будущее не могу решить один. Я не прошу эту страницу решать что-либо. Я лишь честно говорю: надежда всё ещё здесь — теперь тише и терпеливее, но настоящая.'],
  ['twenty trips around the sun','двадцать оборотов вокруг солнца'],
  ["You've been alive for",'ты живёшь уже'],
  ['Twenty is big.','Двадцать — это много.'],
  ['It is 240 months, more than 175,000 hours, thousands of ordinary mornings and one completely unrepeatable you. You have already lived whole versions of yourself—and there is still so much life waiting to meet you.','Это 240 месяцев, больше 175 000 часов, тысячи обычных утр и одна совершенно неповторимая ты. Ты уже прожила целые версии себя — и впереди ещё столько жизни, которая ждёт встречи с тобой.'],
  ['twenty sincere wishes for twenty','двадцать искренних пожеланий к двадцати'],
  ['Twenty things I hope this year gives you','Двадцать вещей, которые, надеюсь, подарит тебе этот год'],
  ['the world should keep opening for you','мир должен продолжать открываться тебе'],
  ['Places I can imagine you seeing','Места, в которых я представляю тебя'],
  ['I might be remembering these imperfectly: maybe the UK because you like the accent, and maybe the Maldives. Even if I got the places wrong, I did not get the bigger wish wrong—I want the world to become available to you.','Возможно, я помню не совсем точно: может быть, Великобритания из-за любимого акцента, и, может быть, Мальдивы. Даже если места я запомнил неправильно, главное желание верно — я хочу, чтобы мир стал доступен тебе.'],
  ['The United Kingdom · maybe','Великобритания · возможно'],
  ['So you can hear the accent every day until the novelty finally wears off.','Чтобы слышать этот акцент каждый день, пока он наконец не перестанет удивлять.'],
  ['The Maldives · maybe','Мальдивы · возможно'],
  ['Clear water, proper rest and absolutely no admission stress for a while.','Прозрачная вода, настоящий отдых и ни капли стресса из-за поступления.'],
  ['Everywhere else · definitely','Весь остальной мир · точно'],
  ['These are not limits. They are only the first two pins on a much bigger map.','Это не предел. Это лишь первые две точки на гораздо большей карте.'],
  ['twenty things that belong to your future','двадцать вещей, принадлежащих твоему будущему'],
  ['Victory’s bucket list','Список желаний Виктори'],
  ['This list is yours—not a list of things you owe anyone. Tick something whenever life lets you claim it.','Этот список принадлежит тебе — это не обязательства перед кем-то. Отмечай пункт, когда жизнь позволит сделать его своим.'],
  ['a card from the universe','карточка от вселенной'],
  ['Your birthday fortune','Твоё предсказание на день рождения'],
  ['draw another fortune','вытянуть другое предсказание'],
  ['if I were there today...','если бы я был рядом сегодня...'],
  ['We would make the day feel unhurried','Мы бы никуда не спешили'],
  ['I would show up with your favourite little things, pretend I had no plan, then take you somewhere quiet and beautiful. We would eat, take too many pictures, laugh about our old calls, and walk until the cold made us hurry back inside. At midnight, I would say “happy birthday” close enough that no network, screen or time zone had to carry it for me.','Я бы пришёл с твоими любимыми мелочами, сделал вид, что плана нет, а затем отвёз тебя в тихое красивое место. Мы бы поели, сделали слишком много фотографий, смеялись над старыми звонками и гуляли, пока холод не заставил бы нас вернуться. В полночь я сказал бы «с днём рождения» так близко, чтобы ни сеть, ни экран, ни часовой пояс не передавали это за меня.']
].forEach(([en,ru])=>addRu(en,ru));

// Apply the saved choice only after every translation has been registered.
RU_VALUES.clear();
RU_TRANSLATIONS.forEach(value=>RU_VALUES.add(normalizeLanguageText(value)));
applyLanguage(currentLanguage,false);
