import {ConnectionOptions} from 'typeorm';
import {User, Post, Comment} from '../models'

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "mod3-postgres.postgres.database.azure.com",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "mod3_team_2@mod3-postgres",
    password: process.env.POSTGRES_PASSWORD || "YcanqUvVVgR9YBVL",
    database: process.env.POSTGRES_DB || "mod3_db_2",
    ssl: true,
    entities: [User, Post, Comment],
    synchronize: true,
  };

  export default config;