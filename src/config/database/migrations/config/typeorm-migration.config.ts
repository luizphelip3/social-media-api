import {
  DB_PGSQL_HOST,
  DB_PGSQL_NAME,
  DB_PGSQL_PASSWORD,
  DB_PGSQL_PORT,
  DB_PGSQL_USERNAME,
} from '@config/env/env.config';
import { Publication } from '@modules/publication/domain';
import { User } from '@modules/user/domain/entity/user.entity';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: DB_PGSQL_HOST,
  port: DB_PGSQL_PORT,
  password: DB_PGSQL_PASSWORD,
  username: DB_PGSQL_USERNAME,
  database: DB_PGSQL_NAME,
  entities: [User, Publication],
  migrations: ['src/config/database/migrations/*{.js,.ts}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  ssl: false,
  synchronize: false,
  logging: false,
});
