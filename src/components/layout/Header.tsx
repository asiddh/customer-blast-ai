import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, User, MessageSquare } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-twilio-red rounded-md flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-twilio-gray-900">Campaign Builder</h1>
              <p className="text-sm text-twilio-gray-600">Create and manage multi-channel campaigns</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-twilio-gray-600">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>All systems operational</span>
              </div>
              <div className="text-twilio-gray-600">Console</div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-twilio-gray-600 hover:text-twilio-gray-900">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-twilio-gray-600 hover:text-twilio-gray-900">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 bg-twilio-gray-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-twilio-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};