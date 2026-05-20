import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  MessageSquare,
  Map,
  BookOpen,
  Building2,
  TrendingUp,
  Users,
  Smartphone,
  Settings,
  WifiOff,
  Shield,
  Download,
  Menu,
  X
} from "lucide-react";
import { useState, createContext, useContext } from "react";
import { useTranslation } from "../../utils/translations";
import { Toaster } from "./ui/sonner";

// Accessibility Context
interface AccessibilityContextType {
  highContrast: boolean;
  textToSpeech: boolean;
  simplifiedLanguage: boolean;
  language: 'en' | 'fil';
  toggleHighContrast: () => void;
  toggleTextToSpeech: () => void;
  toggleSimplifiedLanguage: () => void;
  setLanguage: (lang: 'en' | 'fil') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  highContrast: false,
  textToSpeech: false,
  simplifiedLanguage: false,
  language: 'en',
  toggleHighContrast: () => {},
  toggleTextToSpeech: () => {},
  toggleSimplifiedLanguage: () => {},
  setLanguage: () => {},
});

export const useAccessibility = () => useContext(AccessibilityContext);

const navItems = [
  { path: "/", icon: LayoutDashboard, labelKey: "dashboard" as const },
  { path: "/chatbot", icon: MessageSquare, labelKey: "aiChatbot" as const },
  { path: "/map", icon: Map, labelKey: "connectivityMap" as const },
  { path: "/learning", icon: BookOpen, labelKey: "learningHub" as const },
  { path: "/interventions", icon: Building2, labelKey: "interventions" as const },
  { path: "/impact", icon: TrendingUp, labelKey: "impact" as const },
  { path: "/inclusion", icon: Users, labelKey: "inclusion" as const },
  { path: "/devices", icon: Smartphone, labelKey: "devices" as const },
  { path: "/admin", icon: Shield, labelKey: "admin" as const },
  { path: "/accessibility", icon: Settings, labelKey: "accessibility" as const },
  { path: "/offline", icon: WifiOff, labelKey: "offlineMode" as const },
];

export function Layout() {
  const location = useLocation();
  const [highContrast, setHighContrast] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [simplifiedLanguage, setSimplifiedLanguage] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fil'>('en');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const t = useTranslation(language);

  const accessibilityValue: AccessibilityContextType = {
    highContrast,
    textToSpeech,
    simplifiedLanguage,
    language,
    toggleHighContrast: () => setHighContrast(!highContrast),
    toggleTextToSpeech: () => setTextToSpeech(!textToSpeech),
    toggleSimplifiedLanguage: () => setSimplifiedLanguage(!simplifiedLanguage),
    setLanguage: (lang: 'en' | 'fil') => setLanguage(lang),
  };

  return (
    <AccessibilityContext.Provider value={accessibilityValue}>
      <div className={`flex h-screen bg-gray-50 ${highContrast ? 'high-contrast' : ''}`}>
        <Toaster position="top-right" richColors />

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:relative inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">{t.appTitle}</h1>
              <p className="text-sm text-gray-600 mt-1">{t.appSubtitle}</p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{t.nav[item.labelKey]}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Download Button */}
          <div className="p-4">
            <button
              onClick={() => {
                // Trigger app download (PWA install or file download)
                alert(language === 'en'
                  ? 'Download functionality will be implemented based on your deployment strategy (PWA, APK, etc.)'
                  : 'Ang functionality ng pag-download ay ipapatupad batay sa iyong estratehiya sa deployment (PWA, APK, atbp.)'
                );
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-sm hover:shadow-md"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">{t.downloadApp}</span>
            </button>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center whitespace-pre-line">
              {t.copyright}
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-bold text-blue-600">{t.appTitle}</h1>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>

          <Outlet />
        </main>
      </div>
    </AccessibilityContext.Provider>
  );
}
