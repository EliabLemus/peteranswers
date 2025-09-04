export function FloatingOrbs() {
  return (
    <>
      <div className="floating-orb orb-1 absolute w-2 h-2 bg-gradient-radial from-yellow-400 to-transparent rounded-full opacity-60 animate-float" 
           style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
      <div className="floating-orb orb-2 absolute w-2 h-2 bg-gradient-radial from-yellow-400 to-transparent rounded-full opacity-60 animate-float" 
           style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
      <div className="floating-orb orb-3 absolute w-2 h-2 bg-gradient-radial from-yellow-400 to-transparent rounded-full opacity-60 animate-float" 
           style={{ bottom: '30%', left: '20%', animationDelay: '2s' }} />
      <div className="floating-orb orb-4 absolute w-2 h-2 bg-gradient-radial from-yellow-400 to-transparent rounded-full opacity-60 animate-float" 
           style={{ top: '40%', right: '30%', animationDelay: '3s' }} />
    </>
  );
}
