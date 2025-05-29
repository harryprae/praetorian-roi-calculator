# Praetorian ROI Calculator

A modern, interactive ROI calculator that helps security leaders quantify the financial impact of consolidating their security stack with Praetorian's unified offensive security platform.

## Features

- **Interactive Configuration**: Adjust company size and analysis timeframe
- **Research-Based Pricing**: Pricing estimates based on Gartner Peer Insights, G2 reviews, and vendor research
- **Real-Time Calculations**: Instant ROI calculations and savings projections
- **Professional Design**: Modern UI matching Praetorian's brand identity
- **Responsive Layout**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/praetorian-roi-calculator.git
cd praetorian-roi-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy your application

### Manual Deployment

```bash
npm run build
npm run start
```

## Project Structure

```
praetorian-roi-calculator/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── ROICalculator.tsx
├── public/
│   └── favicon.ico
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## Pricing Data Sources

The calculator uses research-based pricing estimates from:

- **Gartner Peer Insights** - Enterprise security solution reviews
- **G2 Reviews** - User-generated pricing data
- **Reddit Cybersecurity** - Community discussions on actual costs
- **Vendor Websites** - Official pricing guides and case studies

### Security Solution Categories

1. **Attack Surface Management** ($50K-800K+)
   - Microsoft Defender EASM, Censys, RiskIQ
   
2. **Continuous Pen Testing** ($120K-1.2M+)
   - Cobalt, Synack, Bugcrowd, HackerOne
   
3. **Breach & Attack Simulation** ($80K-750K+)
   - AttackIQ, SafeBreach, Cymulate
   
4. **Vulnerability Management** ($60K-600K+)
   - Tenable, Qualys, Rapid7
   
5. **Annual Pen Testing** ($35K-300K+)
   - Traditional external/internal penetration tests

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this ROI calculator or Praetorian's security services:

- **Website**: [praetorian.com](https://www.praetorian.com)
- **Email**: contact@praetorian.com

---

Built with ❤️ for the cybersecurity community