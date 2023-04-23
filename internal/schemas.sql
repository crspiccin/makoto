CREATE TABLE IF NOT EXISTS person (
    id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS entry (
    id TEXT PRIMARY KEY,
    amount REAL,
    type TEXT,
    description TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
