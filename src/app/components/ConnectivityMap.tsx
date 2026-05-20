import { useState } from "react";
import { MapPin, Wifi, Filter, Search } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import dictData from "../../data/dict-regional-comparison-2026.json";

const getRegionMockData = (regionName: string) => {
  const isCaraga = regionName.includes("Caraga");
  if (isCaraga) return { connectivity: "poor", cost: "₱595", competition: "Low", underserved: 61.4 };
  if (regionName.includes("NCR")) return { connectivity: "strong", cost: "₱850", competition: "High", underserved: 12 };
  if (regionName.includes("Cebu")) return { connectivity: "strong", cost: "₱720", competition: "High", underserved: 18 };
  if (regionName.includes("Davao")) return { connectivity: "moderate", cost: "₱680", competition: "Medium", underserved: 25 };
  if (regionName.includes("Iloilo")) return { connectivity: "moderate", cost: "₱650", competition: "Medium", underserved: 34 };
  return { connectivity: "poor", cost: "₱550", competition: "Low", underserved: 61 };
};

const regions = dictData.regionalComparison.map(r => ({
  name: r.region,
  speed: r.speed,
  isFocus: r.isFocus,
  ...getRegionMockData(r.region)
}));

export function ConnectivityMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [filterSpeed, setFilterSpeed] = useState<string>("all");
  const [filterCost, setFilterCost] = useState<string>("all");

  const getConnectivityColor = (connectivity: string) => {
    if (connectivity === "strong") return "bg-green-500";
    if (connectivity === "moderate") return "bg-yellow-500";
    return "bg-red-500";
  };

  const getConnectivityLabel = (connectivity: string) => {
    if (connectivity === "strong") return "Strong";
    if (connectivity === "moderate") return "Moderate";
    return "Poor";
  };

  return (
    <div className="h-full flex bg-gray-50">
      {/* Map Area */}
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Connectivity & Digital Divide Map</h1>
          <p className="text-gray-600 mt-1">Interactive visualization of internet access across the Philippines</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-3">
  <div className="flex-1 relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    
    <Input
      placeholder="Search location..."
      className="w-full pl-10"
    />
  </div>

        <Select value={filterSpeed} onValueChange={setFilterSpeed}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Internet Speed" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Speeds</SelectItem>
            <SelectItem value="slow">Slow</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="fast">Fast</SelectItem>
          </SelectContent>
        </Select>
          <Select value={filterCost} onValueChange={setFilterCost}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Cost Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Costs</SelectItem>
              <SelectItem value="high">&gt; ₱800</SelectItem>
              <SelectItem value="medium">₱600-800</SelectItem>
              <SelectItem value="low">&lt; ₱600</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Simplified Map Visualization */}
        <Card className="p-0 overflow-hidden border-gray-200 h-[600px]">
          <div className="relative h-full bg-gradient-to-br from-blue-50 to-green-50 p-8">
            {/* Map Legend */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-4 space-y-2">
              <p className="text-sm font-semibold text-gray-900 mb-2">Connectivity Status</p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-700">Strong</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm text-gray-700">Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-700">Poor</span>
              </div>
            </div>

            {/* Region Markers */}
            <div className="relative w-full h-full">
              {regions.map((region, index) => {
                const positions = [
                  { top: "48%", left: "55%" }, // Caraga (Region XIII) - FOCUS
                  { top: "15%", left: "45%" }, // Metro Manila
                  { top: "35%", left: "50%" }, // Cebu
                  { top: "55%", left: "52%" }, // Davao
                  { top: "30%", left: "42%" }, // Iloilo
                  { top: "40%", left: "35%" }, // Palawan
                ];

                return (
                  <button
                    key={region.name}
                    onClick={() => setSelectedRegion(region.name)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 ${
                      selectedRegion === region.name ? "scale-125 z-10" : ""
                    } ${region.isFocus ? "z-20" : ""}`}
                    style={{ top: positions[index].top, left: positions[index].left }}
                  >
                    <div className="relative">
                      {region.isFocus && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center z-30 animate-bounce">
                          <span className="text-white text-xs font-bold">⭐</span>
                        </div>
                      )}
                      <div
                        className={`w-12 h-12 rounded-full ${
                          region.isFocus ? "bg-amber-500" : getConnectivityColor(region.connectivity)
                        } opacity-20 animate-pulse`}
                      ></div>
                      <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                          region.isFocus ? "w-8 h-8 ring-4 ring-amber-300" : "w-6 h-6"
                        } rounded-full ${
                          region.isFocus ? "bg-amber-600" : getConnectivityColor(region.connectivity)
                        } shadow-lg flex items-center justify-center`}
                      >
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className={`mt-2 text-xs font-medium ${region.isFocus ? "bg-amber-100 border-2 border-amber-500" : "bg-white"} px-2 py-1 rounded shadow-sm whitespace-nowrap ${region.isFocus ? "font-bold text-amber-900" : "text-gray-900"}`}>
                      {region.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>
      </div>

      {/* Side Panel */}
      <div className="w-96 bg-white border-l border-gray-200 p-6 overflow-y-auto">
        {selectedRegion ? (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {selectedRegion}
            </h2>
            {regions
              .filter((r) => r.name === selectedRegion)
              .map((region) => (
                <div key={region.name} className="space-y-6">
                  {region.isFocus && (
                    <div className="p-4 bg-amber-50 border-2 border-amber-300 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">⭐</span>
                        <h3 className="font-bold text-amber-900">Primary Study Focus Area</h3>
                      </div>
                      <p className="text-sm text-amber-800">
                        This region is the main focus of the digital inclusion study. Interventions and programs are prioritized here.
                      </p>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-3 h-3 rounded-full ${getConnectivityColor(region.connectivity)}`}></div>
                      <span className="font-semibold text-gray-900">
                        {getConnectivityLabel(region.connectivity)} Connectivity
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Average Speed</span>
                        <span className="font-semibold text-gray-900">{region.speed} Mbps</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Average Cost</span>
                        <span className="font-semibold text-gray-900">{region.cost}/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Market Competition</span>
                        <Badge
                          variant={
                            region.competition === "High"
                              ? "default"
                              : region.competition === "Medium"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {region.competition}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Underserved Areas</span>
                        <span className="font-semibold text-red-600">{region.underserved}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Available Providers</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Globe Telecom</p>
                          <p className="text-xs text-gray-600">25 Mbps • ₱{parseInt(region.cost.replace(/[₱,]/g, ''))}</p>
                        </div>
                        <Wifi className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Smart Communications</p>
                          <p className="text-xs text-gray-600">30 Mbps • ₱{parseInt(region.cost.replace(/[₱,]/g, '')) + 50}</p>
                        </div>
                        <Wifi className="w-4 h-4 text-green-600" />
                      </div>
                      {region.competition !== "Low" && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">DITO Telecommunity</p>
                            <p className="text-xs text-gray-600">20 Mbps • ₱{parseInt(region.cost.replace(/[₱,]/g, '')) - 100}</p>
                          </div>
                          <Wifi className="w-4 h-4 text-purple-600" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">School Access</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Schools with internet</span>
                        <span className="font-semibold">{100 - region.underserved}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${100 - region.underserved}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Detailed Report
                  </Button>
                </div>
              ))}
          </>
        ) : (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Select a Region</h3>
            <p className="text-sm text-gray-600">
              Click on any location marker to view detailed connectivity statistics
            </p>
            
            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 text-left">Quick Stats</h4>
              <Card className="p-3 border-gray-200 text-left">
                <p className="text-sm text-gray-600">Total Regions</p>
                <p className="text-2xl font-bold text-gray-900">{regions.length}</p>
              </Card>
              <Card className="p-3 border-gray-200 text-left">
                <p className="text-sm text-gray-600">Avg. Speed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(regions.reduce((acc, r) => acc + r.speed, 0) / regions.length)} Mbps
                </p>
              </Card>
              <Card className="p-3 border-gray-200 text-left">
                <p className="text-sm text-gray-600">High-Need Areas</p>
                <p className="text-2xl font-bold text-red-600">
                  {regions.filter((r) => r.underserved > 50).length}
                </p>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
