import Sequelize from 'sequelize';

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
export default sequelize;