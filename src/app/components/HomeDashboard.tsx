import { AlertCircle, TrendingUp, Smartphone, MessageSquare, Wifi } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { Progress } from "./ui/progress";
import dictData from "../../data/dict-digital-literacy-2024.json";
import psaData from "../../data/psa-ict-household-2024.json";

export function HomeDashboard() {
  const caragaLiteracy = dictData.regionalDigitalLiteracy.find(r => r.isFocus);
  const caragaAccess = psaData.regionalInternetAccess.find(r => r.isFocus);
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to DigiBridge AI+</h1>
        <p className="text-gray-600 mt-2">Your Digital Inclusion Dashboard</p>
      </div>

      {/* Caraga Region Focus Banner */}
      <Card className="p-6 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">XIII</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-gray-900">Region XIII - Caraga</h2>
                <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  STUDY FOCUS AREA
                </span>
              </div>
              <p className="text-sm text-gray-700">
                Agusan del Norte • Agusan del Sur • Surigao del Norte • Surigao del Sur • Dinagat Islands
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Internet Access Rate</p>
            <p className="text-3xl font-bold text-amber-700">{caragaAccess?.accessRate}%</p>
            <p className="text-xs text-gray-500 mt-1">Pop: {(caragaAccess?.population || 0).toLocaleString()}</p>
            <p className="text-xs text-gray-500">Digital Lit: {caragaLiteracy?.score}</p>
          </div>
        </div>
      </Card>

      {/* Alert */}
      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
        <div>
          <p className="text-amber-900 font-medium">You are overspending on mobile data</p>
          <p className="text-sm text-amber-700 mt-1">
            You're spending 18% of your monthly income on data. Consider switching to a more affordable plan.
          </p>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Connectivity Status */}
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Connectivity Status</p>
              <p className="text-2xl font-bold text-green-600">Good</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Speed:</span>
              <span className="font-medium">25 Mbps</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Reliability:</span>
              <span className="font-medium">94%</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
            </div>
          </div>
        </Card>

        {/* Affordability Status */}
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Affordability</p>
              <p className="text-2xl font-bold text-amber-600">18%</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-3">of income spent on data</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly cost:</span>
              <span className="font-medium">₱850</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Benchmark:</span>
              <span className="font-medium text-green-600">5-10%</span>
            </div>
          </div>
        </Card>

        {/* Device Access */}
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Device Access</p>
              <p className="text-2xl font-bold text-blue-600">Shared</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Primary device:</span>
              <span className="font-medium">Smartphone</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shared with:</span>
              <span className="font-medium">3 people</span>
            </div>
          </div>
        </Card>

        {/* AI Assistant */}
        <Card className="p-6 border-gray-200 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Need Help?</p>
              <p className="text-lg font-bold text-gray-900">Ask DigiBridge AI</p>
            </div>
          </div>
          <Link to="/chatbot">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Start Conversation
            </Button>
          </Link>
        </Card>
      </div>

      {/* Suggested Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">AI-Generated Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-5 border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Switch to Budget Plan</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Save ₱300/month by switching to Globe's GoSAKTO99 plan. Same speed, better value.
                </p>
                <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  View Details
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Wifi className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Free Wi-Fi Nearby</h3>
                <p className="text-sm text-gray-600 mb-3">
                  There are 3 public Wi-Fi spots within 500m. Use them to save on data costs.
                </p>
                <Link to="/map">
                  <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Show Map
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Learning Progress</h3>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-3xl font-bold text-gray-900">7/12</p>
              <p className="text-sm text-gray-600">Modules completed</p>
            </div>
            <div className="flex-1">
              <Progress value={58} className="h-2" />
            </div>
          </div>
          <Link to="/learning">
            <Button variant="link" className="mt-4 p-0 text-blue-600">
              Continue learning →
            </Button>
          </Link>
        </Card>

        <Card className="p-6 border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Data Usage This Month</h3>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-3xl font-bold text-gray-900">8.2 GB</p>
              <p className="text-sm text-gray-600">of 10 GB</p>
            </div>
            <div className="flex-1">
              <Progress value={82} className="h-2" />
            </div>
          </div>
          <p className="text-sm text-amber-600 mt-4">⚠️ Running low on data</p>
        </Card>

        <Card className="p-6 border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Community Support</h3>
          <div>
            <p className="text-3xl font-bold text-gray-900">2</p>
            <p className="text-sm text-gray-600 mb-4">New interventions in your area</p>
          </div>
          <Link to="/interventions">
            <Button variant="link" className="p-0 text-blue-600">
              View programs →
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
