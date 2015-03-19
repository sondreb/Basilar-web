var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	
	res.json({
		
		total: 3,
		day: 'Monday',
		items: [{ id: 1, title: 'Kjøp rismelk!'},{id:2, title: 'Vasken bilen'},{id:3, title: 'Kom deg til UIA'}]
		
	});
	
  //res.render('index', { title: 'Express' });
});

module.exports = router;
