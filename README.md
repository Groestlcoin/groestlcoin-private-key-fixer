# Groestlcoin Private Key Fixer

1. This tool can find and fix a random typo. If the `private key` has 1 symbol that is not correct, the tool will find it and change it to its real value and will restore the original `private key`.

2. It can find up to 4-5 missing symbols from the `private key` assuming we know the positions of those missing symbols. It will also work with more missing symbols but with each symbol we add we will slow the script ~60 times so it practically becomes useless after the ~5th missing character (depending on your computer).

3. It can also find up to 8-9 missing symbols if they are at the end of the `private key`.

## Important

**This is all said below but since people are very cautions and suspicious (as they SHOULD be with such tools) I want to emphasize on it. The only safe way to use the tool is to follow these exact steps**:

Download the code -> turn off your internet -> run the code and find the key -> sweep the private key with a mobile wallet to transfer the funds -> remove the tool (instructions below) -> restart computer -> turn on internet.

**Even if you haven't found the key for some reason, you still have to remove the tool and restart the computer before going back online.**

## Requirements

The script will only work if

1. The `private key` is in a **WIF** compressed or uncompressed format. This is a Wallet Import Format that is 51 or 52 characters long (assuming no missing symbols) and should start with `5` for the 51 chars version and with `K` or `L` for the 52 chars version.
2. The `public address` that is associated with the `private key` in question is known.

The basic functionality in the popular https://www.groestlcoin.org/paper.html website for generating a single wallet generates the `public address` and the `private key` in those exact formats and they are widely used.

They look like these:

Public address: `FtTQHZZum2wfD6ejZTVLFiPeZhZt8d6WHd`

Private key: `L26VJQsQCcBuugSD8f3RE4CZLUVEKx2V8nYLtLDaqJwd4TBeJiyk`

## Getting started

If you don't have Node.js you have to [download](https://nodejs.org/en/download/) it and install it first.

Then run the following commands into the `Terminal` (for MacOS) or the `Command Prompt` (for Windows) to download the tool and start playing with it.

```bash
git clone https://github.com/Groestlcoin/groestlcoin-private-key-fixer.git
cd groestlcoin-private-key-fixer
npm install
```

### Going offline

At this point it would be best to turn off your internet connection and continue offline because your computer might be infected with viruses or malware. It is also recommended to have a mobile Groestlcoin wallet nearby so if the private key is indeed recovered, the funds can be immediately transfered to it because the key would no longer be considered safe (some malicious program might intercept it and steal it).

### Restore by fixing a single typo

To fix a typo in the private key, replace the `{PUBLIC_ADDRESS}` and the `{PRIVATE_KEY}` with your known `public address` and your broken `private key` and run the command in the `Terminal`.

```bash
node app.js --publicAddress={PUBLIC_ADDRESS} --privateKey={PRIVATE_KEY}
```

For example


```bash
node app.js --publicAddress=FtTQHZZum2wfD6ejZTVLFiPeZhZt8d6WHd --privateKey=L26VJQsQCcBuugSD8f3RE4CZLUVEKx2V8nYLtLDaqJwd4TBeJiyk
```

### Restore up to 4-5 missing simbols

To restore missing characters from the WIF private key, replace the `{PUBLIC_ADDRESS}` and the `{PRIVATE_KEY}` with your known `public address` and your `private key`, put underscore `_` on each position where you are missing a symbol and run the command in the `Terminal`.

```bash
node app.js --publicAddress={PUBLIC_ADDRESS} --privateKey={PRIVATE_KEY}
```

For example (3 missing, replaced with `_`)

```bash
node app.js --publicAddress=FtTQHZZum2wfD6ejZTVLFiPeZhZt8d6WHd --privateKey=L2__JQsQCc_uugSD8f3RE4CZLUVEKx2V8nYLtLDaqJwd4TBeJiyk
```

*Recovering 3 missing symbols is almost instant and recovering 4 should take < 5 minutes on a MacBook Pro.*

### Restore up to 8-9 missing simbols at the end

To restore missing characters **from the end** at the WIF private key, replace the `{PUBLIC_ADDRESS}` and the `{PRIVATE_KEY}` with your known `public address` and your `private key` and run the command in the `Terminal`.

```bash
node app.js --publicAddress={PUBLIC_ADDRESS} --privateKey={PRIVATE_KEY}
```

For example (7 missing)

```bash
node app.js --publicAddress=FtTQHZZum2wfD6ejZTVLFiPeZhZt8d6WHd --privateKey=L26VJQsQCcBuugSD8f3RE4CZLUVEKx2V8nYLtLDaqJwd4
```

*Recovering 7 missing symbols is almost instant and recovering 8 should take < 10 minutes on a MacBook Pro.*

### Going back online

If a private key was successfully recovered and the GRS funds were transfered out, it would be best to first delete the tool by running the following comamnd into the Terminal `cd ../ && rm -Rf groestlcoin-private-key-fixer` then restart your computer and only then it would be relatively safe to connect back to the internet.
