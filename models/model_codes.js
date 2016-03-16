import Sequelize from 'sequelize';
import sequelize from './index_models';

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



let findLocations = (req, res) => {
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


let findTeams = (req, res) => {
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

let findRegions = (req, res) => {
  console.log('findRegions')
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

let findLanguages = (req, res) => {
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

exports.findLocations = findLocations;
exports.findTeams = findTeams;
exports.findRegions = findRegions;
exports.findLanguages = findLanguages;
