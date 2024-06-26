import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div data-theme='cupcake' className="bg-base-300 min-h-screen">
            <div className="container mx-auto p-5 bg-base-100 rounded-lg shadow-lg">
                <header className="mb-12 border-b-2 pb-5">
                    <h1 className="text-4xl font-bold mb-4">Odontología Nic</h1>
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-light">Proyecto de portafolio</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/kuchinisu/odontologia_nic.git"
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn btn-neutral">
                                    Ver repositorio
                                </button>
                            </a>
                            <Link to={'/documentacion'}>
                                <button className="btn btn-secondary">
                                    Ver la documentación
                                </button>
                            </Link>{/* <a href="https://www.freepik.com/free-photo/close-up-dentist-instruments_94938231.htm#fromView=search&page=1&position=0&uuid=3ea6f79b-ea4f-418e-afa9-114075890372">Image by freepik</a> */}
                        </div>
                    </div>
                </header>

                <main className="space-y-12">
                    <section>
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
                            src="https://raw.githubusercontent.com/kuchinisu/pagina_proyecto_odontologia/main/img/_5477f84c-1282-419b-90f3-278249cc906c.jfif"
                            alt="Descripción de la imagen"
                            className="mx-auto rounded-lg w-1/3 mb-6"
                        />
                        <div className="divider"></div>
                    </section>

                    <section>
                        <p className="mb-6 leading-relaxed">
                            La plataforma tiene diferentes herramientas para el seguimiento de los 
                            padecimientos y tratamientos de cada paciente, y para la identificación 
                            de los cuerpos si alguno de ellos llegase a faltar, y su cuerpo no fuera 
                            identificable por los medios habituales.
                        </p>
                        <img
                            src="https://raw.githubusercontent.com/kuchinisu/pagina_proyecto_odontologia/main/img/_8f21d38a-fb02-4652-a604-560caba8f54b.jfif"
                            alt="Descripción de la imagen"
                            className="mx-auto rounded-lg w-1/3 mb-6"
                        />
                        <div className="divider"></div> 
                    </section>

                    <section className="border p-5 rounded-lg shadow-md">
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
                    </section>

                    <section>
                        <p className="mb-6 leading-relaxed">
                            Este proyecto está hecho en Django, para la comparación e identificación de modelos 3D bucales usa un algoritmo matemático
                            que ordena los vértices en su índice correspondiente según el origen de la escena, y luego compara las distancias relativas entre ambos 
                            modelos, y devuelve una lista serializada de posibles pacientes.
                        </p>
                        <p>
                            También usa tecnología cloud de Microsoft Azure para el almacenamiento de los datos.
                        </p>
                        <div className="divider"></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;
