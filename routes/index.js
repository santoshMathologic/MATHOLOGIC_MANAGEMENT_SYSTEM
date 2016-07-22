var express = require('express');
var router = express.Router();
var users = require('./users');
var trainstation = require('./trainStation');
var plan = require('./plan.js');
var train = require('./train.js');
var station = require('./station.js');
var division = require('./division.js');
var traintype = require('./trainType.js');
var crewType = require('./crewType.js');
var role = require('./role.js');





// routes for Staton
router.get('/api/v1/stations', station.getStations);
router.post('/api/v1/stations', station.createStation);
router.get('/api/v1/stations/stationsByQuery/:searchQuery', station.getStationsByQuery);

// routes for Division
router.get('/api/v1/divisions', division.getDivision);
router.post('/api/v1/divisions', division.createDivision);

// Routes for UserPlan 

router.get('/api/v1/userPlan', plan.getUserPlan);
router.post('/api/v1/userPlan', plan.createUserPlan);


//Routes for role
router.get('/api/v1/roles', role.getRole);
router.post('/api/v1/roles', role.creteRole);

//Routes for crewType
router.get('/api/v1/crewTypes', crewType.getCrewType);
router.post('/api/v1/crewTypes', crewType.createCrewType);

//Routes for train
router.get('/api/v1/trains', train.getTrain);
router.post('/api/v1/trains', train.createTrain);

//Routes for trainstation
router.get('/api/v1/trainstations', trainstation.getTrainStation);
router.post('/api/v1/trainstations', trainstation.createTrainStation);

//Routes for trainType
router.get('/api/v1/trainTypes', traintype.getTrainType);
router.post('/api/v1/trainTypes', traintype.createTrainType);

//Routes for users
router.get('/api/v1/admin/users', users.getUser);
router.post('/api/v1/admin/users', users.createUser);
router.get('api/v1/admin/users/searchByQuery/:searchQuery', users.searchByUser)



//// temporary routes for salary
// Routes for SALARY

router.post('/api/v1/salary', salary.createSalary);
router.get('/api/v1/salary', salary.getSalary);
router.put('/api/v1/salary/bulkUpdate', salary.bulkUpdate);
router.put('/api/v1/salary/:id', salary.deleteSalary);
router.put('/api/v1/salary/update/:id', salary.updateSalary);

module.exports = router;
