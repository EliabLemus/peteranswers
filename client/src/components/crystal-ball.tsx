import { Star } from "lucide-react";

export function CrystalBall() {
  return (
    <div className="text-center mb-12">
      <div className="relative inline-block">
        <div className="crystal-ball w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto animate-float relative overflow-hidden">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/30 blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400/70">
            <Star className="w-16 h-16 animate-pulse" fill="currentColor" />
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent rounded-full blur-md"></div>
      </div>
    </div>
  );
}
