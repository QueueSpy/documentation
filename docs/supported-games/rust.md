# Rust

The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.

## Connection details

### IP address
This is the public IP address that players can use to connect to your server.

### Query port 
`Default: 27015 (UDP)`

Depending on how you're hosting your server:
- **Renting a game server** - You can usually find this information from the provider's control panel.
- **Dedicated/Bare-metal** - Can be found in the server's startup command line.
::: code-group
```txt [Startup command line]
+server.queryport 27015 //Not present? It will be the default (27015)
```
:::