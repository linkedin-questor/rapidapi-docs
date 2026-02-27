---
sidebar_position: 7
title: Get Search Companies Results
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Company Results

`GET /get-search-companies-results`

Get results from a completed company search. Results are paginated with 25 results per page.

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
  --url 'https://api.infoplug.io/get-company-results?request_id=ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o&page=1' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-company-results"
params = {
    "request_id": "ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o",
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
  'https://api.infoplug.io/get-company-results?request_id=ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o&page=1',
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
  "status": "done",
  "request_id": "ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o",
  "page": 1,
  "data": [
    {
      "company_id": "1441",
      "company_name": "Google",
      "linkedin_url": "https://www.linkedin.com/company/google",
      "industry": "Software Development",
      "employee_count": 180000,
      "headquarters": "Mountain View, California",
      "description": "A technology company that specializes in Internet-related services and products."
    },
    {
      "company_id": "1035",
      "company_name": "Microsoft",
      "linkedin_url": "https://www.linkedin.com/company/microsoft",
      "industry": "Software Development",
      "employee_count": 220000,
      "headquarters": "Redmond, Washington",
      "description": "Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge."
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
| `total_pages` | Total number of pages available |
| `data` | Array of company results |
| `data[].company_id` | LinkedIn numeric company ID |
| `data[].company_name` | Company name |
| `data[].linkedin_url` | Company LinkedIn URL |
| `data[].industry` | Industry name |
| `data[].employee_count` | Employee count |
| `data[].headquarters` | Headquarters location |
| `data[].description` | Company description |

## Processing Response

If search is not yet complete, returns:

```json
{
  "status": "processing",
  "request_id": "ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o",
}
```

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Results returned |
| 400 | Invalid Parameter - Missing or invalid request_id or page |
| 500 | Server Error - Internal error occurred |
