import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb');

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, email TEXT, phone_number TEXT);'
  );
});

export default db;