import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test-api', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql', 
    dialectOptions: {
      charset: 'utf8mb4',
    },
    port: 3306,        
    logging: false,
    define: {
      timestamps: true
    },
});


export default sequelize;
