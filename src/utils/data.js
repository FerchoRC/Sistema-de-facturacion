import { BarChart2, FileText, LayoutDashboard, Mail, Plus, Sparkles, Users } from "lucide-react";

export const FEATURES = [
    {
        icon: Sparkles,
        title: "Creación de Facturas",
        description:
            "Copia cualquier texto, correo o recibo, y deja que nuestra herramienta produzca al instante una factura completa"
    },
    {
        icon: BarChart2,
        title: "Dashboard Inteligente",
        description:
            "Obtén información inteligente y práctica sobre las finanzas de tu empresa, generada de forma automática"
    },
    {
        icon: Mail,
        title: "Notificaciones Inteligentes",
        description:
            "Genera automáticamente correos de recordatorio y facturas vencidas con un solo clic"
    },
    {
        icon: FileText,
        title: "Gestión Fácil de Facturas",
        description:
            "Gestiona sin esfuerzo todas tus facturas, supervisa pagos y envía recordatorios para pagos"
    },
]

export const TESTIMONIALS = [
    {
        quote: "La app de facturación es intuitiva y me ahorra tiempo, puedo enfocarme en el desarrollo sin preocuparme por lo administrativo.",
        author: "Pedro Ramirez",
        title: "Developer",
        avatar: "https://placehold.co/100x100/000000/ffffff?text=JD"
    },
    {
        quote: "Como diseñador, valoro la simplicidad. Esta app de facturación me facilita todo y no me quita tiempo creativo.",
        author: "Juan Correa",
        title: "Diseñador",
        avatar: "https://placehold.co/100x100/000000/ffffff?text=JS"
    },
    {
        quote: "Como gerente, necesito eficiencia y control. Esta app de facturación me da claridad en las finanzas sin complicaciones.",
        author: "Tomas Cadavid",
        title: "Gerente",
        avatar: "https://placehold.co/100x100/000000/ffffff?text=JP"
    }
]

export const FAQS = [
    {
        question: "La app de facturación es fácil de usar para alguien sin conocimientos contables",
        answer: "Sí, está diseñada con una interfaz intuitiva para que cualquier persona pueda generar facturas en minutos."
    },
    {
        question: "Puedo personalizar mis facturas con el logo y datos de mi empresa",
        answer: "Claro, puedes agregar tu logo, colores y la información de tu negocio para darle un aspecto profesional a cada factura."
    },
    {
        question: "La aplicación guarda un historial de mis facturas",
        answer: "Sí, todas tus facturas quedan registradas y puedes consultarlas, descargarlas o reenviarlas en cualquier momento."
    },
    {
        question: "Se pueden generar reportes financieros",
        answer: "Sí, la app permite generar reportes de ingresos, gastos y clientes para tener un mejor control de tus finanzas."
    },
    {
        question: "La app funciona en dispositivos móviles",
        answer: "Sí, puedes usarla tanto en tu computador como en tu celular o tablet, siempre con sincronización en la nube."
    },
    {
        question: "Qué tan segura es la información dentro de la app",
        answer: "Toda la información se protege con encriptación y copias de seguridad automáticas para garantizar tu seguridad y privacidad."
    }
]

export const NAVIGATION_MENU = [
    {id: "dashboard", name: "Dashboard", icon: LayoutDashboard},
    {id: "invoices", name: "Facturas", icon: FileText},
    {id: "invoices/new", name: "Crear Factura", icon: Plus},
    {id: "profile", name: "Perfil", icon: Users},
]