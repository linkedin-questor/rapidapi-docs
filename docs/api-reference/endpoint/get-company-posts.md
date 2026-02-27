---
sidebar_position: 11
title: Get Company Posts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Company Posts

`GET /get-company-posts`

Retrieve posts published by a LinkedIn company page.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkedin_url` | string | Yes | LinkedIn company URL |
| `type` | string | No | Post type: `posts` or `reposts` (default: `posts`) |
| `start` | integer | No | Starting offset (default: 0) |
| `pagination_token` | string | No | Token for pagination |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl --request GET \
  --url 'https://linkedin-questor.p.rapidapi.com/get-company-posts?linkedin_url=https://www.linkedin.com/company/apple/&type=posts' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://linkedin-questor.p.rapidapi.com/get-company-posts"
params = {
    "linkedin_url": "https://www.linkedin.com/company/apple/",
    "type": "posts",
    "start": 0
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
  'https://linkedin-questor.p.rapidapi.com/get-company-posts?linkedin_url=https://www.linkedin.com/company/apple/&type=posts',
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

<Tabs groupId="response-status">
  <TabItem value="200" label="200 OK" default>

```json
{
  "message": "ok",
  "data": [
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Our newest AI Agents for Beginners course is here. Learn how to build prod-ready AI agents using the Microsoft Agent Framework (MAF) — plus how it stacks up against Semantic Kernel and AutoGen. \n\nYou’ll walk away ready to build with MAF (with code samples!), apply it to your own use cases, and migrate existing frameworks. \n\nGet started: http://msft.it/6049tdlDt",
      "attributes": [],
      "urn": "7402527133773864960",
      "num_comments": 0,
      "num_likes": 14,
      "time": "3 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_our-newest-ai-agents-for-beginners-course-activity-7402527133773864960-1Mnj",
      "num_empathy": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E10AQE7L2lEMtplig/image-shrink_1280/B4EZroXJUWKkAM-/0/1764834973942?e=1765789200&v=beta&t=S8SPwcJT8x7prhmRbk4QQwbT5gzFo7KvDWtgA6ho84g"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Great leadership isn’t something you gatekeep. It’s something you grow, reflect on—and share.\n\nLeadership isn’t about a title—it’s about intent. It starts with showing up, setting the tone, and making choices that reflect your values every day.\n\nWhen you lead with purpose, you inspire others to do the same. Because real leadership is contagious—and it’s something everyone can practice, no matter their role.\n\n▶ Explore the Lead mindset in our Microsoft Management Excellence course on LinkedIn Learning. https://msft.it/6040sfcP8\n\n#MicrosoftCareersAsia",
      "attributes": [],
      "urn": "7402164764480598016",
      "num_comments": 9,
      "num_likes": 135,
      "time": "4 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoftcareersasia-activity-7402164764480598016-X1jm",
      "num_empathy": 9,
      "num_praises": 5,
      "num_appreciations": 3,
      "num_interests": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E10AQF7QW3dB0nj_A/image-shrink_800/B4EZrkZifcHUAc-/0/1764768492144?e=1765789200&v=beta&t=VZh3NG7rrz0gQ_Qkcec8jKlOAoA2DQ5J2vKlyKIGV0Y"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Working across borders? Let #Copilot help you break the\nlanguage barrier, professionally and respectfully. \n\nTry #CopilotChat now: http://msft.it/6043tdWAU",
      "attributes": [],
      "urn": "7403614298675023872",
      "num_comments": 0,
      "num_likes": 3,
      "time": "6 hours ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_localized-language-content-activity-7403614298675023872-Xxoi",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQH9PLMrXEqHAQ/mp4-720p-30fp-crf28/B4EZr4aYjxHgAY-/0/1765104260868?e=1765789200&v=beta&t=Eyi7H1Lte1siwJUlOib0mB5QoXhnb0hl61ZGiRjwzR4",
        "duration": 19500
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "This #WorldComputerLiteracyDay APAC’s cyber skills gap needs a new hit: Upskilling.\n\nSwipe to see the stats and how #Microsoft is helping you build an AI-ready workforce today.\n\n#MicrosoftASEAN​",
      "attributes": [],
      "urn": "7401492849504194560",
      "num_comments": 0,
      "num_likes": 3,
      "time": "6 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_world-computer-literacy-day-activity-7401492849504194560-Svia",
      "num_praises": 1,
      "images": []
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "📢 Become a Microsoft Agent Creator! Your go-to hub for learning how to build intelligent agents!\n\n🛠️ Build your skills across Copilot Studio, Microsoft 365 Copilot, and SharePoint, explore real-world scenarios, and learn from the experts.\n\nJoin the Community: http://msft.it/6042tRkeg",
      "attributes": [],
      "urn": "7399975324828098560",
      "num_comments": 1,
      "num_likes": 23,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_become-a-microsoft-agent-creator-your-activity-7399975324828098560-QOKx",
      "num_praises": 1,
      "num_empathy": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQFDfvgx1TUvAg/image-shrink_800/B56ZrEhSu6JsAc-/0/1764233653940?e=1765789200&v=beta&t=kVzQCOcHuSeHoxzgcXWJB0JlXfdlCxl4fO1eNrbf-L8"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "#Copilot gives you the plan. You just bring the focus. Day sorted! Try #CopilotChat now: http://msft.it/6046tdW4a",
      "attributes": [],
      "urn": "7402602633598910465",
      "num_comments": 0,
      "num_likes": 6,
      "time": "3 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_copilot-chat-to-help-you-plan-the-week-activity-7402602633598910465-X7C4",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQHv5XkvBpYVXw/mp4-720p-30fp-crf28/B4EZroe7w1KcB0-/0/1764837017627?e=1765789200&v=beta&t=GzalR_EVeFzueoWbMN9JxCw5Gfjf2-31zD9UKnFLwFg",
        "duration": 13933
      }
    },
    {
      "poster": {
        "name": "Satya Nadella",
        "linkedin_url": "https://www.linkedin.com/in/satyanadella"
      },
      "text": "With the Excel World Championship underway, I decided to take the M365 Copilot digital challenge. I’m no World Champ… but thanks to Agent Mode, I held my own!",
      "attributes": [],
      "urn": "7402423326796926977",
      "num_comments": 288,
      "num_likes": 5423,
      "time": "3 days ago • Visible to anyone on or off LinkedIn",
      "reshared": true,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/satyanadella_with-theexcelworld-championship-underway-ugcPost-7402362093599129601-cCPd",
      "num_empathy": 380,
      "num_praises": 307,
      "num_interests": 71,
      "num_appreciations": 19,
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5605AQF1zWqacNuj0g/mp4-720p-30fp-crf28/B56Zrp5N0kL4CE-/0/1764860693996?e=1765789200&v=beta&t=G6t2Wbc6lMmKD4YByejd_t1aBfK1EiBmaJ7aDWm4w_k",
        "duration": 108066
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Whether you're building your brand or just building confidence, #Copilot helps you show up smarter. \nTry #CopilotChat now: http://msft.it/6041tjNeW",
      "attributes": [],
      "urn": "7402164764858068992",
      "num_comments": 1,
      "num_likes": 4,
      "time": "4 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_content-creation-for-employees-activity-7402164764858068992-9sIO",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQEs3K73bSvZWw/mp4-720p-30fp-crf28/B4EZrkbY4IKMB4-/0/1764768980255?e=1765789200&v=beta&t=RD0mVCGQSamQkTO68c4wFc51fHLyW8z80_fnqIZyzcs",
        "duration": 24033
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Did you know Sembcorp cut solar data processing from 30 days to just 5 minutes with Microsoft 365 E3?\n\nAcross Asia, organizations are transforming securely with AI-powered productivity that drives real impact.\n\nSee how they’re leading with Secure AI Productivity. Download the e-book: http://msft.it/6040tumVp\n\n#MicrosoftASEAN #SecureProductivity #AI #ITLeader",
      "attributes": [],
      "urn": "7399628033994899456",
      "num_comments": 0,
      "num_likes": 9,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoftasean-secureproductivity-ai-activity-7399628033994899456-lVCr",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQHBTIRjC_GPaw/image-shrink_480/B56Zq.tIVvHIAk-/0/1764136093902?e=1765789200&v=beta&t=0ZeMMP2RT729vdxTmf1AyaIsxUJcYSTAJ6gplu2-uKI"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Great leadership isn’t something you gatekeep. It’s something you grow, reflect on—and share.\n\nGrowth isn’t just a goal—it’s a mindset. The best managers invest in their team’s development, creating opportunities for learning, stretch assignments, and honest feedback.\n\nWhen you champion growth, you don’t just elevate performance—you help people discover what they’re truly capable of. And when your team grows, so does your impact.\n\n▶ Explore the Growth mindset in our Microsoft Management Excellence course on LinkedIn Learning. https://msft.it/6043sfc4F\n\n#MicrosoftCareersAsia",
      "attributes": [],
      "urn": "7399628052688850945",
      "num_comments": 9,
      "num_likes": 55,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoftcareersasia-activity-7399628052688850945-fSc8",
      "num_empathy": 2,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQHjoBZeXQuDKg/image-shrink_480/B56Zq_mWNlIsAk-/0/1764151092765?e=1765789200&v=beta&t=KE6J-fqPZrWh1rdxj65feh-idXJwJZfiRjHa-HLG4jI"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Inclusion means removing barriers. In our technology and our workplaces, so more people can do their best work.\n\nDiscover more about innovation without barriers at the Innovation Tech Lab: https://msft.it/6046tjvRg",
      "attributes": [],
      "urn": "7401823072598777857",
      "num_comments": 2,
      "num_likes": 84,
      "time": "5 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_do-your-best-work-activity-7401823072598777857-Atza",
      "num_empathy": 11,
      "num_praises": 5,
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQGks250HV13sg/mp4-720p-30fp-crf28/B4EZriOzxUIwB4-/0/1764732126710?e=1765789200&v=beta&t=zr7Z-xWhBNlsEJt0kH2g8ixNyydmS49JIlrgrFOFTxA",
        "duration": 16000
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "No more blank stares during brainstorming sessions. Let #Copilot bring the first spark, so your team can ignite the rest.  Try #CopilotChat now: http://msft.it/6042tkain",
      "attributes": [],
      "urn": "7401787277993213952",
      "num_comments": 0,
      "num_likes": 1,
      "time": "5 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_brainstorming-with-copilot-activity-7401787277993213952-uolm",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQHvUOmSn2WMYA/mp4-720p-30fp-crf28/B4EZrer1HbIwB4-/0/1764672627899?e=1765789200&v=beta&t=l6atD1ebV3DfziD0msNi3DJFmJJQ8OtKkuxRZ8A9xoE",
        "duration": 22033
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "No more blank stares during brainstorming sessions. Let #Copilot bring the first spark, so your team can ignite the rest.  Try #CopilotChat now: http://msft.it/6047tbfGD",
      "attributes": [],
      "urn": "7401456221754454016",
      "num_comments": 0,
      "num_likes": 9,
      "time": "6 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_brainstorming-with-copilot-activity-7401456221754454016-67WM",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQGa8IMs6yOaLA/mp4-720p-30fp-crf28/B4EZrdBLXbHEB4-/0/1764644670073?e=1765789200&v=beta&t=_5eHPOP4eHxx51grF5lARhl84-2xrrG4WHCKByCRapo",
        "duration": 22033
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "We're more than a single story. At Microsoft, our diverse talents, passions, and perspectives fuel innovation and empathy. Every challenge deepens our understanding and drives us to create solutions that work for everyone. Accessibility is at our core, defining every move we make to shape tomorrow. ❤️ https://msft.it/6009tbn51",
      "attributes": [],
      "urn": "7401349457478569985",
      "num_comments": 50,
      "num_likes": 438,
      "time": "6 days ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_were-more-than-a-single-story-at-microsoft-activity-7401349457478569985-pp34",
      "num_empathy": 43,
      "num_praises": 25,
      "num_interests": 3,
      "num_appreciations": 2,
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQGjdIZCr7SZDA/mp4-720p-30fp-crf28/B4EZrbgE4xKkCA-/0/1764619220467?e=1765789200&v=beta&t=-z1mfYKzqjBmCkSd_9mXs15kMGFYYso1N0GVGc5tVnA",
        "duration": 45966
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "AI has moved fast. At Microsoft Ignite, it became clear how far AI has come. This edition of The Monthly Tech-In pulls back the curtain on what's coming next, from new intelligence layers powering AI agents to the creators pushing the future forward at AFROTECH.",
      "attributes": [],
      "urn": "7399096847891562496",
      "num_comments": 121,
      "num_likes": 1513,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_ai-has-moved-fast-at-microsoft-ignite-it-activity-7399096847891562496-6Bvj",
      "num_empathy": 33,
      "num_praises": 28,
      "num_interests": 18,
      "num_appreciations": 12,
      "images": []
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "With rapid agent development, developers need platforms that meet them where they are. Learn how Azure AI Foundry helps devs scale faster with in-repo development, open frameworks, and enterprise-ready tools—right within their workflow: http://msft.it/6043tRwZZ",
      "attributes": [],
      "urn": "7398918377664057344",
      "num_comments": 0,
      "num_likes": 8,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_with-rapid-agent-development-developers-activity-7398918377664057344-X8tJ",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQGoHXCCILjiaA/image-shrink_480/B56Zq2ZqbWJsAo-/0/1763996776543?e=1765789200&v=beta&t=HotT1fNk_g4y4hfBc8e65X178Byd2XVA0RiOujRG7Ko"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "If you're thinking about your next move, whether that's in a month or a little further down the road, give yourself a real advantage. Join a community built for people who want their work to matter and their growth to accelerate. \n\nSubscribe to our talent network and stay connected to opportunities where your career can genuinely thrive: https://msft.it/6045tngmH\n\n#MicrosoftCareersAsia",
      "attributes": [],
      "urn": "7398918382168813568",
      "num_comments": 2,
      "num_likes": 78,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoftcareersasia-activity-7398918382168813568-mt-L",
      "num_praises": 6,
      "num_empathy": 3,
      "num_appreciations": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQGaW6dNTKXbQA/image-shrink_160/B56Zq4zeMsG0Aw-/0/1764037093010?e=1765789200&v=beta&t=ll3ez5vVD9oqyX5sud32K32wim2qrGHHCogBVmssT7E"
        }
      ]
    },
    {
      "poster": {
        "name": "Charles Lamanna",
        "linkedin_url": "https://www.linkedin.com/in/charleslamanna"
      },
      "text": "It’s been an incredible start to #MSIgnite here in San Francisco! Yesterday during the keynote, we shared how Microsoft is evolving the AI stack to help organizations build agents that are intelligent, trustworthy, and deeply grounded in their business.\n \nA big part of this evolution is giving agents the context, data, and oversight they need to operate effectively across the enterprise. We introduced Work IQ, which powers Microsoft 365 Copilot and agents with real-time signals from your files, meetings, messages, and work patterns. Plus, Fabric IQ and Foundry IQ to bring together operational and analytical data to give both agents and people a connected, live view of the business.\n \nWe also introduced Agent 365 – a single place to manage and secure agents. I had a fantastic conversation with Tao Zhang from Manus AI, Dean Arnold from Workday, and Paul Fipps from ServiceNow about observability and governance. One message is clear: the next phase of AI will be about scaling trust and visibility, to deliver real business impact.\n \nAnd this is just the beginning of an exciting week at Ignite. It was great to join Judson Althoff, Scott Guthrie, Asha Sharma, and Ryan Roslansky on stage to kick off such a pivotal moment for AI and the future of work.",
      "attributes": [],
      "urn": "7397064147219365889",
      "num_comments": 28,
      "num_likes": 916,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": true,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/charleslamanna_msignite-activity-7396969820862394369-P3Be",
      "num_praises": 90,
      "num_empathy": 57,
      "num_appreciations": 3,
      "num_interests": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGP9PwFPOKfhg/feedshare-shrink_480/B56ZqdQ2GOJwAc-/0/1763575032619?e=1766620800&v=beta&t=wgFkPP5Q58wd5X2gVgDgiO3PbNvzG0-fS2ktrcY8Qv4"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Everything is awesome at the Microsoft datacenter of the future. ✨🧱#MSIgnite",
      "attributes": [],
      "urn": "7396698747499470850",
      "num_comments": 71,
      "num_likes": 1123,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_msignite-activity-7396698747499470850-lKvo",
      "num_empathy": 100,
      "num_praises": 50,
      "num_interests": 10,
      "num_appreciations": 8,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQEhYfunIPDLvw/feedshare-shrink_480/B56ZqZWgI_JUAY-/0/1763509469575?e=1766620800&v=beta&t=8qST8aCW-dTn9H_EPssHw8jJ83ktqndQQOdcd2z15uI"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFZSNqPzlaoNg/feedshare-shrink_160/B56ZqZWgNSHIAc-/0/1763509465117?e=1766620800&v=beta&t=mwKFe-TpqGSk43ZzlIOJK6Bzo7GS0XT4efYPU9PS4-8"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQETYJoARMZCeg/feedshare-shrink_480/B56ZqZWf87IcAY-/0/1763509409709?e=1766620800&v=beta&t=7oJJm-j39xZ45i9QKq64QvZeZtTo2m4cSLp1wd1Vd5Y"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGSajwmUDiulw/feedshare-shrink_480/B56ZqZWf9XJkAY-/0/1763509408485?e=1766620800&v=beta&t=kbQXKzTaqinQvlM5pIqxMaIvO3fzA09CheQFnGG5Big"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQE69mgMIjuURg/feedshare-shrink_20/B56ZqZWgBSJYA0-/0/1763509476539?e=1766620800&v=beta&t=0UixHOGIIIj4RG8hDGFw4OX1TD8IheQILpoBchsEJC4"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGB0BnP8Lj2CA/feedshare-shrink_800/B56ZqZWf_VJ8Ak-/0/1763509451424?e=1766620800&v=beta&t=lomDfgu4qKkiBfzIRT_AhoyMuY-kZOjW0bOpq5djC98"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQHua6-FZg6rng/feedshare-shrink_480/B56ZqZWgEGJoAY-/0/1763509476004?e=1766620800&v=beta&t=Wije7TCcY3CNgVVMhnsfYrHSWgC75pvkeZCcHsAxg18"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGXfGS_akV1eg/feedshare-shrink_1280/B56ZqZWgTHJwAw-/0/1763509483256?e=1766620800&v=beta&t=3gYVJxc5_4jI3zbfbYXmSa0sLkD95efiKuYXoMyEF50"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQH95OflpP4ZTQ/feedshare-shrink_20/B56ZqZWf9rG4A0-/0/1763509411998?e=1766620800&v=beta&t=zUvn0M9Vc7_ifKZYDYhTmQ6ZziWOtZFk2aUI8ixtFc0"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFd-kT7Av3bVA/feedshare-shrink_800/B56ZqZWf9hIYAg-/0/1763509411129?e=1766620800&v=beta&t=ghW4pSAEqCXEsgvROAnlHo0bGFqiPbGNxjOC5P7tcBs"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Our #MicrosoftAsia team are attending #MSIgnite this week — bringing regional expertise to global innovation. \n\nGet daily downloads and register now to catch up on Microsoft Ignite on demand: http://msft.it/6041tRY0x\n\n #IgniteDownload",
      "attributes": [],
      "urn": "7396511227490811904",
      "num_comments": 0,
      "num_likes": 3,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoftasia-msignite-ignitedownload-activity-7396511227490811904-Wp0F",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQFWCC2ljioH_g/image-shrink_800/B56ZqWvvllJsAc-/0/1763465689813?e=1765789200&v=beta&t=GaPXKgTSsE-FbxqVJrNooRtWBWAG3U7qncRh8J7ayu8"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQFrqS_fnnN0HA/image-shrink_800/B56ZqWvvttJUAc-/0/1763465690447?e=1765789200&v=beta&t=7OZqmbbpe_MBRnUmv06TY4dnrLwdJT2FIC6qJRk7y4I"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQGf9of9EgmPuw/image-shrink_160/B56ZqWvv33IcAo-/0/1763465691252?e=1765789200&v=beta&t=91Z8BWIIa83hHIKSVlaG6bjTokhWVPu4pKZ3dM1MMcU"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Open-source technologies are at the heart of our biggest products, like Microsoft Azure and Microsoft 365. Take a peek at what our teams are building in the open and explore key milestones in our journey so far: http://msft.it/6047tMuYf",
      "attributes": [],
      "urn": "7396366608572669952",
      "num_comments": 0,
      "num_likes": 3,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_open-source-journey-activity-7396366608572669952-kYnl",
      "images": []
    },
    {
      "poster": {
        "name": "Microsoft for Healthcare",
        "linkedin_url": "https://www.linkedin.com/showcase/microsoft-health/posts"
      },
      "text": "Healthcare AI, accelerated. At #MSIgnite, we're introducing premium models in Microsoft Foundry, a GitHub model evaluator, and advances in multi-agent orchestration—plus real-world wins from Oxford, Atropos Health, and UiPath. Dive in: https://msft.it/6048tRflg",
      "attributes": [],
      "urn": "7396637466256003072",
      "num_comments": 13,
      "num_likes": 130,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": true,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft-health_msignite-activity-7396623231815704576-8MF4",
      "num_praises": 7,
      "num_interests": 6,
      "num_empathy": 3,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E10AQHby3IEI3mgJw/image-shrink_800/B4EZqXncpUGUAc-/0/1763480295742?e=1765789200&v=beta&t=lB0dhMq1JDcwMqnPzxWPcRm2pIuE49EAS7-6S9vHFg4"
        }
      ]
    },
    {
      "poster": {
        "name": "Dorothy Nanyan Li",
        "linkedin_url": "https://www.linkedin.com/in/dorothynanyanli"
      },
      "text": "Exciting news to share from Ignite today. Microsoft Security Copilot is now included for all Microsoft 365 E5 customers! That means AI-powered security agents are built right into the tools security and IT teams use every day—helping defenders shift from reactive to proactive.\n\nWe are also introducing:\n✅ 40+ new agents are here, including 12 Microsoft-built agents across Defender, Entra, Intune, and Purview\n✅ 30+ additional partner-built agents to extend protection across your entire environment\n\nOur goal is simple: empower security professionals to stay ahead by putting AI agents to work alongside your team—accelerating investigations, streamlining tasks, and delivering smarter outcomes.\n\n🔗 Read the full announcement: https://lnkd.in/g9p9k8XU\n\n🙌 A huge thank you to the incredible teams making this possible!\nIf you’re at Ignite, come visit us to explore how agents are transforming security and IT.\n#SecurityCopilot #Microsoft365E5 #Cybersecurity #AI #MSIgnite",
      "attributes": [],
      "urn": "7396605268102590464",
      "num_comments": 27,
      "num_likes": 500,
      "time": "2 weeks ago • Edited • Visible to anyone on or off LinkedIn",
      "reshared": true,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/dorothynanyanli_securitycopilot-microsoft365e5-cybersecurity-activity-7396578643185065984-E6VQ",
      "num_praises": 70,
      "num_empathy": 49,
      "num_interests": 4,
      "num_appreciations": 1,
      "images": []
    },
    {
      "poster": {
        "name": "Charles Lamanna",
        "linkedin_url": "https://www.linkedin.com/in/charleslamanna"
      },
      "text": "Today, we’re introducing Agent 365 – a new agent control plane to help every organization scale AI agents.\n \nWith Agent 365, you can manage and secure agents with the same rigor you apply to people, apps, and data. This spans 5 key things:\n✅ A unified registry to track every agent across your organization\n✅ Access control for built-in policy enforcement from day one\n✅ Visualization and insights to monitor usage, performance, and ROI\n✅ Interoperability across Microsoft, open-source, and partner ecosystems\n✅ Security with enterprise-grade compliance via Defender, Entra, and Purview\n \nAgent 365 provides the foundation to run and secure all your agents in a single place - whether you’re building agents in Copilot Studio and Microsoft Foundry or using ones from partners across our growing ecosystem. \n \nThis is how we move from experimentation to transformation as Frontier Firms and I can’t wait to share more about this at #MSIgnite this week!\n \nYou can check out the blog for all the details: https://lnkd.in/gsanjZuh",
      "attributes": [],
      "urn": "7396600769631805440",
      "num_comments": 53,
      "num_likes": 1941,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": true,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/charleslamanna_microsoft-agent-365-the-control-plane-for-activity-7396584048422260737-US95",
      "num_praises": 199,
      "num_empathy": 138,
      "num_interests": 36,
      "num_appreciations": 2,
      "images": []
    },
    {
      "poster": {
        "name": "Frank X. Shaw",
        "linkedin_url": "https://www.linkedin.com/in/fxshaw"
      },
      "text": "Every organization faces the same question: How will we compete when AI isn’t just a tool, but a creator, trusted researcher, analyst, and more?\n \nWe are seeing the rise of frontier firms across every industry. These are companies that combine human ambition with AI intelligence and agent ecosystems to create new operating models. That’s the essence of an AI-first company.\n \nToday at #MSIgnite, we will tell the story of how we’re enabling these firms with technology that removes friction between intent and execution. From Work IQ in Microsoft 365 to our agent-driven future, these tools are unlocking potential. And we’re embedding trust at every layer, because innovation without integrity isn’t innovation at all. The world’s platform for this transformation? Azure—engineered for performance, security, and planetary-scale AI.\n \nThis isn’t just about technology. It’s about Microsoft empowering every person on organization to create, connect, and lead in ways that were unimaginable a decade ago.\n \n👉 Learn more about our news today here:",
      "attributes": [],
      "urn": "7396598281704894464",
      "num_comments": 5,
      "num_likes": 133,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": true,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/fxshaw_from-idea-to-deployment-the-complete-lifecycle-activity-7396578136546713600-aazG",
      "num_praises": 9,
      "num_empathy": 5,
      "num_interests": 5,
      "num_appreciations": 1,
      "images": []
    },
    {
      "poster": {
        "name": "Nick Parker",
        "linkedin_url": "https://www.linkedin.com/in/nick-parker-0007aa46"
      },
      "text": "Levi Strauss & Co. is showing what it means to be an AI-first, frontier company, threading nearly 175 years of heritage with cutting-edge technology to transform retail. \n\nPartnering with Microsoft, LS&Co. is leveraging cloud and AI innovation to rewire operations and empower teams across corporate, retail, and warehouse environments. \n\nThe latest milestone: a next generation superagent built on Azure and embedded in Microsoft Teams, streamlining workflows. Employees will no longer have to worry about which agent (IT, HR, Finance, etc.) is best suited to help them. The new superagent helps deliver better support, insights and automation throughout the business, making complex and repetitive work more efficient and accessible.\n\nOur Microsoft retail industry team, led by Keith Mercier, is working with Levi Strauss & Co. to demonstrate how iconic brands can lead the frontier of digital transformation with Microsoft AI at the core. \n\nMichelle Gass Jason Gowans \n\nDiscover how Levi’s is reimagining retail with AI: https://lnkd.in/ggT_KWXU.",
      "attributes": [],
      "urn": "7396357515380391936",
      "num_comments": 45,
      "num_likes": 555,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": true,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/nick-parker-0007aa46_levi-strauss-co-is-showing-what-it-means-activity-7396330372067704832-hm54",
      "num_praises": 55,
      "num_empathy": 21,
      "num_interests": 10,
      "num_appreciations": 2,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGnzXTBxHi8Lw/feedshare-shrink_480/B56ZqULQ.nJ4AY-/0/1763422576421?e=1766620800&v=beta&t=isdHOqsFK_H-568AD2WXt9LvRAnN3nu50wqxHq9UJRo"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Ignite is your opportunity to gain insights, grow your network and spark innovation. 🌟\n \nRegister now and get ready to lead what's next: http://msft.it/6049tOqtz\n\n#MSIgnite",
      "attributes": [],
      "urn": "7395012553472581632",
      "num_comments": 0,
      "num_likes": 6,
      "time": "3 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_msignite-activity-7395012553472581632-kHfc",
      "num_empathy": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQHU-j9Bec-gZQ/image-shrink_800/B56ZqBcq0gI0Ak-/0/1763108368861?e=1765789200&v=beta&t=lzf1fCIBwDf2UYzkzhhmnrt2GXSQNnAyb_MDIlievZQ"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQG8mQR7BAVxww/image-shrink_800/B56ZqBcrBhJkAc-/0/1763108369379?e=1765789200&v=beta&t=VkzopRx_TUQjN3s01x5EHhMhAwMzs74Jq_4Wj2omHag"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQGBHWtl9bxuFQ/image-shrink_800/B56ZqBcrM4HYAc-/0/1763108369906?e=1765789200&v=beta&t=NnE2YuWlLXFOJ3VUTsUhKTW0ak_vmPXofrPNQKSOecU"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Got a kindness card up your sleeve? Kindness at work isn’t about grand gestures—it’s the small, thoughtful things that make someone’s day easier.\n\nThis #WorldKindnessDay build them into the way you work with this deck of simple Copilot suggestions.\n\n#MicrosoftASEAN",
      "attributes": [],
      "urn": "7394660305215295488",
      "num_comments": 1,
      "num_likes": 5,
      "time": "3 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_worldkindnessday-microsoftasean-activity-7394660305215295488-bASn",
      "num_empathy": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQHETkee5Fg4NA/image-shrink_20/B56Zp8B2jUKEAY-/0/1763017452604?e=1765789200&v=beta&t=6aLlbhctOgdTPPmCQ3GnsBFofMNcvTQ_aqcdBYtMhS4"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQE2JSrv7OesHw/image-shrink_800/B56Zp8B5SpG4Ag-/0/1763017463489?e=1765789200&v=beta&t=QfzYHVGcH7TNEr0JAUJ8NXz0Ms8aQX5RIOOr2UO7Q30"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQFyPAHs4d4vKw/image-shrink_800/B56Zp8B8CdH8Ac-/0/1763017475185?e=1765789200&v=beta&t=rJdOoxo2smDgiihLWRdZq8XBUhZ9q_N5TxXbOmRTJA8"
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQEGfJa9KdtziA/image-shrink_800/B56Zp8B.xsIYAc-/0/1763017486245?e=1765789200&v=beta&t=CYRHltlpLrkWCqLwzPx6e4c_s2GXo9hp4-n3aGe9olw"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "If you’re leading IT, you’re leading AI.\n\nAnd that means tackling new security, management, and productivity challenges every day.\n\nLearn how Microsoft 365 empowers IT leaders to simplify operations, scale AI confidently, and protect what matters most.\n\nGet practical strategies and real-world insights in our new e-book.\nDownload now: http://msft.it/6043t3FzH\n\n#MicrosoftASEAN",
      "attributes": [],
      "urn": "7394615061773934592",
      "num_comments": 0,
      "num_likes": 21,
      "time": "3 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_mastering-ai-and-it-complexity-a-technical-activity-7394615061773934592-u5C_",
      "num_empathy": 2,
      "num_praises": 1,
      "images": []
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "🤔 Still comparing AI models the hard way? Our leaderboard makes it easy. Explore, test, and deploy—all in Azure AI Foundry: http://msft.it/6040tMuYI",
      "attributes": [],
      "urn": "7393907644190715904",
      "num_comments": 0,
      "num_likes": 8,
      "time": "3 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_model-leaderboards-activity-7393907644190715904-4pgV",
      "images": []
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Traditional RAG searches data—next-gen RAG gives you knowledge. \n\nMeet Microsoft Foundry IQ—powered by Azure AI Search—delivering the right context to agents, all from a single knowledge base. \n\nLearn more: http://msft.it/6043tT0u3 \n\n#MSIgnite",
      "attributes": [],
      "urn": "7397499052076011520",
      "num_comments": 0,
      "num_likes": 7,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_msignite-activity-7397499052076011520-xFIA",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQFGKXj4d1iJrg/image-shrink_480/B56ZqkyJiLKwAo-/0/1763701202109?e=1765789200&v=beta&t=n-iTCwo9IucaAAX1XM9U32CIqkvxNvNjs7LbAW-2JeU"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "🚀 Supercharge your apps with AI + data!\n\nExplore the new Microsoft Learn Plan: \n✅ Integrate AI services\n✅ Build intelligent, scalable apps with Azure Database for PostgreSQL.\n\nLearn More: http://msft.it/6043tRkeX",
      "attributes": [],
      "urn": "7397438604542849025",
      "num_comments": 0,
      "num_likes": 3,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_supercharge-your-apps-with-ai-data-activity-7397438604542849025-msaR",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQHP-XsUxQFzaQ/image-shrink_800/B56Zqf14UjHAAg-/0/1763618293491?e=1765789200&v=beta&t=Ji9aN4AXSH1NnB_zLx4sAH-vrEVOfmf919kIzOE0mck"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Build agentic experiences and unify data concepts of business into centralized knowledge.\n\n📣Introducing Microsoft Fabric IQ: Your business map linking data and actions so agents can reason, act, and continuously learn—and your business can thrive.\n\nLearn more: http://msft.it/6045tTE6x \n\n#MSIgnite #MicrosoftFabric",
      "attributes": [],
      "urn": "7397181934994452480",
      "num_comments": 0,
      "num_likes": 3,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_msignite-microsoftfabric-activity-7397181934994452480-DSvU",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQGkULTUF2y4zg/image-shrink_800/B56ZqgHu4eKAAc-/0/1763622974058?e=1765789200&v=beta&t=SAEPeBG6AQEZ3ZuKkoEIOKvXC2BkzEYCkDkSEs6A69c"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Agents should work with what’s already working. Instantly tap into 1,400 business connectors, an ecosystem of partner tools, and your own custom logic to realize value faster in Azure AI Foundry.\n\n Learn more: http://msft.it/6045tTDBV \n\n#MSIgnite #AzureAIFoundry",
      "attributes": [],
      "urn": "7397154298083782656",
      "num_comments": 0,
      "num_likes": 7,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_msignite-azureaifoundry-activity-7397154298083782656-wsSa",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQFVatJD69K3NQ/image-shrink_160/B56Zqf4lKtHkAo-/0/1763619001788?e=1765789200&v=beta&t=B4ZzJnO9i7uBV5aV0HE-20FXYYTKYYCaHSTC7xm0XWQ"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "TL;DR? Let #Copilot cut through the clutter and give you what you need in seconds. Try #CopilotChat now: http://msft.it/6047tXZif",
      "attributes": [],
      "urn": "7400081016809414656",
      "num_comments": 0,
      "num_likes": 5,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_summarizing-key-points-on-long-documents-activity-7400081016809414656-4m1j",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQEWCIJFJMi9vg/mp4-720p-30fp-crf28/B56ZrFzPI9IcB4-/0/1764255137151?e=1765789200&v=beta&t=jT-weMVwv9G2OlqoMnenJSc4ulcRhStXv1GkzEXnuyg",
        "duration": 13000
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Great leadership isn’t something you gatekeep. It’s something you grow, reflect on and share.\n\nTo lead well, you need to know your team—what motivates them, where they shine, and what they aspire to achieve.\n\nIt’s about listening deeply, asking the right questions, and making time for real conversations. When you understand your people, you can connect their strengths to the team’s mission—and help them grow in ways that matter.\n\n▶ Explore the Know mindset in our Microsoft Management Excellence course on LinkedIn Learning: https://msft.it/6049sfcRf\n\n#MicrosoftCareersAsia",
      "attributes": [],
      "urn": "7397091319430598657",
      "num_comments": 8,
      "num_likes": 97,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoftcareersasia-activity-7397091319430598657-7ExY",
      "num_empathy": 4,
      "num_interests": 2,
      "num_praises": 1,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQGTJbvYojUlhg/image-shrink_800/B56ZqbaEXbI0Ac-/0/1763543894139?e=1765789200&v=beta&t=7QNlW8yroO9aErAvOH9gFlYlNn_8feVLA1cmN0rHVNw"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "For IT leaders, the challenge isn’t adopting AI — it’s managing it securely and efficiently.\n\nWith Microsoft 365 and Copilot, you can automate repetitive tasks to reduce IT workload, simplify management through centralized tools for better visibility and control, and deliver intelligent assistance seamlessly across everyday apps.\n\nDiscover how you can minimize IT effort and maximize AI output in our latest e-book: http://msft.it/6047tumVR\n\n#MicrosoftASEAN #SecureProductivity #AI #ITLeaders",
      "attributes": [],
      "urn": "7397091339277893632",
      "num_comments": 0,
      "num_likes": 11,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoftasean-secureproductivity-ai-activity-7397091339277893632-BAGP",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQHOGZFhcBi86A/image-shrink_160/B56Zqabz1QHQAs-/0/1763527573975?e=1765789200&v=beta&t=yyBnlF9lNgTorJsM1S-Qq7lWlRNHk9-Zwlb5-bLgZDE"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Learn how to design agentic AI solutions that users trust—while preparing your organization for more autonomous, high-value use cases. Explore actionable insights in this Gartner® report: http://msft.it/6044tXwLY",
      "attributes": [],
      "urn": "7399703549779304449",
      "num_comments": 1,
      "num_likes": 11,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_gartner-emerging-tech-activity-7399703549779304449-gkDW",
      "num_interests": 1,
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQHvnOCzXTKUKw/mp4-720p-30fp-crf28/B56Zq_1AkjJYB4-/0/1764154937816?e=1765789200&v=beta&t=7ISLY5Ir5JssmRL4NGeLGRPmMz4thvL0AJ53XbkD3J0",
        "duration": 9133
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "When the words don’t flow, #Copilot gets you started. From blank page to first draft, fast. Try #CopilotChat now: http://msft.it/6045tXZ9l",
      "attributes": [],
      "urn": "7399386455896154112",
      "num_comments": 0,
      "num_likes": 1,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_writers-blocking-during-the-midweek-slump-activity-7399386455896154112-XR1C",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGOPQ_KQc0QrQ/mp4-720p-30fp-crf28/B56Zq_ZGJ0J8B4-/0/1764147622204?e=1765789200&v=beta&t=xy1GMS9HLqAsyR4znAscgmwgkoW0vCI3jv3MXgJ760k",
        "duration": 22033
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Don’t let post-meeting momentum fade. With #Copilot, follow-ups are just a prompt away. Try #CopilotChat now: http://msft.it/6187tXkVR",
      "attributes": [],
      "urn": "7399368666900983808",
      "num_comments": 0,
      "num_likes": 1,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_meeting-recap-activity-7399368666900983808-ZCqd",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQH6t7iNhkxVeg/mp4-720p-30fp-crf28/B56Zq_WiiaHIB8-/0/1764146950251?e=1765789200&v=beta&t=TKXxLkYuGQQUKN4dySSMARuyMPznHcJyhcW79WK0wQI",
        "duration": 19666
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "🎉 From automating reminders and summarizing updates to scheduling meetings in seconds, AI Workflows in Teams and SharePoint can take the busywork off your plate. Check it out: http://msft.it/6042tRken",
      "attributes": [],
      "urn": "7399250564879978496",
      "num_comments": 1,
      "num_likes": 4,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_workflows-in-teams-activity-7399250564879978496-S9jZ",
      "num_interests": 1,
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGB1z-RWtj77w/mp4-720p-30fp-crf28/B56Zq6MvnpJkB4-/0/1764060496804?e=1765789200&v=beta&t=wmYC7uzN4hVxqEzHaITYs1ZC9Dl6E-WZ_adAY6HBuX4",
        "duration": 14033
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "🚀 From idea to deployment, Microsoft is driving the complete AI lifecycle at Ignite 2025.\n🤖 Discover how to become a Frontier Firms with Copilot, Work IQ, Foundry IQ, and Microsoft Agent 365.\n👉 For more details, visit : http://msft.it/6041trTfW\n\n#AI #Copilot #WorkIQ #FoundryIQ #MicrosoftIgnite #MicrosoftVietnam",
      "attributes": [],
      "urn": "7396817072867041280",
      "num_comments": 0,
      "num_likes": 3,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_ai-copilot-workiq-activity-7396817072867041280-rwc0",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQFy4KK5tBwAUg/image-shrink_800/B56ZqbF4MuJQAc-/0/1763538601649?e=1765789200&v=beta&t=njNexOjB1aUOXyZb_a-EPe0YFm5dwJ1JZqiquTBbCbA"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "New app icons 🤩 What's your favorite?",
      "attributes": [],
      "urn": "7396728943975829504",
      "num_comments": 1,
      "num_likes": 5,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_new-app-icons-whats-your-favorite-activity-7396728943975829504-PuHa",
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQGdWPrIzOodxA/image-shrink_20/B56ZqWiVM4HIAY-/0/1763462174484?e=1765789200&v=beta&t=_8RvOk5ti-mfLffO4E269gGXWyuhGsGSTDVbGrAK5CI"
        }
      ]
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Is that a giant Lego datacentre?\n\nSarah Young wraps her week at #MSIgnite with a few final highlights.\n\nMissed Microsoft Ignite? Join us at our Ignite Download event on December 4 to unpack the announcements. Register now: http://msft.it/6045tn54Z\n\n#MicrosoftAsia #IgniteDownload",
      "attributes": [],
      "urn": "7398896125929455616",
      "num_comments": 0,
      "num_likes": 3,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoft-ignite-wrap-activity-7398896125929455616-kMFm",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFrbbHkkX1PTQ/mp4-720p-30fp-crf28/B56Zq4outBJUB4-/0/1764034289131?e=1765789200&v=beta&t=Xk6a5avOpWDJ4NtfXer9gA9j639cTFv3KGwIGs3qh34",
        "duration": 63866
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "#MSIgnite — it's a wrap! More than 20,000 attendees joined us in San Francisco and Sonia Cuff says everyone is talking about Microsoft Agent 365.\n\nWe'll unpack all the top announcements at our Ignite Download event on December 4. Register now: http://msft.it/6044tn5f8\n\n#MicrosoftAsia #IgniteDownload",
      "attributes": [],
      "urn": "7398896165104066560",
      "num_comments": 0,
      "num_likes": 4,
      "time": "1 week ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoft-ignite-activity-7398896165104066560-4P5r",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQF6kw8umdIoQw/mp4-720p-30fp-crf28/B56Zq4ozYeHQB4-/0/1764034302056?e=1765789200&v=beta&t=xQv953n30zQoBh05FId0FFgi5DBNQk2L4-lm55U8XnQ",
        "duration": 33466
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Interactive storytelling is the next billion-dollar industry — powered by AI. \n\nWatch Djay Lee’s insights now: http://msft.it/6048tzVhY\n\n#AIEntertainment #CharacterChat #GenerativeAI #WRTN #TheAIEdge",
      "attributes": [],
      "urn": "7398540885887680513",
      "num_comments": 0,
      "num_likes": 3,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_the-rise-of-ai-character-chat-activity-7398540885887680513-gcon",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQF3Pq2g9p-0uA/mp4-720p-30fp-crf28/B56ZqvbZeTJ8B8-/0/1763879791960?e=1765789200&v=beta&t=OK9P_wJ4EqGHanp38z4HfdzRRqBlUhut6AEMtM8Ea50",
        "duration": 45166
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "The buzz continues! What are the game-changing security announcements coming out of #MSIgnite?\n\nSarah Young caught up with cybersecurity executive Shiv Prasad to chat about the inclusion of Security Copilot in Microsoft 365 E5.\n\nCheck out what's new in security: http://msft.it/6041tTFkL\n\n#MicrosoftAsia #IgniteDownload",
      "attributes": [],
      "urn": "7397574501288439808",
      "num_comments": 0,
      "num_likes": 5,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoft-ignite-security-announcements-activity-7397574501288439808-vtON",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQF3_RoOHMhaqg/mp4-720p-30fp-crf28/B56ZqlPngyIYB4-/0/1763708936401?e=1765789200&v=beta&t=05EOC7JvEkOlvPKuQKuug0RLVl9_-GZeTiLzhHgwlJo",
        "duration": 71766
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Sonia checks in from San Francisco at #MSIgnite, where the Hub, labs, and breakouts are running at full speed.\n\nMissed something? Catch up on Microsoft Ignite on demand: http://msft.it/6048tTFkr\n\n#MicrosoftAsia #IgniteDownload",
      "attributes": [],
      "urn": "7397544303079661568",
      "num_comments": 0,
      "num_likes": 1,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_microsoft-ignite-activity-7397544303079661568-IKZE",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQGYQ2aUpZSIBQ/mp4-720p-30fp-crf28/B56ZqlMT8pHYB4-/0/1763708064914?e=1765789200&v=beta&t=CFOQDL82Ayrh3RIDi-kF-lHzsKU4lOtAt2-aLFgAeec",
        "duration": 30066
      }
    },
    {
      "poster": {
        "name": "Microsoft",
        "linkedin_url": "https://www.linkedin.com/company/microsoft/posts"
      },
      "text": "Introducing Work IQ – the intelligence layer in Microsoft 365 Copilot that understands you, your work and your organisation. \n\nRead more: http://msft.it/6043tT0uX \n\n#MSIgnite",
      "attributes": [],
      "urn": "7397514101889011712",
      "num_comments": 0,
      "num_likes": 4,
      "time": "2 weeks ago • Visible to anyone on or off LinkedIn",
      "reshared": false,
      "posted": "2025-12-08T08:14:14.174Z",
      "url": "https://www.linkedin.com/posts/microsoft_introducing-work-iq-activity-7397514101889011712-sazN",
      "images": [],
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D5610AQFCae7AyltwjQ/mp4-720p-30fp-crf28/B56ZqkzlsqIcB8-/0/1763701580210?e=1765789200&v=beta&t=MZBUgFbj_sYlpQ1igAI7aL8bRGTv4fyO18LyHmPJAI0",
        "duration": 6533
      }
    }
  ],
  "paging": {
    "count": 50,
    "start": 0,
    "pagination_token": "1151700871-1765181650467-69522b9c76a78c86c84249897c6520c0"
  }
}
```

  </TabItem>
</Tabs>

## Response Fields

| Field | Description |
|-------|-------------|
| `message` | "ok" on success |
| `data` | Array of post objects |
| `data[].urn` | Post URN identifier |
| `data[].text` | Post text content |
| `data[].time` | Relative time with visibility info |
| `data[].posted` | Posted timestamp |
| `data[].url` | Full URL to the post |
| `data[].num_comments` | Comment count |
| `data[].num_likes` | Like reaction count |
| `data[].num_empathy` | Empathy reaction count |
| `data[].num_praises` | Praise reaction count |
| `data[].num_appreciations` | Appreciation count |
| `data[].num_interests` | Interest reaction count |
| `data[].poster.name` | Company name |
| `data[].poster.linkedin_url` | Company posts URL |
| `data[].images` | Array of image objects |
| `data[].video` | Video info (if any) |
| `data[].reshared` | Boolean - is this a reshare |
| `paging.pagination_token` | Token for next page |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Posts returned |
| 400 | Invalid Parameter - Missing or invalid `linkedin_url` |
| 404 | Company page is unavailable |
| 429 | Too many requests |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |
