# Contributing to the Project

This is a standalone fork of an earlier version of crowd.dev, modified and maintained independently.

## Ways to contribute

- Try out the platform & API and report any issues you find
- Help with open issues in this repository
- Add new integrations following the integration framework documentation
- Improve documentation and examples
- Create tutorials and blog posts about your use cases

Any contributions you make are **greatly appreciated**. ❤️

### Issue priorities

<table>
  <tr>
    <td>
      Type of Issue
    </td>
    <td>
      Priority
    </td>
  </tr>
   <tr>
    <td>
      Bug in Critical Features (Login, Integrations, etc)
    </td>
    <td>
      <a href="https://github.com/calcom/cal.com/issues?q=is:issue+is:open+sort:updated-desc+label:Urgent">
        <img src="https://img.shields.io/badge/-Urgent-red">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      Bug in Core Features (Home, Members, Organizations, Activities, Reports)
    </td>
    <td>
      <a href="https://github.com/calcom/cal.com/issues?q=is:issue+is:open+sort:updated-desc+label:%22High+priority%22">
        <img src="https://img.shields.io/badge/-High%20Priority-orange">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      Confusing UX (but it's working)
    </td>
    <td>
      <a href="https://github.com/calcom/cal.com/issues?q=is:issue+is:open+sort:updated-desc+label:%22Medium+priority%22">
        <img src="https://img.shields.io/badge/-Medium%20Priority-yellow">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      Minor improvements
    </td>
    <td>
      <a href="https://github.com/calcom/cal.com/issues?q=is:issue+is:open+sort:updated-desc+label:%22Low+priority%22">
        <img src="https://img.shields.io/badge/-Low%20Priority-green">
      </a>
    </td>
  </tr>
</table>


## How to contribute to development

We welcome any contribution to crowd.dev. Before you start with your first issue, please consider the following points:

- Check the issue tracker for tasks labeled with "good first issue" to get started
- Look for issues tagged with "help wanted" for additional contribution opportunities
- Reach out to the maintainers if you need help or have questions

#### Requirements

- Node v16.16.0
- Docker and docker-compose


#### Setup the project

The project is a monorepo, meaning that it is a collection of multiple packages managed in the same repository. In the following steps, you'll learn how to get the project up and running for development purposes.

1. Get the mono repo from GitHub

```shell
git clone [YOUR_REPOSITORY_URL]
```

2. Run the start script:

```shell
cd scripts
./cli start
```

For hot reloading, you can run:
```shell
cd scripts
./cli clean-start-dev
```

The app will be available at http://localhost:8081

For more information on development, check the documentation in the repository.

#### Running services individually

To optimize resource usage during development, we would suggest starting only the necessary services and leveraging hot reloading where applicable. 

1. Start the scaffold service, including the necessary components like the database, etc:

```shell
./cli scaffold up 
```

This will set up the foundational services required for the project.

2. If you are primarily working on the frontend but also need the API without hot reloading:


```shell
DEV=1 ./cli service frontend up
./cli service api up
```

By selectively starting the frontend and API services without enabling hot reloading, helps reduce resource usage. 

Feel free to adjust the commands based on the specific services you need for your development tasks.

#### Coding guidelines

To ensure consistency throughout the source code, please keep these rules in mind as you are working:

- All features or bug fixes must be tested by one or more specs (unit tests).
- We use [Eslint default rule guide](https://eslint.org/docs/rules/), with minor changes. An automated formatter is available using Prettier.
- In-code documentation is required for every function or class that is not self-evident.  
- All new API endpoints that are relevant to the public API must have in-code documentation to generate OpenAPI specifications.  
- The pipeline must pass.
