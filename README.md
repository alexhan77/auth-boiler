# Node Auth-Boilerplate

This is a boilerplate for an Express App with local user authentication.It exists so I have a customized boilerplate and don't have to start from scratch on all my projects.

## What It Includes

* Local Auth (email. and passowrd)
* Passport and passport-local
* Sessions for saving user info and displaying flash messages
* Settings for PostgresSQL and Sequelize
* Hashed passwords
* EJS templating and EJS layouts
* Sequelize User model
* Materialize styling - nav and footer

## Included Models

| Column | Type | Notes |
| ----------- | ---------- | ------------------------- |
| id | Integer | Serial primary key |
| firstname | String | Required Length > 1 | 
| lastname | String | - | 
| email | String | Unique Loging |
| password | String | Hash | 
| birthday | Date | - |
| admin | Booleam | Defaulted to False
| pic | String | - | 
| bio | Text | - |
| createdAt | Date | Automatically added by Sequelize |
| updatedAt | Date | Automatically added by Sequelize |

## Included Routes

**Routes in index.js (main)**

| Method | Path | Purpose | 
| ------ | ----------------------- | -------------------- |
| GET | `/` | Home Page |
| GET | `*` | Catch-all for 404s |

**Routes in controllers/auth.js**

| Method | Path | Purpose | 
| ------ | ----------------------- | -------------------- |
| GET | `/auth/login` | Render login form |
| POST | `/auth/login` | Process login data |
| GET | `/auth/signup` | Render signup form |
| POST | `/auth/signup` | Process signup data |
| GET | `/auth/logout` | Remove user from session + redirect |

**Routes in controllers/profile.js**

| Method | Path | Purpose | 
| ------ | ----------------------- | -------------------- |
| GET | `/profile/user` | Show user dashboard (authorized user only) |
| GET | `/profile/admin` | Show admin dashboard (authorized admin only) |
| GET | `/profile/guest/:id` | View user dashboard as guest View user dashboard as guest (authorized user only) |

## Directions For Use
