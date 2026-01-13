# Railway Deployment Guide

## Prerequisites
- Railway account (sign up at https://railway.app)
- GitHub repository: https://github.com/ashwin24121995/play-by-stats-gaming

## Deployment Steps

### 1. Create New Project on Railway

1. Go to https://railway.app/dashboard
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose: `ashwin24121995/play-by-stats-gaming`
5. Railway will automatically detect the Node.js project

### 2. Add MySQL Database (Optional - Currently Not Used)

If you want to enable the database features in the future:

1. In your Railway project, click **"New"** → **"Database"** → **"Add MySQL"**
2. Railway will create a MySQL instance and provide connection details
3. Add environment variable: `DATABASE_URL` (automatically provided by Railway)

### 3. Configure Environment Variables

Click on your service → **"Variables"** tab → Add these:

**Required:**
```
NODE_ENV=production
PORT=3000
```

**Optional (if using database):**
```
DATABASE_URL=(automatically set by Railway if you added MySQL)
```

**Manus-specific (can be removed or left empty):**
```
OAUTH_SERVER_URL=
JWT_SECRET=your-random-secret-key-here
```

### 4. Deploy

Railway will automatically:
- Install dependencies (`pnpm install`)
- Build the project (`pnpm build`)
- Start the server (`pnpm start`)

### 5. Get Your URL

After deployment completes:
1. Go to **"Settings"** tab
2. Scroll to **"Domains"**
3. Click **"Generate Domain"**
4. Your app will be live at: `https://your-app-name.up.railway.app`

## Custom Domain (Optional)

1. In Railway dashboard → **"Settings"** → **"Domains"**
2. Click **"Custom Domain"**
3. Enter your domain (e.g., `playbystats.com`)
4. Add the CNAME record to your DNS provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: (provided by Railway)

## Troubleshooting

### Build Fails
- Check build logs in Railway dashboard
- Ensure `package.json` has correct scripts
- Verify Node.js version compatibility

### App Crashes
- Check deployment logs
- Verify environment variables are set
- Ensure PORT is set to 3000

### Database Connection Issues
- Verify `DATABASE_URL` is set
- Check MySQL service is running
- Review connection logs

## Important Notes

1. **Current Status**: The app currently works WITHOUT a database (uses localStorage in browser)
2. **Database**: Optional - only needed if you want centralized player data
3. **Cost**: Railway offers free tier with limitations, paid plans for production use
4. **Monitoring**: Check Railway dashboard for logs and metrics

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- GitHub Issues: https://github.com/ashwin24121995/play-by-stats-gaming/issues
