const mongoose = require("mongoose");

/* 스키마 작성 들어올 정보들에 타입과 요소 추가 */
const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 50
	},
	email: {
		type: String,
		trim: true, //띄어쓰기를 자동으로 줄여줌
		unique: 1 //중복 불가
	},
	password: {
		type: String,
		minlength: 5
	},
	lastname: {
		type: String,
		maxlength: 50
	},
	role: {
		//유저 롤 설정 관리자나 일반유저 등..
		type: Number, //숫자로 판별
		default: 0 //롤을 지정하지 않으면 임의로 0을줌  기본값
	},
	image: String,
	token: {
		//유효성을 따질때 쓸 토큰
		type: String
	},
	tokenExp: {
		//토큰 기간 설정
		type: Number
	}
});
/* 정의한 스키마를 모델에 담음 // 모델로 감싸줌 */
const User = mongoose.model("User", userSchema);

/* 밖에서도 사용할수있게 익스포트시킴 */
module.exports = { User };
