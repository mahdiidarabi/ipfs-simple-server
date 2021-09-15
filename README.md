## Installing IPFS on a server

the installing instruction is described in the following link:
https://docs.ipfs.io/install/command-line/#system-requirements


## Initializing IPFS

run this command on your local machine 

```azure
ipfs init
```

or this one on a server in a data center

```azure
ipfs init --profile server
```

you can find the initializing instruction in

https://docs.ipfs.io/how-to/command-line-quick-start/#initialize-the-repository


## Setting up an IPFS node

to persist our data on IPFS we should run our node and pin the data that we want to keep.

run to set up an IPFS daemon node in background
```azure
ipfs daemon &
```

if you want to stop the node you should take the node in foreground by
using ``` fg``` and then CTRL + C , or find the process Id with ``` top``` and kill it.

(
the IPFS daemon node is up in background of

    161.35.215.51
)


## Adding file or directory on IPFS and pinning it

add a file with 
 ```azure
ipfs add <path-of-the-file-form-running-directory>
```

or add a folder with 
```azure
ipfs add -r <path-of-the-floder-from-running-directory>
```

then if you want the file to not vanish after 24 hours (by garbage collector) should pin it 

```azure
ipfs pin add <hash-of-the-file-on-ipfs>
```

```azure
ipfs pin add -r <hash-of-the-folder-on-ipfs>
```
https://medium.com/ethereum-developers/how-to-host-your-ipfs-files-online-forever-f0c56b9b5398


## IPNS (InterPlanetary Name System)

after add a file or directory to IPFS you can link an IPNS link to it by
```azure
ipfs name publish <hash-of-the-file-or-folder-on-ipfs>
```

it takes some time to link a IPNS domain to the hash and the result is something like
```azure
Published to k51qzi5uqu5dimucp24o6tiw1dks3q2onwz30q0u6qbfjbq8l6g1gy65ogwvac: /ipfs/QmQBdYhBAnbZphGxx5gXLrtWcpTnJVKLkLtq54jvVAP8Qq
```

it's accessible by concatenating https://ipfs.io/ipns/ with the IPNS link

https://ipfs.io/ipns/k51qzi5uqu5dimucp24o6tiw1dks3q2onwz30q0u6qbfjbq8l6g1gy65ogwvac

(
    if run the above command again with another hash the IPNS will link the current IPNS domain with the new hash on IPFS,
    so you should generate a new IPNS domain and link it with a new IPFS hash if you don't want to lose the linkage between the previous ones.
    the full instruction for this can be found at https://docs.ipfs.io/concepts/ipns/#example-ipns-setup-with-cli

)

