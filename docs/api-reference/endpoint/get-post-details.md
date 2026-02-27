---
sidebar_position: 28
title: Get Post Details
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Post Details

`GET /get-post-details`

Get detailed information for a specific LinkedIn post.

## Pricing

**1 credit** per call.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `urn` | string | Yes | Post URN (numeric ID, e.g., `7654321098765432100`) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-post-details?urn=7654321098765432100' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-post-details"
params = {
    "urn": "7654321098765432100"
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
  'https://linkedin-questor.p.rapidapi.com/get-post-details?urn=7654321098765432100',
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
    "urn": "7654321098765432100",
    "author": {
      "name": "John Doe",
      "headline": "Software Engineer at Tech Corp",
      "linkedin_url": "https://www.linkedin.com/in/johndoe/",
      "profile_picture": "https://media.licdn.com/..."
    },
    "text": "Excited to share my latest project...",
    "posted_at": "2024-01-15T10:30:00Z",
    "reactions_count": 500,
    "comments_count": 75,
    "reposts_count": 25,
    "media": [
      {
        "type": "image",
        "url": "https://media.licdn.com/..."
      }
    ]
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.urn` | Post URN identifier |
| `data.text` | Post text content |
| `data.time` | Relative time string |
| `data.posted` | Posted timestamp |
| `data.num_reactions` | Total reaction count |
| `data.num_comments` | Comment count |
| `data.num_reposts` | Repost count |
| `data.num_likes` | Like count |
| `data.num_empathy` | Empathy reaction count |
| `data.num_appreciations` | Appreciation count |
| `data.poster` | Author information (first, last, headline, linkedin_url, image_url) |
| `data.images` | Array of image URLs |
| `data.video` | Video info (stream_url, duration) |
| `data.document` | Document info (url, page_count, title) |
| `data.article_title` | Linked article title |
| `data.article_target_url` | Article link URL |
| `data.reshared` | Boolean - is this a reshare |
| `data.post_url` | Full URL to the post |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Post details returned |
| 400 | Invalid Parameter - Missing or invalid `urn` |
| 404 | Not Found - Post not found |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |

## Related Endpoints

- [Search Posts](/api-reference/endpoint/search-posts) - Search for posts
- [Get Post Reactions](/api-reference/endpoint/get-post-reactions) - Get reactions on a post
- [Get Post Comments](/api-reference/endpoint/get-post-comments) - Get comments on a post
