#!/usr/bin/env python3
"""대화 데이터나 화면을 고친 뒤 커밋하기 전에 실행하세요.

index.html이 불러오는 CSS·JS 주소의 ?v= 값과 window.APP_VERSION, version.json을
같은 새 버전(한국 시각 YYYYMMDD-HHMMSS)으로 바꿉니다. 주소가 바뀌므로 브라우저가
예전 파일을 캐시에서 다시 쓰지 않고 새 파일을 받습니다.

    python3 tools/bump-version.py
"""
import datetime
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
KST = datetime.timezone(datetime.timedelta(hours=9))


def main():
    version = datetime.datetime.now(KST).strftime('%Y%m%d-%H%M%S')

    index = ROOT / 'index.html'
    html = index.read_text(encoding='utf8')
    html, n_urls = re.subn(r'\?v=[0-9-]+', '?v=' + version, html)
    html, n_const = re.subn(r"window\.APP_VERSION = '[^']*'",
                            "window.APP_VERSION = '%s'" % version, html)
    if n_urls == 0 or n_const != 1:
        raise SystemExit('index.html에서 버전 표시를 찾지 못했어요 (주소 %d개, 상수 %d개)' % (n_urls, n_const))
    index.write_text(html, encoding='utf8')

    (ROOT / 'version.json').write_text(json.dumps({'v': version}) + '\n', encoding='utf8')
    print('새 버전 %s · 주소 %d개 갱신' % (version, n_urls))


if __name__ == '__main__':
    main()
