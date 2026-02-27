---
sidebar_position: 39
title: Find Custom Headcount
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find Custom Headcount

`POST /find-custom-headcount`

Find custom employee headcount for a company with advanced filters.

## Pricing

**1 credit** per call.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | Company/school LinkedIn URL (must contain `/company/`, `/showcase/`, or `/school/`) |
| `where_they_live` | array | No | Array of geographic region IDs |
| `where_they_studied` | array | No | Array of school IDs |
| `what_they_do` | array | No | Array of function IDs |
| `what_they_are_skilled_at` | array | No | Array of skill IDs |
| `what_they_studied` | array | No | Array of field of study IDs |
| `keywords` | string | No | Search keywords |
| `include_subsidiaries` | string | No | Include subsidiaries (`"true"` or `"false"`, default: `"false"`) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.infoplug.io/find-custom-headcount" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"linkedin_url":"https://www.linkedin.com/company/microsoft/"}'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/find-custom-headcount"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "linkedin_url": "https://www.linkedin.com/company/microsoft/"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://api.infoplug.io/find-custom-headcount', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    linkedin_url: 'https://www.linkedin.com/company/microsoft/'
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
  "data": {
    "headcount": 2
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.headcount` | Number of employees matching criteria |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Headcount returned |
| 400 | Invalid Parameter - Missing `linkedin_url` |
| 500 | Server Error - Internal error occurred |
