# PlayerStats

**Properties**

| Name      | Type               | Required | Description |
| :-------- | :----------------- | :------- | :---------- |
| copyright | string             | ❌       |             |
| stats     | PlayerStatsStats[] | ❌       |             |

# PlayerStatsStats

**Properties**

| Name   | Type           | Required | Description |
| :----- | :------------- | :------- | :---------- |
| type\_ | StatsType1     | ❌       |             |
| splits | StatsSplits1[] | ❌       |             |

# StatsType1

**Properties**

| Name        | Type            | Required | Description |
| :---------- | :-------------- | :------- | :---------- |
| displayName | TypeDisplayName | ❌       |             |

# TypeDisplayName

**Properties**

| Name                      | Type   | Required | Description                 |
| :------------------------ | :----- | :------- | :-------------------------- |
| byDayOfWeek               | string | ✅       | "byDayOfWeek"               |
| byMonth                   | string | ✅       | "byMonth"                   |
| goalsByGameSituation      | string | ✅       | "goalsByGameSituation"      |
| homeAndAway               | string | ✅       | "homeAndAway"               |
| onPaceRegularSeason       | string | ✅       | "onPaceRegularSeason"       |
| regularSeasonStatRankings | string | ✅       | "regularSeasonStatRankings" |
| statsSingleSeason         | string | ✅       | "statsSingleSeason"         |
| vsConference              | string | ✅       | "vsConference"              |
| vsDivision                | string | ✅       | "vsDivision"                |
| vsTeam                    | string | ✅       | "vsTeam"                    |
| winLoss                   | string | ✅       | "winLoss"                   |

# StatsSplits1

**Properties**

| Name               | Type               | Required | Description |
| :----------------- | :----------------- | :------- | :---------- |
| season             | string             | ❌       |             |
| stat               | SplitsStat1        | ❌       |             |
| isHome             | boolean            | ❌       |             |
| isWin              | boolean            | ❌       |             |
| isOt               | boolean            | ❌       |             |
| month              | number             | ❌       |             |
| dayOfWeek          | number             | ❌       |             |
| opponent           | Opponent           | ❌       |             |
| opponentDivision   | OpponentDivision   | ❌       |             |
| opponentConference | OpponentConference | ❌       |             |

# SplitsStat1

**Properties**

| Name                        | Type   | Required | Description |
| :-------------------------- | :----- | :------- | :---------- |
| timeOnIce                   | string | ❌       |             |
| assists                     | string | ❌       |             |
| goals                       | number | ❌       |             |
| pim                         | number | ❌       |             |
| shots                       | number | ❌       |             |
| games                       | number | ❌       |             |
| hits                        | number | ❌       |             |
| powerPlayGoals              | number | ❌       |             |
| powerPlayPoints             | number | ❌       |             |
| powerPlayTimeOnIce          | number | ❌       |             |
| evenTimeOnIce               | number | ❌       |             |
| penaltyMinutes              | number | ❌       |             |
| faceOffPct                  | number | ❌       |             |
| shotPct                     | number | ❌       |             |
| gameWinningGoals            | number | ❌       |             |
| overTimeGoals               | number | ❌       |             |
| shortHandedGoals            | number | ❌       |             |
| shortHandedPoints           | number | ❌       |             |
| shortHandedTimeOnIce        | string | ❌       |             |
| blocked                     | number | ❌       |             |
| plusMinus                   | number | ❌       |             |
| points                      | number | ❌       |             |
| shifts                      | number | ❌       |             |
| timeOnIcePerGame            | string | ❌       |             |
| evenTimeOnIcePerGame        | string | ❌       |             |
| shortHandedTimeOnIcePerGame | string | ❌       |             |
| powerPlayTimeOnIcePerGame   | string | ❌       |             |
| rankPowerPlayGoals          | string | ❌       |             |
| rankBlockedShots            | string | ❌       |             |
| rankAssists                 | string | ❌       |             |
| rankShotPct                 | string | ❌       |             |
| rankGoals                   | string | ❌       |             |
| rankHits                    | string | ❌       |             |
| rankPenaltyMinutes          | string | ❌       |             |
| rankShortHandedGoals        | string | ❌       |             |
| rankPlusMinus               | string | ❌       |             |
| rankShots                   | string | ❌       |             |
| rankPoints                  | string | ❌       |             |
| rankOvertimeGoals           | string | ❌       |             |
| rankGamesPlayed             | string | ❌       |             |
| goalsInFirstPeriod          | number | ❌       |             |
| goalsInSecondPeriod         | number | ❌       |             |
| goalsInThirdPeriod          | number | ❌       |             |
| goalsTrailingByOne          | number | ❌       |             |
| goalsTrailingByTwo          | number | ❌       |             |
| goalsTrailingByThreePlus    | number | ❌       |             |
| goalsWhenTied               | number | ❌       |             |
| goalsLeadingByOne           | number | ❌       |             |
| goalsLeadingByTwo           | number | ❌       |             |

# Opponent

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ❌       |             |
| name | string | ❌       |             |
| link | string | ❌       |             |

# OpponentDivision

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ❌       |             |
| name | string | ❌       |             |
| link | string | ❌       |             |

# OpponentConference

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| id   | number | ❌       |             |
| name | string | ❌       |             |
| link | string | ❌       |             |

<!-- This file was generated by liblab | https://liblab.com/ -->
