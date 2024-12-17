interface ProgressDotsProps {
    total: number
    current: number
  }
  
  export function ProgressDots({ total, current }: ProgressDotsProps) {
    return (
      <div className="flex justify-center items-center gap-2 my-8">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`h-3 w-3 rounded-full ${
                i < current ? "bg-sky-700" : i === current ? "border-2 border-sky-600" : "border-2 border-sky-200"
              }`}
            />
            {i < total - 1 && (
              <div 
                className={`h-0.5 w-20 ${
                  i < current ? "bg-sky-700" : "bg-sky-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
  
  