---
sidebar_position: 12
title: Get Company Job Count
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Company Job Count

`GET /get-company-job-count`

Get the number of active job postings for a company.

## Pricing

**1 credit** per call.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn company URL |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://api.infoplug.io/get-company-job-count?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgoogle%2F" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-company-job-count"
params = {
    "linkedin_url": "https://www.linkedin.com/company/google/"
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
  'https://api.infoplug.io/get-company-job-count?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgoogle%2F',
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
    "job_count": 8341275
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.job_count` | Number of active job listings |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Job count returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
