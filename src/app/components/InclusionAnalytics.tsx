import { Users, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import psaData from "../../data/psa-ict-household-2024.json";
import dictData from "../../data/dict-digital-literacy-2024.json";
import ncipData from "../../data/ncip-underserved-2024.json";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from "recharts";

const genderData = psaData.genderDistribution;
const disabilityData = dictData.disabilityInclusion;
const locationData = psaData.locationData;
const underservedGroups = ncipData.underservedGroups;

export function InclusionAnalytics() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Inclusion Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">Tracking digital equity across demographics</p>
      </div>

      {/* Inclusion Gap Index */}
      <Card className="p-6 border-amber-200 bg-amber-50 mb-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-900">Digital Inclusion Gap Index</h2>
              <span className="text-4xl font-bold text-amber-600">58.7</span>
            </div>
            <p className="text-gray-700 mb-4">
              Higher scores indicate greater inequality. National target: &lt; 40 by 2030 (per Philippine Digital Transformation Strategy 2028)
            </p>
            <Progress value={58.7} className="h-3" />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Perfect Equity (0)</span>
              <span>Current (58.7)</span>
              <span>Maximum Gap (100)</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Gender and Disability Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Gender Distribution */}
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Male Internet Access Rate</span>
              <span className="font-semibold text-blue-600">54.8%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Female Internet Access Rate</span>
              <span className="font-semibold text-pink-600">49.3%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Gender Gap</span>
              <span className="font-semibold text-amber-600">5.5 percentage points</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <strong>Sources:</strong> PSA (2024). <em>National ICT Household Survey by Gender</em>; UN Women Philippines (2024). <em>Digital Gender Gap Report</em>.
            </p>
          </div>
        </Card>

        {/* Disability Inclusion */}
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Disability Inclusion (National vs Caraga)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={disabilityData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="national" fill="#8b5cf6" name="National %" radius={[0, 8, 8, 0]} />
              <Bar dataKey="caraga" fill="#f59e0b" name="Caraga %" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-purple-700">9.3%</span> of population have some form of disability.
              Internet access rate for PWDs in Caraga: <span className="font-semibold text-amber-700">12.3%</span> (vs National 21.4%)
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <strong>Sources:</strong> National Council on Disability Affairs (NCDA) & PSA (2024). <em>Philippine Disability Statistics</em>; DICT (2024). <em>PWD Digital Access Survey</em>.
            </p>
          </div>
        </Card>
      </div>

      {/* Rural vs Urban Access */}
      <Card className="p-6 border-gray-200 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Rural vs Urban Digital Access</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={locationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="location" />
            <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="access" fill="#10b981" name="Internet Access %" radius={[8, 8, 0, 0]} />
            <Bar dataKey="population" fill="#64748b" name="Population %" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Urban Access Rate</p>
            <p className="text-3xl font-bold text-green-600">65.3%</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Rural Access Rate</p>
            <p className="text-3xl font-bold text-red-600">31.8%</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-900">
            <span className="font-semibold">Urban-Rural Gap: 33.5 percentage points</span> -
            This represents a critical inclusion challenge requiring targeted interventions.
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Sources:</strong> PSA (2024). <em>Community-Based Monitoring System (CBMS)</em>; DICT (2024). <em>National Broadband Plan Progress Report</em>.
          </p>
        </div>
      </Card>

      {/* Most Underserved Groups */}
      <Card className="p-6 border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Most Underserved Groups</h2>
        <div className="space-y-4">
          {underservedGroups.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="font-medium text-gray-900">{item.group}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 mr-2">National: {item.nationalGap}%</span>
                  <span className="text-sm font-semibold text-amber-700">Caraga: {item.caragaGap}% gap</span>
                </div>
              </div>
              <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full ${item.color} transition-all opacity-40`}
                  style={{ width: `${item.nationalGap}%` }}
                ></div>
                <div
                  className={`absolute left-0 top-0 h-full ${item.color} transition-all`}
                  style={{ width: `${item.caragaGap}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Priority Action Required</h3>
              <p className="text-sm text-gray-700">
                Focus interventions on Indigenous Peoples (71.4% gap) and Rural Women (64.2% gap)
                to achieve meaningful progress on inclusion targets per Philippine Development Plan 2023-2028.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            <strong>Sources:</strong> National Commission on Indigenous Peoples (NCIP) (2024). <em>IP Communities Digital Access Study</em>; Philippine Commission on Women (PCW) & DICT (2024). <em>Gender-Disaggregated ICT Data</em>; NCDA (2024). <em>PWD Inclusion Survey</em>.
          </p>
        </div>
      </Card>

      {/* Age Group Analysis */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Ages 15-24 (Caraga vs Nat)</p>
          <p className="text-3xl font-bold text-amber-600">52.4% <span className="text-lg text-gray-400">/ 68.2%</span></p>
          <p className="text-xs text-gray-600 mt-1">Internet access rate</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Ages 25-44 (Caraga vs Nat)</p>
          <p className="text-3xl font-bold text-amber-600">44.1% <span className="text-lg text-gray-400">/ 61.4%</span></p>
          <p className="text-xs text-gray-600 mt-1">Internet access rate</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Ages 45-59 (Caraga vs Nat)</p>
          <p className="text-3xl font-bold text-amber-600">31.5% <span className="text-lg text-gray-400">/ 47.3%</span></p>
          <p className="text-xs text-gray-600 mt-1">Internet access rate</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Ages 60+ (Caraga vs Nat)</p>
          <p className="text-3xl font-bold text-amber-600">14.2% <span className="text-lg text-gray-400">/ 28.9%</span></p>
          <p className="text-xs text-gray-600 mt-1">Internet access rate</p>
        </Card>
      </div>

      {/* Comprehensive Data Sources */}
      <Card className="p-6 border-gray-200 bg-blue-50 mt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Comprehensive Data Sources & References:</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            1. Philippine Statistics Authority (PSA). (2024). <em>National ICT Household Survey & Community-Based Monitoring System (CBMS)</em>. Retrieved from{" "}
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
            2. Department of Information and Communications Technology (DICT). (2024). <em>National Broadband Plan Progress Report & PWD Digital Access Survey</em>.
          </p>
          <p>
            3. National Commission on Indigenous Peoples (NCIP). (2024). <em>Indigenous Peoples Communities Digital Access Study</em>.
          </p>
          <p>
            4. Philippine Commission on Women (PCW) & DICT. (2024). <em>Gender-Disaggregated ICT Statistics</em>.
          </p>
          <p>
            5. UN Women Philippines. (2024). <em>Digital Gender Gap in the Philippines Report</em>.
          </p>
          <p>
            6. National Council on Disability Affairs (NCDA) & PSA. (2024). <em>Philippine Disability Statistics & PWD Inclusion Survey</em>.
          </p>
          <p>
            7. National Economic and Development Authority (NEDA). (2023). <em>Philippine Development Plan 2023-2028: Digital Transformation Strategy</em>.
          </p>
          <p>
            8. ITU. (2024). <em>Digital Inclusion Metrics - Philippines</em>; World Bank. (2024). <em>Philippines Digital Economy Report</em>.
          </p>
          <p className="text-xs text-gray-600 mt-4 pt-3 border-t border-gray-300">
            <strong>Methodology Note:</strong> Digital Inclusion Gap Index is calculated using the Gini coefficient methodology adapted for digital access inequality across demographic groups (gender, age, disability status, geographic location, and ethnicity). Higher scores indicate greater inequality in digital access. Data aggregated from national surveys, administrative records, and international development organization reports. Collection period: January-March 2024. Data last updated: April 2026.
          </p>
          <p className="text-xs font-semibold text-amber-800 mt-3 p-3 bg-amber-50 rounded border border-amber-200">
            ⭐ <strong>Study Focus:</strong> Region XIII (Caraga) serves as the primary geographic focus for digital inclusion interventions targeting underserved groups including rural women, persons with disabilities, indigenous peoples, and senior citizens.
          </p>
        </div>
      </Card>
    </div>
  );
}
