import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/assets/background.jpg)' }}>
      <div className=" absolute inset-0 bg-black bg-opacity-50"></div> {/* Fondo oscuro semitransparente */}
      <div className=" container relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-white bg-opacity-80 rounded-lg p-6 shadow-lg">
          <Image
            src="/assets/logoUIFCE.png"
            alt="Logo UIFCE"
            width={400}
            height={100}
            className="mx-auto"
          />
          <p className="text-lg font-semibold mt-4">UNIDAD DE INFORMÁTICA</p>
          <ol className="list-inside list-decimal text-sm text-gray-700 mt-4">
            <li className="mb-2">Facilitando el aprendizaje, un paso a la vez</li>
            <li>Impulsa el desarrollo académico</li>
          </ol>

          <div className="mt-6">
            <Link
              href="/auth/register"
              className="inline-flex items-center px-6 py-3 text-white bg-black rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
            >
              Registra la asistencia docente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
