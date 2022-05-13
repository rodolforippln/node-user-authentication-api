import { Pool } from "pg"

const connectionString = 'postgres://jdnjefxk:jeTxkPCUQ6R0TE8Hxjtla5kijkyoZWdS@kesavan.db.elephantsql.com/jdnjefxk'
const db = new Pool({ connectionString })

export default db