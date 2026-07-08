# The GYM Sports API

A professional, secure, and scalable RESTful API for a sports management application. Built with Node.js, Express, MongoDB, and following industry best practices for security, clean code, and scalability.

## Features

- **Security First**: JWT authentication, role-based authorization, rate limiting, input validation, and NoSQL injection prevention
- **Clean Architecture**: Layered structure with controllers, validators, middleware, and utilities
- **Scalability**: Database indexing, pagination, filtering, and sorting
- **API Versioning**: Versioned endpoints for backward compatibility
- **Error Handling**: Comprehensive error handling with custom error classes
- **Input Validation**: Request validation using express-validator
- **Password Security**: Bcrypt hashing with salt rounds
- **CORS Protection**: Configurable CORS settings
- **Rate Limiting**: Configurable rate limiting to prevent abuse
- **Graceful Shutdown**: Proper handling of process termination
- **Player Management**: Complete player profiles with statistics tracking
- **Venue Management**: Stadium and venue information with team associations
- **Statistics Tracking**: Detailed performance statistics for players and teams
- **Season Management**: Competition and season organization with standings

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, express-rate-limit, mongo-sanitize, hpp
- **Validation**: express-validator
- **Password Hashing**: bcrypt

## Project Structure

```
restful-04/
├── api/
│   ├── config/
│   │   └── env.config.mjs          # Environment configuration
│   ├── controllers/
│   │   ├── auth.controller.mjs     # Authentication controllers
│   │   ├── user.js                 # User controllers
│   │   ├── team.controller.mjs     # Team controllers
│   │   ├── fixture.controller.mjs  # Fixture controllers
│   │   ├── player.controller.mjs   # Player controllers
│   │   ├── venue.controller.mjs    # Venue controllers
│   │   ├── statistics.controller.mjs # Statistics controllers
│   │   └── season.controller.mjs   # Season controllers
│   ├── middleware/
│   │   ├── auth.mjs                # Authentication & authorization
│   │   ├── security.mjs            # Security middleware (helmet, rate limit)
│   │   ├── errorHandler.mjs        # Error handling middleware
│   │   └── validation.mjs          # Request validation middleware
│   ├── model/
│   │   ├── user.mjs                # User model
│   │   ├── team.mjs                # Team model
│   │   ├── fixture.mjs             # Fixture model
│   │   ├── player.mjs              # Player model
│   │   ├── venue.mjs               # Venue model
│   │   ├── statistics.mjs          # Statistics model
│   │   └── season.mjs              # Season model
│   ├── routes/
│   │   ├── auth.routes.mjs         # Authentication routes
│   │   ├── user.js                 # User routes
│   │   ├── team.routes.mjs         # Team routes
│   │   ├── fixture.routes.mjs      # Fixture routes
│   │   ├── player.routes.mjs       # Player routes
│   │   ├── venue.routes.mjs        # Venue routes
│   │   ├── statistics.routes.mjs    # Statistics routes
│   │   └── season.routes.mjs       # Season routes
│   ├── utils/
│   │   ├── AppError.mjs            # Custom error classes
│   │   ├── responseFormatter.mjs   # Response formatting utilities
│   │   └── pagination.mjs          # Pagination utilities
│   └── validators/
│       ├── user.validator.mjs      # User validation schemas
│       ├── team.validator.mjs      # Team validation schemas
│       ├── fixture.validator.mjs   # Fixture validation schemas
│       ├── player.validator.mjs    # Player validation schemas
│       ├── venue.validator.mjs     # Venue validation schemas
│       ├── statistics.validator.mjs # Statistics validation schemas
│       └── season.validator.mjs    # Season validation schemas
├── app.mjs                         # Express app configuration
├── server.mjs                      # Server entry point
├── package.json
├── .env.example                    # Environment variables template
└── README.md
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration

5. Start the server:

```bash
npm start
```

## Environment Variables

| Variable                   | Description                 | Default                           |
| -------------------------- | --------------------------- | --------------------------------- |
| PORT                       | Server port                 | 3000                              |
| BASE_URL                   | Base URL                    | http://localhost                  |
| DATABASE_CONNECTION_STRING | MongoDB connection string   | mongodb://localhost:27017/the-gym |
| JWT_SECRET                 | JWT secret key              | -                                 |
| JWT_EXPIRES_IN             | JWT expiration time         | 1h                                |
| JWT_REFRESH_SECRET         | JWT refresh secret key      | -                                 |
| JWT_REFRESH_EXPIRES_IN     | JWT refresh expiration time | 7d                                |
| CORS_ORIGIN                | Allowed CORS origins        | http://localhost:3000             |
| RATE_LIMIT_WINDOW_MS       | Rate limit window in ms     | 900000                            |
| RATE_LIMIT_MAX             | Max requests per window     | 100                               |
| PAGINATION_DEFAULT_LIMIT   | Default pagination limit    | 10                                |
| PAGINATION_MAX_LIMIT       | Maximum pagination limit    | 100                               |

## API Endpoints

### Base URL

```
http://localhost:3000/api/v1
```

### Authentication

#### Register

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "role": "user"
}
```

#### Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

#### Refresh Token

```http
POST /api/v1/auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "your-refresh-token"
}
```

#### Get Current User

```http
GET /api/v1/auth/me
Authorization: Bearer <access-token>
```

### Users

#### Get All Users (Paginated)

```http
GET /api/v1/users?page=1&limit=10&sort=-createdAt&role=user
Authorization: Bearer <access-token>
```

#### Get User by ID

```http
GET /api/v1/users/:id
Authorization: Bearer <access-token>
```

#### Create User (Admin only)

```http
POST /api/v1/users
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "SecurePass123!",
  "role": "staff"
}
```

#### Update User (Admin only)

```http
PUT /api/v1/users/:id
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Jane Smith"
}
```

#### Delete User (Admin only)

```http
DELETE /api/v1/users/:id
Authorization: Bearer <access-token>
```

### Teams

#### Get All Teams (Paginated)

```http
GET /api/v1/teams?page=1&limit=10&sort=-points
```

#### Get Team by ID

```http
GET /api/v1/teams/:id
```

#### Create Team (Admin/Staff only)

```http
POST /api/v1/teams
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Team Alpha",
  "coach": {
    "name": "Coach Name",
    "age": 45,
    "nationality": "USA"
  },
  "wins": 10,
  "draws": 5,
  "losses": 3,
  "points": 35
}
```

#### Update Team (Admin/Staff only)

```http
PUT /api/v1/teams/:id
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "points": 40
}
```

#### Delete Team (Admin only)

```http
DELETE /api/v1/teams/:id
Authorization: Bearer <access-token>
```

### Fixtures

#### Get All Fixtures (Paginated)

```http
GET /api/v1/fixtures?page=1&limit=10&sort=fixtureDate&status=pending
```

#### Get Fixture by ID

```http
GET /api/v1/fixtures/:id
```

#### Create Fixture (Admin/Staff only)

```http
POST /api/v1/fixtures
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "homeTeam": "team-id-1",
  "awayTeam": "team-id-2",
  "fixtureDate": "2024-12-01T15:00:00Z",
  "venue": "Stadium Name"
}
```

#### Update Fixture (Admin/Staff only)

```http
PUT /api/v1/fixtures/:id
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "homeGoals": 2,
  "awayGoals": 1,
  "status": "completed"
}
```

#### Delete Fixture (Admin only)

```http
DELETE /api/v1/fixtures/:id
Authorization: Bearer <access-token>
```

### Players

#### Get All Players (Paginated)

```http
GET /api/v1/players?page=1&limit=10&sort=lastName&position=forward&team=team-id
```

#### Get Player by ID

```http
GET /api/v1/players/:id
```

#### Get Player Stats

```http
GET /api/v1/players/:id/stats
```

#### Create Player (Admin/Staff only)

```http
POST /api/v1/players
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "firstName": "Lionel",
  "lastName": "Messi",
  "dateOfBirth": "1987-06-24",
  "nationality": "Argentina",
  "position": "forward",
  "jerseyNumber": 10,
  "team": "team-id",
  "height": 170,
  "weight": 72,
  "contractStart": "2023-01-01",
  "contractEnd": "2025-12-31"
}
```

#### Update Player (Admin/Staff only)

```http
PUT /api/v1/players/:id
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "position": "striker"
}
```

#### Update Player Stats (Admin/Staff only)

```http
PATCH /api/v1/players/:id/stats
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "goals": 25,
  "assists": 12,
  "appearances": 30
}
```

#### Delete Player (Admin only)

```http
DELETE /api/v1/players/:id
Authorization: Bearer <access-token>
```

### Venues

#### Get All Venues (Paginated)

```http
GET /api/v1/venues?page=1&limit=10&sort=name&city=London
```

#### Get Venue by ID

```http
GET /api/v1/venues/:id
```

#### Create Venue (Admin/Staff only)

```http
POST /api/v1/venues
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Wembley Stadium",
  "city": "London",
  "country": "England",
  "capacity": 90000,
  "address": "Wembley, London",
  "surface": "grass",
  "openedYear": 2007,
  "homeTeams": ["team-id-1", "team-id-2"]
}
```

#### Update Venue (Admin/Staff only)

```http
PUT /api/v1/venues/:id
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "capacity": 95000
}
```

#### Add Home Team to Venue (Admin/Staff only)

```http
POST /api/v1/venues/:id/home-teams
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "teamId": "team-id"
}
```

#### Remove Home Team from Venue (Admin/Staff only)

```http
DELETE /api/v1/venues/:id/home-teams/:teamId
Authorization: Bearer <access-token>
```

#### Delete Venue (Admin only)

```http
DELETE /api/v1/venues/:id
Authorization: Bearer <access-token>
```

### Statistics

#### Get All Statistics (Paginated)

```http
GET /api/v1/statistics?page=1&limit=10&sort=-goals&entityType=player&season=2024
```

#### Get Statistics by ID

```http
GET /api/v1/statistics/:id
```

#### Get Entity Statistics

```http
GET /api/v1/statistics/entity/:entityType/:entityId?season=2024&competition=Premier League
```

#### Get Top Scorers

```http
GET /api/v1/statistics/top-scorers?season=2024&competition=Premier League&limit=10
```

#### Get Team Standings

```http
GET /api/v1/statistics/standings?season=2024&competition=Premier League
```

#### Create Statistics (Admin/Staff only)

```http
POST /api/v1/statistics
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "entityType": "player",
  "entityId": "player-id",
  "season": "2024",
  "competition": "Premier League",
  "matchesPlayed": 30,
  "goals": 15,
  "assists": 8,
  "minutesPlayed": 2700
}
```

#### Update Statistics (Admin/Staff only)

```http
PUT /api/v1/statistics/:id
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "goals": 16,
  "assists": 9
}
```

#### Delete Statistics (Admin only)

```http
DELETE /api/v1/statistics/:id
Authorization: Bearer <access-token>
```

### Seasons

#### Get All Seasons (Paginated)

```http
GET /api/v1/seasons?page=1&limit=10&sort=-year&competition=Premier League
```

#### Get Season by ID

```http
GET /api/v1/seasons/:id
```

#### Create Season (Admin/Staff only)

```http
POST /api/v1/seasons
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "2023-24 Premier League",
  "year": "2023-24",
  "startDate": "2023-08-01",
  "endDate": "2024-05-25",
  "competition": "Premier League",
  "competitionType": "league",
  "teams": ["team-id-1", "team-id-2"]
}
```

#### Update Season (Admin/Staff only)

```http
PUT /api/v1/seasons/:id
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "isCompleted": true
}
```

#### Add Team to Season (Admin/Staff only)

```http
POST /api/v1/seasons/:id/teams
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "teamId": "team-id"
}
```

#### Remove Team from Season (Admin/Staff only)

```http
DELETE /api/v1/seasons/:id/teams/:teamId
Authorization: Bearer <access-token>
```

#### Set Season Winner (Admin only)

```http
POST /api/v1/seasons/:id/winner
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "winnerId": "team-id"
}
```

#### Delete Season (Admin only)

```http
DELETE /api/v1/seasons/:id
Authorization: Bearer <access-token>
```

## User Roles

- **admin**: Full access to all resources
- **staff**: Can create and update teams and fixtures
- **player**: Read-only access
- **coach**: Read-only access
- **user**: Read-only access

## Response Format

All responses follow a consistent format:

### Success Response

```json
{
  "success": true,
  "message": "Success message",
  "data": {},
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Paginated Response

```json
{
  "success": true,
  "message": "Success message",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNextPage": true,
    "hasPrevPage": false
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error message",
  "error": {},
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Security Features

1. **Password Hashing**: All passwords are hashed using bcrypt with 12 salt rounds
2. **JWT Authentication**: Secure token-based authentication with access and refresh tokens
3. **Role-Based Authorization**: Access control based on user roles
4. **Rate Limiting**: Prevents abuse by limiting request rates
5. **Input Validation**: All inputs are validated before processing
6. **NoSQL Injection Prevention**: Request sanitization to prevent injection attacks
7. **CORS Protection**: Configurable CORS settings
8. **Helmet**: Security headers for Express apps
9. **Password Requirements**: Enforces strong password policies

## Error Handling

The API uses custom error classes for different error types:

- `NotFoundError` (404)
- `BadRequestError` (400)
- `UnauthorizedError` (401)
- `ForbiddenError` (403)
- `ConflictError` (409)
- `ValidationError` (422)
- `InternalServerError` (500)

## Development

The server runs with `--watch` flag for automatic restarts during development.

## License

ISC
