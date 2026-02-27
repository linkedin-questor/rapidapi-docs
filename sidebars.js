// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    'tutorial/search-leads',
    'tutorial/search-companies',
    'tutorial/find-geocode',
    'tutorial/find-company-id',
    'tutorial/custom-headcount-inputs',
    'tutorial/lead-search-filters',
    'tutorial/company-search-filters',
    'tutorial/filters-values-references',
  ],
  apiSidebar: [
    'api-reference/getting-started',
    {
      type: 'category',
      label: 'Profile Data',
      collapsed: true,
      items: [
        'api-reference/endpoint/get-personal-profile',
        'api-reference/endpoint/get-profile-posts',
        'api-reference/endpoint/get-open-to-work-status',
        'api-reference/endpoint/get-open-profile-status',
        // 'api-reference/endpoint/get-recommendations-received',
        // 'api-reference/endpoint/get-recommendations-given',
        // 'api-reference/endpoint/get-recent-activity-time',
      ],
    },
    {
      type: 'category',
      label: 'Company Data',
      collapsed: true,
      items: [
        'api-reference/endpoint/get-company-by-url',
        'api-reference/endpoint/get-company-insights',
        'api-reference/endpoint/get-company-posts',
        // 'api-reference/endpoint/find-custom-headcount',
        // 'api-reference/endpoint/get-company-job-count',
      ],
    },
    {
      type: 'category',
      label: 'Lead Search',
      collapsed: true,
      items: [
        'api-reference/endpoint/search-leads',
        'api-reference/endpoint/check-search-status',
        'api-reference/endpoint/get-search-results',
      ],
    },
    {
      type: 'category',
      label: 'Company Search',
      collapsed: true,
      items: [
        'api-reference/endpoint/search-companies',
        'api-reference/endpoint/check-search-companies-status',
        'api-reference/endpoint/get-search-companies-results',
      ],
    },
    {
      type: 'category',
      label: 'Job Search',
      collapsed: true,
      items: [
        'api-reference/endpoint/search-jobs',
        'api-reference/endpoint/get-job-details',
      ],
    },
    {
      type: 'category',
      label: 'Post Search',
      collapsed: true,
      items: [
        // 'api-reference/endpoint/search-posts',
        'api-reference/endpoint/get-post-details',
        'api-reference/endpoint/get-post-reactions',
        'api-reference/endpoint/get-post-comments',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Google Search',
    //   collapsed: true,
    //   items: [
    //     'api-reference/endpoint/google-companies',
    //     'api-reference/endpoint/google-schools',
    //     'api-reference/endpoint/google-profiles',
    //     'api-reference/endpoint/google-full-profiles',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Reference',
    //   collapsed: true,
    //   items: [
    //     'api-reference/endpoint/find-geocode-by-location',
    //   ],
    // },
    'api-reference/credits-and-requests',
    // 'api-reference/status-codes',
  ],
};

export default sidebars;
