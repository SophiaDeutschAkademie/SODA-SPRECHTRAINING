/* SODA SPRECHTRAINING · MZ 챕터: 독일 젊은 층의 구어체 대화 (2026년 10월 기준)
   slang 항목: de(대화에 실제로 나오는 표현), t(나오는 줄 번호, 1부터), ko, std(표준 독일어), reg(종류), badge(청소년어 선정 기록) */
window.DIALOG_DATA = window.DIALOG_DATA || {};
window.DIALOG_DATA.MZ = [
  {
    no: 1, lv: "MZ",
    title: "Was geht am Wochenende?", titleKo: "주말에 뭐 해요?", type: "Freunde", typeKo: "친구",
    intro: "친구끼리 주말 약속을 잡고 저녁 메뉴를 정하는 대화예요.",
    focus: ["Bock haben", "Same · safe · Läuft", "구어 축약 'ne"],
    roles: { A: "Mika", B: "Jule" },
    turns: [
      { r: "A", de: "Yo Jule, was geht am Wochenende? Hast du Bock auf irgendwas?", ko: "율레, 이번 주말에 뭐 해요? 딱 땡기는 거 있어요?" },
      { r: "B", de: "Ehrlich? Lowkey bin ich komplett platt von der Woche. Ich hab null Bock auf Party.", ko: "솔직히요? 은근히 이번 주 때문에 완전 녹초예요. 파티는 1도 땡기지 않아요." },
      { r: "A", de: "Same, Digga. Aber Lena macht am Samstag 'ne Einweihungsparty, und die ganze Gang ist am Start. Wir sollten wenigstens kurz vorbeischauen.", ko: "저도요, 친구. 그런데 레나가 토요일에 집들이를 하는데 무리 전체가 와요. 적어도 잠깐은 들러야 해요." },
      { r: "B", de: "Wer kommt denn alles? Wenn Tim wieder seine Ex mitbringt, bin ich raus. Das ist mir viel zu awkward.", ko: "누구누구 와요? 팀이 또 전 애인을 데려오면 저는 빠질래요. 너무 어색해요." },
      { r: "A", de: "Tim ist übers Wochenende bei seinen Eltern. Seine Ex ist eh nicht eingeladen. Alles safe.", ko: "팀은 주말에 부모님 댁에 있어요. 전 애인은 어차피 초대도 안 했고요. 문제없어요." },
      { r: "B", de: "Okay, dann komm ich mit. Aber ich bleib nur bis Mitternacht, ich bin echt durch.", ko: "좋아요, 그럼 갈게요. 대신 자정까지만 있을래요. 진짜 방전이에요." },
      { r: "A", de: "Läuft! Wir treffen uns um acht bei mir und bestellen vorher was zu essen. Döner oder Pizza?", ko: "좋아요! 8시에 우리 집에서 만나서 먼저 뭘 시켜 먹어요. 되너 케밥 아니면 피자?" },
      { r: "B", de: "Döner, auf jeden Fall. Aber bitte nicht wieder bei dem Laden an der Ecke. Die haben letztes Mal unsere Bestellung vergessen, das war echt bodenlos.", ko: "무조건 되너예요. 그런데 모퉁이 가게는 제발 또 가지 말아요. 지난번에 주문을 잊어버렸는데, 진짜 너무했어요." },
      { r: "A", de: "Stimmt, krass, ich hab fast 'ne Stunde gewartet. Dann lieber der neue Laden in der Weststraße. Der hat voll gute Bewertungen.", ko: "맞아요, 대박이었죠. 거의 한 시간이나 기다렸어요. 그럼 차라리 Weststraße의 새 가게로 가요. 후기가 진짜 좋아요." },
      { r: "B", de: "Süper, dann bestell ich schon mal. Bist du Team Knoblauch oder Team ohne?", ko: "좋아요, 그럼 제가 먼저 주문할게요. 마늘소스 팀이에요, 아니면 소스 없는 팀이에요?" },
      { r: "A", de: "Team Knoblauch, ohne Diskussion. Und Digga, diesmal sind wir wirklich pünktlich!", ko: "마늘소스 팀이죠, 따질 것도 없어요. 그리고 친구, 이번에는 진짜 제시간에 와요!" },
      { r: "B", de: "Ehrenwort! Bis Samstag.", ko: "맹세해요! 토요일에 봐요." }
    ],
    slang: [
      { de: "was geht", t: 1, ko: "뭐 해요? / 잘 지내요? (안부 인사)", std: "Was machst du? / Wie geht es dir?", reg: "구어" },
      { de: "Bock auf", t: 1, ko: "…하고 싶은 마음, 땡김", std: "Lust auf", reg: "구어" },
      { de: "null Bock", t: 2, ko: "전혀 하고 싶지 않음", std: "keine Lust", reg: "구어" },
      { de: "Lowkey", t: 2, ko: "은근히, 살짝, 겉으로 티 내지 않고", std: "irgendwie, ein bisschen", reg: "영어 차용" },
      { de: "platt", t: 2, ko: "녹초가 된", std: "erschöpft", reg: "구어" },
      { de: "Same", t: 3, ko: "저도요, 마찬가지예요", std: "Mir geht es genauso.", reg: "영어 차용" },
      { de: "Digga", t: [3, 11], ko: "친구, 야 (호칭이자 추임새)", std: "Kumpel, Freund", reg: "은어", badge: "청소년어 2026 후보" },
      { de: "Gang", t: 3, ko: "친구 무리", std: "Freundesgruppe, Clique", reg: "구어" },
      { de: "am Start", t: 3, ko: "와 있는, 참석하는", std: "dabei, anwesend", reg: "구어" },
      { de: "'ne", t: [3, 9], ko: "eine의 구어 축약 (말할 때만, 글에서는 쓰지 않음)", std: "eine", reg: "구어" },
      { de: "bin ich raus", t: 4, ko: "저는 빠질래요 (더 이상 함께하지 않겠다)", std: "Dann nehme ich nicht teil.", reg: "구어" },
      { de: "awkward", t: 4, ko: "어색한, 민망한", std: "unangenehm, peinlich", reg: "영어 차용" },
      { de: "safe", t: 5, ko: "확실한, 문제없는", std: "sicher, in Ordnung", reg: "은어" },
      { de: "durch", t: 6, ko: "방전된, 지칠 대로 지친 (ich bin durch)", std: "erschöpft", reg: "구어" },
      { de: "Läuft", t: 7, ko: "좋아요!, 잘 되고 있어요", std: "Gut! / Einverstanden!", reg: "구어" },
      { de: "bodenlos", t: 8, ko: "너무한, 어이없는", std: "unverschämt, sehr schlecht", reg: "은어" },
      { de: "krass", t: 9, ko: "대박, 심하다 (좋은 뜻도 나쁜 뜻도 가능)", std: "unglaublich, heftig", reg: "구어" },
      { de: "Süper", t: 10, ko: "아주 좋아요 (터키어 süper에서 온 말)", std: "super", reg: "은어", badge: "청소년어 2026 후보" },
      { de: "Team Knoblauch", t: 10, ko: "마늘소스 파 (Team + 선택지: …파)", std: "Ich bin für Knoblauch.", reg: "구어" },
      { de: "Ehrenwort", t: 12, ko: "맹세해요, 약속해요", std: "Ich verspreche es.", reg: "구어" }
    ],
    redemittel: [
      { group: "의향 묻고 답하기", items: [
        { de: "Hast du Bock auf …?", ko: "…하고 싶어요?" },
        { de: "Ich hab null Bock auf …", ko: "…는 전혀 하고 싶지 않아요." }
      ] },
      { group: "맞장구", items: [
        { de: "Same.", ko: "저도요." },
        { de: "Läuft!", ko: "좋아요!" },
        { de: "Alles safe.", ko: "문제없어요." }
      ] },
      { group: "빠지기 · 조건", items: [
        { de: "Wenn …, bin ich raus.", ko: "…하면 저는 빠질래요." }
      ] },
      { group: "지침", items: [
        { de: "Ich bin echt durch.", ko: "저 진짜 방전이에요." }
      ] },
      { group: "약속", items: [
        { de: "Ehrenwort!", ko: "맹세해요!" }
      ] }
    ]
  },

  {
    no: 2, lv: "MZ",
    title: "Ghosting und Situationship", titleKo: "잠수 이별과 썸", type: "Beziehung", typeKo: "연애",
    intro: "연락을 끊고 사라진 사람 때문에 속상한 친구와 이야기하는 대화예요.",
    focus: ["ghosten", "Red Flag · Ick", "구어 반응 표현"],
    roles: { A: "Nele", B: "Ben" },
    turns: [
      { r: "A", de: "Ben, ich muss dir was erzählen. Darf ich kurz ranten?", ko: "벤, 할 얘기가 있어요. 잠깐 하소연해도 돼요?" },
      { r: "B", de: "Klar, spill the tea! Was ist passiert?", ko: "물론이죠, 썰 풀어 봐요! 무슨 일이에요?" },
      { r: "A", de: "Du weißt doch, dass ich seit ein paar Wochen mit Jonas schreibe. Wir waren zweimal Kaffee trinken, und es war richtig nice. Und dann plötzlich: nix mehr. Er hat mich komplett geghostet.", ko: "제가 몇 주째 요나스랑 연락한 거 알죠? 커피도 두 번 마셨고 정말 좋았어요. 그런데 갑자기 아무 연락이 없어요. 완전히 잠수 타 버렸어요." },
      { r: "B", de: "Ernsthaft? Das ist so unreif. Hat er wenigstens noch deine Storys geliked?", ko: "진짜요? 너무 미성숙하네요. 적어도 스토리에 좋아요는 눌렀어요?" },
      { r: "A", de: "Ja, genau das macht mich so fertig! Er schaut jede Story an, aber auf meine Nachrichten antwortet er nicht. Das ist doch eine klare Red Flag, oder?", ko: "네, 바로 그게 저를 힘들게 해요! 스토리는 다 보면서 제 메시지에는 답이 없어요. 이건 명백한 위험 신호죠?" },
      { r: "B", de: "Absolut. Ihr habt ja nie gesagt, was das zwischen euch ist. Das war doch eine klassische Situationship.", ko: "당연하죠. 두 사람이 서로 무슨 사이인지 한 번도 말하지 않았잖아요. 전형적인 '썸'이었어요." },
      { r: "A", de: "Ich weiß. Ich hab halt voll gehofft, dass das was wird. Vielleicht bin ich einfach delulu.", ko: "알아요. 잘될 거라고 진짜 기대했거든요. 어쩌면 제가 그냥 헛된 꿈을 꾸고 있는 걸지도 몰라요." },
      { r: "B", de: "Ein bisschen, aber das ist menschlich. Hast du bei ihm vorher irgendwo einen Ick bekommen?", ko: "조금은요. 하지만 사람이라면 그럴 수 있어요. 그 사람에게 갑자기 정떨어진 순간은 없었어요?" },
      { r: "A", de: "Nee, null Ick. Der war sogar Boyfriend-Material, deshalb tut's so weh.", ko: "아니요, 정떨어진 적 한 번도 없어요. 오히려 남자친구감이었어서 더 아파요." },
      { r: "B", de: "Dann schreib ihm einmal klar, wie du das siehst, und fertig. Wenn er nicht antwortet, ist er raus. Der Macker hat dich nicht verdient.", ko: "그럼 한 번만 분명하게 생각을 적어 보내고 끝내요. 답이 없으면 그 사람은 아웃이에요. 그 인간은 당신을 가질 자격이 없어요." },
      { r: "A", de: "Du hast recht. Ich schreib ihm heute Abend eine kurze Nachricht. Ich will nur nicht cringe wirken.", ko: "맞아요. 오늘 저녁에 짧게 메시지를 보낼게요. 다만 손발이 오그라들어 보이고 싶지 않아요." },
      { r: "B", de: "Das ist nicht cringe, das ist ehrlich. Stabil, so machen wir das! Danach hol ich uns einen Bubble Tea.", ko: "그건 오그라드는 게 아니라 솔직한 거예요. 좋아요, 그렇게 해요! 그다음엔 제가 버블티 사 줄게요." },
      { r: "A", de: "Danke, du bist echt die beste Bestie.", ko: "고마워요, 당신은 정말 최고의 절친이에요." }
    ],
    slang: [
      { de: "ranten", t: 1, ko: "하소연하다, 불만을 쏟아내다", std: "sich aufregen, sich beschweren", reg: "영어 차용" },
      { de: "spill the tea", t: 2, ko: "썰 풀어 봐요, 뒷이야기 들려줘요", std: "Erzähl mir den neuesten Klatsch!", reg: "SNS" },
      { de: "nice", t: 3, ko: "좋은, 괜찮은", std: "schön, gut", reg: "영어 차용" },
      { de: "nix", t: 3, ko: "아무것도 (nichts의 구어)", std: "nichts", reg: "구어" },
      { de: "geghostet", t: 3, ko: "연락을 끊고 잠수 탔다 (ghosten의 과거분사)", std: "den Kontakt ohne Erklärung abgebrochen", reg: "영어 차용" },
      { de: "geliked", t: 4, ko: "좋아요를 눌렀다 (liken의 과거분사)", std: "als gefällt mir markiert", reg: "SNS" },
      { de: "Red Flag", t: 5, ko: "위험 신호, 걸러야 할 행동 (eine Red Flag)", std: "Warnsignal", reg: "SNS" },
      { de: "Situationship", t: 6, ko: "썸, 이름 없는 애매한 관계 (die Situationship)", std: "unklare Beziehung", reg: "영어 차용" },
      { de: "delulu", t: 7, ko: "헛된 기대에 빠진 (delusional에서)", std: "realitätsfern, unrealistisch", reg: "SNS" },
      { de: "Ick", t: [8, 9], ko: "갑자기 정떨어지는 순간 (einen Ick bekommen)", std: "plötzlicher Abtörner", reg: "SNS" },
      { de: "Boyfriend-Material", t: 9, ko: "남자친구감", std: "als fester Partner geeignet", reg: "영어 차용" },
      { de: "ist er raus", t: 10, ko: "그 사람은 아웃이에요 (더는 고려하지 않는다)", std: "dann scheidet er aus", reg: "구어" },
      { de: "Macker", t: 10, ko: "남자애, 인간 (빈정대거나 친근하게)", std: "Typ, Kerl", reg: "은어", badge: "청소년어 2026 후보" },
      { de: "cringe", t: [11, 12], ko: "오그라드는, 손발이 오그라들게 민망한", std: "peinlich", reg: "영어 차용", badge: "청소년어 2021 우승" },
      { de: "Stabil", t: 12, ko: "좋아요, 든든해요 (동의·감탄)", std: "Gut! / Einverstanden!", reg: "은어" },
      { de: "Bestie", t: 13, ko: "절친 (best friend)", std: "beste Freundin, bester Freund", reg: "구어" }
    ],
    redemittel: [
      { group: "이야기 꺼내기", items: [
        { de: "Darf ich kurz ranten?", ko: "잠깐 하소연해도 돼요?" },
        { de: "Spill the tea!", ko: "썰 풀어 봐요!" }
      ] },
      { group: "상황 평가", items: [
        { de: "Das ist doch eine klare Red Flag, oder?", ko: "이건 명백한 위험 신호죠?" },
        { de: "Das war doch eine klassische Situationship.", ko: "전형적인 썸이었어요." }
      ] },
      { group: "위로 · 조언", items: [
        { de: "Wenn er nicht antwortet, ist er raus.", ko: "답이 없으면 그 사람은 아웃이에요." },
        { de: "Das ist nicht cringe, das ist ehrlich.", ko: "그건 오그라드는 게 아니라 솔직한 거예요." }
      ] },
      { group: "동의 · 마무리", items: [
        { de: "Stabil, so machen wir das!", ko: "좋아요, 그렇게 해요!" }
      ] }
    ]
  },

  {
    no: 3, lv: "MZ",
    title: "Aura, Cringe und Algorithmus", titleKo: "SNS와 오그라드는 영상", type: "Social Media", typeKo: "SNS",
    intro: "SNS 피드와 디지털 디톡스를 두고 두 친구가 나누는 대화예요.",
    focus: ["Aura · cringe", "Ragebait · Das crazy", "FOMO · flexen"],
    roles: { A: "Luca", B: "Sophie" },
    turns: [
      { r: "A", de: "Sophie, du musst dir dieses Video ansehen. Ein Typ tanzt mitten im Supermarkt und filmt sich dabei. Das ist so cringe, ich kann nicht mehr.", ko: "소피, 이 영상 꼭 봐요. 어떤 남자가 슈퍼 한복판에서 춤추면서 자기 자신을 찍고 있어요. 너무 오그라들어서 못 보겠어요." },
      { r: "B", de: "Oh nein. Minus tausend Aura! Wie viele Views hat das?", ko: "어머나. 아우라 마이너스 천이네요! 조회수는 얼마나 돼요?" },
      { r: "A", de: "Drei Millionen. Der Algorithmus liebt sowas. Mein FYP besteht nur noch aus Ragebait und Katzenvideos.", ko: "300만이에요. 알고리즘이 이런 걸 좋아하나 봐요. 제 추천 피드는 이제 어그로 영상이랑 고양이 영상뿐이에요." },
      { r: "B", de: "Das crazy. Bei mir ist es genauso, ich doomscrolle jeden Abend zwei Stunden und fühl mich danach schlecht.", ko: "대박이네요. 저도 똑같아요. 매일 저녁 두 시간씩 우울한 콘텐츠를 계속 넘겨 보고, 끝나면 기분이 안 좋아요." },
      { r: "A", de: "Ich sollte echt mal wieder offline gehen. Wie man so sagt: Touch grass.", ko: "진짜 다시 오프라인으로 돌아가야 해요. 흔히들 말하죠, '밖에 나가서 현실을 살아라(touch grass)'." },
      { r: "B", de: "Mach doch eine Woche Social-Media-Detox. Ich hab das letzten Monat probiert, und es war richtig peak. Ich hab drei Bücher gelesen.", ko: "일주일 동안 SNS 디톡스를 해 봐요. 저는 지난달에 해 봤는데 진짜 최고였어요. 책을 세 권이나 읽었거든요." },
      { r: "A", de: "Hattest du da keine FOMO? Ich hab immer Angst, was zu verpassen, vor allem bei den Storys von allen.", ko: "그때 FOMO(소외 불안) 안 왔어요? 저는 늘 뭔가 놓칠까 봐 겁나요. 특히 다른 사람들 스토리를 볼 때요." },
      { r: "B", de: "Am Anfang schon, aber nach drei Tagen war's mir egal. Und ehrlich: Die meisten Storys sind eh nur Flexen.", ko: "처음엔 그랬는데 사흘 지나니까 신경 안 쓰였어요. 솔직히 대부분의 스토리는 그냥 자랑질이에요." },
      { r: "A", de: "Stimmt, alle flexen mit ihrem Urlaub oder dem neuen Outfit. Und unter jedem Post sind Hater, die nur meckern.", ko: "맞아요, 다들 휴가나 새 옷을 자랑하죠. 그리고 모든 게시물 밑에는 불평만 하는 안티들이 있어요." },
      { r: "B", de: "Und die Influencer verdienen sogar noch am Hate. Das ist doch nur ein Hamsterrad.", ko: "게다가 인플루언서들은 그 악플로도 돈을 벌어요. 그냥 쳇바퀴잖아요." },
      { r: "A", de: "Okay, du hast mich überzeugt. Ab Montag bin ich eine Woche komplett offline. Aber nur, wenn du mitmachst.", ko: "알겠어요, 설득됐어요. 월요일부터 일주일 동안 완전히 오프라인이에요. 대신 당신도 같이 해야 해요." },
      { r: "B", de: "Deal! Und wenn wir es schaffen, gönnen wir uns einen Döner. Das ist dann der Peak der Woche.", ko: "좋아요! 해내면 되너 케밥으로 보상해요. 그게 이번 주의 하이라이트가 될 거예요." }
    ],
    slang: [
      { de: "cringe", t: 1, ko: "오그라드는, 대신 민망한", std: "peinlich", reg: "영어 차용", badge: "청소년어 2021 우승" },
      { de: "Aura", t: 2, ko: "아우라, 분위기와 존재감 (\"minus 1000 Aura\"는 망신당한 순간)", std: "Ausstrahlung, Charisma", reg: "SNS", badge: "청소년어 2024 우승" },
      { de: "Views", t: 2, ko: "조회수", std: "Aufrufe", reg: "영어 차용" },
      { de: "FYP", t: 3, ko: "추천 피드 (For You Page)", std: "personalisierte Startseite", reg: "SNS" },
      { de: "Ragebait", t: 3, ko: "분노를 일부러 끌어내려는 어그로 콘텐츠", std: "Inhalte, die gezielt Wut auslösen", reg: "SNS", badge: "청소년어 2026 우승" },
      { de: "Das crazy", t: 4, ko: "대박 / 와 (어떤 상황에도 붙는 반응. 놀람, 무관심 모두)", std: "Das ist ja verrückt.", reg: "은어", badge: "청소년어 2025 우승" },
      { de: "doomscrolle", t: 4, ko: "우울한 뉴스를 끝없이 넘겨 보다 (doomscrollen)", std: "stundenlang negative Nachrichten lesen", reg: "SNS" },
      { de: "Touch grass", t: 5, ko: "화면을 끄고 밖에 나가 현실을 살아라", std: "Geh mal wieder raus an die frische Luft.", reg: "SNS" },
      { de: "peak", t: 6, ko: "최고의, 10점 만점에 10점", std: "großartig, der Höhepunkt", reg: "은어", badge: "청소년어 2026 2위" },
      { de: "FOMO", t: 7, ko: "놓칠까 불안해하는 마음 (Fear of Missing Out)", std: "Angst, etwas zu verpassen", reg: "영어 차용" },
      { de: "Flexen", t: [8, 9], ko: "과시하다, 자랑하다", std: "angeben", reg: "영어 차용" },
      { de: "Hater", t: 9, ko: "악플러, 안티", std: "Menschen, die nur Hass verbreiten", reg: "영어 차용" },
      { de: "Influencer", t: 10, ko: "인플루언서", std: "Meinungsmacher in sozialen Medien", reg: "영어 차용" },
      { de: "Hamsterrad", t: 10, ko: "쳇바퀴 (벗어날 수 없는 반복)", std: "ewiger Kreislauf", reg: "구어" },
      { de: "Peak", t: 12, ko: "정점, 하이라이트 (명사로 쓴 경우)", std: "Höhepunkt", reg: "은어", badge: "청소년어 2026 2위" }
    ],
    redemittel: [
      { group: "반응하기", items: [
        { de: "Das ist so cringe.", ko: "너무 오그라들어요." },
        { de: "Das crazy.", ko: "대박이네요." },
        { de: "Minus tausend Aura!", ko: "아우라 마이너스 천이에요!" }
      ] },
      { group: "공감", items: [
        { de: "Bei mir ist es genauso.", ko: "저도 똑같아요." }
      ] },
      { group: "추천하기", items: [
        { de: "Mach doch eine Woche …", ko: "일주일 동안 …해 봐요." },
        { de: "Es war richtig peak.", ko: "진짜 최고였어요." }
      ] },
      { group: "비판", items: [
        { de: "Die meisten … sind eh nur …", ko: "대부분의 …는 어차피 …일 뿐이에요." }
      ] },
      { group: "내기 · 결심", items: [
        { de: "Du hast mich überzeugt.", ko: "설득됐어요." },
        { de: "Deal!", ko: "좋아요, 그렇게 해요!" }
      ] }
    ]
  },

  {
    no: 4, lv: "MZ",
    title: "Quiet Quitting", titleKo: "조용한 퇴사와 워라밸", type: "Beruf", typeKo: "직장",
    intro: "불필요한 회의와 야근 문화에 대해 동료와 속마음을 나누는 대화예요.",
    focus: ["Work-Life-Balance", "Boomer · Hustle", "직장 구어체"],
    roles: { A: "Kim", B: "Leon" },
    turns: [
      { r: "A", de: "Alter, das Meeting eben war so unnötig. Das hätte locker eine Mail sein können.", ko: "진짜, 방금 회의는 너무 쓸데없었어요. 메일 한 통이면 충분했을 텐데요." },
      { r: "B", de: "Eine Stunde lang, und am Ende wusste keiner, wer was macht. Mega ineffektiv.", ko: "한 시간이나 했는데 결국 누가 뭘 하는지 아무도 몰랐어요. 정말 비효율적이에요." },
      { r: "A", de: "Und dann sagt der Chef, wir sollen mehr Hustle zeigen. Er meint damit: abends länger bleiben, und zwar unbezahlt. Das ist so Boomer-Denke.", ko: "그런데 팀장님이 더 열정(hustle)을 보이래요. 저녁에 더 남으라는 뜻이에요, 그것도 무급으로요. 완전 꼰대 사고방식이에요." },
      { r: "B", de: "Ich sag's ehrlich: Ich mach nur noch Dienst nach Vorschrift. Quiet Quitting, wie man so sagt. Acht Stunden, dann bin ich raus.", ko: "솔직히 말하면 저는 이제 정해진 만큼만 해요. 요즘 말로 조용한 퇴사죠. 여덟 시간 하면 퇴근이에요." },
      { r: "A", de: "Ist das nicht riskant? Ich bin noch in der Probezeit und will nicht faul wirken.", ko: "위험하지 않아요? 저는 아직 수습 기간이라서 게을러 보이고 싶지 않아요." },
      { r: "B", de: "Verstehe ich. Aber Leistung ist nicht gleich Anwesenheit. Ich liefere meine Aufgaben, aber ich lass mich nicht ausbeuten. Meine Work-Life-Balance ist mir wichtiger als ein Titel.", ko: "이해해요. 그래도 성과는 자리를 지키는 것과 같지 않아요. 맡은 일은 해내지만 착취당하지는 않을 거예요. 직함보다 워라밸이 더 중요해요." },
      { r: "A", de: "Du hast recht. Letztes Jahr war ich fast im Burnout, weil ich ständig Überstunden gemacht hab. Ich war komplett durch.", ko: "맞아요. 작년에는 계속 야근해서 번아웃 직전이었어요. 완전히 방전됐어요." },
      { r: "B", de: "Eben. Eine Firma, die dich so ausnutzt, hat deine Loyalität nicht verdient. Das ist eine absolute Red Flag.", ko: "그래요. 그렇게 이용하는 회사는 충성을 받을 자격이 없어요. 이건 완전 위험 신호예요." },
      { r: "A", de: "Okay, aber wie sag ich das dem Chef? Ich will keinen Beef.", ko: "그런데 팀장님께 어떻게 말하죠? 싸우고 싶지 않아요." },
      { r: "B", de: "Sag einfach klar und höflich, wann du Feierabend machst. Und wenn er blöd reagiert, schreibst du das in eine Mail. Dann hast du es schwarz auf weiß.", ko: "그냥 몇 시에 퇴근하는지 분명하고 공손하게 말해요. 반응이 안 좋으면 메일로 남기고요. 그러면 증거가 남아요." },
      { r: "A", de: "Stabil, mach ich. Ich schreib ihm noch heute und frag nach festen Arbeitszeiten und einem Homeoffice-Tag pro Woche.", ko: "좋아요, 그렇게 할게요. 오늘 안에 메일을 써서 고정 근무 시간과 주 1회 재택근무를 물어볼게요." },
      { r: "B", de: "Slay! Und wenn die Mail raus ist, sagen wir beide: Gute Käse!", ko: "멋져요! 메일을 보내고 나면 우리 둘이서 외쳐요. 'Gute Käse!'(잘될 거야!)" }
    ],
    slang: [
      { de: "Alter", t: 1, ko: "야, 진짜 (호칭이자 감탄 추임새)", std: "Mensch! / Ehrlich!", reg: "구어" },
      { de: "hätte locker eine Mail sein können", t: 1, ko: "메일 한 통이면 충분했을 텐데 (불필요한 회의를 비꼬는 말)", std: "Das war ein unnötiges Treffen.", reg: "SNS" },
      { de: "Mega", t: 2, ko: "엄청, 아주", std: "sehr", reg: "구어" },
      { de: "Hustle", t: 3, ko: "열정적으로 몰아붙이는 일하기 방식", std: "großer Einsatz, hartes Arbeiten", reg: "영어 차용" },
      { de: "Boomer-Denke", t: 3, ko: "꼰대 같은 사고방식 (Boomer는 낡은 생각을 가진 윗세대를 가리킴. 무례하게 들릴 수 있어요)", std: "veraltete Denkweise", reg: "SNS" },
      { de: "Dienst nach Vorschrift", t: 4, ko: "정해진 근무만 하는 것 (표준 독일어 관용구)", std: "nur das Nötigste arbeiten", reg: "표준" },
      { de: "Quiet Quitting", t: 4, ko: "조용한 퇴사 (그만두지 않고 정해진 만큼만 일함)", std: "innere Kündigung", reg: "SNS" },
      { de: "bin ich raus", t: 4, ko: "그럼 저는 끝이에요 (퇴근이에요)", std: "dann habe ich Feierabend", reg: "구어" },
      { de: "Work-Life-Balance", t: 6, ko: "일과 삶의 균형, 워라밸", std: "Gleichgewicht zwischen Arbeit und Privatleben", reg: "영어 차용" },
      { de: "Burnout", t: 7, ko: "번아웃", std: "Erschöpfungszustand durch Überlastung", reg: "영어 차용" },
      { de: "komplett durch", t: 7, ko: "완전히 방전된", std: "völlig erschöpft", reg: "구어" },
      { de: "Red Flag", t: 8, ko: "위험 신호 (eine Red Flag)", std: "Warnsignal", reg: "SNS" },
      { de: "Beef", t: 9, ko: "싸움, 갈등", std: "Streit, Konflikt", reg: "은어" },
      { de: "Stabil", t: 11, ko: "좋아요, 든든해요", std: "Gut! / Einverstanden!", reg: "은어" },
      { de: "Slay", t: 12, ko: "멋져요, 잘해냈어요", std: "Das hast du großartig gemacht!", reg: "SNS" },
      { de: "Gute Käse", t: 12, ko: "잘될 거예요 (일부러 문법에 안 맞게 쓰는 밈)", std: "Das wird schon gut.", reg: "SNS", badge: "청소년어 2026 후보" }
    ],
    redemittel: [
      { group: "회의 불평", items: [
        { de: "Das hätte locker eine Mail sein können.", ko: "메일 한 통이면 충분했을 텐데요." }
      ] },
      { group: "입장 말하기", items: [
        { de: "Ich mach nur noch Dienst nach Vorschrift.", ko: "저는 이제 정해진 만큼만 해요." },
        { de: "Leistung ist nicht gleich Anwesenheit.", ko: "성과는 자리를 지키는 것과 같지 않아요." }
      ] },
      { group: "우려", items: [
        { de: "Ist das nicht riskant?", ko: "위험하지 않아요?" },
        { de: "Ich will keinen Beef.", ko: "싸우고 싶지 않아요." }
      ] },
      { group: "조언", items: [
        { de: "Sag einfach klar und höflich, …", ko: "그냥 분명하고 공손하게 …라고 말해요." },
        { de: "Dann hast du es schwarz auf weiß.", ko: "그러면 증거가 남아요." }
      ] },
      { group: "응원", items: [
        { de: "Stabil, mach ich.", ko: "좋아요, 그렇게 할게요." },
        { de: "Slay!", ko: "멋져요!" }
      ] }
    ]
  },

  {
    no: 5, lv: "MZ",
    title: "Zocken mit Headset", titleKo: "헤드셋 끼고 게임하기", type: "Gaming", typeKo: "게임",
    intro: "온라인 게임에서 팀원끼리 쓰는 구어체와 게임 용어가 나오는 대화예요.",
    focus: ["Gaming-Slang", "Schere · Crashout", "영어 차용 동사"],
    roles: { A: "Jan", B: "Mara" },
    turns: [
      { r: "A", de: "Yo Mara, bist du on? Ich warte schon zehn Minuten in der Lobby.", ko: "마라, 접속했어요? 벌써 10분째 로비에서 기다리고 있어요." },
      { r: "B", de: "Sorry, bin gleich da, ich musste noch schnell was essen. Ich joine jetzt.", ko: "미안해요, 곧 가요. 밥을 얼른 먹어야 했거든요. 지금 들어가요." },
      { r: "A", de: "Endlich. Wir sind zu viert. Wir machen heute den Raid, aber bitte kein Chaos wie letztes Mal.", ko: "드디어요. 네 명이에요. 오늘은 레이드를 할 건데 지난번처럼 난장판은 사양이에요." },
      { r: "B", de: "Ey, das war nicht meine Schuld, ich hab gelagt! Mein Ping war bei 300. Ich bin doch kein Noob.", ko: "아니, 제 잘못 아니에요, 렉이 걸렸어요! 핑이 300이었어요. 저 초보 아니거든요." },
      { r: "A", de: "Ja ja. Also: Ich tanke, du heilst, und die anderen zwei machen Damage. Wenn wir den Boss legen, gibt's richtig guten Loot.", ko: "네, 네. 그럼 저는 탱커, 마라는 힐러, 나머지 둘은 딜러예요. 보스를 잡으면 아주 좋은 전리품이 나와요." },
      { r: "B", de: "Plan steht. Und wenn wir wipen, hab ich einen Crashout, nur dass du's weißt.", ko: "계획은 알겠어요. 그리고 우리가 전멸하면 저 폭발해요, 미리 말해 두는 거예요." },
      { r: "A", de: "Achtung, links! Der Typ hinter dir!", ko: "조심해요, 왼쪽! 뒤에 있는 놈이요!" },
      { r: "B", de: "Schere, ich hab's komplett vergeigt! Ich heil dich sofort, bleib stehen!", ko: "미안해요, 제가 완전히 망쳤어요! 바로 치유할게요, 가만히 있어요!" },
      { r: "A", de: "Alles gut, kein Ding. Du bist heute der absolute Carry, Mara. Ohne dich wären wir längst raus.", ko: "괜찮아요, 별일 아니에요. 오늘은 마라가 완전 캐리해요. 마라가 없었다면 벌써 탈락했을 거예요." },
      { r: "B", de: "Ich weiß. Ich hab halt Main-Character-Energy.", ko: "알아요. 제가 원래 주인공 기운이 있잖아요." },
      { r: "A", de: "Haha, okay. Boss ist down, GG! Und der Loot ist richtig peak: ein legendäres Schwert!", ko: "하하, 알겠어요. 보스 처치, GG! 전리품도 진짜 최고예요. 전설 검이에요!" },
      { r: "B", de: "GG, Leute! Das machen wir morgen nochmal. Ich muss jetzt aber AFK, mein Bruder braucht den Router.", ko: "GG, 여러분! 내일 또 해요. 근데 지금은 자리를 비워야 해요. 형제가 공유기가 필요하대요." },
      { r: "A", de: "Alles klar. Aber bitte nicht wieder bis vier Uhr nachts grinden, sonst bist du morgen komplett durch.", ko: "알겠어요. 그런데 또 새벽 4시까지 노가다 하지는 마요. 안 그러면 내일 또 녹초예요." }
    ],
    slang: [
      { de: "bist du on", t: 1, ko: "접속해 있어요? (온라인 상태)", std: "bist du online?", reg: "게임" },
      { de: "Lobby", t: 1, ko: "로비, 게임 시작 전 대기 공간", std: "Warteraum", reg: "게임" },
      { de: "joine", t: 2, ko: "들어가다, 참가하다 (joinen)", std: "beitreten, mitmachen", reg: "게임" },
      { de: "Raid", t: 3, ko: "여럿이서 강한 보스를 공략하는 콘텐츠", std: "gemeinsamer Angriff auf einen starken Gegner", reg: "게임" },
      { de: "gelagt", t: 4, ko: "렉이 걸렸다 (lagen의 과거분사)", std: "Verzögerung bei der Verbindung gehabt", reg: "게임" },
      { de: "Ping", t: 4, ko: "서버 반응 속도(핑)", std: "Verbindungsverzögerung", reg: "게임" },
      { de: "Noob", t: 4, ko: "초보 (놀리는 말이니 친구 사이에서만)", std: "Anfänger", reg: "게임" },
      { de: "legen", t: 5, ko: "(보스를) 쓰러뜨리다", std: "besiegen", reg: "게임" },
      { de: "Loot", t: [5, 11], ko: "전리품, 드롭 아이템", std: "Beute", reg: "게임" },
      { de: "wipen", t: 6, ko: "파티가 전멸하다", std: "alle sterben", reg: "게임" },
      { de: "Crashout", t: 6, ko: "감정이 폭발하다, 이성을 잃다 (과장해서 쓰기도 함)", std: "Wutausbruch, Zusammenbruch", reg: "SNS", badge: "청소년어 2026 3위" },
      { de: "Schere", t: 8, ko: "내 실수예요, 미안해요 (게임에서 시작된 말)", std: "Mein Fehler, tut mir leid.", reg: "게임", badge: "청소년어 2026 후보" },
      { de: "vergeigt", t: 8, ko: "망쳤다", std: "verdorben, versagt", reg: "구어" },
      { de: "Carry", t: 9, ko: "캐리, 팀을 이끌어 이기게 하는 사람", std: "Spieler, der das Team zum Sieg führt", reg: "게임" },
      { de: "Main-Character-Energy", t: 10, ko: "주인공 기운 (자신감 있게 구는 태도)", std: "selbstbewusstes Auftreten", reg: "SNS" },
      { de: "GG", t: [11, 12], ko: "수고했어요 (Good Game)", std: "Gut gespielt!", reg: "게임" },
      { de: "peak", t: 11, ko: "최고의", std: "großartig", reg: "은어", badge: "청소년어 2026 2위" },
      { de: "AFK", t: 12, ko: "자리를 비운 (Away From Keyboard)", std: "nicht am Computer", reg: "게임" },
      { de: "grinden", t: 13, ko: "경험치나 재료를 얻으려고 같은 일을 반복하다, 노가다", std: "stundenlang dasselbe wiederholen", reg: "게임" }
    ],
    redemittel: [
      { group: "접속 · 약속", items: [
        { de: "Bist du on?", ko: "접속했어요?" },
        { de: "Ich joine jetzt.", ko: "지금 들어가요." }
      ] },
      { group: "변명", items: [
        { de: "Das war nicht meine Schuld, ich hab gelagt!", ko: "제 잘못 아니에요, 렉 걸렸어요!" }
      ] },
      { group: "사과", items: [
        { de: "Schere, ich hab's vergeigt!", ko: "미안해요, 제가 망쳤어요!" }
      ] },
      { group: "격려", items: [
        { de: "Kein Ding.", ko: "별일 아니에요." },
        { de: "Du bist heute der absolute Carry.", ko: "오늘은 정말 캐리해요." }
      ] },
      { group: "게임 종료", items: [
        { de: "GG, Leute!", ko: "수고했어요, 여러분!" },
        { de: "Ich muss jetzt AFK.", ko: "지금은 자리를 비워야 해요." }
      ] }
    ]
  },

  {
    no: 6, lv: "MZ",
    title: "Das WG-Casting", titleKo: "룸메이트 면접", type: "Wohnen", typeKo: "주거",
    intro: "셰어하우스에 들어가려는 사람이 기존 입주자와 분위기를 맞춰 보는 대화예요.",
    focus: ["WG-Alltag", "Vibe · chillig", "Warmmiete"],
    roles: { A: "Paula", B: "Daniel" },
    turns: [
      { r: "A", de: "Hey, komm rein! Ich bin Paula. Schön, dass du da bist. Ich zeig dir kurz die Bude, dann quatschen wir.", ko: "안녕하세요, 들어와요! 저는 파울라예요. 와 줘서 반가워요. 집을 잠깐 보여 주고 이야기해요." },
      { r: "B", de: "Hi Paula, ich bin Daniel. Die Wohnung sieht schon mal mega aus, die ist ja richtig hell.", ko: "안녕하세요, 파울라. 저는 다니엘이에요. 집이 벌써 정말 멋져 보여요. 엄청 밝네요." },
      { r: "A", de: "Ja, wir lieben das Licht. Dein Zimmer wäre das da hinten, 14 Quadratmeter, klein, aber fein. Die Miete liegt bei 450 Euro warm, inklusive Internet.", ko: "네, 저희도 이 햇빛이 좋아요. 다니엘 방은 저 뒤쪽이고 14제곱미터예요. 작지만 아담하고 좋아요. 월세는 관리비 포함 450유로이고 인터넷도 포함이에요." },
      { r: "B", de: "Passt für mich. Wie läuft das bei euch im Alltag? Habt ihr 'nen Putzplan?", ko: "저는 괜찮아요. 평소에는 어떻게 지내요? 청소 당번표 있어요?" },
      { r: "A", de: "Klar, sonst wird's eklig. Jeder ist eine Woche für Küche und Bad zuständig. Und wir haben 'nen Gruppenchat, da sprechen wir alles ab: Einkaufen, Pfand, Besuch.", ko: "물론이죠, 안 그러면 더러워져요. 각자 일주일씩 주방과 욕실을 맡아요. 단톡방도 있어서 장보기, 공병 보증금, 손님 문제까지 다 거기서 정해요." },
      { r: "B", de: "Cool. Und wie ist so der Vibe bei euch? Eher chillig oder macht ihr jedes Wochenende Party?", ko: "좋네요. 그럼 분위기는 어때요? 주로 느긋한 편이에요, 아니면 주말마다 파티를 해요?" },
      { r: "A", de: "Meistens chillig, ab und zu kochen wir zusammen. Eine Party gibt's höchstens einmal im Monat, und wir sagen vorher Bescheid. Uns ist wichtig, dass sich alle respektieren.", ko: "대부분 느긋하고 가끔 같이 요리해요. 파티는 많아야 한 달에 한 번이고 미리 알려요. 서로 존중하는 게 가장 중요해요." },
      { r: "B", de: "Das ist genau mein Ding. Ich studiere Informatik und bin viel am Zocken oder Lernen. Aber ich hör Musik immer mit Kopfhörern.", ko: "딱 제 스타일이에요. 저는 컴퓨터공학을 전공하고 게임이나 공부를 많이 해요. 하지만 음악은 항상 헤드폰으로 들어요." },
      { r: "A", de: "Hört sich gut an. Wir haben 'ne Katze. Ist das ein Problem für dich?", ko: "좋게 들리네요. 저희는 고양이를 키워요. 괜찮아요?" },
      { r: "B", de: "Null Problem, ich liebe Katzen.", ko: "전혀 문제없어요, 고양이를 정말 좋아해요." },
      { r: "A", de: "Nice. Ich sag dir ehrlich, wie es weitergeht: Wir sehen heute noch fünf andere und schreiben morgen Abend allen zurück.", ko: "좋아요. 앞으로 어떻게 되는지 솔직히 말해 줄게요. 오늘 다섯 명을 더 만나고 내일 저녁에 모두에게 답을 보내요." },
      { r: "B", de: "Okay, fair. Ich hab bei dir direkt ein gutes Gefühl. Vibe-Check bestanden, würde ich sagen.", ko: "네, 공정하네요. 파울라와는 처음부터 느낌이 좋았어요. 분위기 검사는 통과인 것 같아요." },
      { r: "A", de: "Haha, same. Wir melden uns, und ich drück dir schon mal die Daumen.", ko: "하하, 저도요. 연락드릴게요. 미리 행운도 빌어 줄게요." }
    ],
    slang: [
      { de: "Bude", t: 1, ko: "집, 방 (친근한 말)", std: "Wohnung, Zimmer", reg: "구어" },
      { de: "quatschen", t: 1, ko: "수다 떨다, 이야기하다", std: "sich unterhalten", reg: "구어" },
      { de: "mega", t: 2, ko: "엄청 좋은", std: "sehr gut, großartig", reg: "구어" },
      { de: "klein, aber fein", t: 3, ko: "작아도 알차고 좋은 (관용구)", std: "klein, aber schön", reg: "구어" },
      { de: "warm", t: 3, ko: "관리비·난방비를 포함한 월세 (Warmmiete)", std: "inklusive Nebenkosten", reg: "표준" },
      { de: "Passt", t: 4, ko: "괜찮아요, 맞아요", std: "Das passt mir. / Das ist in Ordnung.", reg: "구어" },
      { de: "'nen", t: [4, 5], ko: "einen의 구어 축약 (말할 때만)", std: "einen", reg: "구어" },
      { de: "Gruppenchat", t: 5, ko: "단체 채팅방, 단톡방", std: "gemeinsamer Messenger-Chat", reg: "구어" },
      { de: "Pfand", t: 5, ko: "공병 보증금 (병을 반납하면 돌려받는 돈)", std: "Flaschenpfand", reg: "표준" },
      { de: "Vibe", t: 6, ko: "분위기, 느낌", std: "Stimmung, Atmosphäre", reg: "영어 차용" },
      { de: "chillig", t: [6, 7], ko: "느긋한, 편안한", std: "entspannt", reg: "구어" },
      { de: "mein Ding", t: 8, ko: "딱 제 스타일", std: "genau das, was mir gefällt", reg: "구어" },
      { de: "Zocken", t: 8, ko: "게임하다 (zocken)", std: "Videospiele spielen", reg: "구어" },
      { de: "Null Problem", t: 10, ko: "전혀 문제없어요", std: "Das ist kein Problem.", reg: "구어" },
      { de: "Nice", t: 11, ko: "좋아요", std: "Schön! / Gut!", reg: "영어 차용" },
      { de: "Vibe-Check", t: 12, ko: "분위기가 맞는지 확인하는 일", std: "Prüfung, ob man gut zusammenpasst", reg: "SNS" },
      { de: "same", t: 13, ko: "저도요", std: "Mir geht es genauso.", reg: "영어 차용" },
      { de: "drück dir schon mal die Daumen", t: 13, ko: "행운을 빌다 (die Daumen drücken)", std: "Glück wünschen", reg: "구어" }
    ],
    redemittel: [
      { group: "집 소개", items: [
        { de: "Ich zeig dir kurz die Bude.", ko: "집을 잠깐 보여 줄게요." },
        { de: "Klein, aber fein.", ko: "작지만 알차요." }
      ] },
      { group: "생활 규칙", items: [
        { de: "Habt ihr 'nen Putzplan?", ko: "청소 당번표 있어요?" },
        { de: "Wir sprechen alles im Gruppenchat ab.", ko: "모든 걸 단톡방에서 정해요." }
      ] },
      { group: "분위기 묻기", items: [
        { de: "Wie ist so der Vibe bei euch?", ko: "분위기는 어때요?" },
        { de: "Eher chillig oder … ?", ko: "느긋한 편이에요, 아니면 …?" }
      ] },
      { group: "취향 말하기", items: [
        { de: "Das ist genau mein Ding.", ko: "딱 제 스타일이에요." },
        { de: "Null Problem.", ko: "전혀 문제없어요." }
      ] },
      { group: "마무리", items: [
        { de: "Wir melden uns.", ko: "연락드릴게요." },
        { de: "Ich drück dir die Daumen.", ko: "행운을 빌어요." }
      ] }
    ]
  }
];
