import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Image, 
  Type, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Plus,
  X,
  Eye
} from "lucide-react";

interface MessageComposerProps {
  message: {
    text: string;
    images: string[];
  };
  onMessageChange: (message: { text: string; images: string[] }) => void;
  channels: string[];
}

export const MessageComposer = ({ message, onMessageChange, channels }: MessageComposerProps) => {
  const [activePreview, setActivePreview] = useState(channels[0] || "sms");
  const [subject, setSubject] = useState("");

  const updateText = (text: string) => {
    onMessageChange({ ...message, text });
  };

  const addImage = () => {
    // In a real app, this would open a file picker
    const newImageUrl = `https://via.placeholder.com/400x300?text=Image+${message.images.length + 1}`;
    onMessageChange({
      ...message,
      images: [...message.images, newImageUrl]
    });
  };

  const removeImage = (index: number) => {
    onMessageChange({
      ...message,
      images: message.images.filter((_, i) => i !== index)
    });
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "sms": return <Smartphone className="h-4 w-4" />;
      case "email": return <Mail className="h-4 w-4" />;
      case "whatsapp": return <MessageSquare className="h-4 w-4" />;
      default: return null;
    }
  };

  const getChannelLimits = (channel: string) => {
    switch (channel) {
      case "sms": return { text: 160, images: 0 };
      case "email": return { text: 10000, images: 10 };
      case "whatsapp": return { text: 4096, images: 10 };
      default: return { text: 1000, images: 5 };
    }
  };

  const renderPreview = (channel: string) => {
    const limits = getChannelLimits(channel);
    const isOverLimit = message.text.length > limits.text;
    
    return (
      <div className="space-y-4">
        <div className={`p-4 rounded-lg border-2 ${
          channel === "sms" ? "border-channel-sms bg-channel-sms/5" :
          channel === "email" ? "border-channel-email bg-channel-email/5" :
          "border-channel-whatsapp bg-channel-whatsapp/5"
        }`}>
          <div className="flex items-center gap-2 mb-3">
            {getChannelIcon(channel)}
            <span className="font-medium capitalize">{channel} Preview</span>
          </div>
          
          {channel === "email" && subject && (
            <div className="mb-3 p-2 bg-background rounded border">
              <span className="text-sm font-medium">Subject: {subject}</span>
            </div>
          )}
          
          <div className="space-y-3">
            {message.text && (
              <div className={`p-3 rounded ${
                channel === "sms" ? "bg-white border" :
                channel === "email" ? "bg-background" :
                "bg-channel-whatsapp text-white"
              }`}>
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
            )}
            
            {message.images.length > 0 && channel !== "sms" && (
              <div className="grid grid-cols-2 gap-2">
                {message.images.slice(0, limits.images).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-3 text-xs text-muted-foreground">
            <span className={isOverLimit ? "text-destructive" : ""}>
              {message.text.length}/{limits.text} characters
            </span>
            {channel !== "sms" && (
              <span className="ml-4">
                {message.images.length}/{limits.images} images
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Type className="h-5 w-5 text-brand-orange" />
            Compose Your Message
          </CardTitle>
          <p className="text-muted-foreground">
            Create compelling content for your campaign. Preview how it will look across different channels.
          </p>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="compose" className="space-y-6">
            <TabsList>
              <TabsTrigger value="compose">Compose</TabsTrigger>
              <TabsTrigger value="preview">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="compose" className="space-y-6">
              {/* Email Subject (if email is selected) */}
              {channels.includes("email") && (
                <div className="space-y-2">
                  <Label htmlFor="subject">Email Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Enter email subject..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              )}

              {/* Message Text */}
              <div className="space-y-2">
                <Label htmlFor="message">Message Content</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  value={message.text}
                  onChange={(e) => updateText(e.target.value)}
                  className="min-h-32 resize-none"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{message.text.length} characters</span>
                  {channels.includes("sms") && message.text.length > 160 && (
                    <span className="text-warning">⚠ SMS messages over 160 characters may be split</span>
                  )}
                </div>
              </div>

              {/* Images (not for SMS) */}
              {channels.some(channel => channel !== "sms") && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Images</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addImage}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add Image
                    </Button>
                  </div>
                  
                  {message.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {message.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-24 object-cover rounded border"
                          />
                          <Button
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {channels.includes("sms") && message.images.length > 0 && (
                    <p className="text-sm text-warning">
                      ⚠ Images will not be included in SMS messages
                    </p>
                  )}
                </div>
              )}

              {/* Channel-specific warnings */}
              <div className="space-y-2">
                {channels.map(channel => {
                  const limits = getChannelLimits(channel);
                  const issues = [];
                  
                  if (message.text.length > limits.text) {
                    issues.push(`Text exceeds ${limits.text} character limit`);
                  }
                  if (message.images.length > limits.images) {
                    issues.push(`Too many images (max ${limits.images})`);
                  }
                  
                  if (issues.length > 0) {
                    return (
                      <div key={channel} className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          {getChannelIcon(channel)}
                          <span className="font-medium capitalize text-warning">{channel} Issues:</span>
                        </div>
                        <ul className="text-sm text-warning">
                          {issues.map((issue, index) => (
                            <li key={index}>• {issue}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </TabsContent>

            <TabsContent value="preview" className="space-y-6">
              <div className="flex gap-2 mb-4">
                {channels.map(channel => (
                  <Button
                    key={channel}
                    variant={activePreview === channel ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActivePreview(channel)}
                    className="flex items-center gap-2"
                  >
                    {getChannelIcon(channel)}
                    <span className="capitalize">{channel}</span>
                  </Button>
                ))}
              </div>
              
              {renderPreview(activePreview)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};