<?php
header('Content-Type: text/html; charset=utf-8');
echo "<div><h2>서버 aa시간</h2><p>" . date('Y-m-d H:i:s') . "</p>";
echo "<a href=\"../about.php\" hx-get=\"../about.php\" hx-target=\"#content\" hx-swap=\"innerHTML\" hx-indicator=\"#spinner\" hx-push-url=\"true\" >뒤로</a>";
?>