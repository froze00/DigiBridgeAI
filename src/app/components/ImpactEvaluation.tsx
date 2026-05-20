import { TrendingUp, Users, DollarSign, Wifi } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import dictRegionData from "../../data/dict-regional-comparison-2026.json";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  Label
} from "recharts";

const speedData = dictRegionData.speedData;
const costReductionData = dictRegionData.costReductionData;
const accessImprovementData = dictRegionData.accessImprovementData;

const CHART_RADIUS: [number, number, number, number] = [8, 8, 0, 0];
const LINE_DOT = { fill: '#8b5cf6', r: 6 };

export function ImpactEvaluation() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Impact Evaluation Dashboard</h1>
        <p className="text-gray-600 mt-2">Measuring the effectiveness of digital inclusion interventions</p>
      </div>

      {/* Caraga Region Focus Banner */}
      <Card className="p-6 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-lg font-bold text-gray-900">Region XIII - Caraga Region Impact</h2>
          <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            STUDY FOCUS
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-white rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Speed Improvement</p>
            <p className="text-2xl font-bold text-green-600">+117%</p>
            <p className="text-xs text-gray-600">11.2 → 24.3 Mbps</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Access Improvement</p>
            <p className="text-2xl font-bold text-blue-600">+12.4%</p>
            <p className="text-xs text-gray-600">26.2% → 38.6%</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Households Reached</p>
            <p className="text-2xl font-bold text-purple-600">42,300</p>
            <p className="text-xs text-gray-600">Q1 2026</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Cost Reduction</p>
            <p className="text-2xl font-bold text-amber-600">28.7%</p>
            <p className="text-xs text-gray-600">Avg ₱418/month savings</p>
          </div>
        </div>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 border-gray-200 bg-gradient-to-br from-green-50 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Speed Improvement</p>
              <p className="text-3xl font-bold text-green-600">+112%</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">From 19.7 to 42.8 Mbps</p>
        </Card>

        <Card className="p-6 border-gray-200 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Cost Reduction</p>
              <p className="text-3xl font-bold text-blue-600">22.3%</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">Average savings: ₱342/month</p>
        </Card>

        <Card className="p-6 border-gray-200 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Households Benefited</p>
              <p className="text-3xl font-bold text-purple-600">124,800</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">Across 5 key regions (Q1 2026)</p>
        </Card>

        <Card className="p-6 border-gray-200 bg-gradient-to-br from-amber-50 to-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Access Improvement</p>
              <p className="text-3xl font-bold text-amber-600">+27%</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">From 46.3% to 58.8% coverage</p>
        </Card>
      </div>

      {/* Before vs After Internet Speed */}
      <Card className="p-6 border-gray-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Before vs After Internet Speed by Region</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={speedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="region" />
            <YAxis>
              <Label value="Speed (Mbps)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey="before" fill="#94a3b8" name="Before Intervention" radius={CHART_RADIUS} />
            <Bar dataKey="after" fill="#3b82f6" name="After Intervention" radius={CHART_RADIUS} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Sources:</strong> DICT (2024). <em>National Broadband Plan Quarterly Progress Report Q1 2026</em>; Ookla Speedtest Intelligence (2024-2026). <em>Philippines Fixed Broadband Performance</em>.
          </p>
        </div>
      </Card>

      {/* Cost Reduction Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Cost Reduction Trend (%)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={costReductionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis>
                <Label value="Reduction %" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Area type="monotone" dataKey="reduction" stroke="#10b981" fill="#86efac" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <strong>Sources:</strong> PSA (2024). <em>Consumer Price Index - Telecommunications</em>; DICT (2024). <em>Subsidy Programs Impact Assessment</em>.
            </p>
          </div>
        </Card>

        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Access Improvement Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={accessImprovementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis>
                <Label value="Access %" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Line
                type="monotone"
                dataKey="access"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={LINE_DOT}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <strong>Sources:</strong> DICT (2024-2026). <em>Monthly Connectivity Dashboard</em>; PSA (2024-2026). <em>Community-Based Monitoring System (CBMS) Monthly Updates</em>.
            </p>
          </div>
        </Card>
      </div>

      {/* Regional Comparison */}
      <Card className="p-6 border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Regional Impact Comparison</h2>
          <Button variant="outline">Export Report</Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Region</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Speed Increase</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Cost Reduction</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Users Reached</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Overall Impact</th>
              </tr>
            </thead>
            <tbody>
              {speedData.map((region, idx) => {
                const improvement = Math.round(((region.after - region.before) / region.before) * 100);
                const users = [42300, 18500, 24800, 16200, 12700, 8900][idx];
                const costReduction = [28.7, 22.3, 20.1, 18.5, 15.2, 12.4][idx];
                const impact = improvement > 100 ? "High" : improvement > 80 ? "High" : improvement > 50 ? "Medium" : "Moderate";
                const impactColor = impact === "High" ? "text-green-600" : impact === "Medium" ? "text-blue-600" : "text-amber-600";

                return (
                  <tr
                    key={region.region}
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
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold">+{improvement}%</span>
                      <span className="text-sm text-gray-600 ml-2">
                        ({region.before} → {region.after} Mbps)
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-blue-600 font-semibold">-{costReduction}%</span>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">{users.toLocaleString()}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-semibold ${impactColor}`}>{impact}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Sources:</strong> DICT Regional Offices (2024-2026). <em>Infrastructure Deployment and Impact Reports</em>; National Telecommunications Commission (NTC) (2026). <em>Service Quality Monitoring Data</em>.
          </p>
        </div>
      </Card>

      {/* Comprehensive Data Sources */}
      <Card className="p-6 border-gray-200 bg-blue-50 mt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Comprehensive Data Sources & References:</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            1. Department of Information and Communications Technology (DICT). (2024-2026). <em>National Broadband Plan Quarterly Progress Reports & Monthly Connectivity Dashboard</em>.
          </p>
          <p>
            2. DICT Regional Offices. (2024-2026). <em>Regional Infrastructure Deployment Reports & Impact Assessments (NCR, Region VI, VII, XI, MIMAROPA)</em>.
          </p>
          <p>
            3. Ookla Speedtest Intelligence. (2024-2026). <em>Philippines Fixed and Mobile Broadband Performance Data</em>. Retrieved from{" "}
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
            4. Philippine Statistics Authority (PSA). (2024-2026). <em>Community-Based Monitoring System (CBMS) Monthly Updates & Consumer Price Index - Telecommunications Sector</em>.
          </p>
          <p>
            5. National Telecommunications Commission (NTC). (2026). <em>Service Quality Monitoring Reports & Performance Standards Compliance Data</em>.
          </p>
          <p>
            6. DICT. (2024). <em>Subsidy Programs Impact Assessment & Free Wi-Fi for All Program Evaluation Report</em>.
          </p>
          <p>
            7. National Economic and Development Authority (NEDA). (2023-2026). <em>Philippine Development Plan 2023-2028: Infrastructure and Digital Transformation Monitoring Reports</em>.
          </p>
          <p className="text-xs text-gray-600 mt-4 pt-3 border-t border-gray-300">
            <strong>Methodology Note:</strong> Impact evaluation metrics measure before-and-after changes in internet speed, cost, and access rates following digital infrastructure interventions (fiber deployment, tower construction, subsidy programs). Baseline data collected November 2025, with monthly monitoring through April 2026. Speed measurements based on aggregated Ookla data across residential connections. Cost reduction calculated from PSA CPI telecommunications data and DICT subsidy program records. Access improvement tracked via CBMS household surveys. Regional data represents provincial capital cities and surrounding municipalities. Data last updated: April 21, 2026.
          </p>
          <p className="text-xs font-semibold text-amber-800 mt-3 p-3 bg-amber-50 rounded border border-amber-200">
            ⭐ <strong>Study Focus:</strong> Region XIII (Caraga) is the primary focus area for impact evaluation. The region showed a 117% speed improvement (11.2 → 24.3 Mbps) and 12.4% access improvement (26.2% → 38.6%), benefiting 42,300 households in Q1 2026 with 28.7% cost reduction.
          </p>
        </div>
      </Card>
    </div>
  );
}
