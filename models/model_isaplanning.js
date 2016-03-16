import Sequelize from 'sequelize';
import sequelize from './index_models';

let isaplanning = sequelize.define('t_planning', {
isp_UIC: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    isp_datetime:Sequelize.DATE,
    isp_company_name:Sequelize.STRING,
    isp_source:Sequelize.STRING,
    isp_team_member:Sequelize.STRING,
    isp_action:Sequelize.STRING,
    isp_action_changed_date:Sequelize.DATE,
    isp_plan:Sequelize.STRING,
    isp_plan_date:Sequelize.DATE,
    isp_linked_incident:Sequelize.STRING,
    isp_free_text:Sequelize.STRING,
    isp_isa3:Sequelize.INTEGER,
    isp_company_id:Sequelize.INTEGER,
}, {
    timestamps: false,
      freezeTableName: true,
      hasTrigger: true,
      schema: 'isa',
  tablename: 't_planning' }
);

let allItems = (req, res) => {
isaplanning.findAll({
   order: [['isp_action_changed_date', 'DESC'], ['isp_action', 'DESC']],
  
  attributes: 
  [ 
    ['isp_UIC','UIC'],
    ['isp_datetime','datetime'],
    ['isp_company_name','company_name'],
    ['isp_source','source'],
    ['isp_team_member','team_member'],
    ['isp_action','action'],
    ['isp_action_changed_date','action_changed_date'],
    ['isp_plan','plan'],
    ['isp_plan_date','plan_date'],
    ['isp_linked_incident','linked_incident'],
    ['isp_free_text','free_text'],
    ['isp_isa3','isa3'],
    ['isp_company_id','company_id']
  ] }) 
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }

let findItem = (req, res) => {
    let p = req.params.id;
    isaplanning.findAll({
      where: {
          isp_UIC: p
      }    
    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
let updateItem = (req, res) => {
    let p = req.body.isp_UIC;
    let newpln = req.body;
    console.log(req.body);
    console.log('entered put request api', newpln)
    isaplanning.findOne({
      where: {
          isp_UIC: p
      }    
    })
  .then(function (isaplanning) {
      //console.log('then:',isaplanning);
      Object.assign(isaplanning, newpln);
      console.log('isaplanning',isaplanning);
      isaplanning.save()
      .then (function(data) {
        console.log('saved')
        res.send(data);
      })
    })
    .catch(function() 
      {res.send("error")})
  }
  
exports.allItems = allItems;
exports.findItem = findItem;
exports.updateItem = updateItem;

