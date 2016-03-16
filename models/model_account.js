import Sequelize from 'sequelize';
import sequelize from './index_models';



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
    },  {
    timestamps: false
    }
);

let allItems = (req, res) => {
    console.log('allItems')
    let p = req.params.pname;
    account.findAll({
      order: [['acc_lastname', 'DESC']]

    })
    .then(function (data) {
      res.send(data)})
    .catch(function(e) 
      {res.send("error:"+e)})
  }

let findItem = (req, res) => {
    let p = req.params.id;
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

let updateItem = (req, res) => {
    let p = req.body.acc_uic;
    let newacc = req.body;
    account.findOne({
      where: {
          acc_uic: p
      }    
    })
  .then(function (account) {
      console.log(account);
      Object.assign(account, newacc);
      account.save()
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