var MajorCoin = artifacts.require("./MajorCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(MajorCoin);
};