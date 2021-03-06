[![CircleCI](https://img.shields.io/circleci/build/github/hornta/trollskogen-api)](https://circleci.com/gh/hornta/trollskogen-api) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![Discord](https://img.shields.io/discord/540217517164068922)](http://discord.gg/wPxz8pD) [![Known Vulnerabilities](https://snyk.io/test/github/hornta/trollskogen-api/badge.svg)](https://snyk.io/test/github/hornta/trollskogen-api)

REST API used by trollskogen website and minecraft server. It follows the [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

Exposed routes:

- PUT /create-token - Create a verification token

---

- GET /bans - List all bans
- GET /bans/active - List active bans
- POST /ban - Add a new ban
- GET /ban/:id - Retrieve a single ban
- PATCH /ban/:id - Edit a ban

---

- GET /users - List all users
- GET /user/:id - Retrieve a single user
- POST /user - Add a new user
- PATCH /user/:id - Edit a user

---

- GET /homes - List all homes
- GET /home/:id - Retrieve a single home
- POST /home - Add a new home
- PATCH /home/:id - Edit a home
- DELETE /home/:id - Remove a home

---

- GET /announcements - List all ongoingquests
- GET /announcements/active - List all active ongoingquests
- GET /announcements/complete - List all completed ongoingquests
- GET /announcements/top - List a top list of players with most completed quests

---

- GET /ongoingquests - List all announcements
- POST /announcement - Add a new announcement
- DELETE /announcement/:id - Remove an announcement
- PATCH /announcement/:id - Edit an announcement

---

- GET /chat - List all chat messages
- POST /chat - Add a new chat message

Fields in request objects and response objects are to be written in a [snake_case](https://en.wikipedia.org/wiki/Snake_case) fashion.
