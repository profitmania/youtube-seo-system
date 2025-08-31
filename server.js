<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube SEO Backend Server - Production Ready</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css">
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
</head>
<body class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-8">
        <div class="bg-gray-800 rounded-lg p-6 mb-8">
            <h1 class="text-3xl font-bold mb-4 text-green-400">
                <i class="fas fa-server mr-3"></i>YouTube SEO Backend Server - Production Ready
            </h1>
            <p class="text-gray-300 mb-4">Complete Node.js backend with real YouTube transcript extraction and OpenAI GPT-4 integration</p>
            
            <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="bg-green-900 p-4 rounded">
                    <i class="fas fa-check-circle text-green-400 mb-2"></i>
                    <div class="font-bold">Real Transcript Extraction</div>
                    <div class="text-sm text-green-300">Using youtube-transcript package</div>
                </div>
                <div class="bg-blue-900 p-4 rounded">
                    <i class="fas fa-robot text-blue-400 mb-2"></i>
                    <div class="font-bold">OpenAI GPT-4 Integration</div>
                    <div class="text-sm text-blue-300">Real AI-powered SEO optimization</div>
                </div>
                <div class="bg-purple-900 p-4 rounded">
                    <i class="fas fa-shield-alt text-purple-400 mb-2"></i>
                    <div class="font-bold">Production Security</div>
                    <div class="text-sm text-purple-300">Rate limiting & CORS protection</div>
                </div>
            </div>
        </div>

        <!-- Package.json File -->
        <div class="bg-gray-800 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-yellow-400">
                    <i class="fas fa-file-code mr-2"></i>package.json
                </h2>
                <button onclick="copyToClipboard('package-json')" class="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-sm">
                    <i class="fas fa-copy mr-1"></i>Copy
                </button>
            </div>
            <pre class="bg-gray-900 p-4 rounded overflow-x-auto"><code id="package-json" class="language-json">{
  "name": "youtube-seo-backend",
  "version": "1.0.0",
  "description": "Real YouTube SEO system with transcript extraction and AI optimization",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.8.1",
    "dotenv": "^16.3.1",
    "youtube-transcript": "^1.0.6",
    "openai": "^4.0.0",
    "axios": "^1.4.0",
    "node-cache": "^5.1.2",
    "express-validator": "^7.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}</code></pre>
        </div>

        <!-- Environment Variables -->
        <div class="bg-gray-800 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-green-400">
                    <i class="fas fa-key mr-2"></i>.env (Environment Variables)
                </h2>
                <button onclick="copyToClipboard('env-vars')" class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm">
                    <i class="fas fa-copy mr-1"></i>Copy
                </button>
            </div>
            <pre class="bg-gray-900 p-4 rounded overflow-x-auto"><code id="env-vars" class="language-bash"># OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
PORT=3001
NODE_ENV=production

# CORS Configuration (your frontend domain)
FRONTEND_URL=https://www.affiliaxa.com

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Cache Configuration
CACHE_TTL_SECONDS=3600</code></pre>
        </div>

        <!-- Main Server File -->
        <div class="bg-gray-800 rounded-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-blue-400">
                    <i class="fas fa-server mr-2"></i>server.js (Main Backend Server)
                </h2>
                <button onclick="copyToClipboard('server-js')" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
                    <i class="fas fa-copy mr-1"></i>Copy
                </button>
            </div>
            <pre class="bg-gray-900 p-4 rounded overflow-x-auto max-h-96"><code id="server-js" class="language-javascript">const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const NodeCache = require('node-cache');
const { YoutubeTranscript } = require('youtube-transcript');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const cache = new NodeCache({ stdTTL: process.env.CACHE_TTL_SECONDS || 3600 });

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Security Middleware
app.use(helmet());
app.use(express.json({ limit: '10mb' }));

// CORS Configuration
app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    'https://www.affiliaxa.com',
    'https://affiliaxa.com',
    'http://localhost:3000'
  ],
  credentials: true
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX_REQUESTS || 100,
  message: {
    error: 'Too many requests, please try again later.'
  }
});
app.use(limiter);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Extract Video ID from YouTube URL
function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// YouTube Transcript Extraction Endpoint
app.post('/api/extract-transcript', [
  body('videoUrl').isURL().withMessage('Valid YouTube URL required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { videoUrl } = req.body;
    const videoId = extractVideoId(videoUrl);
    
    if (!videoId) {
      return res.status(400).json({ 
        error: 'Invalid YouTube URL format. Please provide a valid YouTube video URL.' 
      });
    }

    // Check cache first
    const cacheKey = `transcript_${videoId}`;
    const cachedResult = cache.get(cacheKey);
    if (cachedResult) {
      return res.json({
        success: true,
        videoId: videoId,
        transcript: cachedResult.transcript,
        metadata: cachedResult.metadata,
        cached: true
      });
    }

    // Extract transcript
    const transcriptArray = await YoutubeTranscript.fetchTranscript(videoId);
    
    if (!transcriptArray || transcriptArray.length === 0) {
      return res.status(404).json({
        error: 'No transcript available for this video. Please ensure the video has captions or subtitles enabled.'
      });
    }

    // Combine transcript segments
    const fullTranscript = transcriptArray
      .map(item => item.text)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Get video metadata
    const metadata = {
      videoId: videoId,
      url: videoUrl,
      extractedAt: new Date().toISOString(),
      segmentCount: transcriptArray.length,
      wordCount: fullTranscript.split(' ').length
    };

    // Cache the result
    const result = { transcript: fullTranscript, metadata: metadata };
    cache.set(cacheKey, result);

    res.json({
      success: true,
      videoId: videoId,
      transcript: fullTranscript,
      metadata: metadata,
      cached: false
    });

  } catch (error) {
    console.error('Transcript extraction error:', error);
    
    if (error.message && error.message.includes('Transcript is disabled')) {
      return res.status(404).json({
        error: 'Transcript is disabled for this video. Please try a video with captions enabled.'
      });
    }
    
    res.status(500).json({
      error: 'Failed to extract transcript. Please try again or use a different video.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// AI SEO Optimization Endpoint
app.post('/api/optimize-seo', [
  body('transcript').isLength({ min: 50 }).withMessage('Transcript must be at least 50 characters'),
  body('keyword').optional().isLength({ max: 100 }).withMessage('Keyword must be less than 100 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { transcript, keyword = 'YouTube SEO' } = req.body;

    // Check cache first
    const cacheKey = `seo_${Buffer.from(transcript.substring(0, 200) + keyword).toString('base64')}`;
    const cachedResult = cache.get(cacheKey);
    if (cachedResult) {
      return res.json({
        success: true,
        ...cachedResult,
        cached: true
      });
    }

    // AI SEO Optimization using GPT-4
    const systemPrompt = `You are Alex Hormozi, the master of direct response marketing and viral content creation. Your task is to create YouTube SEO optimization that converts viewers into customers.

ALEX HORMOZI'S RULES:
1. Use "95% vs 5%" positioning to create urgency and exclusivity
2. Include specific numbers and dollar amounts for credibility ($50K, 847%, 127 students, etc.)
3. Create contrarian headlines that challenge conventional wisdom
4. Use brutal honesty and cut through BS
5. Focus on psychological triggers and pain points
6. Promise specific, measurable outcomes
7. Create FOMO with scarcity (limited spots, time-sensitive offers)

Create SEO optimization for the keyword "${keyword}" based on the video content provided.`;

    const userPrompt = `Based on this video transcript, create YouTube SEO optimization for the keyword "${keyword}":

TRANSCRIPT:
${transcript.substring(0, 4000)}

Create:
1. VIRAL TITLE: Using Alex Hormozi psychology (95% positioning, specific numbers, contrarian angle)
2. TAGS: 15-20 relevant tags including the main keyword
3. DESCRIPTION: Compelling description with Hormozi-style hooks, specific benefits, and call-to-action

Make it conversion-focused and follow Alex Hormozi's direct response principles.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.8,
      max_tokens: 2000
    });

    const aiResponse = completion.choices[0].message.content;

    // Parse the AI response to extract title, tags, and description
    const result = parseAIResponse(aiResponse, keyword);

    // Cache the result
    cache.set(cacheKey, result);

    res.json({
      success: true,
      ...result,
      cached: false,
      keyword: keyword,
      optimizedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('SEO optimization error:', error);
    
    res.status(500).json({
      error: 'Failed to generate SEO optimization. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Parse AI Response Helper Function
function parseAIResponse(aiResponse, keyword) {
  try {
    // Extract title
    const titleMatch = aiResponse.match(/(?:VIRAL TITLE|TITLE):\s*(.+?)(?:\n|$)/i);
    const title = titleMatch ? titleMatch[1].trim() : generateFallbackTitle(keyword);

    // Extract tags
    const tagsMatch = aiResponse.match(/(?:TAGS):\s*(.+?)(?:\n\n|\n(?:[A-Z])|$)/is);
    let tags = '';
    if (tagsMatch) {
      tags = tagsMatch[1]
        .replace(/\n/g, ', ')
        .replace(/^\d+\.\s*/, '')
        .replace(/,\s*\d+\.\s*/g, ', ')
        .trim();
    } else {
      tags = generateFallbackTags(keyword);
    }

    // Extract description
    const descriptionMatch = aiResponse.match(/(?:DESCRIPTION):\s*(.+?)(?:\n\n|$)/is);
    const description = descriptionMatch ? descriptionMatch[1].trim() : generateFallbackDescription(keyword);

    return {
      title: title,
      tags: tags,
      description: description,
      rawAIResponse: aiResponse
    };
  } catch (error) {
    console.error('Error parsing AI response:', error);
    return {
      title: generateFallbackTitle(keyword),
      tags: generateFallbackTags(keyword),
      description: generateFallbackDescription(keyword)
    };
  }
}

// Fallback Content Generators
function generateFallbackTitle(keyword) {
  const hooks = [
    `95% of ${keyword} Advice is Dead Wrong (Here's What Actually Works)`,
    `Why 99% Fail at ${keyword} (The $50K Mistake Everyone Makes)`,
    `The Brutal Truth About ${keyword} That No One Tells You`,
    `${keyword}: Why 95% Stay Broke While 5% Get Rich`
  ];
  const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
  const numbers = ['847%', '23x', '$127K', '10x', '73%'];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return `${randomHook} - ${randomNumber} Proven Results`;
}

function generateFallbackTags(keyword) {
  return `${keyword.toLowerCase()}, make money online, entrepreneur, business strategy, passive income, wealth building, success mindset, online business, digital marketing, youtube growth, alex hormozi, content creation, viral content, youtube algorithm, marketing psychology`;
}

function generateFallbackDescription(keyword) {
  const numbers = ['847%', '23x', '$127K', '10x', '73%'];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  
  return `🔥 The ${randomNumber} ${keyword} Method That 95% Get Wrong

Most people fail at ${keyword} because they follow outdated advice from broke gurus. Here's what the top 5% actually do:

⚡ The ${randomNumber} framework that changes everything
⚡ Why 95% of ${keyword} strategies fail (avoid these mistakes)
⚡ How to get ${randomNumber} results in 30 days or less
⚡ Real case studies from successful implementers

I've helped 12,847+ people master ${keyword}. The average person sees ${randomNumber} improvement using this system.

🎯 WHAT YOU'LL DISCOVER:
• The psychological triggers behind ${randomNumber} results
• Why most ${keyword} advice keeps you stuck
• The specific steps to achieve massive growth
• How to avoid the costly mistakes 95% make

This isn't theory. This is the battle-tested method used by the 5% who actually win.

⏰ Limited time: Only 73 spots available this month.

#${keyword.replace(/\s+/g, '')} #MakeMoneyOnline #Entrepreneur #Success`;
}

// Video Download Links Endpoint
app.post('/api/get-download-links', [
  body('videoUrl').isURL().withMessage('Valid YouTube URL required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { videoUrl } = req.body;
    const videoId = extractVideoId(videoUrl);
    
    if (!videoId) {
      return res.status(400).json({ 
        error: 'Invalid YouTube URL format' 
      });
    }

    const downloadLinks = {
      videoId: videoId,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      links: [
        {
          service: 'YT1S',
          name: 'YT1S - MP4 (Recommended)',
          url: `https://yt1s.com/en/youtube-to-mp4?q=${encodeURIComponent(videoUrl)}`,
          format: 'MP4',
          quality: 'HD'
        },
        {
          service: 'YT1S',
          name: 'YT1S - MP3 (Audio Only)', 
          url: `https://yt1s.com/en/youtube-to-mp3?q=${encodeURIComponent(videoUrl)}`,
          format: 'MP3',
          quality: 'High'
        },
        {
          service: 'Y2Mate',
          name: 'Y2mate (Alternative)',
          url: `https://www.y2mate.com/youtube/${videoId}`,
          format: 'Multiple',
          quality: 'Various'
        },
        {
          service: 'SaveFrom',
          name: 'SaveFrom.net',
          url: `https://savefrom.net/#url=${encodeURIComponent(videoUrl)}`,
          format: 'Multiple',
          quality: 'Various'
        }
      ]
    };

    res.json({
      success: true,
      ...downloadLinks
    });

  } catch (error) {
    console.error('Download links error:', error);
    res.status(500).json({
      error: 'Failed to generate download links',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error Handler
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 YouTube SEO Backend Server running on port ${PORT}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'localhost'}`);
});</code></pre>
        </div>

        <!-- Deployment Instructions -->
        <div class="bg-gray-800 rounded-lg p-6">
            <h2 class="text-xl font-bold text-purple-400 mb-4">
                <i class="fas fa-rocket mr-2"></i>Quick Deployment Guide
            </h2>
            
            <div class="space-y-4 text-gray-300">
                <div class="bg-purple-900 p-4 rounded">
                    <h3 class="font-bold text-purple-300 mb-2">1. Save Files</h3>
                    <p>Create a new folder and save these 3 files: <code>package.json</code>, <code>.env</code>, <code>server.js</code></p>
                </div>
                
                <div class="bg-blue-900 p-4 rounded">
                    <h3 class="font-bold text-blue-300 mb-2">2. Install Dependencies</h3>
                    <code class="bg-gray-800 p-2 rounded block">npm install</code>
                </div>
                
                <div class="bg-green-900 p-4 rounded">
                    <h3 class="font-bold text-green-300 mb-2">3. Configure Environment</h3>
                    <p>Update <code>.env</code> file with your OpenAI API key and domain settings</p>
                </div>
                
                <div class="bg-yellow-900 p-4 rounded">
                    <h3 class="font-bold text-yellow-300 mb-2">4. Deploy to Server</h3>
                    <p>Upload to your hosting service (Heroku, AWS, DigitalOcean) and start with <code>npm start</code></p>
                </div>
            </div>
            
            <div class="mt-6 p-4 bg-red-900 rounded">
                <h3 class="font-bold text-red-300 mb-2">
                    <i class="fas fa-exclamation-triangle mr-2"></i>Ready to Confirm Deployment?
                </h3>
                <p class="text-red-200">I've created your complete backend server. Do you want me to proceed with creating the frontend that connects to this backend?</p>
            </div>
        </div>
    </div>

    <script>
        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const text = element.textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                const button = event.target.closest('button');
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check mr-1"></i>Copied!';
                button.classList.remove('bg-yellow-600', 'bg-green-600', 'bg-blue-600');
                button.classList.add('bg-green-600');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('bg-green-600');
                    if (elementId === 'package-json') button.classList.add('bg-yellow-600');
                    if (elementId === 'env-vars') button.classList.add('bg-green-600');
                    if (elementId === 'server-js') button.classList.add('bg-blue-600');
                }, 2000);
            });
        }
    </script>
</body>
</html>
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDhyIG5N%2FC%2B7v1T3bjdLfRyQMrYS2ER2BTnDLw6wXhQfLKBCeGahxtr9suWOkWSVg5sznK4wT4Ot%2BJfD3ytaY%2BmkNHpVsE8n4Spolrpku0bOz9QQ3r2RVhDMBF%2FhKMis7cVlE8hOaCpco0JQ%2Fq31KihIDJwY6X8MNiTi61o8FvoFd%2F9m9RMYV6mudrOf%2Fl9NWBgNzLGJNczq4m1JxiBaQpvi%2Bw3GSWh3SpOr6brD1nyZalNmK%2FcDo5%2BPeV%2BEVNBUIk05ton%2FJZ2At47Es36pc%2F6OlYthF3r4ALsxpsHJK0rRwDREj0KTlUc8Hbm06Pf1Xj5e1%2FuAXEcldylOf6nUNI5IeDxe7MOwmfurNFM2Oq%2FvLlxZUKwoTz935fPAM5NxObfmFTdQ3yiWwF5Rd2HelbSK1fy628tQSdBg720X9i938K9RFHHkMKBvEhsdDGwpGoJepzmhWlQlymvK4W%2BSfX6FzFbNBxnD5eGdIHcJ6ayE1iyH6rtac99p7Mb4L5pGVoev13Sd9psSPP9C7rwPLYsA%3D";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDhyIG5N/C+7v1T3bjdLfRyQMrYS2ER2BTnDLw6wXhQfLKBCeGahxtr9suWOkWSVg5sznK4wT4Ot+JfD3ytaY+mkNHpVsE8n4Spolrpku0bOz9QQ3r2RVhDMBF/hKMis7cVlE8hOaCpco0JQ/q31KihIDJwY6X8MNiTi61o8FvoFd/9m9RMYV6mudrOf/l9NWBgNzLGJNczq4m1JxiBaQpvi+w3GSWh3SpOr6brD1nyZalNmK/cDo5+PeV+EVNBUIk05ton/JZ2At47Es36pc/6OlYthF3r4ALsxpsHJK0rRwDREj0KTlUc8Hbm06Pf1Xj5e1/uAXEcldylOf6nUNI5IeDxe7MOwmfurNFM2Oq/vLlxZUKwoTz935fPAM5NxObfmFTdQ3yiWwF5Rd2HelbSK1fy628tQSdBg720X9i938K9RFHHkMKBvEhsdDGwpGoJepzmhWlQlymvK4W+SfX6FzFbNBxnD5eGdIHcJ6ayE1iyH6rtac99p7Mb4L5pGVoev13Sd9psSPP9C7rwPLYsA=";
    </script>
    
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
    