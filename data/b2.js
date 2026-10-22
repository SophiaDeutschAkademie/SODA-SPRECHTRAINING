/* SODA SPRECHTRAINING · B2 대화문 */
window.DIALOG_DATA = window.DIALOG_DATA || {};
window.DIALOG_DATA.B2 = [
  {
    no: 1, lv: "B2",
    title: "Das Bewerbungsgespräch", titleKo: "면접", type: "Beruf", typeKo: "직장",
    intro: "경험을 설명하고 질문을 던지는 면접 대화예요.",
    focus: ["면접", "경험 설명", "Passiversatz: ließen sich"],
    roles: { A: "Personalleiterin", B: "Bewerber" },
    turns: [
      { r: "A", de: "Herr Choi, in Ihrem Lebenslauf steht, dass Sie ein Projekt geleitet haben. Könnten Sie das genauer erläutern?", ko: "최 씨, 이력서에 프로젝트를 이끈 경험이 있다고 적으셨네요. 조금 더 자세히 설명해 주실 수 있을까요?" },
      { r: "B", de: "Gern. Vor zwei Jahren habe ich ein Team von fünf Personen geleitet, das ein neues Lagerverwaltungssystem einführen sollte. Dabei zeigte sich, dass die Kommunikation zwischen den Abteilungen das größte Hindernis war.", ko: "네. 2년 전 다섯 명으로 구성된 팀을 이끌고 새 재고 관리 시스템을 도입했습니다. 그 과정에서 부서 간 소통이 가장 큰 걸림돌이라는 게 드러났어요." },
      { r: "A", de: "Wie sind Sie mit diesem Problem umgegangen?", ko: "그 문제를 어떻게 해결하셨나요?" },
      { r: "B", de: "Ich habe wöchentliche Besprechungen eingeführt, in denen jede Abteilung kurz über den Stand berichtet. Dadurch ließen sich Missverständnisse früh klären.", ko: "매주 회의를 도입해서 각 부서가 진행 상황을 짧게 보고하도록 했습니다. 그 덕분에 오해를 일찍 풀 수 있었어요." },
      { r: "A", de: "Das klingt sinnvoll. Wie reagieren Sie, wenn Ihre Vorschläge abgelehnt werden?", ko: "합리적으로 들리네요. 제안이 거절되면 어떻게 대응하세요?" },
      { r: "B", de: "Ich nehme Kritik ernst und versuche zunächst, die Gründe zu verstehen. Wenn ich überzeugt bin, dass meine Idee besser ist, argumentiere ich sachlich – zugleich bin ich aber bereit, Kompromisse einzugehen.", ko: "비판은 진지하게 받아들이고, 먼저 그 이유를 이해하려고 합니다. 제 아이디어가 더 낫다고 확신하면 사실에 근거해 설명하지만, 동시에 타협할 준비도 되어 있습니다." },
      { r: "A", de: "Und was erwarten Sie von dieser Stelle?", ko: "그럼 이 자리에서 무엇을 기대하세요?" },
      { r: "B", de: "Ich erwarte eine Aufgabe, bei der ich Verantwortung übernehmen kann. Außerdem möchte ich mich im Unternehmen langfristig weiterentwickeln.", ko: "책임을 맡을 수 있는 일을 기대합니다. 또 회사에서 장기적으로 성장하고 싶습니다." },
      { r: "A", de: "Haben Sie noch Fragen an uns?", ko: "저희에게 더 궁금한 점이 있으세요?" },
      { r: "B", de: "Ja, mich würde interessieren, wie die Zusammenarbeit zwischen den Standorten organisiert ist.", ko: "네, 지점 간 협업이 어떤 방식으로 이루어지는지 궁금합니다." },
      { r: "A", de: "Gute Frage. Wir koordinieren das über ein wöchentliches Videogespräch und gemeinsame Projektteams.", ko: "좋은 질문이에요. 주 1회 화상 회의와 공동 프로젝트팀으로 조율하고 있습니다." },
      { r: "B", de: "Das klingt gut. Ich freue mich auf Ihre Rückmeldung.", ko: "좋네요. 연락 기다리겠습니다." },
      { r: "A", de: "Vielen Dank, Herr Choi. Wir melden uns innerhalb von zwei Wochen bei Ihnen.", ko: "감사합니다, 최 씨. 2주 이내에 연락드리겠습니다." }
    ],
    redemittel: [
      { group: "설명 요청", items: [
        { de: "Könnten Sie das genauer erläutern?", ko: "조금 더 자세히 설명해 주실 수 있을까요?" }
      ] },
      { group: "경험 설명", items: [
        { de: "Dabei zeigte sich, dass …", ko: "그 과정에서 …라는 것이 드러났습니다." },
        { de: "Dadurch ließen sich … klären.", ko: "그 덕분에 …을 해결할 수 있었습니다." }
      ] },
      { group: "비판에 대한 태도", items: [
        { de: "Ich nehme Kritik ernst und versuche, die Gründe zu verstehen.", ko: "비판을 진지하게 받아들이고 그 이유를 이해하려고 합니다." },
        { de: "Wenn … , argumentiere ich sachlich.", ko: "…하면, 사실에 근거해 설명합니다." }
      ] },
      { group: "기대와 포부", items: [
        { de: "Ich erwarte … ", ko: "…을 기대합니다." },
        { de: "Ich möchte mich langfristig weiterentwickeln.", ko: "장기적으로 성장하고 싶습니다." }
      ] },
      { group: "질문하기", items: [
        { de: "Mich würde interessieren, wie … ", ko: "…이 어떻게 되는지 궁금합니다." }
      ] },
      { group: "마무리", items: [
        { de: "Wir melden uns innerhalb von … ", ko: "…이내에 연락드리겠습니다." },
        { de: "Ich freue mich auf Ihre Rückmeldung.", ko: "연락 기다리겠습니다." }
      ] }
    ]
  },

  {
    no: 2, lv: "B2",
    title: "Die Gehaltsverhandlung", titleKo: "연봉 협상", type: "Beruf", typeKo: "직장",
    intro: "성과를 근거로 인상을 요구하고 절충안을 찾는 대화예요.",
    focus: ["협상", "조건문: wenn · sofern", "논거 제시"],
    roles: { A: "Mitarbeiterin", B: "Vorgesetzter" },
    turns: [
      { r: "A", de: "Danke, dass Sie sich Zeit für das Gespräch nehmen. Ich würde gern über meine Gehaltsentwicklung sprechen.", ko: "면담 시간을 내 주셔서 감사합니다. 제 급여 조정에 대해 이야기하고 싶습니다." },
      { r: "B", de: "Natürlich, Frau Berger. Was haben Sie sich vorgestellt?", ko: "물론이죠, 베르거 씨. 어떻게 생각하고 계신가요?" },
      { r: "A", de: "Seit meinem Eintritt vor drei Jahren habe ich mein Aufgabengebiet deutlich erweitert. Ich leite mittlerweile das Kundenprojekt und betreue zwei Praktikanten, obwohl sich mein Gehalt nicht verändert hat.", ko: "3년 전 입사한 뒤로 제 업무 범위를 크게 넓혔습니다. 지금은 고객 프로젝트를 이끌고 인턴 두 명도 지도하는데, 급여는 그대로입니다." },
      { r: "B", de: "Ihre Arbeit wird sehr geschätzt, das möchte ich vorweg sagen. Allerdings ist das Budget in diesem Jahr knapp. Woran haben Sie denn konkret gedacht?", ko: "먼저 말씀드리면 베르거 씨의 일은 높이 평가받고 있어요. 다만 올해는 예산이 빠듯합니다. 구체적으로 어느 정도를 생각하셨나요?" },
      { r: "A", de: "Auf Basis von Gehaltsvergleichen in unserer Branche halte ich eine Erhöhung von zehn Prozent für angemessen.", ko: "업계의 급여 비교를 바탕으로 볼 때 10퍼센트 인상이 적절하다고 생각합니다." },
      { r: "B", de: "Zehn Prozent sind für uns derzeit schwer zu stemmen. Wir könnten uns eher auf fünf Prozent einigen.", ko: "10퍼센트는 지금 저희가 감당하기 어렵습니다. 5퍼센트 정도라면 합의할 수 있을 것 같아요." },
      { r: "A", de: "Fünf Prozent liegen unter dem, was ich für gerechtfertigt halte. Ich wäre aber bereit, mich auf sieben Prozent zu einigen, wenn wir zusätzlich über Weiterbildungsmöglichkeiten sprechen könnten.", ko: "5퍼센트는 제가 정당하다고 생각하는 수준보다 낮습니다. 다만 교육 기회에 대해서도 함께 이야기할 수 있다면 7퍼센트로 합의할 용의가 있습니다." },
      { r: "B", de: "Das ist ein interessanter Gedanke. Eine Weiterbildung zu finanzieren wäre für uns leichter als eine dauerhafte Gehaltserhöhung. Welche Weiterbildung schwebt Ihnen vor?", ko: "흥미로운 생각이네요. 교육비를 지원하는 편이 지속적인 급여 인상보다 저희에게는 부담이 적습니다. 어떤 교육을 생각하고 계신가요?" },
      { r: "A", de: "Ein Zertifikatskurs im Projektmanagement. Er würde mich qualifizieren, noch größere Projekte zu verantworten, wovon auch das Unternehmen profitieren würde.", ko: "프로젝트 관리 자격 과정입니다. 더 큰 프로젝트를 책임질 수 있게 되고, 회사에도 도움이 될 것입니다." },
      { r: "B", de: "Da bin ich grundsätzlich offen. Ich schlage vor, dass wir sechs Prozent ab Januar vereinbaren und die Kosten für den Kurs übernehmen, sofern Sie sich verpflichten, mindestens zwei Jahre im Unternehmen zu bleiben.", ko: "기본적으로 열려 있습니다. 1월부터 6퍼센트 인상에 합의하고, 최소 2년은 회사에 남겠다고 약속하시면 과정 비용을 부담하는 것을 제안합니다." },
      { r: "A", de: "Das klingt nach einer fairen Lösung. Darf ich bis morgen darüber nachdenken?", ko: "공정한 해결책 같습니다. 내일까지 생각해 봐도 될까요?" },
      { r: "B", de: "Selbstverständlich. Geben Sie mir bitte bis morgen Bescheid, dann bereite ich die Zusatzvereinbarung vor.", ko: "물론이죠. 내일까지 알려 주시면 추가 합의서를 준비하겠습니다." }
    ],
    redemittel: [
      { group: "대화 시작", items: [
        { de: "Ich würde gern über meine Gehaltsentwicklung sprechen.", ko: "제 급여 조정에 대해 이야기하고 싶습니다." }
      ] },
      { group: "성과 제시", items: [
        { de: "Seit meinem Eintritt habe ich mein Aufgabengebiet deutlich erweitert.", ko: "입사 이후 제 업무 범위를 크게 넓혔습니다." }
      ] },
      { group: "요구 근거", items: [
        { de: "Auf Basis von … halte ich … für angemessen.", ko: "…을 바탕으로 …이 적절하다고 생각합니다." }
      ] },
      { group: "상대 제안", items: [
        { de: "Wir könnten uns eher auf … einigen.", ko: "…정도라면 합의할 수 있을 것 같아요." },
        { de: "Das ist für uns derzeit schwer zu stemmen.", ko: "지금은 저희가 감당하기 어렵습니다." }
      ] },
      { group: "절충", items: [
        { de: "Ich wäre bereit, mich auf … zu einigen, wenn …", ko: "…한다면 …로 합의할 용의가 있습니다." },
        { de: "… , sofern Sie sich verpflichten, …", ko: "…하겠다고 약속하시면 …" }
      ] },
      { group: "결정 유보", items: [
        { de: "Darf ich bis morgen darüber nachdenken?", ko: "내일까지 생각해 봐도 될까요?" }
      ] }
    ]
  },

  {
    no: 3, lv: "B2",
    title: "Konflikt im Team", titleKo: "팀 내 갈등 풀기", type: "Beruf", typeKo: "직장",
    intro: "팀장이 갈등 중인 직원의 이야기를 듣고 중재 방법을 정하는 대화예요.",
    focus: ["갈등 다루기", "중재하기", "ohne … zu · damit"],
    roles: { A: "Teamleiterin", B: "Mitarbeiter" },
    turns: [
      { r: "A", de: "Danke, dass Sie gekommen sind, Herr Winter. Mir ist aufgefallen, dass die Stimmung im Team in den letzten Wochen angespannt ist. Können Sie mir schildern, wie Sie die Situation erleben?", ko: "와 주셔서 감사합니다, 빈터 씨. 최근 몇 주 동안 팀 분위기가 긴장돼 있다는 걸 느꼈어요. 지금 상황을 어떻게 겪고 계신지 말씀해 주실 수 있나요?" },
      { r: "B", de: "Ehrlich gesagt fühle ich mich übergangen. Frau Roth hat bei der letzten Präsentation meine Analyse verwendet, ohne mich zu erwähnen. Das hat mich sehr geärgert.", ko: "솔직히 무시당했다는 느낌이 듭니다. 로트 씨가 지난 발표에서 제 분석을 쓰면서 제 이름을 언급하지 않았어요. 정말 화가 났습니다." },
      { r: "A", de: "Verstehe. Haben Sie schon mit Frau Roth darüber gesprochen?", ko: "알겠어요. 로트 씨와 이에 대해 이야기해 보셨나요?" },
      { r: "B", de: "Nein, bisher nicht. Ich wollte keinen Streit anfangen, aber inzwischen kann ich mich kaum noch konzentrieren, wenn sie im Raum ist.", ko: "아니요, 아직 못 했습니다. 다툼을 만들고 싶지 않았는데, 이제는 그분이 같은 방에 있으면 집중하기 어려울 정도예요." },
      { r: "A", de: "Ich verstehe, dass Sie das belastet. Ich möchte aber auch ihre Sicht hören, bevor wir Schlüsse ziehen. Es könnte auch ein Missverständnis sein.", ko: "그게 부담이 되는 건 이해해요. 하지만 결론을 내리기 전에 그분의 입장도 듣고 싶어요. 오해일 수도 있으니까요." },
      { r: "B", de: "Möglich. Aber wie kann ein Missverständnis dazu führen, dass jemand fremde Arbeit als eigene ausgibt?", ko: "그럴 수도 있겠죠. 하지만 오해 때문에 남의 작업을 자기 것처럼 내놓는 일이 어떻게 생기죠?" },
      { r: "A", de: "Ich unterstelle niemandem etwas, dazu weiß ich zu wenig. Mein Vorschlag: Wir führen zu dritt ein Gespräch, in dem jeder in Ruhe seine Sicht darlegt. Ich moderiere, damit es sachlich bleibt.", ko: "저는 누구에게도 단정 짓지 않아요. 아는 게 너무 적으니까요. 제 제안은 세 명이 함께 대화하면서 각자 차분히 입장을 설명하는 거예요. 제가 사회를 맡아 차분하게 진행되도록 할게요." },
      { r: "B", de: "Das würde ich mir wünschen. Wichtig wäre mir, dass es nicht wie eine Beschuldigung wirkt.", ko: "그렇게 해 주시면 좋겠어요. 비난처럼 보이지 않는 게 제게는 중요합니다." },
      { r: "A", de: "Das verspreche ich Ihnen. Wir setzen Regeln für das Gespräch: ausreden lassen, Ich-Botschaften verwenden und keine alten Vorwürfe hervorholen.", ko: "약속드릴게요. 대화 규칙을 정하겠습니다. 끝까지 말하게 하기, 나 전달법 쓰기, 지난 일을 다시 꺼내 비난하지 않기예요." },
      { r: "B", de: "Einverstanden. Und was passiert, wenn wir uns nicht einigen können?", ko: "동의합니다. 그런데 합의하지 못하면 어떻게 되나요?" },
      { r: "A", de: "Dann überlegen wir gemeinsam, wie die Zusammenarbeit künftig klarer geregelt werden kann, zum Beispiel durch festgelegte Zuständigkeiten und eine Quellenangabe in Präsentationen.", ko: "그러면 앞으로 협업을 더 분명하게 정할 방법을 함께 고민해요. 예를 들어 담당 업무를 정하고 발표 자료에 출처를 밝히는 방식이 있겠죠." },
      { r: "B", de: "Das klingt vernünftig. Ich bin bereit, es zu versuchen.", ko: "합리적으로 들립니다. 해 볼 준비가 되어 있어요." },
      { r: "A", de: "Gut. Ich lade Sie beide für Donnerstag ein und schicke vorher eine kurze Agenda.", ko: "좋아요. 두 분을 목요일로 초대하고 미리 간단한 안건을 보내 드릴게요." }
    ],
    redemittel: [
      { group: "상황 듣기", items: [
        { de: "Können Sie mir schildern, wie Sie die Situation erleben?", ko: "지금 상황을 어떻게 겪고 계신지 말씀해 주실 수 있나요?" }
      ] },
      { group: "감정 말하기", items: [
        { de: "Ich fühle mich übergangen.", ko: "무시당했다는 느낌이 들어요." },
        { de: "Das hat mich sehr geärgert.", ko: "정말 화가 났어요." }
      ] },
      { group: "중재", items: [
        { de: "Ich möchte auch ihre Sicht hören, bevor wir Schlüsse ziehen.", ko: "결론을 내리기 전에 그분의 입장도 듣고 싶어요." },
        { de: "Ich unterstelle niemandem etwas.", ko: "저는 누구에게도 단정 짓지 않아요." }
      ] },
      { group: "제안 · 규칙", items: [
        { de: "Mein Vorschlag: Wir führen zu dritt ein Gespräch.", ko: "제 제안은 세 명이 함께 대화하는 거예요." },
        { de: "Ich moderiere, damit es sachlich bleibt.", ko: "차분하게 진행되도록 제가 사회를 맡을게요." }
      ] },
      { group: "조건 · 동의", items: [
        { de: "Wichtig wäre mir, dass …", ko: "제게 중요한 것은 …라는 점이에요." },
        { de: "Ich bin bereit, es zu versuchen.", ko: "해 볼 준비가 되어 있어요." }
      ] }
    ]
  },

  {
    no: 4, lv: "B2",
    title: "Studienberatung", titleKo: "독일 대학원 유학 상담", type: "Beratung", typeKo: "상담",
    intro: "독일 석사 과정의 입학 조건, 비용, 준비 절차를 문의하는 대화예요.",
    focus: ["상담 대화", "Passiv", "간접 의문문"],
    roles: { A: "Studienberaterin", B: "Interessent" },
    turns: [
      { r: "A", de: "Guten Tag, Herr Han. Sie möchten sich über ein Masterstudium in Deutschland informieren?", ko: "안녕하세요, 한 씨. 독일 석사 과정에 대해 알아보고 싶으시다고요?" },
      { r: "B", de: "Ja, genau. Ich habe in Korea meinen Bachelor in Maschinenbau gemacht und würde gern einen Master in Deutschland anschließen. Ich weiß aber nicht, welche Voraussetzungen ich erfüllen muss.", ko: "네, 맞아요. 한국에서 기계공학 학사를 마쳤고, 독일에서 석사를 이어서 하고 싶습니다. 그런데 어떤 조건을 갖춰야 하는지 모르겠어요." },
      { r: "A", de: "Zunächst wird Ihr Abschluss auf Gleichwertigkeit geprüft. Das übernimmt in der Regel die Hochschule, an der Sie sich bewerben. Haben Sie Ihre Zeugnisse bereits beglaubigt übersetzen lassen?", ko: "먼저 학위가 동등한지 심사받아요. 보통 지원하는 대학이 맡아서 하고요. 성적 증명서의 공증 번역은 이미 받으셨나요?" },
      { r: "B", de: "Noch nicht. Muss ich das vor der Bewerbung erledigen?", ko: "아직이요. 지원 전에 해 두어야 하나요?" },
      { r: "A", de: "Meistens ja, zumindest bei den Unterlagen, die nicht auf Deutsch oder Englisch sind. Auch die Sprachkenntnisse müssen Sie nachweisen. Für deutschsprachige Studiengänge wird häufig Niveau C1 verlangt, etwa über TestDaF oder DSH.", ko: "대부분 그래요. 적어도 독일어나 영어가 아닌 서류는요. 어학 능력도 증명해야 하고요. 독일어 전공 과정은 흔히 C1 수준을 요구하는데, TestDaF나 DSH 같은 시험으로 증명해요." },
      { r: "B", de: "Gibt es auch englischsprachige Masterstudiengänge? Mein Deutsch ist erst auf B2-Niveau.", ko: "영어로 진행하는 석사 과정도 있나요? 제 독일어는 아직 B2 수준이에요." },
      { r: "A", de: "Ja, davon gibt es inzwischen viele, vor allem in den Ingenieurwissenschaften. Allerdings sollten Sie bedenken, dass Deutschkenntnisse im Alltag und bei der Jobsuche dennoch wichtig bleiben.", ko: "네, 요즘은 특히 공학 분야에 많아요. 다만 일상생활이나 취업 준비에서는 독일어가 여전히 중요하다는 점도 생각하셔야 해요." },
      { r: "B", de: "Das leuchtet mir ein. Wie sieht es mit den Kosten aus? Muss ich Studiengebühren zahlen?", ko: "그렇군요. 비용은 어떤가요? 등록금을 내야 하나요?" },
      { r: "A", de: "An den meisten öffentlichen Hochschulen fallen keine Studiengebühren an, nur ein Semesterbeitrag. Für internationale Studierende gibt es aber Ausnahmen in einzelnen Bundesländern. Außerdem müssen Sie für das Visum nachweisen, dass Sie Ihren Lebensunterhalt finanzieren können.", ko: "대부분의 공립 대학은 등록금이 없고 학기 납부금만 있어요. 다만 일부 주에서는 외국인 학생에게 예외가 있어요. 그리고 비자를 받으려면 생활비를 마련할 수 있다는 점을 증명해야 해요." },
      { r: "B", de: "Und darf man neben dem Studium arbeiten?", ko: "그리고 공부하면서 일할 수도 있나요?" },
      { r: "A", de: "Ja, in begrenztem Umfang. Die genauen Regeln sollten Sie aber vor der Einreise bei der Ausländerbehörde prüfen, weil sie sich ändern können.", ko: "네, 제한된 범위에서요. 다만 규정이 바뀔 수 있으니 입국 전에 외국인청에서 정확한 내용을 확인하세요." },
      { r: "B", de: "Verstanden. Welche Schritte würden Sie mir für die nächsten Monate empfehlen?", ko: "알겠습니다. 앞으로 몇 달 동안 어떤 단계를 밟으라고 권하시나요?" },
      { r: "A", de: "Ich würde zuerst drei bis vier Studiengänge auswählen, deren Bewerbungsfristen und Voraussetzungen vergleichen und dann Ihre Unterlagen vorbereiten. Bei Interesse können wir einen Folgetermin vereinbaren.", ko: "먼저 과정을 서너 개 고르고, 지원 마감일과 조건을 비교한 뒤 서류를 준비하라고 권하고 싶어요. 원하시면 다음 상담 일정도 잡을 수 있어요." },
      { r: "B", de: "Das mache ich. Vielen Dank für die ausführliche Beratung.", ko: "그렇게 하겠습니다. 자세히 상담해 주셔서 감사합니다." }
    ],
    redemittel: [
      { group: "상담 목적", items: [
        { de: "Ich würde gern einen Master anschließen.", ko: "석사를 이어서 하고 싶습니다." },
        { de: "Ich weiß nicht, welche Voraussetzungen ich erfüllen muss.", ko: "어떤 조건을 갖춰야 하는지 모르겠어요." }
      ] },
      { group: "질문", items: [
        { de: "Muss ich das vor der Bewerbung erledigen?", ko: "지원 전에 해 두어야 하나요?" },
        { de: "Wie sieht es mit den Kosten aus?", ko: "비용은 어떤가요?" },
        { de: "Darf man neben dem Studium arbeiten?", ko: "공부하면서 일할 수 있나요?" }
      ] },
      { group: "정보 전달", items: [
        { de: "Zunächst wird … geprüft.", ko: "먼저 …이 심사돼요." },
        { de: "Das übernimmt in der Regel … ", ko: "보통 …이 맡아서 해요." }
      ] },
      { group: "주의", items: [
        { de: "Allerdings sollten Sie bedenken, dass …", ko: "다만 …라는 점도 생각하셔야 해요." }
      ] },
      { group: "이해 · 권고", items: [
        { de: "Das leuchtet mir ein.", ko: "그렇군요, 이해돼요." },
        { de: "Ich würde zuerst … auswählen.", ko: "저라면 먼저 …을 고르겠어요." }
      ] }
    ]
  },

  {
    no: 5, lv: "B2",
    title: "Reklamation einer Reise", titleKo: "여행 하자 항의", type: "Beschwerde", typeKo: "항의",
    intro: "예약한 방과 다른 객실을 받은 일을 여행사에 항의하고 보상을 요구하는 대화예요.",
    focus: ["공식적인 항의", "요구 근거 대기", "명사화: Preisminderung · Stellungnahme"],
    roles: { A: "Kundin", B: "Mitarbeiter" },
    turns: [
      { r: "A", de: "Guten Tag, ich rufe wegen meiner Reise nach Mallorca an, von der ich letzte Woche zurückgekehrt bin. Ich möchte eine Reklamation einreichen.", ko: "안녕하세요, 지난주에 돌아온 마요르카 여행 건으로 전화드렸어요. 항의 접수를 하고 싶습니다." },
      { r: "B", de: "Das tut mir leid zu hören. Worum geht es genau?", ko: "그런 일이 있었다니 유감입니다. 구체적으로 어떤 내용인가요?" },
      { r: "A", de: "Gebucht hatten wir ein Doppelzimmer mit Meerblick. Tatsächlich haben wir ein Zimmer zum Parkplatz bekommen, und die Klimaanlage war in der ersten Woche defekt. Dazu kam die Baustelle neben dem Hotel, die schon um sieben Uhr morgens angefangen hat zu lärmen.", ko: "바다 전망의 더블룸을 예약했어요. 그런데 실제로는 주차장 쪽 방을 받았고, 첫 주에는 에어컨도 고장이었어요. 게다가 호텔 옆 공사장이 아침 7시부터 시끄러웠어요." },
      { r: "B", de: "Haben Sie den Mangel vor Ort der Rezeption gemeldet?", ko: "현지에서 프런트에 하자를 알리셨나요?" },
      { r: "A", de: "Selbstverständlich, schon am ersten Abend. Man hat mir versprochen, das Zimmer zu wechseln, aber das ist erst nach vier Tagen passiert. Ich habe Fotos und eine schriftliche Bestätigung der Rezeption.", ko: "물론이죠, 첫날 저녁에 바로요. 방을 바꿔 주겠다고 했지만 나흘이 지나서야 바꿔 줬어요. 사진과 프런트의 서면 확인서가 있습니다." },
      { r: "B", de: "Das ist gut, denn die Meldung vor Ort ist wichtig, damit eine Minderung geltend gemacht werden kann. Was genau erwarten Sie von uns?", ko: "잘하셨어요. 현지에서 알리는 게 중요하거든요. 그래야 대금 감액을 주장할 수 있어요. 저희에게 정확히 무엇을 기대하시나요?" },
      { r: "A", de: "Ich halte eine Preisminderung für angemessen. Für die ersten vier Tage ohne Meerblick und ohne funktionierende Klimaanlage würde ich 30 Prozent des Reisepreises zurückfordern. Außerdem erwarte ich eine schriftliche Stellungnahme des Hotels.", ko: "요금 감액이 적절하다고 생각합니다. 바다 전망도 없고 에어컨도 작동하지 않았던 처음 나흘에 대해 여행 요금의 30퍼센트를 돌려받고 싶어요. 호텔의 서면 입장도 받고 싶습니다." },
      { r: "B", de: "Dreißig Prozent erscheinen mir hoch. Solche Minderungen richten sich nach der Schwere des Mangels und der Dauer. Wir würden den Fall prüfen und uns beim Hotel erkundigen.", ko: "30퍼센트는 높아 보입니다. 이런 감액은 하자의 심각성과 기간에 따라 정해져요. 저희가 사안을 검토하고 호텔에 확인해 보겠습니다." },
      { r: "A", de: "Ich habe volles Verständnis dafür, dass Sie das prüfen müssen. Allerdings bitte ich Sie, mir eine Frist zu nennen, innerhalb der ich eine Antwort erhalte. Ansonsten müsste ich Rechtsberatung in Anspruch nehmen.", ko: "검토가 필요하다는 점은 충분히 이해합니다. 다만 답변을 받을 수 있는 기한을 알려 주세요. 그렇지 않으면 법률 상담을 받아야 할 것 같습니다." },
      { r: "B", de: "Verständlich. Beachten Sie bitte, dass Ansprüche innerhalb eines Monats nach Reiseende schriftlich angemeldet werden müssen. Schicken Sie uns Ihre Unterlagen bitte bis Freitag per E-Mail. Wir melden uns innerhalb von zwei Wochen.", ko: "알겠습니다. 청구권은 여행이 끝난 뒤 한 달 안에 서면으로 신청해야 한다는 점을 유의해 주세요. 서류는 금요일까지 이메일로 보내 주세요. 2주 안에 연락드리겠습니다." },
      { r: "A", de: "Gut, dann schicke ich Ihnen die Fotos und die Bestätigung noch heute. Bitte bestätigen Sie mir den Eingang schriftlich.", ko: "알겠습니다. 사진과 확인서는 오늘 중으로 보내겠습니다. 수신 확인도 서면으로 부탁드립니다." },
      { r: "B", de: "Selbstverständlich. Noch einmal: Wir bedauern die Unannehmlichkeiten.", ko: "물론입니다. 다시 한번 불편을 드려 죄송합니다." }
    ],
    redemittel: [
      { group: "용건", items: [
        { de: "Ich möchte eine Reklamation einreichen.", ko: "항의 접수를 하고 싶습니다." }
      ] },
      { group: "사실 설명", items: [
        { de: "Gebucht hatten wir … Tatsächlich haben wir … bekommen.", ko: "…을 예약했는데 실제로는 …을 받았어요." },
        { de: "Ich habe Fotos und eine schriftliche Bestätigung.", ko: "사진과 서면 확인서가 있습니다." }
      ] },
      { group: "요구", items: [
        { de: "Ich halte eine Preisminderung für angemessen.", ko: "요금 감액이 적절하다고 생각합니다." },
        { de: "Ich würde … Prozent zurückfordern.", ko: "…퍼센트를 돌려받고 싶습니다." }
      ] },
      { group: "상대의 신중한 응답", items: [
        { de: "… erscheint mir hoch.", ko: "…는 높아 보입니다." },
        { de: "Wir würden den Fall prüfen.", ko: "저희가 사안을 검토하겠습니다." }
      ] },
      { group: "기한 · 확인", items: [
        { de: "Ich bitte Sie, mir eine Frist zu nennen.", ko: "기한을 알려 주세요." },
        { de: "Bitte bestätigen Sie mir den Eingang schriftlich.", ko: "수신 확인을 서면으로 부탁드립니다." }
      ] }
    ]
  },

  {
    no: 6, lv: "B2",
    title: "KI am Arbeitsplatz", titleKo: "직장에서의 인공지능", type: "Diskussion", typeKo: "토론",
    intro: "고객 문의에 인공지능을 도입하려는 계획에 대해 동료와 찬반을 따지는 대화예요.",
    focus: ["찬반 논의", "우려 표현하기", "Konjunktiv II · statt … zu"],
    roles: { A: "Mira", B: "Paul" },
    turns: [
      { r: "A", de: "Hast du mitbekommen, dass die Geschäftsleitung künftig ein KI-Tool für Kundenanfragen einsetzen will? Was hältst du davon?", ko: "경영진이 앞으로 고객 문의에 AI 도구를 쓰려고 한다는 거 들었어? 어떻게 생각해?" },
      { r: "B", de: "Grundsätzlich finde ich die Idee sinnvoll. Routineanfragen könnten schneller beantwortet werden, und wir hätten mehr Zeit für komplizierte Fälle.", ko: "기본적으로 좋은 아이디어라고 생각해. 일상적인 문의는 더 빨리 답할 수 있고 우리는 복잡한 사안에 쓸 시간이 늘어나겠지." },
      { r: "A", de: "Das sehe ich anders. Ich befürchte, dass die Qualität leiden wird. Kunden merken sofort, wenn sie mit einer Maschine sprechen, und fühlen sich nicht ernst genommen.", ko: "나는 생각이 달라. 품질이 떨어질까 걱정돼. 고객은 기계와 이야기한다는 걸 바로 알아채고 존중받지 못한다고 느낄 거야." },
      { r: "B", de: "Das kann sein, aber Qualität hängt vom Einsatz ab. Wenn das Tool nur Standardfragen beantwortet und alles andere an uns weiterleitet, entsteht doch kein Nachteil.", ko: "그럴 수도 있지만 품질은 어떻게 쓰느냐에 달려 있어. 도구가 표준 질문에만 답하고 나머지는 우리에게 넘겨 준다면 불이익은 생기지 않잖아." },
      { r: "A", de: "In der Theorie ja. Aber was passiert, wenn das System Fehler macht und falsche Auskünfte erteilt? Wer trägt dann die Verantwortung?", ko: "이론상으로는 그렇지. 하지만 시스템이 실수해서 잘못된 안내를 하면? 그때 책임은 누가 지는데?" },
      { r: "B", de: "Das ist ein berechtigter Einwand. Deshalb müsste man klare Regeln aufstellen und die Antworten stichprobenartig überprüfen.", ko: "타당한 지적이야. 그래서 명확한 규칙을 세우고 답변을 무작위로 점검해야 할 거야." },
      { r: "A", de: "Außerdem mache ich mir Sorgen um Arbeitsplätze. Es heißt, dass zunächst nur Routineaufgaben automatisiert werden, aber wer garantiert, dass es dabei bleibt?", ko: "게다가 일자리도 걱정돼. 처음에는 일상적인 업무만 자동화한다고 하지만, 거기서 멈춘다고 누가 보장해?" },
      { r: "B", de: "Garantien gibt es nie. Andererseits hat jede technische Neuerung neue Aufgaben geschaffen. Entscheidend ist, dass wir uns weiterbilden und rechtzeitig mitgestalten, statt abzuwarten.", ko: "보장은 어디에도 없지. 하지만 한편으로 모든 기술 혁신은 새로운 일을 만들어 냈어. 중요한 건 기다리지 않고 우리가 공부하고 제때 함께 만들어 가는 거야." },
      { r: "A", de: "Da ist etwas dran. Vielleicht sollten wir dem Betriebsrat vorschlagen, dass wir an der Einführung beteiligt werden.", ko: "일리가 있네. 도입 과정에 우리가 참여하도록 노동자 협의회에 제안해 볼 수 있겠어." },
      { r: "B", de: "Gute Idee. Dann könnten wir auch Schulungen einfordern.", ko: "좋은 생각이야. 그러면 교육도 요구할 수 있겠지." },
      { r: "A", de: "Gut, dann formulieren wir einen kurzen Vorschlag.", ko: "좋아, 그럼 간단한 제안서를 작성하자." },
      { r: "B", de: "Einverstanden. Ich entwerfe ihn und schicke ihn dir bis morgen.", ko: "동의해. 내가 초안을 써서 내일까지 보내 줄게." }
    ],
    redemittel: [
      { group: "의견 묻기", items: [
        { de: "Was hältst du davon?", ko: "어떻게 생각해?" }
      ] },
      { group: "찬성", items: [
        { de: "Grundsätzlich finde ich die Idee sinnvoll.", ko: "기본적으로 좋은 아이디어라고 생각해." }
      ] },
      { group: "반대 · 우려", items: [
        { de: "Das sehe ich anders.", ko: "나는 생각이 달라." },
        { de: "Ich befürchte, dass …", ko: "…일까 걱정돼." },
        { de: "Ich mache mir Sorgen um … ", ko: "…이 걱정돼." }
      ] },
      { group: "인정 · 양보", items: [
        { de: "Das ist ein berechtigter Einwand.", ko: "타당한 지적이야." },
        { de: "In der Theorie ja. Aber …", ko: "이론상으로는 그렇지. 하지만 …" },
        { de: "Da ist etwas dran.", ko: "일리가 있네." }
      ] },
      { group: "대안", items: [
        { de: "Andererseits … ", ko: "한편으로는 …" },
        { de: "Entscheidend ist, dass wir … , statt abzuwarten.", ko: "중요한 건 기다리지 않고 우리가 …하는 거야." }
      ] }
    ]
  }
];
