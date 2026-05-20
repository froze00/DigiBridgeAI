import { WifiOff, Download, MessageSquare, RefreshCw, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const cachedContent = [
  { id: 1, title: "Basic Digital Literacy Course", type: "Learning", size: "12 MB", synced: "2 hours ago" },
  { id: 2, title: "My Learning Progress", type: "Data", size: "0.5 MB", synced: "2 hours ago" },
  { id: 3, title: "Internet Plans Comparison", type: "Data", size: "1.2 MB", synced: "1 day ago" },
  { id: 4, title: "Nearby Wi-Fi Locations", type: "Map Data", size: "3 MB", synced: "2 days ago" },
];

const smsCommands = [
  { command: "STATUS", description: "Check your connectivity status" },
  { command: "DATA", description: "View your data usage" },
  { command: "PLANS", description: "Get affordable plan recommendations" },
  { command: "WIFI", description: "Find nearby free Wi-Fi spots" },
  { command: "HELP", description: "Get help and support" },
];

export function OfflineMode() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
            <WifiOff className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Offline / Low Connectivity Mode</h1>
            <p className="text-gray-600 mt-1">Access essential features without internet</p>
          </div>
        </div>
      </div>

      {/* Connection Status */}
      <Card className="p-6 border-amber-200 bg-amber-50 mb-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-900">Limited Connectivity Detected</h2>
              <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300">
                Offline Mode Active
              </Badge>
            </div>
            <p className="text-gray-700 mb-4">
              You're currently in offline mode. You can still access cached content and use SMS features. 
              Content will sync automatically when you're back online.
            </p>
            <Button variant="outline" size="sm" className="text-amber-700 border-amber-700 hover:bg-amber-100">
              <RefreshCw className="w-4 h-4 mr-2" />
              Check Connection
            </Button>
          </div>
        </div>
      </Card>

      {/* Cached Content */}
      <Card className="p-6 border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Cached Content Available</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Download className="w-4 h-4" />
            <span>16.7 MB cached</span>
          </div>
        </div>

        <div className="space-y-3">
          {cachedContent.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  {item.type === "Learning" ? (
                    <Download className="w-5 h-5 text-blue-600" />
                  ) : (
                    <RefreshCw className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-600">{item.type}</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">{item.size}</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-green-600">Synced {item.synced}</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Open
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Tip:</strong> Download more content while online to access it later without internet.
          </p>
        </div>
      </Card>

      {/* SMS Interaction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-6 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">SMS Service</h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Access DigiBridge AI+ services via SMS even without internet connection.
            </p>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-900 font-medium mb-2">Send SMS to:</p>
              <p className="text-2xl font-bold text-green-700">2600</p>
              <p className="text-xs text-green-700 mt-1">Standard SMS rates apply</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Available Commands:</h3>
            <div className="space-y-2">
              {smsCommands.map((cmd, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <code className="text-sm font-mono font-semibold text-gray-900 bg-gray-200 px-2 py-1 rounded">
                        {cmd.command}
                      </code>
                      <p className="text-sm text-gray-600 mt-1">{cmd.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Sync Status */}
        <Card className="p-6 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Sync Status</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Profile Data</p>
                <p className="text-sm text-gray-600">Last synced 2 hours ago</p>
              </div>
              <RefreshCw className="w-5 h-5 text-green-600" />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Learning Progress</p>
                <p className="text-sm text-gray-600">Last synced 2 hours ago</p>
              </div>
              <RefreshCw className="w-5 h-5 text-green-600" />
            </div>

            <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Pending Updates</p>
                <p className="text-sm text-amber-700">3 items waiting to sync</p>
              </div>
              <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300">
                Pending
              </Badge>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled>
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync When Online
          </Button>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Pending Changes:</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Course progress: Module 7 completed</li>
              <li>• Profile update: Phone number changed</li>
              <li>• Quiz results: Basic Digital Literacy</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Offline Features */}
      <Card className="p-6 border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Available Offline Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-blue-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
              <Download className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Downloaded Courses</h3>
            <p className="text-sm text-gray-600 mb-3">
              Access all downloaded learning materials without internet
            </p>
            <Button size="sm" variant="outline">View Courses</Button>
          </div>

          <div className="p-5 bg-green-50 rounded-lg">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-3">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">SMS Support</h3>
            <p className="text-sm text-gray-600 mb-3">
              Get help and information via text message
            </p>
            <Button size="sm" variant="outline">Send SMS</Button>
          </div>

          <div className="p-5 bg-purple-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
              <RefreshCw className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Auto Sync</h3>
            <p className="text-sm text-gray-600 mb-3">
              Changes sync automatically when connection is restored
            </p>
            <Button size="sm" variant="outline">Settings</Button>
          </div>
        </div>
      </Card>

      {/* Data Saving Tips */}
      <Card className="p-6 border-blue-200 bg-blue-50 mt-8">
        <h3 className="font-semibold text-gray-900 mb-3">💡 Tips for Low Connectivity</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Download courses and materials while connected to Wi-Fi</li>
          <li>• Use SMS commands (text "HELP" to 2600) for quick information</li>
          <li>• Enable auto-sync to update content when connection improves</li>
          <li>• Cached data is stored for 7 days before automatic cleanup</li>
          <li>• Visit nearby public Wi-Fi spots to sync and download new content</li>
        </ul>
      </Card>
    </div>
  );
}
