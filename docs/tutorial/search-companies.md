---
sidebar_position: 3
title: Automating Company Searches at Scale
---

# Automating Company Searches at Scale

Automate LinkedIn Sales Navigator company searches via API—no LinkedIn account, cookies, or browser extensions needed.

## What You'll Build

A Python script that:
1. Initiates a company search with your criteria
2. Polls for completion
3. Retrieves all matching companies

**Example output:**
```
request_id: ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o
message: Use this request_id to check your search with 'Check Search Companies Status' endpoint
```

## Search Criteria Example

We'll search for companies matching:
- **Size**: 1,001-10,000 employees (codes F, G)
- **Headquarters**: United States
- **Hiring on LinkedIn**: No

For all available filters, see [Company Search Filters](/tutorial/company-search-filters).

## Step-by-Step Implementation

### Step 1: Initiate the Search

```python
import requests

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://linkedin-questor.p.rapidapi.com"

def initiate_search():
    response = requests.post(
        f"{BASE_URL}/search-companies",
        headers={
            "x-rapidapi-key": API_KEY,
            "Content-Type": "application/json"
        },
        json={
            "company_headcounts": ["1001-5000", "5001-10000"],
            "headquarters_location": [103644278],  # United States
            "hiring_on_linkedin": "false",
            "limit": 100
        }
    )
    
    return response.json().get("request_id")
```

**Response:**
```json
{
  "message": "Use this request_id to check your search with 'Check Search Companies Status' endpoint",
  "request_id": "ba072fac0b38d12378ef5023742f0184s34e1i8n2a7p0m9o"
}
```

### Step 2: Poll for Completion

```python
import time

def wait_for_completion(request_id):
    while True:
        response = requests.get(
            f"{BASE_URL}/check-search-companies-status",
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
        
        time.sleep(30)  # Check every 30 seconds
```

**Response:**
```json
{
  "message": "Found 100/100 companies. Please use 'Get Search Companies Results' endpoint to get your data!",
  "search_params": {
    "company_headcounts": ["1001-5000", "5001-10000"],
    "headquarters_location": [103644278],
    "hiring_on_linkedin": "false",
    "limit": 100
  },
  "status": "done",
  "total_companies": 100,
  "total_count": 120982
}
```

### Step 3: Fetch Results

```python
def fetch_results(request_id):
    all_results = []
    page = 1
    
    while True:
        response = requests.get(
            f"{BASE_URL}/get-search-companies-results",
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
BASE_URL = "https://linkedin-questor.p.rapidapi.com"

def initiate_search():
    response = requests.post(
        f"{BASE_URL}/search-companies",
        headers={
            "x-rapidapi-key": API_KEY,
            "Content-Type": "application/json"
        },
        json={
            "company_headcounts": ["1001-5000", "5001-10000"],
            "headquarters_location": [103644278],
            "hiring_on_linkedin": "false",
            "limit": 100
        }
    )
    response.raise_for_status()
    return response.json().get("request_id")

def wait_for_completion(request_id):
    while True:
        response = requests.get(
            f"{BASE_URL}/check-search-companies-status",
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
            f"{BASE_URL}/get-search-companies-results",
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
        print(f"Found {len(results)} companies")
        for company in results[:3]:  # Preview first 3
            print(f"  - {company.get('name')} ({company.get('employee_count')} employees)")
    else:
        print("Search failed")
```

:::info Pricing
- **Initiation**: 25 credits (charged even if no results)
- **Status checks**: Free
- **Results**: 0.5 credits per company

Example: 100 companies = 25 + (0.5 × 100) = **75 credits**

