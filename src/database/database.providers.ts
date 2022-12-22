import { Sequelize } from 'sequelize-typescript';
import { employeeData } from './employee.entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'abstract-programmer',
        password: 'Deva@jft1506',
        database: 'deva',
      });
      sequelize.addModels([employeeData]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
