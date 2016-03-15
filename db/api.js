import Sequelize from 'sequelize';
import express from 'express';

let router = express.Router();

var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}


let sequelize = new Sequelize('ToolsSupport', 'ps', 'm5Password', {
    dialect: 'mssql',
    host: 'nlbavwtls22',
    port: 1433 // Default port
    ,freezeTableName: true
});


let account = sequelize.define('t_accounts', {
    acc_uic: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    acc_login: Sequelize.STRING,
    acc_firstname: Sequelize.STRING,
    acc_lastname: Sequelize.STRING,
    acc_fullname: Sequelize.STRING,
    acc_email: Sequelize.STRING,
    acc_team: Sequelize.STRING,
    acc_location: Sequelize.STRING,
    acc_region: Sequelize.STRING,
    acc_navid: Sequelize.STRING,
    acc_date_created: Sequelize.DATE,
    acc_date_changed: Sequelize.DATE,
    acc_active: Sequelize.INTEGER,
    acc_info: Sequelize.STRING,
    acc_mgr_navid: Sequelize.STRING,
    acc_workload: Sequelize.INTEGER,
    acc_waitsupp: Sequelize.INTEGER,
    acc_waitcust: Sequelize.INTEGER,
    acc_solproposed: Sequelize.INTEGER,
}, {
    timestamps: false
});

let codes = sequelize.define('t_codes', {
  cod_UIC: {
        type: Sequelize.UUID,
        primaryKey: true
    }
      ,cod_typ : Sequelize.STRING
      ,cod_key: Sequelize.STRING
      ,cod_description: Sequelize.STRING
      ,cod_color: Sequelize.STRING
    }, {
    timestamps: false
});

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

router.get('/isaplanning', (req, res) => {
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
  });


router.get('/isaplanning/:id', (req, res) => {
    let p = req.params.id;
    isaplanning.findAll({
     
  /*
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
  ] ,*/
      where: {
          isp_UIC: p
      }    
    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);


router.put('/isaplanning/', (req, res) => {
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
);
router.put('/isaplanning/:id', (req, res) => {
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
      console.log('then:',isaplanning);
      Object.assign(isaplanning, newpln);
      //console.log('account',account);
      isaplanning.save()
      .then (function(data) {
        console.log('saved')
        res.send(data);
      })
    })
    .catch(function() 
      {res.send("error")})
  }
);

router.get('/', function(req, res) {
    res.send ("<h2>in api </h2>")
  }
);

router.get('/account', (req, res) => {
  console.log(account);
    res.send ("<h2>in api (account) </h2>")
  }
);

router.get('/accounts', (req, res) => {
    let p = req.params.pname;
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    account.findAll({
      order: [['acc_lastname', 'DESC']]

    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);

router.get('/locations', (req, res) => {
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    codes.findAll({
      order: [['cod_key', 'ASC']],
      where: {
          cod_typ: 'LOCN'
      }    

    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);

router.get('/teams', (req, res) => {
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    codes.findAll({
      order: [['cod_key', 'ASC']],
      where: {
          cod_typ: 'TEAM'
      }    

    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);


router.get('/languages', (req, res) => {
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    codes.findAll({
      order: [['cod_key', 'ASC']],
      where: {
          cod_typ: 'LANG'
      }    

    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);


router.get('/regions', (req, res) => {
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    codes.findAll({
      order: [['cod_key', 'ASC']],
      where: {
          cod_typ: 'REGN'
      }    

    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);


router.get('/accounts/:id', (req, res) => {
    let p = req.params.id;
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    account.findAll({
      order: [['acc_lastname', 'DESC']],
      where: {
          acc_uic: p
      }    
    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);

router.put('/accounts/:id', (req, res) => {
    let p = req.body.acc_uic;
    let newacc = req.body;
    console.log('acc',newacc, res);
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    account.findOne({
      where: {
          acc_uic: p
      }    
    })
    .then(function (account) {
      //console.log(account);
      Object.assign(account, newacc);

      account.save()
      .then (function(data) {
        console.log('saved')
        res.send(data);
      })
    })
    .catch(function() 
      {res.send("<h1>Uncaught error</h1>")})
  }
);

router.put('/accounts/', (req, res) => {
    let p = req.body.acc_uic;
    let newacc = req.body;
    console.log('entered put request api', newacc)
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    account.findOne({
      where: {
          acc_uic: p
      }    
    })
  .then(function (account) {
      console.log(account);
      Object.assign(account, newacc);
      //console.log('account',account);
      account.save()
      .then (function(data) {
        console.log('saved')
        res.send(data);
      })
    })
    .catch(function() 
      {res.send("error")})
  }
);




router.get('/team/:tname', (req, res) => {
    let team = req.params.tname;
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    account.findAll({
      order: [['acc_lastname', 'DESC']],
      where: {
          acc_team: {
            $like: '%'+team +'%'}

      }    
    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);

router.get('/team/:tname/region/:rname', (req, res) => {
    let team = req.params.tname;
    let region = req.params.rname;
  //  res.send ("<h2>in api (sat)"+p +" </h2>")
    account.findAll({
      order: [['acc_lastname', 'DESC']],
      where: {
          acc_team: {
            $like: '%'+team +'%'
          },
          acc_region: region

      }    
    })
    .then(function (data) {
      res.send(data)})
    .catch(function() 
      {res.send("error")})
  }
);



export default router;
