---
sidebar_position: 6
title: Get Recommendations Given
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Recommendations Given

`GET /get-recommendations-given`

Get recommendations that a LinkedIn profile has written for other users.

## Pricing

**1 credit** per call.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn profile URL |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://api.infoplug.io/get-recommendations-given?linkedin_url=https://www.linkedin.com/in/example/' \
  --header 'Authorization: Bearer YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/get-recommendations-given"
params = {
    "linkedin_url": "https://www.linkedin.com/in/example/"
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
  'https://api.infoplug.io/get-recommendations-given?linkedin_url=https://www.linkedin.com/in/example/',
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

```json
{
  "message": "ok",
  "data": [
    {
      "text": "Nida has worked for IMMINENT Digital for almost 2 years and in that time she has proven herself to be an extremely diligent and talented marketing tram member. One of her greatest strengths is her out of the box thinking and a willingness to express an independent point of view.",
      "profile_url": "https://www.linkedin.com/in/nida-amjad/"
    },
    {
      "text": "I have worked with David for some time and he has steadily risen in our organization. Diligent, creative, technology-driven and execution are his hallmarks. He has been a tremendous asset and a major contributor to  our success.",
      "profile_url": "https://www.linkedin.com/in/davidhmerrill/"
    },
    {
      "text": "Eitan was phenomenal to work with. He took the time to listen to what I wanted and his transformation of our company's image, story, and tagline exceeded my expectations. If you're looking for a hardworking and talented creative, you've found him. ",
      "profile_url": "https://www.linkedin.com/in/eitanchitayat/"
    },
    {
      "text": "The go-to lawyer for for creative solutions to complex real estate deals.",
      "profile_url": "https://www.linkedin.com/in/robert-wertheimer-58789010/"
    }
  ]
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data` | Array of recommendation objects |
| `data[].text` | Recommendation text |
| `data[].profile_url` | LinkedIn URL of person who received recommendation |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Recommendations returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
