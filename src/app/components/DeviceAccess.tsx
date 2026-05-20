import { Smartphone, Laptop, Tablet, MonitorSmartphone, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import deviceData from "../../data/neda-device-access-2024.json";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

const deviceOwnershipData = deviceData.deviceOwnership.map(item => ({
  name: item.type,
  national: item.national,
  caraga: item.caraga,
  color: item.type === "Smartphone" ? "#3b82f6" : item.type === "Basic Phone" ? "#8b5cf6" : item.type === "Laptop/PC" ? "#10b981" : item.type === "Tablet" ? "#f59e0b" : "#ef4444"
}));

const sharingData = deviceData.deviceSharing;

const deviceProgramRecommendations = [
  {
    title: "Student Laptop Program",
    target: "High school & college students",
    priority: "High",
    estimated: 850,
    budget: "₱18M"
  },
  {
    title: "Smartphone Subsidy",
    target: "Low-income families",
    priority: "High",
    estimated: 1200,
    budget: "₱8.5M"
  },
  {
    title: "Community Computer Labs",
    target: "Barangays without access",
    priority: "Medium",
    estimated: 45,
    budget: "₱12M"
  },
  {
    title: "Tablet for Seniors",
    target: "Senior citizens (65+)",
    priority: "Medium",
    estimated: 320,
    budget: "₱4.2M"
  },
];

const CHART_RADIUS: [number, number, number, number] = [8, 8, 0, 0];

export function DeviceAccess() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Device Access Dashboard</h1>
        <p className="text-gray-600 mt-2">Understanding device ownership and sharing patterns</p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Smartphone className="w-6 h-6 text-blue-600" />
            <p className="text-sm text-gray-600">Smartphone</p>
          </div>
          <p className="text-3xl font-bold text-gray-900">61.1%</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Laptop className="w-6 h-6 text-purple-600" />
            <p className="text-sm text-gray-600">Laptop/PC</p>
          </div>
          <p className="text-3xl font-bold text-gray-900">22.5%</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Tablet className="w-6 h-6 text-amber-600" />
            <p className="text-sm text-gray-600">Tablet</p>
          </div>
          <p className="text-3xl font-bold text-gray-900">3.6%</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-green-600" />
            <p className="text-sm text-gray-600">Shared</p>
          </div>
          <p className="text-3xl font-bold text-gray-900">71.6%</p>
        </Card>
        <Card className="p-6 border-red-200 bg-red-50">
          <div className="flex items-center gap-3 mb-2">
            <MonitorSmartphone className="w-6 h-6 text-red-600" />
            <p className="text-sm text-gray-600">No Device</p>
          </div>
          <p className="text-3xl font-bold text-red-600">22.6%</p>
        </Card>
      </div>

      {/* Device Ownership Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Device Ownership Distribution (National vs Caraga)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={deviceOwnershipData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="national" fill="#8884d8" name="National %" />
              <Bar dataKey="caraga" fill="#f59e0b" name="Caraga %" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-900">
              <span className="font-semibold">Caraga Insight:</span> 12.1% have no device access in Caraga (vs 5.2% National). Basic phone reliance is higher in Caraga (25.8% vs 12.4% National).
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <strong>Sources:</strong> PSA (2024). <em>National ICT Household Survey</em>; World Bank (2024). <em>Digital Adoption Index - Philippines</em>.
            </p>
          </div>
        </Card>

        {/* Household Device Sharing */}
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Household Device Sharing</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={sharingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="status" angle={-15} textAnchor="end" height={80} />
              <YAxis>
                <Label value="Users (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Legend />
              <Bar dataKey="national" fill="#10b981" name="National %" radius={CHART_RADIUS} />
              <Bar dataKey="caraga" fill="#3b82f6" name="Caraga %" radius={CHART_RADIUS} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Avg. household size</span>
              <span className="font-semibold text-gray-900">4.3 people</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Avg. devices per household</span>
              <span className="font-semibold text-gray-900">1.8 devices</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Peak usage conflicts</span>
              <span className="font-semibold text-amber-600">6 PM - 9 PM</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <strong>Sources:</strong> PSA (2024). <em>Family Income and Expenditure Survey</em>; DICT (2024). <em>National Broadband Plan Household Survey</em>.
            </p>
          </div>
        </Card>
      </div>

      {/* Device Type by Demographics */}
      <Card className="p-6 border-gray-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Device Access by Demographics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Youth (15-24)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Smartphone</span>
                <span className="font-semibold">68.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Laptop/PC</span>
                <span className="font-semibold">31.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tablet</span>
                <span className="font-semibold">5.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">No device</span>
                <span className="font-semibold text-red-600">18.3%</span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Working Age (25-59)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Smartphone</span>
                <span className="font-semibold">62.7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Laptop/PC</span>
                <span className="font-semibold">24.6%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tablet</span>
                <span className="font-semibold">3.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">No device</span>
                <span className="font-semibold text-red-600">21.4%</span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Seniors (60+)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Smartphone</span>
                <span className="font-semibold">35.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Laptop/PC</span>
                <span className="font-semibold">11.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tablet</span>
                <span className="font-semibold">2.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">No device</span>
                <span className="font-semibold text-red-600">52.7%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Sources:</strong> PSA (2024). <em>National Demographic and Health Survey (NDHS)</em>; DICT & DOST (2024). <em>ICT Access and Usage by Age Group Study</em>; ITU (2024). <em>Digital Inclusion Metrics - Philippines</em>.
          </p>
        </div>
      </Card>

      {/* Program Recommendations */}
      <Card className="p-6 border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recommended Device Programs</h2>
          <Button className="bg-blue-600 hover:bg-blue-700">Create Program</Button>
        </div>
        
        <div className="space-y-4">
          {deviceProgramRecommendations.map((program, idx) => (
            <div
              key={idx}
              className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{program.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        program.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {program.priority} Priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Target: {program.target}</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Estimated Beneficiaries</p>
                  <p className="text-lg font-bold text-gray-900">{program.estimated.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Budget Required</p>
                  <p className="text-lg font-bold text-blue-600">{program.budget}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Cost per Unit</p>
                  <p className="text-lg font-bold text-gray-900">
                    ₱{Math.round(parseInt(program.budget.replace(/[₱M,]/g, '')) * 1000000 / program.estimated).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Note:</strong> Program recommendations are AI-generated based on device access gaps and demographic needs analysis. Budget estimates use average market prices and include procurement, distribution, and training costs.
          </p>
        </div>
      </Card>

      {/* Comprehensive Data Sources */}
      <Card className="p-6 border-gray-200 bg-blue-50 mt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Comprehensive Data Sources & References:</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            1. Philippine Statistics Authority (PSA). (2024). <em>National ICT Household Survey</em>. Retrieved from{" "}
            <a
              href="https://psa.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://psa.gov.ph
            </a>
          </p>
          <p>
            2. Department of Information and Communications Technology (DICT). (2024). <em>Digital Philippines 2024 Report & National Broadband Plan Household Survey</em>.
          </p>
          <p>
            3. PSA. (2024). <em>Family Income and Expenditure Survey (FIES)</em> & <em>National Demographic and Health Survey (NDHS)</em>.
          </p>
          <p>
            4. DICT & Department of Science and Technology (DOST). (2024). <em>ICT Access and Usage by Age Group Study</em>.
          </p>
          <p>
            5. World Bank. (2024). <em>Digital Adoption Index - Philippines</em>. Retrieved from{" "}
            <a
              href="https://www.worldbank.org/en/country/philippines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.worldbank.org/en/country/philippines
            </a>
          </p>
          <p>
            6. International Telecommunication Union (ITU). (2024). <em>Measuring Digital Development: ICT Country Profiles - Philippines & Digital Inclusion Metrics</em>.
          </p>
          <p>
            7. Asian Development Bank (ADB). (2024). <em>Digital Divide in the Philippines: Household Survey Analysis</em>.
          </p>
          <p className="text-xs text-gray-600 mt-4 pt-3 border-t border-gray-300">
            <strong>Methodology Note:</strong> Statistics represent national averages aggregated from government surveys, census data, and international development organization reports. Local government units may experience variations based on geographic location (urban vs. rural), regional economic development, urbanization level, and socioeconomic factors. Device ownership percentages reflect household-level access rather than individual ownership. Data collection period: January-March 2024. Data last updated: April 2026.
          </p>
          <p className="text-xs font-semibold text-amber-800 mt-3 p-3 bg-amber-50 rounded border border-amber-200">
            ⭐ <strong>Study Focus:</strong> Region XIII (Caraga) is the primary target for device access programs. Current device ownership: 35.7%, with 22.6% of households having no device access. Priority interventions focus on student laptop programs and smartphone subsidies for low-income families in Agusan del Norte, Agusan del Sur, Surigao del Norte, Surigao del Sur, and Dinagat Islands.
          </p>
        </div>
      </Card>
    </div>
  );
}
