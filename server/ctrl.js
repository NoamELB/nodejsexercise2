var services		= require('./services');

module.exports.MyCtrl = MyCtrl;

function MyCtrl (req, res) {
	// TODO: change ctrl to use services and handling a Promise
	var num = req.params.num;
	res.send({data: num});
	
}