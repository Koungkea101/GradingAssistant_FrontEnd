interface UploadAreaProps {
  type: 'question' | 'answer'
  title: string
  onFileSelect: (files: FileList | null) => void
  dragOver: string | null
  onDragOver: (e: React.DragEvent, type: 'question' | 'answer') => void
  onDragLeave: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent, type: 'question' | 'answer') => void
  inputRef: React.RefObject<HTMLInputElement | null>
}

export default function UploadArea ({
  type,
  title,
  onFileSelect,
  dragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  inputRef
}: UploadAreaProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragOver === type
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={(e) => onDragOver(e, type)}
        onDragLeave={onDragLeave}
        onDrop={(e) => onDrop(e, type)}
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-gray-600 mb-2">Drag your image here, or browse</p>
          <p className="text-sm text-gray-400 mb-4">Supports: PNG and JPG only</p>
          <button
            onClick={() => inputRef.current?.click()}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Select Image
          </button>
          <input
            ref={inputRef}
            type="file"
            accept=".png,.jpg,.jpeg"
            multiple
            className="hidden"
            onChange={(e) => onFileSelect(e.target.files)}
          />
        </div>
      </div>
    </div>
  );
}
