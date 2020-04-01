const PlanService = require('../services/plan');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function create(req , res){
    let plan  = await PlanService.create(req.body);
    res.send(plan);
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function putAttendee(req , res){
    let attendee = await PlanService.putAttendee(req.params.id , req.body);
    res.send(attendee);
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function get(req , res){
    let plan = await PlanService.getPlan(req.params.id);
    res.send(plan);
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getAttendee(req , res){
    let attendee = await PlanService.getAttendee(req.params.id , req.params.attendeeId);
    res.send(attendee);
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getDetailed(req , res){
    let plan = await PlanService.getPlan(req.params.id , {includeAttendees: true});
    console.log(plan.toJSON());
    res.send(plan);
}

module.exports = {
    create,
    putAttendee,
    get,
    getDetailed
}