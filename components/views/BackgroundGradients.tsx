"use client";

export function BackgroundGradients() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-[#050511]" />
      
      {/* Hero area - top right glow */}
      <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-[#2035ae]/8 rounded-full blur-[180px]" />
      
      {/* Hero area - left purple glow */}
      <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-[#9e67c5]/6 rounded-full blur-[150px]" />
      
      {/* Middle section - centered blue glow */}
      <div className="absolute top-[60vh] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#2035ae]/5 rounded-full blur-[200px]" />
      
      {/* Case studies area - right purple */}
      <div className="absolute top-[100vh] -right-20 w-[600px] h-[600px] bg-[#9e67c5]/5 rounded-full blur-[180px]" />
      
      {/* Services area - left blue */}
      <div className="absolute top-[150vh] -left-40 w-[500px] h-[500px] bg-[#8fc2e6]/5 rounded-full blur-[150px]" />
      
      {/* Contact area - centered glow */}
      <div className="absolute top-[200vh] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2035ae]/6 rounded-full blur-[180px]" />
      
      {/* Footer area - right glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2035ae]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-40 w-[300px] h-[300px] bg-[#9e67c5]/4 rounded-full blur-[100px]" />
    </div>
  );
}

