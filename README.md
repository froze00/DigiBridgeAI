# DigiBridge AI+ - Digital Inclusion and Access Intelligence System

A WCAG-compliant digital inclusion platform for the Philippines, with special focus on the Caraga Region (Region XIII).

## 🌟 Features

### 📱 Mobile Responsive Design
- **Collapsible Sidebar Menu**: Fully responsive navigation that adapts to mobile, tablet, and desktop screens
- **Touch-Optimized**: Smooth touch interactions for mobile devices
- **Hamburger Menu**: Easy-to-use mobile menu with slide-in navigation
- **Responsive Layouts**: All components adapt to different screen sizes

### 🌐 Multi-Language Support
- **English & Filipino**: Complete translation coverage for the entire application
- **Dynamic Language Switching**: Change language on-the-fly from Accessibility Settings
- **Persistent Language Preference**: Language choice saved across sessions
- **Context-Aware Translations**: Smart translations that adapt to simplified language mode

### ♿ Accessibility Features (WCAG Compliant)
- **High Contrast Mode**: Enhanced visibility for users with visual impairments
- **Text-to-Speech**: Screen reader support with adjustable voice speed
- **Simplified Language Mode**: Easier comprehension with simpler words
- **Keyboard Navigation**: Full keyboard accessibility with shortcuts
- **WCAG Level AA Compliant**: Meeting international accessibility standards

### 📊 Trusted Data Sources
All datasets are sourced from official Philippine government agencies:

1. **Philippine Statistics Authority (PSA)**
   - Regional internet access statistics
   - Gender-disaggregated data
   - Urban vs rural access rates
   - Age group demographics

2. **Department of ICT (DICT)**
   - Digital literacy scores
   - Connectivity speed improvements
   - Regional comparisons

3. **National Economic Development Authority (NEDA)**
   - Device ownership statistics
   - Socioeconomic indicators

4. **National Commission on Indigenous Peoples (NCIP)**
   - Disability and digital inclusion data
   - Underserved communities data

### 🗺️ Caraga Region Focus
- **Primary Study Area**: Comprehensive data highlighting Region XIII
- **Comparative Analysis**: Caraga metrics vs national averages
- **Intervention Tracking**: Specific programs for the Caraga region
- **Geographic Challenges**: Addressing remote and island barangays

## 📂 Project Structure

```
digibridge-ai-plus/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Layout.tsx              # Main layout with responsive sidebar
│   │   │   ├── AccessibilitySettings.tsx # Language & accessibility controls
│   │   │   ├── HomeDashboard.tsx
│   │   │   ├── AIChatbot.tsx
│   │   │   ├── ConnectivityMap.tsx
│   │   │   ├── LearningHub.tsx
│   │   │   ├── InterventionManagement.tsx
│   │   │   ├── ImpactEvaluation.tsx
│   │   │   ├── InclusionAnalytics.tsx
│   │   │   ├── DeviceAccess.tsx
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── OfflineMode.tsx
│   │   │   └── ui/                    # shadcn/ui components
│   │   ├── routes.tsx                 # React Router configuration
│   │   └── App.tsx                    # Main app component
│   ├── data/
│   │   ├── *.csv                      # CSV datasets
│   │   └── DATA_SOURCES.md            # Data documentation
│   ├── utils/
│   │   ├── translations.ts            # English & Filipino translations
│   │   └── csvParser.ts               # CSV data parsing utilities
│   └── styles/
│       ├── globals.css
│       ├── theme.css
│       └── tailwind.css
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and pnpm
- Modern web browser with JavaScript enabled

### Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```

3. **Build for production**
   ```bash
   pnpm build
   ```

## 🗂️ Data Files

### CSV Data Files
All data is stored in CSV format in the `/src/data/` directory:

- `psa-regional-internet-access-2024.csv` - Regional internet access rates
- `psa-internet-access-gender-2024.csv` - Gender-disaggregated access data
- `psa-urban-rural-access-2024.csv` - Urban vs rural statistics
- `psa-age-group-internet-access-2024.csv` - Age-based access data
- `dict-digital-literacy-scores-2024.csv` - Digital literacy assessments
- `dict-connectivity-speed-improvements-2024-2026.csv` - Speed improvements
- `neda-device-ownership-2024.csv` - Device ownership statistics
- `ncip-disability-access-2024.csv` - Disability and inclusion data

### Using CSV Data in Components

```typescript
import { loadCSV, parseCSV, filterCSV } from '../utils/csvParser';

// Load CSV data
const data = await loadCSV('psa-regional-internet-access-2024.csv');

// Filter for Caraga region
const caragaData = filterCSV(data, 'is_focus_region', 1);

// Format for charts
const chartData = formatForChart(data, 'region', 'access_rate');
```

## 🌐 Language System

### Changing Language

Users can change the language in two ways:

1. **Accessibility Settings Page**
   - Navigate to Settings → Accessibility
   - Click on "Language Preference"
   - Select English or Filipino

2. **Programmatically**
   ```typescript
   import { useAccessibility } from './components/Layout';
   
   const { language, setLanguage } = useAccessibility();
   setLanguage('fil'); // Switch to Filipino
   setLanguage('en');  // Switch to English
   ```

### Adding Translations

Edit `/src/utils/translations.ts`:

```typescript
export const translations: Record<Language, Translations> = {
  en: {
    myNewKey: "English text",
    // ...
  },
  fil: {
    myNewKey: "Tekstong Filipino",
    // ...
  },
};
```

Use in components:

```typescript
import { useTranslation } from '../utils/translations';
import { useAccessibility } from './Layout';

const { language } = useAccessibility();
const t = useTranslation(language);

// In JSX
<h1>{t.myNewKey}</h1>
```

## 📱 Mobile Responsiveness

### Breakpoints
- **Mobile**: < 1024px (lg breakpoint)
- **Desktop**: ≥ 1024px

### Responsive Features
1. **Sidebar Navigation**
   - Desktop: Always visible, fixed width (256px)
   - Mobile: Hidden by default, slides in from left
   - Toggle: Hamburger menu button in header

2. **Mobile Header**
   - Only visible on mobile screens
   - Contains hamburger menu and app title
   - Sticky positioning for easy access

3. **Responsive Padding**
   - Mobile: `p-4` (16px)
   - Desktop: `p-8` (32px)

## ♿ Accessibility Features

### WCAG Compliance
- **Level A**: ✓ Passed
- **Level AA**: ✓ Passed  
- **Level AAA**: Partial

### Keyboard Shortcuts
- `Tab` - Navigate between elements
- `Enter` - Activate selected element
- `Esc` - Close modals/menus

### Screen Reader Support
- Semantic HTML elements
- ARIA labels and roles
- Alt text for images
- Descriptive link text

## 🎨 Theming

The application uses a blue and green color scheme:

- **Primary Blue**: `#3b82f6` (blue-600)
- **Primary Green**: `#10b981` (green-600)
- **Accent Colors**: Gradient from blue to green

### Color Themes
1. **Default**: Light background, standard contrast
2. **Dark**: Dark background (coming soon)
3. **High Contrast**: Maximum contrast for visibility

## 📊 Charts and Visualizations

The platform uses Recharts for data visualization:

```typescript
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Use CSV data
const chartData = formatForChart(csvData, 'region', 'access_rate');

<BarChart data={chartData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="value" fill="#3b82f6" />
</BarChart>
```

## 🔒 Data Privacy & Compliance

- **No PII**: All datasets contain aggregated data only
- **Data Privacy Act of 2012 (RA 10173)**: Compliant
- **Open Data Standards**: Following DICT guidelines
- **WCAG Accessibility**: Level AA compliant

## 📖 Documentation

- **Data Sources**: `/src/data/DATA_SOURCES.md`
- **API Reference**: Coming soon
- **Component Guide**: Coming soon

## 🤝 Contributing

Guidelines for contributing to the project:

1. Follow the existing code style
2. Add translations for new UI text
3. Ensure WCAG compliance for new features
4. Document data sources for new datasets
5. Test on mobile and desktop viewports

## 📝 License

This project is developed for the Republic of the Philippines.

© 2026 DigiBridge AI+ - Digital Inclusion and Access Intelligence System

## 🆘 Support

For questions or issues:
- Email: data@digibridge.gov.ph
- PSA: info@psa.gov.ph
- DICT: info@dict.gov.ph

---

**Built with:**
- React + TypeScript
- Tailwind CSS v4
- Vite
- shadcn/ui
- Recharts
- React Router
- Sonner (Toast notifications)

**Focus Region:** Caraga (Region XIII), Philippines
