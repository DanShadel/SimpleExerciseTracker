export const getMigrationsTransaction = (transaction) => {
    transaction.executeSql("SELECT * FROM migrations"), [], (results) => { console.log(JSON.stringify(results)) }
}
