---
sidebar_position: 5
title: Search Companies
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search Companies

`POST /search-companies`

Search for companies using Sales Navigator filters. This is an asynchronous endpoint that creates a search job.

## How the Process Works

### Step 1: Initiate Search
- Use this endpoint to search companies with your criteria.
- This endpoint returns a **`request_id`** for tracking progress.
- This step costs **25 credits**, even if the search returns **0 results**.

### Step 2: Monitor Search Progress
- Use the [Check Search Companies Status](/api-reference/endpoint/check-search-companies-status) endpoint to track your search.
- This action is **free of charge**.

### Step 3: Retrieve Results
- Once the search is complete, access the results via the [Get Search Companies Results](/api-reference/endpoint/get-search-companies-results) endpoint.
- Retrieving each company incurs **0.5 credits**.

For tutorials and demo code, see [Automating Company Searches](/tutorial/search-companies).

## Parameters

You can either provide search filters OR a Sales Navigator URL.

### Option 1: Search Filters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `industry_codes` | array | No | Industry IDs to include |
| `industry_codes_exclude` | array | No | Industry IDs to exclude |
| `company_headcounts` | array | No | `1-10`, `11-50`, `51-200`, `201-500`, `501-1000`, `1001-5000`, `5001-10000`, `10001+` |
| `company_headcount_growth` | object | No | Growth percentage range: `{ "min": 5, "max": 50 }` |
| `headquarters_location` | array | No | Location IDs to include |
| `headquarters_location_exclude` | array | No | Location IDs to exclude |
| `hiring_on_linkedin` | string | No | Filter by hiring status (`"true"` or `"false"`) |
| `recent_activities` | array | No | Activity type filters |
| `keywords` | string | No | Search keywords |
| `limit` | integer | No | Max results (1-1000, default: 25) |

### Option 2: Sales Navigator URL

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | LinkedIn Sales Navigator search URL |
| `limit` | integer | No | Max results (1-1000, default: 25) |

See [Understanding Company Search Filters](/tutorial/company-search-filters) for all available filters.

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://linkedin-questor.p.rapidapi.com/search-companies" \
  -H "x-rapidapi-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"keywords":"artificial intelligence startup"}'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/search-companies"
headers = {
    "Content-Type": "application/json",
    "x-rapidapi-key": "YOUR_API_KEY"
}
data = {
    "keywords": "artificial intelligence startup"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://linkedin-questor.p.rapidapi.com/search-companies', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    keywords: 'artificial intelligence startup'
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
  "message": "Found 100/100 companies. Please use 'Get Search Companies Results' endpoint to get your data!",
  "search_params": {"keywords":"artificial intelligence startup"},
  "status": "pending"
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "Company search job created" |
| `request_id` | Unique ID to track this search |
| `status` | "pending" - search is queued |
| `limit` | Requested maximum results |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Search job created |
| 400 | Invalid Parameter - Missing or invalid parameters |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |


