require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remind huge inflict globe fortune sketch'; 
let testAccounts = [
"0x9f7e49cb5dbc892e69ba0b96152003cc92b93c281109695e25d410c17901f97d",
"0xf328501276c1acf4361e30a21141c5a17fd5400a28afcba3ab572f02fb7cd8b5",
"0x4c54a62827b5bd419b15ddae28d3034e71211277ba0699dc0d558f9747c1d7ae",
"0x612bfd6eda611c7e12db4437ee58624c5be7628a3381662f636b4ce656eb2391",
"0xe9bc3ae01ea9baecc6fb7e6e725f17b2773bf8df1ba0e424dcbcc698cbea79af",
"0xe3bf4b23ba99800b095523ac6120825b7c662dfe8e18c91baf5315d807f6af89",
"0x1c1ba887db7d2474ef6b2f4159df8b0ff831e60546233eda84cebc28840ab591",
"0xece71706183e6cf5cb47890f53164562740b2ebc0c46624efc26b75a26609006",
"0x71209446374d03687ad7635262de3d6a4c341305c797f3b8d26072d61e931c40",
"0x0eabe568ee514be64a551be4e82e1b6786c08a10f4b302a87ba3c56dd120856c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
