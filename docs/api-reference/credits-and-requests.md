---
sidebar_position: 99
title: Credits and Requests
---

# Credits and Requests

**Credits** and **Requests** are two separate metrics:

- **Requests** = The number of API calls you make (rate-limited per minute)
- **Credits** = The billing unit consumed per API call (varies by endpoint)

One API request can consume different amounts of credits depending on the endpoint. For example, calling `/get-company-insights` uses 1 request but consumes 5 credits.


## Profile Endpoints

| Endpoint | Credits |
|----------|---------|
| [Get Profile Details](/api-reference/endpoint/get-personal-profile) | 1 |
| [Get Profile Posts](/api-reference/endpoint/get-profile-posts) | 2 |
| [Get Open to Work Status](/api-reference/endpoint/get-open-to-work-status) | 1 |
| [Get Open Profile Status](/api-reference/endpoint/get-open-profile-status) | 1 |
<!-- | [Get Recommendations Received](/api-reference/endpoint/get-recommendations-received) | 1 |
| [Get Recommendations Given](/api-reference/endpoint/get-recommendations-given) | 1 |
| [Get Recent Activity Time](/api-reference/endpoint/get-recent-activity-time) | 2 | -->

---

## Company Endpoints

| Endpoint | Credits |
|----------|---------|
| [Get Company Details](/api-reference/endpoint/get-company-by-url) | 1 |
| [Get Company Posts](/api-reference/endpoint/get-company-posts) | 2 |
| [Get Company Insights](/api-reference/endpoint/get-company-insights) | 5 |
<!-- | [Get Company Job Count](/api-reference/endpoint/get-company-job-count) | 1 | -->
<!-- | [Find Custom Headcount](/api-reference/endpoint/find-custom-headcount) | 1 | -->

---

## Lead Search (Sales Navigator)

| Step | Credits |
|------|---------|
| **Step 1:** Initiate search ([/search-leads](/api-reference/endpoint/search-leads)) | 50 |
| **Step 2:** Check status ([/check-search-status](/api-reference/endpoint/check-search-status)) | Free |
| **Step 3:** Get results ([/get-search-results](/api-reference/endpoint/get-search-results)) | 0.5 per result |

**Example:** Searching for 100 leads = 50 (initiation) + 50 (results) = **100 credits**

---

## Company Search (Sales Navigator)

| Step | Credits |
|------|---------|
| **Step 1:** Initiate search ([/search-companies](/api-reference/endpoint/search-companies)) | 25 |
| **Step 2:** Check status ([/check-search-companies-status](/api-reference/endpoint/check-search-companies-status)) | Free |
| **Step 3:** Get results ([/get-search-companies-results](/api-reference/endpoint/get-search-companies-results)) | 0.5 per result |

**Example:** Searching for 100 companies = 25 (initiation) + 50 (results) = **75 credits**

---

## Job Endpoints

| Endpoint | Credits |
|----------|---------|
| [Search Jobs](/api-reference/endpoint/search-jobs) | 2 |
| [Get Job Details](/api-reference/endpoint/get-job-details) | 1 |

---

## Post Endpoints

| Endpoint | Credits |
|----------|---------|
| [Get Post Details](/api-reference/endpoint/get-post-details) | 1 |
| [Get Post Reactions](/api-reference/endpoint/get-post-reactions) | 1 |
| [Get Post Comments](/api-reference/endpoint/get-post-comments) | 1 |
<!-- | [Search Posts](/api-reference/endpoint/search-posts) | 2 | -->

---

<!-- ## Google Search Endpoints

| Endpoint | Credits |
|----------|---------|
| [Google Companies](/api-reference/endpoint/google-companies) | 1 |
| [Google Schools](/api-reference/endpoint/google-schools) | 1 |
| [Google Profiles](/api-reference/endpoint/google-profiles) | 1 |
| [Google Full Profiles](/api-reference/endpoint/google-full-profiles) | 2 + 1 per profile found |

--- -->

<!-- ## Reference Endpoints

| Endpoint | Credits |
|----------|---------|
| [Find Geocode by Location](/api-reference/endpoint/find-geocode-by-location) | 1 |

--- -->

## Key Takeaways

- **Search initiation costs credits** - 50 for leads, 25 for companies
- **Status check endpoints are always free**
- **Results cost 0.5 credits each** for lead and company searches
- **Response header `x-ratelimit-credits-remaining`** indicates the number of remaining credits after each request.
