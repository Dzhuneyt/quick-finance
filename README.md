# Quick Calculators

A modern web application built with Next.js and Mantine that provides financial calculation tools for investment analysis.

## 🚀 Features

### Financial Calculators
- **Total Return to Yearly Return Calculator**: Calculate investment returns and convert total returns to annualized returns
  - Input investment start and end dates
  - Enter initial and final investment values
  - Get real-time calculations including:
    - Total investment period (years and days)
    - Total return (absolute value)
    - Total return percentage
    - Average yearly return percentage

### User Interface
- **Modern, responsive design** with Mantine UI components
- **Sidebar navigation** with collapsible sections
- **Real-time form validation** and calculations
- **Professional styling** with hover effects and proper typography

## 🛠️ Technology Stack

- **Framework**: Next.js 14.0.1
- **UI Library**: Mantine v7.4.2
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Styling**: PostCSS with Mantine's styling system
- **Icons**: Tabler Icons React
- **Date Handling**: dayjs

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mantine-minimal-next-template
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── components/
│   ├── Navigation/          # Sidebar navigation component
│   └── LinksGroup/          # Reusable navigation link groups
├── pages/
│   ├── _app.tsx            # Main app wrapper with Mantine provider
│   ├── _document.tsx       # HTML document structure
│   ├── index.tsx           # Homepage
│   └── total-return-to-yearly-return/  # Financial calculator
├── public/                 # Static assets
├── theme.ts               # Mantine theme configuration
└── package.json           # Dependencies and scripts
```

## 🧮 Usage

### Total Return to Yearly Return Calculator

1. Navigate to the calculator from the sidebar
2. Enter your investment details:
   - **Investment Start Date**: When you started your investment
   - **Investment End Date**: When you ended or want to calculate to
   - **Value at Start**: Your initial investment amount
   - **Value at End**: Your final investment value

3. View the calculated results:
   - Total investment period in years and days
   - Total return in absolute terms
   - Total return as a percentage
   - Average yearly return percentage

## 🚀 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Theme
The application uses Mantine's theming system. Customize the theme by editing `theme.ts`:

```typescript
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  // Add your theme customizations here
});
```

### Adding New Calculators
The navigation system is designed to be extensible. To add new calculators:

1. Create a new page in the `pages/` directory
2. Add the calculator to the navigation data in `components/Navigation/Navigation.tsx`
3. Follow the existing pattern for form handling and calculations

## 🔧 Development

### Prerequisites
- Node.js (version 18 or higher recommended)
- pnpm package manager

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For internal contributions, please follow the existing code patterns and ensure all tests pass before submitting changes.

---

**Built with ❤️ using Next.js and Mantine**
