# HTMX 예제 (Framework-less 부분 교체)

간단한 HTMX 예제입니다. HTML에 `hx-*` 속성을 추가하면 서버에서 HTML 조각을 받아 페이지 일부만 교체할 수 있습니다.

파일 설명
- `index.html`: HTMX를 사용한 버튼, 폼 예제
- `about.php`: GET 시 HTML 조각 반환, POST 시 폼 결과 반환
- `time.php`: 서버 현재 시간 반환 (조각)

사용 방법 (XAMPP)
1. `c:\xampp\htdocs\@home\ct` 폴더에 두 파일이 위치합니다.
2. XAMPP를 실행하고 Apache를 시작합니다.
3. 브라우저에서 http://localhost/@home/ct/index.html 를 엽니다.

참고
- 로컬 PHP CLI가 필요하지 않습니다. Apache + PHP 모듈로 동작하는 환경에서 동작합니다.
- POST 요청 등에는 CSRF 보호가 필요할 수 있습니다 (현 예제는 데모용).
