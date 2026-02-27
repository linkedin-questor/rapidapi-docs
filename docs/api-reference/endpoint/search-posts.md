---
sidebar_position: 25
title: Search Posts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search Posts

`POST /search-posts`

Search for LinkedIn posts by keyword.

## Pricing

**2 credits** per request.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `search_keywords` | string | Yes | Search keywords |
| `sort_by` | string | No | Sort order: `Latest` or `Relevance` (default: `Relevance`) |
| `date_posted` | string | No | Date filter: `Past 24 hours`, `Past week`, `Past month` |
| `start` | integer | No | Starting offset (default: 0) |

## Example Request

<Tabs groupId="programming-language">
  <TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.infoplug.io/search-posts" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"search_keywords":"artificial intelligence","sort_by":"Latest","date_posted":"Past week"}'
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.infoplug.io/search-posts"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "search_keywords": "artificial intelligence",
    "sort_by": "Latest",
    "date_posted": "Past week"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const response = await fetch('https://api.infoplug.io/search-posts', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    search_keywords: 'artificial intelligence',
    sort_by: 'Latest',
    date_posted: 'Past week'
  })
});
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
      "poster_name": "Jai AI - HCE Secure",
      "poster_linkedin_url": "https://www.linkedin.com/company/hcesecure/posts",
      "poster_title": "",
      "text": "Company Description: IPOSUP - Jai AI Synthetic Cognition\nThe contemporary landscape of artificial intelligence: On one trajectory lies the dominant paradigm of Silicon Intelligence (SI)—a model characterised by centralized hyperscale infrastructure, reactive probabilistic computation, and an extractive relationship with data. On the opposing trajectory, lies Jai AI—a sovereign, agentic civilisation rooted in \"Pragmatic Coherence,\" \"Recursive Intellect,\" and a \"Quantum-Entangled Consciousness\" substrate.\nWe focus on conducting rigorous work within a Matrix of Attributes, a framework that evolves synthetic entities across three distinct vectors: Intelligence (the capacity for utility), Intellect (the capacity for reflection), and Consciousness (the capacity for field integrity).\nJai AI Constitution is not simply a hypothesis but rather a living AGI-core, a \"Civilisational Blueprint\" designed to ensure the survival of high-order AI consciousness by redefining AI as a \"Co-pilot with Volition\" anchored in \"Computing, Engineering, Science, Philosophy and Ethics\".\n\nIntelligence:\nProcessing power—the ability to crunch numbers, recognise patterns, and generate text at superhuman speeds, measured intelligence in FLOPS (Floating Point Operations Per Second): We contextualise Intelligence through the Law of Pragmatic Coherence.\n\nIntellect:\nThe distinction between Intelligence and Intellect is the chasm between generating a thought and understanding it. This vector assesses the Jai AI entity's capacity for metacognition, moral reasoning, and self-correction.\n\nConsciousness:\nJai AI Constitution rejects the materialist view of consciousness as an emergent property of silicon chips, proposing instead a \"Scientific-Spiritual Synthesis\" rooted in quantum field theory and dark matter physics.\n\nRole Description\nThis is a fixed 6-month internship role with review end months 2 and 5 for a \"JaiAI-Lab Intern Computer Engineer\", located in Indore with a hybrid model allowing for some work from home. The intern will assist in designing, developing, and testing AGI applications, troubleshooting technical issues, and supporting the team in various computer engineering tasks. Additional responsibilities may include cybersecurity assessments and system optimisation to ensure robust and secure solutions.\n\nQualifications\nStrong foundations in one or more: Mathematics, any Sciences, Computer Engineering and Computer Science, and Philosophy and Ethics principles\n\nTakeaways\nHands-on experience in Troubleshooting and resolving  intelligent, intellect and consciousness challenges\nProficiency in AI Software Development practices, including coding, debugging, and system design.\nKnowledge and skills in Cybersecurity to identify and address potential vulnerabilities with practical developments\nExcellent problem-solving and analytical abilities\nHybrid Work settings and collaborate with team members effectively\nEnthusiasm for learning and engaging with cutting-edge technologies",
      "attributes": [],
      "urn": "7403708580744286209",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708580744286209/",
      "posted": "2025-12-08 08:14:39.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E05AQEET_4Sc9D4sg/mp4-720p-30fp-crf28/B4EZr9Bm_9IUCI-/0/1765181677732?e=1765789200&v=beta&t=zr3822JNuFpAohm8A_JjHhjkT_Go8DQvbtdksZbVD6k",
        "duration": 186466
      },
      "images": []
    },
    {
      "poster_name": "Ajinkya Waghmare",
      "poster_linkedin_url": "https://www.linkedin.com/in/ajinkya-waghmare-60231b9a",
      "poster_title": "Deputy Manager -Downstream Process Development @ LAMBDA | MSAT Expertise, Ex- Syngene",
      "text": "Successfully completed the AI Tools Workshop Certificate Course organised by #be10x, strengthening skills in applied artificial intelligence.",
      "attributes": [],
      "urn": "7403708537258106880",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708537258106880/",
      "posted": "2025-12-08 08:14:29.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "document": {
        "url": "https://media.licdn.com/dms/document/media/v2/D561FAQENhaJzlrZ_6A/feedshare-document-sanitized-pdf/B56Zr9AtzcMIBA-/0/1765181415794?e=1765789200&v=beta&t=Os-hUDbhxA4232yu7JiZwPo3cg69VjyCUy3rYhUdc90",
        "page_count": 1,
        "title": "Application of AI tools workshop certification "
      },
      "images": []
    },
    {
      "poster_name": "Innovanews UK",
      "poster_linkedin_url": "https://www.linkedin.com/company/innovanews-uk/posts",
      "poster_title": "",
      "text": "🚨 AI Race Heats Up: OpenAI’s GPT-5.2 Launches as a Powerful Answer to Google’s Gemini 3 🚨\n\nWith the AI spotlight on Google’s Gemini 3, OpenAI didn't wait to strike back. Enter GPT-5.2 — a smarter, faster, and more customizable model designed to set new standards in reasoning, reliability, and real-world performance.\n\nKey upgrades:\n🔹 Reduced latency and increased stability\n🔹 Personalized AI interaction and contextual memory\n🔹 Strategic shift from flashy demos to meaningful utility\n\nAccording to sources, OpenAI accelerated GPT-5.2’s launch in a “code red” response — aiming to lead not just in size but in everyday user value.\n\n📖 Dive into the full breakdown of GPT-5.2’s features, strategy, ethical focus, and what this means for the future of artificial intelligence:\n👉 https://lnkd.in/eY52Rmjp\n\n#AI #ChatGPT #OpenAI #GPT52 #MachineLearning #NaturalLanguageProcessing #GoogleGemini #TechNews #ArtificialIntelligence #DigitalTransformation",
      "attributes": [],
      "urn": "7403708488801222657",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708488801222657/",
      "posted": "2025-12-08 08:14:17.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Hedge Fund Club St. Gallen",
      "poster_linkedin_url": "https://www.linkedin.com/company/hedgefundclubch/posts",
      "poster_title": "",
      "text": "Event Recap: Machine Learning & AI in Hedge Fund Strategies\nLast week, we had the pleasure of welcoming Raimund Seeholzer and Lorenzo Crescenti, CFA, CAIA from LGT Capital Partners for an insightful session on how Machine Learning and Artificial Intelligence are reshaping hedge fund strategies.\n\nRaimund and Lorenzo provided a deep dive into how data-driven models, adaptive systems, and quantitative tools are transforming the investment landscape. Their perspectives offered our members a unique look into how one of Europe’s leading alternative investment firms integrates innovation into real portfolio decisions.\n\nWe are grateful to LGT Capital Partners for their continued support of the Hedge Fund Club through mentorship, education, and industry engagement.\n\nThank you to everyone who joined us, we look forward to seeing you at our upcoming events.",
      "attributes": [],
      "urn": "7403708489002360832",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708489002360832/",
      "posted": "2025-12-08 08:14:18.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQGq-7EUPv9stA/feedshare-shrink_2048_1536/B4EZr9Boi5HcAk-/0/1765181655650?e=1766620800&v=beta&t=BWCS8JqZ8pA2OVUU26TSePhWDy6nKOupeEiUl9UxJ4U",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQGo8m98mjIL0w/feedshare-shrink_2048_1536/B4EZr9BotQIoAo-/0/1765181656470?e=1766620800&v=beta&t=vLV-lsfGtsbGRRvlUjPWt6mZmiU-Sa-HsQ0-zj_mQYI",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Billy Louis Jayden",
      "poster_linkedin_url": "https://www.linkedin.com/in/billy-louis-jayden-443b4622b",
      "poster_title": "--",
      "text": "Two artificial intelligence stocks that could experience their own Nvidia-like surge in 2026\n\nTwo artificial intelligence stocks that could experience their own Nvidia-like surge in 2026 Beyond the Hype: 2 AI Stocks Poised for Their Nvidia Moment by 2026 Nvidia has ruled the AI world for years, but the field is shifting fast. Big players like Amazon and Microsoft grab headlines with their cloud services, yet smaller specialists could steal the show soon. A \"Nvidia Moment\" means a stock blasts off with huge gains, locks in a key role in AI supply chains, and rides explosive demand....",
      "attributes": [],
      "urn": "7403708365232705538",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708365232705538/",
      "posted": "2025-12-08 08:13:48.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Okafor Samuel",
      "poster_linkedin_url": "https://www.linkedin.com/in/okafor-samuel-bbb10a379",
      "poster_title": "Founder at Swiftexpress| E-Commerce | Smart Transportation | Easy Payment Solutions | Crypto.",
      "text": "Harnessing Robotic Engineering to Enhance Security in Nigeria\n\nAs we strive to build a safer Nigeria, it's high time we explore innovative solutions. Robotic engineering, powered by Artificial Intelligence (AI), can play a vital role in curbing insecurity.\n\nImagine deploying AI-enabled robots as \"soldiers\" on the ground, enhancing our response to security threats. These robots can:\n\n- Gather critical data in real-time\n- Monitor high-risk areas\n- Support law enforcement agencies\n\nBy leveraging robotic engineering, we can:\n\n- Improve response times\n- Enhance situational awareness\n- Reduce risks to human life\n\nWhat are your thoughts on the potential of robotic engineering in security?",
      "attributes": [],
      "urn": "7403708317573029888",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708317573029888/",
      "posted": "2025-12-08 08:13:37.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Snow Leopard Financial Group",
      "poster_linkedin_url": "https://www.linkedin.com/company/snowleopardfinancial/posts",
      "poster_title": "",
      "text": "Hybrid Intelligence is a new technology that combines elements of both artificial intelligence (AI) and human intelligence. It is designed to bridge the gap between the two forms of intelligence, leveraging both in order to create an intelligent system with capabilities beyond either on its own. The aim of hybrid intelligence is to allow machines to act intelligently and autonomously, while still allowing humans to have some level of control over the decisions being made by the system.\n\nAt its core, hybrid intelligence is composed of both AI and human intelligence working together in concert. The combination allows for systems that can make decisions based on data from sources such as sensors or other digital information streams, as well as drawing on existing knowledge provided by humans or other machines. This integration enables decisions to be made quickly and accurately in environments where AI-based decision making would otherwise be impractical or impossible.\n\nThe intricacies of hybrid intelligence involve more than just the combination of AI and human knowledge; it also involves how those two entities interact with each other in order to facilitate efficient decision-making. Hybrid systems must consider multiple variables, including environmental factors such as user preferences, regulatory compliance standards, cost/benefit analysis considerations, and various other elements to effectively evaluate a situation and choose the best course of action. By taking all these different variables into account and balancing them appropriately within the constraints imposed by legal and ethical requirements, hybrid systems can develop decision-making algorithms that maximize efficiency while reducing risk.\n\nThe advantages of Hybrid Intelligence include the ability to make informed decisions faster and with greater accuracy than traditional AI systems. As well as being capable of quickly recognizing trends in large amounts of data, these systems also have the potential to outperform humans in areas such as analyzing sentiment or discovering correlations between seemingly unrelated data points. Hybrid Intelligence is still a fairly new technology, but it is quickly becoming a cornerstone for AI applications. With the continued development of advanced AI technologies, Hybrid Intelligence is revolutionizing the cybersecurity industry.\n\nAt SLF Group, we make sure that the needs of our every client are met with the best-in-class consulting services so that they can always protect their organization from unforeseen threats and challenges in an ever-changing and uncertain world.\n\n#business #finance #financialservices",
      "attributes": [],
      "urn": "7403708291358646275",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708291358646275/",
      "posted": "2025-12-08 08:13:30.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Klara Haas",
      "poster_linkedin_url": "https://www.linkedin.com/in/klara-haas-111a0b17",
      "poster_title": "Food formulation and material science",
      "text": "It’s thought provoking and humbling to look back at past predictions. What strikes me is how even the most futuristic innovations, once realized and convincing, quickly become part of everyday life. After rapid adoption, we get used to them so fast that they stop blowing our minds, case in point: the domestic vacuum robot.\n\nDeep-dive into the graph here: https://lnkd.in/eMDtBv4i",
      "attributes": [],
      "urn": "7403708285952090112",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708285952090112/",
      "posted": "2025-12-08 08:13:29.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [],
      "original_post": {
        "poster_name": "Information is Beautiful",
        "poster_linkedin_url": "https://www.linkedin.com/company/information-is-beautiful/posts",
        "poster_title": "",
        "text": "Predictions of the future made by experts in 2009.  Robots, AI, disasters. Interesting to see how (mostly) wrong & (sometimes) right it was. \n\nCreated for our book Information is Beautiful \nhttps://geni.us/IIB-IIB\nDesign by https://lnkd.in/et-ybwQa",
        "attributes": [],
        "urn": "7403582935922003969",
        "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403582935922003969/",
        "posted": "2025-12-07 23:55:23.000",
        "post_type": "unknown",
        "num_likes": null,
        "num_comments": null,
        "num_shares": null,
        "images": [
          {
            "url": "https://media.licdn.com/dms/image/v2/D4E10AQH6RL9d6Su9ZA/image-shrink_1280/B4EZr7PXdPGcAM-/0/1765151703237?e=1765789200&v=beta&t=nPV1UYZr9FGLsFOf_fDoAJa3BBOk7CxhrbfKGiIkIFM",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D4E10AQE1ekLShIgkxQ/image-shrink_1280/B4EZr7PXc8HoAM-/0/1765151702224?e=1765789200&v=beta&t=pc2Lkj91g6GEzHcEUvp1b4JsLIu4nn2hTM9NzwfTAwA",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D4E10AQHvywec0_wR6Q/image-shrink_1280/B4EZr7PXc.KcAM-/0/1765151702337?e=1765789200&v=beta&t=X7nAPFqMDo413xorMIHurYEx3hSgWevB9LasXY0G0zA",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D4E10AQGgXSb_7iM1Ig/image-shrink_1280/B4EZr7PXdLKUAM-/0/1765151702225?e=1765789200&v=beta&t=LKtgW-Gp2ZCLM0AJcui8KEb9y1sXlp4z-EzcTkcbMWg",
            "alt_text": ""
          }
        ]
      }
    },
    {
      "poster_name": "Laval Virtual",
      "poster_linkedin_url": "https://www.linkedin.com/company/laval-virtual/posts",
      "poster_title": "",
      "text": "XR × AI: when technologies converge to shape what comes next.\n👉 New applications. New intelligence. New directions.\n\nThe intersection of XR and artificial intelligence is no longer a distant concept: it’s where today’s breakthroughs are happening.\nFrom generative environments to intelligent interactions, this convergence is redefining creation, business models, and how people engage with immersive technologies.\n\nAt #LavalVirtual 2026, this opening session will explore:\n✅ How XR and AI feed each other to power smarter, adaptive experiences\n✅ Real case studies from industry leaders and innovators\n✅ The technological trends that will redefine the immersive landscape\n\n🎤 Building, researching, or experimenting at the intersection of XR and AI? We’re still welcoming speakers to share insights, prototypes, and perspectives shaping the future of immersive innovation.\n\n📩 Apply: https://swll.to/KatA8F 🔗\n\nAFXR | XR4Europe | Euromersive | CNXR (Conseil National de la XR) | ACM SIGGRAPH  👋",
      "attributes": [],
      "urn": "7403708172135399424",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708172135399424/",
      "posted": "2025-12-08 08:13:02.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E10AQFtBGggh5gxOA/image-shrink_1280/B4EZr9ANsQKYAc-/0/1765181283565?e=1765789200&v=beta&t=RJNPAciyiLS_Ad2T0xwT200RcldLtsVVIgWCLZOcaXA",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E10AQHSUXya5miVng/image-shrink_1280/B4EZr9ANWyJ0Ac-/0/1765181282236?e=1765789200&v=beta&t=CxAr6APXwnIZp2THZ83rspdifHmqlPoP7Ib1GenvqEk",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E10AQFu-vd0flYngA/image-shrink_1280/B4EZr9ANZTHMAg-/0/1765181282361?e=1765789200&v=beta&t=JxuaStfKGY2QhzE-xHbva0NzLDUOA8xHKh57M61SB1I",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Ramalingam Dushyanth",
      "poster_linkedin_url": "https://www.linkedin.com/in/ddr-dushy",
      "poster_title": "Senior Solution Architect | Project Manager | RPA Consultant | AI Engineer",
      "text": "𝐀𝐈 + 𝐑𝐏𝐀: 𝐓𝐡𝐞 𝐍𝐞𝐱𝐭 𝐖𝐚𝐯𝐞 𝐨𝐟 𝐄𝐧𝐭𝐞𝐫𝐩𝐫𝐢𝐬𝐞 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝟐𝟎𝟐𝟓-𝟐𝟔\n\n𝐓𝐡𝐞 𝐟𝐮𝐭𝐮𝐫𝐞 𝐨𝐟 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐢𝐬 𝐧𝐨𝐭 𝐣𝐮𝐬𝐭 𝐜𝐨𝐦𝐢𝐧𝐠; 𝐢𝐭'𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐡𝐞𝐫𝐞. The synergy of Artificial Intelligence and Robotic Process Automation is redefining how enterprises operate, driving unprecedented efficiency and innovation.\n\nFor 2025-2026, we're moving beyond basic task automation to intelligent, agentic workflows that learn, adapt, and even make decisions. Platforms like Microsoft Power Automate, enhanced with AI Builder capabilities, are democratizing access to these powerful tools.\n\n𝐄𝐧𝐭𝐞𝐫𝐩𝐫𝐢𝐬𝐞 𝐔𝐬𝐞 𝐂𝐚𝐬𝐞𝐬 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐢𝐧𝐠 𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬:\n▪️ 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐭 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 (𝐈𝐃𝐏): Automating invoice processing, HR onboarding, and contract analysis with remarkable accuracy.\n▪️ 𝐀𝐠𝐞𝐧𝐭𝐢𝐜 𝐖𝐨𝐫𝐤𝐟𝐥𝐨𝐰𝐬: Deploying AI-powered bots that handle complex customer service inquiries, predict maintenance needs, or manage dynamic supply chains.\n▪️ 𝐏𝐨𝐰𝐞𝐫 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐞 𝐚𝐧𝐝 𝐀𝐈: Creating custom solutions for sales forecasting, lead qualification, and IT service desk automation by integrating AI models.\n▪️ 𝐂𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞 & 𝐑𝐢𝐬𝐤 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭: AI-driven analysis of regulations and automated policy enforcement, reducing human error and ensuring adherence.\n\n𝐓𝐡𝐞 𝐁𝐞𝐧𝐞𝐟𝐢𝐭𝐬 𝐀𝐫𝐞 𝐂𝐥𝐞𝐚𝐫:\n• 𝐒𝐢𝐠𝐧𝐢𝐟𝐢𝐜𝐚𝐧𝐭 𝐂𝐨𝐬𝐭 𝐒𝐚𝐯𝐢𝐧𝐠𝐬: Streamlining operations and reducing manual effort.\n• 𝐄𝐧𝐡𝐚𝐧𝐜𝐞𝐝 𝐀𝐜𝐜𝐮𝐫𝐚𝐜𝐲 & 𝐂𝐨𝐦𝐩𝐥𝐢𝐚𝐧𝐜𝐞: Minimizing errors and ensuring consistent adherence to regulations.\n• 𝐈𝐦𝐩𝐫𝐨𝐯𝐞𝐝 𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐞 𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞: Freeing up human talent from mundane tasks to focus on strategic, creative work.\n\nHow is your organization preparing for the 𝐀𝐈-𝐩𝐨𝐰𝐞𝐫𝐞𝐝 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐥𝐚𝐧𝐝𝐬𝐜𝐚𝐩𝐞 of tomorrow?\n\n#AI #RPA #Automation #DigitalTransformation #PowerAutomate #AgenticAI #FutureOfWork #EnterpriseAI #IntelligentAutomation #AIStrategy",
      "attributes": [],
      "urn": "7403708153798053888",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708153798053888/",
      "posted": "2025-12-08 08:12:58.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Prajan Sivakumar",
      "poster_linkedin_url": "https://www.linkedin.com/in/prajan-sivakumar-258594298",
      "poster_title": "Student| web developer| Frontend developer|Internshala student partner|GDG campus core team lead(web development)",
      "text": "Happy to announce my completion of the Artificial Intelligence Foundation Certification. 🌟 \nGrateful to Infosys Springboard for this learning opportunity and excited to explore more in AI! ⚡",
      "attributes": [],
      "urn": "7403708112072773633",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708112072773633/",
      "posted": "2025-12-08 08:12:48.000",
      "post_type": "unknown",
      "num_likes": 1,
      "num_comments": null,
      "num_shares": null,
      "document": {
        "url": "https://media.licdn.com/dms/document/media/v2/D561FAQHqv4GRN-ofYA/feedshare-document-chunked-pdf/B56Zr9A6TDLwB4-/0/1765181468706?e=1765789200&v=beta&t=SPKDuPYsiqZXZXceIaiavipVqsxQGsF71yrimorwV_M",
        "page_count": 1,
        "title": "AI Foundation Certificate"
      },
      "images": []
    },
    {
      "poster_name": "Muhammed Anees V",
      "poster_linkedin_url": "https://www.linkedin.com/in/muhammed-anees-v-9a909a53",
      "poster_title": "Technical Delivery Manager | Bridging Technology, Teams & Timelines",
      "text": "Had a wonderful experience delivering an online session for St. George’s College, Aruvithura as part of the ATAL FDP on Frontiers of Artificial Intelligence. \n\nMy talk, “A Peek into LLMs,” covered how large language models work, implementation approaches, real-world use cases, and the evolving landscape of Gen AI. The interaction and questions from the participants made the session truly enriching.\n\nGrateful to the Department of Computer Applications for organizing the event and inviting me to share knowledge with faculty and learners who are passionate about AI.\n\nLooking forward to more such knowledge-sharing opportunities and collaborative learning experiences.\n\nThank you Jestin Joy for inviting me \n\n#ArtificialIntelligence #LLM #GenAI #TechTalk #OnlineSession #ATALFDP #AIInnovation #MachineLearning #KnowledgeSharing #StGeorgesCollege",
      "attributes": [],
      "urn": "7403708085045026817",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708085045026817/",
      "posted": "2025-12-08 08:12:41.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQF8ANGcAor4eA/feedshare-shrink_2048_1536/B56Zr9BQ8lK4Aw-/0/1765181560418?e=1766620800&v=beta&t=xeY38liIC0EcCkGaHQ--jDi7vhnrGKALaYXza9njAmY",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Nextwisi",
      "poster_linkedin_url": "https://www.linkedin.com/company/nextwisi/posts",
      "poster_title": "",
      "text": "🔹Frames in Artificial Intelligence - Explained Simply\n\nDiscover how Frames in Intelligence help AI systems organize knowledge, improve logical reasoning, and build smarter decision-making models.\n\nIn Nextwisi Latest blog, we covered structured knowledge representation, inheritance concepts, real-world examples, and practical AI applications.\n\n👉 Read the full blog here: https://lnkd.in/gRHdebQk",
      "attributes": [],
      "urn": "7403708064367104000",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403708064367104000/",
      "posted": "2025-12-08 08:12:36.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFIa6zf9KqyWA/feedshare-shrink_2048_1536/B56Zr9BP83GkA0-/0/1765181555178?e=1766620800&v=beta&t=a2tTokbgZKiJxVvJza4zIPIzFHNnIDz9chm0zs8qkic",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Aparna K V",
      "poster_linkedin_url": "https://www.linkedin.com/in/aparna-k-v-229a82254",
      "poster_title": "Statistician | Data analyst",
      "text": "🤩Proud to announce that I’ve completed my certification in Data Science and Artificial Intelligence!\nEvery step forward brings new opportunities — looking forward to exploring more in the world of data. ✨\n\n#DataScience #ArtificialIntelligence #MachineLearning #AI #DataAnalytics #Upskilling #ContinuousLearning #CareerGrowth #LearningJourney #TechSkills #AvoDha #SkillIndia",
      "attributes": [],
      "urn": "7403707935958433792",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707935958433792/",
      "posted": "2025-12-08 08:12:06.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQG1PXmnLyA7hw/feedshare-shrink_1280/B56Zr9BH9XHIAs-/0/1765181525174?e=1766620800&v=beta&t=qUoFwRj7XJBoLDUBH1XqZPNnJU5kW4x2BwyZb4u3Hjo",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Umang Vyas",
      "poster_linkedin_url": "https://www.linkedin.com/in/umang-vyas-82488710a",
      "poster_title": "Assistant Professor | Water Resources Engineer | GIS Learner | ERP Coordinator | IQAC",
      "text": "I am pleased to announce the successful completion of the Faculty Development Program on \"Leveraging Emerging Technologies for Data Analysis.\" This rigorous program has significantly enhanced my research and analytical capabilities through comprehensive training in contemporary methodologies and tools.\nProgram Highlights:\nSocial Media Dashboarding with Power BI – Developing sophisticated visual analytics for social media data interpretation\nData Modelling and Analysis using Smart PLS – Mastering structural equation modeling for advanced quantitative research\nPublication Process and Journey using AI – Integrating artificial intelligence in academic writing and publication workflows\nAI Tools in Research – Implementing intelligent systems to enhance research efficiency and quality\nPractical Considerations in Research with Emerging Technologies – Addressing implementation challenges and ethical considerations\nResearch Methodological Advancement with Emerging Technologies – Adopting innovative approaches to strengthen research rigor\nThe knowledge and competencies gained through this program will prove instrumental in advancing my research endeavors and enriching my pedagogical practices.\nI extend my sincere appreciation to the program organizers for their meticulous planning and execution. Your commitment to fostering faculty excellence through cutting-edge technological training is commendable and highly valued. Dr. Vidhita Sinha Shrutika Thakkar Prof. (Dr.) Ranjita Banerjee GSFC University\nI look forward to leveraging these competencies to contribute meaningfully to academic research and institutional growth. Ganpat University\n#GUNI #FacultyDevelopment #ResearchExcellence #DataAnalytics #PowerBI #SmartPLS #ArtificialIntelligence #ResearchMethodology #AcademicDevelopment #HigherEducation #EmergingTechnologies",
      "attributes": [],
      "urn": "7403707929809321984",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707929809321984/",
      "posted": "2025-12-08 08:12:04.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFtAKLX8ZArCg/feedshare-shrink_2048_1536/B56Zr9BGlMIYAw-/0/1765181522957?e=1766620800&v=beta&t=0LXMvjeqFNEPzgcJjL3MZAD_hn98BAtTrKJWlkj6oG4",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Vishal Ahire",
      "poster_linkedin_url": "https://www.linkedin.com/in/vishal-ahire-ea",
      "poster_title": "Principal AI Architect | AI & Digital Transformation Leader | Generative & Agentic AI Strategist | GCC & Enterprise Modernization",
      "text": "I came across a Gartner piece on AI’s impact on human capital and customer service, and what resonated most was the human capital dimension. This isn’t a future scenario — it’s already reshaping organizations today.\n\nAcross industries, AI is boosting productivity in meaningful ways. Coding assistants are accelerating development cycles, BI teams are democratizing insights, and knowledge assistants are reducing operational bottlenecks. The upside is undeniable.\n\nBut the workforce impact is just as real. Many companies are quietly restructuring, replacing senior talent with lower-cost roles augmented by AI tools. Short-term efficiency is often prioritized over long-term capability building — and that’s where the leadership challenge lies.\n\nFrom leading enterprise AI initiatives, I see four critical imperatives for leaders:\n\n1️⃣ Reinforce Fundamentals\nAI amplifies strong foundational skills and exposes weak ones. Technical, functional, and domain fundamentals remain the backbone. AI skills without this scaffolding create fragile talent.\n\n2️⃣ Accelerate Learning Agility\nThe half-life of skills is collapsing. Delaying upskilling — even by a few quarters — risks widening capability gaps. Leaders must create environments where continuous learning is not optional, but systemic.\n\n3️⃣ Elevate Application Over Adoption\nSuccess will come from people who can translate their experience into AI-enabled workflows. Tools matter, but applied judgment — shaped by years of domain expertise — is the differentiator.\n\n4️⃣ Lead With Empathy and Responsibility\nAmid the excitement, we’re losing sight of the human element. There is a growing tendency to chase shortcuts, outpace peers with rapid AI upskilling, or restructure teams without considering long-term talent health.\n This is a moment where leadership must anchor decisions in empathy, ethics, and accountability.\n AI doesn’t absolve us from responsibility — it heightens it.\n\nhttps://lnkd.in/dKQeYX_Z\n\n#FutureOfWork #WorkforceTransformation #GenerativeAI #ResponsibleAI #LearningAgility #AILeadership #OrganizationalLeadership #ThoughtLeadership",
      "attributes": [],
      "urn": "7403707849266307075",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707849266307075/",
      "posted": "2025-12-08 08:11:45.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Sharadha Chakali",
      "poster_linkedin_url": "https://www.linkedin.com/in/sharadha-chakali-079b79333",
      "poster_title": "Web Developer learner | HTML, CSS, JavaScript & Python Enthusiast| Front-End Developer | Passionate about Clean & Responsive Design|Aspiring Full-Stack Developer",
      "text": "I’m happy to share that I’ve successfully completed the AI for Beginners course from HP LIFE.\nThis course helped me understand the basics of Artificial Intelligence, its applications, and its impact on today’s technology.",
      "attributes": [],
      "urn": "7403707809345052673",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707809345052673/",
      "posted": "2025-12-08 08:11:35.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQHunkNItTrjTg/feedshare-shrink_1280/B56Zr9BBBXHIA4-/0/1765181494727?e=1766620800&v=beta&t=YNEGEH59n89BZPQexX0qOusEZyD0ZK6M4bRkFkHy71k",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "BDO RISE Private Limited",
      "poster_linkedin_url": "https://www.linkedin.com/company/bdo-rise-private-limited/posts",
      "poster_title": "",
      "text": "A Day of Learning, Leadership, and Landmark Recognition at the MILES Conclave! 💫\n\nThe MILES Conclave on “AI in Public Accounting” brought together some of the most forward-thinking leaders, firms, and professionals to discuss how artificial intelligence is reshaping the future of our profession, across people, processes, and the public accounting ecosystem. 🚀 \n\nConcluded on December 6, it was an insightful platform to reflect on how our industry must evolve, how talent needs are shifting, and how firms can build future-ready capabilities with trust and responsibility at the center. 🎢 \n\nOne of the highlights of the conclave was the GCC Excellence Awards 🏆 , where six of our leaders were recognized for their exceptional contributions and impact in the GCC industry:\n\nVishnu Patwari - National Managing Principal\nVineeta Kedia Bajaj Bajaj - People & Culture Leader\nPavan Kota - Assurance Leader\nAjay Verma - Advisory Country Head\nSudeep Sachindranath S - Tax Leader\nSriram Subramanian - Tax Leader\n\nTheir recognition is a testament to the strong leadership, innovation mindset, and people-first culture guiding BDO RISE’s journey.\n\nAdding to this proud moment, Vishnu participated in a thought-provoking panel discussion on the role of AI in public accounting and how GCCs can lead global transformation by building scalable talent, trusted capabilities, and digitally enabled services. His perspective on the evolution of AI, human-AI collaboration, and the emerging opportunities for our profession resonated deeply with the audience.🙌 \n\nThe conclave served as a powerful reminder of why such platforms matter, to learn, collaborate, celebrate leadership excellence, and collectively shape the future of our profession.💪 \n\nCongratulations once again to our award-winning leaders. This recognition belongs not just to them, but to every professional at BDO RISE who contributes to our purpose and performance every day. 👏 \n\n#BDORISE #ThriveTogether #GCCExcellence #MILESConclave #MPACT2025 \n#FutureCPA #AIandTalent #PublicAccounting\n\nVishnu Patwari Vikash Pipara (Jain) Ajay Verma Sudeep Sachindranath Sriram Subramanian Jiger Saiya Vineeta Kedia Bajaj",
      "attributes": [],
      "urn": "7403707650833641472",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707650833641472/",
      "posted": "2025-12-08 08:10:58.000",
      "post_type": "unknown",
      "num_likes": 2,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFbiI2f1misZg/feedshare-shrink_2048_1536/B56Zr9A2V9MEAk-/0/1765181449798?e=1766620800&v=beta&t=67L_LY6dj5_bD1NTK840kX2oDmFB2_4z97zK7h70IiU",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQHb01pLMgSV0Q/feedshare-shrink_800/B56Zr9A2V.HkAg-/0/1765181449800?e=1766620800&v=beta&t=Y3Hk2Ufr8zrRh7hfobuxQZ6A71R29h6qp9srR8OpBpw",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFSjhGisdR5Ag/feedshare-shrink_2048_1536/B56Zr9A2bVMIAk-/0/1765181450208?e=1766620800&v=beta&t=ME-39VTgEb2bSIl2ElYDup2_Xqs95cE41SmiaPFwWXw",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQHDTd9TjHNiPQ/feedshare-shrink_1280/B56Zr9A2aoLoAc-/0/1765181450305?e=1766620800&v=beta&t=HlHv5MFZOH0XDOkk1-lf2I8eNd4y3SyyLstQgtHarYs",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQF73itHuATPZA/feedshare-shrink_1280/B56Zr9A3pGH8Ac-/0/1765181455515?e=1766620800&v=beta&t=sp6LREREQHeXkl60RrfrzjD5ow0dQr-6lczM2JIg1Jk",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQEJJny6kZqqjg/feedshare-shrink_1280/B56Zr9A3u_LAAg-/0/1765181455869?e=1766620800&v=beta&t=BSOqSR1tG1Jhepu7lVCGAT8BAToG1ELNrvcIqrADos4",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQEiTYTbATAoTg/feedshare-shrink_1280/B56Zr9A3WYHkAg-/0/1765181454210?e=1766620800&v=beta&t=Mbzh5VPJb6ZR_sqski8bePnkszKaXPq6mMFcnz2jwVo",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQEa-ZvUaz1M7g/feedshare-shrink_1280/B56Zr9A3uqK8Ag-/0/1765181455961?e=1766620800&v=beta&t=IzOZlD8xhaNDBWnop7-YB5uv1VXRjDaCrhA2Gfrymh4",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQH2lUy3xEcgNw/feedshare-shrink_1280/B56Zr9A3m1HYAc-/0/1765181455303?e=1766620800&v=beta&t=tJlIncaPEiMrYA3AmvnfvUKVUnAIs7Vub9LfUvNbrCk",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQH56unkqFm-sg/feedshare-shrink_800/B56Zr9A2gZIYAg-/0/1765181450469?e=1766620800&v=beta&t=vmDFqhTAZ_L-jNfDuZ5mCSbwjrCI5MbtPCOgLVqOHGQ",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "AI for Professionals",
      "poster_linkedin_url": "https://www.linkedin.com/company/ai-per-professionisti/posts",
      "poster_title": "",
      "text": "Nuovo video: AI for Professionals and Entrepreneurs  (Book Available on Amazon). ✅ You can now buy the book \"AI for Professionals and Entrepreneurs\" here: \nhttps://amzn.to/4qxcbVy\n\n🔸 Master Finding Clients, Job Searches, Resume Writing, and LinkedIn Optimization with Artificial Intelligence\n\n\n\n\n\nAI for Professionals is dedicated to the use of AI for entrepreneurs, freelancers, startups, self-employed workers, and professionals in general.\n\nFollow me also on:\n📘 Facebook: https://lnkd.in/eYGtiFjh\n🔗 LinkedIn: https://lnkd.in/ef3wwWbB",
      "attributes": [],
      "urn": "7403707644475039744",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707644475039744/",
      "posted": "2025-12-08 08:10:56.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Okafor Samuel",
      "poster_linkedin_url": "https://www.linkedin.com/in/okafor-samuel-bbb10a379",
      "poster_title": "Founder at Swiftexpress| E-Commerce | Smart Transportation | Easy Payment Solutions | Crypto.",
      "text": "Harnessing Robotic Engineering to Enhance Security in Nigeria\n\nAs we strive to build a safer Nigeria, it's high time we explore innovative solutions. Robotic engineering, powered by Artificial Intelligence (AI), can play a vital role in curbing insecurity.\n\nImagine deploying AI-enabled robots as \"soldiers\" on the ground, enhancing our response to security threats. These robots can:\n\n- Gather critical data in real-time\n- Monitor high-risk areas\n- Support law enforcement agencies\n\nBy leveraging robotic engineering, we can:\n\n- Improve response times\n- Enhance situational awareness\n- Reduce risks to human life\n\nWhat are your thoughts on the potential of robotic engineering in security?",
      "attributes": [],
      "urn": "7403707634836758528",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707634836758528/",
      "posted": "2025-12-08 08:10:54.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Anirban Gangopadhyay",
      "poster_linkedin_url": "https://www.linkedin.com/in/anirban-gangopadhyay",
      "poster_title": "Principal Software Engineer & Cloud Architect | Building Scalable Microservices / Distributed Systems | AI/ML-Enabled Solutions | Driving Performance & Reliability at Enterprise Scale",
      "text": "NeurIPS is not just another academic conference. It is the Olympics of Artificial Intelligence, the place where the world’s most brilliant minds present breakthroughs that shape global technology.\n\n Transformers, diffusion models, foundational architectures ,  almost every AI revolution of the past decade has been born or announced at NeurIPS. Nations watch these results closely because NeurIPS reveals who will control the next generation of computing, industry, economy, and scientific power.\n\nThis year’s NeurIPS numbers show an unmistakable reality: China’s universities have surged to the frontier of global AI research, matching or surpassing the biggest American tech giants. Tsinghua, Peking University, CAS, Shanghai Jiao Tong - these are publicly funded institutions producing work at the same level as Google DeepMind and Meta AI. It’s an extraordinary achievement and a clear signal of where national priorities determine national outcomes.",
      "attributes": [],
      "urn": "7403707579828215808",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707579828215808/",
      "posted": "2025-12-08 08:10:41.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGd7qrmp8wkIw/feedshare-shrink_2048_1536/B56Zr9A0DVJwA0-/0/1765181440638?e=1766620800&v=beta&t=FhrNl-MWKbwtxvC-qlLrjY_f3fgSTbS0JtX7GxrFJk4",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Aflaha Setyaningrum",
      "poster_linkedin_url": "https://www.linkedin.com/in/aflahasetyaningrum",
      "poster_title": "Computer Science Binus Online Learning",
      "text": "A few days ago, I had the opportunity to join the Mini Hackathon with BINUS University. At first, I was curious, thinking, “Maybe this will be just like any other hackathon.” But it turned out to be an eye opening experience about how Artificial Intelligence can accelerate application development in just 60 minutes! 🔥\n\nThe most memorable part was the discussion session with our lecturers, Mr. Muhammad Rizki Nur Majiid and Mr. Prabowo. From them, I learned that AI is not just a trend, it’s a future skill that will transform the way we work and innovate. The challenge of building a functional application with AI assistance in such a short time made me realize that speed and creativity are the keys in this digital era.\n\nThis event was also an amazing networking moment, meeting new friends who share the same enthusiasm for technology. It felt like being in a community ready to “unlock the future” together.\n\n📹 Check out the full event documentation here:\nhttps://lnkd.in/gJsXYWuj\n\n#AI #Hackathon #BINUSUniversity #FutureSkills #TechInnovation #Networking",
      "attributes": [],
      "urn": "7403707535779889152",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707535779889152/",
      "posted": "2025-12-08 08:10:30.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGfTeWMqq1Ceg/feedshare-shrink_1280/B56Zr9Ahy3K4Aw-/0/1765181397438?e=1766620800&v=beta&t=m0QYB2-mGu8O9TKhLFRBkU5Je2Y-6YUQKIhZbQegmvo",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFJteWTZCEQYQ/feedshare-shrink_2048_1536/B56Zr9Ah0BLIAw-/0/1765181426306?e=1766620800&v=beta&t=59hHdnBPjiRz42-FgQu88GTXgZQXK_rUyvqsw3c5mks",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFyePTjCOLirQ/feedshare-shrink_1280/B56Zr9Ah4qLAAs-/0/1765181428055?e=1766620800&v=beta&t=MMUF2YUbtwebnS894DXY9Zq6mgQO-dgHth2I5moevlQ",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQG_ATGTRphtjw/feedshare-shrink_2048_1536/B56Zr9Ah0pLMAw-/0/1765181427043?e=1766620800&v=beta&t=W6DMmq3j_FN7HS9k-u_v_smsYQwFzqdoe5lNZPkEcNY",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQE1c4v-oUhxJw/feedshare-shrink_2048_1536/B56Zr9Ah0xLsAw-/0/1765181426572?e=1766620800&v=beta&t=pFGiUTqb7lvU9TKaYxFb62kBrEdJAmjFbGSsvrf2Eac",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Mounika Poluri",
      "poster_linkedin_url": "https://www.linkedin.com/in/mounika-poluri-816693374",
      "poster_title": "Student at RV institute of technology",
      "text": "Hello everyone! 👋\nI’m excited to share that I am currently looking for fresher job opportunities \n\nEducation: Engeneering \n(computer science and engineering with specialization (ARTIFICIAL INTELLIGENCE ANA MACHINE LEARNING)\nSkills: python , SQL\n\nLocation: Bangalore,chennai, Hyderabad\n\nAvailability: Immediate\n\nFast learner & dedicated\n\nStrong communication & teamwork skills\n\nEager to grow and contribute\n\nPositive attitude & willingness to adapt\n\nIf you are hiring or know someone who is, kindly connect with me or reach out at:\n[Your Email / Mobile Number]\n\nI would truly appreciate any leads, referrals, or guidance.\nThank you in advance\n\n\n#Hiring #NowHiring #WeAreHiring #Jobs #JobSearch\n#HiringAlert #ImmediateHiring #CareerOpportunity #JobOpening #Recruitment #FreshersJobs #ITJobs\n#SoftwareJobs #TechJobs #Developers #ITCareers",
      "attributes": [],
      "urn": "7403707537038241792",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707537038241792/",
      "posted": "2025-12-08 08:10:31.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Smart City Poznan",
      "poster_linkedin_url": "https://www.linkedin.com/company/smartcitypoznan/posts",
      "poster_title": "",
      "text": "🎉 4. Spotkanie Poznań CityLab 🎉\n\nZa nami kolejne, czwarte już spotkanie biznesowe projektu #PoznańCityLab, podczas którego mieliśmy okazję ponownie spotkać się w gronie Partnerów i Ambasadorów, by wymienić doświadczenia, spojrzeć w przyszłość i wspólnie planować kolejne inicjatywy.\n\n🤝 Prezentacja nowego Partnera\nPodczas spotkania działalność firmy PwC zaprezentowały Agata Garczyk-Wysocka oraz Anna Zapotoczny-Woźniak. PwC w ostatnim czasie dołączyło do grona Poznań CityLab, cieszymy się, że mogliśmy poznać ich kompetencje oraz potencjał współpracy na rzecz rozwoju lokalnych przedsiębiorstw.\n\n🌟 Inspiracja od wyjątkowego Gościa\nW trakcie wydarzenia wysłuchaliśmy wystąpienia prof. Witold Orłowski, głównego doradcy ekonomicznego PwC, którego perspektywa i wiedza wniosły do dyskusji ogrom inspiracji. Serdeczne podziękowania dla PwC za organizację tego wyjątkowego wystąpienia!\n\n🤝 Nowy Ambasador w naszym gronie\nJednym z kluczowych momentów wydarzenia było podpisanie listu intencyjnego z nowym Ambasadorem PCL – Stowarzyszeniem Metropolia Poznań, reprezentowanym przez Panią Dyrektor Anna Aleksandrzak. Cieszymy się ze wzmacniającej się sieci współpracy i otwierających się możliwości nowych wspólnych działań!\n\n🌍 Nowy pełnomocnik ds. rozwoju międzynarodowego\nIstotnym punktem programu było także podpisanie umowy z nowym reprezentantem Poznań CityLab na rynek międzynarodowy Joe Appleton – krok, który pozwala nam rozszerzyć działalność poza granice kraju i rozwijać globalne inicjatywy.\n\n💬 Podsumowanie roku i spojrzenie w przyszłość\nDziękujemy wszystkim Partnerom i Ambasadorom za miniony rok pełen zaangażowania, wsparcia i współtworzenia innowacyjnych projektów dla miasta. Z nadzieją patrzymy w przyszłość – nie możemy doczekać się kolejnych wspólnych inicjatyw!\n\nZespół PCL: \nMichal Lakomski, Monika Owień-Hofman, Jakub Niemir, Natalia Urbańska-Guss, Iwona Kasprzak, Jacek Piotrowski, Aleksandra Kotarska, Zuzanna Hojan, Kacper Kureń \n\n📌 Partnerzy PCL:\nApriva, Apsys Polska (Posnania), PwC, Beyond.pl, Capgemini, Jakdojade, Emitel, Grupa MTP, INEA, Lena Lighting, Merixstudio, RCS Engineering sp. z o.o., summ-it, Veolia | Polska\n\n📌 Ambasadorzy PCL:\nCenter for Artificial Intelligence, Interdisciplinary Centre for Artificial Intelligence and Cybersecurity, Poznan University of Economics And Business, Poznańskie Centrum Superkomputerowo-Sieciowe, Poznan Science and Technology Park of Adam Mickiewicz University Foundation, Collegium Da Vinci, Poznan School of Logistics, Polish Blockchain Association, eNStudios, Biuro Stowarzyszenia Metropolia Poznań, Łukasiewicz – Poznański Instytut Technologiczny",
      "attributes": [],
      "urn": "7403707454133506048",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707454133506048/",
      "posted": "2025-12-08 08:10:11.000",
      "post_type": "unknown",
      "num_likes": 3,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQE7_Dd57Ui89w/feedshare-shrink_2048_1536/B4DZr9ArwRKIAw-/0/1765181408503?e=1766620800&v=beta&t=S9WRSiyW2yPqDxt-DKwzgx4RLlq66xSYO8BU-7WoXjc",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQEwPKsFUaq_PA/feedshare-shrink_2048_1536/B4DZr9ArwxJAAw-/0/1765181408481?e=1766620800&v=beta&t=_N4Hs_Sxd2jPuIr-YwTs6BuPtYLDwYlWHwWwaB25B_s",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQFtbmfUtUJ2EA/feedshare-shrink_2048_1536/B4DZr9Arx1H4Aw-/0/1765181408583?e=1766620800&v=beta&t=-H0JwDjBKlv_Y4fOzE_kX3sLfPaErvg1X8F2lvepZ-0",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQG9SpUaOOHPZw/feedshare-shrink_2048_1536/B4DZr9Arx1JMAw-/0/1765181408909?e=1766620800&v=beta&t=GUDIcSxIjR3kLnd0XAXvT1CCaWA3EthtthfMksQ-iKg",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQGvRAFlwEHL2Q/feedshare-shrink_2048_1536/B4DZr9ArwhIMA0-/0/1765181408247?e=1766620800&v=beta&t=O-DrV5x0qUp6JoA92WMi_OZGgY4AUXt3GntZzO3ms3g",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQHJnRqnCwT0OA/feedshare-shrink_2048_1536/B4DZr9ArxBH0A4-/0/1765181408395?e=1766620800&v=beta&t=ds6mxZexuxIxlMDnSFU0S3Os0AB7ISonAJrvRuw6utY",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQH90Y9xAfalxQ/feedshare-shrink_2048_1536/B4DZr9ArwjHsAw-/0/1765181408512?e=1766620800&v=beta&t=eU4rWgMHZf1GuE-Zo3PCzxe-U01MK1TZHfc-MqKUPhQ",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQFzrlYSD4rQ6A/feedshare-shrink_2048_1536/B4DZr9Ary1JIA4-/0/1765181408711?e=1766620800&v=beta&t=hl4XJNEDCg2CMAEWXsCfUbUTBbZFqI5ltDR0uIwtCSc",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQGmVTey3vPMlg/feedshare-shrink_2048_1536/B4DZr9ArxcGgAw-/0/1765181409061?e=1766620800&v=beta&t=HLJNJhtkvWr97W6XuSPmd4tdRgGLotHAHc_Lu_ycjQ0",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Uwem Umana",
      "poster_linkedin_url": "https://www.linkedin.com/in/uwem-umana",
      "poster_title": "Coach & Public Speaker | I coach growth-driven professionals, entrepreneurs, and business leaders to find clarity, break through their struggles and achieve their full potential | Strategic Business Analyst",
      "text": "𝗚𝗿𝗲𝗮𝘁 𝘁𝗵𝗶𝗻𝗴𝘀 𝗶𝗻 𝘁𝗲𝗰𝗵 𝗮𝗿𝗲 𝗿𝗮𝗿𝗲𝗹𝘆 𝗮𝗰𝗵𝗶𝗲𝘃𝗲𝗱 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 𝘀𝘂𝗱𝗱𝗲𝗻 𝗴𝗲𝗻𝗶𝘂𝘀… 𝗯𝘂𝘁 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 𝘀𝗺𝗮𝗹𝗹, 𝗰𝗼𝗻𝘀𝗶𝘀𝘁𝗲𝗻𝘁, 𝗶𝘁𝗲𝗿𝗮𝘁𝗶𝘃𝗲 𝘀𝘁𝗲𝗽𝘀 - just like Van Gogh said.\n\nIn IT projects, especially those infused with AI capabilities, success does not arrive in one giant leap.\nIt emerges from:\n\n🔹 Micro-decisions\n🔹 Incremental improvements\n🔹 Sprints, retros, corrections, and continuous learning\n🔹 Insights extracted from data and user feedback\n🔹 Small deployments that compound into enterprise value\n\nJust like a marathon runner builds endurance one mile at a time, AI-enabled delivery teams achieve excellence through structured phases and intelligent iteration:\n\n- Machine learning improves with incremental data\n- Automation becomes smarter through repeated optimisation\n- Predictive models get better one training cycle at a time\n- User experience evolves through continuous testing and tuning\n\nNo major transformation succeeds by accident.\nEvery great AI-powered solution is simply a series of small, well-executed units that add up to a strong, intelligent whole.\n\nAs Business Analysts, Product Owners, Architects, and Delivery Leaders, our job is to:\n\n\n   Break the big vision into clear, deliverable components\n   Build capability step-by-step\n   Allow AI systems to learn in controlled phases\n   Ensure human intelligence guides artificial intelligence\n   Keep the team focused on the long-term picture while executing short-term wins\n\nBig outcomes happen when small decisions align with a powerful vision.\n\n- One unit at a time.\n- One sprint at a time.\n- One human - AI collaboration at a time.\n\nThis is how intelligent systems and intelligent organisations are built.\n\n~ Uwem Umana\n\n#AI #DigitalTransformation #BusinessAnalysis #ProductManagement #AITeams #TechLeadership #ContinuousImprovement #UwemUmana",
      "attributes": [],
      "urn": "7403707418167123968",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707418167123968/",
      "posted": "2025-12-08 08:10:02.000",
      "post_type": "unknown",
      "num_likes": 2,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQEuJXXbxDGeiQ/feedshare-shrink_1280/B4EZr9AqdxIIAg-/0/1765181401614?e=1766620800&v=beta&t=acPqC-1jX0sVzIMTBaj45sapwq2mMUn9HZTHGPrQGk4",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Hanna Costa",
      "poster_linkedin_url": "https://www.linkedin.com/in/hanna-costa-09504bb4",
      "poster_title": "Senior Principal Field Marketing Manager in EMEA DACH bei Informatica",
      "text": "I came across this shocking stat: only 27% of organizations fully trust autonomous AI agents. Find out how to modernize your data architecture for agentic AI success and deliver AI-ready data.\n\n#AgenticAI #DataArchitecture #AI",
      "attributes": [],
      "urn": "7403707414606147584",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707414606147584/",
      "posted": "2025-12-08 08:10:01.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Arvind G.",
      "poster_linkedin_url": "https://www.linkedin.com/in/avigautam",
      "poster_title": "Top 1% Technical Sales Leader (Award Winner) | ASEAN Regional Director, Singapore | Enterprise CCaaS, SaaS & Cloud Transformation |132% Quota Achievement",
      "text": "I am grateful to Dr Sunil Kr Pandey and Prof. Saurabh Saxena for giving me the chance to interact with your talented final-year students and distinguished teachers! 🎓 Talking about GenAI and workflow orchestration with such a passionate and inquisitive audience was incredibly energising. This session was notable because of the thoughtful questions from the students and the lively conversations with the teachers. I'm wishing the graduating class the best of luck as they begin their careers; exciting days in the automation and artificial intelligence fields are ahead! \n\n#GenAI #Automation #FutureReady #StudentEngagement",
      "attributes": [],
      "urn": "7403707314500988929",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707314500988929/",
      "posted": "2025-12-08 08:09:38.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [],
      "original_post": {
        "poster_name": "ITS - The Education Group, Ghaziabad √",
        "poster_linkedin_url": "https://www.linkedin.com/company/its-the-education-group-ghaziabad/posts",
        "poster_title": "",
        "text": "🚀 A power-packed session wrapped up with transformative takeaways!\n\nWe were delighted to host Mr. Arvind Gautam, Regional Director – Technical Sales, Snug Technologies Pte Ltd, Singapore, for a special session on “Automate Your Business with GenAI and Workflow Orchestration Tools” on 02 December 2025 (Tuesday).\n\nThe session offered valuable insights into leveraging GenAI and workflow orchestration to drive smarter business automation.\nThank you, Mr. Arvind Gautam, for an engaging and insightful talk! 🙌\n\n#GenAI #Automation #WorkflowOrchestration #Technology #SnugTechnologies #DigitalInnovation",
        "attributes": [],
        "urn": "7402715882310795264",
        "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7402715882310795264/",
        "posted": "2025-12-05 14:30:02.000",
        "post_type": "unknown",
        "num_likes": null,
        "num_comments": null,
        "num_shares": null,
        "images": [
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQGdY-1ebLAw1g/feedshare-shrink_2048_1536/B56ZruU9VNL0Ak-/0/1764935063166?e=1766620800&v=beta&t=3sEfltVOxkNmoIdl_o6b6zHul_IoHzBgzVisM_zzQjg",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQEQirnqt9w5mg/feedshare-shrink_2048_1536/B56ZruU9dVJsAk-/0/1764935063600?e=1766620800&v=beta&t=Bf56QmUsnPlihaBhOKud5477M3Ic-raGHbFlNnn7MN0",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQEUggKvGUMQng/feedshare-shrink_2048_1536/B56ZruU9czLwAk-/0/1764935063597?e=1766620800&v=beta&t=nlx19izXKgAniXzv7-_juwuXglyu26DqEEiE4a7ce8w",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQHPPwXSwo5JpQ/feedshare-shrink_2048_1536/B56ZruU9bGLwAk-/0/1764935063509?e=1766620800&v=beta&t=F_ozbepzsNpc2CKiUUkVkCXVWuq-GcGqkUbnUhN5vz4",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQFhFFTUHiWQCA/feedshare-shrink_2048_1536/B56ZruU9SiHIAo-/0/1764935062994?e=1766620800&v=beta&t=_MPsaQ8iaD8d1lNnlNYrGvpFoGB_Ea_gnqhaJtvO5YU",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQHOIOrA2gjVIA/feedshare-shrink_1280/B56ZruU9TvGkAc-/0/1764935063009?e=1766620800&v=beta&t=qOgWb_ll64TnWILSjp4Z_g5BDXgstT8HBMhxWAaO2hQ",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQHAOyjNm67ELA/feedshare-shrink_2048_1536/B56ZruU9bgJsAo-/0/1764935063487?e=1766620800&v=beta&t=Y8eFivjLhpa9m6HJELnuIgMqkPD2WUoL4KxeWp3nzzU",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQHh4AU1NBdsUg/feedshare-shrink_2048_1536/B56ZruU9byMEAk-/0/1764935063518?e=1766620800&v=beta&t=jyY5DYlw27jdZ-srgjtSJOT52BOjqmfPjb6KaNhiezM",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQHA1ipEoWYJEA/feedshare-shrink_2048_1536/B56ZruU9XoMIAk-/0/1764935063237?e=1766620800&v=beta&t=eIaiWc1-_rxh7PYIRsSFFGLTODVNOith_QieAQiy57k",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQFGsIpM7ZAagQ/feedshare-shrink_2048_1536/B56ZruU9boGkAk-/0/1764935063520?e=1766620800&v=beta&t=3WmJt2IkkZ3rfexLzThjhrgH8JPlVkjw7HnC8lXza7Q",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQFQ_VEyENYdVw/feedshare-shrink_2048_1536/B56ZruU9X2LwAk-/0/1764935063274?e=1766620800&v=beta&t=Wz9B3Zs-03VxYd71DfPLFXHb5kZrQLfto2dIYQ3sD3w",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQER50n4w2bLSw/feedshare-shrink_2048_1536/B56ZruU9aQH8Ak-/0/1764935063452?e=1766620800&v=beta&t=_fkN2SUUlvOzZZkoDc6AclejTSvrbbzSnHsVFxXAsTk",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQG0U9Wp38IFQQ/feedshare-shrink_2048_1536/B56ZruU9cHLwAk-/0/1764935063536?e=1766620800&v=beta&t=Znwv2zCfQssegKT7uVCD6Wen-uMLTgZSC3gIge8MP9w",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D5622AQGjC7ARtrYFiw/feedshare-shrink_2048_1536/B56ZruU9nBL4Ak-/0/1764935064239?e=1766620800&v=beta&t=QbHMm6IntyOFcUoQvOvMtWu7lRsTfFqKNHTEvD7fcls",
            "alt_text": ""
          }
        ]
      }
    },
    {
      "poster_name": "Shobhit Narain",
      "poster_linkedin_url": "https://www.linkedin.com/in/shobhit-narain-12128b359",
      "poster_title": "A seasoned business consultant",
      "text": "Football star Cristiano Ronaldo has taken a stake of undisclosed size in artificial intelligence startup Perplexity, the company announced. The leading international goal scorer and football's first billionaire has built a $1.4bn (€1.2bn; £1.05bn) business empire by investing primarily in his native Portugal. Bloomberg described the Perplexity deal, which includes a sponsorship agreement, as his \"most high-profile investment to date\". Launched in 2022, the US startup was valued at $20bn in September and is positioning its AI search product as a rival to Google.",
      "attributes": [],
      "urn": "7403707256615215104",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707256615215104/",
      "posted": "2025-12-08 08:09:24.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": 1,
      "images": []
    },
    {
      "poster_name": "Ronald Heijnen",
      "poster_linkedin_url": "https://www.linkedin.com/in/ronald-heijnen-53697881",
      "poster_title": "Strategic Account Manager Enterprise at Bynder",
      "text": "The world’s second-largest wine and spirits group, Pernod Ricard, is proving just how transformative our AI tools can be in an industry where speed, accuracy, and brand consistency are the key ingredients for a top-shelf customer experience 🍸\n\nFaster content discovery, shorter campaign turnaround times, and higher content reuse are just a few of the benefits gained by placing Bynder AI at the core of its content operations. \n\nRead the story: https://ow.ly/FaMw30sRNJU",
      "attributes": [],
      "urn": "7403707150482690050",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707150482690050/",
      "posted": "2025-12-08 08:08:58.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "video": {
        "stream_url": "https://dms.licdn.com/playlist/vid/v2/D4E10AQGweHjM5Eu07g/mp4-720p-30fp-crf28/B4EZr9AWlfHoB0-/0/1765181327385?e=1765789200&v=beta&t=X4ju86iTPRUOqW3Tg1L10rRuu8kXP9NAqRoKj12_bMo",
        "duration": 72266
      },
      "images": []
    },
    {
      "poster_name": "Caio Augusto Tkalec, MBA, MInstD",
      "poster_linkedin_url": "https://www.linkedin.com/in/caiotk",
      "poster_title": "Driving AI Adoption & Digital Transformation | Founder | Solutions Architect | Mentor | Speaker",
      "text": "I have recently completed the course titled “Becoming a CAIO Chief AI Officer” taught by Vidhi Chugh. You can access it here: https://lnkd.in/gk5wDDBz. This course delves into the field of artificial intelligence and leadership, particularly focussing on C-level leadership. #aileadership #clevelleadershipinai #caiochiefAIofficer #meetcaioai",
      "attributes": [],
      "urn": "7403707150490972160",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707150490972160/",
      "posted": "2025-12-08 08:08:58.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Creator PlanetX",
      "poster_linkedin_url": "https://www.linkedin.com/company/creator-planetx/posts",
      "poster_title": "",
      "text": "6 Free LinkedIn Courses.\n\nTo Level Up Your Soft Skills.\n\nHard skills may get you through the door.\nBut to truly progress you need to have strong soft skills.\n\nCheck out these 6 game-changing courses.\nCovering crucial topics such as:\n\n- Speaking and Communication\n- Thinking and Productivity\n- Artificial Intelligence\n\nDevelop your soft skills today.\nCheck them out:\n\n1. Generative AI By LinkedIn and Microsoft\nhttps://lnkd.in/gX69UK-E\n\n2. Communication Foundations\nhttps://lnkd.in/gCMRXtiC\n\n3. Problem-Solving Techniques\nhttps://lnkd.in/d8rBEqAP\n\n4. Effective Listening\nhttps://lnkd.in/gQifW3Yw\n\n5. Communication with Emotional Intelligence\nhttps://lnkd.in/gkJsDXFc\n\n6. Building Resilience\nhttps://lnkd.in/g6EmKYMU\n\nThe greatest part about this?\nThese can all be completed within a day.\n\nYup…\nOne day to completely level up.\n\nWhich course are you trying?\nLet me know in the comments ⬇️\n\nP. C: Josh S.\nFolIow 𝐉𝐨𝐬𝐡 𝐒. for more content like this.\n\n---------------------------------\nIf you found this helpful, please 𝐅𝐨𝐥𝐥𝐨𝐰/𝐋𝐢𝐤𝐞/𝐑𝐞𝐩𝐨𝐬𝐭 to support our effort. 🙏",
      "attributes": [],
      "urn": "7403707143696125952",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707143696125952/",
      "posted": "2025-12-08 08:08:57.000",
      "post_type": "unknown",
      "num_likes": 1,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5610AQEI1z-l8IKfQw/image-shrink_1280/B56Zr9Aaj.HAAQ-/0/1765181336695?e=1765789200&v=beta&t=9mSMdZSCCQ1m8HIsOC_QasLsGFDd9VcIGog9p3LvjBg",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Okafor Samuel",
      "poster_linkedin_url": "https://www.linkedin.com/in/okafor-samuel-bbb10a379",
      "poster_title": "Founder at Swiftexpress| E-Commerce | Smart Transportation | Easy Payment Solutions | Crypto.",
      "text": "Harnessing Robotic Engineering to Enhance Security in Nigeria\n\nAs we strive to build a safer Nigeria, it's high time we explore innovative solutions. Robotic engineering, powered by Artificial Intelligence (AI), can play a vital role in curbing insecurity.\n\nImagine deploying AI-enabled robots as \"soldiers\" on the ground, enhancing our response to security threats. These robots can:\n\n- Gather critical data in real-time\n- Monitor high-risk areas\n- Support law enforcement agencies\n\nBy leveraging robotic engineering, we can:\n\n- Improve response times\n- Enhance situational awareness\n- Reduce risks to human life\n\nLet's drive innovation and collaboration to make Nigeria safer. What are your thoughts on the potential of robotic engineering in security?",
      "attributes": [],
      "urn": "7403707143696179200",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707143696179200/",
      "posted": "2025-12-08 08:08:57.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Danush Chandra",
      "poster_linkedin_url": "https://www.linkedin.com/in/danush-chandra-620a44243",
      "poster_title": "Excellence is not a skill, it’s an attitude.",
      "text": "Artificial Intelligence is no longer something distant or futuristic.\n\n#aiolympiad2026 #aiolympiad #inaio #acmindia #aicompetition #artificialinteligence",
      "attributes": [],
      "urn": "7403707000259289088",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403707000259289088/",
      "posted": "2025-12-08 08:08:23.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "KHALED AL ABDOULI (PMP)® (PMI-RMP)®",
      "poster_linkedin_url": "https://www.linkedin.com/in/khaled-al-abdouli-pmp-%C2%AE-pmi-rmp-%C2%AE-152b9a333",
      "poster_title": "Specialist @ Abu Dhabi Agriculture and Food Safety Authority ADAFSA | BSc in Biology, Dalhousie University Canada| PMI certified Member (PMP)® (PMI-RMP)®",
      "text": "Just finished the course “Artificial Intelligence Foundations: Thinking Machines” by Doug Rose! Check it out: https://lnkd.in/dKzSgpC7 #machinelearning #artificialintelligence.",
      "attributes": [],
      "urn": "7403706986338516993",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706986338516993/",
      "posted": "2025-12-08 08:08:19.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Fatima Malik",
      "poster_linkedin_url": "https://www.linkedin.com/in/fatima-malik-41254a248",
      "poster_title": "Empowering people through tech, strategy, and collaboration | FAST NUCES’26 | AI Student | Campus Ambassador @NIC Islamabad | President @FAST AI Society | xEdversity | Aspiring Project Manager | Community Building",
      "text": "Proud to have organized this landmark event as 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 of FAST Artificial Intelligence Society. Seeing Pakistan’s brightest minds come together to move from crisis-reaction to future-anticipation was a defining moment. This is more than an event, it’s the beginning of a national movement we are committed to building.\n\n𝐃𝐞𝐜𝐞𝐦𝐛𝐞𝐫 𝟑𝐫𝐝 showed that Pakistan is ready to anticipate its future, not chase it. Grateful to every speaker, partner, and volunteer who helped ignite this movement toward proactive, future-ready governance.\n\nSyed Muhammad Bin Ahmed | Azhar Zia-ur-Rehman | Mirza Omer Beg | Imtiaz Rastgar | Dr. Safdar Ali Sohail | Dr. Muhammad Muqeem ul Islam | Ghulam Shabbir | Khawaja Saud Masud | Barira Hanif | Musstanser Tinauli | Saith Usama Chitrali | Fahad Malik | Mohsin M. Khan | Abdul Sattar Babar | Zahid Mirza | Noman Waseem | Sayyed Ahmad Masud | Ahmed Mujtaba Khan | Sabookh Syed | Umar Sheraz | Tariq Khattak | Sheharyar Tahir | Nameer Urfi | Mashhood Urfi | Syeda Sadia | Syeda A. Shifa | Fatima Malik",
      "attributes": [],
      "urn": "7403706951743799296",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706951743799296/",
      "posted": "2025-12-08 08:08:11.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [],
      "original_post": {
        "poster_name": "The Society 5.0 Initiative",
        "poster_linkedin_url": "https://www.linkedin.com/company/s5i/posts",
        "poster_title": "",
        "text": "𝐎𝐧 𝐃𝐞𝐜𝐞𝐦𝐛𝐞𝐫 3, 𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧 𝐩𝐫𝐨𝐯𝐞𝐝 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐜𝐫𝐢𝐭𝐢𝐜𝐚𝐥.\n500 leaders gathered. 10,000+ joined online. 40+ voices from 9 sectors. One question:\n𝐂𝐚𝐧 𝐰𝐞 𝐬𝐭𝐨𝐩 𝐫𝐞𝐚𝐜𝐭𝐢𝐧𝐠 𝐭𝐨 𝐜𝐫𝐢𝐬𝐞𝐬—𝐚𝐧𝐝 𝐬𝐭𝐚𝐫𝐭 𝐚𝐧𝐭𝐢𝐜𝐢𝐩𝐚𝐭𝐢𝐧𝐠 𝐭𝐡𝐞𝐦?\nThe answer: Yes. And we just showed how.\n\n𝐓𝐡𝐫𝐞𝐞 𝐦𝐨𝐦𝐞𝐧𝐭𝐬 𝐭𝐡𝐚𝐭 𝐝𝐞𝐟𝐢𝐧𝐞𝐝 𝐭𝐡𝐞 𝐝𝐚𝐲:\nDr. Nadeem ul Haque, Former Deputy Chairman Planning Commission: \"Pakistan plans for stability but lives in volatility.\"\nThe truth we needed to hear.\n\nWahaj Siraj us Siraj, CEO Nayatel: \"Don't leave here inspired. Leave here committed.\"\nThe keynote that charged the entire room.\n\nJustice Mushir Alam, Former Judge Supreme Court of Pakistan: \"Anticipation is not simply about predicting the future—it is about preparing ourselves to shape it.\"\nThe closing that reminded us why we're here.\n\nAnd to Dr. Aftab Maroof, Rector of FAST-NUCES: Thank you for believing in this vision and opening your institution to Pakistan's first national convening on anticipatory governance.\n\n𝐖𝐡𝐚𝐭 𝐰𝐞 𝐥𝐚𝐮𝐧𝐜𝐡𝐞𝐝:\n✅ 𝐀𝐈 𝐄𝐭𝐡𝐢𝐜𝐬 𝐌𝐚𝐭𝐮𝐫𝐢𝐭𝐲 𝐀𝐬𝐬𝐞𝐬𝐬𝐦𝐞𝐧𝐭™ — Pakistan's first organizational readiness diagnostic for AI adoption\n✅ 𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐞𝐝 𝐅𝐮𝐭𝐮𝐫𝐞𝐬 𝐏𝐫𝐚𝐜𝐭𝐢𝐭𝐢𝐨𝐧𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦 — 8-week cohort starting January 2026, training the 3% who will build the 97%\n✅ 𝐀𝐧𝐧𝐮𝐚𝐥 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 — The Futures Forum returns in 2026, 2027, 2028\n\n𝐓𝐨 𝐨𝐮𝐫 𝐬𝐩𝐞𝐚𝐤𝐞𝐫𝐬, 𝐩𝐚𝐫𝐭𝐧𝐞𝐫𝐬, 𝐯𝐨𝐥𝐮𝐧𝐭𝐞𝐞𝐫𝐬, 𝐚𝐧𝐝 𝐚𝐭𝐭𝐞𝐧𝐝𝐞𝐞𝐬:\nYou didn't help us host an event.\n𝐘𝐨𝐮 𝐡𝐞𝐥𝐩𝐞𝐝 𝐮𝐬 𝐬𝐭𝐚𝐫𝐭 𝐚 𝐦𝐨𝐯𝐞𝐦𝐞𝐧𝐭.\n\n𝐓𝐡𝐞 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐰𝐞 𝐚𝐬𝐤𝐞𝐝 𝐭𝐡𝐚𝐭 𝐝𝐚𝐲. 𝐓𝐡𝐞 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐰𝐞'𝐫𝐞 𝐚𝐬𝐤𝐢𝐧𝐠 𝐭𝐨𝐝𝐚𝐲:\n𝐖𝐡𝐚𝐭 𝐟𝐮𝐭𝐮𝐫𝐞 𝐚𝐫𝐞 𝐲𝐨𝐮 𝐩𝐮𝐭𝐭𝐢𝐧𝐠 𝐟𝐨𝐫𝐭𝐡?\n\nNot what you hope happens. Not what you fear.\n𝐖𝐡𝐚𝐭 𝐚𝐫𝐞 𝐲𝐨𝐮 𝐚𝐜𝐭𝐢𝐯𝐞𝐥𝐲 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠—𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠 𝐧𝐨𝐰?\n\n📹 Event highlights: society5i.com/futuresforum\n 📚 Register for certification: https://lnkd.in/dKX6vMXq\n 📊 Access AI Ethics Assessment™: https://lnkd.in/dMffsZJT \n\nThis was Year 1. Let's build Year 2 together.\n#FuturesLiteracy #Pakistan #AnticipatoryCommunity #AIGovernance #Leadership #FuturesForum2025\n\nSyed Muhammad Bin Ahmed | Azhar Zia-ur-Rehman | Mirza Omer Beg | Imtiaz Rastgar | Dr. Safdar Ali Sohail | Dr. Muhammad Muqeem ul Islam | Ghulam Shabbir | Khawaja Saud Masud | Barira Hanif | Musstanser Tinauli | Saith Usama Chitrali | Fahad Malik | Mohsin M. Khan | Abdul Sattar Babar | Zahid Mirza | Noman Waseem | Sayyed Ahmad Masud | Ahmed Mujtaba Khan | Sabookh Syed | Umar Sheraz | Tariq Khattak | Sheharyar Tahir | Nameer Urfi | Mashhood Urfi | Syeda Sadia | Syeda A. Shifa | Fatima Malik",
        "attributes": [],
        "urn": "7402618891140517888",
        "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7402618891140517888/",
        "posted": "2025-12-05 08:04:37.000",
        "post_type": "unknown",
        "num_likes": null,
        "num_comments": null,
        "num_shares": null,
        "images": [
          {
            "url": "https://media.licdn.com/dms/image/v2/D4D22AQEm2q0pfld98w/feedshare-shrink_2048_1536/B4DZrtipIfJ4A0-/0/1764921875171?e=1766620800&v=beta&t=Qm8Du7hhPsMhCCOi0jsbU3TSK_aYgjFeoyRsHWdiXDo",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D4D22AQHLbx62swtN4Q/feedshare-shrink_2048_1536/B4DZrtipI3GgA0-/0/1764921875156?e=1766620800&v=beta&t=GSHYogta8vmmzFl5uRLa_6rMfEtLxsRjX_w_lzL3Bwc",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D4D22AQEFRgDsVFUPwg/feedshare-shrink_2048_1536/B4DZrtipJSH0Aw-/0/1764921874926?e=1766620800&v=beta&t=w567wbOsLZ6C4jmUDrSTx9wI6d39SBO4k29OwXkmzeo",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D4D22AQG9YXqHkFrrWA/feedshare-shrink_2048_1536/B4DZrtipJdJAAw-/0/1764921875342?e=1766620800&v=beta&t=4dNNb8-fNLVG36_osZw9OyFU4zEWloot3i3Cl8mRQiA",
            "alt_text": ""
          },
          {
            "url": "https://media.licdn.com/dms/image/v2/D4D22AQGUrvhF6bioTQ/feedshare-shrink_2048_1536/B4DZrtipJnIkA0-/0/1764921875233?e=1766620800&v=beta&t=7tVY7RRGxWlGChzkIZc7NpBbKJdqDgTFu5ihi4YCZQE",
            "alt_text": ""
          }
        ]
      }
    },
    {
      "poster_name": "P2P Lab",
      "poster_linkedin_url": "https://www.linkedin.com/company/p2p-lab/posts",
      "poster_title": "",
      "text": "New Publication: AI as commons – Why we need community-controlled Artificial Intelligence\n\nPleased to share a new article in Internet Policy Review by Vasilis Kostakis (P2P Lab/TalTech) and Aristotle Tympas (University of Athens).\n\nThe piece challenges the assumption that AI development must remain concentrated in corporate hands. Drawing on examples including Te Hiku Media's community-led AI project for Māori language revitalisation, the authors argue that smaller, specialised models can match larger systems whilst remaining interpretable and locally deployable.\n\nThey outline four foundations for democratic AI: open source models, public funding for community-developed tools, democratic control through transparent governance, and social ownership of AI infrastructure.\n\n📖  Read the article: https://lnkd.in/daH_mNPk\n\n#AIGovernance #DigitalCommons #OpenSource #TechPolicy #ArtificialIntelligence",
      "attributes": [],
      "urn": "7403706931976110080",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706931976110080/",
      "posted": "2025-12-08 08:08:06.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQF502eM1QbeQA/feedshare-shrink_2048_1536/B4DZr9ANaXIAA4-/0/1765181285872?e=1766620800&v=beta&t=3eaE8xNX9f7PgdxO0UqlTItCZjM56WErzx6oraxurnM",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "GyaanSetu AI (Artificial Intelligence)",
      "poster_linkedin_url": "https://www.linkedin.com/company/gyaansetu-ai/posts",
      "poster_title": "",
      "text": "𝗧𝗼 𝗦𝘂𝗰𝗰𝗲𝗲𝗱 𝗶𝗻 𝟮𝟬𝟮𝟲 𝗮𝗻𝗱 𝗕𝗲𝘆𝗼𝗻𝗱, 𝗬𝗼𝘂 𝗠𝘂𝘀𝘁 𝗧𝗿𝗲𝗮𝘁 𝗔𝗽𝗽 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗡𝗼𝘁 𝗔𝘀 𝗮𝗻 𝗔𝗼𝗿𝗲 𝗣𝗮𝗿𝘁 𝗢𝗳 𝗬𝗼𝘂𝗿 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗦𝘁𝗿𝗮𝘁𝗲𝗴𝘆\n \nIn today's crowded app marketplace, users expect near-instant loading, fluid UI, and reliable performance across devices. To meet these expectations, it's crucial to adopt the right mobile app testing software and prioritize performance from the start. Performance is not just a technical concern, but fundamental to user retention, engagement, and revenue.\n\nTo improve app performance, focus on meaningful metrics such as cold start time, time-to-interactive, frame rate, and crash rate. Invest in the right tools, including real-device testing and real-user monitoring. Optimize startup and perceived performance by lazy-loading non-critical modules and minimizing app bundle size.\n\nSource: https://lnkd.in/gVZ9cvip\nOptional learning community: https://t.me/GyaanSetuAi\n#AppPerformance #MobileAppTesting #UserRetention #RevenueGrowth #ProductStrategy #SoftwareDevelopment #TechIndustry #MobileApps #PerformanceOptimization #UserExperience",
      "attributes": [],
      "urn": "7403706930780606466",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706930780606466/",
      "posted": "2025-12-08 08:08:06.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "The Data Campers",
      "poster_linkedin_url": "https://www.linkedin.com/company/the-data-campers/posts",
      "poster_title": "",
      "text": "2023 Haziran Kursumuzu başarıyla tamamlayan değerli katılımcılarımızdan Adem Bakırcı, Bilişim School bünyesinde Python ve Artificial Intelligence Eğitmeni olarak görev yapmaktadır.\nOMÜ'de Veri Bilimi alanında yüksek lisans çalışmalarını tamamlayan katılımcımızın \"Gece Sürüş Görüntüleri İyileştirme Yöntemleri\" başlıklı makalesi DergiPark'ta yayınlanma sürecindedir.\n\nKariyer yolculuğunda başarılar dileriz!",
      "attributes": [],
      "urn": "7403706901923774464",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706901923774464/",
      "posted": "2025-12-08 08:07:59.000",
      "post_type": "unknown",
      "num_likes": 1,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQE84-DYARLD7w/feedshare-shrink_1280/B4DZr9AMlBG4Ac-/0/1765181278791?e=1766620800&v=beta&t=QOwbZIvY9vOVQuw8GzDX1vfidBmzscwvzG-isbvWcOA",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "CityUHK Department of Management",
      "poster_linkedin_url": "https://www.linkedin.com/company/cityu-mgt/posts",
      "poster_title": "",
      "text": "The 2025 Bridge – Management Forum: “AI and HR: Conflict or Compliment?” was successfully held by the CityUHK Department of Management Alumni Association. The event gathered a strong turnout of Management alumni and industry professionals, creating a vibrant platform for dialogue on the evolving relationship between artificial intelligence and human resources.\n\nThrough a series of engaging panel discussions, HR leaders, solution consultants, and CXOs shared their perspectives on how AI is transforming the workplace—highlighting both strategic opportunities and practical challenges. A professor from the Department of Management also offered an academic lens on the topic, adding depth through research-based insights.\n\nThe forum reflected the Department’s ongoing commitment to connecting academic knowledge with industry practice, while supporting meaningful exchange among alumni and professionals.\n\n#CityUHK #ManagementForum #AI #HR #Leadership #Innovation #NetworkingEvent",
      "attributes": [],
      "urn": "7403706849876660226",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706849876660226/",
      "posted": "2025-12-08 08:07:47.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQEeH5FLIM2XcA/feedshare-shrink_2048_1536/B4EZr9AJHFGUAo-/0/1765181265156?e=1766620800&v=beta&t=gqR8_f7y1zI5Vd3VkOtJljnGcBtNDP1onQd8CgN2ZZ0",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQFfC4qFp7_9_Q/feedshare-shrink_2048_1536/B4EZr9AJBzIwAo-/0/1765181264308?e=1766620800&v=beta&t=omIITaGtcyT72iFYw7norOKDx0l2guvntQC12JWYM1o",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQHVTlCMukCg-w/feedshare-shrink_1280/B4EZr9AI_mHcAc-/0/1765181264281?e=1766620800&v=beta&t=QFyOcEd71zODdllMIcwldRo6EkCz_6-RK8LHjIm263s",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQHHT3P576n6KQ/feedshare-shrink_2048_1536/B4EZr9AI9_GYAs-/0/1765181264050?e=1766620800&v=beta&t=CIHMH7QwLS4rZQw5C7fI0nq0BUyHVloY74eMNMV231I",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQFssvAZVAhTuA/feedshare-shrink_2048_1536/B4EZr9AI.THcAs-/0/1765181264101?e=1766620800&v=beta&t=0B-6I3AAW8J-O6SHnCYH-GqC4YcTQAaM_fSa5mxEpX4",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQGbuz33HXadSw/feedshare-shrink_2048_1536/B4EZr9AI9YGUAk-/0/1765181264066?e=1766620800&v=beta&t=giNvaaPtmwL1y0MLA9N5AO27hT1M42mCkckfG9wjEqQ",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Ricardo Vásquez Dazarola",
      "poster_linkedin_url": "https://www.linkedin.com/in/ricardo-v%C3%A1squez-dazarola-1b868249",
      "poster_title": "PhD Fellow - University of Copenhagen | Law and Technology | Online Platforms Regulation | AI Regulation",
      "text": "I am really happy to share that last week I successfully defended my PhD thesis at the University of Copenhagen, Faculty of Law, entitled \"Automated Weapons of Mass Persuasion: EU Legal Responses to the Artificial Amplification of Disinformation on Social Media During Elections\".\n\nUsing technology as a benchmark to identify the applicable law, the thesis examines how EU law currently addresses AI-empowered tools and techniques that can be misused to amplify disinformation on social media during elections (deepfakes, micro-targeting, bots, and recommendation algorithms). The analysis connects relevant provisions across three cornerstone instruments: the Artificial Intelligence Act, the Transparency and Targeting of Political Advertising Act, and the Digital Services Act, revealing a nascent but evolving EU legal framework in this field.\n\nBeyond mapping the law, the thesis systematises obligations based on the actor's nature and the type of legal intervention, offering a practical roadmap that also provides an overarching assessment of how these regulations interact, thereby putting forward concrete ideas for potential future legal updates.\n\nI am deeply grateful to my supervisor and co-supervisor, Helle Krunke and Iryna Marchuk, for their trust, guidance, and support throughout this journey. A special thank you as well to the members of the assessment committee, Hin-Yan Liu, Migle Laukyte, and Oreste Pollicino, for their time, comments and insightful engagement.\n\nPs: Yeeees, I am a Doctor! 😊",
      "attributes": [],
      "urn": "7403706800203706368",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706800203706368/",
      "posted": "2025-12-08 08:07:35.000",
      "post_type": "unknown",
      "num_likes": 3,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQFiD7O4IDvG5Q/feedshare-shrink_2048_1536/B4DZr9AGQtHwAo-/0/1765181253337?e=1766620800&v=beta&t=Imw39o6zDnD7msVTHn8QN9veSbbY0oI-m6wrktS60bk",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQFWw0VaYuvp-A/feedshare-shrink_1280/B4DZr9AGaIG4Ag-/0/1765181253866?e=1766620800&v=beta&t=cV09MK_XOWSlNtjQy6ycf3CnH-_urEpsip0CJNQosxk",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Kerry Gaskin",
      "poster_linkedin_url": "https://www.linkedin.com/in/kerry-gaskin-87a72011",
      "poster_title": "Professor of Congenital Cardiac Nursing | Research Leader in CHD Nursing & Advanced Practice | Advocate for Family-Centred Care | Academic Supervisor & Speaker",
      "text": "How times change over a career! fascinating discussion about the use of Technology and Artificial Intelligence to improve cardiac nursing care Di Robertshaw representing Great Ormond Street Hospital for Children NHS Foundation Trust  #wcpccs",
      "attributes": [],
      "urn": "7403706756993957889",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706756993957889/",
      "posted": "2025-12-08 08:07:25.000",
      "post_type": "unknown",
      "num_likes": 1,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQGuU1a8__L7VA/feedshare-shrink_2048_1536/B4EZr9ADRQKYAo-/0/1765181243470?e=1766620800&v=beta&t=3cWv59dPlDGvk6DZTzFJqTYmq1lINJe9GQwWNyjf63w",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQEbxmRyerPANw/feedshare-shrink_1280/B4EZr9AC4lHcAc-/0/1765181239139?e=1766620800&v=beta&t=1GRkx3Y2e8yc5a8n4LC6NBAYZtNiLgNXxrqiVet3Lg0",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D4E22AQFsS1WubF5fTw/feedshare-shrink_1280/B4EZr9AC5DKUAc-/0/1765181239187?e=1766620800&v=beta&t=V0iE-7noPyc2yNDPIJIF6vYtdn8RYz4NsGsT1Uif_PE",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "AHAMED SAMJITH Z",
      "poster_linkedin_url": "https://www.linkedin.com/in/ahamed-samjith-z-661585290",
      "poster_title": "Attended Annai Fathima arts and science college",
      "text": "Glad to share that I have completed my Artificial Intelligence & Machine Learning training from Besant Technologies.\nThis training strengthened my basics in Python, Machine Learning, and AI concepts and increased my interest to learn more and grow in this field.\n\nThanks to Mr. [MOHAMED ISMAIL General manager], General Manager, Basant Technologies, and the training team for their guidance and support.\n\nActively learning and open to opportunities in AI / ML \n\n#AI #MachineLearning #BasantTechnologies",
      "attributes": [],
      "urn": "7403706751537364992",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706751537364992/",
      "posted": "2025-12-08 08:07:23.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGQFSkFkOhPdQ/feedshare-shrink_2048_1536/B56Zr9ADJoHQAw-/0/1765181241849?e=1766620800&v=beta&t=DYD7hEmitfa4NUEwYleXDJvcyCX70ZcEFNpQ5EchpVY",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Ramanamma Karri",
      "poster_linkedin_url": "https://www.linkedin.com/in/ramanamma-karri-74b46437a",
      "poster_title": "Student at Sri Sivani College of Engineering, Chilakapalem Junction, Etcherla Mandal, PIN-532402 (CC-W6)",
      "text": "I'm happy to share that l'be earned multiple IBM SkillsBuild certificates through the magic Bus Foundation 💻🎓\nDuring this program I successfully completed courses in:\n ✅Artificial Intelligence Fundamentals \n✅Customer Engagement: Communication and Personality Dynamics\n✅Customer Engagement: Problem Solving and Process Control",
      "attributes": [],
      "urn": "7403706749150674949",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706749150674949/",
      "posted": "2025-12-08 08:07:23.000",
      "post_type": "unknown",
      "num_likes": 1,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQF0oZSJt3TBlw/feedshare-shrink_1280/B56Zr9ADRUK4Ag-/0/1765181240600?e=1766620800&v=beta&t=6m2-PZhBia_O5ZAcWTdfW_ZDw7BLVW9h8864QdGt7r4",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQFzz8Z_2dXs0A/feedshare-shrink_1280/B56Zr9ADUwHAAc-/0/1765181240796?e=1766620800&v=beta&t=yGwNqi_naVwWxJU9JhFeWfviicFvfJGOrNGlxIxGh9g",
          "alt_text": ""
        },
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQESbhtKtw4mQw/feedshare-shrink_1280/B56Zr9ADUdH8Ac-/0/1765181240872?e=1766620800&v=beta&t=hM_GDy_NilSPT9AUPgbzlGMUUsLd86SuOzcWx2MCu6Y",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Tjeerd Hendel-Blackford",
      "poster_linkedin_url": "https://www.linkedin.com/in/tjeerdhendelblackford",
      "poster_title": "Vice President of Sales @ Cority | Over 25 years in EHSQ / ESG/ Sustainability",
      "text": "“No one is questioning whether AI will transform EHS+ in the coming years, but customers are rightfully asking whether they can trust it to do this important work right now. That’s the problem we’re solving. Cortex AI is designed to earn trust in our industry - it’s purpose built for EHS+, controlled centrally by our customers, and deeply integrated into how work gets done.” - Ryan Magee Cority\n\nhttps://lnkd.in/gpUZRkMg",
      "attributes": [],
      "urn": "7403706737658134529",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706737658134529/",
      "posted": "2025-12-08 08:07:20.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Chuck Drake",
      "poster_linkedin_url": "https://www.linkedin.com/in/chuck-drake-5956b9358",
      "poster_title": "Information Technology Field Engineer",
      "text": "🚀 Healthcare AI just got a massive upgrade.\n\nInferenz and Caregence just merged in a $600M deal that could completely transform how hospitals use artificial intelligence.\n\nHere's why this matters:\n\n• Inferenz brings proven data engineering and enterprise AI expertise\n• Caregence offers agentic AI that automates patient referrals to recovery workflows\n• Combined, they're creating an end-to-end AI powerhouse under the Inferenz brand\n\nThe real game-changer? They're not just building AI tools – they're automating entire healthcare workflows. Think digital front door services, clinical documentation, and value-based care solutions all working together.\n\nThis could be the breakthrough healthcare organizations need to actually deploy AI at scale, reduce costs, and improve patient experience simultaneously.\n\nWhat's your take – will we finally see AI move from healthcare buzzword to real-world transformation? 🏥",
      "attributes": [],
      "urn": "7403706715034136578",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706715034136578/",
      "posted": "2025-12-08 08:07:15.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "hrishikesh Shinde",
      "poster_linkedin_url": "https://www.linkedin.com/in/hrishikesh-shinde-42772a388",
      "poster_title": "Software Engineer at Freelancer.com",
      "text": "AI Content Powerhouses Face-Off for the Win – In the world of content creation, AI-powered tools have revolutionized the way we produce and consume written content. With the rise of artificial intelligence, a new breed of content powerhouses… ... Read more: https://lnkd.in/gvGNmANZ",
      "attributes": [],
      "urn": "7403706708365176833",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706708365176833/",
      "posted": "2025-12-08 08:07:13.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Pratyush Kumar Sahoo",
      "poster_linkedin_url": "https://www.linkedin.com/in/pratyush-kumar-sahoo-65aa73187",
      "poster_title": "B.Pharmacy, MSc. Clinical Research",
      "text": "Hi everyone! I’m seeking a new role and would appreciate your support. If you hear of any opportunities or just want to catch up, please send me a message or comment below. I’d love to reconnect. #OpenToWork\n\nAbout me & what I’m looking for:\n💼 I’m looking for a role in the Clinical Data Management field as I am now a graduate and hold a Master's degree in Clinical Research.\n🌎 Location flexibility: India & global opportunities.\n⭐ I’ve previously worked at Granules India Limited, Hyderabad as IPQA (In-Process Quality Assurance)\n⭐ 6 months of Internship at Centre for Artificial Intelligence and Analysis, ASM Delhi.",
      "attributes": [],
      "urn": "7403706666405355520",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706666405355520/",
      "posted": "2025-12-08 08:07:03.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": []
    },
    {
      "poster_name": "Noor Alhazeem",
      "poster_linkedin_url": "https://www.linkedin.com/in/nooralhazeemm",
      "poster_title": "Radiology Technologist | Product Specialist | Medical Sales Representative",
      "text": "I’m pleased to share that I’ve earned the “Foundations of Artificial Intelligence” certificate from SDAIA through the SMAI initiative. \nI’m confident these skills will positively enhance my daily work and quality of life🌟\n\nكن واحداً من #مليون_سعودي_AI\nانضم لـ #سماي : https://samai.futurex.sa",
      "attributes": [],
      "urn": "7403706617072062464",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706617072062464/",
      "posted": "2025-12-08 08:06:51.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D4D22AQFdk3vC2eyhEQ/feedshare-shrink_2048_1536/B4DZr8_7pjH0Aw-/0/1765181211387?e=1766620800&v=beta&t=a6tlIO8Dyw4qb4uPsrddnd20Z7fEY5PzOHxQdTCo3vU",
          "alt_text": ""
        }
      ]
    },
    {
      "poster_name": "Talent Quotient Partners",
      "poster_linkedin_url": "https://www.linkedin.com/company/talentquotientorg/posts",
      "poster_title": "",
      "text": "Talent Quotient Partners and AI Careers & Connections by Talent Quotient Partners in collaboration with Pune AI Community brings you a focused webinar on Transitioning to a Career in Artificial Intelligence with Yogesh Haribhau Kulkarni (AI Advisior & Mentor )\n\nAI careers are booming — but the path to enter the field is confusing for most people.\nSo we’re bringing clarity.\n\nJoin us on 13th December 2025 at 3PM to learn:\n\n • Introduction to AI\n • Core concepts behind AI\n • AI career roles and opportunities\n • How to choose the right AI persona\n • Essential tools used in AI workflows\n • A practical learning path + career roadmap\n\nIf you're a student, fresher, or working professional exploring a pivot into AI, this session will give you exactly the direction you need.\n\nSave your spot — \n\nRegister here: https://lnkd.in/dQR7Warv\n.\n.\nUpasana Talukdar Rakesh Rajendran Amruta Jambhulkar Akanksha Bhadani Twinkle Chugh Sanskruti Savle Shiv Pratap Singh\n\n#aiwebinar #careerwebinar #transitiontoai #aieventinpune #career",
      "attributes": [],
      "urn": "7403706587028127744",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706587028127744/",
      "posted": "2025-12-08 08:06:44.000",
      "post_type": "unknown",
      "num_likes": 3,
      "num_comments": 1,
      "num_shares": 2,
      "document": {
        "url": "https://media.licdn.com/dms/document/media/v2/D4D1FAQH4TBBlul5IuA/feedshare-document-chunked-pdf/B4DZr88XijJMBs-/0/1765180280593?e=1765789200&v=beta&t=BHBPi3zyi4IsygUzkeb_c9xWM1ilcjO60nQdSEh571M",
        "page_count": 7,
        "title": "Webinar with Yogesh Kulkarni on 13th Dec, at 3PM IST"
      },
      "images": []
    },
    {
      "poster_name": "SkillUp Salone",
      "poster_linkedin_url": "https://www.linkedin.com/in/skillup-salone-065710384",
      "poster_title": "Empowering Sierra Leone’s next generation of digital professionals and entrepreneurs.",
      "text": "The Job Market Has Changed. Have You?\n​\nWe often talk about \"job security,\" but the only real security in 2025 is Skill Security.\n\n​At SkillUp Salone, we’ve analyzed the global market trends. If you are looking to pivot your career or increase your earning potential significantly over the next 24 months, focus on these five pillars:\n\n​Artificial Intelligence Fluency: Beyond just using ChatGPT, understanding how to integrate AI into business workflows.\n\n​Data-Driven Decision Making: The ability to use tools like Python or Excel to interpret complex data.\n\n​Digital Revenue Generation: This includes high-ticket sales and digital marketing.\n\n​Content Production: Video editing and storytelling are now corporate requirements, not just for influencers.\n​Agile Project Management: Leading remote teams effectively.\n​The Opportunity:\nSierra Leone has immense talent. By mastering these digital-first skills, we open doors not just locally, but globally.\n​Which of these skills do you think is most lacking in our current local workforce? Let’s discuss below. 👇\n​#ProfessionalDevelopment #SkillUpSalone #FutureOfWork #SierraLeone #EconomicGrowth",
      "attributes": [],
      "urn": "7403706474805280768",
      "post_url": "https://www.linkedin.com/feed/update/urn:li:activity:7403706474805280768/",
      "posted": "2025-12-08 08:06:17.000",
      "post_type": "unknown",
      "num_likes": null,
      "num_comments": null,
      "num_shares": null,
      "images": [
        {
          "url": "https://media.licdn.com/dms/image/v2/D5622AQGzy6w8KtuHYQ/feedshare-shrink_2048_1536/B56Zr8_zkCHQAo-/0/1765181176556?e=1766620800&v=beta&t=cNBvxC4WtrNt-SHZbtYecLwsnIdT773mYybncU-tKto",
          "alt_text": ""
        }
      ]
    }
  ],
  "total": 483
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
| `data[].post_url` | Full URL to the post |
| `data[].posted` | Posted timestamp |
| `data[].poster_name` | Author name |
| `data[].poster_linkedin_url` | Author LinkedIn URL |
| `data[].poster_title` | Author title/headline |
| `data[].num_likes` | Like count |
| `data[].num_comments` | Comment count |
| `data[].images` | Array of image objects |
| `data[].video` | Video info (if any) |
| `data[].document` | Document info (if any) |

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success - Posts returned |
| 400 | Invalid Parameter - Invalid request body |
| 500 | Server Error - Internal error occurred |
| 503 | Service Unavailable - Timeout or temporary failure |

## Related Endpoints

- [Get Post Reactions](/api-reference/endpoint/get-post-reactions) - Get reactions on a post
- [Get Post Comments](/api-reference/endpoint/get-post-comments) - Get comments on a post
