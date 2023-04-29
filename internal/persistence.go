package internal

import {
	"database/sql"
	"github.com/mattn/go-sqlite3"
	"os"
}


func SetupDB() *sql.DB {
	db, err := sql.Open("sqlite3", "./makoto.db")
	if err != nil {
		panic(err)
	}

	schema, err := os.ReadFile("./schemas.sql")

	statement, err := db.Prepare(schema)
	if err != nil {
		panic(err)
	}
	statement.Exec()

	return db
}

// Define an interface for a database
func CreateEntry(entry *internal.Entry){
	result, err := db.Exec("INSERT INTO todos (title, status) VALUES (?, ?)", todo.Title, todo.Status)
}
