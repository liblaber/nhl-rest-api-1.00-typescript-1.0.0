# PlayersService

A list of all methods in the `PlayersService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description |
| :-------------------------------- | :---------- |
| [getPlayer](#getplayer)           |             |
| [getPlayerStats](#getplayerstats) |             |

## getPlayer

- HTTP Method: `GET`
- Endpoint: `/people/{id}`

**Parameters**

| Name | Type   | Required | Description           |
| :--- | :----- | :------- | :-------------------- |
| id   | number | ✅       | The ID of the player. |

**Return Type**

`Players`

**Example Usage Code Snippet**

```typescript
import { Nhl } from 'nhl';

(async () => {
  const nhl = new Nhl({});

  const { data } = await nhl.players.getPlayer(8466138);

  console.log(data);
})();
```

## getPlayerStats

- HTTP Method: `GET`
- Endpoint: `/people/{id}/stats`

**Parameters**

| Name   | Type                                                    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :----- | :------------------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id     | number                                                  | ✅       | The ID of the player.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| stats  | [GetPlayerStatsStats](../models/GetPlayerStatsStats.md) | ✅       | Stats explanations: _ `homeAndAway` - Provides a split between home and away games. _ `byMonth` - Monthly split of stats. _ `byDayOfWeek` - Split done by day of the week. _ `goalsByGameSituation` - Shows number on when goals for a player happened like how many in the shootout, how many in each period, etc. _ `onPaceRegularSeason` - This only works with the current in-progress season and shows projected totals based on current onPaceRegularSeason. _ `regularSeasonStatRankings` - Returns where someone stands vs the rest of the league for a specific regularSeasonStatRankings _ `statsSingleSeason` - Obtains single season statistics for a player. _ `vsConference` - Conference stats split. _ `vsDivision` - Division stats split. _ `vsTeam` - Conference stats split. \* `winLoss` - Very similar to the previous modifier except it provides the W/L/OT split instead of Home and Away. |
| season | number                                                  | ❌       | Return a team's specific season.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

**Return Type**

`PlayerStats`

**Example Usage Code Snippet**

```typescript
import { Nhl } from 'nhl';

(async () => {
  const nhl = new Nhl({});

  const stats = GetPlayerStatsStats.homeAndAway;

  const { data } = await nhl.players.getPlayerStats(8466138, {
    stats: stats,
    season: 20172018,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
