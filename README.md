# Personal Website

## Dependencies

Tested with: [node](https://nodejs.org/) >= v12 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/mldangelo/edkearney.com.git
cd edkearney.com
nvm install # this is optional - make sure you're running >= node 12 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

Make a commit to `main` and push your changes. That's it.
