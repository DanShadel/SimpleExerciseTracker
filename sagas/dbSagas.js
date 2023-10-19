import * as SQLite from 'expo-sqlite';
import { takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes.js';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const databaseFile = 'database.db';

let db = SQLite.openDatabase('database.db');
db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Names (id integer primary key not null, name)'
    );
}, (err) => console.log(err), (cb) => console.log(cb));


async function openDatabase() {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        console.log('directory dne')
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    } else {
        console.log('directory exists!')
    }

    console.log((await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).uri)

    return SQLite.openDatabase('database.db');
}

// const db 

export function* watchGetDB() {
    yield takeEvery(types.GET_DB, getDB)
}

export function* getDB(action) {
    SQLite.openDatabase(databaseFile);
}


//none of this works
export function* initDB() {

    let db = yield openDatabase().then((db) => db);

    console.log(db);

    yield db._db.close();
    const query = [{
        args: [], sql: 'CREATE TABLE migrations(' +
            'id INTEGER PRIMARY KEY NOT NULL,' +
            'migration_nbr INTEGER NOT NULL,' +
            'success INTEGER NOT NULL)'
    }];

    console.log(db);

    yield db.exec(query, false, (cb) => console.log('CALLBACK: ' + cb));

    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM migrations;', null, (tx, results) => {
            console.log('success?')
        }),
            (tx, error) => {
                console.log('nosuccess?')
                console.log(error)
            }
    }, (err) => { console.log('tx error:' + err) });



    // // migrations.forEach((migration) => {
    //     db.transaction(migration);
    // })
    // db.transaction(tx => getMigrationsTransaction(tx), (err) => { console.log(err) }, (success) => { console.log(success) });
    //     console.log('tx finished')
}
