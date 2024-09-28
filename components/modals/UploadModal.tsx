import React, { useState } from 'react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (date: string, file: File) => void;
}

function UploadModal({ isOpen, onClose, onSubmit }: UploadModalProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDate && selectedFile) {
      const formData = new FormData();
      formData.append('date', selectedDate);
      formData.append('file', selectedFile);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        console.log(result);
        onSubmit(selectedDate, selectedFile);
        onClose(); // Fecha o modal após o envio
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      alert("Por favor, selecione uma data e um arquivo.");
    }
  };

  if (!isOpen) return null; // Retorna null se o modal não estiver aberto

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Upar Nova Escala</h3>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Selecione a data:
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
              Selecione o arquivo:
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;
