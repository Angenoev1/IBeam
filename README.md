# BEP20 IBeam Token
BEP20 IBeam Token contracts

## For Developers

### Install dependencies

```sh
npm install
```

### Compile contracts

```sh
npm run compile:all
```

### Deploy ERC20 to Mainnet

Set all parameters to *migrations/2_deploy.js* before use.

Set current gas price to *truffle-config.js* before use.

```sh
npm run deploy:mainnet
```

### Deploy to Kovan

Set all parameters to *migrations/2_deploy.js* before use.

```sh
npm run deploy:kovan
```

### Deploy to Rinkeby

Set all parameters to *migrations/2_deploy.js* before use.

```sh
npm run deploy:rinkeby
```

### Deploy to local RPC (:8545)

Set all parameters to *migrations/2_deploy.js* before use.

```sh
npm run deploy:local
```

### Run tests

```sh
npm run test:truffle
```