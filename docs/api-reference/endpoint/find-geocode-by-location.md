---
sidebar_position: 32
title: Find Geocode by Location
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find Geocode by Location

`GET /find-geocode-by-location`

Find LinkedIn geocode IDs by location name. Use this to get geo codes for search filters.

## Pricing

**1 credit** per call.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location` | string | Yes | Location name to search (e.g., `San Francisco`, `United States`, `California`) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://api.infoplug.io/find-geocode-by-location?location=San+Francisco" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/find-geocode-by-location"
params = {
    "location": "San Francisco"
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
  'https://api.infoplug.io/find-geocode-by-location?location=San%20Francisco',
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

<Tabs groupId="response-status">
  <TabItem value="200" label="200 OK" default>

```json
{
  "message": "ok",
  "data": [
    {
      "name": "San Francisco Bay Area",
      "geocode": "90000084"
    },
    {
      "name": "San Francisco, California, United States",
      "geocode": "102277331"
    },
    {
      "name": "San Francisco County, California, United States",
      "geocode": "100901743"
    },
    {
      "name": "San Francisco Coacalco, México, Mexico",
      "geocode": "102721326"
    },
    {
      "name": "San Francisco, Córdoba, Argentina",
      "geocode": "117034236"
    },
    {
      "name": "San Francisco, Caraga, Philippines",
      "geocode": "104302528"
    },
    {
      "name": "San Francisco Cuautliquixco, México, Mexico",
      "geocode": "103386075"
    },
    {
      "name": "San Francisco Acuautla, México, Mexico",
      "geocode": "106784137"
    },
    {
      "name": "South San Francisco, California, United States",
      "geocode": "103380759"
    },
    {
      "name": "San Francisco Solano, Buenos Aires Province, Argentina",
      "geocode": "107519827"
    }
  ]
}
```

  </TabItem>
</Tabs>

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data` | Array of location matches |
| `data[].name` | Full location name |
| `data[].geocode` | LinkedIn geocode ID |

## Common Geocodes

| Location | Geocode |
|----------|---------|
| United States | 103644278 |
| San Francisco Bay Area | 90000084 |
| New York City | 90000070 |
| Los Angeles | 90000048 |
| London | 90000033 |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Geocodes returned |
| 400 | Invalid Parameter - Missing or invalid location |
| 500 | Server Error - Internal error occurred |

## Usage

Use the `geocode` values from this endpoint in search filters:

- [Search Leads](/api-reference/endpoint/search-leads) - `geo_codes` parameter
- [Search Companies](/api-reference/endpoint/search-companies) - `headquarters_location` parameter
- [Search Jobs](/api-reference/endpoint/search-jobs) - `geo_code` parameter

## Related

- [Finding a Geo Code](/tutorial/find-geocode) - Tutorial on using geocodes
