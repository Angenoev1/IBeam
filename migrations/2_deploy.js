const { ether } = require("@openzeppelin/test-helpers");
const fs = require("fs");
const path = require("path");

// smart contracts
const BeamToken = artifacts.require("BeamToken");

// test token params
const name = "IBeam";
const symbol = "BEAM";
const supply = ether("5000000"); // 5,000,000 tokens

module.exports = async function (deployer, network, accounts) {
    if (network === "test") return; // skip migrations if use test network

    // FavorToken deployment
    console.log("BeamToken deployment...");

    // deploy token
    await deployer.deploy(BeamToken, name, symbol, supply);
    let beamToken = await BeamToken.deployed();
    console.log("beamToken address: ", beamToken.address);

    // write addresses and ABI to files
    console.log("write addresses and ABI to files");
    const contractsAddresses = {
        beamToken: beamToken.address
    };

    const contractsAbi = {
        beamToken: beamToken.abi
    };

    const deployDirectory = `${__dirname}/../deployed`;
    if (!fs.existsSync(deployDirectory)) {
        fs.mkdirSync(deployDirectory);
    }

    fs.writeFileSync(path.join(deployDirectory, `${network}_addresses.json`), JSON.stringify(contractsAddresses, null, 2));
    fs.writeFileSync(path.join(deployDirectory, `${network}_abi.json`), JSON.stringify(contractsAbi, null, 2));
};