---
sidebar_position: 38
title: Google Full Profiles
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Google Full Profiles

`POST /google-full-profiles`

Search for LinkedIn profiles using Google and return enriched profile data.

## Pricing

**2 credits** per request + **1 credit** per profile found.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No* | Person's name |
| `company_name` | string | No* | Company name |
| `job_title` | string | No* | Job title |
| `location` | string | No* | Location |
| `keywords` | string | No* | Additional search keywords |
| `limit` | integer | No | Max profiles to return (1-5, default: 3) |

*At least one search parameter is required.

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request POST \
  --url https://api.infoplug.io/google-full-profiles \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --data '{
    "name": "John Doe",
    "company_name": "Google",
    "job_title": "Software Engineer",
    "limit": 3
  }'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/google-full-profiles"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "name": "John Doe",
    "company_name": "Google",
    "job_title": "Software Engineer",
    "limit": 3
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://api.infoplug.io/google-full-profiles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    name: 'John Doe',
    company_name: 'Google',
    job_title: 'Software Engineer',
    limit: 3
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
  "message": "No profiles match the query",
  "data": []
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success, or "No profiles match the query" |
| `data` | Array of full profile objects (same as /get-profile-details) |
| `data[].linkedin_url` | Profile URL |
| `data[].profile_id` | LinkedIn profile ID |
| `data[].first_name` | First name |
| `data[].last_name` | Last name |
| `data[].full_name` | Full name |
| `data[].headline` | Profile headline |
| `data[].experiences` | Work history array |
| `data[].educations` | Education array |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Results returned |
| 400 | Invalid Parameter - Missing required parameters |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Proxy or timeout error |
