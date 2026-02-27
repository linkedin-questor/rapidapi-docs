---
sidebar_position: 3
title: Check Search Status
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Check Search Status

`GET /check-search-status`

Check the status of a lead search job using the `request_id` from the [Search Leads](/api-reference/endpoint/search-leads) endpoint.

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
  --url 'https://linkedin-questor.p.rapidapi.com/check-search-status?request_id=dd1b29063de8927b31fa523d36432b61' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/check-search-status"
params = {
    "request_id": "dd1b29063de8927b31fa523d36432b61"
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
  'https://linkedin-questor.p.rapidapi.com/check-search-status?request_id=dd1b29063de8927b31fa523d36432b61',
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
  "employees_scraped_so_far": 6,
  "message": "Found 6/6 employees. Please use 'Get Search Results' endpoint to get your data!",
  "search_params": {
    "current_company_ids": [
      "71647830"
    ],
    "functions": [
      "Accounting",
      "Finance",
      "Operations"
    ],
    "seniority_levels": [
      "Vice President",
      "Director"
    ]
  },
  "status": "done",
  "total_count": 6
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `status` | Current status: "pending", "processing", "done", "failed" |
| `message` | Status message |
| `total_count` | Total results available on LinkedIn (null if pending) |
| `employees_scraped_so_far` | Number of results scraped so far |

## Status Values

| Status | Description |
|--------|-------------|
| `pending` | Search is queued and waiting to start |
| `processing` | Search is actively running |
| `done` | Search finished - use /get-search-results to retrieve |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Status returned |
| 400 | Invalid Parameter - Missing or invalid request_id |
| 500 | Server Error - Internal error occurred |
