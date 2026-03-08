// ===== 인물 데이터 (제5차 솔베이 물리학 회의, 1927) =====
// 좌표는 원본 이미지(3000×2171) 기준 픽셀 (미간 위치에 클릭하여 측정한 값)
// r 값은 두상 커버를 위해 1.3배 적용
const scientists = [
    // === 뒷줄 (서있는 사람들, 왼쪽→오른쪽) ===
    {
        name: "오귀스트 피카르", nameEn: "Auguste Piccard", years: "1884 – 1962",
        cx: 502, cy: 808, r: 62, audioFile: "audio/piccard.mp3",
        desc: "스위스 물리학자. 우주선 연구를 위해 기구를 직접 타고 성층권에 오른 탐험가이자 심해 잠수정 바티스카프를 설계한 공학자. 성층권과 심해를 모두 탐험한 독보적 이력을 지님. 만화 캐릭터 탱탱의 실존 모델로도 유명함.",
        tts: "오귀스트 피카르는, 스위스의 물리학자로, 성층권과 심해 양쪽을 탐험한, 독보적인 과학자입니다. 그는, 우주선 연구를 위해, 기구를 직접 타고 성층권에 도달했으며, 심해 잠수정 바티스카프도 직접 설계했습니다. 모험심 넘치는 그의 삶은, 만화 캐릭터 탱탱의 실존 모델이 되기도 했습니다."
    },
    {
        name: "에밀 앙리오", nameEn: "Émile Henriot", years: "1885 – 1961",
        cx: 727, cy: 872, r: 58, audioFile: "audio/henriot.mp3",
        desc: "프랑스 화학자. 칼륨과 루비듐에서 자연 방사능을 처음 발견함. 전자현미경 개발에도 관여했으며, 물리화학의 경계를 넘나들며 정교한 실험으로 중요한 업적을 남긴 과학자.",
        tts: "에밀 앙리오는, 프랑스의 화학자로, 칼륨과 루비듐에서, 자연 방사능을 처음 발견한 인물입니다. 그는, 전자현미경 개발에도 관여했으며, 물리화학의 경계에서, 정교한 실험으로, 중요한 업적을 남겼습니다."
    },
    {
        name: "파울 에런페스트", nameEn: "Paul Ehrenfest", years: "1880 – 1933",
        cx: 881, cy: 934, r: 58, audioFile: "audio/ehrenfest.mp3",
        desc: "오스트리아 출신 네덜란드 물리학자. 통계역학과 양자역학의 관계를 깊이 연구함. 아인슈타인과 보어 양쪽과 절친한 친구로 두 거장 사이에서 가교 역할을 함. 탁월한 교육자로도 명성이 높아 많은 젊은 물리학자들에게 영향을 미친 인물.",
        tts: "파울 에런페스트는, 오스트리아 출신의, 네덜란드 물리학자입니다. 그는, 통계역학과 양자역학의 관계를 깊이 연구했으며, 아인슈타인과 보어, 양쪽 모두와 절친한 친구로, 두 거장 사이에서 가교 역할을 했습니다. 탁월한 교육자로서, 많은 젊은 물리학자들에게 큰 영향을 미쳤습니다."
    },
    {
        name: "에두아르 에르젠", nameEn: "Édouard Herzen", years: "1877 – 1936",
        cx: 1129, cy: 911, r: 55, audioFile: "audio/herzen.mp3",
        desc: "벨기에 화학자. 열역학 및 생물물리화학 분야에서 연구를 이어감. 에르네스트 솔베이의 사위로 솔베이 회의의 과학 비서를 맡아 회의 운영과 기록에 헌신함.",
        tts: "에두아르 에르젠은, 벨기에의 화학자로, 열역학 및 생물물리화학 분야에서 연구를 이어갔습니다. 에르네스트 솔베이의 사위이기도 한 그는, 솔베이 회의의 과학 비서를 맡아, 회의 운영과 기록에 헌신했습니다."
    },
    {
        name: "테오필 드 동데르", nameEn: "Théophile de Donder", years: "1872 – 1957",
        cx: 1400, cy: 950, r: 58, audioFile: "audio/dedonder.mp3",
        desc: "벨기에 수학자·물리학자. 비가역 과정의 열역학에서 '화학 친화력' 개념을 정립해 비평형 열역학의 선구자가 됨. 일반상대성이론의 수학적 구조도 깊이 탐구함. 이후 벨기에 열역학 학파에 큰 영향을 남긴 인물.",
        tts: "테오필 드 동데르는, 벨기에의 수학자이자, 물리학자입니다. 그는, 비가역 과정의 열역학에서, 화학 친화력 개념을 정립하여, 비평형 열역학의 선구자가 되었습니다. 일반상대성이론의 수학적 구조도 깊이 탐구한 그의 업적은, 이후 벨기에 열역학 학파에 큰 영향을 남겼습니다."
    },
    {
        name: "에르빈 슈뢰딩거", nameEn: "Erwin Schrödinger", years: "1887 – 1961",
        cx: 1633, cy: 883, r: 58, audioFile: "audio/schrodinger.mp3",
        desc: "오스트리아 물리학자. 양자계의 상태를 기술하는 '슈뢰딩거 방정식'을 수립해 파동역학을 창시함. 양자역학의 해석 문제를 꼬집은 사고 실험 '슈뢰딩거의 고양이'로도 널리 알려짐. 1933년 노벨 물리학상 수상.",
        tts: "에르빈 슈뢰딩거는, 오스트리아의 물리학자로, 파동역학의 창시자입니다. 그는, 양자계의 상태를 기술하는, 슈뢰딩거 방정식을 수립했으며, 양자역학의 해석 문제를 꼬집은, 사고 실험 슈뢰딩거의 고양이로도 널리 알려져 있습니다. 1933년, 노벨 물리학상을 수상했습니다."
    },
    {
        name: "쥘에밀 베르샤펠트", nameEn: "Jules-Émile Verschaffelt", years: "1870 – 1955",
        cx: 1884, cy: 901, r: 58, audioFile: "audio/verschaffelt.mp3",
        desc: "벨기에 물리학자. 기체와 액체의 임계 현상을 연구함. 솔베이 회의의 과학 비서로 오랫동안 활동하며 회의 기록과 출판물 정리에 핵심적인 역할을 담당함.",
        tts: "쥘에밀 베르샤펠트는, 벨기에의 물리학자로, 기체와 액체의 임계 현상을 연구했습니다. 그는, 솔베이 회의의 과학 비서로 오랫동안 활동하며, 회의 기록과 출판물 정리에, 핵심적인 역할을 담당했습니다."
    },
    {
        name: "볼프강 파울리", nameEn: "Wolfgang Pauli", years: "1900 – 1958",
        cx: 2126, cy: 893, r: 58, audioFile: "audio/pauli.mp3",
        desc: "오스트리아 물리학자. 같은 양자 상태를 두 전자가 동시에 차지할 수 없다는 '파울리 배타 원리'를 발견해 원자 구조 이해에 결정적으로 기여함. 1945년 노벨 물리학상 수상. 날카로운 비판으로 '물리학의 양심'이라 불림.",
        tts: "볼프강 파울리는, 오스트리아의 물리학자로, 같은 양자 상태를, 두 전자가 동시에 차지할 수 없다는, 파울리 배타 원리를 발견했습니다. 이 발견은, 원자 구조를 이해하는 데 결정적으로 기여했으며, 1945년, 노벨 물리학상으로 이어졌습니다. 날카로운 비판으로, 물리학의 양심이라 불렸습니다."
    },
    {
        name: "베르너 하이젠베르크", nameEn: "Werner Heisenberg", years: "1901 – 1976",
        cx: 2334, cy: 884, r: 58, audioFile: "audio/heisenberg.mp3",
        desc: "독일 물리학자. 행렬역학을 창시하고 위치와 운동량을 동시에 정확히 측정할 수 없다는 '불확정성 원리'를 제시해 양자역학의 근본 한계를 밝힘. 1932년 노벨 물리학상 수상. 이 회의 당시 나이 겨우 26세.",
        tts: "베르너 하이젠베르크는, 독일의 물리학자로, 행렬역학을 창시하고, 위치와 운동량을 동시에 정확히 측정할 수 없다는, 불확정성 원리를 제시했습니다. 이 원리는, 양자역학의 근본 한계를 밝힌 것으로 평가됩니다. 1932년, 노벨 물리학상을 수상했으며, 이 회의 당시 나이가, 겨우 26세였습니다."
    },
    {
        name: "랠프 파울러", nameEn: "Ralph Fowler", years: "1889 – 1944",
        cx: 2497, cy: 801, r: 58, audioFile: "audio/fowler.mp3",
        desc: "영국 물리학자. 통계역학을 천체물리학에 적용해 백색왜성의 구조를 설명하는 이론을 제시한 선구자. 폴 디랙과 수브라마니안 찬드라세카르를 지도한 탁월한 교육자.",
        tts: "랠프 파울러는, 영국의 물리학자로, 통계역학을 천체물리학에 적용해, 백색왜성의 구조를 설명하는 이론을 제시한, 선구자입니다. 그는, 폴 디랙과, 수브라마니안 찬드라세카르를 지도한, 탁월한 교육자이기도 했습니다."
    },
    {
        name: "레옹 브릴루앙", nameEn: "Léon Brillouin", years: "1889 – 1969",
        cx: 2638, cy: 887, r: 58, audioFile: "audio/brillouin.mp3",
        desc: "프랑스 물리학자. 고체 내 전자의 에너지 구조를 설명하는 '브릴루앙 영역' 개념을 도입함. 정보 이론과 물리학을 연결하는 데도 선구적 기여를 함. WKB 근사법 발전에도 공헌한 다재다능한 이론가.",
        tts: "레옹 브릴루앙은, 프랑스의 물리학자로, 고체 내 전자의 에너지 구조를 설명하는, 브릴루앙 영역 개념을 도입했습니다. 그는, 정보 이론과 물리학의 연결에도, 선구적 기여를 했으며, WKB 근사법 발전에도 공헌한, 다재다능한 이론가였습니다."
    },

    // === 가운데 줄 (의자에 앉은 사람들) ===
    {
        name: "피터 디바이", nameEn: "Peter Debye", years: "1884 – 1966",
        cx: 172, cy: 1091, r: 65, audioFile: "audio/debye.mp3",
        desc: "네덜란드 출신 물리화학자. 분자의 쌍극자 모멘트 개념을 정립하고 X선 회절로 결정 구조를 분석하는 방법을 발전시킴. 저온에서 고체의 열용량을 설명하는 '디바이 모델'로도 유명함. 1936년 노벨 화학상 수상.",
        tts: "피터 디바이는, 네덜란드 출신의 물리화학자로, 분자의 쌍극자 모멘트 개념을 정립하고, X선 회절로 결정 구조를 분석하는 방법을 발전시켰습니다. 저온에서 고체의 열용량을 설명하는, 디바이 모델로도 잘 알려져 있으며, 1936년, 노벨 화학상을 수상했습니다."
    },
    {
        name: "마르틴 크누드센", nameEn: "Martin Knudsen", years: "1871 – 1949",
        cx: 450, cy: 1118, r: 65, audioFile: "audio/knudsen.mp3",
        desc: "덴마크 물리학자. 기체 분자가 서로 충돌하지 않고 흐르는 '분자 흐름' 영역을 체계적으로 연구해 '크누드센 수'와 '크누드센 셀'을 확립함. 희박 기체 역학의 선구자로 진공 기술 발전에 큰 기여를 남긴 인물.",
        tts: "마르틴 크누드센은, 덴마크의 물리학자로, 기체 분자가 서로 충돌하지 않고 흐르는, 분자 흐름 영역을 체계적으로 연구했습니다. 크누드센 수와 크누드센 셀 개념을 확립한 그는, 희박 기체 역학의 선구자로, 진공 기술 발전에 큰 기여를 했습니다."
    },
    {
        name: "윌리엄 로런스 브래그", nameEn: "William Lawrence Bragg", years: "1890 – 1971",
        cx: 764, cy: 1074, r: 65, audioFile: "audio/bragg.mp3",
        desc: "영국 물리학자. 아버지 윌리엄 헨리 브래그와 함께 X선이 결정에 의해 회절되는 '브래그 법칙'을 발견해 결정 구조 분석의 기초를 세움. 1915년 노벨 물리학상 수상 당시 나이 25세로 역대 최연소 기록.",
        tts: "윌리엄 로런스 브래그는, 영국의 물리학자로, 아버지와 함께, X선 결정학의 브래그 법칙을 발견하여, 결정 구조 분석의 기초를 세웠습니다. 1915년, 노벨 물리학상을 수상할 당시, 나이 25세로, 역대 최연소 수상 기록을 세운, 천재 과학자였습니다."
    },
    {
        name: "헨드릭 크라머스", nameEn: "Hendrik Anthony Kramers", years: "1894 – 1952",
        cx: 1094, cy: 1080, r: 65, audioFile: "audio/kramers.mp3",
        desc: "네덜란드 물리학자. 닐스 보어의 첫 번째 해외 제자. 광학적 분산을 기술하는 '크라머스–하이젠베르크 공식'과 '크라머스–크로니히 관계'를 도출함. WKB 근사법의 독립적 발견자이기도 함.",
        tts: "헨드릭 크라머스는, 네덜란드의 물리학자로, 닐스 보어의 첫 번째 해외 제자였습니다. 그는, 광학적 분산을 기술하는, 크라머스-하이젠베르크 공식과, 크라머스-크로니히 관계를 도출했으며, WKB 근사법을, 독립적으로 발견하기도 했습니다."
    },
    {
        name: "폴 디랙", nameEn: "Paul Dirac", years: "1902 – 1984",
        cx: 1444, cy: 1074, r: 65, audioFile: "audio/dirac.mp3",
        desc: "영국 물리학자. 양자역학과 특수상대성이론을 통합한 '디랙 방정식'을 수립해 반물질의 존재를 이론적으로 예측함. 1933년 노벨 물리학상 수상. 이 회의 당시 나이 24세.",
        tts: "폴 디랙은, 영국의 물리학자로, 양자역학과 특수상대성이론을 통합한, 디랙 방정식을 수립했습니다. 이 방정식은, 반물질의 존재를 이론적으로 예측한 것으로, 물리학 역사상 가장 위대한 성취 중 하나로 꼽힙니다. 1933년, 노벨 물리학상을 수상했으며, 이 회의 당시 나이가, 겨우 24세였습니다."
    },
    {
        name: "아서 콤프턴", nameEn: "Arthur Holly Compton", years: "1892 – 1962",
        cx: 1713, cy: 1076, r: 65, audioFile: "audio/compton.mp3",
        desc: "미국 물리학자. X선이 전자에 산란될 때 파장이 길어지는 '콤프턴 효과'를 발견해 빛의 입자성을 실험으로 증명함. 광자 개념을 확립하는 데 결정적 역할을 함. 1927년 노벨 물리학상 수상.",
        tts: "아서 콤프턴은, 미국의 물리학자로, X선이 전자에 산란될 때, 파장이 길어지는, 콤프턴 효과를 발견했습니다. 이 발견은, 빛의 입자성을 실험으로 증명한 것으로, 광자 개념을 확립하는 데 결정적 역할을 했습니다. 1927년, 노벨 물리학상을 수상했습니다."
    },
    {
        name: "루이 드브로이", nameEn: "Louis de Broglie", years: "1892 – 1987",
        cx: 2004, cy: 1090, r: 65, audioFile: "audio/debroglie.mp3",
        desc: "프랑스 물리학자. 전자와 같은 물질 입자도 파동의 성질을 가진다는 '물질파' 이론을 제안함. 이 이론은 슈뢰딩거의 파동역학 탄생에 영감을 줌. 1929년 노벨 물리학상 수상. 프랑스 귀족 가문 출신.",
        tts: "루이 드브로이는, 프랑스의 물리학자로, 전자와 같은 물질 입자도, 파동의 성질을 가진다는, 물질파 이론을 제안했습니다. 이 아이디어는, 슈뢰딩거의 파동역학 탄생에 영감을 주었으며, 1929년, 노벨 물리학상으로 이어졌습니다. 프랑스 귀족 가문 출신이기도 합니다."
    },
    {
        name: "막스 보른", nameEn: "Max Born", years: "1882 – 1970",
        cx: 2316, cy: 1097, r: 65, audioFile: "audio/born.mp3",
        desc: "독일 물리학자. 파동함수의 절댓값 제곱이 입자를 발견할 확률을 나타낸다는 '보른 규칙'을 제시해 양자역학에 확률적 해석을 도입함. 하이젠베르크와 행렬역학을 공동 발전시킴. 1954년 노벨 물리학상 수상.",
        tts: "막스 보른은, 독일의 물리학자로, 파동함수의 절댓값 제곱이, 입자를 발견할 확률을 나타낸다는, 보른 규칙을 제시했습니다. 이로써, 양자역학에 확률적 해석을 도입했으며, 하이젠베르크와 함께, 행렬역학을 공동으로 발전시켰습니다. 1954년, 노벨 물리학상을 수상했습니다."
    },
    {
        name: "닐스 보어", nameEn: "Niels Bohr", years: "1885 – 1962",
        cx: 2618, cy: 1118, r: 65, audioFile: "audio/bohr.mp3",
        desc: "덴마크 물리학자. 원자 내 전자가 불연속적인 궤도를 돈다는 '보어 모델'을 제시하고, 확률적 해석을 지지하는 '상보성 원리'를 제창함. 1922년 노벨 물리학상 수상. 이 회의에서 아인슈타인과 양자역학 해석을 놓고 역사적 논쟁을 벌임.",
        tts: "닐스 보어는, 덴마크의 물리학자로, 원자 내 전자가, 불연속적인 궤도를 돈다는, 보어 모델을 제시했습니다. 또한, 양자역학의 확률적 해석을 지지하는, 상보성 원리를 제창했으며, 1922년, 노벨 물리학상을 수상했습니다. 이 회의에서는, 아인슈타인과, 양자역학 해석을 놓고, 역사적인 논쟁을 벌인 것으로도 유명합니다."
    },

    // === 앞줄 (앞에 앉은 사람들) ===
    {
        name: "어빙 랭뮤어", nameEn: "Irving Langmuir", years: "1881 – 1957",
        cx: 276, cy: 1182, r: 69, audioFile: "audio/langmuir.mp3",
        desc: "미국 화학자. 표면에서 일어나는 분자의 흡착 현상을 체계적으로 연구해 표면화학을 독립적인 학문 분야로 정립함. 백열등과 진공관 기술 개선에도 기여한 산업 과학자. 1932년 노벨 화학상 수상.",
        tts: "어빙 랭뮤어는, 미국의 화학자로, 표면에서 일어나는 분자의 흡착 현상을 체계적으로 연구하여, 표면화학을 독립적인 학문 분야로 정립했습니다. 백열등과 진공관 기술 개선에도 기여한, 산업 과학자로서, 1932년, 노벨 화학상을 수상했습니다."
    },
    {
        name: "막스 플랑크", nameEn: "Max Planck", years: "1858 – 1947",
        cx: 584, cy: 1205, r: 69, audioFile: "audio/planck.mp3",
        desc: "독일 물리학자. 20세기 현대 물리학의 출발점이 된 양자론의 창시자. 흑체복사 문제를 설명하기 위해 에너지가 연속이 아닌 일정한 단위(양자)로 방출된다는 가설을 제시함. 이 이론은 이후 양자역학 발전의 기초가 됨. 1918년 노벨 물리학상 수상.",
        tts: "막스 플랑크는, 독일의 물리학자로, 20세기 현대 물리학의 출발점이 된, 양자론의 창시자입니다. 그는, 흑체복사 문제를 설명하기 위해, 에너지가 연속이 아니라, 일정한 단위, 즉 양자로 방출된다는, 혁신적인 가설을 제시했습니다. 이 이론은, 이후 양자역학 발전의 기초가 되었으며, 1918년, 노벨 물리학상을 수상했습니다."
    },
    {
        name: "마리 퀴리", nameEn: "Marie Curie", years: "1867 – 1934",
        cx: 898, cy: 1186, r: 69, audioFile: "audio/curie.mp3",
        desc: "폴란드 출신 프랑스 물리학자·화학자. 방사능 현상을 체계적으로 연구하고 라듐과 폴로늄을 발견했다. 물리학(1903)과 화학(1911) 두 분야에서 노벨상을 수상한 역사상 유일한 인물이자, 이 사진의 유일한 여성 과학자다.",
        tts: "마리 퀴리는, 폴란드 출신의, 프랑스 물리학자이자 화학자입니다. 그녀는, 방사능 현상을 체계적으로 연구하고, 라듐과 폴로늄을 발견했습니다. 물리학과 화학, 두 분야에서 노벨상을 수상한, 역사상 유일한 인물이며, 이 사진의 유일한 여성 과학자이기도 합니다."
    },
    {
        name: "헨드릭 로런츠", nameEn: "Hendrik Lorentz", years: "1853 – 1928",
        cx: 1233, cy: 1210, r: 69, audioFile: "audio/lorentz.mp3",
        desc: "네덜란드 물리학자. 관성계 사이의 좌표 변환을 기술하는 '로런츠 변환'을 수립해 특수상대성이론의 수학적 기초를 마련함. 1902년 노벨 물리학상 수상. 이 회의의 의장을 맡았으며 이듬해 세상을 떠남.",
        tts: "헨드릭 로런츠는, 네덜란드의 물리학자로, 관성계 사이의 좌표 변환을 기술하는, 로런츠 변환을 수립하여, 특수상대성이론의 수학적 기초를 마련했습니다. 1902년, 노벨 물리학상을 수상했으며, 이 회의의 의장을 맡았으나, 이듬해 세상을 떠났습니다."
    },
    {
        name: "알베르트 아인슈타인", nameEn: "Albert Einstein", years: "1879 – 1955",
        cx: 1632, cy: 1184, r: 69, audioFile: "audio/einstein.mp3",
        desc: "독일 출신 물리학자. 빛의 속도가 관찰자와 무관하게 일정하다는 원리 위에 특수상대성이론을 세우고, 이를 중력으로 확장해 일반상대성이론을 완성함. 1921년 노벨 물리학상 수상. 이 회의에서 '신은 주사위를 던지지 않는다'며 양자역학의 확률적 해석에 맞섬.",
        tts: "알베르트 아인슈타인은, 독일 출신의 물리학자로, 특수상대성이론과, 일반상대성이론으로, 시공간에 대한 인류의 이해를 근본적으로 바꿨습니다. 1921년, 노벨 물리학상을 수상했습니다. 이 회의에서는, 신은 주사위를 던지지 않는다, 라며, 양자역학의 확률적 해석에, 강하게 반론을 펼쳤습니다."
    },
    {
        name: "폴 랑주뱅", nameEn: "Paul Langevin", years: "1872 – 1946",
        cx: 1900, cy: 1185, r: 69, audioFile: "audio/langevin.mp3",
        desc: "프랑스 물리학자. 자성 물질의 상자성과 반자성을 이론적으로 설명하고, 초음파를 이용한 수중 탐지 기술(소나)의 토대를 마련함. 후에 솔베이 회의 의장을 역임함.",
        tts: "폴 랑주뱅은, 프랑스의 물리학자로, 자성 물질의 상자성과 반자성을, 이론적으로 설명했습니다. 그는, 초음파를 이용한 수중 탐지 기술, 즉 소나의 토대를 마련하기도 했으며, 후에, 솔베이 회의 의장을 역임했습니다."
    },
    {
        name: "샤를외젠 귀예", nameEn: "Charles-Eugène Guye", years: "1866 – 1942",
        cx: 2157, cy: 1186, r: 69, audioFile: "audio/guye.mp3",
        desc: "스위스 물리학자. 전자의 질량이 속도에 따라 변한다는 것을 정밀한 실험으로 입증해 특수상대성이론의 예측을 검증함. 아인슈타인의 취리히 시절 동료이자 지지자.",
        tts: "샤를외젠 귀예는, 스위스의 물리학자로, 전자의 질량이, 속도에 따라 변한다는 것을, 정밀한 실험으로 입증했습니다. 이를 통해, 특수상대성이론의 예측을 검증했으며, 아인슈타인의 취리히 시절 동료이자, 지지자였습니다."
    },
    {
        name: "찰스 톰슨 리스 윌슨", nameEn: "C.T.R. Wilson", years: "1869 – 1959",
        cx: 2493, cy: 1193, r: 69, audioFile: "audio/wilson.mp3",
        desc: "영국 물리학자. 과포화 증기 속에서 하전 입자의 궤적을 안개 자국으로 시각화하는 '윌슨 안개상자'를 발명함. 입자물리학 발전에 결정적 역할을 한 장치. 1927년 노벨 물리학상 수상.",
        tts: "찰스 톰슨 리스 윌슨은, 영국의 물리학자로, 과포화 증기 속에서, 하전 입자의 궤적을 안개 자국으로 시각화하는, 윌슨 안개상자를 발명했습니다. 이 장치는, 입자물리학 발전에 결정적 역할을 했으며, 1927년, 노벨 물리학상으로 이어졌습니다."
    },
    {
        name: "오언 리처드슨", nameEn: "Owen Willans Richardson", years: "1879 – 1959",
        cx: 2738, cy: 1235, r: 69, audioFile: "audio/richardson.mp3",
        desc: "영국 물리학자. 가열된 금속에서 전자가 방출되는 열전자 방출 현상을 정량적으로 기술한 '리처드슨 법칙'을 발견함. 진공관과 전자공학 발전의 기초가 된 연구. 1928년 노벨 물리학상 수상.",
        tts: "오언 리처드슨은, 영국의 물리학자로, 가열된 금속에서 전자가 방출되는, 열전자 방출 현상을, 정량적으로 기술한, 리처드슨 법칙을 발견했습니다. 이 연구는, 진공관과 전자공학 발전의 기초가 되었으며, 1928년, 노벨 물리학상을 수상했습니다."
    }
];

// ===== 상태 변수 =====
let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let lastTranslateX = 0;
let lastTranslateY = 0;
const MIN_SCALE = 0.3;
const MAX_SCALE = 5;
let activeHotspot = null;
let imgWidth = 0;
let imgHeight = 0;
let mouseMoved = false;

// ===== TTS 상태 =====
let ttsEnabled = true;  // 기본 ON
let ttsUtterance = null;

// ===== 효과음 (Web Audio API) =====
let _audioCtx = null;
function getAudioCtx() {
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return _audioCtx;
}

// 딩동댕 — 3음 체임 (D5 → G5 → A5)
function playCorrectSound() {
    try {
        const ctx = getAudioCtx();
        const notes = [587.33, 783.99, 880.00]; // D5, G5, A5
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            const t = ctx.currentTime + i * 0.18;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.38, t + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
            osc.start(t);
            osc.stop(t + 0.4);
        });
    } catch (e) { }
}

// 삐삐 — 두 번 짧은 버저
function playWrongSound() {
    try {
        const ctx = getAudioCtx();
        [0, 0.22].forEach(offset => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sawtooth';
            osc.frequency.value = 220;
            const t = ctx.currentTime + offset;
            gain.gain.setValueAtTime(0.3, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
            osc.start(t);
            osc.stop(t + 0.2);
        });
    } catch (e) { }
}

// ===== 꽃가루 (Canvas confetti) =====
let _confettiCanvas = null;
let _confettiCtx = null;
let _confettiParticles = [];
let _confettiRaf = null;

function ensureConfettiCanvas() {
    if (_confettiCanvas) return;
    _confettiCanvas = document.createElement('canvas');
    _confettiCanvas.style.cssText = [
        'position:fixed', 'inset:0', 'width:100%', 'height:100%',
        'pointer-events:none', 'z-index:9999'
    ].join(';');
    document.body.appendChild(_confettiCanvas);
    _confettiCtx = _confettiCanvas.getContext('2d');
}

function resizeConfettiCanvas() {
    if (_confettiCanvas) {
        _confettiCanvas.width = window.innerWidth;
        _confettiCanvas.height = window.innerHeight;
    }
}
window.addEventListener('resize', resizeConfettiCanvas);

const CONFETTI_COLORS = [
    '#FFD700', '#FF6B6B', '#6BFFB8', '#6BB8FF', '#FF6BFF',
    '#FFAA00', '#AAFFAA', '#FF9966', '#C0F0FF', '#FFE0A0'
];

function launchConfetti() {
    ensureConfettiCanvas();
    resizeConfettiCanvas();
    const W = _confettiCanvas.width;
    const H = _confettiCanvas.height;

    // 150개 파티클 — 화면 하단 중앙에서 위로 솟구침
    for (let i = 0; i < 150; i++) {
        // 발사 원점: 화면 하단 중앙 ±30%
        const originX = W * (0.35 + Math.random() * 0.30);
        const originY = H + 10;

        // 위 방향 초속, 45°~135° 사이로 넓게 퍼짐
        const angle = -(Math.PI * 0.25 + Math.random() * Math.PI * 0.50);
        const speed = 10 + Math.random() * 18;

        _confettiParticles.push({
            x: originX,
            y: originY,
            w: 7 + Math.random() * 8,
            h: 4 + Math.random() * 5,
            color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.3,
            life: 1.0,
            decay: 0.005 + Math.random() * 0.005
        });
    }

    if (!_confettiRaf) tickConfetti();
}

function tickConfetti() {
    const ctx = _confettiCtx;
    const H = _confettiCanvas.height;
    ctx.clearRect(0, 0, _confettiCanvas.width, H);

    _confettiParticles = _confettiParticles.filter(p => p.life > 0.01 && p.y < H + 20);

    _confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;   // gravity
        p.vx *= 0.99;
        p.angle += p.spin;
        p.life -= p.decay;

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
    });

    if (_confettiParticles.length > 0) {
        _confettiRaf = requestAnimationFrame(tickConfetti);
    } else {
        _confettiRaf = null;
        ctx.clearRect(0, 0, _confettiCanvas.width, _confettiCanvas.height);
    }
}

// ===== 게임 상태 =====
let gameModeActive = false;
let gameQueue = [];
let gameRound = 0;
let gameScore = 0;
let gameWrong = [];
let gameLocked = false;

// ===== DOM 요소 =====
const viewport = document.getElementById('viewport');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const hotspotsContainer = document.getElementById('hotspots');
const tooltip = document.getElementById('tooltip');
const infoPanel = document.getElementById('info-panel');
const infoName = document.getElementById('info-name');
const infoYears = document.getElementById('info-years');
const infoDesc = document.getElementById('info-desc');
const closePanel = document.getElementById('close-panel');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const zoomResetBtn = document.getElementById('zoom-reset');
const helpHint = document.getElementById('help-hint');
const ttsToggleBtn = document.getElementById('tts-toggle');

// ===== 게임 DOM =====
const modeGameBtn = document.getElementById('mode-game');
const modeDescBtn = document.getElementById('mode-desc');
const gamePanel = document.getElementById('game-panel');
const gameRoundEl = document.getElementById('game-round-display');
const gameScoreEl = document.getElementById('game-score-display');
const gameNameEl = document.getElementById('game-name');
const gameFeedbackEl = document.getElementById('game-feedback');
const gameDescEl = document.getElementById('game-desc');
const gameNextBtn = document.getElementById('game-next');
const gameResultEl = document.getElementById('game-result');
const gameResultScore = document.getElementById('game-result-score');
const gameWrongList = document.getElementById('game-wrong-list');
const gameRetryBtn = document.getElementById('game-retry');
const gameRestartBtn = document.getElementById('game-restart');
const gameExitBtn = document.getElementById('game-exit');

// 모드 탭 UI 업데이트 헬퍼
function setModeUI(mode) {
    // mode: 'game' | 'desc'
    // 게임 모드: 크이 설명 버튼만 노출 / 설명 모드: 크이 게임 버튼만 노출
    if (mode === 'game') {
        modeGameBtn.classList.add('hidden');     // 현재 게임모드 → 게임버튼 숨김
        modeDescBtn.classList.remove('hidden'); // 설명버튼 표시
    } else {
        modeDescBtn.classList.add('hidden');    // 현재 설명모드 → 설명버튼 숨김
        modeGameBtn.classList.remove('hidden'); // 게임버튼 표시
    }
}

// ===== 이미지 로드 후 초기화 =====
let _initialized = false;
function _init() {
    if (_initialized) return;
    _initialized = true;
    imgWidth = photo.naturalWidth;
    imgHeight = photo.naturalHeight;
    initializeView();
    createHotspots();
    setModeUI('desc');  // 설명 모드로 시작
}

photo.addEventListener('load', _init);
if (photo.complete && photo.naturalWidth > 0) _init();

function initializeView() {
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;

    canvas.style.width = imgWidth + 'px';
    canvas.style.height = imgHeight + 'px';
    photo.style.width = imgWidth + 'px';
    photo.style.height = imgHeight + 'px';

    scale = Math.min(vw / imgWidth, vh / imgHeight);
    translateX = (vw - imgWidth * scale) / 2;
    translateY = (vh - imgHeight * scale) / 2;

    applyTransform();
}

function applyTransform() {
    canvas.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

// ===== 핫스팟 생성 (픽셀 좌표 기반) =====
function createHotspots() {
    hotspotsContainer.innerHTML = '';
    scientists.forEach((s, i) => {
        const el = document.createElement('div');
        el.className = 'hotspot';
        const d = s.r * 2;
        el.style.left = (s.cx - s.r) + 'px';
        el.style.top = (s.cy - s.r) + 'px';
        el.style.width = d + 'px';
        el.style.height = d + 'px';
        el.dataset.index = i;

        el.addEventListener('mouseenter', onHotspotEnter);
        el.addEventListener('mouseleave', onHotspotLeave);
        el.addEventListener('mousemove', onHotspotMove);
        el.addEventListener('click', onHotspotClick);
        el.addEventListener('touchstart', onTouchHotspot, { passive: true });

        hotspotsContainer.appendChild(el);
    });
}

// ===== 툴팁 표시 =====
function onHotspotEnter(e) {
    if (gameModeActive) return;  // 게임 모드에서는 툴팁 비활성화
    const idx = parseInt(e.target.dataset.index);
    const s = scientists[idx];
    tooltip.textContent = `${s.name} (${s.nameEn})`;
    tooltip.classList.remove('hidden');
    positionTooltip(e);
}

function onHotspotLeave() {
    tooltip.classList.add('hidden');
}

function onHotspotMove(e) {
    positionTooltip(e);
}

function positionTooltip(e) {
    const x = e.clientX;
    const y = e.clientY;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Let layout recalculate for wrapping
    tooltip.style.left = '0px';
    tooltip.style.top = '0px';
    const tw = tooltip.offsetWidth;
    const th = tooltip.offsetHeight;

    let left = x + 16;
    let top = y - th - 12;

    // Clamp horizontally
    if (left + tw > vw - 12) left = vw - tw - 12;
    if (left < 12) left = 12;
    // Clamp vertically
    if (top < 10) top = y + 20;
    if (top + th > vh - 10) top = vh - th - 10;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

// ===== 클릭 → 정보 패널 =====
function onHotspotClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const idx = parseInt(e.target.dataset.index);

    // 게임 모드 분기
    if (gameModeActive) {
        gameHandleClick(idx, e.target);
        return;
    }

    const s = scientists[idx];
    if (activeHotspot) activeHotspot.classList.remove('active');
    activeHotspot = e.target;
    activeHotspot.classList.add('active');

    infoName.textContent = `${s.name}   ${s.nameEn}`;
    infoYears.textContent = s.years;
    infoDesc.textContent = s.desc;

    infoPanel.classList.remove('hidden');
    helpHint.style.opacity = '0';

    // TTS 읽기
    ttsSpeak(s);
}

function onTouchHotspot(e) {
    e.stopPropagation(); // prevent pan
    const target = e.currentTarget;
    const idx = parseInt(target.dataset.index);
    const s = scientists[idx];

    if (activeHotspot === target) {
        // Second tap on same person → show info panel
        infoName.textContent = `${s.name}   ${s.nameEn}`;
        infoYears.textContent = s.years;
        infoDesc.textContent = s.desc;
        infoPanel.classList.remove('hidden');
        helpHint.style.opacity = '0';
        // TTS 읽기
        ttsSpeak(s);
    } else {
        // First tap → show tooltip (name)
        if (activeHotspot) activeHotspot.classList.remove('active');
        activeHotspot = target;
        activeHotspot.classList.add('active');
        tooltip.textContent = `${s.name} (${s.nameEn})`;
        tooltip.classList.remove('hidden');
        const touch = e.touches[0];
        // Position tooltip centered above finger, clamped within screen
        tooltip.style.left = '0px';
        tooltip.style.top = '0px';
        const tw = tooltip.offsetWidth;
        const th = tooltip.offsetHeight;
        const vw = window.innerWidth;
        let left = touch.clientX - tw / 2;
        if (left < 12) left = 12;
        if (left + tw > vw - 12) left = vw - tw - 12;
        let top = touch.clientY - th - 20;
        if (top < 10) top = touch.clientY + 30;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        setTimeout(() => tooltip.classList.add('hidden'), 2500);
    }
}

// ===== 정보 패널 닫기 =====
closePanel.addEventListener('click', () => {
    infoPanel.classList.add('hidden');
    if (activeHotspot) {
        activeHotspot.classList.remove('active');
        activeHotspot = null;
    }
    ttsStop();
});

// ===== 마우스 휠 줌 =====
viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -1 : 1;
    const factor = 1 + delta * 0.12;
    const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * factor));

    const rect = viewport.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const ratio = newScale / scale;
    translateX = mx - ratio * (mx - translateX);
    translateY = my - ratio * (my - translateY);
    scale = newScale;

    applyTransform();
}, { passive: false });

// ===== 드래그 팬 =====
viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    mouseMoved = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    lastTranslateX = translateX;
    lastTranslateY = translateY;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) mouseMoved = true;
    translateX = lastTranslateX + dx;
    translateY = lastTranslateY + dy;
    applyTransform();
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

// ===== 터치 팬/줌 =====
let lastTouchDist = 0;
let lastTouchMid = { x: 0, y: 0 };
let touchStartTime = 0;
let touchMoved = false;

viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        isDragging = true;
        touchMoved = false;
        touchStartTime = Date.now();
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        lastTranslateX = translateX;
        lastTranslateY = translateY;
    } else if (e.touches.length === 2) {
        isDragging = false;
        touchMoved = true;
        lastTouchDist = getTouchDist(e.touches);
        lastTouchMid = getTouchMid(e.touches);
    }
}, { passive: true });

viewport.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging) {
        const dx = e.touches[0].clientX - dragStartX;
        const dy = e.touches[0].clientY - dragStartY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) touchMoved = true;
        translateX = lastTranslateX + dx;
        translateY = lastTranslateY + dy;
        applyTransform();
    } else if (e.touches.length === 2) {
        const newDist = getTouchDist(e.touches);
        const newMid = getTouchMid(e.touches);
        const ratio = newDist / lastTouchDist;
        const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * ratio));

        const rect = viewport.getBoundingClientRect();
        const mx = newMid.x - rect.left;
        const my = newMid.y - rect.top;

        const scaleRatio = newScale / scale;
        translateX = mx - scaleRatio * (mx - translateX);
        translateY = my - scaleRatio * (my - translateY);
        scale = newScale;

        lastTouchDist = newDist;
        applyTransform();
    }
}, { passive: false });

viewport.addEventListener('touchend', (e) => {
    // Single quick tap on empty area → close info panel & deselect
    if (!touchMoved && e.touches.length === 0) {
        const elapsed = Date.now() - touchStartTime;
        if (elapsed < 300) {
            if (infoPanel && !infoPanel.classList.contains('hidden')) {
                infoPanel.classList.add('hidden');
            }
            if (activeHotspot) {
                activeHotspot.classList.remove('active');
                activeHotspot = null;
            }
            tooltip.classList.add('hidden');
        }
    }
    isDragging = false;
});

function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function getTouchMid(touches) {
    return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2
    };
}

// ===== 줌 버튼 =====
zoomInBtn.addEventListener('click', () => zoomTo(1.3));
zoomOutBtn.addEventListener('click', () => zoomTo(1 / 1.3));
zoomResetBtn.addEventListener('click', () => {
    initializeView();
    infoPanel.classList.add('hidden');
    if (activeHotspot) {
        activeHotspot.classList.remove('active');
        activeHotspot = null;
    }
});

function zoomTo(factor) {
    const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * factor));
    const rect = viewport.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const ratio = newScale / scale;
    translateX = cx - ratio * (cx - translateX);
    translateY = cy - ratio * (cy - translateY);
    scale = newScale;

    applyTransform();
}

// ===== 창 크기 변경 대응 =====
window.addEventListener('resize', () => {
    initializeView();
});

// ===== 도움말 자동 숨김 =====
setTimeout(() => {
    if (helpHint) helpHint.style.opacity = '0';
}, 8000);

// ===== 빈 곳 클릭 시 정보 패널 닫기 =====
viewport.addEventListener('click', (e) => {
    if (mouseMoved) return; // ignore clicks after drag
    if (!e.target.classList.contains('hotspot')) {
        infoPanel.classList.add('hidden');
        if (activeHotspot) {
            activeHotspot.classList.remove('active');
            activeHotspot = null;
        }
    }
});

// ===== iOS context menu 방지 =====
document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('#viewport')) e.preventDefault();
});

// ===== TTS (Audio element + Web Speech API fallback) =====
let currentAudio = null;

function ttsSpeak(s) {
    if (!ttsEnabled) return;
    ttsStop();

    // MP3 파일이 있으면 Audio 요소로 재생
    if (s.audioFile) {
        currentAudio = new Audio(s.audioFile);
        currentAudio.onplay = () => ttsToggleBtn.classList.add('tts-speaking');
        currentAudio.onended = () => {
            ttsToggleBtn.classList.remove('tts-speaking');
            currentAudio = null;
        };
        currentAudio.onerror = () => {
            // 파일 로드 실패 시 Web Speech API로 fallback
            ttsToggleBtn.classList.remove('tts-speaking');
            currentAudio = null;
            ttsSpeakWebSpeech(s.tts || s.desc);
        };
        currentAudio.play().catch(() => ttsSpeakWebSpeech(s.tts || s.desc));
        return;
    }

    // MP3 없으면 Web Speech API
    ttsSpeakWebSpeech(s.tts || s.desc);
}

function ttsSpeakWebSpeech(text) {
    ttsUtterance = new SpeechSynthesisUtterance(text);
    ttsUtterance.lang = 'ko-KR';
    ttsUtterance.rate = 0.92;
    ttsUtterance.pitch = 1.0;
    ttsUtterance.volume = 1.0;

    const setVoiceAndSpeak = () => {
        const voice = getTtsVoice();
        if (voice) ttsUtterance.voice = voice;
        ttsUtterance.onstart = () => ttsToggleBtn.classList.add('tts-speaking');
        ttsUtterance.onend = () => {
            ttsToggleBtn.classList.remove('tts-speaking');
            ttsUtterance = null;
        };
        ttsUtterance.onerror = () => {
            ttsToggleBtn.classList.remove('tts-speaking');
            ttsUtterance = null;
        };
        window.speechSynthesis.speak(ttsUtterance);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
        setVoiceAndSpeak();
    } else {
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.onvoiceschanged = null;
            setVoiceAndSpeak();
        };
    }
}

function ttsStop() {
    // Audio 요소 정지
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    // Web Speech API 정지
    window.speechSynthesis.cancel();
    ttsToggleBtn.classList.remove('tts-speaking');
    ttsUtterance = null;
}

// TTS ON/OFF 토글
ttsToggleBtn.addEventListener('click', () => {
    ttsEnabled = !ttsEnabled;
    if (ttsEnabled) {
        ttsToggleBtn.classList.remove('tts-off');
        ttsToggleBtn.classList.add('tts-on');
        ttsToggleBtn.querySelector('.tts-icon').textContent = '🔊';
        ttsToggleBtn.title = '음성 읽기 ON (클릭하여 끄기)';
    } else {
        ttsStop();
        ttsToggleBtn.classList.remove('tts-on', 'tts-speaking');
        ttsToggleBtn.classList.add('tts-off');
        ttsToggleBtn.querySelector('.tts-icon').textContent = '🔇';
        ttsToggleBtn.title = '음성 읽기 OFF (클릭하여 켜기)';
    }
});

// ===== 게임 모드 =====

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startGame() {
    gameModeActive = true;
    gameRound = 0;
    gameScore = 0;
    gameWrong = [];
    gameLocked = false;

    // 29명 셔플 후 10명 선택
    gameQueue = shuffleArray(scientists).slice(0, 10);

    // 설명 모드 UI 숨기기
    infoPanel.classList.add('hidden');
    ttsStop();

    // 게임 탭 활성화
    setModeUI('game');

    // 게임 패널 표시
    gamePanel.classList.remove('hidden');
    gameResultEl.classList.add('hidden');

    gameNewRound();
}

function endGame() {
    gameModeActive = false;
    gameLocked = false;

    // 핫스팟 애니메이션 초기화
    clearGameHotspotStyles();

    // 게임 UI 숨기기
    gamePanel.classList.add('hidden');
    gameResultEl.classList.add('hidden');

    // 설명 탭 활성화
    setModeUI('desc');

    ttsStop();
}

function gameNewRound() {
    if (gameRound >= gameQueue.length) {
        showGameResult();
        return;
    }

    gameLocked = false;
    clearGameHotspotStyles();

    const s = gameQueue[gameRound];
    gameRound++;

    gameRoundEl.textContent = `${gameRound} / ${gameQueue.length}`;
    gameScoreEl.textContent = `${gameScore}점`;
    gameNameEl.textContent = s.name;

    // 피드백 / 설명 / 버튼 숨김
    gameFeedbackEl.className = 'hidden';
    gameFeedbackEl.textContent = '';
    gameDescEl.classList.add('hidden');
    gameDescEl.textContent = '';
    gameNextBtn.classList.add('hidden');

    // 이름을 TTS로 읽어줌 — hint MP3 우선, 없으면 Web Speech API fallback
    if (ttsEnabled) {
        ttsStop();
        // audioFile 경로(예: "audio/einstein.mp3")에서 hint 경로 유추
        const hintPath = s.audioFile
            ? s.audioFile.replace(/\/([^/]+)\.mp3$/, '/hint_$1.mp3')
            : null;

        if (hintPath) {
            currentAudio = new Audio(hintPath);
            currentAudio.onplay = () => ttsToggleBtn.classList.add('tts-speaking');
            currentAudio.onended = () => {
                ttsToggleBtn.classList.remove('tts-speaking');
                currentAudio = null;
            };
            currentAudio.onerror = () => {
                // hint MP3 없으면 Web Speech API로 fallback
                ttsToggleBtn.classList.remove('tts-speaking');
                currentAudio = null;
                const hint = new SpeechSynthesisUtterance(`${s.name}을(를) 찾아보세요`);
                hint.lang = 'ko-KR';
                hint.rate = 1.0;
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(hint);
            };
            currentAudio.play().catch(() => {
                ttsToggleBtn.classList.remove('tts-speaking');
                currentAudio = null;
                const hint = new SpeechSynthesisUtterance(`${s.name}을(를) 찾아보세요`);
                hint.lang = 'ko-KR';
                hint.rate = 1.0;
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(hint);
            });
        } else {
            const hint = new SpeechSynthesisUtterance(`${s.name}을(를) 찾아보세요`);
            hint.lang = 'ko-KR';
            hint.rate = 1.0;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(hint);
        }
    }
}

function gameHandleClick(clickedIdx, clickedEl) {
    if (gameLocked) return;

    const correctIdx = scientists.indexOf(gameQueue[gameRound - 1]);
    const correctEl = hotspotsContainer.children[correctIdx];

    if (clickedIdx === correctIdx) {
        // ===== 정답 =====
        gameLocked = true;
        gameScore++;
        gameScoreEl.textContent = `${gameScore}점`;

        clickedEl.classList.add('hotspot-correct');

        gameFeedbackEl.textContent = '🎉 정답!';
        gameFeedbackEl.className = 'correct';

        // 효과음 + 꽃가루
        playCorrectSound();
        launchConfetti();

        // 설명 텍스트 표시 (TTS 없이)
        const s = gameQueue[gameRound - 1];
        gameDescEl.textContent = s.desc;
        gameDescEl.classList.remove('hidden');

        // 다음 문제 버튼 표시
        gameNextBtn.classList.remove('hidden');

    } else {
        // ===== 오답 =====
        gameLocked = true;

        const wrongName = scientists[clickedIdx].name;
        const correctName = gameQueue[gameRound - 1].name;

        // 오답 기록
        gameWrong.push({
            question: correctName,
            clicked: wrongName
        });

        clickedEl.classList.add('hotspot-wrong');

        gameFeedbackEl.textContent = `❌ 오답! 선택하신 인물은 ${wrongName}입니다!`;
        gameFeedbackEl.className = 'wrong';

        // 효과음
        playWrongSound();

        // 정답 인물 금색 원 강조
        correctEl.classList.add('hotspot-reveal');

        // 다음 문제 버튼 표시 (오답도 동일하게 수동 진행)
        gameNextBtn.classList.remove('hidden');
    }
}

function showGameResult() {
    gameLocked = true;
    gamePanel.classList.add('hidden');

    // 점수 표시
    const total = gameQueue.length;
    const perfect = gameScore === total;
    gameResultScore.textContent = `${gameScore} / ${total} 점${perfect ? ' 🏆 완벽!' : ''}`;

    // 오답 있으면 retry 버튼 표시, 없으면 숨김
    if (gameWrong.length === 0) {
        gameRetryBtn.classList.add('hidden');
    } else {
        gameRetryBtn.classList.remove('hidden');
    }

    gameResultEl.classList.remove('hidden');
}

// 틀린 문제만 다시 출제
function startRetryGame() {
    // gameWrong 에 기록된 과학자 이름으로 scientists 객체 조회
    const wrongScientists = gameWrong
        .map(w => scientists.find(s => s.name === w.question))
        .filter(Boolean);

    if (wrongScientists.length === 0) return;

    gameModeActive = true;
    gameRound = 0;
    gameScore = 0;
    gameWrong = [];
    gameLocked = false;
    gameQueue = shuffleArray(wrongScientists);

    infoPanel.classList.add('hidden');
    ttsStop();

    setModeUI('game');

    gamePanel.classList.remove('hidden');
    gameResultEl.classList.add('hidden');

    gameNewRound();
}

function clearGameHotspotStyles() {
    document.querySelectorAll('.hotspot').forEach(el => {
        el.classList.remove('hotspot-correct', 'hotspot-wrong', 'hotspot-reveal', 'active');
    });
    if (activeHotspot) { activeHotspot = null; }
}



// ===== 모드 버튼 이벤트 =====
modeGameBtn.addEventListener('click', () => {
    if (!gameModeActive) startGame();
});

modeDescBtn.addEventListener('click', () => {
    if (gameModeActive) endGame();
});

// 틀린 문제 다시 풀기
gameRetryBtn.addEventListener('click', () => {
    startRetryGame();
});

// 새 게임 하기
gameRestartBtn.addEventListener('click', () => {
    startGame();
});

// 기본모드로 돌아가기
gameExitBtn.addEventListener('click', () => {
    endGame();
});

// 다음 문제 버튼 (정답/오답 후 공통)
gameNextBtn.addEventListener('click', () => {
    gameNextBtn.classList.add('hidden');
    gameDescEl.classList.add('hidden');
    // 정답·오답·정답강조 핫스팟 스타일 모두 초기화
    document.querySelectorAll('.hotspot-correct, .hotspot-wrong, .hotspot-reveal')
        .forEach(el => el.classList.remove('hotspot-correct', 'hotspot-wrong', 'hotspot-reveal'));
    gameNewRound();
});
