<?php
header('Content-Type: text/html; charset=utf-8');

// HTMX 요청은 보통 부분 HTML(fragment)을 반환합니다.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name'] ?? '익명', ENT_QUOTES, 'UTF-8');
    echo "<div><h2>폼 전송 결과</h2><p>안녕하세요, {$name}님!</p>";
    echo "<p><button hx-get=\"about.php\" hx-target=\"#content\" hx-swap=\"innerHTML\">돌아가기</button></p></div>";
    exit;
}

// 기본 GET 요청에서는 about 조각을 반환
echo "<div>";
echo "<h2>About</h2>";
echo "<p>이것은 서버에서 반환한 HTML 조각입니다. 전체 페이지가 아닌 일부만 교체됩니다.</p>";

echo "</div>";

?>
