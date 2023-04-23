package internal

// Define an interface for a database
type Database interface {
	CreatePerson(person *Person) error
	Close() error
}