# Quick Setup Guide

## Installation Steps

1. **Navigate to the website folder:**
```bash
cd /Users/divyansh/Desktop/legit-farape/farape-website
```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. **Open in browser:**
Navigate to [http://localhost:3001](http://localhost:3001)

## What's Included

### Pages & Sections
- **Home (Hero)**: Eye-catching hero with animated background, key stats, and CTAs
- **About**: Comprehensive game description, how it works, and key features
- **Tokenomics**: Token distribution, pie chart visualization, and 9 token utilities

### Design Features
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Animated particle background
- Custom gradient color scheme (Yellow/Gold + Jungle Green)
- Professional card-based layouts
- Hover effects and transitions
- Custom scrollbar
- Loading animations

### Components
- `Navbar.tsx` - Fixed navigation with smooth scroll
- `Hero.tsx` - Hero section with animated canvas background
- `About.tsx` - Game info and features grid
- `Tokenomics.tsx` - Distribution chart and utilities
- `Footer.tsx` - Footer with social links

## Customization

### Colors
Edit `tailwind.config.ts`:
- Primary colors (yellow/gold)
- Jungle colors (green)
- Background gradients

### Content
Update these files:
- `components/Hero.tsx` - Hero content and stats
- `components/About.tsx` - Game description
- `components/Tokenomics.tsx` - Token info
- `components/Footer.tsx` - Links and social

### Images/Assets
Place assets in `/public/` folder and reference them in components

## Build for Production

```bash
npm run build
npm start
```

## About Apex Runner

Apex Runner is a fast-paced arcade game where players climb an endless tree, dodging branches and collecting bananas. Built on Base network with full Web3 integration.

## Token Details Summary

**Total Supply**: 100,000,000,000 (100 Billion)

**Distribution:**
- 50% Liquidity Pool
- 25% DAO Treasury
- 10% Player Rewards
- 10% Team (Vested 3 years)
- 5% Airdrop

**Token Utilities:**
1. Staking Tokens
2. NFT Burn to Earn
3. Powerups & Health Bars
4. Cosmetics & Skins
5. Badges & Achievements
6. Season Pass
7. Daily Raffle
8. Tournament Entry
9. Weekly Bonuses (NFT Holders)

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Canvas API (for particle effects)

Enjoy your new Apex Runner token website!
