---
sidebar_position: 36
title: Google Schools
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Google Schools

`POST /google-schools`

Search for school/university LinkedIn pages using Google search.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `school_name` | string | No* | School name to search for |
| `location` | string | No* | Location filter |
| `keyword` | string | No* | Additional search keywords |
| `page` | integer | No | Page number (default: 1) |

*At least one of `school_name`, `location`, or `keyword` is required.

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request POST \
  --url https://api.infoplug.io/google-schools \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --data '{
    "school_name": "Stanford University"
  }'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/google-schools"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "school_name": "Stanford University"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://api.infoplug.io/google-schools', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    school_name: 'Stanford University'
  })
});
const data = await response.json();
console.log(data);
```

  </TabItem>
</Tabs>

## Example Response

```json
{
  "message": "ok",
  "data": [
    "https://www.linkedin.com/school/stanford-university/"
  ]
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success, or "No schools match the query" |
| `data` | Array of LinkedIn school URL strings |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Results returned |
| 400 | Invalid Parameter - Missing required parameters |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Proxy or timeout error |
