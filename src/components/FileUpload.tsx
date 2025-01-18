'use client';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

export default function FileUpload({ onUpload }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`h-40 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer
        ${isDragActive 
          ? 'border-black dark:border-white bg-black/[.02] dark:bg-white/[.02]' 
          : 'border-black/[.08] dark:border-white/[.08]'
        }`}
    >
      <input {...getInputProps()} />
      <div className="text-center">
        <svg className="w-8 h-8 mx-auto mb-2 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-sm text-black/40 dark:text-white/40">
          {isDragActive ? 'Drop signature here' : 'Drag & drop or click to upload'}
        </p>
      </div>
    </div>
  );
} 