import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomeDashboard } from "./components/HomeDashboard";
import { AIChatbot } from "./components/AIChatbot";
import { ConnectivityMap } from "./components/ConnectivityMap";
import { LearningHub } from "./components/LearningHub";
import { InterventionManagement } from "./components/InterventionManagement";
import { ImpactEvaluation } from "./components/ImpactEvaluation";
import { InclusionAnalytics } from "./components/InclusionAnalytics";
import { DeviceAccess } from "./components/DeviceAccess";
import { AdminDashboard } from "./components/AdminDashboard";
import { AccessibilitySettings } from "./components/AccessibilitySettings";
import { OfflineMode } from "./components/OfflineMode";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeDashboard },
      { path: "chatbot", Component: AIChatbot },
      { path: "map", Component: ConnectivityMap },
      { path: "learning", Component: LearningHub },
      { path: "interventions", Component: InterventionManagement },
      { path: "impact", Component: ImpactEvaluation },
      { path: "inclusion", Component: InclusionAnalytics },
      { path: "devices", Component: DeviceAccess },
      { path: "admin", Component: AdminDashboard },
      { path: "accessibility", Component: AccessibilitySettings },
      { path: "offline", Component: OfflineMode },
    ],
  },
]);
