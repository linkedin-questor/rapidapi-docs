---
sidebar_position: 1
title: Get Personal Profile
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Profile Details

`GET /get-personal-profile`

Get detailed LinkedIn profile information including work history, education, skills, and current position with company data.

## Pricing

**Base cost:** 1 credit

**Additional costs:**
- `include_skills=true`: +0.5 credits
- `include_certifications=true`: +0.5 credits

**Examples:**
- Basic profile: 1 credit
- Profile with skills: 1.5 credits
- Profile with certifications: 1.5 credits
- Profile with skills + certifications: 2 credits

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn profile URL or Sales Navigator lead URL. Formats: `/in/username/`, `/in/ACoAAA...` (URN), `/sales/lead/ACwAAA...` |
| `include_skills` | string | No | Include skills list in response. Values: `"true"` or `"false"` (default). Cost: +0.5 credits |
| `include_certifications` | string | No | Include certifications list in response. Values: `"true"` or `"false"` (default). Cost: +0.5 credits |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://linkedin-questor.p.rapidapi.com/get-personal-profile?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcjfollini%2F&include_skills=true" \
  -H "x-rapidapi-key: YOUR_API_KEY"
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-personal-profile"
params = {
    "linkedin_url": "https://www.linkedin.com/in/cjfollini/",
    "include_skills": "true"
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
  'https://linkedin-questor.p.rapidapi.com/get-personal-profile?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcjfollini%2F&include_skills=true',
  {
    headers: {
      "x-rapidapi-key": "YOUR_API_KEY"
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
    "about": "Chair of the Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.",
    "city": "Seattle",
    "company": "Gates Foundation",
    "company_description": "Guided by the belief that every life has equal value, the Gates Foundation works to help all people lead healthy, productive lives. In developing countries, we work with partners to create impactful solutions so that people can take charge of their futures and achieve their full potential. In the United States, we aim to ensure that everyone—especially those with the fewest resources—has access to the opportunities needed to succeed in school and life. Based in Seattle, Washington, the foundation is led by CEO Mark Suzman, under the direction of Bill Gates and our governing board.   ",
    "company_domain": "gatesfoundation.org",
    "company_employee_count": 4174,
    "company_employee_range": "1001-5000",
    "company_industry": "Non-profit Organizations",
    "company_linkedin_url": "https://www.linkedin.com/company/gates-foundation",
    "company_logo_url": "https://media.licdn.com/dms/image/v2/D560BAQEgMqqFTd40Tg/company-logo_400_400/company-logo_400_400/0/1736784969376/bill__melinda_gates_foundation_logo?e=1773878400&v=beta&t=HgHQS9RXwjv7NJnvXF5svB-_TgR7O1xFGoeNrO-gmpc",
    "company_website": "https://www.gatesfoundation.org/about/careers",
    "company_year_founded": "",
    "connection_count": 8,
    "country": "United States",
    "current_company_join_month": null,
    "current_company_join_year": 2000,
    "current_job_duration": "26 yrs 2 mos",
    "educations": [
      {
        "activities": "",
        "date_range": "1973 - 1975",
        "degree": "",
        "end_month": "",
        "end_year": 1975,
        "field_of_study": "",
        "school": "Harvard University",
        "school_id": "1646",
        "school_linkedin_url": "https://www.linkedin.com/company/1646/",
        "school_logo_url": "",
        "start_month": "",
        "start_year": 1973
      },
      {
        "activities": "",
        "date_range": "",
        "degree": "",
        "end_month": "",
        "end_year": "",
        "field_of_study": "",
        "school": "Lakeside School",
        "school_id": "30288",
        "school_linkedin_url": "https://www.linkedin.com/company/30288/",
        "school_logo_url": "",
        "start_month": "",
        "start_year": ""
      }
    ],
    "email": "",
    "experiences": [
      {
        "company": "Gates Foundation",
        "company_id": "8736",
        "company_linkedin_url": "https://www.linkedin.com/company/8736",
        "company_logo_url": "",
        "date_range": "2000 - Present",
        "description": "",
        "duration": "26 yrs 2 mos",
        "end_month": "",
        "end_year": "",
        "is_current": true,
        "job_type": "",
        "location": "",
        "skills": "",
        "start_month": "",
        "start_year": 2000,
        "title": "Co-chair"
      },
      {
        "company": "Breakthrough Energy ",
        "company_id": "19141006",
        "company_linkedin_url": "https://www.linkedin.com/company/19141006",
        "company_logo_url": "",
        "date_range": "2015 - Present",
        "description": "",
        "duration": "11 yrs 2 mos",
        "end_month": "",
        "end_year": "",
        "is_current": true,
        "job_type": "",
        "location": "",
        "skills": "",
        "start_month": "",
        "start_year": 2015,
        "title": "Founder"
      },
      {
        "company": "Microsoft",
        "company_id": "1035",
        "company_linkedin_url": "https://www.linkedin.com/company/1035",
        "company_logo_url": "",
        "date_range": "1975 - Present",
        "description": "",
        "duration": "51 yrs 2 mos",
        "end_month": "",
        "end_year": "",
        "is_current": true,
        "job_type": "",
        "location": "",
        "skills": "",
        "start_month": "",
        "start_year": 1975,
        "title": "Co-founder"
      }
    ],
    "first_name": "Bill",
    "follower_count": 39958506,
    "full_name": "Bill Gates",
    "headline": "Chair, Gates Foundation and Founder, Breakthrough Energy",
    "hq_city": "Seattle",
    "hq_country": "US",
    "hq_region": "WA",
    "is_creator": true,
    "is_influencer": true,
    "is_premium": true,
    "is_verified": false,
    "job_title": "Co-chair",
    "languages": [],
    "last_name": "Gates",
    "linkedin_url": "https://www.linkedin.com/in/williamhgates/",
    "location": "Seattle, Washington, United States",
    "phone": "",
    "profile_id": "251749025",
    "profile_image_url": "https://media.licdn.com/dms/image/v2/D5603AQF-RYZP55jmXA/profile-displayphoto-shrink_800_800/B56ZRi8g.aGsAc-/0/1736826818808?e=1773878400&v=beta&t=bEsVAnI49LCh3IRFHKghq33usBraQI8MKwRhYUKYWug",
    "public_id": "williamhgates",
    "school": "Harvard University",
    "state": "Washington",
    "urn": "ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc"
  },
  "message": "ok"
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `linkedin_url` | Full LinkedIn profile URL |
| `profile_id` | LinkedIn numeric profile ID |
| `public_id` | LinkedIn public identifier (username) |
| `urn` | LinkedIn URN identifier |
| `first_name` | First name |
| `last_name` | Last name |
| `full_name` | Full display name |
| `profile_image_url` | Profile photo URL (800x800) |
| `headline` | Profile headline/tagline |
| `about` | About/summary section |
| `email` | Email address (if public) |
| `phone` | Phone number (if public) |
| `city` | City name |
| `state` | State/region name |
| `country` | Country name |
| `location` | Full location string |
| `school` | Most recent/notable school name |
| `connection_count` | Number of connections |
| `follower_count` | Number of followers |
| `languages` | Array of languages spoken |
| `experiences` | Array of work experiences (company, title, date_range, duration, location, description, is_current, skills) |
| `educations` | Array of education entries (school, degree, field_of_study, date_range) |
| `skills` | Array of skill names (if `include_skills=true`) |
| `certifications` | Array of certifications (if `include_certifications=true`) |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Profile data returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 404 | Not Found - Profile not found on LinkedIn |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |

