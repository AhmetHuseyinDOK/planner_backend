const Plan = require('../models/plan');
const Attendee = require('../models/attendee');

/**
 * @param {PlanData} plan 
 */
async function create(plan){
    return await Plan.create(plan);
}

/**
 * 
 * @param {string} planId 
 * @param {UserData} user 
 */
async function putAttendee(planId , attendeeData){
    let plan = await Plan.findOne({where:{id:planId}});
    let attendee;
    if(!!attendeeData.id){
        try{
            attendee = await  Attendee.findOne({where:{PlanId: planId ,id: attendeeData.id }});
        }catch{}
    } 
    
    if(!!attendee){
        attendee.update(attendeeData);
    }else{
        attendee = await Attendee.create({...attendeeData, PlanId: plan.id});
    }

    return attendee;
}

/**
 * 
 * @param {*} id 
 * @param {object} options 
 * @param {boolean} options.includeAttendees
 */
async function getPlan(id , options = {}){
    if(options.includeAttendees){
        return Plan.findOne({where:{id},include:[Attendee]});    
    }else{
        return Plan.findOne({where:{id}});
    }
}

/**
 * 
 * @param {string} planId 
 * @param {string} attendeeId 
 */
async function getAttendee(planId ,attendeeId){
    return Attendee.findOne({where:{PlanId: planId , id: attendeeId }})
}

module.exports = {
    create,
    putAttendee,
    getPlan,
    getAttendee
}