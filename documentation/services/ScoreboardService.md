# ScoreboardService

A list of all methods in the `ScoreboardService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                                           |
| :---------------------------------------------------- | :-------------------------------------------------------------------- |
| [getCurrentTeamScoreboard](#getcurrentteamscoreboard) | Retrieve the scoreboard for a specific team as of the current moment. |

## getCurrentTeamScoreboard

Retrieve the scoreboard for a specific team as of the current moment.

- HTTP Method: `GET`
- Endpoint: `/v1/scoreboard/{team}/now`

**Parameters**

| Name | Type   | Required | Description            |
| :--- | :----- | :------- | :--------------------- |
| team | string | ✅       | Three-letter team code |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { NhlClient } from 'nhl_client';

(async () => {
  const nhlClient = new NhlClient({});

  const { data } = await nhlClient.scoreboard.getCurrentTeamScoreboard('team');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
