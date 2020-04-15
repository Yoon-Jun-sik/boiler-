const express = require("express");
const app = express();
const port = 5000;
//몽구스 다운 연결
const mongoose = require("mongoose");
/* 디비와 연결 연결성공시 콘솔에 뜨고 실패시 에러표시 */
mongoose
	.connect(
		"mongodb+srv://jun1:wns6598@abc-ndxnw.gcp.mongodb.net/test?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		}
	)
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
