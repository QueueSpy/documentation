# Squad

Squad is the embodiment of tactical military action. Compete in massive-scale 50 vs. 50 battles in the most realistic combined-arms first-person shooter.

## Connection details

### IP address
This is the public IP address that players can use to connect to your server.

### Query port 
`Default: 7787 (UDP)`

Squad generally uses the game port for the query port. Depending on how you're hosting your server:
- **Renting a game server** - You can usually find this information from the provider's control panel.
- **Dedicated/Bare-metal** - Can be found in the server's startup command line.
::: code-group
```txt [Startup command line]
+server.queryport 27015 //Not present? It will be the default (27015)
```
:::