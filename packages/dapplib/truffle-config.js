require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stove dash ranch clutch include clock onion ghost'; 
let testAccounts = [
"0x3fbabf08b2574b264bd143ca25de2f3b37806a131200ae437b373a3ee3f71a60",
"0xd29a46f532be8c7a888ba010d18b6c0d9975e485f67866216b5dd75e89df5a3b",
"0x702bc2d12d975faa39d56bb8ef87bd80327d8f6c76e57c09c9e7e007a70ff7c0",
"0xc3a7bac26ee9ebd270cb9d103a9b953cb606dcf8c57feba1a4c77ee8ce3fdfb8",
"0x9ddaf5f512fd797f90a37a6e952c13dd5b67ce559ba83c2ba2dbdf0d69778a4e",
"0x451453a4299a790d36e58976138b8341341ff5ca6cf92c9bd81a4307fb79c957",
"0x1e342ee3fffce6a00c095a0a06292cee2cc0a1b08b4bb64f567eaf0f3193448e",
"0x69037229941ed95ae452863167752f9e0218eb1c4619ff5e48c947a42c4b2de5",
"0xaf9abe4b4cb126411b553176cb6abd674facd581097dfd926251babe53abc822",
"0x361e78d8b92046be89d5c4509978c129907cb4117ceae42ac4be34447ab29dd4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


