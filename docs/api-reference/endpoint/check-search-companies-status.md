---
sidebar_position: 6
title: Check Search Companies Status
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Check Search Companies Status

`GET /check-search-companies-status`

Check the status of a company search job using the `request_id` from the [Search Companies](/api-reference/endpoint/search-companies) endpoint.

## Pricing

**Free** - This endpoint does not consume any credits.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `request_id` | string | Yes | The request ID from search initiation |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/check-search-companies-status?request_id=ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/check-search-companies-status"
params = {
    "request_id": "ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o"
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
  'https://linkedin-questor.p.rapidapi.com/check-search-companies-status?request_id=ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o',
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
  "message": "Found 100/100 companies. Please use 'Get Search Companies Results' endpoint to get your data!",
  "search_params": {
    "company_headcounts": [
      "1-10",
      "11-50"
    ],
    "headquarters_location": [
      103644278
    ],
    "hiring_on_linkedin": "false",
    "industry_codes": [
      3,
      4
    ],
    "keywords": "",
    "limit": 100,
    "recent_activities": []
  },
  "status": "done",
  "total_companies": 100,
  "total_count": 120982
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `status` | Current status: "pending", "processing", "done", "failed" |
| `message` | Status message |
| `total_count` | Total results available on LinkedIn (null if pending) |
| `total_companies` | Number of results scraped so far |
| `limit` | Requested maximum results |

## Status Values

| Status | Description |
|--------|-------------|
| `pending` | Search is queued and waiting to start |
| `processing` | Search is actively running |
| `done` | Search finished - use /get-company-results to retrieve |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Status returned |
| 400 | Invalid Parameter - Missing or invalid request_id |
| 500 | Server Error - Internal error occurred |
