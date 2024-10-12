import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Facebook, Twitter, Instagram } from "lucide-react";

const ContactoPage = () => {
  const testimonials = [
    {
      name: "Juan Pérez",
      message:
        "La mejor experiencia de aprendizaje que he tenido. ¡Recomiendo EduYacha al 100%!",
    },
    {
      name: "María López",
      message:
        "Los cursos son muy completos y el soporte es excepcional. ¡Gracias, EduYacha!",
    },
    {
      name: "Carlos Ruiz",
      message:
        "EduYacha transformó mi forma de aprender. ¡Totalmente recomendable!",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Contáctanos</h1>
      <p className="text-center mb-8">
        Estamos aquí para ayudarte. No dudes en ponerte en contacto con
        nosotros.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de Contacto */}
        <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Información de Contacto
          </h2>
          <div className="mb-4">
            <p>
              <strong>Dirección:</strong> Enrique Segoviano
            </p>
            <p>
              <strong>Correo:</strong>{" "}
              <a
                href="mailto:eduyacha@ulima.edu.pe"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                eduyacha@ulima.edu.pe
              </a>
            </p>
            <p>
              <strong>Sitio Web:</strong>{" "}
              <a
                href="https://eduyacha.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                eduyacha.io
              </a>
            </p>
          </div>
          <div>
            <p>
              <strong>Celular:</strong>
            </p>
            <p>Recepción: +51 923 168 123</p>
            <p>Oficina: +51 999 888 777</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Síguenos en redes sociales:</h3>
            <div className="flex justify-around mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Twitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Envíanos un Mensaje</h2>
          <form>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Mensaje"
              className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <hr className="my-8" />

      <h2 className="text-xl text-center mb-4">Mapa de Ubicación</h2>
      <div className="relative w-full h-96 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.6094324348956!2d-77.11354098857473!3d-11.99687598033401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cdd29738f6b7%3A0x59cde5eb343649fc!2sTottus!5e0!3m2!1sen!2sin!4v1728694685051!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <hr className="my-8" />

      <h2 className="text-xl text-center mb-4">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-md"
          >
            <p className="text-center">{testimonial.message}</p>
            <p className="text-center text-gray-500 mt-2">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactoPage;
