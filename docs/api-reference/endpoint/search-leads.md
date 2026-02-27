---
sidebar_position: 15
title: Search Leads
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search Leads

`POST /search-leads`

Search for LinkedIn profiles using Sales Navigator filters. This is an asynchronous endpoint that creates a search job.

## How the Process Works

### Step 1: Initiate Search
- Launch your search with specific criteria via this endpoint.
- This endpoint returns a **`request_id`** for tracking progress.
- This step costs **50 credits**, even if the search returns **0 results**.

### Step 2: Monitor Search Progress
- Use the [Check Search Status](/api-reference/endpoint/check-search-status) endpoint to track your search.
- This action is **free of charge**.

### Step 3: Retrieve Results
- Once the search is complete, access the results via the [Get Search Results](/api-reference/endpoint/get-search-results) endpoint.
- Retrieving each result incurs **0.5 credits**.

For tutorials and demo code, see [Automating Lead Searches](/tutorial/search-leads).

## Parameters

You can either provide search filters OR a Sales Navigator URL.

### Option 1: Search Filters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title_keywords` | array | No | Job titles to search for (e.g., `["CEO", "Founder"]`) |
| `title_keywords_exclude` | array | No | Job titles to exclude |
| `current_company_names` | array | No | Current company names |
| `current_company_ids` | array | No | Current company LinkedIn IDs |
| `current_company_ids_exclude` | array | No | Current company IDs to exclude |
| `past_company_names` | array | No | Past company names |
| `past_company_ids` | array | No | Past company LinkedIn IDs |
| `past_company_ids_exclude` | array | No | Past company IDs to exclude |
| `geo_codes` | array | No | Location geo codes |
| `geo_codes_exclude` | array | No | Location geo codes to exclude |
| `industry_codes` | array | No | Industry codes |
| `industry_codes_exclude` | array | No | Industry codes to exclude |
| `school_ids` | array | No | School LinkedIn IDs |
| `school_ids_exclude` | array | No | School IDs to exclude |
| `keywords` | string | No | General search keywords |
| `limit` | integer | No | Max results (1-2500, default: 25) |

### Option 2: Sales Navigator URL

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | LinkedIn Sales Navigator search URL |
| `limit` | integer | No | Max results (1-2500, default: 25) |

See [Understanding Employee Search Filters](/tutorial/lead-search-filters) for all available filters and geo codes.

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request POST \
  --url https://linkedin-questor.p.rapidapi.com/search-leads/search-leads \
  --header 'Content-Type: application/json' \
  --header 'x-rapidapi-key: YOUR_API_KEY' \
  --data '{
    "geo_codes": [103644278],
    "title_keywords": ["CEO", "Founder"],
    "current_company_names": ["Google", "Microsoft"],
    "limit": 25
  }'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/search-leads"
headers = {
    "Content-Type": "application/json",
    "x-rapidapi-key": "YOUR_API_KEY"
}
data = {
    "geo_codes": [103644278],
    "title_keywords": ["CEO", "Founder"],
    "current_company_names": ["Google", "Microsoft"],
    "limit": 25
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://linkedin-questor.p.rapidapi.com/search-leads', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    geo_codes: [103644278],
    title_keywords: ['CEO', 'Founder'],
    current_company_names: ['Google', 'Microsoft'],
    limit: 25
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
  "message": "Use this request_id to check your search with 'Check Search Status' endpoint",
  "request_id": "0bb8360c779317e5f6fc1722a8bd26a1"
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "Lead search job created" |
| `request_id` | Unique ID to track this search |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Search job created |
| 400 | Invalid Parameter - Missing or invalid parameters |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
