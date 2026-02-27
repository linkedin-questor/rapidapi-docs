---
sidebar_position: 8
title: Get Company by URL
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Company by URL

`GET /get-company-by-url`

<!-- Get detailed company information by LinkedIn company ID, company URL, or domain. -->
Get detailed company information by LinkedIn company URL.

## Pricing

**1 credit** per request.

## Parameters

Provide **one** of the following parameters:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | One required | LinkedIn company URL (e.g., `https://www.linkedin.com/company/apple/`) |
<!-- | `company_id` | string | One required | LinkedIn company ID (e.g., `162479`) | -->
<!-- | `domain` | string | One required | Company domain (e.g., `apple.com`, `www.apple.com`, or `https://apple.com`) | -->

<!-- :::info Domain Normalization
The API automatically normalizes domains by removing protocols (`http://`, `https://`), `www.` prefix, and trailing paths.
::: -->

<!-- ## Example Requests

<Tabs groupId="lookup-type">
  <TabItem value="domain" label="By Domain" default>

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://api.infoplug.io/get-company-details?domain=apple.com' \
  --header 'Authorization: Bearer YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-company-details"
params = {
    "domain": "apple.com"
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
  'https://api.infoplug.io/get-company-details?domain=apple.com',
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

  </TabItem>
  <TabItem value="company_id" label="By Company ID">

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://api.infoplug.io/get-company-details?company_id=162479' \
  --header 'Authorization: Bearer YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-company-details"
params = {
    "company_id": "162479"
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
  'https://api.infoplug.io/get-company-details?company_id=162479',
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

  </TabItem>
  <TabItem value="linkedin_url" label="By LinkedIn URL">

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://api.infoplug.io/get-company-details?linkedin_url=https://www.linkedin.com/company/apple/' \
  --header 'Authorization: Bearer YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-company-details"
params = {
    "linkedin_url": "https://www.linkedin.com/company/apple/"
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
  'https://api.infoplug.io/get-company-details?linkedin_url=https://www.linkedin.com/company/apple/',
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

  </TabItem>
</Tabs> -->

## Example Response

<Tabs groupId="response-status">
  <TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "affiliated_companies": [],
    "company_id": "162479",
    "company_name": "Apple",
    "description": "We’re a diverse collective of thinkers and doers, continually reimagining what’s possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people’s lives. Including your own.\n\nApple is an equal opportunity employer that is committed to inclusion and diversity. Visit apple.com/careers to learn more.",
    "domain": "apple.com",
    "email": "",
    "employee_count": 169120,
    "employee_range": "10001+",
    "follower_count": 18114873,
    "funding_info": {
      "crunchbase_url": "",
      "last_funding_round_amount": null,
      "last_funding_round_currency": null,
      "last_funding_round_month": null,
      "last_funding_round_type": null,
      "last_funding_round_year": null,
      "num_funding_rounds": null
    },
    "hq_address_line1": "1 Apple Park Way",
    "hq_address_line2": "",
    "hq_city": "Cupertino",
    "hq_country": "US",
    "hq_full_address": "1 Apple Park Way, Cupertino, California 95014, US",
    "hq_postalcode": "95014",
    "hq_region": "California",
    "industries": [
      "Computers and Electronics Manufacturing"
    ],
    "linkedin_url": "https://www.linkedin.com/company/apple/",
    "locations": [
      {
        "city": "Cupertino",
        "country": "US",
        "full_address": "1 Apple Park Way, Cupertino, California 95014, US",
        "is_headquarter": true,
        "line1": "1 Apple Park Way",
        "line2": "",
        "region": "California",
        "zipcode": "95014"
      }
    ],
    "logo_url": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_400_400/company-logo_400_400/0/1630637844948/apple_logo?e=1773878400&v=beta&t=LK-WuYrRa6VVCXdtRSSway7KGern4uoEh5QGnQ6ZyJ8",
    "phone": "",
    "specialties": "Innovative Product Development, World-Class Operations, Retail, Telephone Support",
    "tagline": "",
    "website": "http://www.apple.com/careers",
    "year_founded": 1976
  },
  "message": "ok"
}
```

  </TabItem>
</Tabs>

## Response Fields

| Field | Description |
|-------|-------------|
| `company_id` | LinkedIn numeric company ID |
| `linkedin_url` | Full LinkedIn company URL |
| `company_name` | Company display name |
| `tagline` | Company tagline/slogan |
| `description` | Company description/about text |
| `industries` | Array of industry names |
| `specialties` | Comma-separated list of specialties |
| `employee_count` | Approximate employee count |
| `employee_range` | Employee range string (e.g., "10001+") |
| `year_founded` | Year company was founded |
| `follower_count` | Number of LinkedIn followers |
| `website` | Company website URL |
| `domain` | Company domain |
| `phone` | Company phone number |
| `email` | Company email address |
| `logo_url` | Company logo image URL |
| `funding_info` | Funding information (crunchbase_url, num_funding_rounds, last_funding_round_type, etc.) |
| `hq_full_address` | Full headquarters address |
| `hq_city` | City |
| `hq_region` | State/region |
| `hq_country` | Country code |
| `locations` | Array of office locations |
| `affiliated_companies` | Array of related companies |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Company data returned |
| 400 | Invalid Parameter - Missing required parameter |
| 404 | Not Found - Company not found on LinkedIn |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
