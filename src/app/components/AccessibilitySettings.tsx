import { Eye, Volume2, FileText, Contrast } from "lucide-react";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { useAccessibility } from "./Layout";
import { useTranslation } from "../../utils/translations";
import { toast } from "sonner";

export function AccessibilitySettings() {
  const {
    highContrast,
    textToSpeech,
    simplifiedLanguage,
    language,
    toggleHighContrast,
    toggleTextToSpeech,
    toggleSimplifiedLanguage,
    setLanguage,
  } = useAccessibility();

  const t = useTranslation(language);

  const handleLanguageChange = (newLang: 'en' | 'fil') => {
    setLanguage(newLang);
    toast.success(t.messages.languageChanged);
  };

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t.accessibility.title}</h1>
        <p className="text-gray-600 mt-2">{t.accessibility.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Visual Settings */}
          <Card className="p-6 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{t.accessibility.visualSettings}</h2>
            </div>

            <div className="space-y-6">
              {/* High Contrast Mode */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Contrast className="w-5 h-5 text-gray-600" />
                    <Label htmlFor="high-contrast" className="text-base font-semibold text-gray-900">
                      {t.accessibility.highContrast}
                    </Label>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    {t.accessibility.highContrastDesc}
                  </p>
                </div>
                <Switch
                  id="high-contrast"
                  checked={highContrast}
                  onCheckedChange={toggleHighContrast}
                />
              </div>

              <div className="border-t border-gray-200 pt-6">
                <Label className="text-base font-semibold text-gray-900 mb-4 block">
                  {t.accessibility.textSize}
                </Label>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">A</span>
                  <Slider defaultValue={[100]} max={150} min={75} step={5} className="flex-1" />
                  <span className="text-lg text-gray-600">A</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Current size: <span className="font-medium">100%</span>
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <Label className="text-base font-semibold text-gray-900 mb-4 block">
                  {t.accessibility.colorThemes}
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="p-4 border-2 border-blue-600 rounded-lg bg-white hover:bg-gray-50">
                    <div className="w-full h-12 bg-white border border-gray-200 rounded mb-2"></div>
                    <p className="text-sm font-medium">{language === 'en' ? 'Default' : 'Default'}</p>
                  </button>
                  <button className="p-4 border-2 border-gray-300 rounded-lg bg-gray-900 hover:opacity-90">
                    <div className="w-full h-12 bg-gray-800 rounded mb-2"></div>
                    <p className="text-sm font-medium text-white">{language === 'en' ? 'Dark' : 'Madilim'}</p>
                  </button>
                  <button className="p-4 border-2 border-gray-300 rounded-lg bg-yellow-50 hover:bg-yellow-100">
                    <div className="w-full h-12 bg-yellow-100 border border-yellow-300 rounded mb-2"></div>
                    <p className="text-sm font-medium">{language === 'en' ? 'High Contrast' : 'Mataas na Contrast'}</p>
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Audio Settings */}
          <Card className="p-6 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{t.accessibility.audioSettings}</h2>
            </div>

            <div className="space-y-6">
              {/* Text-to-Speech */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Label htmlFor="text-to-speech" className="text-base font-semibold text-gray-900 mb-2 block">
                    {t.accessibility.textToSpeech}
                  </Label>
                  <p className="text-sm text-gray-600">
                    {t.accessibility.textToSpeechDesc}
                  </p>
                </div>
                <Switch
                  id="text-to-speech"
                  checked={textToSpeech}
                  onCheckedChange={toggleTextToSpeech}
                />
              </div>

              {textToSpeech && (
                <div className="border-t border-gray-200 pt-6">
                  <Label className="text-base font-semibold text-gray-900 mb-4 block">
                    {t.accessibility.voiceSpeed}
                  </Label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{language === 'en' ? 'Slow' : 'Mabagal'}</span>
                    <Slider defaultValue={[100]} max={200} min={50} step={10} className="flex-1" />
                    <span className="text-sm text-gray-600">{language === 'en' ? 'Fast' : 'Mabilis'}</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    {t.accessibility.testVoice}
                  </Button>
                </div>
              )}

              <div className="border-t border-gray-200 pt-6">
                <Label className="text-base font-semibold text-gray-900 mb-4 block">
                  {t.accessibility.soundEffects}
                </Label>
                <div className="flex items-start justify-between">
                  <p className="text-sm text-gray-600">
                    {t.accessibility.soundEffectsDesc}
                  </p>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </Card>

          {/* Language & Content */}
          <Card className="p-6 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{t.accessibility.languageContent}</h2>
            </div>

            <div className="space-y-6">
              {/* Simplified Language */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Label htmlFor="simplified-language" className="text-base font-semibold text-gray-900 mb-2 block">
                    {t.accessibility.simplifiedLanguage}
                  </Label>
                  <p className="text-sm text-gray-600">
                    {t.accessibility.simplifiedLanguageDesc}
                  </p>
                </div>
                <Switch
                  id="simplified-language"
                  checked={simplifiedLanguage}
                  onCheckedChange={toggleSimplifiedLanguage}
                />
              </div>

              <div className="border-t border-gray-200 pt-6">
                <Label className="text-base font-semibold text-gray-900 mb-4 block">
                  {t.accessibility.languagePreference}
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`p-3 border-2 rounded-lg text-left transition-all ${
                      language === 'en'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <p className="font-medium text-gray-900">{t.accessibility.english}</p>
                    <p className="text-xs text-gray-600">{t.accessibility.primaryLanguage}</p>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('fil')}
                    className={`p-3 border-2 rounded-lg text-left transition-all ${
                      language === 'fil'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <p className="font-medium text-gray-900">{t.accessibility.filipino}</p>
                    <p className="text-xs text-gray-600">{t.accessibility.nationalLanguage}</p>
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <Label className="text-base font-semibold text-gray-900 mb-4 block">
                  {t.accessibility.autoTranslate}
                </Label>
                <div className="flex items-start justify-between">
                  <p className="text-sm text-gray-600">
                    {t.accessibility.autoTranslateDesc}
                  </p>
                  <Switch />
                </div>
              </div>
            </div>
          </Card>

          {/* Keyboard Navigation */}
          <Card className="p-6 border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.accessibility.keyboardNavigation}</h2>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Label className="text-base font-semibold text-gray-900 mb-2 block">
                    {t.accessibility.keyboardShortcuts}
                  </Label>
                  <p className="text-sm text-gray-600">
                    {t.accessibility.keyboardShortcutsDesc}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-medium text-gray-900 mb-3">{t.accessibility.commonShortcuts}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.accessibility.navigateMenu}</span>
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">
                      Tab
                    </kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.accessibility.activateItem}</span>
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">
                      Enter
                    </kbd>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.accessibility.goBack}</span>
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300 font-mono">
                      Esc
                    </kbd>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="p-6 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">{t.accessibility.preview}</h3>
              <div
                className={`p-4 border rounded-lg transition-all ${
                  highContrast
                    ? "bg-black text-white border-white"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
              >
                <h4 className={`text-lg font-bold mb-2 ${highContrast ? "text-white" : "text-gray-900"}`}>
                  {t.accessibility.sampleContent}
                </h4>
                <p className={`text-sm mb-3 ${highContrast ? "text-white" : "text-gray-600"}`}>
                  {simplifiedLanguage
                    ? (language === 'en' ? "This is how your content will look with your settings." : "Ito ang hitsura ng iyong nilalaman sa iyong mga setting.")
                    : (language === 'en' ? "This demonstrates how your content will appear with the current accessibility settings applied." : "Ipinapakita nito kung paano lalabas ang iyong nilalaman sa kasalukuyang accessibility settings.")}
                </p>
                <button
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {t.accessibility.sampleButton}
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>{t.accessibility.activeSettings}</strong>
                </p>
                <ul className="mt-2 space-y-1 text-sm text-blue-800">
                  {highContrast && <li>✓ {t.accessibility.highContrast}</li>}
                  {textToSpeech && <li>✓ {t.accessibility.textToSpeech}</li>}
                  {simplifiedLanguage && <li>✓ {t.accessibility.simplifiedLanguage}</li>}
                  {!highContrast && !textToSpeech && !simplifiedLanguage && (
                    <li className="text-gray-600">{t.accessibility.noSettings}</li>
                  )}
                </ul>
              </div>
            </Card>

            <Card className="p-6 border-gray-200 mt-6">
              <h3 className="font-bold text-gray-900 mb-3">{t.accessibility.wcagCompliance}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Level A</span>
                  <span className="text-sm font-semibold text-green-600">✓ {language === 'en' ? 'Passed' : 'Pumasa'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Level AA</span>
                  <span className="text-sm font-semibold text-green-600">✓ {language === 'en' ? 'Passed' : 'Pumasa'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Level AAA</span>
                  <span className="text-sm font-semibold text-blue-600">{language === 'en' ? 'Partial' : 'Bahagya'}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
        <Button variant="outline">{t.accessibility.resetDefaults}</Button>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => toast.success(t.messages.settingsUpdated)}>
          {t.accessibility.saveSettings}
        </Button>
      </div>
    </div>
  );
}
