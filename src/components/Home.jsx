import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div data-theme='cupcake' className="bg-base-300">
            <div  className="min-h-screen p-8 container mx-auto p-5 bg-base-100">
                <header className="mb-12 border border-2 p-5">
                    <h1 className="text-4xl font-bold mb-4">Odontología Nic</h1>

                    <div className="flex">

                        <p className="text-lg font-light mr-5">Proyecto de portafolio</p>
                        <a
                            href="https://github.com/kuchinisu/odontologia_nic.git"
                            className="text-blue-500 underline mt-2 inline-block mr-5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver repositorio
                        </a>

                        <div className="text-blue-500 underline mt-2 inline-block">
                        <Link
                                to={'/documentacion'}
                                className="text-blue-500 underline"
                            >
                                Ver la documentación
                            </Link>
                        </div>
                    </div>
                    
                </header>

                <main className="space-y-12">
                    <div className="">
                        <p className="mb-6 leading-relaxed">
                            Las bases de datos de registros dentales son de extrema ayuda, no solo para
                            dar el seguimiento al tratamiento del paciente, sino que también, en 
                            materia forense y de criminología. La boca y sus medidas, los aparatos de 
                            ortodoncia, los problemas y padecimientos, y literalmente, cada diente 
                            individual son características tan únicas como la huella dactilar de cada
                            persona. De hecho, la idea de este proyecto es brindar todas las 
                            herramientas para identificar a las personas por medio de su boca cuando
                            las huellas dactilares no están disponibles.
                        </p>
                        <img
                            src="imagen1"
                            alt="Descripción de la imagen"
                            className="mx-auto rounded-lg"
                        />
                    <div className="divider"></div>
                    </div>


                    <div className="">
                        <p className="mb-6 leading-relaxed">
                            La plataforma tiene diferentes herramientas para el seguimiento de los 
                            padecimientos y tratamientos de cada paciente, y para la identificación 
                            de los cuerpos si alguno de ellos llegase a faltar, y su cuerpo no fuera 
                            identificable por los medios habituales.
                        </p>
                        <img
                            src="imagen2"
                            alt="Descripción de la imagen"
                            className="mx-auto rounded-lg"

                        />
                        <div className="divider"></div>

                    </div>

                    <div className="border border-2 p-5">
                        <h2 className="text-2xl font-semibold mb-4">Funciones de la Plataforma</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Registro de Paciente</li>
                            <li>Registro de diferentes procedimientos y tratamientos</li>
                            <li>Registro de los tipos de aparatos de ortodoncia que puedan haber disponibles</li>
                            <li>Registro de cada unidad de estos aparatos, con su modelo 3D y su documento de información</li>
                            <li>Registro de cada padecimiento que el paciente pueda tener y el seguimiento de su tratamiento</li>
                            <li>Registro del modelo 3D de la boca del paciente</li>
                            <li>Registro para cada diente individual del paciente</li>
                            <li>Consulta de pacientes por medio de parámetros y de sus padecimientos, tratamientos y modelo 3D bucal</li>
                            <li>Función para búsqueda e identificación automática de pacientes, por medio del scan 3D de la boca del cuerpo a identificar</li>
                        </ul>
                    </div>

                    <div className="">
                        <p className="mb-6 leading-relaxed">
                            Por medio de este proyecto muestro mis habilidades y 
                            experiencia en el desarrollo full-stack. La parte del backend está desarrollada principalmente con el framework Django, 
                            incluyendo algoritmos matemáticos para la comparación del Scan 3D del cuerpo que se quiere identificar enviado por el usuario contra los modelos 3D de las bocas de los pacientes en la base de datos. 
                            Utiliza servicios cloud con Microsoft Azure para el almacenamiento de los metadatos y de los archivos.
                        </p>
                        <div className="divider"></div>

                    </div>

                    
                </main>

                    
            </div>
        </div>
    );
};

export default Home;
