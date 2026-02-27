---
sidebar_position: 17
title: Get Search Results
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Search Results

`GET /get-search-results`

Get results from a completed lead search. Results are paginated with 25 results per page.

## Pricing

**0.5 credits** per result returned.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `request_id` | string | Yes | The request ID from search initiation |
| `page` | integer | No | Page number for pagination (default: 1, min: 1) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-search-results?request_id=0bb8360c779317e5f6fc1722a8bd26a1&page=1' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-search-results"
params = {
    "request_id": "0bb8360c779317e5f6fc1722a8bd26a1",
    "page": 1
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
  'https://linkedin-questor.p.rapidapi.com/get-search-results?request_id=0bb8360c779317e5f6fc1722a8bd26a1&page=1',
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
  "request_id": "0bb8360c779317e5f6fc1722a8bd26a1",
  "page": 1,
  "total_count": 124,
  "message": "Showing 1 of 2 pages",
  "data": [
    {
      "profile_id": "27559820",
      "first": "Lin",
      "last": "Ma",
      "full_name": "Lin Ma",
      "region": "Mountain View, California, United States",
      "company_id": "1441",
      "company_name": "Google",
      "title": "Staff Software Engineer",
      "summary": "Machine Learning Scientist",
      "sn_url": "https://www.linkedin.com/sales/people/ACwAAAGkh4wBlTljXxcZw7Pd4YrdoVUwV2kXBRE,NAME_SEARCH,fqpC"
    },
    {
      "profile_id": "1429733",
      "first": "Ming-Hwa",
      "last": "Wang",
      "full_name": "Ming-Hwa Wang",
      "region": "San Jose, California, United States",
      "company_id": "1441",
      "company_name": "Google",
      "title": "Software Engineer Manager",
      "summary": "Engineering and data science leader",
      "sn_url": "https://www.linkedin.com/sales/people/ACwAAAAV0OUB2WL0y53DJ-OiG9YV8hb5jDcqCkk,NAME_SEARCH,F2by"
    }
  ]
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `status` | "done" when results are ready, "processing" if not complete |
| `request_id` | The search request ID |
| `page` | Current page number |
| `data` | Array of lead results |
| `data[].profile_id` | LinkedIn numeric profile ID |
| `data[].first` | First name |
| `data[].last` | Last name |
| `data[].full_name` | Full display name |
| `data[].region` | Location/region |
| `data[].company_id` | Current company LinkedIn ID |
| `data[].company_name` | Current company name |
| `data[].title` | Current job title |
| `data[].summary` | Profile summary/headline |
| `data[].sn_url` | Sales Navigator profile URL |

## Processing Response

If search is not yet complete, returns:

```json
{
  "status": "processing",
  "request_id": "0bb8360c779317e5f6fc1722a8bd26a1",
  "data": []
}
```

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Results returned |
| 400 | Invalid Parameter - Missing or invalid request_id or page |
| 500 | Server Error - Internal error occurred |
