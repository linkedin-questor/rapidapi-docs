---
sidebar_position: 35
title: Google Companies
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Google Companies

`POST /google-companies`

Search for company LinkedIn pages using Google search.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_name` | string | No* | Company name to search for |
| `location` | string | No* | Location filter |
| `keyword` | string | No* | Additional search keywords |
| `page` | integer | No | Page number (default: 1) |

*At least one of `company_name`, `location`, or `keyword` is required.

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request POST \
  --url https://api.infoplug.io/google-companies \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --data '{
    "company_name": "Apple",
    "location": "California"
  }'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/google-companies"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "company_name": "Apple",
    "location": "California"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://api.infoplug.io/google-companies', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    company_name: 'Apple',
    location: 'California'
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
    "https://www.linkedin.com/company/tesla-motors"
  ]
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success, or "No companies match the query" |
| `data` | Array of LinkedIn company URL strings |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Results returned |
| 400 | Invalid Parameter - Missing required parameters |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Proxy or timeout error |
