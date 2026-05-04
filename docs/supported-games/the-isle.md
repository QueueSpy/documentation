# Squad

Squad is the embodiment of tactical military action. Compete in massive-scale 50 vs. 50 battles in the most realistic combined-arms first-person shooter.

## Connection details

### IP address
This is the public IP address that players can use to connect to your server.

### Query port
#### Evrima version
`Default: 7777 (UDP)`

An Evrima server generally uses the game port for the query port. Depending on how you're hosting your server:
- **Renting a game server** - You can usually find this information from the provider's control panel.
- **Dedicated/Bare-metal** - You can find this in the `Game.ini` file.
::: code-group
```ini [Game.ini]
QueryPort=7777 #Not present? It will be the default (7777)
```
:::

#### Legacy version
`Default: 27015 (UDP)`

Depending on how you're hosting your server:
- **Renting a game server** - You can usually find this information from the provider's control panel.
- **Dedicated/Bare-metal** - You can find this in the `Engine.ini` file.
::: code-group
```ini [Engine.ini]
steamQueryPort=27016; #If doesn't exist it'll be the default (27016)
```
:::