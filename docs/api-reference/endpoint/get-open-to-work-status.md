---
sidebar_position: 3
title: Get Open to Work Status
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Open to Work Status

`GET /get-open-to-work-status`

Check if a LinkedIn profile has "Open to Work" status enabled. This indicates the person is actively looking for job opportunities.

## Pricing

**1 credit** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn profile URL |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://linkedin-questor.p.rapidapi.com/get-opentowork-status?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcjfollini%2F" \
  -H "x-rapidapi-key: YOUR_API_KEY"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-opentowork-status"
params = {
    "linkedin_url": "https://www.linkedin.com/in/cjfollini/"
}
headers = {
    "x-rapidapi-key": "YOUR_API_KEY"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch(
  'https://linkedin-questor.p.rapidapi.com/get-opentowork-status?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcjfollini%2F',
  {
    headers: {
      'x-rapidapi-key': 'YOUR_API_KEY'
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
    "open_to_work": false
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.open_to_work` | Boolean - true if Open to Work is enabled |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Status returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
