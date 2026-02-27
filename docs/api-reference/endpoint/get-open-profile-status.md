---
sidebar_position: 4
title: Get Open Profile Status
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Open Profile Status

`GET /get-open-profile-status`

Check if a LinkedIn profile has "Open Profile" status enabled. Open Profile allows anyone to send InMail messages, even without a connection or InMail credits.

## Pricing

**1 credit** per call.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn profile URL |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'hhttps://linkedin-questor.p.rapidapi.com/get-open-profile-status?linkedin_url=https://www.linkedin.com/in/example/' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-open-profile-status"
params = {
    "linkedin_url": "https://www.linkedin.com/in/example/"
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
  'https://linkedin-questor.p.rapidapi.com/get-open-profile-status?linkedin_url=https://www.linkedin.com/in/example/',
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
    "open_profile": false
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.open_profile` | Boolean - true if Open Profile is enabled |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Status returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
