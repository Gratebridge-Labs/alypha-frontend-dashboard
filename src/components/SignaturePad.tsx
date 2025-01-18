'use client';
import { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

interface SignaturePadProps {
  onChange: (signature: string) => void;
}

export default function SignaturePad({ onChange }: SignaturePadProps) {
  const canvasRef = useRef<any>(null);

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleSave = () => {
    const signature = canvasRef.current?.getSaveData();
    onChange(signature);
  };

  return (
    <div className="space-y-2">
      <div className="border-2 border-dashed border-black/[.08] dark:border-white/[.08] rounded-lg overflow-hidden">
        <CanvasDraw
          ref={canvasRef}
          brushColor="currentColor"
          backgroundColor="transparent"
          canvasWidth={400}
          canvasHeight={200}
          className="w-full"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={handleClear}
          className="px-2 py-1 text-xs border border-black/[.08] dark:border-white/[.08] rounded-lg"
        >
          Clear
        </button>
        <button
          onClick={handleSave}
          className="px-2 py-1 text-xs bg-black dark:bg-white text-white dark:text-black rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
} 