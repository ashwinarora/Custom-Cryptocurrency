var MajorCoin = artifacts.require("./MajorCoin.sol");
var MajorCoinSale = artifacts.require("./MajorCoinSale.sol");

module.exports = function(deployer) {
  deployer.deploy(MajorCoin, 1000000).then(function(){
    var tokenPrice = 1000000000000000 // equals 0.001 ether
    return deployer.deploy(MajorCoinSale, MajorCoin.address, tokenPrice)
  });
};
