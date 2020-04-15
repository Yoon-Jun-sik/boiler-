// 환경 변수 상태를봐서 다른곳에 연결해주는 방법
if (process.env.NODE_ENV === "production") {
	module.exports = require("./prod");
} else {
	module.exports = require("./dev");
}
