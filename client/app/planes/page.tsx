import React from "react";
import { Check as CheckIcon, Star as StarIcon, Shield } from "lucide-react";

const PlanesPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "Gratis",
      features: [
        "Acceso limitado a 2 cursos por mes",
        "Soporte técnico básico",
        "Acceso a foros limitados",
        "Certificado de participación digital",
        "Acceso a 1 evento mensual en vivo"
      ],
      supportLevel: "Soporte básico",
      contentUpdates: "Actualizaciones mensuales",
      highlight: "Acceso gratuito con funciones limitadas para probar la plataforma."
    },
    {
      name: "Pago por Asesoría",
      price: "S/ 40 / sesión",
      features: [
        "Sesiones de asesoría personalizadas",
        "Dedicación de 1 hora por sesión",
        "Asesoramiento en temas específicos",
        "Material de apoyo digital",
        "Certificado de participación digital"
      ],
      supportLevel: "Asesoría personalizada",
      contentUpdates: "Material de apoyo actualizado",
      highlight: "Plan ideal para quienes buscan ayuda específica en temas concretos."
    },
    {
      name: "Full",
      price: "S/ 70 / mes",
      features: [
        "Acceso ilimitado a todos los cursos",
        "Soporte técnico 24/7",
        "Acceso a foros de discusión con tutores",
        "Certificado de participación en formato digital y físico",
        "Acceso a 5 eventos mensuales en vivo"
      ],
      supportLevel: "Soporte 24/7",
      contentUpdates: "Actualizaciones quincenales",
      highlight: "Acceso completo a todos los cursos y soporte mejorado."
    },
    {
      name: "Full+",
      price: "S/ 120 / mes",
      features: [
        "Acceso ilimitado a todos los cursos y recursos exclusivos",
        "Soporte prioritario 24/7 con agentes especializados",
        "Sesiones en vivo con tutores expertos",
        "Acceso exclusivo a contenido premium y foros VIP",
        "Certificado de participación en formato digital y físico",
        "Acceso a todos los eventos en vivo"
      ],
      supportLevel: "Soporte prioritario 24/7",
      contentUpdates: "Actualizaciones semanales",
      highlight: "Acceso premium a todo el contenido, con beneficios exclusivos y soporte prioritario."
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Planes de Suscripción - EduYacha</h2>
      <p className="text-gray-600 mb-8">
        Elige el plan que mejor se adapte a tus necesidades y mejora tus habilidades con el mejor contenido educativo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl text-blue-500 mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-4">{plan.highlight}</p>

              <ul className="list-disc list-inside text-left mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckIcon className="text-blue-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>

              <div className="text-left">
                <p className="flex items-center mb-1">
                  <Shield className="mr-2" /> Nivel de Soporte: {plan.supportLevel}
                </p>
                <p className="flex items-center">
                  <StarIcon className="mr-2" /> Actualizaciones de Contenido: {plan.contentUpdates}
                </p>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white font-semibold py-2 rounded-md transition-all duration-300 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
              Seleccionar Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanesPage;
