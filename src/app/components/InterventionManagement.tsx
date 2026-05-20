import { Plus, MapPin, Wifi, Laptop, DollarSign, Activity } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const interventions = [
  {
    id: 1,
    name: "Community Wi-Fi Hub - Barangay San Jose",
    type: "Wi-Fi Hub",
    location: "Barangay San Jose, Metro Manila",
    status: "Ongoing",
    budget: "₱250,000",
    beneficiaries: 450,
    startDate: "Jan 2026",
    completion: 65
  },
  {
    id: 2,
    name: "Student Device Distribution Program",
    type: "Device Distribution",
    location: "Cebu City",
    status: "Planned",
    budget: "₱1,200,000",
    beneficiaries: 200,
    startDate: "May 2026",
    completion: 0
  },
  {
    id: 3,
    name: "Internet Subsidy for Low-Income Families",
    type: "Subsidy Program",
    location: "Davao Region",
    status: "Ongoing",
    budget: "₱850,000",
    beneficiaries: 340,
    startDate: "Feb 2026",
    completion: 40
  },
  {
    id: 4,
    name: "School Connectivity Upgrade",
    type: "Wi-Fi Hub",
    location: "Iloilo Province",
    status: "Completed",
    budget: "₱450,000",
    beneficiaries: 1200,
    startDate: "Nov 2025",
    completion: 100
  },
  {
    id: 5,
    name: "Rural Access Point Installation",
    type: "Wi-Fi Hub",
    location: "Palawan",
    status: "Ongoing",
    budget: "₱680,000",
    beneficiaries: 280,
    startDate: "Mar 2026",
    completion: 55
  },
  {
    id: 6,
    name: "Caraga Region Digital Inclusion Initiative",
    type: "Comprehensive Program",
    location: "Region XIII (Caraga)",
    status: "Planned",
    budget: "₱3,500,000",
    beneficiaries: 2500,
    startDate: "Jul 2026",
    completion: 0
  },
];

export function InterventionManagement() {
  const getStatusBadge = (status: string) => {
    if (status === "Completed") return "default";
    if (status === "Ongoing") return "secondary";
    return "outline";
  };

  const getTypeIcon = (type: string) => {
    if (type === "Wi-Fi Hub") return <Wifi className="w-4 h-4" />;
    if (type === "Device Distribution") return <Laptop className="w-4 h-4" />;
    if (type === "Comprehensive Program") return <Activity className="w-4 h-4" />;
    return <DollarSign className="w-4 h-4" />;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Intervention Management</h1>
          <p className="text-gray-600 mt-2">LGU Digital Inclusion Programs</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create New Intervention
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Total Programs</p>
          <p className="text-3xl font-bold text-gray-900">{interventions.length}</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Total Budget</p>
          <p className="text-3xl font-bold text-blue-600">
            ₱{(interventions.reduce((acc, i) => acc + parseInt(i.budget.replace(/[₱,]/g, '')), 0) / 1000000).toFixed(1)}M
          </p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Beneficiaries</p>
          <p className="text-3xl font-bold text-green-600">
            {interventions.reduce((acc, i) => acc + i.beneficiaries, 0).toLocaleString()}
          </p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Active Programs</p>
          <p className="text-3xl font-bold text-purple-600">
            {interventions.filter(i => i.status === "Ongoing").length}
          </p>
        </Card>
      </div>

      {/* Interventions Table */}
      <Card className="border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Beneficiaries</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interventions.map((intervention) => (
              <TableRow key={intervention.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-gray-900">{intervention.name}</p>
                    <p className="text-sm text-gray-600">Started: {intervention.startDate}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(intervention.type)}
                    <span className="text-sm">{intervention.type}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{intervention.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadge(intervention.status)}>
                    {intervention.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{intervention.budget}</TableCell>
                <TableCell className="text-center font-medium">
                  {intervention.beneficiaries.toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className="w-24">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600"
                          style={{ width: `${intervention.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {intervention.completion}%
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Map Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Intervention Locations</h2>
        <Card className="p-6 border-gray-200 h-96 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Interactive map visualization</p>
              <p className="text-sm text-gray-500 mt-2">
                Showing {interventions.length} intervention sites across the Philippines
              </p>
              
              {/* Simplified location markers */}
              <div className="mt-6 grid grid-cols-5 gap-4 max-w-2xl mx-auto">
                {interventions.map((intervention, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        intervention.status === "Completed"
                          ? "bg-green-500"
                          : intervention.status === "Ongoing"
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {getTypeIcon(intervention.type)}
                      <span className="text-white ml-1">{intervention.id}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center">
                      {intervention.location.split(',')[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Wi-Fi Hubs</h3>
              <p className="text-sm text-gray-600">
                {interventions.filter(i => i.type === "Wi-Fi Hub").length} programs
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Laptop className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Device Programs</h3>
              <p className="text-sm text-gray-600">
                {interventions.filter(i => i.type === "Device Distribution").length} programs
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Subsidies</h3>
              <p className="text-sm text-gray-600">
                {interventions.filter(i => i.type === "Subsidy Program").length} programs
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Comprehensive</h3>
              <p className="text-sm text-gray-600">
                {interventions.filter(i => i.type === "Comprehensive Program").length} programs
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
