export const mariadbConfig =
{
    host:'127.0.0.1',
    username:process.env.CLIENT,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    dialect:'mariadb'
}