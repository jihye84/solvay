"""
게임 모드 힌트 MP3 생성 스크립트
"사진에서 [이름]을(를) 찾아보세요" 문장을 edge-tts로 생성
"""

import asyncio
import os
import edge_tts

VOICE = "ko-KR-SunHiNeural"
RATE = "-5%"
OUTPUT_DIR = "audio"

# (파일명 키, 이름, 을/를)
# 받침 있으면 "을", 없으면 "를"
hints = [
    ("piccard",       "오귀스트 피카르",     "를"),
    ("henriot",       "에밀 앙리오",         "를"),
    ("ehrenfest",     "파울 에런페스트",     "를"),
    ("herzen",        "에두아르 에르젠",     "을"),
    ("dedonder",      "테오필 드 동데르",    "를"),
    ("schrodinger",   "에르빈 슈뢰딩거",    "를"),
    ("verschaffelt",  "쥘에밀 베르샤펠트",  "를"),
    ("pauli",         "볼프강 파울리",       "를"),
    ("heisenberg",    "베르너 하이젠베르크", "를"),
    ("fowler",        "랠프 파울러",         "를"),
    ("brillouin",     "레옹 브릴루앙",       "을"),
    ("debye",         "피터 디바이",         "를"),
    ("knudsen",       "마르틴 크누드센",     "을"),
    ("bragg",         "윌리엄 로런스 브래그","를"),
    ("kramers",       "헨드릭 크라머스",     "를"),
    ("dirac",         "폴 디랙",             "을"),
    ("compton",       "아서 콤프턴",         "을"),
    ("debroglie",     "루이 드브로이",       "를"),
    ("born",          "막스 보른",           "을"),
    ("bohr",          "닐스 보어",           "를"),
    ("langmuir",      "어빙 랭뮤어",         "를"),
    ("planck",        "막스 플랑크",         "를"),
    ("curie",         "마리 퀴리",           "를"),
    ("lorentz",       "헨드릭 로런츠",       "를"),
    ("einstein",      "알베르트 아인슈타인", "을"),
    ("langevin",      "폴 랑주뱅",           "을"),
    ("guye",          "샤를외젠 귀예",       "를"),
    ("wilson",        "찰스 톰슨 리스 윌슨", "을"),
    ("richardson",    "오언 리처드슨",       "을"),
]


async def generate(key: str, name: str, particle: str) -> None:
    text = f"사진에서 {name}{particle} 찾아보세요."
    out_path = os.path.join(OUTPUT_DIR, f"hint_{key}.mp3")
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
    await communicate.save(out_path)
    print(f"  OK  {out_path}  ({text})")


async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"[HINT TTS] {len(hints)}개 힌트 MP3 생성 중...\n")
    for key, name, particle in hints:
        await generate(key, name, particle)
    print(f"\n[완료] {len(hints)}개 힌트 파일 생성 완료.")

asyncio.run(main())
