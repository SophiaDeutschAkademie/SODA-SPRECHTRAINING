/* SODA SPRECHTRAINING · MZ 챕터: 독일 사람들이 일상에서 실제로 쓰는 구어체 (Umgangssprache)
   은어와 유행어는 쓰지 않고, 오래 쓰여 온 일상 구어체만 모았어요.
   umg 항목: de(대화에 실제로 나오는 표현), t(나오는 줄 번호, 1부터. 여러 줄이면 배열), ko, std(표준 독일어), reg(종류) */
window.DIALOG_DATA = window.DIALOG_DATA || {};
window.DIALOG_DATA.MZ = [
  {
    no: 1, lv: "MZ",
    title: "Was machst du am Wochenende?", titleKo: "주말에 뭐 해요?", type: "Freunde", typeKo: "친구",
    intro: "친구끼리 주말 약속을 잡고 저녁 메뉴를 정하는 대화예요.",
    focus: ["was = etwas", "'ne · hab · komm ich", "Passt schon · Versprochen"],
    roles: { A: "Mika", B: "Jule" },
    turns: [
      { r: "A", de: "Na, was machst du am Wochenende? Hast du schon was vor?", ko: "있잖아요, 주말에 뭐 해요? 벌써 계획이 있어요?" },
      { r: "B", de: "Eigentlich nichts. Ich bin diese Woche echt fertig und will einfach mal ausschlafen.", ko: "사실 아무것도 없어요. 이번 주에 정말 지쳐서 그냥 늦잠이나 자고 싶어요." },
      { r: "A", de: "Verstehe ich. Aber Lena macht am Samstag 'ne Einweihungsparty. Da kommen ziemlich viele von uns.", ko: "이해해요. 그런데 레나가 토요일에 집들이를 해요. 우리 쪽 사람이 꽤 많이 와요." },
      { r: "B", de: "Wer kommt denn alles? Wenn Tim wieder mit seiner Ex auftaucht, hab ich keine Lust. Das ist mir immer so peinlich.", ko: "누구누구 와요? 팀이 또 전 애인이랑 나타나면 가고 싶지 않아요. 늘 너무 민망해요." },
      { r: "A", de: "Keine Sorge, Tim fährt übers Wochenende zu seinen Eltern. Seine Ex ist sowieso nicht eingeladen.", ko: "걱정 마요, 팀은 주말에 부모님 댁에 가요. 전 애인은 어차피 초대받지 않았고요." },
      { r: "B", de: "Na gut, dann komm ich mit. Aber ich bleib nur bis Mitternacht, ich bin wirklich kaputt.", ko: "알겠어요, 그럼 같이 갈게요. 대신 자정까지만 있을래요. 정말 녹초예요." },
      { r: "A", de: "Passt schon. Wir treffen uns um acht bei mir und essen vorher noch was. Döner oder Pizza?", ko: "괜찮아요. 8시에 우리 집에서 만나서 먼저 뭘 좀 먹어요. 되너 케밥 아니면 피자?" },
      { r: "B", de: "Döner, auf jeden Fall. Aber bitte nicht wieder bei dem Laden an der Ecke. Die haben letztes Mal unsere Bestellung vergessen, das war echt eine Frechheit.", ko: "되너예요, 무조건요. 그런데 모퉁이 가게는 제발 또 가지 말아요. 지난번에 주문을 깜빡했는데, 정말 너무했어요." },
      { r: "A", de: "Stimmt, ich hab fast 'ne Stunde gewartet. Dann gehen wir lieber zu dem neuen Laden in der Weststraße. Der soll richtig gut sein.", ko: "맞아요, 거의 한 시간을 기다렸어요. 그럼 차라리 Weststraße에 새로 생긴 가게로 가요. 아주 좋다고 하더라고요." },
      { r: "B", de: "Gut, dann bestell ich gleich mal. Nimmst du Knoblauchsoße oder lieber ohne?", ko: "좋아요, 그럼 제가 바로 주문할게요. 마늘소스를 넣을래요, 아니면 빼는 게 좋아요?" },
      { r: "A", de: "Mit Knoblauch, ist doch klar! Und diesmal kommen wir wirklich pünktlich, ja?", ko: "마늘소스 넣어야죠, 당연하잖아요! 그리고 이번에는 진짜 제시간에 가요, 알았죠?" },
      { r: "B", de: "Versprochen! Dann bis Samstag.", ko: "약속해요! 그럼 토요일에 봐요." }
    ],
    umg: [
      { de: "Na,", t: 1, ko: "있잖아요, 자 (말을 시작할 때 쓰는 추임새)", std: "Also, / Hallo,", reg: "추임새" },
      { de: "was vor", t: 1, ko: "계획이 있다 (was = etwas)", std: "etwas vor", reg: "축약" },
      { de: "Eigentlich", t: 2, ko: "사실은, 원래는 (말투를 부드럽게 하는 말)", std: "Im Grunde", reg: "불변화사" },
      { de: "fertig", t: 2, ko: "지친 (끝났다는 뜻이 아니라 지쳤다는 뜻)", std: "erschöpft", reg: "구어" },
      { de: "einfach mal", t: 2, ko: "그냥 한번", std: "einmal in Ruhe", reg: "불변화사" },
      { de: "'ne", t: [3, 9], ko: "eine의 구어 축약 (말할 때만, 글에서는 쓰지 않음)", std: "eine", reg: "축약" },
      { de: "ziemlich", t: 3, ko: "꽤, 상당히", std: "relativ viele", reg: "구어" },
      { de: "auftaucht", t: 4, ko: "나타나다", std: "erscheint, kommt", reg: "구어" },
      { de: "hab ich keine Lust", t: 4, ko: "…하고 싶지 않아요 (habe의 e 탈락)", std: "habe ich keine Lust", reg: "축약" },
      { de: "sowieso", t: 5, ko: "어차피", std: "ohnehin", reg: "구어" },
      { de: "Na gut", t: 6, ko: "알겠어요, 좋아요 (마지못해 받아들일 때)", std: "Also gut", reg: "추임새" },
      { de: "kaputt", t: 6, ko: "녹초가 된 (원래는 ‘망가진’)", std: "sehr müde", reg: "구어" },
      { de: "Passt schon", t: 7, ko: "괜찮아요, 문제없어요", std: "Das ist in Ordnung.", reg: "구어" },
      { de: "noch was", t: 7, ko: "뭘 좀 더 (was = etwas)", std: "noch etwas", reg: "축약" },
      { de: "auf jeden Fall", t: 8, ko: "무조건, 꼭", std: "ganz bestimmt", reg: "구어" },
      { de: "eine Frechheit", t: 8, ko: "너무한 일, 뻔뻔한 일", std: "unverschämt", reg: "구어" },
      { de: "richtig gut", t: 9, ko: "아주 좋은 (richtig = 매우)", std: "sehr gut", reg: "구어" },
      { de: "gleich mal", t: 10, ko: "바로 한번", std: "sofort", reg: "불변화사" },
      { de: "ist doch klar", t: 11, ko: "당연하잖아요", std: "Das ist selbstverständlich.", reg: "구어" },
      { de: "Versprochen", t: 12, ko: "약속해요", std: "Ich verspreche es.", reg: "구어" }
    ],
    redemittel: [
      { group: "계획 묻기", items: [
        { de: "Was machst du am Wochenende?", ko: "주말에 뭐 해요?" },
        { de: "Hast du schon was vor?", ko: "벌써 계획이 있어요?" }
      ] },
      { group: "내키지 않을 때 · 받아들일 때", items: [
        { de: "Wenn …, hab ich keine Lust.", ko: "…하면 가고 싶지 않아요." },
        { de: "Na gut, dann komm ich mit.", ko: "알겠어요, 그럼 같이 갈게요." },
        { de: "Passt schon.", ko: "괜찮아요." }
      ] },
      { group: "약속 정하기", items: [
        { de: "Wir treffen uns um … bei mir.", ko: "…시에 우리 집에서 만나요." },
        { de: "Versprochen!", ko: "약속해요!" }
      ] }
    ]
  },
  {
    no: 2, lv: "MZ",
    title: "Du hast nicht mal angerufen", titleKo: "전화도 안 했잖아요", type: "Streit", typeKo: "다툼",
    intro: "약속을 어긴 친구에게 서운함을 말하고, 사과하고 화해하는 대화예요.",
    focus: ["weil + Hauptsatz", "Vorwurf und Entschuldigung", "eben · halt · nämlich"],
    roles: { A: "Nele", B: "Ben" },
    turns: [
      { r: "A", de: "Sag mal, wo warst du denn gestern? Wir hatten um sieben ausgemacht, und du bist einfach nicht gekommen.", ko: "있잖아요, 어제 어디 있었어요? 7시로 약속했는데 그냥 안 왔잖아요." },
      { r: "B", de: "Oh Mann, das tut mir wirklich leid. Ich hab total die Zeit vergessen, weil ich war noch bis acht im Büro.", ko: "아이고, 정말 미안해요. 시간을 완전히 잊었어요. 8시까지 사무실에 있었거든요." },
      { r: "A", de: "Du hättest ja wenigstens kurz anrufen können! Ich hab 'ne halbe Stunde vor dem Kino gewartet wie bestellt und nicht abgeholt.", ko: "하다못해 잠깐 전화라도 할 수 있었잖아요! 영화관 앞에서 30분 동안 아무도 안 오는 채로 서 있었어요." },
      { r: "B", de: "Ich weiß, das war blöd von mir. Mein Handy war nämlich auch noch leer. Ich konnte dich gar nicht erreichen.", ko: "알아요, 제가 멍청했어요. 게다가 휴대폰 배터리도 다 나갔어요. 연락할 방법이 아예 없었어요." },
      { r: "A", de: "Aha, und das soll ich dir jetzt glauben? Das ist schon das zweite Mal diesen Monat.", ko: "아, 그래요? 그걸 지금 믿으라고요? 이번 달에만 벌써 두 번째예요." },
      { r: "B", de: "Nein, du hast ja recht. Aber ich meine es wirklich nicht böse. Ich bin zurzeit einfach total im Stress mit dem Projekt.", ko: "아니요, 맞는 말이에요. 하지만 나쁜 뜻은 정말 없어요. 요즘 프로젝트 때문에 그냥 정신이 없어요." },
      { r: "A", de: "Das versteh ich ja, aber dann sag doch einfach Bescheid. Das dauert doch nur fünf Sekunden.", ko: "그건 이해해요. 그래도 그냥 말을 해 주면 되잖아요. 5초면 되는데요." },
      { r: "B", de: "Du hast recht. Ich hätte dir wenigstens 'ne Nachricht schreiben sollen.", ko: "맞아요. 최소한 메시지라도 보냈어야 했어요." },
      { r: "A", de: "Eben. Mich nervt halt, dass ich immer als Letzte erfahre, was los ist.", ko: "그러니까요. 저는 늘 제일 마지막에 사정을 알게 되는 게 짜증 나요." },
      { r: "B", de: "Kommt nicht wieder vor, versprochen. Ich lad dich zum Essen ein, als Entschuldigung.", ko: "다시는 이런 일 없을 거예요, 약속해요. 사과의 뜻으로 제가 밥 살게요." },
      { r: "A", de: "Na gut, aber du zahlst. Und diesmal kommst du pünktlich, sonst bin ich echt sauer.", ko: "알겠어요, 대신 당신이 계산해요. 이번에는 제시간에 와요, 안 그러면 진짜 화낼 거예요." },
      { r: "B", de: "Abgemacht. Samstag um sieben, und ich schreib dir vorher noch mal.", ko: "그렇게 해요. 토요일 7시에, 그리고 그 전에 메시지 한 번 더 보낼게요." }
    ],
    umg: [
      { de: "Sag mal", t: 1, ko: "있잖아요 (질문이나 따지기 전에 던지는 말)", std: "Entschuldige, ich möchte etwas fragen", reg: "추임새" },
      { de: "ausgemacht", t: 1, ko: "약속했다", std: "verabredet", reg: "구어" },
      { de: "Oh Mann", t: 2, ko: "아이고, 어휴 (당황·실망)", std: "Das ist mir unangenehm.", reg: "감탄" },
      { de: "total", t: 2, ko: "완전히, 몽땅", std: "völlig", reg: "구어" },
      { de: "weil ich war", t: 2, ko: "weil 뒤에 동사를 둘째에 두는 말투 (표준은 weil ich … war)", std: "weil ich … war", reg: "구어 어순" },
      { de: "'ne", t: [3, 8], ko: "eine의 구어 축약", std: "eine", reg: "축약" },
      { de: "wie bestellt und nicht abgeholt", t: 3, ko: "와야 할 사람이 안 와서 홀로 기다리는 모습", std: "ganz allein und vergeblich", reg: "관용구" },
      { de: "blöd", t: 4, ko: "바보 같은, 어리석은", std: "dumm, unüberlegt", reg: "구어" },
      { de: "nämlich", t: 4, ko: "게다가, 사실 (이유를 덧붙이는 말)", std: "denn", reg: "불변화사" },
      { de: "Aha", t: 5, ko: "아, 그래요? (믿지 못하는 투)", std: "Ach so", reg: "추임새" },
      { de: "im Stress", t: 6, ko: "정신없는, 바쁜", std: "unter Zeitdruck", reg: "구어" },
      { de: "Bescheid", t: 7, ko: "알려 주다 (Bescheid sagen)", std: "informieren", reg: "구어" },
      { de: "Eben", t: 9, ko: "바로 그거예요, 그러니까요", std: "Genau", reg: "불변화사" },
      { de: "halt", t: 9, ko: "그냥, 어쩔 수 없이 (이유를 담담히 말할 때)", std: "eben, nun einmal", reg: "불변화사" },
      { de: "nervt", t: 9, ko: "짜증 나게 하다", std: "ärgert mich", reg: "구어" },
      { de: "Kommt nicht wieder vor", t: 10, ko: "다시는 안 그럴게요", std: "Das passiert nicht noch einmal.", reg: "구어" },
      { de: "lad", t: 10, ko: "초대한다 (lade의 e 탈락)", std: "lade", reg: "축약" },
      { de: "sauer", t: 11, ko: "화난", std: "verärgert", reg: "구어" },
      { de: "Abgemacht", t: 12, ko: "그렇게 하기로 해요", std: "Einverstanden", reg: "구어" }
    ],
    redemittel: [
      { group: "서운함 말하기", items: [
        { de: "Du bist einfach nicht gekommen.", ko: "그냥 안 왔잖아요." },
        { de: "Du hättest wenigstens anrufen können.", ko: "최소한 전화는 할 수 있었잖아요." },
        { de: "Mich nervt, dass …", ko: "…라는 게 짜증 나요." }
      ] },
      { group: "사과하기", items: [
        { de: "Das tut mir wirklich leid.", ko: "정말 미안해요." },
        { de: "Ich hätte … sollen.", ko: "…했어야 했어요." },
        { de: "Kommt nicht wieder vor.", ko: "다시는 안 그럴게요." }
      ] },
      { group: "화해하기", items: [
        { de: "Ich lad dich zum Essen ein.", ko: "제가 밥 살게요." },
        { de: "Abgemacht.", ko: "그렇게 해요." }
      ] }
    ]
  },
  {
    no: 3, lv: "MZ",
    title: "Immer nur am Handy", titleKo: "맨날 휴대폰만 봐요", type: "Geschwister", typeKo: "남매",
    intro: "휴대폰만 보는 동생에게 설거지와 저녁 준비를 말하는 집 안 대화예요.",
    focus: ["nix · gibt's · leg's", "Aufforderung im Alltag", "Keine Ahnung · Na also"],
    roles: { A: "Luca", B: "Sophie" },
    turns: [
      { r: "A", de: "Sophie, du hängst schon wieder die ganze Zeit am Handy. Kannst du das nicht mal weglegen?", ko: "소피, 또 계속 휴대폰만 붙들고 있네요. 잠깐이라도 내려놓을 수 없어요?" },
      { r: "B", de: "Ich schau doch nur schnell was nach. Hab ich dich gestört?", ko: "잠깐 뭘 좀 찾아보는 것뿐이에요. 제가 방해했어요?" },
      { r: "A", de: "Du machst das jetzt seit zwei Stunden. Ich hab dich dreimal was gefragt, und du hast nix gehört.", ko: "벌써 두 시간째 그러고 있어요. 세 번이나 뭘 물었는데 아무것도 못 들었잖아요." },
      { r: "B", de: "Echt? Ach so, tut mir leid. Ich hab 'nen Film über Berlin gesehen, der war total interessant.", ko: "정말요? 아, 미안해요. 베를린에 관한 영상을 봤는데 정말 흥미로웠어요." },
      { r: "A", de: "Und was ist mit dem Abwasch? Du warst heute dran.", ko: "그런데 설거지는요? 오늘 당번이었잖아요." },
      { r: "B", de: "Mist, den hab ich ganz vergessen. Gib mir fünf Minuten, ich mach den gleich.", ko: "아차, 완전히 잊어버렸어요. 5분만 줘요, 바로 할게요." },
      { r: "A", de: "Das sagst du jetzt schon seit einer Stunde. Ehrlich gesagt nervt mich das ein bisschen.", ko: "그 말을 벌써 한 시간째 하고 있어요. 솔직히 말하면 좀 짜증 나요." },
      { r: "B", de: "Du übertreibst echt. Aber okay, ich leg's weg. Ich muss eh gleich los zum Sport.", ko: "너무 과장하네요. 그래도 알겠어요, 내려놓을게요. 어차피 곧 운동하러 가야 해요." },
      { r: "A", de: "Na also, geht doch! Und wenn du wiederkommst, kochen wir zusammen, okay?", ko: "거 봐요, 되잖아요! 돌아오면 같이 요리해요, 알았죠?" },
      { r: "B", de: "Gern. Was gibt's denn dann zu essen?", ko: "좋아요. 그럼 뭘 먹어요?" },
      { r: "A", de: "Keine Ahnung, schau mal im Kühlschrank. Ich glaub, da ist noch Gemüse drin.", ko: "모르겠어요, 냉장고를 한번 봐요. 야채가 아직 남아 있을 거예요." },
      { r: "B", de: "Passt, dann mach ich 'ne Pfanne. Bis später!", ko: "좋아요, 그럼 볶음 요리를 할게요. 이따 봐요!" }
    ],
    umg: [
      { de: "hängst", t: 1, ko: "붙어 있다 (am Handy hängen: 휴대폰에 매달려 있다)", std: "benutzt ständig", reg: "구어" },
      { de: "mal", t: 1, ko: "잠깐, 한번 (부탁이나 요청을 부드럽게 함)", std: "einmal", reg: "불변화사" },
      { de: "schnell was nach", t: 2, ko: "잠깐 뭘 좀 찾아보다 (was = etwas)", std: "schnell etwas nach", reg: "축약" },
      { de: "nix", t: 3, ko: "아무것도 (nichts의 구어형)", std: "nichts", reg: "축약" },
      { de: "Echt?", t: 4, ko: "정말요?", std: "Wirklich?", reg: "추임새" },
      { de: "Ach so", t: 4, ko: "아, 그렇군요", std: "Ich verstehe.", reg: "추임새" },
      { de: "'nen", t: 4, ko: "einen의 구어 축약", std: "einen", reg: "축약" },
      { de: "dran", t: 5, ko: "차례인, 당번인 (dran sein)", std: "an der Reihe", reg: "구어" },
      { de: "Mist", t: 6, ko: "아차, 젠장 (가볍게 쓰는 감탄)", std: "Das ist ärgerlich.", reg: "감탄" },
      { de: "Gib mir fünf Minuten", t: 6, ko: "5분만 줘요", std: "Warte bitte fünf Minuten.", reg: "구어" },
      { de: "Ehrlich gesagt", t: 7, ko: "솔직히 말하면", std: "Offen gesagt", reg: "구어" },
      { de: "nervt", t: 7, ko: "짜증 나게 하다", std: "ärgert", reg: "구어" },
      { de: "leg's", t: 8, ko: "그것을 내려놓다 (leg es의 축약)", std: "lege es", reg: "축약" },
      { de: "eh", t: 8, ko: "어차피", std: "sowieso", reg: "구어" },
      { de: "Na also, geht doch", t: 9, ko: "거 봐요, 되잖아요", std: "Siehst du, es funktioniert.", reg: "구어" },
      { de: "gibt's", t: 10, ko: "있다 (gibt es의 축약)", std: "gibt es", reg: "축약" },
      { de: "Keine Ahnung", t: 11, ko: "모르겠어요", std: "Ich weiß es nicht.", reg: "구어" },
      { de: "Passt", t: 12, ko: "좋아요, 그걸로 해요", std: "Das ist gut so.", reg: "구어" }
    ],
    redemittel: [
      { group: "부드럽게 지적하기", items: [
        { de: "Kannst du das nicht mal weglegen?", ko: "잠깐 그것 좀 내려놓을 수 없어요?" },
        { de: "Ehrlich gesagt nervt mich das.", ko: "솔직히 말하면 그게 짜증 나요." }
      ] },
      { group: "변명 · 인정", items: [
        { de: "Ich hab das ganz vergessen.", ko: "완전히 잊어버렸어요." },
        { de: "Gib mir fünf Minuten.", ko: "5분만 줘요." }
      ] },
      { group: "저녁 정하기", items: [
        { de: "Was gibt's zu essen?", ko: "뭘 먹어요?" },
        { de: "Keine Ahnung, schau mal im Kühlschrank.", ko: "모르겠어요, 냉장고를 한번 봐요." }
      ] }
    ]
  },
  {
    no: 4, lv: "MZ",
    title: "Mittagspause im Büro", titleKo: "사무실 점심시간", type: "Kollegen", typeKo: "직장 동료",
    intro: "야근에 지친 동료를 점심에 불러내고 상사에게 말해 보라고 권하는 대화예요.",
    focus: ["Tja · halt · eh", "Rat geben", "auf den letzten Drücker"],
    roles: { A: "Kim", B: "Leon" },
    turns: [
      { r: "A", de: "Hey Leon, gehst du mit in die Kantine? Ich hab einen Riesenhunger.", ko: "레온, 구내식당에 같이 갈래요? 배가 엄청 고파요." },
      { r: "B", de: "Ich weiß nicht, ich hab noch ewig viel zu tun. Der Chef will die Zahlen bis heute Abend haben.", ko: "글쎄요, 아직 할 일이 끝도 없이 많아요. 팀장님이 오늘 저녁까지 수치를 달래요." },
      { r: "A", de: "Schon wieder? Das ist jetzt das dritte Mal diese Woche. Immer wollen die alles auf den letzten Drücker.", ko: "또요? 이번 주에만 벌써 세 번째예요. 항상 다들 마지막 순간에 모든 걸 원해요." },
      { r: "B", de: "Tja, so ist das halt. Und ich kann ja schlecht nein sagen, ich bin noch neu hier.", ko: "뭐, 원래 그런 거죠. 게다가 저는 아직 신입이라 거절하기도 어려워요." },
      { r: "A", de: "Doch, kannst du! Man muss auch mal Grenzen setzen. Sonst machst du am Ende nur Überstunden, und keiner bedankt sich.", ko: "아니요, 할 수 있어요! 가끔은 선을 그어야 해요. 안 그러면 결국 야근만 하고 아무도 고마워하지 않아요." },
      { r: "B", de: "Hm, vielleicht hast du recht. Aber bei dem Stress kann ich echt nicht abschalten.", ko: "음, 맞는 말일지도 몰라요. 하지만 이런 스트레스 속에서는 정말 머리를 식힐 수가 없어요." },
      { r: "A", de: "Komm, wir gehen jetzt erst mal was essen. Mit leerem Magen denkt man eh schlecht.", ko: "자, 일단 뭘 좀 먹으러 가요. 어차피 배가 비면 생각도 잘 안 돼요." },
      { r: "B", de: "Okay, überredet. Aber nur 'ne halbe Stunde, sonst werd ich nie fertig.", ko: "좋아요, 넘어갔어요. 그런데 30분만이에요, 안 그러면 영영 못 끝내요." },
      { r: "A", de: "Alles klar. Ich lad dich auch ein, dann hast du keine Ausrede mehr.", ko: "알겠어요. 제가 살게요, 그러면 더는 핑계를 댈 수 없죠." },
      { r: "B", de: "Na, das nehm ich an! Danke dir.", ko: "그럼 사양 않고 받을게요! 고마워요." },
      { r: "A", de: "Und danach sprichst du mit dem Chef. Kein Mensch schafft so viel an einem Tag.", ko: "그리고 그다음에 팀장님께 말해요. 아무도 하루에 그렇게 많이 못 해요." },
      { r: "B", de: "Mal schauen. Ich versuch's gleich nach dem Mittagessen.", ko: "생각해 볼게요. 점심 먹고 바로 시도해 볼게요." }
    ],
    umg: [
      { de: "Riesenhunger", t: 1, ko: "엄청난 배고픔", std: "großen Hunger", reg: "구어" },
      { de: "ewig viel", t: 2, ko: "끝도 없이 많이", std: "sehr viel", reg: "구어" },
      { de: "Schon wieder?", t: 3, ko: "또요?", std: "Das ist schon wieder so?", reg: "추임새" },
      { de: "auf den letzten Drücker", t: 3, ko: "마지막 순간에 (임박해서)", std: "erst im letzten Moment", reg: "관용구" },
      { de: "Tja", t: 4, ko: "뭐, 글쎄요 (체념하는 말투)", std: "Nun", reg: "추임새" },
      { de: "halt", t: 4, ko: "원래 그런 거예요 (so ist das halt)", std: "eben", reg: "불변화사" },
      { de: "schlecht nein sagen", t: 4, ko: "거절하기 어렵다", std: "kaum ablehnen", reg: "구어" },
      { de: "Doch", t: 5, ko: "아니요, 할 수 있어요 (상대의 부정을 뒤집을 때)", std: "Doch, das ist möglich.", reg: "불변화사" },
      { de: "auch mal", t: 5, ko: "가끔은", std: "manchmal", reg: "불변화사" },
      { de: "abschalten", t: 6, ko: "머리를 식히다, 긴장을 풀다", std: "sich entspannen", reg: "구어" },
      { de: "Komm,", t: 7, ko: "자, 가요 (재촉하는 말)", std: "Los,", reg: "추임새" },
      { de: "erst mal", t: 7, ko: "우선, 일단", std: "zunächst", reg: "구어" },
      { de: "eh", t: 7, ko: "어차피", std: "sowieso", reg: "구어" },
      { de: "überredet", t: 8, ko: "설득당했어요, 넘어갔어요", std: "Du hast mich überzeugt.", reg: "구어" },
      { de: "'ne halbe Stunde", t: 8, ko: "30분 (eine의 축약)", std: "eine halbe Stunde", reg: "축약" },
      { de: "das nehm ich an", t: 10, ko: "그럼 받을게요, 사양 않을게요", std: "Das nehme ich gern an.", reg: "구어" },
      { de: "Kein Mensch", t: 11, ko: "아무도 (…하지 않는다)", std: "Niemand", reg: "구어" },
      { de: "Mal schauen", t: 12, ko: "생각해 볼게요, 두고 봐요", std: "Ich werde sehen.", reg: "구어" },
      { de: "versuch's", t: 12, ko: "시도해 볼게요 (versuche es)", std: "versuche es", reg: "축약" }
    ],
    redemittel: [
      { group: "점심 권하기", items: [
        { de: "Gehst du mit in die Kantine?", ko: "구내식당에 같이 갈래요?" },
        { de: "Komm, wir gehen jetzt erst mal was essen.", ko: "자, 일단 뭘 좀 먹으러 가요." }
      ] },
      { group: "일이 많다고 말하기", items: [
        { de: "Ich hab noch ewig viel zu tun.", ko: "아직 할 일이 끝도 없이 많아요." },
        { de: "Ich kann ja schlecht nein sagen.", ko: "거절하기가 어려워요." }
      ] },
      { group: "조언하기", items: [
        { de: "Man muss auch mal Grenzen setzen.", ko: "가끔은 선을 그어야 해요." },
        { de: "Dann sprichst du mit dem Chef.", ko: "그럼 팀장님께 말해 봐요." }
      ] }
    ]
  },
  {
    no: 5, lv: "MZ",
    title: "Fußball in der Kneipe", titleKo: "술집에서 축구 보기", type: "Hobby", typeKo: "취미",
    intro: "토요일 경기를 함께 볼 장소와 시간을 정하고 결과를 내기하는 대화예요.",
    focus: ["Klar · Na ja", "tippen · wetten", "'nen · würd"],
    roles: { A: "Jan", B: "Mara" },
    turns: [
      { r: "A", de: "Mara, hast du am Samstag Zeit? Da spielt unser Verein gegen Köln.", ko: "마라, 토요일에 시간 있어요? 우리 팀이 쾰른이랑 경기해요." },
      { r: "B", de: "Klar, das lass ich mir doch nicht entgehen. Wo wollen wir gucken, bei dir oder in der Kneipe?", ko: "당연하죠, 그걸 놓칠 수는 없어요. 어디서 볼까요, 당신 집이요, 아니면 술집이요?" },
      { r: "A", de: "Ich würd sagen, in der Kneipe. Da ist die Stimmung viel besser als allein vor dem Fernseher.", ko: "술집이 좋겠어요. 혼자 TV 앞에 있는 것보다 분위기가 훨씬 좋아요." },
      { r: "B", de: "Stimmt auch wieder. Aber da ist es oft total voll. Wir müssen früh hin, sonst kriegen wir keinen Platz.", ko: "그 말도 맞아요. 그런데 거기는 자주 사람이 꽉 차요. 일찍 가야 해요, 안 그러면 자리를 못 잡아요." },
      { r: "A", de: "Dann treffen wir uns um halb zwei. Anpfiff ist um halb vier, das reicht locker.", ko: "그럼 1시 반에 만나요. 킥오프는 3시 반이라서 여유 있어요." },
      { r: "B", de: "Gut. Was glaubst du denn, wie das ausgeht? Ich tipp auf ein Unentschieden.", ko: "좋아요. 결과가 어떻게 될 것 같아요? 저는 무승부에 걸래요." },
      { r: "A", de: "Echt? Ich glaub, wir gewinnen zwei zu eins. Die Mannschaft ist gerade richtig gut drauf.", ko: "정말요? 저는 우리가 2대 1로 이길 거라고 생각해요. 선수들이 지금 컨디션이 아주 좋아요." },
      { r: "B", de: "Na ja, abwarten. Letzte Saison haben sie auch am Anfang gut gespielt und dann total abgebaut.", ko: "글쎄요, 두고 봐야죠. 지난 시즌에도 처음에는 잘하다가 완전히 무너졌잖아요." },
      { r: "A", de: "Stimmt, das war schon ärgerlich. Aber diesmal haben sie 'nen neuen Trainer, und der macht vieles anders.", ko: "맞아요, 정말 아쉬웠죠. 하지만 이번에는 새 감독이 있고, 많은 걸 다르게 해요." },
      { r: "B", de: "Ich lass mich überraschen. Wetten wir um ein Bier?", ko: "어떻게 되나 보죠. 맥주 한 잔 내기할까요?" },
      { r: "A", de: "Gern! Wer verliert, zahlt die Runde.", ko: "좋아요! 지는 사람이 한 턱 쏘기예요." },
      { r: "B", de: "Abgemacht. Dann bis Samstag, und vergiss deinen Schal nicht!", ko: "그렇게 해요. 그럼 토요일에 봐요, 목도리 잊지 말고요!" }
    ],
    umg: [
      { de: "Klar", t: 2, ko: "물론이죠, 당연하죠", std: "Selbstverständlich", reg: "구어" },
      { de: "lass ich mir doch nicht entgehen", t: 2, ko: "놓칠 수 없어요 (lasse의 e 탈락)", std: "lasse ich mir nicht entgehen", reg: "축약" },
      { de: "Kneipe", t: 2, ko: "동네 술집", std: "Gaststätte, Bar", reg: "구어" },
      { de: "Ich würd sagen", t: 3, ko: "…라고 하겠어요 (würde의 e 탈락)", std: "Ich würde sagen", reg: "축약" },
      { de: "Stimmt auch wieder", t: 4, ko: "그 말도 맞네요", std: "Da hast du auch recht.", reg: "구어" },
      { de: "total voll", t: 4, ko: "꽉 찬", std: "sehr voll", reg: "구어" },
      { de: "kriegen", t: 4, ko: "얻다, 받다", std: "bekommen", reg: "구어" },
      { de: "locker", t: 5, ko: "여유롭게, 충분히", std: "ohne Probleme", reg: "구어" },
      { de: "tipp auf", t: 6, ko: "…이라고 예상하다, 걸다", std: "tippe auf", reg: "축약" },
      { de: "richtig gut drauf", t: 7, ko: "컨디션이 아주 좋은", std: "in sehr guter Form", reg: "구어" },
      { de: "Na ja", t: 8, ko: "글쎄요 (완전히 동의하지는 않을 때)", std: "Nun ja", reg: "추임새" },
      { de: "abgebaut", t: 8, ko: "무너지다, 기량이 떨어지다 (abbauen)", std: "nachgelassen", reg: "구어" },
      { de: "'nen", t: 9, ko: "einen의 구어 축약", std: "einen", reg: "축약" },
      { de: "Ich lass mich überraschen", t: 10, ko: "어떻게 될지 지켜볼게요", std: "Ich lasse mich überraschen.", reg: "구어" },
      { de: "Wetten wir", t: 10, ko: "내기할까요?", std: "Sollen wir wetten?", reg: "구어" },
      { de: "zahlt die Runde", t: 11, ko: "한 턱 쏘다 (모두의 술값을 내다)", std: "bezahlt für alle", reg: "구어" },
      { de: "Abgemacht", t: 12, ko: "그렇게 해요", std: "Einverstanden", reg: "구어" }
    ],
    redemittel: [
      { group: "약속 · 장소 정하기", items: [
        { de: "Hast du am Samstag Zeit?", ko: "토요일에 시간 있어요?" },
        { de: "Ich würd sagen, in der Kneipe.", ko: "술집이 좋겠어요." },
        { de: "Wir müssen früh hin, sonst kriegen wir keinen Platz.", ko: "일찍 가야 해요, 안 그러면 자리를 못 잡아요." }
      ] },
      { group: "예상 말하기", items: [
        { de: "Ich tipp auf …", ko: "저는 …에 걸래요." },
        { de: "Ich glaub, wir gewinnen …", ko: "우리가 …로 이길 것 같아요." }
      ] },
      { group: "내기하기", items: [
        { de: "Wetten wir um …?", ko: "…를 걸고 내기할까요?" },
        { de: "Wer verliert, zahlt die Runde.", ko: "지는 사람이 한 턱 쏘기예요." }
      ] }
    ]
  },
  {
    no: 6, lv: "MZ",
    title: "Das WG-Casting", titleKo: "룸메이트 면접", type: "Wohnen", typeKo: "주거",
    intro: "공동 주택(WG)에 들어가려는 사람이 기존 입주자와 만나 생활 규칙을 이야기하는 대화예요.",
    focus: ["Sag mal · Hauptsache", "was = etwas", "Wohnen und Alltag"],
    roles: { A: "Paula", B: "Daniel" },
    turns: [
      { r: "A", de: "Hi, du bist bestimmt Daniel. Komm rein, die Schuhe kannst du einfach hier abstellen.", ko: "안녕하세요, 다니엘이시죠? 들어와요, 신발은 그냥 여기에 두면 돼요." },
      { r: "B", de: "Hallo Paula, danke. Schön habt ihr's hier! Die Wohnung ist viel größer, als ich gedacht hab.", ko: "안녕하세요, 파울라. 고마워요. 여기 참 좋네요! 생각했던 것보다 집이 훨씬 커요." },
      { r: "A", de: "Ja, das stimmt. Wir sind zu dritt, jeder hat sein eigenes Zimmer, und es gibt 'ne große Küche. Willst du was trinken?", ko: "네, 맞아요. 세 명이 살고, 각자 자기 방이 있고, 큰 부엌도 있어요. 뭘 좀 마실래요?" },
      { r: "B", de: "Gern, ein Wasser wär super. Sag mal, wie läuft das bei euch mit dem Putzen?", ko: "좋아요, 물이면 좋겠어요. 그런데 청소는 여기서 어떻게 해요?" },
      { r: "A", de: "Wir haben 'nen Putzplan. Jeder ist eine Woche dran. Ist eigentlich recht entspannt.", ko: "청소 당번표가 있어요. 각자 일주일씩 맡아요. 사실 꽤 부담 없는 편이에요." },
      { r: "B", de: "Das klingt gut. Ich bin ziemlich ordentlich, nur manchmal bleibt das Geschirr ein bisschen länger stehen.", ko: "좋게 들려요. 저는 꽤 깔끔한 편인데, 가끔 설거지가 조금 오래 쌓여 있긴 해요." },
      { r: "A", de: "Haha, kenn ich. Dafür ist die Spülmaschine ja da. Und was machst du so beruflich?", ko: "하하, 저도 알아요. 그래서 식기세척기가 있는 거죠. 그런데 일은 뭘 해요?" },
      { r: "B", de: "Ich arbeite als Grafiker, meistens von zu Hause. Das heißt, ich bin tagsüber öfter da. Stört dich das?", ko: "그래픽 디자이너로 일하고, 대부분 집에서 해요. 그러니까 낮에 집에 있는 날이 많아요. 불편해요?" },
      { r: "A", de: "Überhaupt nicht. Tagsüber sind wir sowieso fast nie da. Hauptsache, du bist abends nicht zu laut.", ko: "전혀요. 낮에는 어차피 우리가 거의 없어요. 중요한 건 저녁에 너무 시끄럽지 않은 거예요." },
      { r: "B", de: "Keine Sorge, ich bin eher der ruhige Typ. Wie viel Miete wären das denn im Monat?", ko: "걱정 마세요, 저는 조용한 편이에요. 한 달에 월세가 얼마나 되나요?" },
      { r: "A", de: "Vierhundertfünfzig warm, also mit allem drin. Internet und Strom sind auch dabei.", ko: "관리비 포함 450유로예요, 그러니까 전부 다 들어 있어요. 인터넷과 전기도 포함이에요." },
      { r: "B", de: "Das ist fair. Ich würd's gern nehmen. Wann erfahr ich denn, ob es klappt?", ko: "합리적이네요. 꼭 들어오고 싶어요. 언제쯤 결과를 알 수 있을까요?" },
      { r: "A", de: "Wir melden uns bis Freitag bei dir. Aber mein Bauchgefühl sagt: Das passt.", ko: "금요일까지 연락드릴게요. 그런데 제 직감으로는 잘 맞을 것 같아요." },
      { r: "B", de: "Super, ich freu mich! Vielen Dank für die Einladung.", ko: "좋아요, 기대돼요! 초대해 주셔서 정말 고마워요." }
    ],
    umg: [
      { de: "Hi", t: 1, ko: "안녕 (가벼운 인사)", std: "Guten Tag", reg: "구어" },
      { de: "habt ihr's", t: 2, ko: "…를 갖고 있다 (habt ihr es의 축약)", std: "habt ihr es", reg: "축약" },
      { de: "gedacht hab", t: 2, ko: "생각했던 (habe의 e 탈락)", std: "gedacht habe", reg: "축약" },
      { de: "'ne", t: 3, ko: "eine의 구어 축약", std: "eine", reg: "축약" },
      { de: "was trinken", t: 3, ko: "뭘 좀 마시다 (was = etwas)", std: "etwas trinken", reg: "축약" },
      { de: "Sag mal", t: 4, ko: "그런데요, 있잖아요", std: "Ich möchte gern wissen", reg: "추임새" },
      { de: "wär", t: 4, ko: "…면 좋겠어요 (wäre의 e 탈락)", std: "wäre", reg: "축약" },
      { de: "'nen", t: 5, ko: "einen의 구어 축약", std: "einen", reg: "축약" },
      { de: "dran", t: 5, ko: "차례인, 당번인", std: "an der Reihe", reg: "구어" },
      { de: "recht", t: 5, ko: "꽤, 제법", std: "ziemlich", reg: "구어" },
      { de: "ziemlich", t: 6, ko: "꽤, 상당히", std: "relativ", reg: "구어" },
      { de: "kenn ich", t: 7, ko: "저도 알아요, 그 마음 알아요", std: "Das kenne ich auch.", reg: "구어" },
      { de: "was machst du so beruflich", t: 7, ko: "일은 뭘 하세요? (so = 대략, 부드럽게 묻는 말)", std: "Welchen Beruf haben Sie?", reg: "구어" },
      { de: "Überhaupt nicht", t: 9, ko: "전혀 아니에요", std: "Gar nicht", reg: "구어" },
      { de: "Hauptsache", t: 9, ko: "중요한 건, 그것만 되면", std: "Wichtig ist, dass", reg: "구어" },
      { de: "Typ", t: 10, ko: "…한 사람, 유형", std: "Mensch, Person", reg: "구어" },
      { de: "warm", t: 11, ko: "관리비 포함 (월세 Warmmiete)", std: "inklusive Nebenkosten", reg: "구어" },
      { de: "würd's", t: 12, ko: "그걸 …하고 싶어요 (würde es)", std: "würde es", reg: "축약" },
      { de: "klappt", t: 12, ko: "잘 풀리다, 성사되다", std: "funktioniert", reg: "구어" },
      { de: "Bauchgefühl", t: 13, ko: "직감", std: "Intuition", reg: "구어" },
      { de: "passt", t: 13, ko: "잘 맞다", std: "passt zusammen", reg: "구어" }
    ],
    redemittel: [
      { group: "집 보기", items: [
        { de: "Schön habt ihr's hier!", ko: "여기 참 좋네요!" },
        { de: "Willst du was trinken?", ko: "뭘 좀 마실래요?" }
      ] },
      { group: "생활 규칙 묻기", items: [
        { de: "Wie läuft das bei euch mit dem Putzen?", ko: "청소는 여기서 어떻게 해요?" },
        { de: "Jeder ist eine Woche dran.", ko: "각자 일주일씩 맡아요." },
        { de: "Wie viel Miete wären das im Monat?", ko: "한 달 월세가 얼마나 돼요?" }
      ] },
      { group: "관심 표현 · 마무리", items: [
        { de: "Ich würd's gern nehmen.", ko: "꼭 들어오고 싶어요." },
        { de: "Wann erfahr ich, ob es klappt?", ko: "언제쯤 결과를 알 수 있을까요?" },
        { de: "Mein Bauchgefühl sagt: Das passt.", ko: "제 직감으로는 잘 맞을 것 같아요." }
      ] }
    ]
  }
];
