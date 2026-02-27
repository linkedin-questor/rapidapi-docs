---
sidebar_position: 14
title: Get Company Insights
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Company Insights

`GET /get-company-insights`

Get premium company insights including headcount trends, hiring data, and employee distribution by function. Requires a LinkedIn company ID.

## Pricing

**5 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | integer | Yes | LinkedIn numeric company ID (e.g., 1035 for Microsoft) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-company-insights?company_id=1035' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-company-insights"
params = {
    "company_id": "1035"
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
  'https://linkedin-questor.p.rapidapi.com/get-company-insights?company_id=1035',
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

<Tabs groupId="response-status">
  <TabItem value="200" label="200 OK" default>

```json
{
  "message": "ok",
  "data": {
    "total_employees": 225951,
    "median_employee_tenure": 5.3,
    "headcount_growth": {
      "6m": "-5%",
      "1y": "-6%",
      "2y": "-4%"
    },
    "headcount_growth_by_function": {
      "Support": {
        "6m": "-9%",
        "1y": "-14%"
      },
      "Sales": {
        "6m": "-8%",
        "1y": "-9%"
      },
      "Research": {
        "6m": "-9%",
        "1y": "-6%"
      },
      "Program and Project Management": {
        "6m": "-7%",
        "1y": "-9%"
      },
      "Engineering": {
        "6m": "-2%",
        "1y": "-2%"
      },
      "Consulting": {
        "6m": "0%",
        "1y": "-3%"
      },
      "Business Development": {
        "6m": "-6%",
        "1y": "-8%"
      },
      "Arts and Design": {
        "6m": "-8%",
        "1y": "-10%"
      },
      "Administrative": {
        "6m": "-12%",
        "1y": "-20%"
      },
      "Product Management": {
        "6m": "-9%",
        "1y": "-12%"
      },
      "Operations": {
        "6m": "-5%",
        "1y": "-6%"
      },
      "Marketing": {
        "6m": "-6%",
        "1y": "-8%"
      },
      "Information Technology": {
        "6m": "-6%",
        "1y": "-8%"
      },
      "Human Resources": {
        "6m": "0%",
        "1y": "-10%"
      }
    },
    "headcount_by_function": {
      "Engineering": {
        "count": 91605,
        "percentage": 41
      },
      "Information Technology": {
        "count": 27288,
        "percentage": 12
      },
      "Sales": {
        "count": 17722,
        "percentage": 8
      },
      "Program and Project Management": {
        "count": 16952,
        "percentage": 8
      },
      "Business Development": {
        "count": 8363,
        "percentage": 4
      },
      "Product Management": {
        "count": 7924,
        "percentage": 4
      },
      "Operations": {
        "count": 8125,
        "percentage": 4
      },
      "Support": {
        "count": 4574,
        "percentage": 2
      },
      "Research": {
        "count": 3920,
        "percentage": 2
      },
      "Consulting": {
        "count": 3588,
        "percentage": 2
      },
      "Arts and Design": {
        "count": 5412,
        "percentage": 2
      },
      "Administrative": {
        "count": 4204,
        "percentage": 2
      },
      "Marketing": {
        "count": 4378,
        "percentage": 2
      },
      "Human Resources": {
        "count": 3719,
        "percentage": 2
      }
    },
    "headcount_by_month": [
      {
        "date": "2023-12-1",
        "employee_count": 235318
      },
      {
        "date": "2024-1-1",
        "employee_count": 236652
      },
      {
        "date": "2024-2-1",
        "employee_count": 237243
      },
      {
        "date": "2024-3-1",
        "employee_count": 237822
      },
      {
        "date": "2024-4-1",
        "employee_count": 238819
      },
      {
        "date": "2024-5-1",
        "employee_count": 241606
      },
      {
        "date": "2024-6-1",
        "employee_count": 243308
      },
      {
        "date": "2024-7-1",
        "employee_count": 243921
      },
      {
        "date": "2024-8-1",
        "employee_count": 242211
      },
      {
        "date": "2024-9-1",
        "employee_count": 242257
      },
      {
        "date": "2024-10-1",
        "employee_count": 242181
      },
      {
        "date": "2024-11-1",
        "employee_count": 242159
      },
      {
        "date": "2024-12-1",
        "employee_count": 240792
      },
      {
        "date": "2025-1-1",
        "employee_count": 240762
      },
      {
        "date": "2025-2-1",
        "employee_count": 240366
      },
      {
        "date": "2025-3-1",
        "employee_count": 239042
      },
      {
        "date": "2025-4-1",
        "employee_count": 238274
      },
      {
        "date": "2025-5-1",
        "employee_count": 238145
      },
      {
        "date": "2025-6-1",
        "employee_count": 237194
      },
      {
        "date": "2025-7-1",
        "employee_count": 233837
      },
      {
        "date": "2025-8-1",
        "employee_count": 230230
      },
      {
        "date": "2025-9-1",
        "employee_count": 228099
      },
      {
        "date": "2025-10-1",
        "employee_count": 226929
      },
      {
        "date": "2025-11-1",
        "employee_count": 226584
      },
      {
        "date": "2025-12-1",
        "employee_count": 225951
      }
    ],
    "new_hires": [
      {
        "date": "2023-12",
        "senior_hires": 0,
        "total_hires": 1653
      },
      {
        "date": "2024-1",
        "senior_hires": 0,
        "total_hires": 3564
      },
      {
        "date": "2024-2",
        "senior_hires": 0,
        "total_hires": 2409
      },
      {
        "date": "2024-3",
        "senior_hires": 0,
        "total_hires": 2623
      },
      {
        "date": "2024-4",
        "senior_hires": 0,
        "total_hires": 3068
      },
      {
        "date": "2024-5",
        "senior_hires": 0,
        "total_hires": 4945
      },
      {
        "date": "2024-6",
        "senior_hires": 0,
        "total_hires": 4247
      },
      {
        "date": "2024-7",
        "senior_hires": 3,
        "total_hires": 4262
      },
      {
        "date": "2024-8",
        "senior_hires": 5,
        "total_hires": 3494
      },
      {
        "date": "2024-9",
        "senior_hires": 15,
        "total_hires": 3703
      },
      {
        "date": "2024-10",
        "senior_hires": 17,
        "total_hires": 2991
      },
      {
        "date": "2024-11",
        "senior_hires": 8,
        "total_hires": 2329
      },
      {
        "date": "2024-12",
        "senior_hires": 4,
        "total_hires": 1858
      },
      {
        "date": "2025-1",
        "senior_hires": 17,
        "total_hires": 3199
      },
      {
        "date": "2025-2",
        "senior_hires": 12,
        "total_hires": 2141
      },
      {
        "date": "2025-3",
        "senior_hires": 13,
        "total_hires": 2120
      },
      {
        "date": "2025-4",
        "senior_hires": 7,
        "total_hires": 2133
      },
      {
        "date": "2025-5",
        "senior_hires": 7,
        "total_hires": 3458
      },
      {
        "date": "2025-6",
        "senior_hires": 8,
        "total_hires": 2663
      },
      {
        "date": "2025-7",
        "senior_hires": 9,
        "total_hires": 2727
      },
      {
        "date": "2025-8",
        "senior_hires": 7,
        "total_hires": 2074
      },
      {
        "date": "2025-9",
        "senior_hires": 6,
        "total_hires": 1996
      },
      {
        "date": "2025-10",
        "senior_hires": 12,
        "total_hires": 1526
      },
      {
        "date": "2025-11",
        "senior_hires": 7,
        "total_hires": 1598
      },
      {
        "date": "2025-12",
        "senior_hires": 2,
        "total_hires": 374
      }
    ],
    "job_openings": {
      "job_openings_by_function": [],
      "job_openings_growth": {},
      "job_openings_growth_by_function": {}
    }
  }
}
```

  </TabItem>
</Tabs>

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.total_employees` | Current total employee count |
| `data.median_employee_tenure` | Median tenure in years |
| `data.headcount_growth` | Overall growth percentages (6m, 1y, 2y) |
| `data.headcount_growth_by_function` | Growth by department |
| `data.headcount_by_function` | Employee distribution by department |
| `data.headcount_by_month` | Array of monthly headcount data |
| `data.new_hires` | Array of monthly hiring data |
| `data.job_openings` | Job opening data by function |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Insights returned |
| 400 | Invalid Parameter - Missing or invalid `company_id` |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
