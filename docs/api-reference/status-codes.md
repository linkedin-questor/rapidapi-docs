---
sidebar_position: 100
title: Status Codes
---

# Status Codes

All API responses include an HTTP status code indicating the result of the request.

## Success

| Code | Description |
|------|-------------|
| **200** | **OK** - Request succeeded. Response body contains the requested data. |

---

## Client Errors

| Code | Description |
|------|-------------|
| **400** | **Bad Request** - Invalid or missing parameters. Check the error message for details. |
| **401** | **Unauthorized** - Missing or invalid API key. Ensure `Authorization` header is set. |
| **402** | **Payment Required** - Insufficient credits. Top up your account to continue. |
| **404** | **Not Found** - The requested resource does not exist (e.g., profile, company, or job not found). |
| **429** | **Too Many Requests** - Rate limit exceeded. Wait before making more requests. |

---

## Server Errors

| Code | Description |
|------|-------------|
| **500** | **Internal Server Error** - Something went wrong on our end. Try again later. |
| **503** | **Service Unavailable** - Temporary failure or timeout. Retry the request. |

---

## Error Response Format

All error responses include a JSON body with details:

```json
{
  "message": "invalid_parameter",
  "parameter": "linkedin_url",
  "details": "Missing or invalid linkedin_url"
}
```

| Field | Description |
|-------|-------------|
| `message` | Error type (e.g., `invalid_parameter`, `error`, `unauthorized`) |
| `parameter` | The parameter that caused the error (if applicable) |
| `details` | Human-readable description of what went wrong |

---

## Common Error Messages

### 400 Bad Request

| Message | Cause | Solution |
|---------|-------|----------|
| `invalid_parameter` | A required parameter is missing or invalid | Check the endpoint documentation for required parameters |
| `payload_is_empty` | Request body is empty | Include required JSON body in POST requests |
| `limit_out_of_range` | Limit value is outside allowed range | Use a limit within the specified range (e.g., 1-2500) |

### 401 Unauthorized

| Message | Cause | Solution |
|---------|-------|----------|
| `unauthorized` | API key is missing or invalid | Add valid `Authorization` header |

### 402 Payment Required

| Message | Cause | Solution |
|---------|-------|----------|
| `insufficient_credits` | Account has no credits remaining | Purchase more credits at [infoplug.io](https://infoplug.io) |

### 404 Not Found

| Message | Cause | Solution |
|---------|-------|----------|
| `not_found` | Profile, company, or job doesn't exist | Verify the URL or ID is correct |

### 429 Too Many Requests

| Message | Cause | Solution |
|---------|-------|----------|
| `rate_limit_exceeded` | Too many requests in a short time | Implement exponential backoff and retry |

---

## Best Practices

1. **Always check the status code** before processing the response body
2. **Handle errors gracefully** - Implement retry logic for 5xx errors
3. **Respect rate limits** - Add delays between requests if you hit 429
4. **Log error details** - The `details` field helps debug issues
