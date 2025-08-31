<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube SEO System - Complete Deployment Guide</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <style>
        .code-block {
            background: #1a202c;
            color: #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            margin: 16px 0;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            position: relative;
        }
        .copy-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            background: #4a5568;
            border: none;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        }
        .copy-btn:hover {
            background: #2d3748;
        }
        .step-card {
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            margin: 16px 0;
            transition: all 0.3s ease;
        }
        .step-card:hover {
            border-color: #4299e1;
            box-shadow: 0 8px 25px rgba(66, 153, 225, 0.2);
        }
        .completed {
            border-color: #48bb78;
            background: #f0fff4;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    </style>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="gradient-bg text-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold mb-4">
                <i class="fas fa-rocket mr-4"></i>
                YouTube SEO System Deployment
            </h1>
            <p class="text-xl opacity-90">Complete automation package for immediate deployment</p>
        </div>
    </div>

    <div class="container mx-auto px-4 py-8 max-w-4xl">
        
        <!-- Progress Tracker -->
        <div class="bg-white rounded-lg p-6 shadow-lg mb-8">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">
                <i class="fas fa-tasks mr-2 text-blue-600"></i>
                Deployment Progress
            </h2>
            <div class="grid md:grid-cols-3 gap-4">
                <div class="text-center">
                    <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <i class="fas fa-check"></i>
                    </div>
                    <p class="font-semibold">Files Ready</p>
                </div>
                <div class="text-center">
                    <div class="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center mx-auto mb-2" id="api-progress">
                        <i class="fas fa-key"></i>
                    </div>
                    <p class="font-semibold">API Setup</p>
                </div>
                <div class="text-center">
                    <div class="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center mx-auto mb-2" id="deploy-progress">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <p class="font-semibold">Deploy Live</p>
                </div>
            </div>
        </div>

        <!-- Step 1: API Keys Setup -->
        <div class="step-card" id="step1">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
                <span class="bg-red-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">1</span>
                Get Your API Keys
            </h3>
            
            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-blue-600">
                    <i class="fas fa-brain mr-2"></i>
                    OpenAI API Key (Required)
                </h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                    <li>Go to <a href="https://platform.openai.com/api-keys" class="text-blue-600 underline" target="_blank">OpenAI API Keys</a></li>
                    <li>Click "Create new secret key"</li>
                    <li>Name it "YouTube SEO System"</li>
                    <li>Copy the key (starts with sk-...)</li>
                </ol>
                <div class="bg-yellow-50 border border-yellow-200 rounded p-4">
                    <p class="text-yellow-800">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        <strong>Cost:</strong> ~$0.01-0.05 per SEO optimization. Budget $10-50/month for regular use.
                    </p>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-red-600">
                    <i class="fab fa-youtube mr-2"></i>
                    YouTube Data API (Optional but Recommended)
                </h4>
                <ol class="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                    <li>Go to <a href="https://console.cloud.google.com/" class="text-blue-600 underline" target="_blank">Google Cloud Console</a></li>
                    <li>Create new project or select existing</li>
                    <li>Enable "YouTube Data API v3"</li>
                    <li>Create credentials → API Key</li>
                    <li>Copy the API key</li>
                </ol>
                <div class="bg-green-50 border border-green-200 rounded p-4">
                    <p class="text-green-800">
                        <i class="fas fa-info-circle mr-2"></i>
                        <strong>Free:</strong> 10,000 quota units daily (≈100 video metadata requests)
                    </p>
                </div>
            </div>

            <button onclick="completeStep(1)" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-check mr-2"></i>
                I have my API keys
            </button>
        </div>

        <!-- Step 2: Environment Configuration -->
        <div class="step-card" id="step2">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
                <span class="bg-blue-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">2</span>
                Environment Configuration
            </h3>
            
            <p class="text-gray-700 mb-4">Create a <code>.env</code> file with your API keys:</p>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this, 'env-config')">Copy</button>
                <pre id="env-config"># YouTube SEO System Configuration
OPENAI_API_KEY=sk-your-openai-key-here
YOUTUBE_API_KEY=your-youtube-api-key-here
PORT=3000
NODE_ENV=production

# Security
JWT_SECRET=your-random-jwt-secret-here
SESSION_SECRET=your-random-session-secret-here

# CORS Configuration
FRONTEND_URL=https://www.affiliaxa.com
BACKEND_URL=https://your-backend-domain.herokuapp.com

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100</pre>
            </div>

            <div class="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                <h4 class="font-bold text-blue-800 mb-2">Generate Random Secrets:</h4>
                <button onclick="generateSecrets()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    <i class="fas fa-random mr-2"></i>
                    Generate JWT & Session Secrets
                </button>
                <div id="generated-secrets" class="mt-4 hidden">
                    <div class="code-block">
                        <pre id="secrets-output"></pre>
                    </div>
                </div>
            </div>

            <button onclick="completeStep(2)" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-check mr-2"></i>
                Environment configured
            </button>
        </div>

        <!-- Step 3: Heroku Deployment -->
        <div class="step-card" id="step3">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
                <span class="bg-purple-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">3</span>
                Deploy Backend to Heroku
            </h3>
            
            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-purple-600">
                    <i class="fas fa-cloud-upload-alt mr-2"></i>
                    One-Click Heroku Setup
                </h4>
                
                <p class="text-gray-700 mb-4">First, create these files in your project directory:</p>
                
                <div class="mb-4">
                    <h5 class="font-bold mb-2">Procfile:</h5>
                    <div class="code-block">
                        <button class="copy-btn" onclick="copyCode(this, 'procfile')">Copy</button>
                        <pre id="procfile">web: node server.js</pre>
                    </div>
                </div>

                <div class="mb-4">
                    <h5 class="font-bold mb-2">Heroku deployment commands:</h5>
                    <div class="code-block">
                        <button class="copy-btn" onclick="copyCode(this, 'heroku-commands')">Copy</button>
                        <pre id="heroku-commands"># Install Heroku CLI first: https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create new Heroku app
heroku create youtube-seo-backend

# Set environment variables
heroku config:set OPENAI_API_KEY=sk-your-key-here
heroku config:set YOUTUBE_API_KEY=your-youtube-key-here
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-generated-jwt-secret
heroku config:set SESSION_SECRET=your-generated-session-secret
heroku config:set FRONTEND_URL=https://www.affiliaxa.com

# Deploy
git init
git add .
git commit -m "Initial deployment"
heroku git:remote -a youtube-seo-backend
git push heroku main</pre>
                    </div>
                </div>

                <div class="bg-green-50 border border-green-200 rounded p-4">
                    <p class="text-green-800">
                        <i class="fas fa-dollar-sign mr-2"></i>
                        <strong>Heroku Free Tier:</strong> Perfect for testing. Upgrade to Hobby ($7/month) for production.
                    </p>
                </div>
            </div>

            <button onclick="completeStep(3)" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-check mr-2"></i>
                Backend deployed
            </button>
        </div>

        <!-- Step 4: Frontend Configuration -->
        <div class="step-card" id="step4">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
                <span class="bg-indigo-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">4</span>
                Configure Frontend for Affiliaxa.com
            </h3>
            
            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-indigo-600">
                    <i class="fas fa-code mr-2"></i>
                    Update API Endpoint
                </h4>
                
                <p class="text-gray-700 mb-4">In your <code>index.html</code> file, update the API_BASE_URL:</p>
                
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this, 'api-config')">Copy</button>
                    <pre id="api-config">// Replace this line in index.html
const API_BASE_URL = 'https://your-heroku-app-name.herokuapp.com';

// Example:
const API_BASE_URL = 'https://youtube-seo-backend.herokuapp.com';</pre>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-indigo-600">
                    <i class="fas fa-upload mr-2"></i>
                    Upload to Affiliaxa.com
                </h4>
                
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Access your affiliaxa.com hosting control panel</li>
                    <li>Navigate to the subdomain or directory for YouTubeSEOFree</li>
                    <li>Upload the updated <code>index.html</code> file</li>
                    <li>Set up redirect from affiliaxa.com/youtube-seo → YouTubeSEOFree page</li>
                </ol>
            </div>

            <button onclick="completeStep(4)" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-check mr-2"></i>
                Frontend configured
            </button>
        </div>

        <!-- Step 5: SSL & Security -->
        <div class="step-card" id="step5">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
                <span class="bg-green-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">5</span>
                SSL & Security Setup
            </h3>
            
            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-green-600">
                    <i class="fas fa-shield-alt mr-2"></i>
                    Automatic SSL Configuration
                </h4>
                
                <div class="bg-green-50 border border-green-200 rounded p-4 mb-4">
                    <p class="text-green-800">
                        <i class="fas fa-check-circle mr-2"></i>
                        <strong>Good news:</strong> Heroku provides automatic SSL for .herokuapp.com domains!
                    </p>
                </div>

                <p class="text-gray-700 mb-4">For your affiliaxa.com domain:</p>
                
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Enable SSL in your hosting control panel</li>
                    <li>Force HTTPS redirects</li>
                    <li>Update any HTTP references to HTTPS</li>
                    <li>Test the complete flow: affiliaxa.com → backend → results</li>
                </ol>
            </div>

            <button onclick="completeStep(5)" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-check mr-2"></i>
                Security configured
            </button>
        </div>

        <!-- Step 6: Testing & Monitoring -->
        <div class="step-card" id="step6">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
                <span class="bg-yellow-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">6</span>
                Testing & Monitoring Setup
            </h3>
            
            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-yellow-600">
                    <i class="fas fa-vial mr-2"></i>
                    Test Complete System
                </h4>
                
                <div class="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
                    <h5 class="font-bold text-yellow-800 mb-2">Test Checklist:</h5>
                    <div class="space-y-2">
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2"> Video download links work
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2"> Transcript extraction functions
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2"> SEO optimization generates results
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2"> Lead form captures correctly
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2"> Mobile responsiveness works
                        </label>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-yellow-600">
                    <i class="fas fa-chart-line mr-2"></i>
                    Monitoring Commands
                </h4>
                
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this, 'monitoring')">Copy</button>
                    <pre id="monitoring"># View Heroku logs
heroku logs --tail

# Check app status
heroku ps

# View metrics
heroku open --app youtube-seo-backend

# Monitor performance
heroku addons:create newrelic:wayne  # Free monitoring</pre>
                </div>
            </div>

            <button onclick="completeStep(6)" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-check mr-2"></i>
                System tested & monitored
            </button>
        </div>

        <!-- Step 7: Daily Updates -->
        <div class="step-card" id="step7">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
                <span class="bg-gray-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">7</span>
                Daily Update Workflow
            </h3>
            
            <div class="mb-6">
                <h4 class="text-lg font-bold mb-2 text-gray-600">
                    <i class="fas fa-sync-alt mr-2"></i>
                    Easy Update Process
                </h4>
                
                <div class="code-block">
                    <button class="copy-btn" onclick="copyCode(this, 'update-workflow')">Copy</button>
                    <pre id="update-workflow"># Daily update workflow
# 1. Make changes to server.js or index.html
# 2. Test locally (optional)
# 3. Deploy changes

git add .
git commit -m "Daily update: improved SEO prompts"
git push heroku main

# Check deployment
heroku logs --tail</pre>
                </div>
                
                <div class="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                    <h5 class="font-bold text-blue-800 mb-2">What to Update Daily:</h5>
                    <ul class="list-disc list-inside space-y-1 text-blue-700">
                        <li>Improve AI prompts for better SEO results</li>
                        <li>Add new Hormozi psychology patterns</li>
                        <li>Update trending keywords and phrases</li>
                        <li>Enhance error handling and user experience</li>
                        <li>Add new transcript extraction methods</li>
                    </ul>
                </div>
            </div>

            <button onclick="completeStep(7)" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                <i class="fas fa-check mr-2"></i>
                Update workflow ready
            </button>
        </div>

        <!-- Final Status -->
        <div class="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
            <h2 class="text-2xl font-bold text-green-800 mb-4">
                <i class="fas fa-rocket mr-2"></i>
                System Deployment Complete!
            </h2>
            <p class="text-green-700 mb-4">
                Your YouTube SEO system is now live and ready to provide real value to visitors!
            </p>
            <div class="flex justify-center space-x-4">
                <a href="https://www.affiliaxa.com" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition" target="_blank">
                    <i class="fas fa-external-link-alt mr-2"></i>
                    Visit Your Site
                </a>
                <button onclick="downloadLogs()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    <i class="fas fa-download mr-2"></i>
                    Download Setup Log
                </button>
            </div>
        </div>
    </div>

    <script>
        let completedSteps = 0;
        const totalSteps = 7;

        function completeStep(stepNumber) {
            const stepCard = document.getElementById(`step${stepNumber}`);
            stepCard.classList.add('completed');
            
            const stepButton = stepCard.querySelector('button');
            stepButton.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Completed!';
            stepButton.disabled = true;
            stepButton.classList.remove('bg-green-500', 'hover:bg-green-600');
            stepButton.classList.add('bg-gray-400');

            completedSteps++;
            updateProgress();
            
            if (completedSteps === totalSteps) {
                showCompletionMessage();
            }
        }

        function updateProgress() {
            if (completedSteps >= 2) {
                document.getElementById('api-progress').classList.remove('bg-gray-300');
                document.getElementById('api-progress').classList.add('bg-green-500');
            }
            if (completedSteps >= 5) {
                document.getElementById('deploy-progress').classList.remove('bg-gray-300');
                document.getElementById('deploy-progress').classList.add('bg-green-500');
            }
        }

        function copyCode(button, elementId) {
            const code = document.getElementById(elementId).textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                button.style.background = '#48bb78';
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.style.background = '#4a5568';
                }, 2000);
            });
        }

        function generateSecrets() {
            const jwtSecret = generateRandomString(64);
            const sessionSecret = generateRandomString(64);
            
            const output = `JWT_SECRET=${jwtSecret}
SESSION_SECRET=${sessionSecret}`;
            
            document.getElementById('secrets-output').textContent = output;
            document.getElementById('generated-secrets').classList.remove('hidden');
        }

        function generateRandomString(length) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }

        function showCompletionMessage() {
            const message = document.createElement('div');
            message.className = 'fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50';
            message.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle mr-2"></i>
                    <span>Deployment Complete! 🎉</span>
                </div>
            `;
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 5000);
        }

        function downloadLogs() {
            const logContent = `YouTube SEO System Deployment Log
Generated: ${new Date().toISOString()}

Deployment Status: Complete
Steps Completed: ${completedSteps}/${totalSteps}
Backend URL: https://youtube-seo-backend.herokuapp.com
Frontend URL: https://www.affiliaxa.com

Configuration:
- OpenAI API: Configured
- YouTube API: Configured  
- SSL: Enabled
- Monitoring: Active

Next Steps:
1. Test complete system functionality
2. Monitor usage and performance
3. Implement daily improvements
4. Scale based on traffic

Support: Continue working with AI assistant for improvements
`;

            const blob = new Blob([logContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'youtube-seo-deployment-log.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Auto-scroll to next incomplete step
        function scrollToNextStep() {
            const nextStep = document.querySelector('.step-card:not(.completed)');
            if (nextStep) {
                nextStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            console.log('YouTube SEO Deployment Guide Loaded');
            
            // Add click handlers for step completion
            document.querySelectorAll('.step-card').forEach((card, index) => {
                card.addEventListener('click', () => {
                    if (!card.classList.contains('completed')) {
                        scrollToNextStep();
                    }
                });
            });
        });
    </script>
</body>
</html>
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDtpI3hmK0c3mZFvUAlUCtp%2FU5ztvUeDdnHV%2FEzY%2F%2Ft8FSocPMIVczYcTUfyTE7OYCRC5viqDKhG52L7EM15KZlQPdHrnlu%2BtG3SX9kw9ExKk3yIe4ossPh8R6JcugE7o4YAr9wGxoYavSy0ntTL7D8CBiILqV06mIsmfElqcHxfWy80Yh1%2BuNyfDCOtOQW8dOmy4JM7CK4hOB%2FD2X0y05mi%2FFcPFEvhQPRrwDK%2FQBjxgzI9Cs8oKZGnM1%2FVTHq5ThX6N0zgwnQez2%2BCNd7ZWWFWDRPa6tk76KyC7xl8DwFmBdHzQrIra%2BvyqiKCrsiMN6SB4fT%2BE2Ivz3ttOxdZ4Fe2pxuJWwg3Knb0L93Eg7o4K57mGEd2qeivdz8kAqmkVxhWQ7eBg79xwjx2Fgj%2BPQRBG%2BMNQVxsBl52gPVdpBi895UevNljhua9dfGFJHWc5UjPyvoHCKuXtHS1x5n1Qa3fp1H248cqY7eJv3vCfYWdAuVORAP4ke0%2BY%2FF%2F3i4mhng%3D%3D";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDtpI3hmK0c3mZFvUAlUCtp/U5ztvUeDdnHV/EzY//t8FSocPMIVczYcTUfyTE7OYCRC5viqDKhG52L7EM15KZlQPdHrnlu+tG3SX9kw9ExKk3yIe4ossPh8R6JcugE7o4YAr9wGxoYavSy0ntTL7D8CBiILqV06mIsmfElqcHxfWy80Yh1+uNyfDCOtOQW8dOmy4JM7CK4hOB/D2X0y05mi/FcPFEvhQPRrwDK/QBjxgzI9Cs8oKZGnM1/VTHq5ThX6N0zgwnQez2+CNd7ZWWFWDRPa6tk76KyC7xl8DwFmBdHzQrIra+vyqiKCrsiMN6SB4fT+E2Ivz3ttOxdZ4Fe2pxuJWwg3Knb0L93Eg7o4K57mGEd2qeivdz8kAqmkVxhWQ7eBg79xwjx2Fgj+PQRBG+MNQVxsBl52gPVdpBi895UevNljhua9dfGFJHWc5UjPyvoHCKuXtHS1x5n1Qa3fp1H248cqY7eJv3vCfYWdAuVORAP4ke0+Y/F/3i4mhng==";
    </script>
    
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
    