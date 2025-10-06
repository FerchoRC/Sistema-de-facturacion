import { useState } from "react";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";
import TextareaField from "../ui/TextareaField";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateWithAiModel = ({isOpen, onClose}) => {

  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!text.trim()){
      toast.error('Ingresa el texto para generar la factura');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post(API_PATHS.AI.PARSE_INVOICE_TEXT, { text });
      const invoiceData = response.data;

      toast.success('Informacion de la factura guardada exitosamente!');
      onClose();

      navigate('/invoices/new', { state: { aiData: invoiceData }});
    } catch (error) {
      toast.error('Error generando la factura con el texto.');
      console.error('Error al procesar con IA:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black/10 bg-opacity-50 transition-opacity" onClick={onClose}></div>

        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative text-left transform transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
              Crear Factura con IA
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">&times;</button>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              Copia un texto que contenga datos de la factura como: nombre del cliente, productos, cantidad y precios, la IA intentara crear una factura con estos datos
            </p>
            <TextareaField
              name="InvoiceText"
              label="Copia el texto aqui"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Texto"
              rows={8} 
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="secondary" onClick={onClose}>Cancelar</Button>
            <Button onClick={handleGenerate} isLoading={isLoading}>
              {isLoading ? 'Generando..' : 'Crear Factura'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateWithAiModel