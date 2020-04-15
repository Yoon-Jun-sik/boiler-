//production
//process.env 후에 URI코드를 써줌 올린 사이트에 들어갈 값과 같은것으로
module.exports = {
	mongoURI: process.env.MONGO_URI
};
