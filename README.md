# Bravi Assessment - Web

## Installation

Clone the repository and enter the project folder.

```
git clone git@github.com:matheusmariano/bravi-assessment-web.git
cd bravi-assessment-web
```

Copy the `.env.example` to `.env`

```
cp .env.example .env
```

Generate a `docker-compose.yml` for your environment. If you are running a development server, you can just run the following command.

```
docker-compose -f docker-compose.dev.yml config > docker-compose.yml
```

Install Node dependencies

```
docker-compose run --rm node yarn install
```

## Running

Start the development server

```
docker-compose up
```

The application will be available with the port you defined in `.env`. The default address is [http://localhost:8000](http://localhost:8000).
