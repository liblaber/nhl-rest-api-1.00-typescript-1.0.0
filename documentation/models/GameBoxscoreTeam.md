# GameBoxscoreTeam

**Properties**

| Name       | Type                      | Required | Description |
| :--------- | :------------------------ | :------- | :---------- |
| team       | GameBoxscoreTeamTeam      | ❌       |             |
| teamStats  | GameBoxscoreTeamTeamStats | ❌       |             |
| players    | GameBoxscoreTeamPlayers   | ❌       |             |
| goalies    | number[]                  | ❌       |             |
| skaters    | number[]                  | ❌       |             |
| onIce      | number[]                  | ❌       |             |
| onIcePlus  | OnIcePlus[]               | ❌       |             |
| scratches  | number[]                  | ❌       |             |
| penaltyBox | number[]                  | ❌       |             |
| coaches    | Coaches[]                 | ❌       |             |

# GameBoxscoreTeamTeam

**Properties**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| id           | number | ❌       |             |
| name         | string | ❌       |             |
| link         | string | ❌       |             |
| abbreviation | string | ❌       |             |
| triCode      | string | ❌       |             |

# GameBoxscoreTeamTeamStats

**Properties**

| Name            | Type            | Required | Description |
| :-------------- | :-------------- | :------- | :---------- |
| teamSkaterStats | TeamSkaterStats | ❌       |             |

# TeamSkaterStats

**Properties**

| Name                   | Type   | Required | Description |
| :--------------------- | :----- | :------- | :---------- |
| goals                  | number | ❌       |             |
| pim                    | number | ❌       |             |
| shots                  | number | ❌       |             |
| powerPlayPercentage    | string | ❌       |             |
| powerPlayGoals         | number | ❌       |             |
| powerPlayOpportunities | number | ❌       |             |
| faceOffWinPercentage   | string | ❌       |             |
| blocked                | number | ❌       |             |
| takeaways              | number | ❌       |             |
| giveaways              | number | ❌       |             |
| hits                   | number | ❌       |             |

# GameBoxscoreTeamPlayers

**Properties**

| Name         | Type            | Required | Description |
| :----------- | :-------------- | :------- | :---------- |
| person       | PlayersPerson   | ❌       |             |
| jerseyNumber | string          | ❌       |             |
| position     | PlayersPosition | ❌       |             |
| stats        | PlayersStats    | ❌       |             |

# PlayersPerson

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| id            | number | ❌       |             |
| fullName      | string | ❌       |             |
| link          | string | ❌       |             |
| shootsCatches | string | ❌       |             |
| rosterStatus  | string | ❌       |             |

# PlayersPosition

**Properties**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| code         | string | ❌       |             |
| name         | string | ❌       |             |
| type\_       | string | ❌       |             |
| abbreviation | string | ❌       |             |

# PlayersStats

**Properties**

| Name        | Type        | Required | Description |
| :---------- | :---------- | :------- | :---------- |
| skaterStats | SkaterStats | ❌       |             |

# SkaterStats

**Properties**

| Name                 | Type   | Required | Description |
| :------------------- | :----- | :------- | :---------- |
| timeOnIce            | string | ❌       |             |
| assists              | number | ❌       |             |
| goals                | number | ❌       |             |
| shots                | number | ❌       |             |
| hits                 | number | ❌       |             |
| powerPlayGoals       | number | ❌       |             |
| powerPlayAssists     | number | ❌       |             |
| penaltyMinutes       | number | ❌       |             |
| faceOffWins          | number | ❌       |             |
| faceoffTaken         | number | ❌       |             |
| takeaways            | number | ❌       |             |
| giveaways            | number | ❌       |             |
| shortHandedGoals     | number | ❌       |             |
| shortHandedAssists   | number | ❌       |             |
| blocked              | number | ❌       |             |
| plusMinus            | number | ❌       |             |
| evenTimeOnIce        | string | ❌       |             |
| powerPlayTimeOnIce   | string | ❌       |             |
| shortHandedTimeOnIce | string | ❌       |             |

# OnIcePlus

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| playerId      | number | ❌       |             |
| shiftDuration | number | ❌       |             |
| stamina       | number | ❌       |             |

# Coaches

**Properties**

| Name     | Type            | Required | Description |
| :------- | :-------------- | :------- | :---------- |
| person   | CoachesPerson   | ❌       |             |
| position | CoachesPosition | ❌       |             |

# CoachesPerson

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| fullName | string | ❌       |             |
| link     | string | ❌       |             |

# CoachesPosition

**Properties**

| Name         | Type   | Required | Description |
| :----------- | :----- | :------- | :---------- |
| code         | string | ❌       |             |
| name         | string | ❌       |             |
| type\_       | string | ❌       |             |
| abbreviation | string | ❌       |             |

<!-- This file was generated by liblab | https://liblab.com/ -->
