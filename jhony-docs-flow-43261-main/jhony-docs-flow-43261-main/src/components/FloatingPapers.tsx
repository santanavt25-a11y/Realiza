import { FileText } from "lucide-react";

const FloatingPapers = () => {
  const papers = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    duration: `${15 + Math.random() * 10}s`,
    size: 24 + Math.random() * 32,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {papers.map((paper) => (
        <div
          key={paper.id}
          className="absolute opacity-[0.03] animate-float-paper"
          style={{
            left: paper.left,
            animationDelay: paper.animationDelay,
            animationDuration: paper.duration,
            top: '-10%',
          }}
        >
          <FileText 
            size={paper.size}
            className="text-primary"
            style={{
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingPapers;
