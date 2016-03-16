import Sequelize from 'sequelize';
import express from 'express';

import isaplanning from '../models/model_isaplanning'
import codes from '../models/model_codes'
import account from '../models/model_account'

let router = express.Router();


router.get('/isaplanning', isaplanning.allItems);
router.get('/isaplanning/:id', isaplanning.findItem);


router.put('/isaplanning/', isaplanning.updateItem);



router.get('/accounts', account.allItems);
router.get('/accounts/:id', account.findItem);
router.put('/accounts/', account.updateItem);

router.get('/locations', codes.findLocations);
router.get('/teams', codes.findTeams);
router.get('/languages', codes.findLanguages);
router.get('/regions', codes.findRegions);




export default router;
