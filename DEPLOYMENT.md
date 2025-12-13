# Deploying Your Portfolio to Vercel

Follow these steps to deploy your Next.js portfolio to Vercel:

## Prerequisites
- A GitHub account
- A Vercel account (sign up at https://vercel.com with your GitHub account)

## Step 1: Initialize Git Repository

First, let's initialize a Git repository and commit your code:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "portfolio" or "my-portfolio")
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 3: Push to GitHub

After creating the repository, run these commands (replace with your repository URL):

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? (press enter for default)
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

## Step 5: Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Important Notes

✅ **Environment Variables**: If you add any API keys or secrets later, add them in Vercel Dashboard → Settings → Environment Variables

✅ **Automatic Deployments**: Every time you push to GitHub, Vercel will automatically redeploy your site

✅ **Build Settings**: Vercel automatically detects Next.js settings:
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Test locally with `npm run build` first

### Images Not Loading
- Make sure all images are in the `public` folder
- Use relative paths starting with `/` (e.g., `/images/photo.jpg`)

### 404 Errors
- Ensure all routes are properly configured
- Check that file names match exactly (case-sensitive)

## Your Portfolio URLs

After deployment, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URLs**: Generated for each git branch/PR

## Next Steps After Deployment

1. Share your portfolio URL on LinkedIn, resume, etc.
2. Set up analytics (Vercel Analytics is built-in)
3. Monitor performance with Vercel Speed Insights
4. Keep updating your projects and skills

---

**Need Help?** 
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
