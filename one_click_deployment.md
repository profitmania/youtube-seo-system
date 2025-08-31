<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One-Click Heroku Deployment - YouTube SEO System</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <style>
        .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .code-block { background: #1e293b; color: #e2e8f0; font-family: 'Monaco', 'Menlo', monospace; }
        .copy-btn { transition: all 0.2s; }
        .copy-btn:hover { transform: scale(1.05); }
    </style>
</head>
<body class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="gradient-bg text-white py-8">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">
                <i class="fas fa-rocket mr-3"></i>One-Click Heroku Deployment
            </h1>
            <p class="text-xl opacity-90">Deploy your YouTube SEO system in 2 minutes</p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-8 max-w-6xl">
        
        <!-- One-Click Deploy Button -->
        <div class="bg-white rounded-lg p-8 shadow-lg mb-8 text-center">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">🚀 Deploy Your System Now</h2>
            <p class="text-gray-600 mb-8">Click the button below to deploy your complete YouTube SEO system to Heroku instantly.</p>
            
            <a href="https://heroku.com/deploy?template=https://github.com/your-username/youtube-seo-system" 
               target="_blank"
               class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-200 copy-btn">
                <i class="fab fa-heroku mr-3"></i>Deploy to Heroku
            </a>
            
            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <p class="text-blue-800 text-sm">
                    <i class="fas fa-info-circle mr-2"></i>
                    <strong>Note:</strong> You'll need a GitHub account and Heroku account (both free)
                </p>
            </div>
        </div>

        <!-- Alternative: Manual Setup -->
        <div class="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">
                <i class="fas fa-cogs mr-3"></i>Alternative: Manual Setup (5 minutes)
            </h2>

            <!-- Step 1: Create Heroku App -->
            <div class="mb-8">
                <h3 class="text-xl font-semibold mb-4 text-purple-600">
                    <span class="bg-purple-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Create Heroku App
                </h3>
                
                <div class="bg-gray-100 p-4 rounded-lg mb-4">
                    <p class="mb-3">Go to <a href="https://dashboard.heroku.com/new-app" target="_blank" class="text-blue-600 underline">Heroku Dashboard</a> and create new app:</p>
                    <ul class="list-disc list-inside space-y-1 text-gray-700">
                        <li>App name: <code class="bg-gray-200 px-2 py-1 rounded">youtube-seo-system</code> (or your choice)</li>
                        <li>Region: United States</li>
                        <li>Click "Create app"</li>
                    </ul>
                </div>
            </div>

            <!-- Step 2: Configure Environment Variables -->
            <div class="mb-8">
                <h3 class="text-xl font-semibold mb-4 text-purple-600">
                    <span class="bg-purple-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Configure Environment Variables
                </h3>
                
                <p class="mb-4">In your Heroku app, go to Settings → Config Vars and add these:</p>
                
                <div class="space-y-4">
                    <div class="border rounded-lg p-4">
                        <div class="flex justify-between items-center mb-2">
                            <strong>OPENAI_API_KEY</strong>
                            <button onclick="copyToClipboard('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')" 
                                    class="copy-btn bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                                <i class="fas fa-copy mr-1"></i>Copy
                            </button>
                        </div>
                        <code class="text-xs bg-gray-100 p-2 rounded block">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</code>
                    </div>
                    
                    <div class="border rounded-lg p-4">
                        <div class="flex justify-between items-center mb-2">
                            <strong>YOUTUBE_API_KEY</strong>
                            <button onclick="copyToClipboard('AIzaSyDBTgy1uMjBvfvVItSZ6ZG_-3QC4HdORO0')" 
                                    class="copy-btn bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                                <i class="fas fa-copy mr-1"></i>Copy
                            </button>
                        </div>
                        <code class="text-xs bg-gray-100 p-2 rounded block">AIzaSyDBTgy1uMjBvfvVItSZ6ZG_-3QC4HdORO0</code>
                    </div>
                    
                    <div class="border rounded-lg p-4">
                        <div class="flex justify-between items-center mb-2">
                            <strong>PORT</strong>
                            <button onclick="copyToClipboard('3000')" 
                                    class="copy-btn bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                                <i class="fas fa-copy mr-1"></i>Copy
                            </button>
                        </div>
                        <code class="text-xs bg-gray-100 p-2 rounded block">3000</code>
                    </div>
                    
                    <div class="border rounded-lg p-4">
                        <div class="flex justify-between items-center mb-2">
                            <strong>NODE_ENV</strong>
                            <button onclick="copyToClipboard('production')" 
                                    class="copy-btn bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                                <i class="fas fa-copy mr-1"></i>Copy
                            </button>
                        </div>
                        <code class="text-xs bg-gray-100 p-2 rounded block">production</code>
                    </div>
                </div>
            </div>

            <!-- Step 3: Deploy Files -->
            <div class="mb-8">
                <h3 class="text-xl font-semibold mb-4 text-purple-600">
                    <span class="bg-purple-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Deploy Your Files
                </h3>
                
                <p class="mb-4">You can deploy using Heroku CLI or GitHub integration. Here's the GitHub method:</p>
                
                <div class="bg-gray-100 p-4 rounded-lg">
                    <ol class="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Create a new GitHub repository</li>
                        <li>Upload your files (server.js, package.json, Procfile)</li>
                        <li>In Heroku app → Deploy → Connect to GitHub</li>
                        <li>Select your repository and deploy</li>
                    </ol>
                </div>
            </div>
        </div>

        <!-- Required Files -->
        <div class="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">
                <i class="fas fa-file-code mr-3"></i>Required Files for Deployment
            </h2>

            <!-- Procfile -->
            <div class="mb-6">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-semibold">Procfile</h3>
                    <button onclick="copyToClipboard('web: node server.js')" 
                            class="copy-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        <i class="fas fa-copy mr-2"></i>Copy
                    </button>
                </div>
                <div class="code-block p-4 rounded-lg">
                    <pre>web: node server.js</pre>
                </div>
            </div>

            <!-- app.json -->
            <div class="mb-6">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-semibold">app.json (Heroku Configuration)</h3>
                    <button onclick="copyToClipboard(appJsonContent)" 
                            class="copy-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        <i class="fas fa-copy mr-2"></i>Copy
                    </button>
                </div>
                <div class="code-block p-4 rounded-lg text-xs">
                    <pre id="app-json-content">{
  "name": "YouTube SEO System",
  "description": "AI-powered YouTube SEO optimization system with real transcript extraction",
  "repository": "https://github.com/your-username/youtube-seo-system",
  "keywords": ["youtube", "seo", "ai", "transcript", "optimization"],
  "env": {
    "OPENAI_API_KEY": {
      "description": "OpenAI API key for AI-powered SEO optimization",
      "value": "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"
    },
    "YOUTUBE_API_KEY": {
      "description": "YouTube Data API key for video metadata",
      "value": "AIzaSyDBTgy1uMjBvfvVItSZ6ZG_-3QC4HdORO0"
    },
    "NODE_ENV": {
      "description": "Node environment",
      "value": "production"
    }
  },
  "formation": {
    "web": {
      "quantity": 1,
      "size": "basic"
    }
  },
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    }
  ],
  "addons": []
}</pre>
                </div>
            </div>

            <!-- .env file -->
            <div class="mb-6">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-semibold">.env (For Local Development)</h3>
                    <button onclick="copyToClipboard(envContent)" 
                            class="copy-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        <i class="fas fa-copy mr-2"></i>Copy
                    </button>
                </div>
                <div class="code-block p-4 rounded-lg">
                    <pre>OPENAI_API_KEY=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
YOUTUBE_API_KEY=AIzaSyDBTgy1uMjBvfvVItSZ6ZG_-3QC4HdORO0
PORT=3000
NODE_ENV=development</pre>
                </div>
            </div>
        </div>

        <!-- Post-Deployment Steps -->
        <div class="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">
                <i class="fas fa-check-circle mr-3"></i>After Deployment
            </h2>
            
            <div class="space-y-4">
                <div class="flex items-start">
                    <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                        <h4 class="font-semibold mb-1">Test Your Backend API</h4>
                        <p class="text-gray-600">Visit <code class="bg-gray-200 px-2 py-1 rounded">your-app-name.herokuapp.com/api/health</code> to verify it's working</p>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                        <h4 class="font-semibold mb-1">Update Frontend Configuration</h4>
                        <p class="text-gray-600">In your frontend HTML, update the API endpoint to your Heroku URL</p>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                        <h4 class="font-semibold mb-1">Upload Frontend to affiliaxa.com</h4>
                        <p class="text-gray-600">Upload your updated index_production.html to your affiliaxa.com domain</p>
                    </div>
                </div>
                
                <div class="flex items-start">
                    <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                        <h4 class="font-semibold mb-1">Test Complete System</h4>
                        <p class="text-gray-600">Try extracting a transcript and generating SEO optimization to verify everything works</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Success Message -->
        <div class="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white text-center">
            <h2 class="text-3xl font-bold mb-4">🎉 Your System Will Be Live!</h2>
            <p class="text-lg mb-6">Visitors will get real AI-powered transcript extraction and SEO optimization</p>
            <div class="grid md:grid-cols-3 gap-6 text-center">
                <div>
                    <div class="text-2xl font-bold">Real Transcripts</div>
                    <div class="text-sm opacity-90">Using YouTube API</div>
                </div>
                <div>
                    <div class="text-2xl font-bold">AI SEO Optimization</div>
                    <div class="text-sm opacity-90">Using GPT-4</div>
                </div>
                <div>
                    <div class="text-2xl font-bold">Hormozi Psychology</div>
                    <div class="text-sm opacity-90">Built-in conversion tactics</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const appJsonContent = `{
  "name": "YouTube SEO System",
  "description": "AI-powered YouTube SEO optimization system with real transcript extraction",
  "repository": "https://github.com/your-username/youtube-seo-system",
  "keywords": ["youtube", "seo", "ai", "transcript", "optimization"],
  "env": {
    "OPENAI_API_KEY": {
      "description": "OpenAI API key for AI-powered SEO optimization",
      "value": "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"
    },
    "YOUTUBE_API_KEY": {
      "description": "YouTube Data API key for video metadata",
      "value": "AIzaSyDBTgy1uMjBvfvVItSZ6ZG_-3QC4HdORO0"
    },
    "NODE_ENV": {
      "description": "Node environment",
      "value": "production"
    }
  },
  "formation": {
    "web": {
      "quantity": 1,
      "size": "basic"
    }
  },
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    }
  ],
  "addons": []
}`;

        const envContent = `OPENAI_API_KEY=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
YOUTUBE_API_KEY=AIzaSyDBTgy1uMjBvfvVItSZ6ZG_-3QC4HdORO0
PORT=3000
NODE_ENV=development`;

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Show success message
                const notification = document.createElement('div');
                notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50';
                notification.innerHTML = '<i class="fas fa-check mr-2"></i>Copied to clipboard!';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy to clipboard. Please select and copy manually.');
            });
        }

        // Add copy buttons hover effects
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    </script>
</body>
</html>
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDsaRFRuSdYGLtzsaDsT1qZQotnJ65tuDrVDShRV2IfAsm7VG8hMMk6KFq5Ar7Oiwqbldxbi8Y5nIX%2B4pUBHdrBOQmsqr6H0GuWHszs1KVwXxiPdCg8acnbcU%2BhpKR%2Bjdr9ulgdijgKOh41Kbvtllj2LYcH8rTmNpoeHtRcfy%2Fad4xkUxru2qoGwh9jEAXCv83mW2ec7TQxZzWj%2FasFB%2BRr0A6QUP5Lz3bStvJJlgVy62JVCADcGLViPF093SWhy4wELtdwN8dZc0X7t0fP38LdUXWzc82rKEZVfnfOwluTQO%2Fbsp5SIuruv8zPoUo7O3DSxCZ2N92y3Zpm0rd5ds3DAiD0en1cVJKwAX%2BOPvnuAKKTE7dZqAR%2FcZzsX1RcoaDpktDB%2F%2F%2FLu5Fu3%2Bksr7aGORgucej6XxBc2HmitQVlsLkpcmQe3%2Fn%2FXMTb4Waaa%2B3X%2B%2BPc26LXsbJCyJY8H34H5%2BIPTmDVS%2FLZ9HwlI4%2B7GfMlWUSVJjAMIhrigAmvvhpQ%3D%3D";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDsaRFRuSdYGLtzsaDsT1qZQotnJ65tuDrVDShRV2IfAsm7VG8hMMk6KFq5Ar7Oiwqbldxbi8Y5nIX+4pUBHdrBOQmsqr6H0GuWHszs1KVwXxiPdCg8acnbcU+hpKR+jdr9ulgdijgKOh41Kbvtllj2LYcH8rTmNpoeHtRcfy/ad4xkUxru2qoGwh9jEAXCv83mW2ec7TQxZzWj/asFB+Rr0A6QUP5Lz3bStvJJlgVy62JVCADcGLViPF093SWhy4wELtdwN8dZc0X7t0fP38LdUXWzc82rKEZVfnfOwluTQO/bsp5SIuruv8zPoUo7O3DSxCZ2N92y3Zpm0rd5ds3DAiD0en1cVJKwAX+OPvnuAKKTE7dZqAR/cZzsX1RcoaDpktDB///Lu5Fu3+ksr7aGORgucej6XxBc2HmitQVlsLkpcmQe3/n/XMTb4Waaa+3X++Pc26LXsbJCyJY8H34H5+IPTmDVS/LZ9HwlI4+7GfMlWUSVJjAMIhrigAmvvhpQ==";
    </script>
    
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
    