import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const configKnex: Knex.Config = {
  client: env.DATABALSE_CLIENT,
  connection:
    env.DATABALSE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABALSE_CLIENT,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(configKnex)
