import React from 'react';
import { Registrar, Consultar, Identificar } from './components/AISInfo';

const DocumentacionAPI = () => {
    //bg
    return (
        <>
            <div data-theme='cupcake' className='bg-base-300 rounded-sm'>

            
            <div className="container mx-auto p-5 bg-base-100" >
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">Documentación de la API</h1>
                </div>
                <div className="divider my-4"></div>


                <div className="mb-8">
                    <div className="text-lg font-semibold">Introducción</div>
                    <div className='mb-2'>
                        La plataforma tiene 3 funciones: registrar, consultar e identificar.
                        Las funciones de registrar y consultar son parte de la misma app de Django, 
                        por lo que están dentro de la URL <code>api/registros/</code>. La función para la 
                        identificación automática pertenece a su propia URL <code>api/identificacion/</code>.
                    </div>
                    <div className='mb-2'>
                        Para absolutamente todas las consultas se requiere estár autenticado, en el header de 
                        todas las consultas debe ir el <code>Authorization: JWT 'codigo access'</code>.
                    </div>
                </div>

                <div className="divider my-8"></div>

                <div className='border border-2 p-5 mb-5'>

                    <div className="mb-4 text-3xl font-bold">api/registros/</div>
                    
                    <div className='border border-1 p-5 mb-5'>
                        <div className='text-xl font-semibold'>registrar/</div>
                        {Registrar.map((registro, index) => (
                            <div key={index} className="mb-8 p-4 rounded-lg">
                                <div className="text-lg font-bold mb-2">{registro.url}</div>

                                <div className="mb-4">
                                    <div className="font-semibold">Información de la solicitud:</div>
                                    {registro.inf_request}
                                </div>

                                <div className="divider my-4"></div>

                                <div>
                                    <div className="font-semibold mb-2">Argumentos:</div>
                                    {registro.argumentos}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='border border-1 p-5'>
                        <div className='text-xl font-semibold'>consultar/</div>
                        {Consultar.map((consulta, index) => (
                            <div key={index} className="mb-8 p-4 rounded-lg">
                                <div className="text-lg font-bold mb-2">{consulta.url}</div>

                                <div className="mb-4">
                                    <div className="font-semibold">Información de la solicitud:</div>
                                    {consulta.inf_request}
                                </div>

                                <div className="divider my-4"></div>

                                <div>
                                    <div className="font-semibold mb-2">Descripcion:</div>
                                    {consulta.descripcion ? (<div>{consulta.descripcion}</div>):(<div>sin descripcion adicional</div>)}
                                </div>

                                <div className='divider'></div>
                                <div>
                                    <div>Fields serializados:</div>
                                    {consulta.fields.map((field)=>
                                        <li>
                                            {field}
                                        </li>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='border border-2 p-5'>

                    <div className="mb-4 text-3xl font-bold">api/identificacion/</div>
                    
                    <div className='border border-1'>
                        <div className='text-xl font-semibold p-5'> comparar/ </div>
                    

                    {Identificar.map((ident, index) => (
                            <div key={index} className="mb-8 p-4 rounded-lg">
                                <div className="text-lg font-bold mb-2">{ident.url}</div>

                                <div className="mb-4">
                                    <div className="font-semibold">Información de la solicitud:</div>
                                    {ident.inf_request}
                                </div>

                                <div className="divider my-4"></div>

                                <div>
                                    <div className="font-semibold mb-2">Argumentos:</div>
                                    {ident.argumentos}
                                </div>
                            </div>
                        ))}
                        </div>
                </div>

               
            </div>
            </div>
        </>
    );
};

export default DocumentacionAPI;
