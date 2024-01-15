import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("ticketPay.db");

export const createTable = async () => {
   try {
      await db.transaction((tx) => {
         tx.executeSql(
            "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
         );
      });
   } catch (error) {
      console.error(error);
   }
};

export const registerUser = async (username, password) => {
   try {
      await db.transaction((tx) => {
         tx.executeSql("INSERT INTO users (username, password) VALUES (?, ?)", [
            username,
            password,
         ]);
      });
      return true; // Registration successful
   } catch (error) {
      console.error(error);
      return false; // Registration failed
   }
};

export const loginUser = async (username, password) => {
   try {
      const results = await db.transaction((tx) => {
         return tx.executeSql(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password]
         );
      });

      if (results.rows.length > 0) {
         return results.rows.item(0); // User found
      } else {
         return null; // Invalid credentials
      }
   } catch (error) {
      console.error(error);
      return null; // Login failed
   }
};

export const fetchUserData = async () => {
   try {
      const results = await db.transaction((tx) => {
         return tx.executeSql("SELECT * FROM users");
      });

      if (results.rows.length > 0) {
         return results.rows.item(0); // Return the first user
      } else {
         return null; // No user found
      }
   } catch (error) {
      console.error(error);
      return null;
   }
};
