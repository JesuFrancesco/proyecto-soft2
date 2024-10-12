"use client"; // Marca este archivo como un Componente de Cliente

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import WidgetWrapper from "@/components/common/WidgetWrapper";

const contentHelp = {
  id: "content-help",
  hasBackground: true,
  header: {
    tagline: "Ayuda",
    title: "Preguntas Frecuentes de EduYacha",
    subtitle: "",
  },
  sections: [
    {
      title: "Inscripción y Acceso",
      items: [
        {
          question: "¿Cómo puedo registrarme en EduYacha?",
          answer:
            "Para registrarte en EduYacha, visita nuestra página de inicio y haz clic en el botón 'Registrarse'. Completa el formulario con la información solicitada y sigue las instrucciones para crear tu cuenta.",
        },
        {
          question: "¿Qué información necesito para registrarme?",
          answer:
            "Necesitarás proporcionar tu nombre completo, dirección de correo electrónico, una contraseña segura y, opcionalmente, información adicional como tu número de teléfono.",
        },
        {
          question: "¿Puedo cambiar mi contraseña?",
          answer:
            "Sí, puedes cambiar tu contraseña en cualquier momento desde la sección de 'Configuración de cuenta'. Simplemente selecciona 'Cambiar contraseña' y sigue las instrucciones.",
        },
        {
          question: "¿Qué hago si olvido mi contraseña?",
          answer:
            "Si olvidas tu contraseña, dirígete a la página de inicio de sesión y haz clic en '¿Olvidaste tu contraseña?'. Ingresa tu dirección de correo electrónico y recibirás un enlace para restablecerla.",
        },
        {
          question: "¿Cómo puedo eliminar mi cuenta?",
          answer:
            "Para eliminar tu cuenta, contacta a nuestro soporte técnico a través de la sección de contacto en la plataforma. Ellos te guiarán en el proceso de eliminación.",
        },
      ],
    },
    {
      title: "Cursos y Contenido",
      items: [
        {
          question: "¿Cómo puedo acceder a los cursos?",
          answer:
            "Una vez que te registres y inicies sesión, ve a la sección de 'Cursos' en el menú principal. Allí podrás ver todos los cursos disponibles y acceder a ellos con un solo clic.",
        },
        {
          question: "¿Los cursos son en vivo o grabados?",
          answer:
            "EduYacha ofrece tanto cursos en vivo como cursos grabados. Puedes elegir el tipo de curso que mejor se adapte a tu estilo de aprendizaje.",
        },
        {
          question: "¿Hay algún requisito previo para inscribirse en un curso?",
          answer:
            "Algunos cursos pueden tener requisitos previos, que se especifican en la descripción del curso. Asegúrate de revisar esta información antes de inscribirte.",
        },
        {
          question: "¿Puedo acceder a los cursos desde cualquier dispositivo?",
          answer:
            "Sí, EduYacha es compatible con dispositivos móviles, tabletas y computadoras. Puedes acceder a los cursos desde cualquier lugar con conexión a Internet.",
        },
        {
          question: "¿Cómo se actualiza el contenido de los cursos?",
          answer:
            "El contenido de los cursos se revisa y actualiza regularmente para asegurarse de que esté alineado con las últimas tendencias y metodologías educativas.",
        },
      ],
    },
    {
      title: "Metodología de Aprendizaje",
      items: [
        {
          question: "¿Qué metodología se utiliza en los cursos?",
          answer:
            "En EduYacha utilizamos una metodología basada en el aprendizaje activo, que incluye clases interactivas, ejercicios prácticos y evaluación continua para maximizar la comprensión y retención del contenido.",
        },
        {
          question: "¿Hay seguimiento del progreso académico?",
          answer:
            "Sí, cada estudiante puede hacer un seguimiento de su progreso académico a través de su panel de control personal, donde se muestran los avances en los cursos y las calificaciones obtenidas.",
        },
        {
          question: "¿Cómo se evalúa el rendimiento de los estudiantes?",
          answer:
            "El rendimiento se evalúa mediante tareas, exámenes y proyectos, así como mediante la participación en foros y actividades interactivas.",
        },
        {
          question: "¿Puedo hacer preguntas durante los cursos?",
          answer:
            "Sí, los cursos en vivo permiten la interacción en tiempo real, donde puedes hacer preguntas. Además, hay foros disponibles para plantear dudas en cualquier momento.",
        },
        {
          question: "¿Existen foros o grupos de discusión?",
          answer:
            "Sí, EduYacha cuenta con foros y grupos de discusión donde los estudiantes pueden interactuar, hacer preguntas y compartir experiencias.",
        },
      ],
    },
    {
      title: "Soporte y Asistencia",
      items: [
        {
          question: "¿Cómo puedo contactar al soporte técnico?",
          answer:
            "Puedes contactar al soporte técnico a través de la sección 'Ayuda' en la plataforma, donde encontrarás opciones de contacto y un formulario para enviar tu consulta.",
        },
        {
          question: "¿Hay asistencia disponible para problemas técnicos?",
          answer:
            "Sí, ofrecemos asistencia técnica a todos nuestros usuarios. Nuestro equipo está disponible para resolver cualquier inconveniente que puedas tener.",
        },
        {
          question: "¿Dónde puedo encontrar tutoriales o guías de uso?",
          answer:
            "Los tutoriales y guías de uso están disponibles en la sección de 'Recursos' dentro de la plataforma. Allí encontrarás videos y documentos que te ayudarán a navegar por EduYacha.",
        },
        {
          question: "¿Cómo puedo dar feedback sobre la plataforma?",
          answer:
            "Valoramos tus comentarios. Puedes enviar tus sugerencias y opiniones a través del formulario de feedback que se encuentra en la sección 'Ayuda'.",
        },
        {
          question: "¿EduYacha ofrece soporte en diferentes idiomas?",
          answer:
            "Sí, ofrecemos soporte en varios idiomas. Si necesitas asistencia en un idioma específico, indícalo al contactar con nuestro equipo de soporte.",
        },
      ],
    },
    {
      title: "Pagos y Facturación",
      items: [
        {
          question: "¿Cómo se realizan los pagos?",
          answer:
            "Los pagos se realizan a través de nuestra plataforma segura utilizando tarjetas de crédito, débito o sistemas de pago en línea como PayPal.",
        },
        {
          question: "¿Aceptan tarjetas de crédito/débito?",
          answer:
            "Sí, aceptamos la mayoría de las tarjetas de crédito y débito. Consulta nuestra sección de pagos para más detalles sobre los métodos aceptados.",
        },
        {
          question: "¿Puedo solicitar un reembolso?",
          answer:
            "Sí, puedes solicitar un reembolso dentro de los 14 días siguientes a la compra si no estás satisfecho con el curso. Consulta nuestra política de reembolsos para más información.",
        },
        {
          question: "¿Cuáles son las políticas de cancelación de cursos?",
          answer:
            "Las políticas de cancelación varían según el curso. Te recomendamos revisar los términos específicos de cada curso en la página de inscripción.",
        },
        {
          question: "¿Se generan facturas por las compras?",
          answer:
            "Sí, al realizar una compra, recibirás una factura electrónica en tu correo electrónico, que podrás descargar y guardar.",
        },
      ],
    },
    {
      title: "Seguridad y Privacidad",
      items: [
        {
          question: "¿Cómo protege EduYacha mis datos personales?",
          answer:
            "EduYacha utiliza tecnología de cifrado y protocolos de seguridad avanzados para proteger tus datos personales y garantizar la privacidad de tu información.",
        },
        {
          question: "¿Se comparte mi información con terceros?",
          answer:
            "No, EduYacha no comparte tu información personal con terceros sin tu consentimiento, salvo en situaciones requeridas por la ley.",
        },
        {
          question: "¿Qué medidas de seguridad se implementan en la plataforma?",
          answer:
            "Implementamos diversas medidas de seguridad, como autenticación de dos factores, monitoreo de actividad sospechosa y encriptación de datos para proteger la información de nuestros usuarios.",
        },
        {
          question: "¿Puedo controlar quién tiene acceso a mi información?",
          answer:
            "Sí, tienes el control sobre tu información. Puedes modificar la configuración de privacidad en tu perfil y elegir qué datos deseas compartir.",
        },
        {
          question: "¿Cómo reporto un comportamiento sospechoso o fraudulento?",
          answer:
            "Si observas un comportamiento sospechoso, por favor contáctanos de inmediato a través de la sección de soporte técnico y proporciona detalles para que podamos investigar la situación.",
        },
      ],
    },
  ],
};

const FAQ = () => {
  const [openSections, setOpenSections] = useState<Record<number, number | null>>({});

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === itemIndex ? null : itemIndex,
    }));
  };

  const { header, sections, id, hasBackground } = contentHelp;

  return (
    <WidgetWrapper
      id={id ? id : ""}
      hasBackground={hasBackground}
      containerClass="pb-12 md:pb-16 lg:pb-20"
    >
      {header && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">{header.tagline}</h2>
          <h1 className="text-4xl sm:text-6xl font-bold">{header.title}</h1>
        </div>
      )}
      <div className="mx-auto max-w-7xl">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-md shadow-md transition-colors duration-200"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleItem(sectionIndex, itemIndex)}
                  >
                    <h3 className="text-lg font-medium">{item.question}</h3>
                    <span className="text-gray-400">
                      {openSections[sectionIndex] === itemIndex ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </span>
                  </div>
                  {openSections[sectionIndex] === itemIndex && (
                    <div className="mt-2 text-gray-700 dark:text-gray-300">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default FAQ;
