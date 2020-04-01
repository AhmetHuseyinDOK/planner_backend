const {Router} =require('express');

const router  = new Router();
const PlanController  = require('../controllers/plan');

router.post('/plan',PlanController.create);
router.get('/plan/:id/attendee/:attendeeId',PlanController.getAttendee);
router.put('/plan/:id/attendee',PlanController.putAttendee);
router.get('/plan/:id',PlanController.get);
router.get('/plan/:id/detailed',PlanController.getDetailed);
module.exports = router;