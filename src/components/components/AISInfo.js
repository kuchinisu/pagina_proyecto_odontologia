export const Registrar = [
    {
        url: 'paciente/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Nombre</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>apellido_materno</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>apellido_paterno</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>correo_electronico</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>direccion</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>direccion</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>identificacion oficial (NULL)</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>Genero(choices:hombre, mujer, sin especificar')</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>peso</td>
                        <td>decimal</td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>estatura</td>
                        <td>decimal</td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>estatura</td>
                        <td>decimal</td>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>fecha_de_nacimiento</td>
                        <td>str: 'yyyy/mm/dd'</td>
                    </tr>
                    <tr>
                        <th>13</th>
                        <td>edad</td>
                        <td>int'</td>
                    </tr>
                    <tr>
                        <th>13</th>
                        <td>edad</td>
                        <td>int'</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'modelo_3d_boca/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Paciente</td>
                        <td>int</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>archivo_3d</td>
                        <td>file.obj</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'procedimiento/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>nombre</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>descripcion</td>
                        <td>Text</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },


    {
        url: 'tratamiento/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>nombre</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>descripcion</td>
                        <td>Text</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    

    {
        url: 'aparato/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>nombre</td>
                        <td>str</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'unidad/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>aparato</td>
                        <td>str</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>documento_de_informacion</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>modelo_3d</td>
                        <td>file.obj</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'afeccion/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>paciente</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>descripcion</td>
                        <td>Text</td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>estado</td>
                        <td>str</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'procedimiento_realizado/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>paciente</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>procedimiento</td>
                        <td>str</td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>realizado</td>
                        <td>bool</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>afecciones</td>
                        <td>array.size(n): int</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'tratamiento_iniciado/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>paciente</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>tratamiento</td>
                        <td>str</td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>finalizado</td>
                        <td>bool</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>afecciones</td>
                        <td>array.size(n): int</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },
    
    {
        url: 'tratamiento_iniciado/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>paciente</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>tratamiento</td>
                        <td>str</td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>finalizado</td>
                        <td>bool</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>afecciones</td>
                        <td>array.size(n): int</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'actualizacion_de_tratamiento/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>tratamiento</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>descripcion</td>
                        <td>Text</td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>realizado</td>
                        <td>bool</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>fecha (Null)</td>
                        <td>str(yy/mm/dd)</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    
    {
        url: 'actualizacion_de_tratamiento/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>tratamiento</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>descripcion</td>
                        <td>Text</td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>realizado</td>
                        <td>bool</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>fecha (Null)</td>
                        <td>str(yy/mm/dd)</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },

    {
        url: 'diente/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>paciente</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>numeracion</td>
                        <td>str</td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>descripcion</td>
                        <td>Text</td>
                    </tr>
                    
                    <tr>
                        <th>4</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },
    {
        url: 'doc_extra/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>paciente</td>
                        <td>int</td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td>documento</td>
                        <td>file.pdf, .docx, .csv, .xlsx</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    },
];


export const Consultar = [
    {
        url: 'pacientes/parametros/**kwargs',
        descripcion: 'devuelve una lista de los pacientes filtrando según los kwargs pasados por la url, si los kwargs están vacíos se pasarán todos los pacientes sin filtrar, los kwargs son todos los argumentos usados para registrar al paciente, tamben se pueden pasar cualquier otro tipo de argumento que Django permita para la funcion "filter" para sus modelos',
        inf_request : (
            <p>
                <li>Metodo: GET</li>
            </p>
        ),

        fields: [
            'nombre',
            'apellido_materno',
            'apellido_paterno',
            'correo_electronico',
            'direccion',
            'nacionalidad',
            'identificacion_oficial',
            'genero',
            'edad',
            'peso',
            'estatura',
            'imc',
            'aparatos',
            'id_paciente',
            'archivo_3d',
        ]
    },

    {
        url: 'pacientes/parametros/<id_paciente>/',
        descripcion: 'pide la id de paciente, no la oficial',
        inf_request : (
            <p>
                <li>Metodo: GET</li>
            </p>
        ),
        fields: [
            'nombre',
            'apellido_materno',
            'apellido_paterno',
            'correo_electronico',
            'direccion',
            'nacionalidad',
            'identificacion_oficial',
            'genero',
            'edad',
            'peso',
            'estatura',
            'imc',
            'aparatos',
            'id_paciente',
            'archivo_3d',
        ]
    },
    
    {
        url: 'pacientes/parametros/<id_paciente>/',
        descripcion: 'pide la id de paciente, no la oficial',
        inf_request : (
            <p>
                <li>Metodo: GET</li>
            </p>
        ),

        fields: [
            'nombre',
            'apellido_materno',
            'apellido_paterno',
            'correo_electronico',
            'direccion',
            'nacionalidad',
            'identificacion_oficial',
            'genero',
            'edad',
            'peso',
            'estatura',
            'imc',
            'aparatos',
            'id_paciente',
            'archivo_3d',
        ]
    },

    {
        url: 'afecciones/<id_paciente>/',
        inf_request : (
            <p>
                <li>Metodo: GET</li>
            </p>
        ),

        fields: [
            'paciente',
            'descripcion',
            'estado',
            'fecha_de_diagnostico',
            'documento',
        ]
    },

    {
        url: 'procedimientos_realizados/<id_paciente>/',
        inf_request : (
            <p>
                <li>Metodo: GET</li>
            </p>
        ),
        fields : [
            'paciente',
            'procedimiento',
            'fecha',
            'realizado',
            'id_procedimiento',
            'documento',
            'afeccion',
        ]
    },
    
    {
        url: 'tratamientos_iniciados/<id_paciente>/',
        inf_request : (
            <p>
                <li>Metodo: GET</li>
            </p>
        ),

        fields:[
            'paciente',
            'procedimiento',
            'fecha',
            'documento',
            'finalizado',
            'id_tratamiento',
            'afeccion',
        ]
    },
    
    {
        url: 'dientes/<id_paciente>/',
        inf_request : (
            <p>
                <li>Metodo: GET</li>
            </p>
        ),

        fields: [
            'paciente',
            'numeracion',
            'documento_de_info',
        ]
    },

];

export const Identificar = [
    {
        url: 'modelos_dentales/',
        inf_request : (
            <p>
                <li>Metodo: POST</li>
                <li>body: FormData</li>
            </p>
        ),

        argumentos: (
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Argumento</th>
                        <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>archivo_3d</td>
                        <td>file.obj</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )
    }
]