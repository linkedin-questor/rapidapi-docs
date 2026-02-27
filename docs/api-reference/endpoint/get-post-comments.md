---
sidebar_position: 27
title: Get Post Comments
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Post Comments

`GET /get-post-comments`

Get comments on a LinkedIn post with pagination.

## Pricing

**1 credit** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urn` | string | Yes | LinkedIn post URN identifier |
| `sort` | string | No | Sort order: `RELEVANCE` or `RECENT` (default: RELEVANCE) |
| `page` | integer | No | Page number for pagination (default: 0) |
| `pagination_token` | string | No | Token for fetching next page of results |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-post-comments?post_urn=urn:li:activity:1234567890' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-post-comments"
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
  'https://linkedin-questor.p.rapidapi.com/get-post-comments?post_urn=urn:li:activity:1234567890',
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
    "comments": [
      {
        "commenter_name": "Bob Johnson",
        "commenter_linkedin_url": "https://www.linkedin.com/in/bobjohnson/",
        "commenter_headline": "Software Engineer at Startup Inc",
        "text": "Great insights! Thanks for sharing.",
        "posted_at": "2024-01-15T12:30:00Z",
        "reactions_count": 10,
        "replies_count": 2
      }
    ],
    "paging": {
      "start": 0,
      "count": 50,
      "total": 75
    }
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data` | Array of comment objects |
| `data[].text` | Comment text |
| `data[].time` | Relative time string |
| `data[].commenter_name` | Commenter's full name |
| `data[].commenter_headline` | Profile headline |
| `data[].commenter_linkedin_url` | Profile URL |
| `data[].commenter_image_url` | Profile image URL |
| `data[].num_likes` | Likes on the comment |
| `data[].replies` | Array of reply comments |
| `paging.pagination_token` | Token for next page |
| `paging.has_more` | Boolean - more results available |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Comments returned |
| 400 | Invalid Parameter - Missing urn or invalid sort |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |

## Related Endpoints

- [Search Posts](/api-reference/endpoint/search-posts) - Search for posts
- [Get Post Reactions](/api-reference/endpoint/get-post-reactions) - Get reactions on a post
