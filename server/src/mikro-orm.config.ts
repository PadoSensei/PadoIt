import { Post } from "./entities/Post";
import { __prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core'
import path from 'path';
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post, User],
  dbName: 'PadoIt',
  password: 'Cross_2021',
  type: 'postgresql',
  debug: process.env.NODE_ENV !== 'production'
} as Parameters<typeof MikroORM.init>[0];