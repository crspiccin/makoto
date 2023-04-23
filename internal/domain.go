package internal

import "time"

type Entry struct{
	// ID is the unique identifier for the entry
	ID string `json:"id"`
	// Amount is the amount of the entry
	Amount float64 `json:"amount"`
	// Type is the type of the entry
	Type string `json:"type"`
	// Description is the description of the entry
	Description string `json:"description"`
	// CreatedAt is the time when the entry was created
	CreatedAt time.Time `json:"created_at"`
	// UpdatedAt is the time when the entry was updated
	UpdatedAt time.Time `json:"updated_at"`
}

type Person struct {
	// ID is the unique identifier for the person
	ID string `json:"id"`
	// Name is the name of the person
	Name string `json:"name"`
	// Email is the email of the person
	Email string `json:"email"`
	// Password is the password of the person
	Password string `json:"password"`
	// CreatedAt is the time when the person was created
	CreatedAt time.Time `json:"created_at"`
	// UpdatedAt is the time when the person was updated
	UpdatedAt time.Time `json:"updated_at"`
	
}