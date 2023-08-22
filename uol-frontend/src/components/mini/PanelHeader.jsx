import { User } from 'lucide-react';

function PanelHeader() {
    return (
            <div className="w-full h-16 flex align-start gap-5 border-b-2 border-gray-100">
                <User color="black" size={40} /> <h1 className="text-3xl font-semibold text-gray-600">Painel de Clientes</h1>
            </div>


    )
}

export default PanelHeader
