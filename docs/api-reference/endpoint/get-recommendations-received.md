---
sidebar_position: 5
title: Get Recommendations Received
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Recommendations Received

`GET /get-recommendations-received`

Get recommendations that a LinkedIn profile has received from other users.

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
  --url 'https://api.infoplug.io/get-recommendations-received?linkedin_url=https://www.linkedin.com/in/example/' \
  --header 'Authorization: Bearer YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-recommendations-received"
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
  'https://api.infoplug.io/get-recommendations-received?linkedin_url=https://www.linkedin.com/in/example/',
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
  "data": []
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data` | Array of recommendation objects |
| `data[].text` | Recommendation text |
| `data[].profile_url` | LinkedIn URL of person who gave recommendation |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Recommendations returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
