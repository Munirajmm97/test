
const express = require('express')
const router = express.Router() 
const Alarms = require('../models/alarm')

module.exports = router

//Create alarm  
router.post('/', async (req,res) => {
    const alarm = new Alarm({

        name: req.body.name,
        Sevirity: req.body.Sevirity,
        desc: req.body.desc,
        owner: req.body.owner,
        status: req.body.status
    })
    try{
        const newAlarm = await alarm.save()
        res.status(201).json(newAlarm)

    }catch (err){
        res.status(400).json({message: err.message})

    }

//route for Get All alarms
router.get('/', async (req,res) => {
    console.log('aa')
    res.send('Hello World')
    try{
        const alarms = await Alarm.find()
        res.json(alarms)

    } catch (err){
        res.status(500).json({message: err.message}) // there is an error on the server, nothing to do with users.
    }
  
})
//Get one alarm
router.get('/:id', getAlarm ,(req,res) => {
    res.json(res.alarm)

})
    
})
//Update alarm using patch to update only the information that user want
router.patch('/:id',getAlarm, async (req,res) => {
    if(req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if(req.body.Sevirity != null){
        res.subscriber.Sevirity = req.body.Sevirity
    }
    if(req.body.desc != null){
        res.subscriber.desc = req.body.desc
    }
    if(req.body.owner != null){
        res.subscriber.owner = req.body.owner
    }
    if(req.body.status != null){
        res.subscriber.status = req.body.status
    }
    try{
        const updateAlarm = await res.alarm.save()
        res.json(updateAlarm)
    }catch(err){

        res.status(400).json({message: err.message})
    }

})
//Delete alarm 
router.delete('/:id',getAlarm, async (req,res) => {
    try {
        await res.alarm.remove()
        res.json({message: 'Alarm Deleted'})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})


async function getAlarm(req,res,next){
    let alarm
    try{
        alarm = await Alarm.findById(req.params.id)
        if (alarm == null){
            return res.status(404).json({message: 'cant find alarms'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})

    }
    res.alarm = alarm
    next()
}