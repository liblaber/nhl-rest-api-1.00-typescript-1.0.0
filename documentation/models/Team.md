# Team

**Properties**

| Name             | Type             | Required | Description |
| :--------------- | :--------------- | :------- | :---------- |
| id               | number           | ❌       |             |
| name             | string           | ❌       |             |
| link             | string           | ❌       |             |
| venue            | Venue            | ❌       |             |
| abbreviation     | string           | ❌       |             |
| triCode          | string           | ❌       |             |
| teamName         | string           | ❌       |             |
| locationName     | string           | ❌       |             |
| firstYearOfPlay  | number           | ❌       |             |
| division         | TeamDivision     | ❌       |             |
| conference       | TeamConference   | ❌       |             |
| franchise        | Franchise        | ❌       |             |
| roster           | TeamRoster       | ❌       |             |
| nextGameSchedule | NextGameSchedule | ❌       |             |
| shortName        | string           | ❌       |             |
| officialSiteUrl  | string           | ❌       |             |
| franchiseId      | number           | ❌       |             |
| active           | boolean          | ❌       |             |

# TeamDivision

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ❌       |             |
| name | string | ❌       |             |
| link | string | ❌       |             |

# TeamConference

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ❌       |             |
| name | string | ❌       |             |
| link | string | ❌       |             |

# TeamRoster

**Properties**

| Name   | Type     | Required | Description |
| :----- | :------- | :------- | :---------- |
| roster | Roster[] | ❌       |             |

# NextGameSchedule

**Properties**

| Name         | Type    | Required | Description |
| :----------- | :------ | :------- | :---------- |
| totalItems   | number  | ❌       |             |
| totalEvents  | number  | ❌       |             |
| totalGames   | number  | ❌       |             |
| totalMatches | number  | ❌       |             |
| dates        | Dates[] | ❌       |             |

# Dates

**Properties**

| Name         | Type    | Required | Description |
| :----------- | :------ | :------- | :---------- |
| date         | string  | ❌       |             |
| totalItems   | number  | ❌       |             |
| totalEvents  | number  | ❌       |             |
| totalGames   | number  | ❌       |             |
| totalMatches | number  | ❌       |             |
| games        | Games[] | ❌       |             |
| events       | any[]   | ❌       |             |
| matches      | any[]   | ❌       |             |

# Games

**Properties**

| Name     | Type         | Required | Description |
| :------- | :----------- | :------- | :---------- |
| gamePk   | number       | ❌       |             |
| link     | string       | ❌       |             |
| gameType | string       | ❌       |             |
| season   | string       | ❌       |             |
| gameDate | string       | ❌       |             |
| status   | GamesStatus  | ❌       |             |
| teams    | GamesTeams   | ❌       |             |
| venue1   | GamesVenue   | ❌       |             |
| content  | GamesContent | ❌       |             |

# GamesStatus

**Properties**

| Name              | Type              | Required | Description |
| :---------------- | :---------------- | :------- | :---------- |
| abstractGameState | AbstractGameState | ❌       |             |
| codedGameState    | CodedGameState    | ❌       |             |
| detailedState     | DetailedState     | ❌       |             |
| statusCode        | StatusCode        | ❌       |             |
| startTimeTbd      | boolean           | ❌       |             |

# AbstractGameState

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| Live    | string | ✅       | "Live"      |
| Preview | string | ✅       | "Preview"   |

# CodedGameState

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| 2    | string | ✅       | "2"         |
| 3    | string | ✅       | "3"         |

# DetailedState

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| In Progress | string | ✅       | "In Progress" |
| Pre-Game    | string | ✅       | "Pre-Game"    |

# StatusCode

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| 2    | string | ✅       | "2"         |
| 3    | string | ✅       | "3"         |

# GamesTeams

**Properties**

| Name | Type       | Required | Description |
| :--- | :--------- | :------- | :---------- |
| away | TeamsAway1 | ❌       |             |
| home | TeamsHome1 | ❌       |             |

# TeamsAway1

**Properties**

| Name         | Type              | Required | Description |
| :----------- | :---------------- | :------- | :---------- |
| leagueRecord | AwayLeagueRecord1 | ❌       |             |
| score        | number            | ❌       |             |
| team1        | AwayTeam1         | ❌       |             |

# AwayLeagueRecord1

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| wins   | number | ❌       |             |
| losses | number | ❌       |             |
| ot     | number | ❌       |             |
| type\_ | string | ❌       |             |

# AwayTeam1

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ❌       |             |
| name | string | ❌       |             |
| link | string | ❌       |             |

# TeamsHome1

**Properties**

| Name         | Type              | Required | Description |
| :----------- | :---------------- | :------- | :---------- |
| leagueRecord | HomeLeagueRecord1 | ❌       |             |
| score        | number            | ❌       |             |
| team1        | HomeTeam1         | ❌       |             |

# HomeLeagueRecord1

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| wins   | number | ❌       |             |
| losses | number | ❌       |             |
| ot     | number | ❌       |             |
| type\_ | string | ❌       |             |

# HomeTeam1

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ❌       |             |
| name | string | ❌       |             |
| link | string | ❌       |             |

# GamesVenue

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| name | string | ❌       |             |
| link | string | ❌       |             |

# GamesContent

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| link | string | ❌       |             |

<!-- This file was generated by liblab | https://liblab.com/ -->
