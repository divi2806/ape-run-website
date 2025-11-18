# Ape Run Token Website

A professional marketing website for the Ape Run token launch, featuring a gamified jungle/ape theme.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Gamified Theme**: Jungle/ape aesthetic matching the game
- **Three Main Sections**:
  - Home: Hero section with key stats
  - About: Game description and features
  - Tokenomics: Token distribution and utilities

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server (on port 3001)
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build

```bash
# Create production build
npm run build
# or
yarn build
# or
pnpm build
```

### Production

```bash
# Run production server
npm start
# or
yarn start
# or
pnpm start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Project Structure

```
farape-website/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Tokenomics.tsx    # Tokenomics section
│   └── Footer.tsx        # Footer
├── public/               # Static assets
└── package.json
```

## Customization

### Colors

Edit the Tailwind config in `tailwind.config.ts` to customize the color palette:

- Primary colors (yellow/gold tones)
- Jungle colors (green tones)
- Background gradients

### Content

Update the following files to modify content:

- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - Game description and features
- `components/Tokenomics.tsx` - Token distribution and utilities
- `components/Footer.tsx` - Footer links and social media

## Tokenomics Overview

- **Total Supply**: 100,000,000,000 (100 Billion)
- **Distribution**:
  - 50% Liquidity Pool
  - 25% DAO Treasury
  - 10% Player Rewards
  - 10% Team (Vested 3 years)
  - 5% Airdrop

## Token Utilities

1. Staking Tokens
2. NFT Burn to Earn
3. Powerups & Health Bars
4. Cosmetics & Skins
5. Badges & Achievements
6. Season Pass
7. Daily Raffle
8. Tournament Entry
9. Weekly Bonuses (NFT Holders)

## License

MIT License
