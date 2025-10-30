# Deployment Checklist

## Initial Git Setup

- [ ] Initialize Git repository
  ```bash
  git init
  ```

- [ ] Create GitHub repository at https://github.com/new

- [ ] Add remote origin
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
  ```

- [ ] Stage and commit files
  ```bash
  git add .
  git commit -m "Initial Kong prototype framework setup"
  ```

- [ ] Push to GitHub
  ```bash
  git branch -M main
  git push -u origin main
  ```

## Vercel Setup (First Time)

- [ ] Go to https://vercel.com/signup
- [ ] Sign in with GitHub
- [ ] Click "Add New Project"
- [ ] Import your repository
- [ ] Vercel auto-detects settings from `vercel.json`
- [ ] Click "Deploy"
- [ ] Wait for deployment (usually ~1 minute)
- [ ] Get your production URL: `https://YOUR_PROJECT.vercel.app`

## Creating New Prototype Branches

- [ ] Create a new branch for your prototype
  ```bash
  git checkout -b prototype/FEATURE_NAME
  ```

- [ ] Make your changes (create pages, components, etc.)

- [ ] Test locally
  ```bash
  npm run dev
  ```

- [ ] Commit your changes
  ```bash
  git add .
  git commit -m "Add FEATURE_NAME prototype"
  ```

- [ ] Push the branch
  ```bash
  git push origin prototype/FEATURE_NAME
  ```

- [ ] Vercel automatically creates a preview deployment
- [ ] Check your email or Vercel dashboard for the preview URL
- [ ] Preview URL format: `https://PROJECT-git-prototype-FEATURE-NAME-USER.vercel.app`

## Sharing Your Prototype

- [ ] Get the Vercel preview URL from:
  - Vercel dashboard: https://vercel.com/dashboard
  - Email notification from Vercel
  - GitHub PR comment (if you created a PR)

- [ ] Share the URL with stakeholders

- [ ] Optional: Create a GitHub PR for feedback
  ```bash
  # On GitHub, create PR from your branch to main
  ```

## Updating an Existing Prototype

- [ ] Switch to your prototype branch
  ```bash
  git checkout prototype/FEATURE_NAME
  ```

- [ ] Make changes

- [ ] Commit and push
  ```bash
  git add .
  git commit -m "Update FEATURE_NAME: [description]"
  git push origin prototype/FEATURE_NAME
  ```

- [ ] Vercel automatically redeploys the preview
- [ ] Same preview URL is updated with new changes

## Deploying to Production

When your prototype is approved and ready for production:

- [ ] Merge your branch into main
  ```bash
  git checkout main
  git pull origin main
  git merge prototype/FEATURE_NAME
  git push origin main
  ```

- [ ] Vercel automatically deploys to production
- [ ] Production URL: `https://YOUR_PROJECT.vercel.app`

## Alternative: Deploy from Branch

If you want to deploy a specific branch to production without merging:

- [ ] Go to Vercel dashboard
- [ ] Select your project
- [ ] Go to Settings → Git
- [ ] Change "Production Branch" to your branch name
- [ ] Trigger a new deployment

## Vercel CLI (Advanced)

Install Vercel CLI for terminal-based deployments:

```bash
npm install -g vercel
```

- [ ] Login to Vercel
  ```bash
  vercel login
  ```

- [ ] Deploy current directory to production
  ```bash
  vercel --prod
  ```

- [ ] Deploy to preview
  ```bash
  vercel
  ```

## Custom Domain (Optional)

- [ ] Go to Vercel project dashboard
- [ ] Click "Domains"
- [ ] Add your custom domain
- [ ] Follow DNS configuration instructions
- [ ] Wait for DNS propagation (can take up to 48 hours)

## Environment Variables (If Needed)

If your prototype needs API keys or environment variables:

- [ ] Go to Vercel project dashboard
- [ ] Click "Settings" → "Environment Variables"
- [ ] Add your variables
- [ ] Redeploy to apply changes

## Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

### 404 on Routes
- Ensure `vercel.json` has rewrite rules
- Check that view files are in `/src/views`
- Verify router configuration

### Styles Not Loading
- Check that `@kong/kongponents/dist/style.css` is imported in `main.js`
- Verify PostCSS config exists

### Slow Initial Load
- This is normal for first visit (cold start)
- Subsequent visits are faster
- Consider upgrading Vercel plan for faster performance

## Best Practices

✅ **DO:**
- Create separate branches for different prototypes
- Use descriptive branch names: `prototype/dashboard-v2`
- Commit frequently with clear messages
- Test locally before pushing
- Share preview URLs with stakeholders

❌ **DON'T:**
- Don't commit `node_modules` (already in `.gitignore`)
- Don't push directly to main during prototyping
- Don't use production for experiments
- Don't forget to pull latest changes before creating new branches

## Quick Reference

```bash
# Create new prototype branch
git checkout -b prototype/NEW_FEATURE

# Make changes, then commit
git add .
git commit -m "Add NEW_FEATURE"
git push origin prototype/NEW_FEATURE

# Switch between prototypes
git checkout prototype/FEATURE_A
git checkout prototype/FEATURE_B

# Update from main
git checkout main
git pull origin main
git checkout prototype/YOUR_FEATURE
git merge main

# Delete old prototype branch
git branch -d prototype/OLD_FEATURE
git push origin --delete prototype/OLD_FEATURE
```

---

Need help? Check Vercel's documentation: https://vercel.com/docs
