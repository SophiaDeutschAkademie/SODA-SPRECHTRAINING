/* SODA SPRECHTRAINING · A1 대화문 */
window.DIALOG_DATA = window.DIALOG_DATA || {};
window.DIALOG_DATA.A1 = [
  {
    no: 1, lv: "A1",
    title: "Beim Bäcker", titleKo: "빵집에서", type: "Einkauf", typeKo: "쇼핑",
    intro: "빵을 고르고 계산하는 짧은 대화예요.",
    focus: ["주문하기", "가격 묻기", "계산하기"],
    roles: { A: "Verkäuferin", B: "Kunde" },
    turns: [
      { r: "A", de: "Guten Morgen! Was darf es sein?", ko: "안녕하세요! 무엇을 드릴까요?" },
      { r: "B", de: "Guten Morgen. Ich möchte zwei Brötchen, bitte.", ko: "안녕하세요. 빵 두 개 주세요." },
      { r: "A", de: "Gerne. Sonst noch etwas?", ko: "네. 더 필요하신 것 있으세요?" },
      { r: "B", de: "Ja, ein Stück Kuchen, bitte. Wie viel kostet er?", ko: "네, 케이크 한 조각도 주세요. 얼마예요?" },
      { r: "A", de: "Der Kuchen kostet zwei Euro fünfzig. Das macht zusammen fünf Euro fünfzig.", ko: "케이크는 2유로 50센트예요. 전부 5유로 50센트입니다." },
      { r: "B", de: "Kann ich mit Karte bezahlen?", ko: "카드로 계산할 수 있어요?" },
      { r: "A", de: "Ja, natürlich. Bitte halten Sie die Karte hier an das Gerät.", ko: "네, 물론이죠. 카드를 이 기기에 대 주세요." },
      { r: "B", de: "So, fertig. Danke!", ko: "됐어요. 감사합니다!" },
      { r: "A", de: "Danke und einen schönen Tag noch!", ko: "감사합니다. 좋은 하루 보내세요!" },
      { r: "B", de: "Danke, Ihnen auch!", ko: "감사합니다, 당신도요!" }
    ],
    redemittel: [
      { group: "주문", items: [
        { de: "Was darf es sein?", ko: "무엇을 드릴까요?" },
        { de: "Ich möchte … , bitte.", ko: "…을 주세요." },
        { de: "Sonst noch etwas?", ko: "더 필요하신 것 있으세요?" }
      ] },
      { group: "가격", items: [
        { de: "Wie viel kostet er?", ko: "얼마예요?" },
        { de: "Das macht zusammen …", ko: "전부 …입니다." }
      ] },
      { group: "계산", items: [
        { de: "Kann ich mit Karte bezahlen?", ko: "카드로 계산할 수 있어요?" }
      ] },
      { group: "인사", items: [
        { de: "Einen schönen Tag noch!", ko: "좋은 하루 보내세요!" }
      ] }
    ]
  },

  {
    no: 2, lv: "A1",
    title: "Kennenlernen im Deutschkurs", titleKo: "독일어 수업에서 인사하기", type: "Vorstellung", typeKo: "자기소개",
    intro: "새로운 사람에게 이름, 출신, 직업, 언어를 말하는 대화예요.",
    focus: ["자기소개", "W-Fragen", "sein · wohnen · sprechen"],
    roles: { A: "Lena", B: "Min-jun" },
    turns: [
      { r: "A", de: "Hallo! Ich bin Lena. Wie heißt du?", ko: "안녕하세요! 저는 레나예요. 이름이 어떻게 되세요?" },
      { r: "B", de: "Hallo, Lena! Ich heiße Min-jun. Ich komme aus Korea. Woher kommst du?", ko: "안녕하세요, 레나! 저는 민준이에요. 한국에서 왔어요. 어디에서 왔어요?" },
      { r: "A", de: "Ich komme aus Österreich, aus Wien. Wo wohnst du jetzt?", ko: "저는 오스트리아의 빈에서 왔어요. 지금 어디에 살아요?" },
      { r: "B", de: "Ich wohne in Berlin, in Kreuzberg. Und du?", ko: "저는 베를린 크로이츠베르크에 살아요. 당신은요?" },
      { r: "A", de: "Ich wohne auch in Berlin, in Neukölln. Was machst du von Beruf?", ko: "저도 베를린에 살아요, 노이쾰른에요. 직업이 뭐예요?" },
      { r: "B", de: "Ich bin Ingenieur und arbeite bei einer Firma in Berlin. Und du?", ko: "저는 엔지니어이고 베를린의 한 회사에서 일해요. 당신은요?" },
      { r: "A", de: "Ich bin Studentin. Ich studiere Biologie.", ko: "저는 대학생이에요. 생물학을 전공해요." },
      { r: "B", de: "Welche Sprachen sprichst du?", ko: "어떤 언어를 할 수 있어요?" },
      { r: "A", de: "Ich spreche Deutsch, Englisch und ein bisschen Spanisch. Und du?", ko: "저는 독일어, 영어, 그리고 스페인어를 조금 해요. 당신은요?" },
      { r: "B", de: "Ich spreche Koreanisch, ein bisschen Englisch und jetzt Deutsch.", ko: "저는 한국어, 영어를 조금, 그리고 지금은 독일어를 해요." },
      { r: "A", de: "Schön, dich kennenzulernen, Min-jun!", ko: "만나서 반가워요, 민준!" },
      { r: "B", de: "Ich freue mich auch. Bis morgen im Kurs!", ko: "저도 반가워요. 내일 수업에서 봐요!" }
    ],
    redemittel: [
      { group: "이름 · 출신", items: [
        { de: "Ich bin … / Ich heiße …", ko: "저는 …예요. / 제 이름은 …예요." },
        { de: "Woher kommst du?", ko: "어디에서 왔어요?" },
        { de: "Ich komme aus …", ko: "저는 …에서 왔어요." }
      ] },
      { group: "사는 곳", items: [
        { de: "Wo wohnst du jetzt?", ko: "지금 어디에 살아요?" },
        { de: "Ich wohne in …", ko: "저는 …에 살아요." }
      ] },
      { group: "직업", items: [
        { de: "Was machst du von Beruf?", ko: "직업이 뭐예요?" },
        { de: "Ich arbeite bei einer Firma.", ko: "저는 회사에서 일해요." }
      ] },
      { group: "언어", items: [
        { de: "Welche Sprachen sprichst du?", ko: "어떤 언어를 할 수 있어요?" },
        { de: "Ich spreche … und ein bisschen …", ko: "저는 …를 하고 …를 조금 해요." }
      ] },
      { group: "인사", items: [
        { de: "Schön, dich kennenzulernen!", ko: "만나서 반가워요!" },
        { de: "Bis morgen!", ko: "내일 봐요!" }
      ] }
    ]
  },

  {
    no: 3, lv: "A1",
    title: "Nach dem Weg fragen", titleKo: "길 묻기", type: "Orientierung", typeKo: "길 찾기",
    intro: "기차역 가는 길을 묻고 방향을 알아듣는 대화예요.",
    focus: ["길 묻기", "방향 말하기", "gibt es …?"],
    roles: { A: "Tourist", B: "Passantin" },
    turns: [
      { r: "A", de: "Entschuldigung, wo ist der Bahnhof, bitte?", ko: "실례합니다, 기차역이 어디예요?" },
      { r: "B", de: "Der Bahnhof? Gehen Sie hier geradeaus bis zur Ampel.", ko: "기차역이요? 여기서 신호등까지 쭉 가세요." },
      { r: "A", de: "Geradeaus bis zur Ampel. Und dann?", ko: "신호등까지 직진이요. 그다음은요?" },
      { r: "B", de: "Dann gehen Sie links. Die Straße heißt Bahnhofstraße.", ko: "그다음에는 왼쪽으로 가세요. 길 이름은 Bahnhofstraße예요." },
      { r: "A", de: "Links, Bahnhofstraße. Ist das weit?", ko: "왼쪽, Bahnhofstraße요. 먼가요?" },
      { r: "B", de: "Nein, nicht weit. Zu Fuß sind es zehn Minuten.", ko: "아니요, 멀지 않아요. 걸어서 10분이에요." },
      { r: "A", de: "Super. Gibt es dort auch einen Geldautomaten?", ko: "좋아요. 거기에 현금인출기도 있나요?" },
      { r: "B", de: "Ja, der Geldautomat ist direkt am Bahnhof.", ko: "네, 현금인출기는 기차역 바로 옆에 있어요." },
      { r: "A", de: "Vielen Dank! Das ist sehr nett.", ko: "정말 감사합니다! 친절하시네요." },
      { r: "B", de: "Bitte, gern geschehen. Schönen Tag noch!", ko: "천만에요. 좋은 하루 보내세요!" }
    ],
    redemittel: [
      { group: "길 묻기", items: [
        { de: "Entschuldigung, wo ist … , bitte?", ko: "실례합니다, …이 어디예요?" },
        { de: "Ist das weit?", ko: "먼가요?" }
      ] },
      { group: "방향", items: [
        { de: "Gehen Sie geradeaus bis zur Ampel.", ko: "신호등까지 직진하세요." },
        { de: "Dann gehen Sie links.", ko: "그다음 왼쪽으로 가세요." }
      ] },
      { group: "거리 · 시간", items: [
        { de: "Zu Fuß sind es zehn Minuten.", ko: "걸어서 10분이에요." }
      ] },
      { group: "장소 묻기", items: [
        { de: "Gibt es dort auch einen Geldautomaten?", ko: "거기에 현금인출기도 있나요?" }
      ] },
      { group: "감사 · 인사", items: [
        { de: "Bitte, gern geschehen.", ko: "천만에요." }
      ] }
    ]
  },

  {
    no: 4, lv: "A1",
    title: "Im Restaurant", titleKo: "식당에서", type: "Gastronomie", typeKo: "식당",
    intro: "자리를 안내받고, 음식을 주문하고, 계산하는 대화예요.",
    focus: ["음식 주문", "ich nehme + 4격", "계산서 요청"],
    roles: { A: "Kellner", B: "Gast" },
    turns: [
      { r: "A", de: "Guten Abend! Haben Sie reserviert?", ko: "안녕하세요! 예약하셨어요?" },
      { r: "B", de: "Ja, auf den Namen Park, für zwei Personen.", ko: "네, 박 씨 이름으로 두 명이요." },
      { r: "A", de: "Bitte sehr, hier ist Ihr Tisch. Was möchten Sie trinken?", ko: "이쪽입니다, 여기가 자리예요. 무엇을 드시겠어요?" },
      { r: "B", de: "Ich möchte ein Wasser, bitte. Meine Freundin trinkt einen Apfelsaft.", ko: "저는 물 한 잔 주세요. 제 친구는 사과 주스를 마셔요." },
      { r: "A", de: "Gerne. Und was möchten Sie essen?", ko: "알겠습니다. 음식은 무엇을 드시겠어요?" },
      { r: "B", de: "Ich nehme die Gemüsesuppe und das Schnitzel. Meine Freundin nimmt auch das Schnitzel.", ko: "저는 채소 수프와 슈니첼을 주세요. 제 친구도 슈니첼을 주세요." },
      { r: "A", de: "Sehr gern. Guten Appetit!", ko: "네, 알겠습니다. 맛있게 드세요!" },
      { r: "B", de: "Danke. Entschuldigung, die Rechnung, bitte.", ko: "감사합니다. 실례합니다, 계산서 부탁해요." },
      { r: "A", de: "Zusammen oder getrennt?", ko: "같이 계산하시나요, 따로 계산하시나요?" },
      { r: "B", de: "Zusammen, bitte.", ko: "같이 계산해 주세요." },
      { r: "A", de: "Das macht zweiunddreißig Euro.", ko: "32유로입니다." },
      { r: "B", de: "Hier sind vierzig Euro. Stimmt so.", ko: "여기 40유로예요. 거스름돈은 됐어요." },
      { r: "A", de: "Vielen Dank! Auf Wiedersehen!", ko: "감사합니다! 안녕히 가세요!" }
    ],
    redemittel: [
      { group: "예약 · 자리", items: [
        { de: "Haben Sie reserviert?", ko: "예약하셨어요?" },
        { de: "Ja, auf den Namen … , für zwei Personen.", ko: "네, …씨 이름으로 두 명이요." }
      ] },
      { group: "주문", items: [
        { de: "Ich möchte … , bitte.", ko: "…을 주세요." },
        { de: "Ich nehme die Gemüsesuppe.", ko: "저는 채소 수프로 할게요." },
        { de: "Was möchten Sie trinken?", ko: "무엇을 드시겠어요?" }
      ] },
      { group: "식사", items: [
        { de: "Guten Appetit!", ko: "맛있게 드세요!" }
      ] },
      { group: "계산", items: [
        { de: "Die Rechnung, bitte.", ko: "계산서 부탁해요." },
        { de: "Zusammen oder getrennt?", ko: "같이 계산하시나요, 따로 하시나요?" },
        { de: "Stimmt so.", ko: "거스름돈은 됐어요." }
      ] }
    ]
  },

  {
    no: 5, lv: "A1",
    title: "Eine Verabredung", titleKo: "약속 잡기", type: "Telefon", typeKo: "전화",
    intro: "전화로 영화를 보러 가자고 하고 시간과 장소를 정하는 대화예요.",
    focus: ["약속 잡기", "시각 말하기", "요일"],
    roles: { A: "Jonas", B: "Mia" },
    turns: [
      { r: "A", de: "Hallo Mia, hier ist Jonas. Hast du am Samstag Zeit?", ko: "안녕하세요, 미아. 요나스예요. 토요일에 시간 있어요?" },
      { r: "B", de: "Hallo Jonas! Am Samstag? Ja, ich habe Zeit. Was machst du?", ko: "안녕하세요, 요나스! 토요일이요? 네, 시간 있어요. 뭐 해요?" },
      { r: "A", de: "Ich möchte ins Kino gehen. Kommst du mit?", ko: "영화관에 가고 싶어요. 같이 갈래요?" },
      { r: "B", de: "Gute Idee! Welcher Film läuft denn?", ko: "좋은 생각이에요! 무슨 영화를 하는데요?" },
      { r: "A", de: "Eine Komödie. Sie beginnt um 20 Uhr.", ko: "코미디예요. 저녁 8시에 시작해요." },
      { r: "B", de: "Um 20 Uhr ist gut. Wo treffen wir uns?", ko: "8시는 괜찮아요. 어디에서 만날까요?" },
      { r: "A", de: "Vor dem Kino, um 19 Uhr 30. Ist das okay?", ko: "영화관 앞에서 7시 30분에요. 괜찮아요?" },
      { r: "B", de: "Hmm, ich arbeite bis 19 Uhr. Ich komme erst um 19 Uhr 45. Ist das okay?", ko: "음, 저는 7시까지 일해요. 7시 45분에야 도착해요. 괜찮아요?" },
      { r: "A", de: "Ja, kein Problem. Ich kaufe die Karten.", ko: "네, 문제없어요. 제가 표를 살게요." },
      { r: "B", de: "Super, danke! Dann bis Samstag.", ko: "좋아요, 고마워요! 그럼 토요일에 봐요." },
      { r: "A", de: "Bis Samstag! Tschüs!", ko: "토요일에 봐요! 안녕!" }
    ],
    redemittel: [
      { group: "제안", items: [
        { de: "Hast du am Samstag Zeit?", ko: "토요일에 시간 있어요?" },
        { de: "Kommst du mit?", ko: "같이 갈래요?" }
      ] },
      { group: "수락", items: [
        { de: "Gute Idee!", ko: "좋은 생각이에요!" },
        { de: "Ja, ich habe Zeit.", ko: "네, 시간 있어요." }
      ] },
      { group: "시간 · 장소", items: [
        { de: "Sie beginnt um 20 Uhr.", ko: "저녁 8시에 시작해요." },
        { de: "Wo treffen wir uns?", ko: "어디에서 만날까요?" },
        { de: "Vor dem Kino.", ko: "영화관 앞에서요." }
      ] },
      { group: "시간 조정", items: [
        { de: "Ich komme erst um … Uhr. Ist das okay?", ko: "저는 …시에야 와요. 괜찮아요?" },
        { de: "Ja, kein Problem.", ko: "네, 문제없어요." }
      ] },
      { group: "마무리", items: [
        { de: "Bis Samstag!", ko: "토요일에 봐요!" }
      ] }
    ]
  },

  {
    no: 6, lv: "A1",
    title: "Eine Fahrkarte kaufen", titleKo: "기차표 사기", type: "Reise", typeKo: "여행",
    intro: "창구에서 왕복표를 사고 할인을 문의하는 대화예요.",
    focus: ["승차권 구입", "시각", "가격"],
    roles: { A: "Reisender", B: "Mitarbeiterin am Schalter" },
    turns: [
      { r: "A", de: "Guten Tag. Ich möchte eine Fahrkarte nach München, bitte.", ko: "안녕하세요. 뮌헨행 승차권 한 장 주세요." },
      { r: "B", de: "Guten Tag. Einfach oder hin und zurück?", ko: "안녕하세요. 편도인가요, 왕복인가요?" },
      { r: "A", de: "Hin und zurück, bitte.", ko: "왕복으로 주세요." },
      { r: "B", de: "Wann möchten Sie fahren?", ko: "언제 가시겠어요?" },
      { r: "A", de: "Morgen früh, um acht Uhr.", ko: "내일 아침 8시에요." },
      { r: "B", de: "Es gibt einen Zug um 8 Uhr 12. Er ist um 11 Uhr 40 in München.", ko: "8시 12분에 기차가 있어요. 11시 40분에 뮌헨에 도착해요." },
      { r: "A", de: "Gut. Was kostet die Fahrkarte?", ko: "좋아요. 승차권이 얼마예요?" },
      { r: "B", de: "Hin und zurück kostet sie neunzig Euro.", ko: "왕복은 90유로예요." },
      { r: "A", de: "Ich bin Student. Gibt es eine Ermäßigung?", ko: "저는 대학생이에요. 할인이 있나요?" },
      { r: "B", de: "Ja, mit Studentenausweis kostet die Fahrkarte siebzig Euro.", ko: "네, 학생증이 있으면 승차권은 70유로예요." },
      { r: "A", de: "Gut. Hier ist mein Studentenausweis.", ko: "좋아요. 여기 학생증이에요." },
      { r: "B", de: "Danke. Der Zug fährt von Gleis fünf. Gute Reise!", ko: "감사합니다. 기차는 5번 승강장에서 출발해요. 즐거운 여행 되세요!" },
      { r: "A", de: "Danke schön. Auf Wiedersehen!", ko: "감사합니다. 안녕히 계세요!" }
    ],
    redemittel: [
      { group: "표 사기", items: [
        { de: "Ich möchte eine Fahrkarte nach … , bitte.", ko: "…행 승차권 한 장 주세요." },
        { de: "Einfach oder hin und zurück?", ko: "편도인가요, 왕복인가요?" }
      ] },
      { group: "시간", items: [
        { de: "Wann möchten Sie fahren?", ko: "언제 가시겠어요?" },
        { de: "Es gibt einen Zug um … Uhr.", ko: "…시에 기차가 있어요." }
      ] },
      { group: "가격 · 할인", items: [
        { de: "Was kostet die Fahrkarte?", ko: "승차권이 얼마예요?" },
        { de: "Gibt es eine Ermäßigung?", ko: "할인이 있나요?" }
      ] },
      { group: "승강장", items: [
        { de: "Der Zug fährt von Gleis fünf.", ko: "기차는 5번 승강장에서 출발해요." }
      ] },
      { group: "마무리", items: [
        { de: "Gute Reise!", ko: "즐거운 여행 되세요!" }
      ] }
    ]
  }
];
