export type Language = 'en' | 'fil';

export interface Translations {
  // App Title and Branding
  appTitle: string;
  appSubtitle: string;
  downloadApp: string;
  copyright: string;

  // Navigation Menu
  nav: {
    dashboard: string;
    aiChatbot: string;
    connectivityMap: string;
    learningHub: string;
    interventions: string;
    impact: string;
    inclusion: string;
    devices: string;
    admin: string;
    accessibility: string;
    offlineMode: string;
  };

  // Common UI Elements
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    loading: string;
    search: string;
    filter: string;
    export: string;
    import: string;
    reset: string;
    submit: string;
    confirm: string;
    yes: string;
    no: string;
    viewDetails: string;
    download: string;
  };

  // Accessibility Settings
  accessibility: {
    title: string;
    subtitle: string;
    visualSettings: string;
    audioSettings: string;
    languageContent: string;
    keyboardNavigation: string;

    highContrast: string;
    highContrastDesc: string;
    textSize: string;
    colorThemes: string;

    textToSpeech: string;
    textToSpeechDesc: string;
    voiceSpeed: string;
    soundEffects: string;
    soundEffectsDesc: string;
    testVoice: string;

    simplifiedLanguage: string;
    simplifiedLanguageDesc: string;
    languagePreference: string;
    autoTranslate: string;
    autoTranslateDesc: string;

    keyboardShortcuts: string;
    keyboardShortcutsDesc: string;
    commonShortcuts: string;
    navigateMenu: string;
    activateItem: string;
    goBack: string;

    preview: string;
    sampleContent: string;
    sampleButton: string;
    activeSettings: string;
    noSettings: string;

    wcagCompliance: string;
    resetDefaults: string;
    saveSettings: string;

    // Language Options
    english: string;
    filipino: string;
    primaryLanguage: string;
    nationalLanguage: string;
  };

  // Dashboard
  dashboard: {
    welcome: string;
    overview: string;
    statistics: string;
    recentActivity: string;
    quickActions: string;
    notifications: string;

    internetAccess: string;
    deviceOwnership: string;
    digitalLiteracy: string;
    interventions: string;

    totalUsers: string;
    activePrograms: string;
    completedTraining: string;
    caragaRegion: string;

    viewAll: string;
    details: string;
    trend: string;
  };

  // Regions
  regions: {
    national: string;
    ncr: string;
    car: string;
    region1: string;
    region2: string;
    region3: string;
    region4a: string;
    region4b: string;
    region5: string;
    region6: string;
    region7: string;
    region8: string;
    region9: string;
    region10: string;
    region11: string;
    region12: string;
    region13: string;
    barmm: string;
  };

  // Data Categories
  data: {
    accessRate: string;
    population: string;
    speed: string;
    affordability: string;
    devices: string;
    literacy: string;
    urban: string;
    rural: string;
    male: string;
    female: string;
    age: string;
    disability: string;
  };

  // Learning Hub
  learning: {
    title: string;
    subtitle: string;
    allCourses: string;
    inProgress: string;
    completed: string;
    recommended: string;

    basicDigitalLiteracy: string;
    internetSafety: string;
    onlineServices: string;
    deviceUsage: string;

    startCourse: string;
    continueCourse: string;
    certificate: string;
    progress: string;
  };

  // Connectivity Map
  map: {
    title: string;
    subtitle: string;
    coverage: string;
    speed: string;
    providers: string;
    infrastructure: string;

    highCoverage: string;
    mediumCoverage: string;
    lowCoverage: string;
    noCoverage: string;

    legend: string;
    zoom: string;
    filters: string;
  };

  // Interventions
  interventions: {
    title: string;
    subtitle: string;
    active: string;
    planned: string;
    completed: string;

    addIntervention: string;
    editIntervention: string;
    deleteIntervention: string;

    name: string;
    description: string;
    location: string;
    budget: string;
    timeline: string;
    status: string;
    beneficiaries: string;

    infrastructure: string;
    training: string;
    subsidy: string;
    awareness: string;
  };

  // Impact Evaluation
  impact: {
    title: string;
    subtitle: string;
    overview: string;
    trends: string;
    comparison: string;

    before: string;
    after: string;
    improvement: string;
    target: string;
    achieved: string;

    metrics: string;
    indicators: string;
    outcomes: string;
  };

  // Messages and Alerts
  messages: {
    saveSuccess: string;
    saveError: string;
    deleteConfirm: string;
    loadingData: string;
    noData: string;
    errorLoading: string;

    languageChanged: string;
    settingsUpdated: string;
    downloadStarted: string;
  };

  // Disability Types
  disability: {
    none: string;
    visual: string;
    hearing: string;
    mobility: string;
    cognitive: string;
    multiple: string;
  };

  // Age Groups
  ageGroups: {
    youth: string;
    youngAdult: string;
    adult: string;
    middleAge: string;
    senior: string;
    elderly: string;
  };

  // Sources
  sources: {
    psa: string;
    dict: string;
    neda: string;
    ncip: string;
    dataSource: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    // App Title and Branding
    appTitle: "DigiBridge AI+",
    appSubtitle: "Digital Inclusion System",
    downloadApp: "Download App",
    copyright: "© 2026 DigiBridge AI+\nRepublic of the Philippines",

    // Navigation Menu
    nav: {
      dashboard: "Dashboard",
      aiChatbot: "AI Chatbot",
      connectivityMap: "Connectivity Map",
      learningHub: "Learning Hub",
      interventions: "Interventions",
      impact: "Impact",
      inclusion: "Inclusion",
      devices: "Devices",
      admin: "Admin",
      accessibility: "Accessibility",
      offlineMode: "Offline Mode",
    },

    // Common UI Elements
    common: {
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      add: "Add",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      loading: "Loading...",
      search: "Search",
      filter: "Filter",
      export: "Export",
      import: "Import",
      reset: "Reset",
      submit: "Submit",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
      viewDetails: "View Details",
      download: "Download",
    },

    // Accessibility Settings
    accessibility: {
      title: "Accessibility Settings",
      subtitle: "Customize your experience for better usability",
      visualSettings: "Visual Settings",
      audioSettings: "Audio Settings",
      languageContent: "Language & Content",
      keyboardNavigation: "Keyboard Navigation",

      highContrast: "High Contrast Mode",
      highContrastDesc: "Increases contrast between text and background for better readability",
      textSize: "Text Size",
      colorThemes: "Color Themes",

      textToSpeech: "Text-to-Speech",
      textToSpeechDesc: "Enable screen reader functionality to have content read aloud",
      voiceSpeed: "Voice Speed",
      soundEffects: "Sound Effects",
      soundEffectsDesc: "Play sound effects for notifications and interactions",
      testVoice: "Test Voice",

      simplifiedLanguage: "Simplified Language Mode",
      simplifiedLanguageDesc: "Use simpler words and shorter sentences for easier comprehension",
      languagePreference: "Language Preference",
      autoTranslate: "Auto-Translate",
      autoTranslateDesc: "Automatically translate content to your preferred language",

      keyboardShortcuts: "Enable Keyboard Shortcuts",
      keyboardShortcutsDesc: "Navigate the platform using keyboard commands",
      commonShortcuts: "Common Shortcuts:",
      navigateMenu: "Navigate menu",
      activateItem: "Activate item",
      goBack: "Go back",

      preview: "Preview",
      sampleContent: "Sample Content",
      sampleButton: "Sample Button",
      activeSettings: "Active Settings:",
      noSettings: "No custom settings active",

      wcagCompliance: "WCAG Compliance",
      resetDefaults: "Reset to Defaults",
      saveSettings: "Save Settings",

      english: "English",
      filipino: "Filipino",
      primaryLanguage: "Primary language",
      nationalLanguage: "Wikang pambansa",
    },

    // Dashboard
    dashboard: {
      welcome: "Welcome to DigiBridge AI+",
      overview: "Overview",
      statistics: "Statistics",
      recentActivity: "Recent Activity",
      quickActions: "Quick Actions",
      notifications: "Notifications",

      internetAccess: "Internet Access",
      deviceOwnership: "Device Ownership",
      digitalLiteracy: "Digital Literacy",
      interventions: "Active Interventions",

      totalUsers: "Total Users",
      activePrograms: "Active Programs",
      completedTraining: "Completed Training",
      caragaRegion: "Caraga Region Focus",

      viewAll: "View All",
      details: "Details",
      trend: "Trend",
    },

    // Regions
    regions: {
      national: "National",
      ncr: "NCR (Metro Manila)",
      car: "CAR (Cordillera)",
      region1: "Region I (Ilocos)",
      region2: "Region II (Cagayan Valley)",
      region3: "Region III (Central Luzon)",
      region4a: "Region IV-A (CALABARZON)",
      region4b: "Region IV-B (MIMAROPA)",
      region5: "Region V (Bicol)",
      region6: "Region VI (Western Visayas)",
      region7: "Region VII (Central Visayas)",
      region8: "Region VIII (Eastern Visayas)",
      region9: "Region IX (Zamboanga)",
      region10: "Region X (Northern Mindanao)",
      region11: "Region XI (Davao)",
      region12: "Region XII (SOCCSKSARGEN)",
      region13: "Region XIII (Caraga)",
      barmm: "BARMM (Bangsamoro)",
    },

    // Data Categories
    data: {
      accessRate: "Access Rate",
      population: "Population",
      speed: "Speed (Mbps)",
      affordability: "Affordability",
      devices: "Devices",
      literacy: "Digital Literacy",
      urban: "Urban",
      rural: "Rural",
      male: "Male",
      female: "Female",
      age: "Age",
      disability: "Disability",
    },

    // Learning Hub
    learning: {
      title: "Learning Hub",
      subtitle: "Educational resources for digital inclusion",
      allCourses: "All Courses",
      inProgress: "In Progress",
      completed: "Completed",
      recommended: "Recommended",

      basicDigitalLiteracy: "Basic Digital Literacy",
      internetSafety: "Internet Safety",
      onlineServices: "Online Services",
      deviceUsage: "Device Usage",

      startCourse: "Start Course",
      continueCourse: "Continue",
      certificate: "Certificate",
      progress: "Progress",
    },

    // Connectivity Map
    map: {
      title: "Connectivity Map",
      subtitle: "Internet coverage and infrastructure visualization",
      coverage: "Coverage",
      speed: "Speed",
      providers: "Providers",
      infrastructure: "Infrastructure",

      highCoverage: "High Coverage",
      mediumCoverage: "Medium Coverage",
      lowCoverage: "Low Coverage",
      noCoverage: "No Coverage",

      legend: "Legend",
      zoom: "Zoom",
      filters: "Filters",
    },

    // Interventions
    interventions: {
      title: "Intervention Management",
      subtitle: "Digital inclusion programs and initiatives",
      active: "Active",
      planned: "Planned",
      completed: "Completed",

      addIntervention: "Add Intervention",
      editIntervention: "Edit Intervention",
      deleteIntervention: "Delete Intervention",

      name: "Name",
      description: "Description",
      location: "Location",
      budget: "Budget",
      timeline: "Timeline",
      status: "Status",
      beneficiaries: "Beneficiaries",

      infrastructure: "Infrastructure",
      training: "Training",
      subsidy: "Subsidy",
      awareness: "Awareness",
    },

    // Impact Evaluation
    impact: {
      title: "Impact Evaluation",
      subtitle: "Measure the effectiveness of interventions",
      overview: "Overview",
      trends: "Trends",
      comparison: "Comparison",

      before: "Before",
      after: "After",
      improvement: "Improvement",
      target: "Target",
      achieved: "Achieved",

      metrics: "Metrics",
      indicators: "Indicators",
      outcomes: "Outcomes",
    },

    // Messages and Alerts
    messages: {
      saveSuccess: "Changes saved successfully",
      saveError: "Error saving changes",
      deleteConfirm: "Are you sure you want to delete this item?",
      loadingData: "Loading data...",
      noData: "No data available",
      errorLoading: "Error loading data",

      languageChanged: "Language preference updated",
      settingsUpdated: "Settings updated successfully",
      downloadStarted: "Download started",
    },

    // Disability Types
    disability: {
      none: "No Disability",
      visual: "Visual Impairment",
      hearing: "Hearing Impairment",
      mobility: "Mobility Impairment",
      cognitive: "Cognitive Disability",
      multiple: "Multiple Disabilities",
    },

    // Age Groups
    ageGroups: {
      youth: "15-24 years",
      youngAdult: "25-34 years",
      adult: "35-44 years",
      middleAge: "45-54 years",
      senior: "55-64 years",
      elderly: "65+ years",
    },

    // Sources
    sources: {
      psa: "Philippine Statistics Authority",
      dict: "Department of ICT",
      neda: "National Economic Development Authority",
      ncip: "National Commission on Indigenous Peoples",
      dataSource: "Data Source",
    },
  },

  fil: {
    // App Title and Branding
    appTitle: "DigiBridge AI+",
    appSubtitle: "Sistema ng Digital na Inklusyon",
    downloadApp: "I-download ang App",
    copyright: "© 2026 DigiBridge AI+\nRepublika ng Pilipinas",

    // Navigation Menu
    nav: {
      dashboard: "Dashboard",
      aiChatbot: "AI Chatbot",
      connectivityMap: "Mapa ng Koneksyon",
      learningHub: "Sentro ng Pag-aaral",
      interventions: "Mga Interbensyon",
      impact: "Epekto",
      inclusion: "Inklusyon",
      devices: "Mga Gadyet",
      admin: "Admin",
      accessibility: "Accessibility",
      offlineMode: "Offline Mode",
    },

    // Common UI Elements
    common: {
      save: "I-save",
      cancel: "Kanselahin",
      delete: "Burahin",
      edit: "I-edit",
      add: "Magdagdag",
      close: "Isara",
      back: "Bumalik",
      next: "Susunod",
      previous: "Nakaraan",
      loading: "Naglo-load...",
      search: "Maghanap",
      filter: "I-filter",
      export: "I-export",
      import: "Mag-import",
      reset: "I-reset",
      submit: "Isumite",
      confirm: "Kumpirmahin",
      yes: "Oo",
      no: "Hindi",
      viewDetails: "Tingnan ang Detalye",
      download: "I-download",
    },

    // Accessibility Settings
    accessibility: {
      title: "Mga Setting ng Accessibility",
      subtitle: "I-customize ang iyong karanasan para sa mas magandang paggamit",
      visualSettings: "Mga Setting sa Paningin",
      audioSettings: "Mga Setting sa Tunog",
      languageContent: "Wika at Nilalaman",
      keyboardNavigation: "Nabigasyon sa Keyboard",

      highContrast: "Mataas na Contrast Mode",
      highContrastDesc: "Nagpapataas ng contrast sa pagitan ng teksto at background para sa mas magandang pagbasa",
      textSize: "Laki ng Teksto",
      colorThemes: "Mga Kulay na Tema",

      textToSpeech: "Text-to-Speech",
      textToSpeechDesc: "Paganahin ang screen reader upang mabasa nang malakas ang nilalaman",
      voiceSpeed: "Bilis ng Boses",
      soundEffects: "Mga Epekto ng Tunog",
      soundEffectsDesc: "Mag-play ng mga tunog para sa mga notipikasyon at interaksyon",
      testVoice: "Subukan ang Boses",

      simplifiedLanguage: "Pinasimpleng Wika Mode",
      simplifiedLanguageDesc: "Gumamit ng mas simpleng salita at mas maikling pangungusap para sa mas madaling pag-unawa",
      languagePreference: "Kagustuhan sa Wika",
      autoTranslate: "Awtomatikong Pagsasalin",
      autoTranslateDesc: "Awtomatikong isalin ang nilalaman sa iyong gustong wika",

      keyboardShortcuts: "Paganahin ang Mga Shortcut sa Keyboard",
      keyboardShortcutsDesc: "Mag-navigate sa platform gamit ang mga keyboard command",
      commonShortcuts: "Mga Karaniwang Shortcut:",
      navigateMenu: "Mag-navigate sa menu",
      activateItem: "Aktibhin ang item",
      goBack: "Bumalik",

      preview: "Preview",
      sampleContent: "Sample na Nilalaman",
      sampleButton: "Sample na Button",
      activeSettings: "Mga Aktibong Setting:",
      noSettings: "Walang custom na setting na aktibo",

      wcagCompliance: "WCAG Compliance",
      resetDefaults: "I-reset sa Default",
      saveSettings: "I-save ang mga Setting",

      english: "English",
      filipino: "Filipino",
      primaryLanguage: "Pangunahing wika",
      nationalLanguage: "Wikang pambansa",
    },

    // Dashboard
    dashboard: {
      welcome: "Maligayang pagdating sa DigiBridge AI+",
      overview: "Pangkalahatang-tanaw",
      statistics: "Mga Estadistika",
      recentActivity: "Kamakailang Aktibidad",
      quickActions: "Mabilis na Aksyon",
      notifications: "Mga Notipikasyon",

      internetAccess: "Access sa Internet",
      deviceOwnership: "Pagmamay-ari ng Gadyet",
      digitalLiteracy: "Digital Literacy",
      interventions: "Mga Aktibong Interbensyon",

      totalUsers: "Kabuuang mga User",
      activePrograms: "Mga Aktibong Programa",
      completedTraining: "Natapos na Pagsasanay",
      caragaRegion: "Pokus sa Rehiyon ng Caraga",

      viewAll: "Tingnan Lahat",
      details: "Mga Detalye",
      trend: "Kalakaran",
    },

    // Regions
    regions: {
      national: "Pambansa",
      ncr: "NCR (Metro Manila)",
      car: "CAR (Cordillera)",
      region1: "Rehiyon I (Ilocos)",
      region2: "Rehiyon II (Lambak ng Cagayan)",
      region3: "Rehiyon III (Gitnang Luzon)",
      region4a: "Rehiyon IV-A (CALABARZON)",
      region4b: "Rehiyon IV-B (MIMAROPA)",
      region5: "Rehiyon V (Bicol)",
      region6: "Rehiyon VI (Kanlurang Visayas)",
      region7: "Rehiyon VII (Gitnang Visayas)",
      region8: "Rehiyon VIII (Silangang Visayas)",
      region9: "Rehiyon IX (Zamboanga)",
      region10: "Rehiyon X (Hilagang Mindanao)",
      region11: "Rehiyon XI (Davao)",
      region12: "Rehiyon XII (SOCCSKSARGEN)",
      region13: "Rehiyon XIII (Caraga)",
      barmm: "BARMM (Bangsamoro)",
    },

    // Data Categories
    data: {
      accessRate: "Rate ng Access",
      population: "Populasyon",
      speed: "Bilis (Mbps)",
      affordability: "Abot-kaya",
      devices: "Mga Gadyet",
      literacy: "Digital Literacy",
      urban: "Lungsod",
      rural: "Kanayunan",
      male: "Lalaki",
      female: "Babae",
      age: "Edad",
      disability: "Kapansanan",
    },

    // Learning Hub
    learning: {
      title: "Sentro ng Pag-aaral",
      subtitle: "Mga mapagkukunang pang-edukasyon para sa digital na inklusyon",
      allCourses: "Lahat ng Kurso",
      inProgress: "Kasalukuyang Ginagawa",
      completed: "Natapos Na",
      recommended: "Inirerekomenda",

      basicDigitalLiteracy: "Pangunahing Digital Literacy",
      internetSafety: "Kaligtasan sa Internet",
      onlineServices: "Mga Online na Serbisyo",
      deviceUsage: "Paggamit ng Gadyet",

      startCourse: "Simulan ang Kurso",
      continueCourse: "Ipagpatuloy",
      certificate: "Sertipiko",
      progress: "Progreso",
    },

    // Connectivity Map
    map: {
      title: "Mapa ng Koneksyon",
      subtitle: "Visualisasyon ng saklaw ng internet at imprastraktura",
      coverage: "Saklaw",
      speed: "Bilis",
      providers: "Mga Provider",
      infrastructure: "Imprastraktura",

      highCoverage: "Mataas na Saklaw",
      mediumCoverage: "Katamtamang Saklaw",
      lowCoverage: "Mababang Saklaw",
      noCoverage: "Walang Saklaw",

      legend: "Alamat",
      zoom: "Zoom",
      filters: "Mga Filter",
    },

    // Interventions
    interventions: {
      title: "Pamamahala ng Interbensyon",
      subtitle: "Mga programa at inisyatiba para sa digital na inklusyon",
      active: "Aktibo",
      planned: "Nakatakda",
      completed: "Natapos",

      addIntervention: "Magdagdag ng Interbensyon",
      editIntervention: "I-edit ang Interbensyon",
      deleteIntervention: "Burahin ang Interbensyon",

      name: "Pangalan",
      description: "Paglalarawan",
      location: "Lokasyon",
      budget: "Badyet",
      timeline: "Takdang-panahon",
      status: "Katayuan",
      beneficiaries: "Mga Benepisyaryo",

      infrastructure: "Imprastraktura",
      training: "Pagsasanay",
      subsidy: "Subsidyo",
      awareness: "Kamalayan",
    },

    // Impact Evaluation
    impact: {
      title: "Pagsusuri ng Epekto",
      subtitle: "Sukatin ang bisa ng mga interbensyon",
      overview: "Pangkalahatang-tanaw",
      trends: "Mga Kalakaran",
      comparison: "Paghahambing",

      before: "Bago",
      after: "Pagkatapos",
      improvement: "Pagpapabuti",
      target: "Target",
      achieved: "Nakamit",

      metrics: "Mga Sukatan",
      indicators: "Mga Indikador",
      outcomes: "Mga Resulta",
    },

    // Messages and Alerts
    messages: {
      saveSuccess: "Matagumpay na na-save ang mga pagbabago",
      saveError: "Error sa pag-save ng mga pagbabago",
      deleteConfirm: "Sigurado ka bang gusto mong burahin ang item na ito?",
      loadingData: "Naglo-load ng data...",
      noData: "Walang available na data",
      errorLoading: "Error sa pag-load ng data",

      languageChanged: "Na-update ang kagustuhan sa wika",
      settingsUpdated: "Matagumpay na na-update ang mga setting",
      downloadStarted: "Nagsimula ang pag-download",
    },

    // Disability Types
    disability: {
      none: "Walang Kapansanan",
      visual: "Kapansanan sa Paningin",
      hearing: "Kapansanan sa Pandinig",
      mobility: "Kapansanan sa Paggalaw",
      cognitive: "Kapansanan sa Pag-iisip",
      multiple: "Maramihang Kapansanan",
    },

    // Age Groups
    ageGroups: {
      youth: "15-24 taong gulang",
      youngAdult: "25-34 taong gulang",
      adult: "35-44 taong gulang",
      middleAge: "45-54 taong gulang",
      senior: "55-64 taong gulang",
      elderly: "65+ taong gulang",
    },

    // Sources
    sources: {
      psa: "Philippine Statistics Authority",
      dict: "Kagawaran ng ICT",
      neda: "Pambansang Awtoridad sa Pag-unlad Pang-ekonomiya",
      ncip: "Pambansang Komisyon sa mga Katutubo",
      dataSource: "Pinagmulan ng Data",
    },
  },
};

// Helper function to get translations
export function useTranslation(language: Language): Translations {
  return translations[language];
}
