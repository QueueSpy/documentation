# DayZ

DayZ is a gritty, authentic, open-world survival horror hybrid-MMO game, players follow a single goal: Survive by any mean necessary.

## Connection details

### IP address
This is the public IP address that players can use to connect to your server.

### Query port 
`Default: 27016 (UDP)`

Depending on how you're hosting your server:
- **Renting a game server** - You can usually find this information from the provider's control panel.
- **Dedicated/Bare-metal** - You can find this in the `serverDZ.cfg` file.
::: code-group
```txt [serverDZ.cfg]
steamQueryPort=27016; //If doesn't exist it'll be the default (27016)
```
:::