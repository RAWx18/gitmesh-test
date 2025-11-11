### Development environment

#### <a name="requirements">Requirements</a>

- [Node](https://nodejs.org/en) v16.16.0
- [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

#### <a name="getting_started">Getting started</a>

1. Get the mono repo from GitHub

```shell
git clone [YOUR_REPO]
```

2. Run the start script

```shell
cd scripts
./cli start
```

For hot reloading, you can run

```shell
cd scripts
./cli clean-start-dev
```

This app will be available at http://localhost:8081