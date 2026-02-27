---
sidebar_position: 21
title: Get Job Details
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Job Details

`GET /get-job-details`

Get full details for a specific job posting.

## Pricing

**1 credit** per call.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_url` | string | Yes | LinkedIn job posting URL |
| `include_skills` | string | No | Include required skills (`"true"` or `"false"`, default: `"false"`) |
| `include_hiring_team` | string | No | Include hiring team (`"true"` or `"false"`, default: `"false"`) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-job-details?job_url=https://www.linkedin.com/jobs/view/4093993221' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-job-details"
params = {
    "job_url": "https://www.linkedin.com/jobs/view/4093993221"
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
  'https://linkedin-questor.p.rapidapi.com/get-job-details?job_url=https://www.linkedin.com/jobs/view/4093993221',
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
  "message": "ok",
  "data": {
    "job_id": "4093993221",
    "job_url": "https://www.linkedin.com/jobs/view/4093993221",
    "title": "Senior Software Engineer",
    "description": "<p>We are looking for a Senior Software Engineer to join our team...</p>",
    "employment_type": "Full-time",
    "seniority_level": "Mid-Senior level",
    "industry": "Software Development",
    "job_function": "Engineering",
    "company_name": "TechCorp",
    "company_id": "12345678",
    "company_url": "https://www.linkedin.com/company/techcorp/",
    "company_logo": "https://media.licdn.com/dms/image/...",
    "location": "San Francisco, CA",
    "workplace_type": "Hybrid",
    "posted": "2 weeks ago",
    "applicants": 150,
    "salary_min": 150000,
    "salary_max": 200000,
    "salary_currency": "USD"
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data.job_id` | LinkedIn job ID |
| `data.job_url` | Full job posting URL |
| `data.title` | Job title |
| `data.description` | Full job description (HTML) |
| `data.employment_type` | Full-time, Part-time, Contract, etc. |
| `data.seniority_level` | Experience level required |
| `data.company_name` | Company name |
| `data.company_id` | LinkedIn company ID |
| `data.company_url` | Company LinkedIn URL |
| `data.location` | Job location |
| `data.workplace_type` | On-site, Remote, Hybrid |
| `data.posted` | When job was posted |
| `data.applicants` | Number of applicants |
| `data.salary_min` | Minimum salary (if available) |
| `data.salary_max` | Maximum salary (if available) |
| `data.skills` | Array of required skills (if include_skills=true) |
| `data.hiring_team` | Array of hiring team (if include_hiring_team=true) |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Job details returned |
| 400 | Invalid Parameter - Missing or invalid `job_url` |
| 404 | Not Found - Job does not exist |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |

## Related Endpoints

- [Search Jobs](/api-reference/endpoint/search-jobs) - Search for job postings
