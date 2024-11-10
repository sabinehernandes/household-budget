# Household Budget

Household Budget was made to help my partner and I to organize our budget.

## Setup

Requirements

- Docker
- PostgreSQL

### Starting the application

1.  Clone this repo
2.  Run Docker
3.  Connect to the DB (user and password can be found in <code>docker-compose.yml</code>)
4.  Run <code>categories.sql</code>
5.  Run the SpringBoot application
6.  cd into the frontend folder
7.  Run <code>npm run dev</code> and open the URL in the browser
8.  Have fun :)

## Future improvements

In general, make the app receive incomes and expenses, ensuring a proper financial view of the budget. Also, add graphs and charts.

### Backend:

- <code>/getCategories</code> endpoint
- Improve validation
- Improve error handling

### Frontend

- Use Tanstack Query
- Render categories from <code>/getCategories</code>
- Improve error handling
- Add filtering per period

### UX

- Display status toasts
- Make it prettier
