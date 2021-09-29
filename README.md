# Factorial Assessment ReadMe

### Deployment Instructions - Docker
run `docker-compose up`

docker will build backend and frontend in following ports:

backend - 3000 | frontend - 3001


### Deployment Instructions - Without Docker
for backend:
    
    bundle install
    rails db:migrate
    rails serve

for frontend:

    npm install
    npm start

from respective directories.

Note: **deployment instructions are made assuming correct versions of node and ruby is in the system**