---
sidebar_position: 37
title: Google Profiles
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Google Profiles

`POST /google-profiles`

Search for LinkedIn profile URLs using Google search.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No* | Person's name |
| `company` | string | No* | Company name |
| `job_title` | string | No* | Job title |
| `location` | string | No* | Location |
| `keyword` | string | No* | Additional search keywords |
| `page` | integer | No | Page number (default: 1) |
| `name_in_url` | string | No | Require name in URL (`"true"` or `"false"`, default: `"true"`) |

*At least one search parameter is required.

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request POST \
  --url https://api.infoplug.io/google-profiles \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --data '{
    "name": "John Doe",
    "company": "Google",
    "job_title": "Software Engineer"
  }'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/google-profiles"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "name": "John Doe",
    "company": "Google",
    "job_title": "Software Engineer"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://api.infoplug.io/google-profiles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    name: 'John Doe',
    company: 'Google',
    job_title: 'Software Engineer'
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
    "https://www.linkedin.com/in/john-smith-12345/"
  ]
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success, or "No profiles match the query" |
| `data` | Array of LinkedIn profile URL strings |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Results returned |
| 400 | Invalid Parameter - Missing required parameters |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Proxy or timeout error |
