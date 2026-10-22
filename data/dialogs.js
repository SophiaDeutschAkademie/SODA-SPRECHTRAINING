/* SODA SPRECHTRAINING · 대화문 데이터 (레벨별 1개) */
window.DIALOG_DATA = {
  A1: [{
    no: 1, lv: 'A1',
    title: 'Beim Bäcker', titleKo: '빵집에서', type: 'Einkauf', typeKo: '쇼핑',
    intro: '빵을 고르고 계산하는 짧은 대화예요.',
    roles: { A: 'Verkäuferin', B: 'Kunde' },
    turns: [
      { r: 'A', de: 'Guten Morgen! Was darf es sein?', ko: '안녕하세요! 무엇을 드릴까요?' },
      { r: 'B', de: 'Guten Morgen. Ich möchte zwei Brötchen, bitte.', ko: '안녕하세요. 빵 두 개 주세요.' },
      { r: 'A', de: 'Gerne. Sonst noch etwas?', ko: '네. 더 필요하신 것 있으세요?' },
      { r: 'B', de: 'Ja, ein Stück Kuchen, bitte. Wie viel kostet er?', ko: '네, 케이크 한 조각도요. 얼마예요?' },
      { r: 'A', de: 'Der Kuchen kostet zwei Euro fünfzig. Das macht zusammen fünf Euro fünfzig.', ko: '케이크는 2유로 50센트예요. 전부 5유로 50센트입니다.' },
      { r: 'B', de: 'Kann ich mit Karte bezahlen?', ko: '카드로 계산할 수 있어요?' },
      { r: 'A', de: 'Ja, natürlich. Bitte halten Sie die Karte hier an das Gerät.', ko: '네, 물론이죠. 카드를 이 기기에 대 주세요.' },
      { r: 'B', de: 'So, fertig. Danke!', ko: '됐어요. 감사합니다!' },
      { r: 'A', de: 'Danke und einen schönen Tag noch!', ko: '감사합니다. 좋은 하루 보내세요!' },
      { r: 'B', de: 'Danke, Ihnen auch!', ko: '감사합니다, 당신도요!' }
    ],
    redemittel: [
      { group: '주문', items: [
        { de: 'Was darf es sein?', ko: '무엇을 드릴까요?' },
        { de: 'Ich möchte …, bitte.', ko: '…을 주세요.' },
        { de: 'Sonst noch etwas?', ko: '더 필요하신 것 있으세요?' }
      ] },
      { group: '가격', items: [
        { de: 'Wie viel kostet das?', ko: '얼마예요?' },
        { de: 'Das macht zusammen …', ko: '전부 …입니다.' }
      ] },
      { group: '계산', items: [
        { de: 'Kann ich mit Karte bezahlen?', ko: '카드로 계산할 수 있어요?' }
      ] },
      { group: '인사', items: [
        { de: 'Einen schönen Tag noch!', ko: '좋은 하루 보내세요!' }
      ] }
    ]
  }],

  A2: [{
    no: 1, lv: 'A2',
    title: 'Beim Arzt', titleKo: '병원 예약', type: 'Telefon', typeKo: '전화',
    intro: '전화로 진료 예약을 잡는 대화예요.',
    roles: { A: 'Sprechstundenhilfe', B: 'Patientin' },
    turns: [
      { r: 'A', de: 'Praxis Dr. Weber, guten Tag. Was kann ich für Sie tun?', ko: '베버 병원입니다, 안녕하세요. 무엇을 도와드릴까요?' },
      { r: 'B', de: 'Guten Tag. Ich bräuchte dringend einen Termin. Ich habe seit drei Tagen Husten und Fieber.', ko: '안녕하세요. 급하게 진료 예약을 하고 싶어요. 3일 전부터 기침이 나고 열이 나요.' },
      { r: 'A', de: 'Oh, das klingt nicht gut. Heute um 15 Uhr hätte ich noch einen Termin frei.', ko: '아, 상태가 좋지 않네요. 오늘 오후 3시에 자리가 하나 남아 있어요.' },
      { r: 'B', de: 'Um 15 Uhr passt leider nicht, weil ich bis 17 Uhr arbeiten muss. Haben Sie morgen früh noch einen Platz?', ko: '3시는 안타깝게도 안 돼요. 5시까지 일해야 하거든요. 내일 아침에 자리가 있을까요?' },
      { r: 'A', de: 'Morgen um 8 Uhr 30 ist noch ein Platz frei. Wie heißen Sie bitte?', ko: '내일 8시 30분에 자리가 하나 있어요. 성함이 어떻게 되세요?' },
      { r: 'B', de: 'Mein Name ist Jiyoung Kim. Muss ich etwas mitbringen?', ko: '제 이름은 김지영입니다. 가져와야 할 것이 있나요?' },
      { r: 'A', de: 'Bitte bringen Sie Ihre Versichertenkarte mit. Wenn es schlimmer wird, rufen Sie bitte sofort wieder an.', ko: '건강보험 카드를 가져오세요. 증상이 더 나빠지면 바로 다시 전화해 주세요.' },
      { r: 'B', de: 'Mache ich. Vielen Dank und auf Wiederhören.', ko: '그렇게 할게요. 감사합니다. 안녕히 계세요.' },
      { r: 'A', de: 'Gute Besserung!', ko: '빨리 나으세요!' }
    ],
    redemittel: [
      { group: '예약 요청', items: [
        { de: 'Ich bräuchte einen Termin.', ko: '진료 예약이 필요해요.' },
        { de: 'Haben Sie morgen noch einen Platz frei?', ko: '내일 자리 남아 있나요?' },
        { de: 'Das passt mir leider nicht.', ko: '그 시간은 안타깝게도 안 돼요.' }
      ] },
      { group: '증상 말하기', items: [
        { de: 'Ich habe seit drei Tagen Husten und Fieber.', ko: '3일 전부터 기침과 열이 나요.' }
      ] },
      { group: '확인', items: [
        { de: 'Wie heißen Sie bitte?', ko: '성함이 어떻게 되세요?' },
        { de: 'Muss ich etwas mitbringen?', ko: '가져갈 것이 있나요?' }
      ] },
      { group: '마무리', items: [
        { de: 'Auf Wiederhören.', ko: '(전화) 안녕히 계세요.' },
        { de: 'Gute Besserung!', ko: '빨리 나으세요!' }
      ] }
    ]
  }],

  B1: [{
    no: 1, lv: 'B1',
    title: 'Ärger mit dem Nachbarn', titleKo: '이웃과의 소음 문제', type: 'Alltag', typeKo: '생활',
    intro: '소음 문제를 정중하게 꺼내고 합의하는 대화예요.',
    roles: { A: 'Nachbarin', B: 'Nachbar' },
    turns: [
      { r: 'A', de: 'Entschuldigung, haben Sie einen Moment Zeit? Ich möchte kurz mit Ihnen über den Lärm sprechen.', ko: '실례합니다, 잠깐 시간 괜찮으세요? 소음 문제로 잠깐 얘기하고 싶어요.' },
      { r: 'B', de: 'Ja, natürlich. Welchen Lärm meinen Sie?', ko: '네, 물론이죠. 어떤 소음을 말씀하시는 거예요?' },
      { r: 'A', de: 'Nachts gegen eins hört man Musik aus Ihrer Wohnung. Das stört mich sehr, weil ich früh zur Arbeit muss.', ko: '밤 1시쯤 댁에서 음악 소리가 들려요. 제가 아침 일찍 출근해야 해서 많이 방해가 돼요.' },
      { r: 'B', de: 'Oh, das tut mir leid. Ich habe nicht gemerkt, dass man das so laut hört.', ko: '아, 죄송합니다. 그렇게 크게 들리는지 몰랐어요.' },
      { r: 'A', de: 'Könnten Sie die Musik bitte nach 22 Uhr leiser stellen?', ko: '밤 10시 이후에는 음악 소리를 조금 줄여 주실 수 있을까요?' },
      { r: 'B', de: 'Ja, das mache ich. Allerdings höre ich manchmal auch Lärm von Ihrer Seite, zum Beispiel beim Staubsaugen am Sonntag.', ko: '네, 그렇게 할게요. 다만 저도 가끔 그쪽 소리가 들려요. 예를 들어 일요일에 청소기를 돌릴 때요.' },
      { r: 'A', de: 'Das stimmt, am Sonntag war das nicht ideal. Ich werde künftig nur noch werktags saugen.', ko: '맞아요, 일요일에는 좋지 않았죠. 앞으로는 평일에만 청소기를 돌릴게요.' },
      { r: 'B', de: 'Das wäre gut. Falls wieder Probleme auftauchen, könnten wir uns einmal im Monat zusammensetzen.', ko: '그게 좋겠네요. 다시 문제가 생기면 한 달에 한 번씩 만나서 얘기해요.' },
      { r: 'A', de: 'Gute Idee. Dann sind wir uns einig?', ko: '좋은 생각이에요. 그럼 합의된 거죠?' },
      { r: 'B', de: 'Ja, abgemacht. Vielen Dank für das offene Gespräch.', ko: '네, 좋아요. 솔직하게 얘기해 주셔서 감사합니다.' },
      { r: 'A', de: 'Gern geschehen. Schönen Abend noch!', ko: '천만에요. 좋은 저녁 보내세요!' }
    ],
    redemittel: [
      { group: '대화 시작', items: [
        { de: 'Haben Sie einen Moment Zeit?', ko: '잠깐 시간 괜찮으세요?' },
        { de: 'Ich möchte kurz mit Ihnen über … sprechen.', ko: '…에 대해 잠깐 얘기하고 싶어요.' }
      ] },
      { group: '문제 말하기', items: [
        { de: 'Das stört mich sehr, weil …', ko: '제가 …해서 많이 방해가 돼요.' }
      ] },
      { group: '사과', items: [
        { de: 'Das tut mir leid.', ko: '죄송합니다.' }
      ] },
      { group: '요청', items: [
        { de: 'Könnten Sie … bitte …?', ko: '…해 주실 수 있을까요?' }
      ] },
      { group: '대안 제시', items: [
        { de: 'Das wäre gut.', ko: '그게 좋겠어요.' },
        { de: 'Falls …, könnten wir …', ko: '만약 …하면, …할 수 있겠어요.' }
      ] },
      { group: '합의', items: [
        { de: 'Dann sind wir uns einig?', ko: '그럼 합의된 거죠?' },
        { de: 'Ja, abgemacht.', ko: '네, 좋아요.' }
      ] }
    ]
  }],

  B2: [{
    no: 1, lv: 'B2',
    title: 'Das Bewerbungsgespräch', titleKo: '면접', type: 'Beruf', typeKo: '직장',
    intro: '경험을 설명하고 질문을 던지는 면접 대화예요.',
    roles: { A: 'Personalleiterin', B: 'Bewerber' },
    turns: [
      { r: 'A', de: 'Herr Choi, in Ihrem Lebenslauf steht, dass Sie ein Projekt geleitet haben. Könnten Sie das genauer erläutern?', ko: '최 씨, 이력서에 프로젝트를 이끈 경험이 있다고 적으셨네요. 조금 더 자세히 설명해 주실 수 있을까요?' },
      { r: 'B', de: 'Gern. Vor zwei Jahren habe ich ein Team von fünf Personen geleitet, das ein neues Lagerverwaltungssystem einführen sollte. Dabei zeigte sich, dass die Kommunikation zwischen den Abteilungen das größte Hindernis war.', ko: '네. 2년 전 다섯 명으로 구성된 팀을 이끌고 새 재고 관리 시스템을 도입했습니다. 그 과정에서 부서 간 소통이 가장 큰 걸림돌이라는 게 드러났어요.' },
      { r: 'A', de: 'Wie sind Sie mit diesem Problem umgegangen?', ko: '그 문제를 어떻게 해결하셨나요?' },
      { r: 'B', de: 'Ich habe wöchentliche Besprechungen eingeführt, in denen jede Abteilung kurz über den Stand berichtet. Dadurch ließen sich Missverständnisse früh klären.', ko: '매주 회의를 도입해서 각 부서가 진행 상황을 짧게 보고하도록 했습니다. 그 덕분에 오해를 일찍 풀 수 있었어요.' },
      { r: 'A', de: 'Das klingt sinnvoll. Wie reagieren Sie, wenn Ihre Vorschläge abgelehnt werden?', ko: '합리적으로 들리네요. 제안이 거절되면 어떻게 대응하세요?' },
      { r: 'B', de: 'Ich nehme Kritik ernst und versuche zunächst, die Gründe zu verstehen. Wenn ich überzeugt bin, dass meine Idee besser ist, argumentiere ich sachlich – zugleich bin ich aber bereit, Kompromisse einzugehen.', ko: '비판은 진지하게 받아들이고, 먼저 그 이유를 이해하려고 합니다. 제 아이디어가 더 낫다고 확신하면 사실에 근거해 설명하지만, 동시에 타협할 준비도 되어 있습니다.' },
      { r: 'A', de: 'Und was erwarten Sie von dieser Stelle?', ko: '그럼 이 자리에서 무엇을 기대하세요?' },
      { r: 'B', de: 'Ich erwarte eine Aufgabe, bei der ich Verantwortung übernehmen kann. Außerdem möchte ich mich im Unternehmen langfristig weiterentwickeln.', ko: '책임을 맡을 수 있는 일을 기대합니다. 또 회사에서 장기적으로 성장하고 싶습니다.' },
      { r: 'A', de: 'Haben Sie noch Fragen an uns?', ko: '저희에게 더 궁금한 점이 있으세요?' },
      { r: 'B', de: 'Ja, mich würde interessieren, wie die Zusammenarbeit zwischen den Standorten organisiert ist.', ko: '네, 지점 간 협업이 어떤 방식으로 이루어지는지 궁금합니다.' },
      { r: 'A', de: 'Gute Frage. Wir koordinieren das über ein wöchentliches Videogespräch und gemeinsame Projektteams.', ko: '좋은 질문이에요. 주 1회 화상 회의와 공동 프로젝트팀으로 조율하고 있습니다.' },
      { r: 'B', de: 'Das klingt gut. Ich freue mich auf Ihre Rückmeldung.', ko: '좋네요. 연락 기다리겠습니다.' },
      { r: 'A', de: 'Vielen Dank, Herr Choi. Wir melden uns innerhalb von zwei Wochen bei Ihnen.', ko: '감사합니다, 최 씨. 2주 이내에 연락드리겠습니다.' }
    ],
    redemittel: [
      { group: '설명 요청', items: [
        { de: 'Könnten Sie das genauer erläutern?', ko: '조금 더 자세히 설명해 주실 수 있을까요?' }
      ] },
      { group: '경험 설명', items: [
        { de: 'Dabei zeigte sich, dass …', ko: '그 과정에서 …라는 것이 드러났습니다.' },
        { de: 'Dadurch ließen sich … klären.', ko: '그 덕분에 …을 해결할 수 있었습니다.' }
      ] },
      { group: '비판에 대한 태도', items: [
        { de: 'Ich nehme Kritik ernst und versuche, die Gründe zu verstehen.', ko: '비판을 진지하게 받아들이고 그 이유를 이해하려고 합니다.' },
        { de: 'Wenn …, argumentiere ich sachlich.', ko: '…하면, 사실에 근거해 설명합니다.' }
      ] },
      { group: '기대와 포부', items: [
        { de: 'Ich erwarte …', ko: '…을 기대합니다.' },
        { de: 'Ich möchte mich langfristig weiterentwickeln.', ko: '장기적으로 성장하고 싶습니다.' }
      ] },
      { group: '질문하기', items: [
        { de: 'Mich würde interessieren, wie …', ko: '…이 어떻게 되는지 궁금합니다.' }
      ] },
      { group: '마무리', items: [
        { de: 'Wir melden uns innerhalb von …', ko: '…이내에 연락드리겠습니다.' },
        { de: 'Ich freue mich auf Ihre Rückmeldung.', ko: '연락 기다리겠습니다.' }
      ] }
    ]
  }],

  C1: [{
    no: 1, lv: 'C1',
    title: 'Homeoffice – ja oder nein?', titleKo: '재택근무, 찬성인가 반대인가', type: 'Diskussion', typeKo: '토론',
    intro: '양쪽 입장을 검토하며 타협안을 찾는 토론이에요.',
    roles: { A: 'Teamleiterin Sabine', B: 'Kollege Markus' },
    turns: [
      { r: 'A', de: 'Ich habe den Eindruck, dass die Diskussion um das Homeoffice oft an der eigentlichen Frage vorbeigeht. Es geht nicht um Bequemlichkeit, sondern um Vertrauen.', ko: '재택근무 논의가 정작 핵심을 비켜 가는 것 같아. 편하냐의 문제가 아니라 신뢰의 문제잖아.' },
      { r: 'B', de: 'Da stimme ich dir zum Teil zu. Vertrauen lässt sich allerdings kaum an Anwesenheitszeiten messen. Wer produktiv ist, zeigt das am Ergebnis, nicht am Schreibtisch.', ko: '그 말에는 부분적으로 동의해. 하지만 신뢰는 출근 시간으로 측정하기 어려워. 생산성은 책상에 앉아 있는 시간이 아니라 결과로 드러나는 거지.' },
      { r: 'A', de: 'Das mag stimmen, nur hat die Praxis gezeigt, dass informelle Absprachen bei reiner Remote-Arbeit deutlich leiden – zumal neue Kollegen kaum Gelegenheit haben, sich einzuarbeiten.', ko: '그럴 수도 있어. 다만 실제로 보면 완전 원격 근무에서는 비공식적인 합의가 뚜렷하게 약해지더라고. 특히 신입이 적응할 기회가 거의 없어.' },
      { r: 'B', de: 'Das ist ein berechtigter Einwand. Allerdings wird dabei oft übersehen, dass starre Anwesenheitspflichten viele Mitarbeitende erst recht zu Abstrichen bei der Konzentration zwingen.', ko: '그건 타당한 지적이야. 하지만 경직된 출근 의무가 오히려 많은 직원을 집중력 저하로 몰아간다는 점은 자주 간과돼.' },
      { r: 'A', de: 'Sicher, es gibt Argumente auf beiden Seiten. Mein Vorschlag wäre ein Modell, bei dem wir je nach Aufgabe entscheiden: konzeptionelle Arbeit zu Hause, Abstimmungen vor Ort.', ko: '물론 양쪽 모두 근거가 있어. 내 제안은 업무에 따라 정하는 모델이야. 구상 작업은 집에서, 협의는 사무실에서 하는 거지.' },
      { r: 'B', de: 'Ein hybrides Modell liegt zwar nahe, doch es birgt die Gefahr, dass je nach Präsenz im Büro Zweiklassen-Strukturen entstehen.', ko: '하이브리드 모델이 자연스럽긴 해. 하지만 사무실에 얼마나 나오느냐에 따라 두 부류의 직원이 생길 위험이 있어.' },
      { r: 'A', de: 'Das ist ein Punkt, den man ernst nehmen muss. Dem könnte man entgegenwirken, indem man die Regeln transparent festlegt und sie nicht dem Gutdünken einzelner überlässt.', ko: '그건 진지하게 봐야 할 지점이야. 규칙을 투명하게 정해서 개인의 판단에 맡기지 않으면 그 위험을 줄일 수 있어.' },
      { r: 'B', de: 'Einverstanden. Ich wäre sogar dafür, die Regelung nach einem halben Jahr zu evaluieren, es sei denn, die Teamzahlen zeigen früher deutliche Probleme.', ko: '동의해. 나는 심지어 반년 뒤에 규정을 평가하자고 하고 싶어. 팀 지표에서 더 일찍 뚜렷한 문제가 나타나지 않는다면 말이야.' },
      { r: 'A', de: 'Dann schlage ich vor, dass wir bis Monatsende ein Konzept ausarbeiten und es dem Vorstand zur Entscheidung vorlegen.', ko: '그럼 월말까지 방안을 만들어서 이사회에 결정을 요청하자고 제안할게.' },
      { r: 'B', de: 'Gut. Ich übernehme die Umfrage unter den Mitarbeitenden, damit wir eine belastbare Grundlage haben.', ko: '좋아. 탄탄한 근거를 갖추려면 직원 설문은 내가 맡을게.' }
    ],
    redemittel: [
      { group: '의견 제시', items: [
        { de: 'Ich habe den Eindruck, dass …', ko: '…라는 인상을 받았어요.' }
      ] },
      { group: '부분 동의', items: [
        { de: 'Da stimme ich dir zum Teil zu.', ko: '그 말에는 부분적으로 동의해.' }
      ] },
      { group: '반론', items: [
        { de: 'Das mag stimmen, nur …', ko: '그럴 수도 있지만, …' },
        { de: 'Das ist ein berechtigter Einwand.', ko: '타당한 지적이에요.' },
        { de: 'Allerdings wird oft übersehen, dass …', ko: '하지만 …는 자주 간과됩니다.' }
      ] },
      { group: '중립 정리', items: [
        { de: 'Es gibt Argumente auf beiden Seiten.', ko: '양쪽 모두 근거가 있어요.' }
      ] },
      { group: '우려', items: [
        { de: '… birgt die Gefahr, dass …', ko: '…할 위험이 있습니다.' }
      ] },
      { group: '대안', items: [
        { de: 'Dem könnte man entgegenwirken, indem man …', ko: '…함으로써 이를 막을 수 있습니다.' },
        { de: 'Ein Modell, bei dem …', ko: '…하는 방식의 모델' }
      ] },
      { group: '조건', items: [
        { de: '…, es sei denn, …', ko: '…라면 몰라도.' }
      ] },
      { group: '찬성·합의', items: [
        { de: 'Ich wäre sogar dafür, …', ko: '저는 오히려 …에 찬성합니다.' },
        { de: 'Einverstanden.', ko: '동의합니다.' }
      ] }
    ]
  }]
};
