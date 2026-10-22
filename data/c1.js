/* SODA SPRECHTRAINING · C1 대화문 */
window.DIALOG_DATA = window.DIALOG_DATA || {};
window.DIALOG_DATA.C1 = [
  {
    no: 1, lv: "C1",
    title: "Homeoffice – ja oder nein?", titleKo: "재택근무, 찬성인가 반대인가", type: "Diskussion", typeKo: "토론",
    intro: "양쪽 입장을 검토하며 타협안을 찾는 토론이에요.",
    focus: ["찬반 토론", "반론과 양보", "타협안 만들기"],
    roles: { A: "Teamleiterin Sabine", B: "Kollege Markus" },
    turns: [
      { r: "A", de: "Ich habe den Eindruck, dass die Diskussion um das Homeoffice oft an der eigentlichen Frage vorbeigeht. Es geht nicht um Bequemlichkeit, sondern um Vertrauen.", ko: "재택근무 논의가 정작 핵심을 비켜 가는 것 같아. 편하냐의 문제가 아니라 신뢰의 문제잖아." },
      { r: "B", de: "Da stimme ich dir zum Teil zu. Vertrauen lässt sich allerdings kaum an Anwesenheitszeiten messen. Wer produktiv ist, zeigt das am Ergebnis, nicht am Schreibtisch.", ko: "그 말에는 부분적으로 동의해. 하지만 신뢰는 출근 시간으로 측정하기 어려워. 생산성은 책상에 앉아 있는 시간이 아니라 결과로 드러나는 거지." },
      { r: "A", de: "Das mag stimmen, nur hat die Praxis gezeigt, dass informelle Absprachen bei reiner Remote-Arbeit deutlich leiden – zumal neue Kollegen kaum Gelegenheit haben, sich einzuarbeiten.", ko: "그럴 수도 있어. 다만 실제로 보면 완전 원격 근무에서는 비공식적인 협의가 뚜렷하게 약해져. 특히 신입은 적응할 기회가 거의 없고." },
      { r: "B", de: "Das ist ein berechtigter Einwand. Allerdings wird dabei oft übersehen, dass starre Anwesenheitspflichten viele Mitarbeitende auch nicht produktiver machen – im Großraumbüro leidet die Konzentration oft erheblich.", ko: "타당한 지적이야. 하지만 경직된 출근 의무가 많은 직원을 더 생산적으로 만들지도 않는다는 점은 자주 간과돼. 개방형 사무실에서는 집중력이 크게 떨어지는 경우도 많거든." },
      { r: "A", de: "Sicher, es gibt Argumente auf beiden Seiten. Mein Vorschlag wäre ein Modell, bei dem wir je nach Aufgabe entscheiden: konzeptionelle Arbeit zu Hause, Abstimmungen vor Ort.", ko: "물론 양쪽 모두 근거가 있어. 내 제안은 업무에 따라 정하는 모델이야. 구상 작업은 집에서, 협의는 사무실에서 하는 거지." },
      { r: "B", de: "Ein hybrides Modell liegt zwar nahe, doch es birgt die Gefahr, dass je nach Präsenz im Büro eine Art Zweiklassengesellschaft entsteht.", ko: "하이브리드 모델이 자연스럽긴 해. 하지만 사무실에 얼마나 나오느냐에 따라 일종의 두 부류가 생길 위험이 있어." },
      { r: "A", de: "Das ist ein Punkt, den man ernst nehmen muss. Dem könnte man entgegenwirken, indem man die Regeln transparent festlegt und sie nicht dem Gutdünken einzelner überlässt.", ko: "그건 진지하게 봐야 할 지점이야. 규칙을 투명하게 정하고 개인의 판단에 맡기지 않으면 그 위험을 줄일 수 있어." },
      { r: "B", de: "Einverstanden. Ich wäre sogar dafür, die Regelung nach einem halben Jahr zu evaluieren, es sei denn, die Kennzahlen des Teams zeigen früher deutliche Probleme.", ko: "동의해. 나는 오히려 반년 뒤에 규정을 평가하자고 하고 싶어. 팀 지표에서 더 일찍 뚜렷한 문제가 나타나지 않는다면." },
      { r: "A", de: "Dann schlage ich vor, dass wir bis Monatsende ein Konzept ausarbeiten und es dem Vorstand zur Entscheidung vorlegen.", ko: "그럼 월말까지 방안을 만들어서 이사회에 결정을 요청하자고 제안할게." },
      { r: "B", de: "Gut. Ich übernehme die Umfrage unter den Mitarbeitenden, damit wir eine belastbare Grundlage haben.", ko: "좋아. 탄탄한 근거를 갖추도록 직원 설문은 내가 맡을게." }
    ],
    redemittel: [
      { group: "의견 제시", items: [
        { de: "Ich habe den Eindruck, dass …", ko: "…라는 인상을 받았어." }
      ] },
      { group: "부분 동의", items: [
        { de: "Da stimme ich dir zum Teil zu.", ko: "그 말에는 부분적으로 동의해." }
      ] },
      { group: "반론", items: [
        { de: "Das mag stimmen, nur …", ko: "그럴 수도 있지만, …" },
        { de: "Das ist ein berechtigter Einwand.", ko: "타당한 지적이야." },
        { de: "Allerdings wird oft übersehen, dass …", ko: "하지만 …는 자주 간과돼." }
      ] },
      { group: "중립 정리", items: [
        { de: "Es gibt Argumente auf beiden Seiten.", ko: "양쪽 모두 근거가 있어." }
      ] },
      { group: "우려", items: [
        { de: "… birgt die Gefahr, dass …", ko: "…할 위험이 있어." }
      ] },
      { group: "대안", items: [
        { de: "Dem könnte man entgegenwirken, indem man …", ko: "…함으로써 이를 막을 수 있어." },
        { de: "Ein Modell, bei dem …", ko: "…하는 방식의 모델" }
      ] },
      { group: "조건", items: [
        { de: "… , es sei denn, …", ko: "…라면 몰라도." }
      ] },
      { group: "찬성 · 합의", items: [
        { de: "Ich wäre sogar dafür, …", ko: "나는 오히려 …에 찬성해." },
        { de: "Einverstanden.", ko: "동의해." }
      ] }
    ]
  },

  {
    no: 2, lv: "C1",
    title: "Vier-Tage-Woche", titleKo: "주 4일제 인터뷰", type: "Interview", typeKo: "인터뷰",
    intro: "진행자가 노동시장 연구자에게 주 4일제의 장단점과 조건을 묻는 인터뷰예요.",
    focus: ["인터뷰", "양보와 제한", "명사형 문체"],
    roles: { A: "Moderatorin", B: "Arbeitsmarktforscher" },
    turns: [
      { r: "A", de: "Herr Dr. Brandt, die Vier-Tage-Woche wird in Deutschland zunehmend diskutiert. Wie erklären Sie sich das große Interesse?", ko: "브란트 박사님, 독일에서 주 4일제 논의가 점점 늘고 있습니다. 이렇게 관심이 큰 이유를 어떻게 설명하시나요?" },
      { r: "B", de: "Vor allem durch den Fachkräftemangel. Unternehmen suchen nach Argumenten, mit denen sie im Wettbewerb um qualifizierte Bewerber punkten können. Hinzu kommt, dass sich die Erwartungen an Arbeit grundlegend verschoben haben: Viele wollen nicht mehr, dass ihr Leben um den Job herum organisiert wird.", ko: "무엇보다 전문 인력 부족 때문입니다. 기업들은 우수한 지원자를 두고 벌이는 경쟁에서 내세울 수 있는 요소를 찾고 있어요. 게다가 일에 대한 기대가 근본적으로 달라졌습니다. 많은 사람이 더는 삶이 직장 중심으로 짜이기를 원하지 않아요." },
      { r: "A", de: "Skeptiker wenden ein, dass sich die gleiche Leistung in vier Tagen kaum erbringen lässt. Ist das Wunschdenken?", ko: "회의적인 사람들은 같은 성과를 나흘 안에 내기는 어렵다고 반박합니다. 희망 사항에 불과한 걸까요?" },
      { r: "B", de: "Teils, teils. In Bereichen, in denen Leistung an Anwesenheit gekoppelt ist, etwa in der Pflege oder im Schichtdienst, lässt sich Arbeitszeit nicht beliebig verdichten. In wissensbasierten Berufen dagegen zeigen mehrere Pilotprojekte, dass die Produktivität nicht zwangsläufig sinkt – vorausgesetzt, Besprechungen und Abläufe werden konsequent gestrafft.", ko: "반반입니다. 간병이나 교대 근무처럼 성과가 근무 시간에 묶여 있는 분야에서는 업무 시간을 마음대로 압축할 수 없어요. 반면 지식 기반 직종에서는 여러 시범 사업이 생산성이 반드시 떨어지지는 않는다는 걸 보여 줍니다. 회의와 업무 절차를 철저히 줄인다는 전제하에서요." },
      { r: "A", de: "Gibt es nicht die Gefahr, dass die Beschäftigten am Ende nur dieselbe Arbeit in weniger Zeit erledigen müssen und der Druck steigt?", ko: "결국 직원들이 같은 일을 더 짧은 시간에 해내야 해서 압박이 커질 위험은 없나요?" },
      { r: "B", de: "Diese Gefahr besteht tatsächlich. Eine Vier-Tage-Woche ohne Entlastung bei den Aufgaben wäre eine verkappte Arbeitsverdichtung. Entscheidend ist, was man mit der gewonnenen Zeit macht und ob der Arbeitgeber bereit ist, Erwartungen anzupassen.", ko: "그 위험은 실제로 있습니다. 업무 부담을 덜어 주지 않는 주 4일제는 사실상 숨은 업무 압축일 뿐이에요. 중요한 건 확보한 시간으로 무엇을 하느냐, 그리고 고용주가 기대치를 조정할 준비가 되어 있느냐입니다." },
      { r: "A", de: "Wie sieht es mit den Kosten aus? Wer trägt das finanzielle Risiko?", ko: "비용은 어떤가요? 재정적 위험은 누가 부담하나요?" },
      { r: "B", de: "Das hängt vom Modell ab. Bei vollem Lohnausgleich tragen es zunächst die Unternehmen. Es wäre aber zu kurz gedacht, nur die Kosten zu sehen: Wenn weniger Krankheitstage und eine geringere Fluktuation hinzukommen, kann sich das Modell durchaus rechnen.", ko: "모델에 따라 다릅니다. 임금을 그대로 보전하면 우선은 기업이 부담해요. 하지만 비용만 보는 건 너무 근시안적이에요. 병가가 줄고 이직이 줄어든다면 충분히 수지가 맞을 수 있습니다." },
      { r: "A", de: "Sollte der Gesetzgeber die Vier-Tage-Woche fördern?", ko: "입법자가 주 4일제를 장려해야 할까요?" },
      { r: "B", de: "Ich wäre zurückhaltend mit einer gesetzlichen Pflicht. Sinnvoller wäre es, Rahmenbedingungen zu schaffen, die Experimente erleichtern, und die Ergebnisse systematisch auszuwerten, statt aus Einzelbeispielen allgemeine Schlüsse zu ziehen.", ko: "법적 의무에는 신중한 편입니다. 시도를 쉽게 해 주는 환경을 만들고, 개별 사례에서 일반적인 결론을 끌어내는 대신 결과를 체계적으로 분석하는 편이 더 합리적이라고 봅니다." },
      { r: "A", de: "Herr Dr. Brandt, vielen Dank für das Gespräch.", ko: "브란트 박사님, 인터뷰에 응해 주셔서 감사합니다." },
      { r: "B", de: "Sehr gern.", ko: "별말씀을요." }
    ],
    redemittel: [
      { group: "이유 묻기", items: [
        { de: "Wie erklären Sie sich das große Interesse?", ko: "관심이 큰 이유를 어떻게 설명하시나요?" }
      ] },
      { group: "반박 소개", items: [
        { de: "Skeptiker wenden ein, dass …", ko: "회의적인 사람들은 …라고 반박해요." }
      ] },
      { group: "구분하기", items: [
        { de: "Teils, teils.", ko: "반반이에요." },
        { de: "In …, dagegen …", ko: "…에서는, 반면 …" },
        { de: "… , vorausgesetzt, …", ko: "…, 단 …을 전제로." }
      ] },
      { group: "위험 말하기", items: [
        { de: "Diese Gefahr besteht tatsächlich.", ko: "그 위험은 실제로 있습니다." }
      ] },
      { group: "상대화", items: [
        { de: "Es wäre zu kurz gedacht, nur … zu sehen.", ko: "…만 보는 것은 근시안적이에요." }
      ] },
      { group: "신중한 입장", items: [
        { de: "Ich wäre zurückhaltend mit … ", ko: "…에는 신중한 편입니다." },
        { de: "… , statt aus Einzelbeispielen Schlüsse zu ziehen.", ko: "개별 사례에서 결론을 끌어내는 대신 …" }
      ] }
    ]
  },

  {
    no: 3, lv: "C1",
    title: "Lieferverzug", titleKo: "납품 지연 협상", type: "Verhandlung", typeKo: "협상",
    intro: "납품이 지연된 구매자와 판매자가 보상 방안을 두고 줄다리기를 하는 대화예요.",
    focus: ["비즈니스 협상", "명사화 · 기능동사 결합", "sofern · andernfalls"],
    roles: { A: "Einkaufsleiter", B: "Vertriebsleiterin" },
    turns: [
      { r: "A", de: "Frau Albrecht, ich komme direkt zur Sache. Die vereinbarte Lieferung der Steuerungseinheiten ist nun schon vier Wochen überfällig. Das bringt unsere Produktion erheblich in Verzug.", ko: "알브레히트 씨, 곧바로 본론으로 들어가겠습니다. 합의된 제어 장치 납품이 벌써 4주나 늦어졌습니다. 그 때문에 저희 생산이 크게 지연되고 있어요." },
      { r: "B", de: "Herr Lindner, ich verstehe Ihren Ärger. Der Verzug ist auf einen Engpass bei unserem Zulieferer zurückzuführen, den wir nicht vorhersehen konnten. Wir arbeiten mit Hochdruck an einer Lösung.", ko: "린트너 씨, 화나신 건 이해합니다. 지연은 저희가 예측하지 못한 협력업체의 공급 병목 때문입니다. 해결을 위해 전력을 다하고 있어요." },
      { r: "A", de: "Mir geht es weniger um die Ursache als um die Folgen. Wir mussten bereits Überstunden anordnen und riskieren Vertragsstrafen gegenüber unseren eigenen Kunden. Im Vertrag ist für solche Fälle eine Verzugsentschädigung vorgesehen.", ko: "저에게는 원인보다 결과가 더 중요합니다. 저희는 이미 초과 근무를 지시해야 했고, 저희 고객에게 위약금을 물 위험도 있어요. 계약서에는 이런 경우를 위한 지연 보상이 규정되어 있습니다." },
      { r: "B", de: "Ich bestreite nicht, dass uns diese Klausel bindet. Allerdings sieht der Vertrag bei höherer Gewalt eine Ausnahme vor, und ob der Lieferengpass darunter fällt, wäre zumindest zu klären.", ko: "그 조항이 저희를 구속한다는 점은 부인하지 않습니다. 다만 계약서는 불가항력의 경우 예외를 두고 있고, 공급 병목이 거기에 해당하는지는 적어도 확인해 봐야 합니다." },
      { r: "A", de: "Das halte ich für sehr weit hergeholt. Ein Lieferengpass bei einem Zulieferer fällt in Ihren Risikobereich, nicht in unseren. Ich möchte nicht, dass wir uns in juristischen Feinheiten verlieren; mir wäre an einer tragfähigen Lösung gelegen.", ko: "그건 너무 억지스럽다고 봅니다. 협력업체의 공급 병목은 저희가 아니라 귀사의 위험 영역입니다. 법적인 세부 사항에 매이고 싶지 않아요. 저는 지속 가능한 해결책을 원합니다." },
      { r: "B", de: "Das ist auch in unserem Interesse. Ich könnte Ihnen eine Teillieferung von 60 Prozent bereits nächste Woche zusagen, den Rest bis Monatsende.", ko: "그건 저희에게도 이익입니다. 60퍼센트 부분 납품은 다음 주에, 나머지는 월말까지 약속드릴 수 있어요." },
      { r: "A", de: "Eine Teillieferung hilft uns, aber sie löst das Problem nicht. Wir bräuchten verbindliche Termine, und für jeden weiteren Tag Verzug müsste ein pauschaler Abschlag vereinbart werden.", ko: "부분 납품은 도움이 되지만 문제를 해결하지는 않습니다. 구속력 있는 기한이 필요하고, 지연되는 하루마다 정액 감액을 합의해야 합니다." },
      { r: "B", de: "Einen pauschalen Abschlag kann ich nicht ohne Rücksprache mit der Geschäftsführung zusagen. Was ich anbieten kann, ist ein Preisnachlass von fünf Prozent auf diese Lieferung, sofern Sie auf weitergehende Ansprüche verzichten.", ko: "정액 감액은 경영진과 상의 없이는 약속드릴 수 없습니다. 제가 제안할 수 있는 건 추가 청구를 포기하신다는 조건으로 이번 납품에 5퍼센트 할인을 해 드리는 것입니다." },
      { r: "A", de: "Fünf Prozent stehen in keinem Verhältnis zu unserem Schaden. Ich könnte mir sieben Prozent vorstellen, zuzüglich einer schriftlichen Zusage, dass die Restlieferung spätestens zum 30. erfolgt. Verzichten würden wir dann nur auf die Verzugsentschädigung für diese Lieferung, nicht auf Ansprüche für künftige Lieferungen.", ko: "5퍼센트는 저희 손해에 비하면 턱없이 부족합니다. 7퍼센트에, 나머지 납품이 늦어도 30일까지 이루어진다는 서면 약속을 더하면 생각해 볼 수 있습니다. 그 경우에도 이번 납품의 지연 보상만 포기하고 앞으로의 납품에 대한 청구권은 포기하지 않을 겁니다." },
      { r: "B", de: "Das lässt sich hören. Ich werde das heute noch mit meiner Geschäftsführung besprechen und melde mich bis morgen Mittag.", ko: "논의할 만하네요. 오늘 중으로 경영진과 상의하고 내일 정오까지 연락드리겠습니다." },
      { r: "A", de: "Gut. Ich gehe davon aus, dass wir bis dahin eine verbindliche Antwort haben. Andernfalls müsste ich meine Rechtsabteilung einschalten.", ko: "좋습니다. 그때까지 구속력 있는 답변을 받을 수 있으리라 생각합니다. 그렇지 않으면 법무팀을 개입시킬 수밖에 없어요." },
      { r: "B", de: "Verstanden. Ich bin zuversichtlich, dass wir zu einer Einigung kommen.", ko: "알겠습니다. 합의에 이를 수 있으리라 낙관합니다." }
    ],
    redemittel: [
      { group: "본론으로", items: [
        { de: "Ich komme direkt zur Sache.", ko: "곧바로 본론으로 들어가겠습니다." }
      ] },
      { group: "원인과 결과", items: [
        { de: "Mir geht es weniger um … als um …", ko: "저에게는 …보다 …가 더 중요합니다." },
        { de: "Der Verzug ist auf … zurückzuführen.", ko: "지연은 …때문입니다." }
      ] },
      { group: "인정하되 반박", items: [
        { de: "Ich bestreite nicht, dass … Allerdings …", ko: "…라는 점은 부인하지 않습니다. 다만 …" },
        { de: "Das halte ich für sehr weit hergeholt.", ko: "그건 너무 억지스럽다고 봅니다." }
      ] },
      { group: "제안", items: [
        { de: "Was ich anbieten kann, ist … , sofern …", ko: "제가 제안할 수 있는 건 …입니다, 단 …한다면요." },
        { de: "Ich könnte mir … vorstellen, zuzüglich …", ko: "…에 …을 더하면 생각해 볼 수 있습니다." }
      ] },
      { group: "압박 · 마무리", items: [
        { de: "Andernfalls müsste ich … einschalten.", ko: "그렇지 않으면 …을 개입시킬 수밖에 없어요." },
        { de: "Das lässt sich hören.", ko: "논의할 만하네요." }
      ] }
    ]
  },

  {
    no: 4, lv: "C1",
    title: "Stadt oder Land?", titleKo: "도시냐 시골이냐", type: "Gespräch", typeKo: "대화",
    intro: "시골로 이사한 친구에게 경험을 묻고 장단점을 따져 보는 대화예요.",
    focus: ["경험 평가", "장단점 따져 보기", "Konjunktiv I: sei · indirekte Rede"],
    roles: { A: "Carla", B: "Tobias" },
    turns: [
      { r: "A", de: "Nach zehn Jahren in der Stadt überlegen wir ernsthaft, aufs Land zu ziehen. Du hast ja selbst vor zwei Jahren den Schritt gewagt – würdest du ihn im Nachhinein wieder machen?", ko: "10년 동안 도시에 살다가 우리는 시골로 이사하는 걸 진지하게 고민하고 있어. 너는 2년 전에 직접 그 결정을 했잖아. 돌이켜보면 다시 그렇게 할 거야?" },
      { r: "B", de: "Im Großen und Ganzen ja, wobei ich anfangs unterschätzt habe, wie sehr man auf das Auto angewiesen ist. Ohne eigenes Fahrzeug wäre das Leben hier kaum zu organisieren.", ko: "대체로 그래. 다만 처음에는 자동차에 얼마나 의존해야 하는지 과소평가했어. 자기 차가 없으면 여기서 생활하기가 거의 어려울 거야." },
      { r: "A", de: "Das ist genau das, was mich zögern lässt. Wir wollen eigentlich weniger Auto fahren, nicht mehr. Dafür locken uns die Ruhe und die Möglichkeit, endlich ein Haus mit Garten bezahlen zu können.", ko: "바로 그 점이 나를 망설이게 해. 우리는 사실 차를 덜 타고 싶거든. 대신 고요함과 마침내 정원 딸린 집을 살 수 있다는 가능성이 끌려." },
      { r: "B", de: "Bezahlbarer Wohnraum ist sicher ein starkes Argument. Man darf aber nicht vergessen, dass das Land nicht automatisch Idylle bedeutet. Das soziale Leben spielt sich oft in Vereinen ab, und wer nicht dazugehört, braucht Zeit, um Anschluss zu finden.", ko: "감당할 만한 주거비는 분명 강력한 논거야. 하지만 시골이 곧 전원 풍경은 아니라는 점도 잊으면 안 돼. 사회생활이 흔히 동호회 안에서 이뤄지고, 거기에 속하지 않은 사람은 어울리기까지 시간이 걸려." },
      { r: "A", de: "Das habe ich befürchtet. Andererseits hört man auch, dass der Zusammenhalt auf dem Dorf stärker sei als in der Anonymität der Großstadt.", ko: "그럴까 봐 걱정했어. 한편으로는 마을의 유대가 대도시의 익명성보다 더 강하다는 말도 들리잖아." },
      { r: "B", de: "Das stimmt zum Teil, aber Zusammenhalt hat seinen Preis: Man kennt sich, und man spricht über einen. Wer Wert auf Privatsphäre legt, muss damit leben können.", ko: "부분적으로는 맞아. 하지만 유대에는 대가가 따라. 서로 알고, 사람들이 나에 대해 이야기하지. 사생활을 중요하게 여기는 사람은 그걸 견딜 수 있어야 해." },
      { r: "A", de: "Wie sieht es mit der Infrastruktur aus – Ärzte, Schulen, Internet?", ko: "기반 시설은 어때? 병원, 학교, 인터넷은?" },
      { r: "B", de: "Das ist ein wunder Punkt. Der nächste Facharzt ist 25 Kilometer entfernt, und das Glasfasernetz wird erst jetzt ausgebaut. Dank Homeoffice fällt das weniger ins Gewicht, als es vor ein paar Jahren der Fall gewesen wäre.", ko: "그건 약점이야. 가장 가까운 전문의가 25킬로미터 떨어져 있고, 광케이블망은 이제야 확충되고 있어. 재택근무 덕분에 몇 년 전만큼 크게 문제가 되지는 않지만." },
      { r: "A", de: "Dann hängt die Entscheidung wohl davon ab, wie flexibel wir beruflich bleiben können.", ko: "그럼 결정은 우리가 직업적으로 얼마나 유연하게 지낼 수 있느냐에 달려 있겠네." },
      { r: "B", de: "Genau. Mein Rat wäre, nicht übereilt zu entscheiden: Mietet erst einmal für ein halbes Jahr, bevor ihr ein Haus kauft. Dann merkt ihr, ob ihr den Alltag tatsächlich so wollt.", ko: "맞아. 내 조언은 서두르지 말라는 거야. 집을 사기 전에 우선 반년만 세를 얻어 봐. 그러면 그런 일상을 정말 원하는지 알게 돼." },
      { r: "A", de: "Das ist ein kluger Gedanke. Wir würden damit nichts Unumkehrbares tun.", ko: "현명한 생각이야. 그렇게 하면 되돌릴 수 없는 일을 하는 건 아니니까." },
      { r: "B", de: "Eben. Und wenn es nicht passt, ist die Stadt ja nur eine Autostunde entfernt.", ko: "그렇지. 그리고 맞지 않으면 도시는 차로 한 시간 거리밖에 안 되니까." }
    ],
    redemittel: [
      { group: "경험 돌아보기", items: [
        { de: "Würdest du den Schritt im Nachhinein wieder machen?", ko: "돌이켜보면 그 결정을 다시 할 거야?" },
        { de: "Im Großen und Ganzen ja, wobei …", ko: "대체로 그래. 다만 …" }
      ] },
      { group: "망설임", items: [
        { de: "Das ist genau das, was mich zögern lässt.", ko: "바로 그 점이 나를 망설이게 해." }
      ] },
      { group: "상대화", items: [
        { de: "Man darf aber nicht vergessen, dass …", ko: "하지만 …라는 점도 잊으면 안 돼." },
        { de: "Das stimmt zum Teil, aber …", ko: "부분적으로는 맞지만 …" }
      ] },
      { group: "전해 들은 말", items: [
        { de: "Man hört, dass der Zusammenhalt stärker sei.", ko: "유대가 더 강하다고들 해." }
      ] },
      { group: "약점 · 비중", items: [
        { de: "Das ist ein wunder Punkt.", ko: "그건 약점이야." },
        { de: "Das fällt weniger ins Gewicht.", ko: "그건 비중이 덜해." }
      ] },
      { group: "조언", items: [
        { de: "Mein Rat wäre, nicht übereilt zu entscheiden.", ko: "내 조언은 서두르지 말라는 거야." }
      ] }
    ]
  },

  {
    no: 5, lv: "C1",
    title: "Im Literaturkreis", titleKo: "독서 모임: 소설 이야기", type: "Gespräch", typeKo: "대화",
    intro: "함께 읽은 소설을 해석하며 의견이 엇갈리는 부분을 조율하는 대화예요.",
    focus: ["해석하기", "추측 표현", "양보절: wenngleich · zwar"],
    roles: { A: "Marlene", B: "Jonas" },
    turns: [
      { r: "A", de: "Bevor wir ins Detail gehen: Wie hat euch der Roman insgesamt gefallen? Ich muss gestehen, dass ich anfangs Schwierigkeiten hatte, in die Handlung hineinzukommen.", ko: "세부 이야기에 들어가기 전에, 소설 전체가 어땠어? 고백하자면 나는 처음에 줄거리에 몰입하기 어려웠어." },
      { r: "B", de: "Mir ging es ähnlich, aber ab dem zweiten Drittel hat mich das Buch gepackt. Besonders gelungen finde ich, wie die Autorin mit den Zeitebenen spielt: Die Vergangenheit schiebt sich immer wieder in die Gegenwart der Erzählerin.", ko: "나도 비슷했어. 하지만 중반부터는 책에 빠져들었어. 작가가 시간대를 다루는 방식이 특히 잘 됐다고 생각해. 과거가 계속 화자의 현재 속으로 끼어들지." },
      { r: "A", de: "Ja, das wirkt auf mich weniger wie ein formaler Kniff als wie eine Darstellung dessen, wie Erinnerung funktioniert – unscharf, sprunghaft und von der Gegenwart gefärbt.", ko: "맞아, 나한테는 형식적인 기교라기보다 기억이 어떻게 작동하는지를 보여 주는 묘사처럼 느껴져. 흐릿하고 건너뛰고 현재에 물들어 있는 기억 말이야." },
      { r: "B", de: "Das sehe ich auch so. Allerdings frage ich mich, ob man der Erzählerin trauen kann. An mehreren Stellen widerspricht sie sich, ohne dass der Text das kommentiert.", ko: "나도 그렇게 봐. 다만 화자를 믿어도 되는지는 의문이야. 여러 곳에서 화자가 스스로 모순되는데도 텍스트는 그걸 언급하지 않아." },
      { r: "A", de: "Das könnte Absicht sein. Vielleicht soll uns der Roman gerade vor Augen führen, dass jede Erinnerung eine Konstruktion ist, die man nicht für bare Münze nehmen darf.", ko: "의도일 수도 있어. 모든 기억은 곧이곧대로 받아들여서는 안 되는 하나의 구성물이라는 걸 소설이 일부러 보여 주려는 걸지도 몰라." },
      { r: "B", de: "Eine überzeugende Lesart, wenngleich ich sie ein wenig zu glatt finde. Man könnte genauso gut sagen, dass die Widersprüche schlicht eine Unachtsamkeit der Autorin sind.", ko: "설득력 있는 해석이야. 다만 나한테는 조금 매끄러운 감이 있어. 모순이 그저 작가의 부주의라고 말할 수도 있잖아." },
      { r: "A", de: "Das halte ich für unwahrscheinlich, dafür ist das Buch zu sorgfältig komponiert. Was mich eher gestört hat, ist die Sprache. Die langen Satzgefüge haben mich bisweilen ermüdet.", ko: "그럴 가능성은 낮다고 봐. 책이 그러기엔 너무 세심하게 구성돼 있어. 오히려 거슬렸던 건 문체였어. 긴 복합문이 가끔 지치게 했어." },
      { r: "B", de: "Da widerspreche ich dir. Gerade die Sprache macht für mich den Reiz aus. Sie bildet das Kreisen der Gedanken ab, und ohne sie wäre der Roman deutlich weniger eindringlich.", ko: "그 점은 반대야. 나한테는 바로 그 문체가 매력이야. 생각이 맴도는 모습을 그대로 담고 있고, 문체가 없었다면 소설은 훨씬 덜 강렬했을 거야." },
      { r: "A", de: "Das lässt sich nicht von der Hand weisen. Trotzdem hätte ich mir an einigen Stellen mehr Verdichtung gewünscht.", ko: "부정할 수 없는 말이야. 그래도 몇몇 대목은 더 응축되었으면 했어." },
      { r: "B", de: "Vielleicht liegt es auch an den Erwartungen. Wer eine geradlinige Handlung sucht, wird enttäuscht, wer sich auf den Rhythmus einlässt, wird belohnt.", ko: "기대치 문제일지도 몰라. 직선적인 줄거리를 찾는 사람은 실망하고, 리듬에 몸을 맡기는 사람은 보상을 받아." },
      { r: "A", de: "Schön formuliert. Dann würde ich sagen: kein einfaches Buch, aber eines, über das man lange nachdenkt.", ko: "표현이 멋지네. 그럼 이렇게 말하고 싶어. 쉬운 책은 아니지만 오래 생각하게 만드는 책이라고." },
      { r: "B", de: "Genau das macht es für mich empfehlenswert.", ko: "바로 그 점이 나한테는 이 책을 추천하게 만들어." }
    ],
    redemittel: [
      { group: "첫인상", items: [
        { de: "Wie hat euch der Roman insgesamt gefallen?", ko: "소설 전체가 어땠어?" }
      ] },
      { group: "해석", items: [
        { de: "Das wirkt auf mich weniger wie … als wie …", ko: "나한테는 …라기보다 …처럼 느껴져." }
      ] },
      { group: "의문 · 추측", items: [
        { de: "Ich frage mich, ob man … trauen kann.", ko: "…를 믿어도 되는지 의문이야." },
        { de: "Das könnte Absicht sein.", ko: "의도일 수도 있어." }
      ] },
      { group: "다른 해석", items: [
        { de: "Man könnte genauso gut sagen, dass …", ko: "…라고 말할 수도 있잖아." }
      ] },
      { group: "반대 · 양보", items: [
        { de: "Da widerspreche ich dir.", ko: "그 점은 반대야." },
        { de: "Das lässt sich nicht von der Hand weisen.", ko: "부정할 수 없는 말이야." }
      ] },
      { group: "정리", items: [
        { de: "Dann würde ich sagen: kein einfaches Buch, aber …", ko: "그럼 이렇게 말하고 싶어. 쉬운 책은 아니지만 …" }
      ] }
    ]
  },

  {
    no: 6, lv: "C1",
    title: "Sprachenlernen im KI-Zeitalter", titleKo: "AI 번역 시대의 외국어 학습", type: "Diskussion", typeKo: "토론",
    intro: "번역 AI가 있어도 외국어를 배울 가치가 있는지 학생과 교사가 논증을 주고받는 대화예요.",
    focus: ["주장과 반론", "논거 구성", "Konjunktiv II · Konjunktiv I"],
    roles: { A: "Studentin", B: "Sprachlehrer" },
    turns: [
      { r: "A", de: "Herr Keller, ich habe in letzter Zeit ernsthaft darüber nachgedacht, ob es sich überhaupt noch lohnt, eine Fremdsprache mühsam zu lernen. Die Übersetzungs-Apps werden doch von Jahr zu Jahr besser.", ko: "켈러 선생님, 저는 요즘 외국어를 힘들게 배우는 것이 아직도 가치가 있는지 진지하게 고민해 왔어요. 번역 앱은 해마다 좋아지고 있잖아요." },
      { r: "B", de: "Die Frage ist berechtigt, und ich nehme sie ernst. Für viele praktische Zwecke wie Speisekarten oder Hinweisschilder reicht die Technik inzwischen völlig aus. Ich würde aber unterscheiden zwischen dem Verstehen von Informationen und dem Führen eines Gesprächs.", ko: "타당한 질문이고 진지하게 받아들입니다. 메뉴판이나 안내 표지판처럼 실용적인 목적에는 이제 기술만으로 충분해요. 다만 저는 정보를 이해하는 일과 대화를 이어 가는 일을 구분하고 싶습니다." },
      { r: "A", de: "Inwiefern macht das einen Unterschied? Auch im Gespräch kann ich meine Sätze eintippen und übersetzen lassen.", ko: "그게 어떤 점에서 차이가 되나요? 대화 중에도 문장을 입력해서 번역시킬 수 있잖아요." },
      { r: "B", de: "Sie können es, aber Sie würden den Gesprächsfluss dabei verlieren. Zudem geht es in der Kommunikation nicht nur um Wörter. Tonfall, Höflichkeit, Humor – all das entsteht erst, wenn man eine Sprache wirklich beherrscht. Eine Maschine liefert Ihnen eine korrekte Übersetzung, aber nicht unbedingt eine angemessene.", ko: "그렇게 할 수는 있지만 대화의 흐름을 잃게 됩니다. 게다가 의사소통은 단어만의 문제가 아니에요. 어조, 예의, 유머는 언어를 정말 익혔을 때 비로소 생겨요. 기계는 정확한 번역을 주지만 적절한 번역을 주는 건 아닙니다." },
      { r: "A", de: "Das leuchtet ein. Trotzdem könnte man einwenden, dass die Zeit, die man ins Lernen steckt, anderswo sinnvoller investiert wäre.", ko: "일리가 있어요. 그래도 배움에 들이는 시간을 다른 곳에 쓰는 편이 더 의미 있을 거라고 반박할 수 있겠죠." },
      { r: "B", de: "Dieses Argument ist nicht von der Hand zu weisen. Man sollte aber bedenken, dass Sprachenlernen nicht nur ein Mittel zum Zweck ist. Wer eine Sprache lernt, lernt auch, anders zu denken und fremde Perspektiven nachzuvollziehen. Das lässt sich nicht auslagern.", ko: "그 논거는 부정하기 어렵습니다. 그래도 언어 학습이 단지 목적을 위한 수단만은 아니라는 점을 생각해야 해요. 언어를 배우는 사람은 다르게 생각하고 낯선 관점을 이해하는 법도 배웁니다. 그건 외주를 줄 수 없어요." },
      { r: "A", de: "Das klingt schön, aber ist das empirisch belegt, oder ist es eher ein Wunsch der Sprachlehrer?", ko: "듣기에는 좋은데, 경험적으로 증명된 건가요, 아니면 어학 교사들의 바람에 가까운 건가요?" },
      { r: "B", de: "Berechtigte Skepsis. Die Forschung zur Mehrsprachigkeit ist differenziert; manche Effekte, etwa auf die Aufmerksamkeitssteuerung, werden kontrovers diskutiert. Gesichert ist eher, dass Menschen mehr Vertrauen aufbauen, wenn man in ihrer Sprache mit ihnen kommuniziert. Das deckt sich mit meiner Erfahrung.", ko: "정당한 의심입니다. 다언어 연구는 의견이 갈립니다. 예를 들어 주의력 조절에 미치는 효과 같은 일부는 논쟁 중이에요. 오히려 확실한 건 상대의 언어로 소통하면 더 큰 신뢰가 생긴다는 점입니다. 제 경험과도 일치해요." },
      { r: "A", de: "Dann würde ich Ihre These so zusammenfassen: Technik ersetzt das Übersetzen, aber nicht die Beziehung.", ko: "그럼 선생님의 주장을 이렇게 요약하고 싶어요. 기술은 번역을 대신하지만 관계를 대신하지는 못한다고요." },
      { r: "B", de: "Genau, und ich würde ergänzen: Sie kann uns das Nachschlagen abnehmen, aber das Verstehen müssen wir selbst leisten.", ko: "맞습니다. 덧붙이자면 기술은 찾아보는 일을 덜어 줄 수는 있어도 이해하는 일은 우리가 직접 해야 해요." },
      { r: "A", de: "Ich werde weiterlernen, zumindest vorerst.", ko: "계속 배울게요. 적어도 당분간은요." },
      { r: "B", de: "Das freut mich, zumal Sie bereits so weit gekommen sind.", ko: "반가운 말씀이네요. 특히 벌써 이만큼이나 오셨으니까요." }
    ],
    redemittel: [
      { group: "의문 제기", items: [
        { de: "Ich habe darüber nachgedacht, ob es sich lohnt, … zu …", ko: "…하는 것이 가치가 있는지 고민했어요." }
      ] },
      { group: "구분", items: [
        { de: "Ich würde unterscheiden zwischen … und …", ko: "저는 …와 …를 구분하고 싶습니다." },
        { de: "Inwiefern macht das einen Unterschied?", ko: "그게 어떤 점에서 차이가 되나요?" }
      ] },
      { group: "반론 소개", items: [
        { de: "Man könnte einwenden, dass …", ko: "…라고 반박할 수 있어요." }
      ] },
      { group: "인정", items: [
        { de: "Dieses Argument ist nicht von der Hand zu weisen.", ko: "그 논거는 부정하기 어렵습니다." },
        { de: "Berechtigte Skepsis.", ko: "정당한 의심입니다." }
      ] },
      { group: "고려 요청", items: [
        { de: "Man sollte aber bedenken, dass …", ko: "하지만 …라는 점을 생각해야 합니다." }
      ] },
      { group: "요약", items: [
        { de: "Dann würde ich Ihre These so zusammenfassen: …", ko: "그럼 선생님의 주장을 이렇게 요약하겠습니다. …" }
      ] }
    ]
  }
];
