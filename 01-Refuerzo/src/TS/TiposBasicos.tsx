
const TiposBasicos = () => {
    
    let nombre:string | number | boolean = 'Fernado';
    nombre = 5132;
    nombre = true;
    nombre = 'Brenda';
    
    const edad:number = 35; // no se puede cambiar el valor 
    const estaActivo:boolean = true;
    const poderes: string[] = ['Super Fuerza', 'Repirar bajo el agua']; // solo acepta los tipos de datos establecidos

    return (
        <>
          <h2>Tipos Basicos</h2>    
          {nombre},  {edad}, {estaActivo ?'Active' :'Off' }  
           <hr/>
           {
                poderes.join(', ')
           } 
        </>
    )
}

export default TiposBasicos;
