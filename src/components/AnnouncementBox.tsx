import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Gem } from "lucide-react";

export default function AnnouncementBox() {
  const announcements = [
     
    {
      id: 7,
      title: "New Batch Starting Soon",
      content: "Certifiblah blah bahasjdcate course in Gemology starting from March 1st, 2025. Limited seats available.",
      date: "Feb 15, 2025",
      type: "New Course"
    },
     {
      id: 7,
      title: "New Batch Starting Soon",
      content: "Certifiblah blah bahasjdcate course in Gemology starting from March 1st, 2025. Limited seats available.",
      date: "Feb 15, 2025",
      type: "New Course"
    },
     {
      id: 7,
      title: "New Batch Starting Soon",
      content: "Certifiblah blah bahasjdcate course in Gemology starting from March 1st, 2025. Limited seats available.",
      date: "Feb 15, 2025",
      type: "New Course"
    },
     {
      id: 7,
      title: "New Batch Starting Soon",
      content: "Certifiblah blah bahasjdcate course in Gemology starting from March 1st, 2025. Limited seats available.",
      date: "Feb 15, 2025",
      type: "New Course"
    },
     {
      id: 7,
      title: "New Batch Starting Soon",
      content: "Certifiblah blah bahasjdcate course in Gemology starting from March 1st, 2025. Limited seats available.",
      date: "Feb 15, 2025",
      type: "New Course"
    }

  ];

  return (
    <Card className="w-full bg-white shadow-xl border border-blue-100 rounded-xl">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-xl">
        <CardTitle className="flex items-center gap-3 text-blue-900">
          <span className="font-bold">Announcements</span>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse ml-auto"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-64 w-full">
          <div className="p-4 space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border-l-4 border-blue-600 pl-3 pb-3 border-b border-gray-100 last:border-b-0 hover:bg-blue-50 transition-colors duration-200 rounded-r-lg pr-3"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{announcement.title}</h4>
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-0">
                    {announcement.type}
                  </Badge>
                </div>
                <p className="text-gray-600 text-xs mb-1 leading-relaxed">{announcement.content}</p>
                <p className="text-xs text-blue-600 font-medium">{announcement.date}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}