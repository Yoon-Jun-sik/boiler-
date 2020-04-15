const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
//스키마 모듈화 해놓은것 가져옴 유저
const { User } = require("./models/User");
//몽구스 다운 연결
const mongoose = require("mongoose");
//키 부분 require해서 디비 커넥트 해줌
const config = require("./config/key");

//application/x-www-form-urlencoded 형식의 데이터를 분석해서 가져올 수 있게 해주는 설정
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 형식의 데이터 타입을 분석해서 가져옴
app.use(bodyParser.json());

/* 디비와 연결 연결성공시 콘솔에 뜨고 실패시 에러표시 */
mongoose
	.connect(config.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

app.get("/", (req, res) => res.send("쪼꼬미 세원 Hello World! "));

//회원가입 라우터
app.post("/register", (req, res) => {
	//회원가입 필요한 정보들을 클라이언트에서 가져오면 데이터베이스에 넣어줌
	const user = new User(req.body);

	user.save((err, userInfo) => {
		//저장 실패시 실패한것과 에러를 제이슨 형식으로 알려줌
		if (err) return res.json({ success: false, err });
		//성공하면 (200) 성곳했다는 약속 으로 제이슨 형식으로 성공 알려줌
		return res.status(200).json({ success: true });
	});
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
