---
sidebar_position: 7
title: Lead Search Filters
---

# Lead Search Filters

The endpoint [Search Employees](/api-reference/endpoint/search-leads) comes with a rich set of filters. Here is the visual map between each parameter and its original filter in LinkedIn Sales Navigator.

For demo code snippet, take a look at [this post](/tutorial/search-leads).

![employee payload 1](/img/employee-payload1.jpg)

![employee payload 2](/img/employee-payload2.jpg)

![employee payload 3](/img/employee-payload3.jpg)

## Filter References

- **How to find:** [geo_codes](/tutorial/find-geocode), [company_headquarter_location_ids](/tutorial/find-geocode), [current_company_ids](/tutorial/find-company-id), [past_company_ids](/tutorial/find-company-id), [school_ids](/tutorial/find-company-id)

- **Possible functions:** "Accounting", "Administrative", "Arts and Design", "Business Development", "Community and Social Services", "Consulting", "Education", "Engineering", "Entrepreneurship", "Finance", "Healthcare Services", "Human Resources", "Information Technology", "Legal", "Marketing", "Media and Communication", "Military and Protective Services", "Operations", "Product Management", "Program and Project Management", "Purchasing", "Quality Assurance", "Real Estate", "Research", "Sales", "Customer Success and Support"

- **Possible company headcounts:** "Self-employed", "1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001-10000", "10001+"

- **Possible seniority levels:** "Owner/Partner", "CXO", "Vice President", "Director", "Experienced Manager", "Entry Level Manager", "Strategic", "Senior", "Entry Level", "In Training"

- **Possible profile languages:** "Arabic", "English", "Spanish", "Portuguese", "Chinese", "French", "Italian", "Russian", "German", "Dutch", "Turkish", "Tagalog", "Polish", "Korean", "Japanese", "Malay", "Norwegian", "Danish", "Romanian", "Swedish", "Bahasa Indonesia", "Czech"

- **Possible industry_code:** were listed [here](https://learn.microsoft.com/en-us/linkedin/shared/references/reference-tables/industry-codes-v2)

- **Possible year (year_of_experience, year_in_current_company, year_in_current_position):** "Less than 1 year", "1 to 2 years", "3 to 5 years", "6 to 10 years", "More than 10 years"

- **limit:** Default value: 25. Maximum value: 2500

- **To apply excluded values** to some filters above, use the _exclude version as below: current_company_ids_exclude, past_company_ids_exclude, company_headquarter_location_ids_exclude, functions_exclude, title_keywords_exclude, seniority_levels_exclude, past_job_titles_exclude, geo_codes_exclude, industry_codes_exclude, school_ids_exclude
