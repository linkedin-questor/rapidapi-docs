---
sidebar_position: 2
title: Get Profile Posts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Profile Posts

`GET /get-profile-posts`

Get posts published by a LinkedIn profile with pagination support.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn profile URL |
| `type` | string | No | Type of content: `posts`, `comments`, or `reactions` (default: `posts`) |
| `start` | integer | No | Starting offset for pagination (default: 0) |
| `pagination_token` | string | No | Token for fetching next page of results. Returned in previous response's paging object |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-profile-posts?linkedin_url=https://www.linkedin.com/in/williamhgates&type=posts' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-profile-posts"
params = {
    "linkedin_url": "https://www.linkedin.com/in/williamhgates",
    "type": "posts",
    "start": 0
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
  'https://linkedin-questor.p.rapidapi.com/get-profile-posts?linkedin_url=https://www.linkedin.com/in/williamhgates&type=posts',
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
  "data": [
    {
      "text": "I'm deeply sad to learn of the passing of Dr. Bill Foege...",
      "attributes": [],
      "urn": "7422044750519787520",
      "posted": 7422044750519,
      "num_comments": 331,
      "num_reactions": 3059,
      "num_reposts": 193,
      "time": "1 day ago",
      "poster_linkedin_url": "https://www.linkedin.com/in/williamhgates",
      "poster": {
        "urn": "ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc",
        "first": "Bill",
        "last": "Gates",
        "headline": "Chair, Gates Foundation and Founder, Breakthrough Energy",
        "public_id": "williamhgates",
        "linkedin_url": "https://www.linkedin.com/in/williamhgates",
        "image_url": "https://media.licdn.com/dms/image/v2/..."
      },
      "num_likes": 2420,
      "num_appreciations": 370,
      "num_empathy": 198,
      "num_praises": 46,
      "num_interests": 22,
      "num_entertainments": 3,
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/...",
        "duration": 121033
      },
      "reshared": false,
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7422044750519787520/"
    }
  ],
  "paging": {
    "count": 50,
    "start": 0,
    "pagination_token": "dXJuOmxpOmFjdGl2aXR5OjczOTg4MjcwMzMwNDYzMzEzOTItMTc2NDAxNzgyODIwNg=="
  }
}
```

  </TabItem>
  <TabItem value="400" label="400 Bad Request">

```json
{
  "message": "Bad request: Invalid linkedin_url.",
  "data": null
}
```

  </TabItem>
</Tabs>

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data` | Array of post objects |
| `data[].urn` | Post URN identifier |
| `data[].text` | Post text content |
| `data[].attributes` | Array of text attributes/annotations |
| `data[].time` | Relative time (e.g., "1 day ago") |
| `data[].posted` | Posted timestamp |
| `data[].post_url` | Full URL to the post |
| `data[].poster_linkedin_url` | LinkedIn URL of the post author |
| `data[].num_reactions` | Total reaction count |
| `data[].num_comments` | Comment count |
| `data[].num_reposts` | Repost count |
| `data[].num_likes` | Like reaction count |
| `data[].num_appreciations` | Appreciation reaction count |
| `data[].num_empathy` | Empathy reaction count |
| `data[].num_praises` | Praise reaction count |
| `data[].num_interests` | Interest reaction count |
| `data[].num_entertainments` | Entertainment reaction count |
| `data[].poster` | Author information |
| `data[].poster.urn` | Author URN identifier |
| `data[].poster.first` | First name |
| `data[].poster.last` | Last name |
| `data[].poster.headline` | Profile headline |
| `data[].poster.public_id` | LinkedIn public identifier |
| `data[].poster.linkedin_url` | Profile URL |
| `data[].poster.image_url` | Profile image URL |
| `data[].images` | Array of image URLs |
| `data[].video` | Video info (if any) |
| `data[].video.stream_url` | Video stream URL |
| `data[].video.duration` | Duration in milliseconds |
| `data[].article_title` | Linked article title |
| `data[].article_subtitle` | Article subtitle |
| `data[].article_description` | Article description |
| `data[].article_target_url` | Article link URL |
| `data[].document` | Document info (if any) |
| `data[].document.url` | Document URL |
| `data[].document.page_count` | Number of pages |
| `data[].document.title` | Document title |
| `data[].reshared` | Boolean - is this a reshare |
| `data[].reposted` | Boolean - is this a repost |
| `data[].repost_urn` | URN of the original reposted content |
| `data[].repost_stats` | Stats of the original repost |
| `data[].resharer_comment` | Comment added by the resharer |
| `paging.count` | Number of results returned |
| `paging.start` | Starting offset |
| `paging.pagination_token` | Token for next page |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Posts returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
