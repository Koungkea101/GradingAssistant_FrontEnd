'use client'

import { useState, useRef } from 'react'
import UploadArea from '@/components/uploadArea'

interface UploadedFile {
  id: string
  name: string
  file: File
  type: 'question' | 'answer'
}

export default function GradingPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [dragOver, setDragOver] = useState<string | null>(null)
  const questionInputRef = useRef<HTMLInputElement>(null)
  const answerInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (files: FileList | null, type: 'question' | 'answer') => {
    if (!files) return

    const newFiles: UploadedFile[] = Array.from(files)
      .filter(file => file.type === 'image/png' || file.type === 'image/jpeg')
      .map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        file,
        type
      }))

    setUploadedFiles(prev => [...prev, ...newFiles])
  }

  const handleDragOver = (e: React.DragEvent, type: 'question' | 'answer') => {
    e.preventDefault()
    setDragOver(type)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(null)
  }

  const handleDrop = (e: React.DragEvent, type: 'question' | 'answer') => {
    e.preventDefault()
    setDragOver(null)
    handleFileUpload(e.dataTransfer.files, type)
  }

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
  }

  const handleGenerateScore = () => {
    // TODO: Implement API call to backend for grading
    console.log('Generating score with files:', uploadedFiles)
    alert('Score generation functionality will be implemented with backend integration')
  }



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI-Assisted Handwriting Grading Tool
          </h1>
        </div>

        {/* Question Upload */}
        <UploadArea
          type="question"
          title="Question Upload"
          onFileSelect={(files) => handleFileUpload(files, 'question')}
          dragOver={dragOver}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          inputRef={questionInputRef}
        />

        {/* Answer Upload */}
        <UploadArea
          type="answer"
          title="Answer Upload"
          onFileSelect={(files) => handleFileUpload(files, 'answer')}
          dragOver={dragOver}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          inputRef={answerInputRef}
        />

        {/* Uploaded Files Section */}
        {uploadedFiles.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Uploaded File</h2>
            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
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
                    <span className="text-gray-700">{file.name}</span>
                    <span className="ml-2 px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">
                      {file.type}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Generate Score Button */}
        <div className="text-right">
          <button
            onClick={handleGenerateScore}
            disabled={uploadedFiles.length === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              uploadedFiles.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Generate Score
          </button>
        </div>
      </div>
    </div>
  )
}
