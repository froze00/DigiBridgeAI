import { Download, TrendingUp, Users, Wifi, DollarSign } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import regionData from "../../data/dict-regional-comparison-2026.json";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ReferenceLine,
  Label
} from "recharts";

const digitalDivideIndex = regionData.digitalDivideIndex;
const regionalComparison = regionData.regionalComparison;
const radarData = regionData.radarData;

const CHART_RADIUS: [number, number, number, number] = [8, 8, 0, 0];
const LINE_DOT = { fill: '#3b82f6', r: 5 };

export function AdminDashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Policy Dashboard</h1>
          <p className="text-gray-600 mt-2">Comprehensive analytics for policy makers</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="ncr">Metro Manila</SelectItem>
              <SelectItem value="cebu">Cebu</SelectItem>
              <SelectItem value="davao">Davao</SelectItem>
              <SelectItem value="mindanao">Mindanao</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="education">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select Sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="public">Public Access</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Caraga Region Focus Banner */}
      <Card className="p-6 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-gray-900">Region XIII - Caraga Region</h2>
              <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                PRIMARY STUDY FOCUS
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Provinces: Agusan del Norte, Agusan del Sur, Surigao del Norte, Surigao del Sur, Dinagat Islands
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-600">Internet Access</p>
                <p className="text-2xl font-bold text-amber-700">38.6%</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Avg Speed</p>
                <p className="text-2xl font-bold text-amber-700">24.3 Mbps</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Device Ownership</p>
                <p className="text-2xl font-bold text-amber-700">35.7%</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Population</p>
                <p className="text-2xl font-bold text-amber-700">2.8M</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 border-gray-200 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Digital Divide Index</p>
              <p className="text-2xl font-bold text-blue-600">58.7</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 font-medium">↓ 9.6 pts</span>
            <span className="text-gray-600">since Sept 2025</span>
          </div>
        </Card>

        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">National Access Rate</p>
              <p className="text-2xl font-bold text-green-600">52.1%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 font-medium">↑ 5.8%</span>
            <span className="text-gray-600">from Q4 2025</span>
          </div>
        </Card>

        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Households Reached</p>
              <p className="text-2xl font-bold text-purple-600">2.8M</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 font-medium">↑ 124.8K</span>
            <span className="text-gray-600">Q1 2026</span>
          </div>
        </Card>

        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">FY 2026 Budget</p>
              <p className="text-2xl font-bold text-amber-600">₱16.2B</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-600 font-medium">42.3% utilized</span>
          </div>
        </Card>
      </div>

      {/* Digital Divide Trend */}
      <Card className="p-6 border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Digital Divide Index Trend</h2>
          <div className="flex gap-2 text-sm">
            <span className="text-gray-600">Target 2030:</span>
            <span className="font-semibold text-green-600">&lt; 40</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={digitalDivideIndex}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" />
            <YAxis>
              <Label value="Index Score" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="index"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={LINE_DOT}
            />
            {/* Target line */}
            <ReferenceLine
              y={40}
              stroke="#10b981"
              strokeDasharray="5 5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Sources:</strong> DICT (2025-2026). <em>Monthly Digital Divide Monitoring Reports</em>; NEDA (2023). <em>Philippine Development Plan 2023-2028 Digital Inclusion Targets</em>.
          </p>
        </div>
      </Card>

      {/* Regional Comparison and Radar Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Regional Bar Chart */}
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Regional Access Rate Comparison</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={regionalComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="region" angle={-15} textAnchor="end" height={80} />
              <YAxis>
                <Label value="Access %" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Bar dataKey="access" fill="#3b82f6" radius={CHART_RADIUS} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Radar Chart - National Performance */}
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">National Digital Performance</h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="indicator" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.5}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center text-sm text-gray-600">
            Average Score: <span className="font-semibold text-gray-900">47.5/100</span>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <strong>Sources:</strong> PSA (2024-2026). <em>CBMS National Dashboard</em>; DICT (2026). <em>Digital Philippines Performance Index</em>.
            </p>
          </div>
        </Card>
      </div>

      {/* Detailed Regional Table */}
      <Card className="p-6 border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Detailed Regional Metrics</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Region</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Access Rate</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Avg Speed</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Affordability</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Device Ownership</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {regionalComparison.map((region, idx) => {
                const status = region.access >= 75 ? "Strong" : region.access >= 60 ? "Moderate" : "Needs Improvement";
                const statusColor = status === "Strong" ? "text-green-600 bg-green-50" :
                                   status === "Moderate" ? "text-blue-600 bg-blue-50" :
                                   "text-red-600 bg-red-50";

                return (
                  <tr
                    key={idx}
                    className={`border-b border-gray-100 ${
                      region.isFocus
                        ? "bg-amber-50 hover:bg-amber-100 border-l-4 border-l-amber-500"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className={`py-4 px-4 font-medium ${region.isFocus ? "text-amber-900 font-bold" : "text-gray-900"}`}>
                      {region.region}
                      {region.isFocus && (
                        <span className="ml-2 text-xs bg-amber-600 text-white px-2 py-1 rounded-full">
                          Study Focus
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">{region.access}%</td>
                    <td className="py-4 px-4 text-center">{region.speed} Mbps</td>
                    <td className="py-4 px-4 text-center">{region.affordability}%</td>
                    <td className="py-4 px-4 text-center">{region.devices}%</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Sources:</strong> DICT Regional Offices (2026). <em>Regional Digital Infrastructure Reports</em>; Ookla (2026). <em>Speedtest Regional Performance Data</em>; PSA (2024). <em>Regional CBMS ICT Module</em>.
          </p>
        </div>
      </Card>

      {/* Sector Breakdown */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <p className="text-sm text-gray-600 mb-2">Education Sector</p>
          <p className="text-3xl font-bold text-blue-600">47.8%</p>
          <p className="text-xs text-gray-600 mt-1">Public schools with internet</p>
        </Card>
        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <p className="text-sm text-gray-600 mb-2">Free Wi-Fi for All</p>
          <p className="text-3xl font-bold text-green-600">8,942</p>
          <p className="text-xs text-gray-600 mt-1">Sites nationwide (April 2026)</p>
        </Card>
        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <p className="text-sm text-gray-600 mb-2">Healthcare</p>
          <p className="text-3xl font-bold text-purple-600">62.3%</p>
          <p className="text-xs text-gray-600 mt-1">Health facilities connected</p>
        </Card>
        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <p className="text-sm text-gray-600 mb-2">MSMEs</p>
          <p className="text-3xl font-bold text-amber-600">38.7%</p>
          <p className="text-xs text-gray-600 mt-1">Digital adoption rate</p>
        </Card>
      </div>

      {/* Comprehensive Data Sources */}
      <Card className="p-6 border-gray-200 bg-blue-50 mt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Comprehensive Data Sources & References:</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            1. Department of Information and Communications Technology (DICT). (2025-2026). <em>Monthly Digital Divide Monitoring Reports & Digital Philippines Performance Index</em>.
          </p>
          <p>
            2. DICT Regional Offices. (2026). <em>Regional Digital Infrastructure Deployment and Performance Reports (NCR, Region VI, VII, XI, MIMAROPA)</em>.
          </p>
          <p>
            3. Philippine Statistics Authority (PSA). (2024-2026). <em>Community-Based Monitoring System (CBMS) ICT Module & National Dashboard</em>. Retrieved from{" "}
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
            4. National Economic and Development Authority (NEDA). (2023). <em>Philippine Development Plan 2023-2028: Digital Transformation Strategy & Inclusion Targets</em>.
          </p>
          <p>
            5. Ookla Speedtest Intelligence. (2026). <em>Philippines Regional Broadband Performance Data</em>. Retrieved from{" "}
            <a
              href="https://www.speedtest.net/global-index/philippines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.speedtest.net/global-index/philippines
            </a>
          </p>
          <p>
            6. DICT. (2026). <em>Free Wi-Fi for All Program Dashboard & DepEd-DICT Joint Monitoring Report on School Connectivity</em>.
          </p>
          <p>
            7. Department of Health (DOH) & DICT. (2026). <em>Health Facility Connectivity Survey</em>.
          </p>
          <p>
            8. Department of Trade and Industry (DTI). (2024). <em>MSME Digital Transformation Study</em>.
          </p>
          <p className="text-xs text-gray-600 mt-4 pt-3 border-t border-gray-300">
            <strong>Methodology Note:</strong> Digital Divide Index aggregates inequality measures across internet access, speed, affordability, device ownership, digital literacy, and demographic inclusion. Lower scores indicate reduced inequality. National Access Rate represents percentage of Filipino households with internet connectivity. Regional metrics cover provincial capitals and surrounding municipalities. Education sector data from DepEd BEIS 2024-2025. Free Wi-Fi sites include barangay halls, public parks, and government offices. Healthcare connectivity covers RHUs, barangay health stations, and hospitals. MSME data from DTI SME Development Council. Data collection: January-April 2026. Last updated: April 23, 2026.
          </p>
          <p className="text-xs font-semibold text-amber-800 mt-3 p-3 bg-amber-50 rounded border border-amber-200">
            ⭐ <strong>Study Focus:</strong> Region XIII (Caraga) is the primary focus area for this digital inclusion study, comprising Agusan del Norte, Agusan del Sur, Surigao del Norte, Surigao del Sur, and Dinagat Islands. All interventions, programs, and policy recommendations prioritize this region.
          </p>
        </div>
      </Card>
    </div>
  );
}
