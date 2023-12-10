# Frontend #
The supplied frontend can be found in the app directory, written in React / TypeScript. Before running start, create .env in app folder. Replace the REACT_APP_DRAFFLE_PROGRAM_ID in the app/.env file to your deployed draffle program address.

`cd app`\
Create .env file.\
`yarn install`\
`yarn build`\
`yarn start`\


# My Note #
*Find and replace program id and wallet public key from all files when redeploy using new accounts.*


# Program Commands #
All commands to be run from the project root after a `cargo build`.
Next, create a folder in root named `operations`. Place or generate your wallet keypair in that forder with name `operator-keypair.json`.

## 1. CREATE RAFFLE ##
### Command 
```
target/debug/draffle create-raffle \
EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v \
1 \
"2022-07-25 12:00" \
--max-entrants 420 \
--provider.cluster devnet \
--program-id <program-id>
--provider.wallet operations/operator-keypair.json \
```
### Explanation
```
target/debug/draffle create-raffle \
    EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v \ # SPL token mint address that can be used to buy tickets, this is USDC
    1 \ # Cost per ticket in given token
    "2022-04-22 14:55" \ # Raffle end date in UTC timezone. Double check this if you encounter a 0x1771 error.
    --max-entrants 420 \ # Max tickets available for given raffle
    --provider.cluster devnet \ # Cluster
    --provider.wallet operations/operator-keypair.json # Keypair to execute command with
    --program-id <program-id> # Deployed raffle program
```
### Output
5tA54UMYd1tBSJ2VTaUBFE7mWZsM3n1pPucMyzvguQU1 # Program ID
Raffle address: CGraPGpJhZ9M35weYyQgnVVnBeyv1btyMsp8eAdD6Kr1 # Raffle address. Note this down.
Cluster clock unix_timestamp: 1649035423, raffle end_timestamp: 1649036100 
### Example
On testnet:\
`target/debug/draffle create-raffle So11111111111111111111111111111111111111112 300000000 '2022-07-27 08:00' --max-entrants 100 --provider.cluster devnet --provider.wallet operations/operator-keypair.json --program-id 8ekc2dYyM67ZQvN2kvF6ZTM94PCQnbWTjMH2gjb9qZtK`

with cargo(should be same):\
`cargo run -- --provider.cluster testnet --provider.wallet operations/operator-keypair.json create-raffle So11111111111111111111111111111111111111112 1000000000 "$(date -u -v+12H '+%Y-%m-%d %H:%M')" --max-entrants 400 --program-id 8ekc2dYyM67ZQvN2kvF6ZTM94PCQnbWTjMH2gjb9qZtK`


## 2. ADDING PRIZE ##
After a raffle has been created, make sure to take a note of the raffle address outputted.
Add prize to raffle There can be multiple prizes to a single raffle. The prize(s) can be NFTs or fungible tokens. The wallet adding the prize has to own that token, which will be transferred to the raffle.
### Command
```
target/debug/draffle add-prize \
<raffle-address> \
<prize-mint> \
1 \
0 \
--provider.cluster devnet \
--provider.wallet operations/operator-keypair.json \
--program-id <program-id>
```
### Explanation
```
target/debug/draffle add-prize \
<raffle-address> \ # Raffle address (pubkey)
<prize-mint> \ # Token (pubkey) of the prize to be added. Mint address in case of fungible tokens.
1 \ # How many of the token should be added as prize. Use 1 for NFTs
0 \ # Position in the array of prizes. Starting at 0, 1, 2...
--provider.cluster devnet \
--provider.wallet operations/operator-keypair.json \
--program-id <program-id>
```
### Example
`target/debug/draffle add-prize 6yvq6Zba8SezB9oNs5DUddHBKSbFYDGgfCSv3QpKdwFP ADtGj5NYZha2G59krhCWS64agmG442Qqag79agrd1QXr 1 0 --provider.cluster devnet --provider.wallet operations/operator-keypair.json --program-id 8ekc2dYyM67ZQvN2kvF6ZTM94PCQnbWTjMH2gjb9qZtK`



## 3. CHECK RAFFLE STATE ##
Check raffle state After you've added a prize (or at any point really) you can check the details of the raffle with the following command.
### Command
```
target/debug/draffle show-raffle \
<raffle-address> \
--provider.cluster devnet
```
### Output
```
5tA54UMYd1tBSJ2VTaUBFE7mWZsM3n1pPucMyzvguQU1 # Raffle program ID
Raffle {
    creator: 3Xaq71yEsJzyXmvwPf3fd7DywMULQvc2zYcRejDsdfQ8, # Should be your keypair address
    total_prizes: 1,
    claimed_prizes: 0,
    randomness: None,
    end_timestamp: 1649036100, # End timestamp in UNIX time
    ticket_price: 1,
    entrants: H8p1wcT3aZ8h9Q9x9w95VPqGedYjWKHFSsRvxvDVzJWT, # Account storing entrants
}
```
### Example
`target/debug/draffle show-raffle 6yvq6Zba8SezB9oNs5DUddHBKSbFYDGgfCSv3QpKdwFP --provider.cluster devnet`


## 4. REVEAL WINNERS ##
At this point you should spin up the frontend to check on the raffle at the /admin_panel path.
Reveal Winners This can only be done after a raffle has ended and the buffer period has completed. If you get an error executing this, try again later.
### Command
```
target/debug/draffle reveal-winners \
    <raffle-address> \
    --provider.cluster devnet \
    --provider.wallet operations/operator-keypair.json \
    --program-id <program-id>
```
# Explanation
```
target/debug/draffle collect-proceeds \
    <raffle-address> \ # Raffle address
    <target-token-account> \ # The token account matching the token used to pay for tickets, where the proceeds will be deposited.
    --provider.cluster devnet \
    --provider.wallet scripts/operator-keypair.json \
    --program-id <program-id>
```
### Example
`target/debug/draffle reveal-winners 6yvq6Zba8SezB9oNs5DUddHBKSbFYDGgfCSv3QpKdwFP --provider.cluster devnet --provider.wallet operations/operator-keypair.json --program-id 8ekc2dYyM67ZQvN2kvF6ZTM94PCQnbWTjMH2gjb9qZtK`

## 5.COLLECTING PROCEEDS ##
### Command
```
target/debug/draffle collect-proceeds \
    <raffle-address> \
    <target-token-account> \
    --provider.cluster devnet \
    --provider.wallet scripts/operator-keypair.json \
    --program-id <program-id>
```
### Example
`target/debug/draffle collect-proceeds CwD62e1FKCW9QHYrh95XXMiYHb6Y4Mo1SejU4gKv7uAi HXDkM9Z64hCNfwa1FER7BFLPARcrhptN3H3pRx6pp8Vd --provider.cluster testnet --provider.wallet operations/operator-keypair.json --program-id 8ekc2dYyM67ZQvN2kvF6ZTM94PCQnbWTjMH2gjb9qZtK`


# Token For Buying Tickets #
Any SPL token can be used to buy tickets for the raffle. Note that after a raffle has been created, you're not able to change which token will be used for buying tickets. If you want to use SOL directly, specify the WSOL mint address as the token `So11111111111111111111111111111111111111112`, otherwise the spl token mint address such as USDC `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`. If you used Wrapped SOL, the buyer can pay with SOL directly and it will automatically be converted to wrapped sol when you withdraw the proceeds.


# Collecting proceeds #
SPL You need to specify an ATA (associated token address) for the target token when withdrawing. Make sure you have at least a little bit of the token that was used for buying tickets for the given raffle in the target wallet, and copy the ATA of the token as the target. You can also run `spl-token account-info EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v` to see the ATA. You can also run `spl-token accounts` to get a list of all SPL token accounts your wallet has.
`spl-token account-info 29a6AWBP44QUnfZKNpWSU7tkfrfDBym94EtCZBPvJ2ao` # SPL Token mint
### Output
```
Address: Xqxcg3VxxcwD3iz3JYKq4CGUwu6vMsNebEmcwA1HFgw # ATA, this is what you need as target
Balance: 1
Mint: 29a6AWBP44QUnfZKNpWSU7tkfrfDBym94EtCZBPvJ2ao # SPL Token mint
Owner: PerrXcLkieKrGRuodwhYikfnYJi9cTNiRyK5hrufjXy
State: Initialized
Delegation: (not set)
Close authority: (not set)
```

SOL Proceeds will be withdrawn to WSOL after the raffle has finished. For this you will need an ATA for WSOL. The easiest way to create it is to wrap some SOL into WSOL, as this will create the token account for it automatically. Run the command `spl-token wrap 0.01` to wrap 0.01 SOL into WSOL. This will output Wrapping 0.1 SOL into Czt28u7gMKPy2924adLsCiL9Hg65XqS2GDjDTQuCGNMf where Czt2...GNMf is the token account address. Use this address for the collect-proceeds command as target when withdrawing proceeeds.


# SPL Token #
You must specify all custom SPL tokens used for your raffles within the `app/src/config/tokenRegistry.ts` file as seen in previous examples.


# Raffles view #
The `.env` file contains a `REACT_APP_TESTING` variable. This influences if the testWhitelist or prodWhitelist will be used in the `app/src/config/raffleWhitelist.ts` file. This defines which raffles show up on the public raffle list screen. Each raffle's picture and name can be customized through the frontend as seen in the examples within the file.



# dRaffle

dRaffle is a decentralized raffle protocol on Solana, which creates the necessary technical foundation to the dRaffle Luck Club. dRaffle is the first of its kind open-source transparent system to allow raffling of any token, in any amount, any mint, unlimited number of participants or number of prizes.

# dRaffle program

The goal of the program is to provide permissionless raffles.

An arbitrary number of prizes can be placed in each raffle, the end time, max entrants, the proceeds mint and ticket price are defined at creation.

Once the raffle ends time is reached, a permissionless call fixes the current blockhash as the randomness seed

Then each prize can be claimed by the public key matching the winning ticket index. The winning ticket index for each prize is obtained deriving the randomness using the prize index, hashed then modulo the total of entrants.

https://docs.chain.link/docs/chainlink-vrf-best-practices/#getting-multiple-random-number

[dRaffle dApp](https://www.draffle.io/)

[Litepaper](https://www.draffle.io/dRaffle-litepaper.pdf)

[Solana ignition hackathon entry](https://devpost.com/software/draffle-luck-club)

[Discord](https://discord.com/invite/BwPsaDzbNR)

The dRaffle program has been deployed and is a verifiable build https://anchor.projectserum.com/program/dRafA7ymQiLKjR5dmmdZC9RPX4EQUjqYFB3mWokRuDs

## Components

- The dRaffle program, to create raffles
- The dRaffle cli, to be able to interact with all the draffle commands to create raffle and add prizes
- The community staking program, to allow user to stake and earn rewards on the dRaffle community token, which is a free gift for early adopters and will give access to raffles

## Localnet usage

`scripts/start_dev.sh` sets up an entire environment with the program raffles and NFTs in order to functionaly test the app

Before running it make sure the programs are built with `anchor build`

When `start_dev.sh` is running the react app will show a set of test raffles with various prizes and raffle end times

## Notes

- metaplex-token-metadata-test-client needs to be executable chmod +x scripts/metaplex-token-metadata-test-client, build it from source for other OSes than linux with [metaplex-program-library](https://github.com/metaplex-foundation/metaplex-program-library) using `cargo build --release`
- install gdata on MacOS in order to be able to run start_dev.sh https://www.shell-tips.com/linux/how-to-format-date-and-time-in-linux-macos-and-bash/
- To use your own deployment, create a new program keypair, update declare_id! in [programs/draffle/src/lib.rs](programs/draffle/src/lib.rs) and use the (cli commands)[cli/README.md] with your program id! Run the react app with `REACT_APP_DRAFFLE_PROGRAM_ID` set to your new program id.
