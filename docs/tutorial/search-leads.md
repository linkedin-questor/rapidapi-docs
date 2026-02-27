---
sidebar_position: 1
title: Automating Lead Searches at Scale
---

# Automating Lead Searches at Scale

Automate LinkedIn Sales Navigator lead searches via API—no LinkedIn account, cookies, or browser extensions needed.

## What You'll Build

A Python script that:
1. Initiates a lead search with your criteria
2. Polls for completion
3. Retrieves all matching leads

**Example output:**
```
request_id: 0bb8360c779317e5f6fc1722a8bd26a1
message: Use this request_id to check your search with 'Check Search Status' endpoint
```

## Search Criteria Example

We'll search for leads matching:
- **Job titles**: Owner, Founder, Director
- **Location**: United States
- **Current companies**: Google, Microsoft

For all available filters, see [Lead Search Filters](/tutorial/lead-search-filters).

## Step-by-Step Implementation

### Step 1: Initiate the Search

```python
import requests

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://linkedin-questor.p.rapidapi.com"

def initiate_search():
    response = requests.post(
        f"{BASE_URL}/search-leads",
        headers={
            "x-rapidapi-key": API_KEY,
            "Content-Type": "application/json"
        },
        payload={
            "geo_codes": [103644278],  # United States
            "title_keywords": ["Owner", "Founder", "Director"],
            "current_company_names": ["Google", "Microsoft"],
            "limit": 100
        }
    )
    response = requests.post(url, json=payload, headers=headers)
    return response.json().get("request_id")
```

**Response:**
```json
{
  "message": "Use this request_id to check your search with 'Check Search Status' endpoint",
  "request_id": "0bb8360c779317e5f6fc1722a8bd26a1"
}
```

### Step 2: Poll for Completion

```python
import time

def wait_for_completion(request_id):
    while True:
        response = requests.get(
            f"{BASE_URL}/check-search-status",
            headers={"x-rapidapi-ke": f"Bearer {API_KEY}"},
            params={"request_id": request_id}
        )
        data = response.json()
        status = data.get("status")
        results_found = data.get("results_found", 0)
        limit = data.get("limit", 0)
        print(f"Status: {status} ({results_found}/{limit} results)")
        
        if status == "done":
            return True
        if status == "failed":
            return False
        
        time.sleep(30)  # Check every 30 seconds
```

**Response:**
```json
{
  "employees_scraped_so_far": 100,
  "message": "Found 100/100 employees. Please use 'Get Search Results' endpoint to get your data!",
  "search_params": {
    "geo_codes": [103644278],
    "title_keywords": ["Owner", "Founder", "Director"],
    "current_company_names": ["Google", "Microsoft"],
    "limit": 100
  },
  "status": "done",
  "total_count": 1642
}
```

### Step 3: Fetch Results

```python
def fetch_results(request_id):
    all_results = []
    page = 1
    
    while True:
        response = requests.get(
            f"{BASE_URL}/get-search-results",
            headers={"x-rapidapi-key": API_KEY},
            params={"request_id": request_id, "page": page}
        )
        data = response.json().get("data", [])
        
        if not data:
            break
        
        all_results.extend(data)
        page += 1
    
    return all_results
```

## Full Script

Copy this complete script to get started:

```python
import requests
import time

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://web-scraping-api2.p.rapidapi.com"

def initiate_search():
    response = requests.post(
        f"{BASE_URL}/search-leads",
        headers={
            "x-rapidapi-key": API_KEY,
            "Content-Type": "application/json"
        },
        json={
            "geo_codes": [103644278],
            "title_keywords": ["Owner", "Founder", "Director"],
            "current_company_names": ["Google", "Microsoft"],
            "limit": 100
        }
    )
    
    return response.json().get("request_id")

def wait_for_completion(request_id):
    while True:
        response = requests.get(
            f"{BASE_URL}/check-search-status",
            headers={"x-rapidapi-key": API_KEY},
            params={"request_id": request_id}
        )
        data = response.json()
        status = data.get("status")
        results_found = data.get("results_found", 0)
        limit = data.get("limit", 0)
        print(f"Status: {status} ({results_found}/{limit} results)")
        
        if status == "done":
            return True
        if status == "failed":
            return False
        
        time.sleep(30)

def fetch_results(request_id):
    all_results = []
    page = 1
    
    while True:
        response = requests.get(
            f"{BASE_URL}/get-search-results",
            headers={"x-rapidapi-key": API_KEY},
            params={"request_id": request_id, "page": page}
        )
        data = response.json().get("data", [])
        
        if not data:
            break
        
        all_results.extend(data)
        page += 1
    
    return all_results

if __name__ == "__main__":
    print("Initiating search...")
    request_id = initiate_search()
    print(f"Request ID: {request_id}")
    
    if wait_for_completion(request_id):
        results = fetch_results(request_id)
        print(f"Found {len(results)} leads")
        for lead in results[:3]:  # Preview first 3
            print(f"  - {lead.get('full_name')} @ {lead.get('company')}")
    else:
        print("Search failed")
```

:::info Pricing
- **Initiation**: 50 credits (charged even if no results)
- **Status checks**: Free
- **Results**: 0.5 credits per lead

Example: 100 leads = 50 + (0.5 × 100) = **100 credits**
:::

:::tip Rate Limits
Status checks are free and unlimited. Space them 30 seconds apart to avoid unnecessary polling.
:::
