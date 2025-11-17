import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";

export default function AnnouncementBox() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const SHEET_URL =
    "https://opensheet.elk.sh/17TtMjhpxO-C7fd-dYeWf2llRrUU7-y6K_0OCFcQ2T3Q/Sheet1";

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
          <div className="p-3 space-y-2 sm:p-4 sm:space-y-3">

            {loading && <p className="text-gray-600 text-xs mb-1 leading-snug sm:leading-relaxed">
Loading...</p>}

            {!loading && announcements.length === 0 && (
              <p className="text-gray-600 text-xs mb-1 leading-snug sm:leading-relaxed">
                No announcements available.</p>
            )}

            {announcements
              .slice()      // copy array
              .reverse()    // reverse order → newest first
              .map((a, i) => (
                <div
                  key={a.id || i}
                className="border-l-4 border-blue-600 pl-3 pb-3 border-b border-gray-100 
             last:border-b-0 hover:bg-blue-50 transition-colors duration-200 
             rounded-r-lg pr-3 text-left"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{a.title}</h4>

                    <Badge
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-0"
                    >
                      {a.type}
                    </Badge>
                  </div>

                  <p className="text-gray-600 text-xs mb-1 leading-snug sm:leading-relaxed">

                    {a.content}
                  </p>

                  <p className="text-xs text-blue-600 font-medium">{a.date}</p>
                </div>
              ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
