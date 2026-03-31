<?php
$servername = "svc.sel4.cloudtype.app:31446"; // MySQL 서버 주소
$username = "root";     // 데이터베이스 사용자명
$password = "palace0261@@"; // 데이터베이스 비밀번호
$dbname = "palace0261"; // 연결할 데이터베이스 이름

// MySQLi 객체 생성 및 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("연결 실패: " . $conn->connect_error);
}
echo "연결 성공";
?>