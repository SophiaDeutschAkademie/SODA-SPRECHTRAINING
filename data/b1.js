/* SODA SPRECHTRAINING · B1 대화문 */
window.DIALOG_DATA = window.DIALOG_DATA || {};
window.DIALOG_DATA.B1 = [
  {
    no: 1, lv: "B1",
    title: "Ärger mit dem Nachbarn", titleKo: "이웃과의 소음 문제", type: "Alltag", typeKo: "생활",
    intro: "소음 문제를 정중하게 꺼내고 합의하는 대화예요.",
    focus: ["불만 말하기", "정중한 요청: könnten Sie", "타협하기"],
    roles: { A: "Nachbarin", B: "Nachbar" },
    turns: [
      { r: "A", de: "Entschuldigung, haben Sie einen Moment Zeit? Ich möchte kurz mit Ihnen über den Lärm sprechen.", ko: "실례합니다, 잠깐 시간 괜찮으세요? 소음 문제로 잠깐 얘기하고 싶어요." },
      { r: "B", de: "Ja, natürlich. Welchen Lärm meinen Sie?", ko: "네, 물론이죠. 어떤 소음을 말씀하시는 거예요?" },
      { r: "A", de: "Nachts gegen eins hört man Musik aus Ihrer Wohnung. Das stört mich sehr, weil ich früh zur Arbeit muss.", ko: "밤 1시쯤 댁에서 음악 소리가 들려요. 제가 아침 일찍 출근해야 해서 많이 방해가 돼요." },
      { r: "B", de: "Oh, das tut mir leid. Ich habe nicht gemerkt, dass man das so laut hört.", ko: "아, 죄송합니다. 그렇게 크게 들리는지 몰랐어요." },
      { r: "A", de: "Könnten Sie die Musik bitte nach 22 Uhr leiser stellen?", ko: "밤 10시 이후에는 음악 소리를 조금 줄여 주실 수 있을까요?" },
      { r: "B", de: "Ja, das mache ich. Allerdings höre ich manchmal auch Lärm von Ihrer Seite, zum Beispiel beim Staubsaugen am Sonntag.", ko: "네, 그렇게 할게요. 다만 저도 가끔 그쪽 소리가 들려요. 예를 들어 일요일에 청소기를 돌릴 때요." },
      { r: "A", de: "Das stimmt, am Sonntag war das nicht ideal. Ich werde künftig nur noch werktags saugen.", ko: "맞아요, 일요일에는 좋지 않았죠. 앞으로는 평일에만 청소기를 돌릴게요." },
      { r: "B", de: "Das wäre gut. Falls wieder Probleme auftauchen, könnten wir uns einmal im Monat zusammensetzen.", ko: "그게 좋겠네요. 다시 문제가 생기면 한 달에 한 번씩 만나서 얘기해요." },
      { r: "A", de: "Gute Idee. Dann sind wir uns einig?", ko: "좋은 생각이에요. 그럼 합의된 거죠?" },
      { r: "B", de: "Ja, abgemacht. Vielen Dank für das offene Gespräch.", ko: "네, 좋아요. 솔직하게 얘기해 주셔서 감사합니다." },
      { r: "A", de: "Gern geschehen. Schönen Abend noch!", ko: "천만에요. 좋은 저녁 보내세요!" }
    ],
    redemittel: [
      { group: "대화 시작", items: [
        { de: "Haben Sie einen Moment Zeit?", ko: "잠깐 시간 괜찮으세요?" },
        { de: "Ich möchte kurz mit Ihnen über … sprechen.", ko: "…에 대해 잠깐 얘기하고 싶어요." }
      ] },
      { group: "문제 말하기", items: [
        { de: "Das stört mich sehr, weil …", ko: "…해서 많이 방해가 돼요." }
      ] },
      { group: "사과", items: [
        { de: "Das tut mir leid.", ko: "죄송합니다." }
      ] },
      { group: "요청", items: [
        { de: "Könnten Sie … bitte …?", ko: "…해 주실 수 있을까요?" }
      ] },
      { group: "대안 제시", items: [
        { de: "Das wäre gut.", ko: "그게 좋겠어요." },
        { de: "Falls … , könnten wir …", ko: "만약 …하면, …할 수 있겠어요." }
      ] },
      { group: "합의", items: [
        { de: "Dann sind wir uns einig?", ko: "그럼 합의된 거죠?" },
        { de: "Ja, abgemacht.", ko: "네, 좋아요." }
      ] }
    ]
  },

  {
    no: 2, lv: "B1",
    title: "Reklamation im Elektronikmarkt", titleKo: "전자제품 매장에서 하자 신고", type: "Beschwerde", typeKo: "항의",
    intro: "산 지 3주 된 스마트폰의 결함을 알리고 해결 방법을 협의하는 대화예요.",
    focus: ["항의하기", "요구 말하기", "wenn · sobald"],
    roles: { A: "Kunde", B: "Mitarbeiter" },
    turns: [
      { r: "A", de: "Guten Tag. Ich habe vor drei Wochen dieses Smartphone bei Ihnen gekauft, aber der Akku hält höchstens zwei Stunden. Das kann doch nicht normal sein.", ko: "안녕하세요. 3주 전에 여기서 이 스마트폰을 샀는데 배터리가 길어야 두 시간밖에 안 가요. 이건 정상이 아니잖아요." },
      { r: "B", de: "Das tut mir leid. Haben Sie den Kaufbeleg dabei?", ko: "죄송합니다. 구매 영수증 가지고 계신가요?" },
      { r: "A", de: "Ja, hier. Außerdem schaltet sich das Gerät manchmal von selbst aus.", ko: "네, 여기 있어요. 게다가 기기가 가끔 저절로 꺼져요." },
      { r: "B", de: "Hm. Haben Sie es schon zurückgesetzt oder ein Update gemacht?", ko: "음. 초기화나 업데이트는 해 보셨나요?" },
      { r: "A", de: "Ja, beides. Es hat nichts geändert. Ich möchte entweder ein neues Gerät oder mein Geld zurück.", ko: "네, 둘 다 해 봤어요. 달라지는 게 없었어요. 새 기기를 받거나 환불받고 싶어요." },
      { r: "B", de: "Wir müssen es zuerst prüfen lassen. Das dauert in der Regel bis zu zwei Wochen. Wenn der Mangel bestätigt wird, bekommen Sie ein Ersatzgerät.", ko: "먼저 점검을 받아야 해요. 보통 최대 2주 걸려요. 결함이 확인되면 교체품을 받으실 수 있어요." },
      { r: "A", de: "Zwei Wochen sind mir zu lang, ich brauche das Telefon für die Arbeit. Gibt es für diese Zeit ein Leihgerät?", ko: "2주는 너무 길어요. 일 때문에 전화가 필요해요. 그동안 쓸 대여 기기가 있나요?" },
      { r: "B", de: "Ein Leihgerät können wir leider nicht anbieten, aber ich kann versuchen, die Prüfung zu beschleunigen. Dann bekommen Sie das Gerät vielleicht schon in einer Woche.", ko: "대여 기기는 아쉽게도 드릴 수 없지만, 점검을 서둘러 보도록 해 볼게요. 그러면 일주일 안에 받으실 수도 있어요." },
      { r: "A", de: "Das wäre schon besser. Und was passiert, wenn der Fehler nicht gefunden wird?", ko: "그게 훨씬 낫네요. 그런데 결함을 찾지 못하면 어떻게 되나요?" },
      { r: "B", de: "Dann bekommen Sie das Gerät unverändert zurück. Aber bei diesem Modell ist der Fehler bekannt, deshalb bin ich zuversichtlich.", ko: "그러면 기기를 그대로 돌려받으세요. 다만 이 모델은 결함이 알려져 있어서 저는 문제없을 거라고 봐요." },
      { r: "A", de: "Gut, dann lasse ich es hier. Bekomme ich das schriftlich?", ko: "알겠어요, 그럼 여기에 맡길게요. 서면으로 받을 수 있나요?" },
      { r: "B", de: "Selbstverständlich. Ich gebe Ihnen einen Reparaturauftrag mit und rufe Sie an, sobald es Neuigkeiten gibt.", ko: "물론이죠. 수리 접수증을 드리고, 새로운 소식이 있으면 바로 전화드릴게요." },
      { r: "A", de: "Danke, das ist fair.", ko: "감사합니다, 공정하네요." }
    ],
    redemittel: [
      { group: "문제 설명", items: [
        { de: "Ich habe vor drei Wochen … gekauft, aber …", ko: "3주 전에 …을 샀는데 …" },
        { de: "Das kann doch nicht normal sein.", ko: "이건 정상이 아니잖아요." }
      ] },
      { group: "요구", items: [
        { de: "Ich möchte entweder … oder …", ko: "…하거나 …하고 싶어요." },
        { de: "Zwei Wochen sind mir zu lang.", ko: "2주는 너무 길어요." }
      ] },
      { group: "묻기", items: [
        { de: "Was passiert, wenn …?", ko: "…하면 어떻게 되나요?" },
        { de: "Bekomme ich das schriftlich?", ko: "서면으로 받을 수 있나요?" }
      ] },
      { group: "점원의 제안", items: [
        { de: "Wir müssen es zuerst prüfen lassen.", ko: "먼저 점검을 받아야 해요." },
        { de: "Ich kann versuchen, die Prüfung zu beschleunigen.", ko: "점검을 서둘러 보도록 해 볼게요." },
        { de: "Ich rufe Sie an, sobald es Neuigkeiten gibt.", ko: "새로운 소식이 있으면 바로 전화드릴게요." }
      ] },
      { group: "마무리", items: [
        { de: "Danke, das ist fair.", ko: "감사합니다, 공정하네요." }
      ] }
    ]
  },

  {
    no: 3, lv: "B1",
    title: "Auto oder Fahrrad?", titleKo: "도심의 자동차와 자전거", type: "Diskussion", typeKo: "토론",
    intro: "도심에 자전거 도로를 늘리는 계획을 두고 의견을 주고받는 대화예요.",
    focus: ["의견 말하기", "찬반 논의", "Konjunktiv II"],
    roles: { A: "Hannah", B: "Lukas" },
    turns: [
      { r: "A", de: "Sag mal, Lukas, hast du schon gehört? Die Stadt will im Zentrum mehr Radwege bauen und dafür Parkplätze streichen. Was hältst du davon?", ko: "있잖아, 루카스, 들었어? 시에서 도심에 자전거 도로를 더 만들고 그 대신 주차 공간을 없앤대. 어떻게 생각해?" },
      { r: "B", de: "Ehrlich gesagt finde ich das übertrieben. Ich bin auf mein Auto angewiesen, weil ich in einem Vorort wohne und der Bus nur alle 30 Minuten fährt.", ko: "솔직히 지나치다고 생각해. 나는 교외에 살고 버스가 30분에 한 대뿐이라서 자동차가 꼭 필요해." },
      { r: "A", de: "Das verstehe ich, aber meiner Meinung nach würden viele Leute umsteigen, wenn es sichere Radwege gäbe. Ich fahre selbst jeden Tag mit dem Fahrrad zur Arbeit, und manchmal ist es wirklich gefährlich.", ko: "이해해. 그래도 내 생각에는 안전한 자전거 도로가 있으면 많은 사람이 바꿀 거야. 나는 매일 자전거로 출근하는데 가끔 정말 위험하거든." },
      { r: "B", de: "Da hast du recht, die Sicherheit ist wichtig. Trotzdem darf man Autofahrer nicht benachteiligen. Was ist mit Handwerkern oder älteren Menschen, die nicht Rad fahren können?", ko: "맞아, 안전은 중요해. 그래도 운전자를 불리하게 만들면 안 돼. 기술자나 자전거를 탈 수 없는 노인은 어떻게 하고?" },
      { r: "A", de: "Das ist ein guter Punkt. Man könnte Ausnahmen für Lieferverkehr und Menschen mit Behinderung machen. Außerdem hätte die Stadt weniger Lärm und bessere Luft.", ko: "좋은 지적이야. 배송 차량이나 장애가 있는 분들은 예외로 할 수 있겠지. 게다가 도시가 더 조용해지고 공기도 좋아질 거야." },
      { r: "B", de: "Das stimmt schon, andererseits würden Geschäfte im Zentrum Kunden verlieren, wenn niemand mehr dort parken kann.", ko: "그건 맞아. 하지만 한편으로는 도심에 주차할 수 없으면 가게들이 손님을 잃을 거야." },
      { r: "A", de: "Ich habe gelesen, dass Radfahrer und Fußgänger im Durchschnitt häufiger einkaufen, weil sie nicht nach einem Parkplatz suchen müssen.", ko: "자전거나 걸어서 오는 사람들은 주차 공간을 찾을 필요가 없어서 평균적으로 더 자주 장을 본다고 읽었어." },
      { r: "B", de: "Kann sein. Mein Vorschlag wäre, zuerst den Bus besser auszubauen. Dann würde ich mein Auto auch öfter stehen lassen.", ko: "그럴 수도 있겠네. 내 제안은 먼저 버스를 더 잘 확충하는 거야. 그러면 나도 차를 더 자주 두고 다닐 거야." },
      { r: "A", de: "Das wäre ein guter Kompromiss: mehr Busse und sichere Radwege.", ko: "좋은 타협안이네. 버스를 늘리고 안전한 자전거 도로도 만드는 거지." },
      { r: "B", de: "Einverstanden. Aber nur, wenn die Parkhäuser am Stadtrand günstig bleiben.", ko: "동의해. 다만 외곽 주차장 요금이 계속 저렴할 때만." },
      { r: "A", de: "Abgemacht! Dann sind wir uns ja fast einig.", ko: "좋아! 그럼 거의 의견이 같네." },
      { r: "B", de: "Fast. Bei Regen nehme ich trotzdem weiter das Auto.", ko: "거의. 그래도 비 오는 날에는 계속 차를 탈 거야." }
    ],
    redemittel: [
      { group: "의견 묻기", items: [
        { de: "Was hältst du davon?", ko: "어떻게 생각해?" }
      ] },
      { group: "의견 말하기", items: [
        { de: "Ehrlich gesagt finde ich das übertrieben.", ko: "솔직히 지나치다고 생각해." },
        { de: "Meiner Meinung nach würden viele … , wenn …", ko: "내 생각에는 …하면 많은 사람이 …할 거야." }
      ] },
      { group: "동의 · 부분 동의", items: [
        { de: "Da hast du recht.", ko: "맞아." },
        { de: "Das ist ein guter Punkt.", ko: "좋은 지적이야." },
        { de: "Das stimmt schon, andererseits …", ko: "맞기는 한데, 한편으로는 …" }
      ] },
      { group: "반론 · 근거", items: [
        { de: "Trotzdem darf man … nicht …", ko: "그래도 …해서는 안 돼." },
        { de: "Ich habe gelesen, dass …", ko: "…라고 읽었어." }
      ] },
      { group: "제안 · 타협", items: [
        { de: "Mein Vorschlag wäre … ", ko: "내 제안은 …야." },
        { de: "Das wäre ein guter Kompromiss.", ko: "좋은 타협안이네." },
        { de: "Einverstanden, aber nur, wenn …", ko: "동의해. 다만 …할 때만." }
      ] }
    ]
  },

  {
    no: 4, lv: "B1",
    title: "Den Urlaub planen", titleKo: "여름휴가 계획 세우기", type: "Planung", typeKo: "계획",
    intro: "두 사람이 휴가지를 비교하고 하나로 정하는 대화예요.",
    focus: ["제안하기", "비교하기", "sonst · allerdings"],
    roles: { A: "Eva", B: "Daniel" },
    turns: [
      { r: "A", de: "Daniel, wir müssen endlich entscheiden, wohin wir im Sommer fahren. Hast du dir schon Gedanken gemacht?", ko: "다니엘, 이제 여름에 어디로 갈지 정해야 해. 생각해 봤어?" },
      { r: "B", de: "Ja, ich hätte Lust auf eine Rundreise durch Italien. Wir könnten Rom, Florenz und Venedig besuchen.", ko: "응, 이탈리아 일주 여행이 하고 싶어. 로마, 피렌체, 베네치아를 둘러볼 수 있을 거야." },
      { r: "A", de: "Klingt interessant, aber im Sommer ist es dort ziemlich heiß und überall sind Touristen. Ich würde lieber ans Meer fahren und mich einfach erholen.", ko: "흥미롭긴 한데, 여름에는 거기가 꽤 덥고 어디나 관광객이 많아. 나는 차라리 바다에 가서 푹 쉬고 싶어." },
      { r: "B", de: "Am Meer finde ich es nach drei Tagen langweilig. Was hältst du von Kroatien? Dort gibt es schöne Strände, aber wir könnten auch Städte und Nationalparks besichtigen.", ko: "나는 바닷가는 3일이면 지루해져. 크로아티아는 어때? 멋진 해변도 있고, 도시와 국립공원도 둘러볼 수 있어." },
      { r: "A", de: "Das gefällt mir schon besser. Wie kommen wir dorthin? Mit dem Auto sind es bestimmt zehn Stunden.", ko: "그게 훨씬 마음에 들어. 거기까지 어떻게 가지? 차로는 분명 열 시간쯤 걸릴 거야." },
      { r: "B", de: "Wir könnten fliegen, das ist allerdings teurer. Oder wir fahren mit dem Auto und machen unterwegs eine Übernachtung in Österreich.", ko: "비행기를 탈 수도 있는데, 그러면 더 비싸. 아니면 차로 가면서 중간에 오스트리아에서 하룻밤 묵을 수 있어." },
      { r: "A", de: "Die Zwischenübernachtung wäre eine gute Lösung. Und wie lange sollen wir bleiben? Ich habe nur zwei Wochen Urlaub.", ko: "중간 숙박이 좋은 방법이겠네. 그런데 얼마나 머물까? 나는 휴가가 2주뿐이야." },
      { r: "B", de: "Zwei Wochen reichen doch. Eine Woche an der Küste, die zweite Woche in den Nationalparks im Landesinneren.", ko: "2주면 충분해. 첫 주는 해안에서, 둘째 주는 내륙의 국립공원에서 보내자." },
      { r: "A", de: "Okay. Wir sollten bald buchen, sonst sind die schönen Unterkünfte weg.", ko: "좋아. 곧 예약해야 해. 안 그러면 좋은 숙소가 다 나가." },
      { r: "B", de: "Stimmt. Ich schaue heute Abend nach Angeboten und schicke dir drei Vorschläge. Dann entscheiden wir gemeinsam.", ko: "맞아. 오늘 저녁에 숙소를 찾아보고 세 가지 후보를 보내 줄게. 그다음 같이 정하자." },
      { r: "A", de: "Perfekt. Ich freue mich schon!", ko: "좋아. 벌써 기대돼!" }
    ],
    redemittel: [
      { group: "제안", items: [
        { de: "Wir könnten … besuchen.", ko: "…을 둘러볼 수 있어." },
        { de: "Was hältst du von …?", ko: "…는 어때?" }
      ] },
      { group: "선호", items: [
        { de: "Ich würde lieber ans Meer fahren.", ko: "나는 차라리 바다에 가고 싶어." },
        { de: "Das gefällt mir schon besser.", ko: "그게 훨씬 마음에 들어." }
      ] },
      { group: "비교", items: [
        { de: "Wir könnten fliegen, das ist allerdings teurer.", ko: "비행기를 탈 수도 있는데, 그러면 더 비싸." },
        { de: "Oder wir fahren mit dem Auto.", ko: "아니면 차로 가자." }
      ] },
      { group: "결정", items: [
        { de: "Wir sollten bald buchen, sonst …", ko: "곧 예약해야 해. 안 그러면 …" },
        { de: "Dann entscheiden wir gemeinsam.", ko: "그다음 같이 정하자." }
      ] }
    ]
  },

  {
    no: 5, lv: "B1",
    title: "Urlaub beim Chef beantragen", titleKo: "상사에게 휴가 신청하기", type: "Beruf", typeKo: "직장",
    intro: "바쁜 시기에 휴가를 신청하며 대안을 제시하고 합의하는 대화예요.",
    focus: ["휴가 신청", "협상하기", "damit · deshalb · wenn"],
    roles: { A: "Mitarbeiterin", B: "Abteilungsleiter" },
    turns: [
      { r: "A", de: "Guten Morgen, Herr Krüger. Haben Sie kurz Zeit? Ich würde gern mit Ihnen über meinen Urlaub sprechen.", ko: "안녕하세요, 크뤼거 부장님. 잠깐 시간 괜찮으세요? 제 휴가에 대해 말씀드리고 싶어요." },
      { r: "B", de: "Guten Morgen, Frau Yoon. Ja, kommen Sie rein. Worum geht es?", ko: "안녕하세요, 윤 씨. 네, 들어오세요. 무슨 일이죠?" },
      { r: "A", de: "Ich möchte vom 15. bis zum 26. Dezember Urlaub nehmen, weil ich meine Familie in Korea besuchen möchte. Ich habe sie seit zwei Jahren nicht gesehen.", ko: "12월 15일부터 26일까지 휴가를 내고 싶어요. 한국에 있는 가족을 만나러 가려고요. 2년 동안 못 봤거든요." },
      { r: "B", de: "Das ist verständlich. Allerdings ist im Dezember bei uns viel los. Wir haben mehrere Projekte, die vor Jahresende fertig sein müssen.", ko: "이해해요. 하지만 12월에는 우리가 많이 바빠요. 연말 전에 끝내야 하는 프로젝트가 여럿 있어요." },
      { r: "A", de: "Ich weiß, das ist eine anstrengende Zeit. Deshalb würde ich die laufenden Aufgaben vorher abschließen. Das Projekt für den Kunden könnte ich bis zum 12. Dezember fertigstellen.", ko: "바쁜 시기라는 걸 알아요. 그래서 진행 중인 업무는 미리 마무리할게요. 고객 프로젝트는 12월 12일까지 끝낼 수 있어요." },
      { r: "B", de: "Das wäre eine Hilfe. Wer soll Sie in dieser Zeit vertreten?", ko: "도움이 되겠네요. 그동안 누가 대신하죠?" },
      { r: "A", de: "Ich habe schon mit Herrn Becker gesprochen. Er wäre bereit, meine Aufgaben zu übernehmen, wenn ich ihn vorher einarbeite.", ko: "벡커 씨와 이미 얘기했어요. 제가 미리 인수인계를 해 주면 제 업무를 맡아 줄 수 있다고 했어요." },
      { r: "B", de: "Gut, dass Sie das schon geklärt haben. Zwei Wochen am Stück sind trotzdem lang. Könnten Sie sich vorstellen, nur eine Woche zu nehmen und die andere im Januar?", ko: "미리 정리해 두셨다니 좋네요. 그래도 2주 연속은 길어요. 한 주만 쓰고 나머지는 1월에 쓰는 건 어떨까요?" },
      { r: "A", de: "Eine Woche wäre für die Reise zu kurz, der Flug allein dauert fast einen Tag. Ich wäre aber bereit, in der Woche davor länger zu arbeiten, damit nichts liegen bleibt.", ko: "한 주는 여행에는 너무 짧아요. 비행만 거의 하루가 걸리거든요. 대신 그 전주에 더 오래 일해서 밀리는 일이 없게 할게요." },
      { r: "B", de: "Das ist ein faires Angebot. Dann genehmige ich den Urlaub unter einer Bedingung: Sie schreiben mir bis Ende nächster Woche eine kurze Übergabe, was Herr Becker alles übernimmt.", ko: "공정한 제안이네요. 한 가지 조건으로 휴가를 승인할게요. 다음 주 말까지 벡커 씨가 무엇을 맡는지 간단한 인수인계서를 써 주세요." },
      { r: "A", de: "Selbstverständlich. Vielen Dank für Ihr Verständnis.", ko: "물론이에요. 이해해 주셔서 감사합니다." },
      { r: "B", de: "Gern. Reichen Sie bitte den Antrag noch offiziell über das Personalportal ein.", ko: "별말씀을요. 인사 포털로 공식 신청서도 제출해 주세요." }
    ],
    redemittel: [
      { group: "용건 꺼내기", items: [
        { de: "Ich würde gern mit Ihnen über … sprechen.", ko: "…에 대해 말씀드리고 싶어요." },
        { de: "Ich möchte … Urlaub nehmen, weil …", ko: "…에 휴가를 내고 싶어요. …하기 때문이에요." }
      ] },
      { group: "상대 입장 받아들이기", items: [
        { de: "Ich weiß, das ist eine anstrengende Zeit.", ko: "바쁜 시기라는 걸 알아요." }
      ] },
      { group: "해결책 제시", items: [
        { de: "Deshalb würde ich … vorher abschließen.", ko: "그래서 …을 미리 마무리할게요." },
        { de: "Ich könnte … bis zum 12. Dezember fertigstellen.", ko: "12월 12일까지 …을 끝낼 수 있어요." },
        { de: "Er wäre bereit, … zu übernehmen.", ko: "그가 …을 맡아 줄 수 있어요." }
      ] },
      { group: "협상", items: [
        { de: "Ich wäre bereit, … , damit …", ko: "…하겠습니다. 그래야 …하니까요." },
        { de: "Dann genehmige ich den Urlaub unter einer Bedingung.", ko: "한 가지 조건으로 휴가를 승인할게요." }
      ] },
      { group: "감사", items: [
        { de: "Vielen Dank für Ihr Verständnis.", ko: "이해해 주셔서 감사합니다." }
      ] }
    ]
  },

  {
    no: 6, lv: "B1",
    title: "Tipps für die Prüfung", titleKo: "시험 준비 조언 주고받기", type: "Rat", typeKo: "조언",
    intro: "시험을 앞두고 고민하는 친구에게 학습 방법을 조언하는 대화예요.",
    focus: ["조언하기", "Konjunktiv II: solltest · würde", "시험 준비"],
    roles: { A: "Sophie", B: "Jin" },
    turns: [
      { r: "A", de: "Hallo Jin! Du siehst müde aus. Ist alles in Ordnung?", ko: "안녕, 진! 피곤해 보여. 별일 없어?" },
      { r: "B", de: "Ehrlich gesagt nicht so ganz. In drei Wochen habe ich meine B1-Prüfung, und ich weiß nicht, wie ich mich am besten vorbereiten soll.", ko: "솔직히 별로 괜찮지 않아. 3주 뒤에 B1 시험이 있는데 어떻게 준비하는 게 가장 좋을지 모르겠어." },
      { r: "A", de: "Was fällt dir denn am schwersten?", ko: "뭐가 제일 어려워?" },
      { r: "B", de: "Das Sprechen. Ich kenne die Grammatik, aber wenn ich vor dem Prüfer sitze, bekomme ich einen Blackout.", ko: "말하기. 문법은 아는데 시험관 앞에 앉으면 머리가 하얘져." },
      { r: "A", de: "Das kenne ich. An deiner Stelle würde ich mit Freunden üben, am besten jeden Tag zehn Minuten. Du könntest dich auch aufnehmen und die Aufnahme danach anhören.", ko: "그 기분 알아. 내가 너라면 친구들과 연습할 거야, 가능하면 매일 10분씩. 녹음해서 나중에 들어 봐도 좋고." },
      { r: "B", de: "Aufnehmen? Das klingt komisch, aber vielleicht hilft es. Und was soll ich mit dem Schreiben machen?", ko: "녹음? 어색하게 들리지만 도움이 될 수도 있겠네. 쓰기는 어떻게 하면 좋을까?" },
      { r: "A", de: "Du solltest Mustertexte lesen und wichtige Redemittel lernen. Aber lerne keine ganzen Texte auswendig, sonst passt am Ende das Thema nicht.", ko: "모범 글을 읽고 중요한 표현을 익히는 게 좋아. 하지만 글 전체를 외우지는 마. 안 그러면 막상 주제가 안 맞을 수 있어." },
      { r: "B", de: "Gute Idee. Ich habe bisher viele Probetests gemacht. Meinst du, das reicht?", ko: "좋은 생각이야. 나는 지금까지 모의고사를 많이 풀었어. 그걸로 충분할까?" },
      { r: "A", de: "Probetests sind wichtig, aber sie allein reichen nicht. Du solltest zwischendurch auch Texte lesen, die dich wirklich interessieren. Dann lernst du Wörter, ohne es zu merken.", ko: "모의고사는 중요하지만 그것만으로는 부족해. 중간중간 정말 관심 있는 글도 읽어야 해. 그러면 모르는 사이에 단어가 늘어." },
      { r: "B", de: "Danke, das hilft mir sehr. Hättest du Lust, nächste Woche mit mir zu üben?", ko: "고마워, 많이 도움이 돼. 다음 주에 같이 연습해 줄래?" },
      { r: "A", de: "Gern! Wie wäre es mit Dienstag nach dem Kurs?", ko: "좋아! 화요일 수업 끝나고 어때?" },
      { r: "B", de: "Perfekt. Ich bringe die Aufgaben mit.", ko: "좋아. 문제지는 내가 가져올게." }
    ],
    redemittel: [
      { group: "고민 이야기", items: [
        { de: "Ich weiß nicht, wie ich mich vorbereiten soll.", ko: "어떻게 준비해야 할지 모르겠어." },
        { de: "Wenn ich vor dem Prüfer sitze, bekomme ich einen Blackout.", ko: "시험관 앞에 앉으면 머리가 하얘져." }
      ] },
      { group: "조언", items: [
        { de: "An deiner Stelle würde ich … ", ko: "내가 너라면 …할 거야." },
        { de: "Du solltest … ", ko: "…하는 게 좋아." },
        { de: "Du könntest dich auch aufnehmen.", ko: "녹음해 봐도 좋아." }
      ] },
      { group: "경고 · 이유", items: [
        { de: "Lerne keine ganzen Texte auswendig, sonst …", ko: "글 전체를 외우지 마. 안 그러면 …" }
      ] },
      { group: "제안 · 약속", items: [
        { de: "Hättest du Lust, mit mir zu üben?", ko: "같이 연습해 줄래?" },
        { de: "Wie wäre es mit Dienstag nach dem Kurs?", ko: "화요일 수업 끝나고 어때?" }
      ] }
    ]
  }
];
