# NFT Minting dApp

A decentralized application for minting and viewing NFTs bfrontendlt with React, Vite, and ReoWN AppKit.

## Tech Stack

- React + Vite
- ReoWN AppKit for Web3 interactions
- Wagmi for contract interactions
- TailwindCSS + shadcn/frontend for styling
- Hardhat for smart contract development
- ethers.js for blockchain interactions
- Formik + Yup for form handling inputs

## Prereqfrontendsites

- Node.js (v16+)
- MetaMask wallet
- Alchemy API key
- Etherscan API key
- Private key

## Directories

- frontend
- backend

## Installation

### frontend

1. Switch to frontend:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start frontend

```bash
npm run dev
```

4. Start frontend

```bash
# Start development server
npm run dev

# Bfrontendld for production
npm run bfrontendld

# Preview production bfrontendld
npm run preview


```

### backend

1. Switch to backend:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory:

```env
PRIVATE_KEY=
ALCHEMY_API_KEY=
ETHERSCAN_API_KEY=
```

4. Read Readme.md

```bash
npx hardhat compile
```

## Features

- Wallet connection using ReoWN AppKit
- NFT minting functionality
- View owned NFTs
- Error handling and loading states
- Responsive frontend with shadcn/frontend components

## Smart Contract

The NFT contract is deployed on Sepolia testnet and includes:

- ERC721 standard implementation
- URI storage for metadata
- Enumerable extension for token tracking
- Ownable for access control

## Frontend Components

### MintForm

- URI input field
- Form validation
- Minting status feedback
- Error handling

### NFTGallery

- Display owned NFTs
- Token ID and URI information
- Loading states
- Error handling
