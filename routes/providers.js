var express = require('express');
var router = express.Router();
const providerController=require('../controllers/providers');

/* GET list page. */
router.get('/',providerController.list);
/* GET details page. */
router.get('/details/:id',providerController.details);
/* GET edit page. */
router.get('/edit/:id',providerController.edit);
/* POST update page. */
router.post('/update/:id',providerController.update);
/* POST add page.   */
router.post('/add',providerController.add);
/* POST add_form page.  */
router.get('/add_form',providerController.add_form);
/* GET delete page.  */
router.get('/delete/:id',providerController.delete);
module.exports = router;
