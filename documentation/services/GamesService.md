# GamesService

A list of all methods in the `GamesService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                                                                                                                                                                   |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getGameBoxscore](#getgameboxscore) | If you want detailed play information, you should use `/game/{id}/feed/live` or `/game/{id}/feed/live/diffPatch`.                                                                             |
| [getGameContent](#getgamecontent)   |                                                                                                                                                                                               |
| [getGame](#getgame)                 | This contains all data related to a game, from the boxscore, to play data and even on-ice coordinates. Be forewarned that, depending on the game, this endpoint can return a **lot** of data. |
| [getGameDiff](#getgamediff)         | You can use this to return a small subset of data relating to game.                                                                                                                           |

## getGameBoxscore

If you want detailed play information, you should use `/game/{id}/feed/live` or `/game/{id}/feed/live/diffPatch`.

- HTTP Method: `GET`
- Endpoint: `/game/{id}/boxscore`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id   | number | ✅       | The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7). |

**Return Type**

`GameBoxscores`

**Example Usage Code Snippet**

```typescript
import { Nhl } from 'nhl';

(async () => {
  const nhl = new Nhl({});

  const { data } = await nhl.games.getGameBoxscore(2017020851);

  console.log(data);
})();
```

## getGameContent

- HTTP Method: `GET`
- Endpoint: `/game/{id}/content`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id   | number | ✅       | The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7). |

**Return Type**

`GameContent`

**Example Usage Code Snippet**

```typescript
import { Nhl } from 'nhl';

(async () => {
  const nhl = new Nhl({});

  const { data } = await nhl.games.getGameContent(2017020851);

  console.log(data);
})();
```

## getGame

This contains all data related to a game, from the boxscore, to play data and even on-ice coordinates. Be forewarned that, depending on the game, this endpoint can return a **lot** of data.

- HTTP Method: `GET`
- Endpoint: `/game/{id}/feed/live`

**Parameters**

| Name | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id   | number | ✅       | The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7). |

**Return Type**

`Game`

**Example Usage Code Snippet**

```typescript
import { Nhl } from 'nhl';

(async () => {
  const nhl = new Nhl({});

  const { data } = await nhl.games.getGame(2017020851);

  console.log(data);
})();
```

## getGameDiff

You can use this to return a small subset of data relating to game.

- HTTP Method: `GET`
- Endpoint: `/game/{id}/feed/live/diffPatch`

**Parameters**

| Name          | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id            | number | ✅       | The ID of the game. The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7). |
| startTimeCode | string | ✅       | The prospect ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

**Return Type**

`Game`

**Example Usage Code Snippet**

```typescript
import { Nhl } from 'nhl';

(async () => {
  const nhl = new Nhl({});

  const { data } = await nhl.games.getGameDiff(2017020851, {
    startTimeCode: '20180210_0900',
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
