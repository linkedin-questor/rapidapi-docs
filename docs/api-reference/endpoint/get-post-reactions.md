---
sidebar_position: 26
title: Get Post Reactions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Post Reactions

`GET /get-post-reactions`

Get reactions (likes, comments, etc.) on a LinkedIn post, filtered by reaction type.

## Pricing

**1 credit** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urn` | string | Yes | LinkedIn post URN identifier |
| `type` | string | No | Reaction type: `LIKE`, `PRAISE`, `APPRECIATION`, `EMPATHY`, `INTEREST`, `ENTERTAINMENT` (default: LIKE) |
| `page` | integer | No | Page number for pagination (default: 0) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-post-reactions?post_urn=urn:li:activity:1234567890' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-post-reactions"
params = {
    "post_urn": "urn:li:activity:1234567890"
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
  'https://linkedin-questor.p.rapidapi.com/get-post-reactions?post_urn=urn:li:activity:1234567890',
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
  "data": {
    "reactions": [
      {
        "name": "Jane Smith",
        "linkedin_url": "https://www.linkedin.com/in/janesmith/",
        "headline": "Product Manager at Tech Corp",
        "reaction_type": "LIKE"
      }
    ],
    "paging": {
      "start": 0,
      "count": 100,
      "total": 500
    }
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data` | Array of reaction objects |
| `data[].first_name` | Reactor's first name |
| `data[].last_name` | Reactor's last name |
| `data[].headline` | Profile headline |
| `data[].linkedin_url` | Profile URL |
| `data[].profile_image_url` | Profile image URL |
| `data[].reaction_type` | Type of reaction given |

## Reaction Types

| Type | Description |
|------|-------------|
| `LIKE` | Standard like |
| `PRAISE` | Celebrate/praise reaction |
| `APPRECIATION` | Support/appreciation reaction |
| `EMPATHY` | Love/empathy reaction |
| `INTEREST` | Insightful/curious reaction |
| `ENTERTAINMENT` | Funny reaction |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Reactions returned |
| 400 | Invalid Parameter - Missing urn or invalid type |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |

## Related Endpoints

- [Search Posts](/api-reference/endpoint/search-posts) - Search for posts
- [Get Post Comments](/api-reference/endpoint/get-post-comments) - Get comments on a post
