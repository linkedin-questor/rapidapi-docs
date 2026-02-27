---
sidebar_position: 1
title: Getting Started
description: Get started with LinkedIn Questor API
---

# Getting Started

Access LinkedIn data through a simple REST API. No LinkedIn account, cookies, or browser extensions required.

## Base URL

All API requests use:

```
https://linkedin-questor.p.rapidapi.com
```

## Authentication

Include your API key in every request using the Authorization header with Bearer token:

| Header | Value |
|--------|-------|
| `x-rapidapi-key` | `YOUR_API_KEY` |

## Quick Start

### 1. Get Your API Key

Sign up at [rapidapi.com/auth/sign-up](https://rapidapi.com/auth/sign-up) and retrieve your API key from [https://rapidapi.com/linkedinquest/api/linkedin-questor](https://rapidapi.com/linkedinquest/api/linkedin-questor/playground/apiendpoint_ed461e15-cdb6-473d-8ab8-82a9c5e612e7).

### 2. Make Your First Request

```bash
curl -X GET "https://linkedin-questor.p.rapidapi.com/get-personal-profile?linkedin_url=https://www.linkedin.com/in/satyanadella" -H "x-rapidapi-key: YOUR_API_KEY"
```

### 3. Check Your Usage

The `x-ratelimit-credits-remaining` response header indicates the number of remaining credits after each request.

## What's Next

- [Profile Data](/api-reference/endpoint/get-personal-profile) - Get detailed LinkedIn profiles
- [Lead Search](/api-reference/endpoint/search-leads) - Search Sales Navigator at scale
- [Credits & Pricing](/api-reference/credits-and-requests) - Understand credit usage
