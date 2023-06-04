# Makoto

Makoto is API layer with a chatbot and web client where we can track financial expences, currently people uses

## HLD

### Architecture

```mermaid

graph LR;
    subgraph Auth Layer
        AuthProvider
    end

    subgraph Client Layer
        Chatbot -->|HTTP Requests| Gateway
        Web -->|HTTP Requests| Gateway
        Chatbot --> AuthProvider
        Web --> AuthProvider
    end

    subgraph Gateway Layer
        Gateway -->|Service Requests| monoservice

    end

    subgraph monoservice Layer
        monoservice -->|Database Queries| MakotoDB
        monoservice --> AuthProvider
    end


```

### Domain

```mermaid
classDiagram
    class Entry {
        -id: string
        -user: User
        -description: string
        -type: string
        -amount: number
        -created_at: number
        -updated_at?: number
    }

    class User {
        -id: string
        -loginId: string
        -providerName: string
        -name: string
        -email: string
        -created_at: number
        -updated_at?: number
    }

    Entry --> User: user


```

## Third Party

### Auth0

Response example:

```json
{
	"sub": "auth0|646faaaeb087f578dcc892cd",
	"nickname": "johnny",
	"name": "johnny@cash.com",
	"picture": "https://s.gravatar.com/avatar/1b9582628abe919dc33220a979d0a696?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcr.png",
	"updated_at": "2023-05-25T18:13:32.479Z"
}
```
