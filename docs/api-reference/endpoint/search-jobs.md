---
sidebar_position: 20
title: Search Jobs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search Jobs

`POST /search-jobs`

Search for LinkedIn job postings with various filters including location, experience level, remote options, and more.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `keywords` | string | No | Job search keywords |
| `geo_code` | integer | No | LinkedIn geocode for location filter. Use /find-geocode-by-location to find codes. Default: 92000000 (worldwide) |
| `date_posted` | string | No | When jobs were posted: `any_time`, `Past 24 hours`, `Past week`, `Past month` (default: `any_time`) |
| `experience_levels` | array | No | Experience levels: `Internship`, `Entry level`, `Associate`, `Mid-Senior level`, `Director`, `Executive` |
| `onsite_remotes` | array | No | Work location types: `On-site`, `Remote`, `Hybrid` |
| `industry_code` | string | No | LinkedIn industry code |
| `company_id` | string | No | Filter by specific company ID |
| `function_id` | string | No | Job function ID |
| `title_id` | string | No | Job title ID |
| `easy_apply` | string | No | Filter for Easy Apply jobs only (`"true"` or `"false"`) |
| `under_10_applicants` | string | No | Filter for jobs with under 10 applicants (`"true"` or `"false"`) |
| `sort_by` | string | No | Sort order: `most_relevant`, `most_recent` (default: `most_relevant`) |
| `start` | integer | No | Starting offset for pagination (default: 0) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request POST \
  --url 'https://linkedin-questor.p.rapidapi.com/search-jobs' \
  --header 'x-rapidapi-key: YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "keywords": "software engineer",
    "geo_code": 103644278,
    "date_posted": "Past week"
  }'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/search-jobs"
headers = {
    "x-rapidapi-key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "keywords": "software engineer",
    "geo_code": 103644278,
    "date_posted": "Past week"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://linkedin-questor.p.rapidapi.com/search-jobs', {
  method: 'POST',
  headers: {
    'x-rapidapi-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    keywords: 'software engineer',
    geo_code: 103644278,
    date_posted: 'Past week'
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
  "message": "ok",
  "data": [
    {
      "job_id": "4093993221",
      "job_url": "https://www.linkedin.com/jobs/view/4093993221",
      "job_title": "Senior Software Engineer",
      "company_name": "Google",
      "company_linkedin_url": "https://www.linkedin.com/company/google/",
      "company_logo": "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380",
      "location": "Mountain View, CA (Hybrid)",
      "posted": "1 week ago",
      "easy_apply": true
    },
    {
      "job_id": "4095123456",
      "job_url": "https://www.linkedin.com/jobs/view/4095123456",
      "job_title": "Software Engineer II",
      "company_name": "Microsoft",
      "company_linkedin_url": "https://www.linkedin.com/company/microsoft/",
      "company_logo": "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_100_100/company-logo_100_100/0/1630652622688",
      "location": "Redmond, WA (Remote)",
      "posted": "3 days ago",
      "easy_apply": false
    },
    {
      "job_id": "4098765432",
      "job_url": "https://www.linkedin.com/jobs/view/4098765432",
      "job_title": "Full Stack Engineer",
      "company_name": "Meta",
      "company_linkedin_url": "https://www.linkedin.com/company/meta/",
      "company_logo": "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_100_100/company-logo_100_100/0/1636138754252",
      "location": "Menlo Park, CA (On-site)",
      "posted": "5 days ago",
      "easy_apply": true
    }
  ],
  "total": 15234
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `total` | Total number of jobs matching criteria |
| `data` | Array of job listings |
| `data[].job_id` | LinkedIn job ID |
| `data[].job_url` | Job posting URL |
| `data[].job_title` | Job title |
| `data[].company_name` | Company name |
| `data[].company_linkedin_url` | Company LinkedIn URL |
| `data[].company_logo` | Company logo URL |
| `data[].location` | Job location with work type |
| `data[].posted` | When job was posted |
| `data[].easy_apply` | Boolean - Easy Apply available |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Jobs returned |
| 400 | Invalid Parameter - Missing required parameters |
| 500 | Server Error - Internal error occurred |

## Related Endpoints

- [Get Job Details](/api-reference/endpoint/get-job-details) - Get full details for a specific job
- [Find Geocode by Location](/api-reference/endpoint/find-geocode-by-location) - Find geo codes for location filtering
