---
sidebar_position: 7
title: Get Recent Activity Time
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Recent Activity Time

`GET /get-recent-activity-time`

Get the timestamp of a profile's most recent LinkedIn activity. Useful for determining how active a user is on the platform.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn profile URL |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://api.infoplug.io/get-recent-activity-time?linkedin_url=https://www.linkedin.com/in/example/' \
  --header 'Authorization: Bearer YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-recent-activity-time"
params = {
    "linkedin_url": "https://www.linkedin.com/in/example/"
}
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch(
  'https://api.infoplug.io/get-recent-activity-time?linkedin_url=https://www.linkedin.com/in/example/',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }
);
const data = await response.json();
console.log(data);
```

  </TabItem>
</Tabs>

## Example Response

```json
{
  "message": "ok",
  "data": {
    "recent_activity_time": "4d"
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.recent_activity_time` | Relative time string (e.g., "4d", "2w", "3mo") |

## Time Format

The `recent_activity_time` field returns relative time:
- `Xh` - X hours ago
- `Xd` - X days ago
- `Xw` - X weeks ago
- `Xmo` - X months ago

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Activity time returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
