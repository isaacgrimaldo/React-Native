
interface Persona{
    fullName: string;
    age: number;
    direccion:Direccion;    
}

interface Direccion{
    country:string;
    homeNum: number;
}
const ObjetosLiterales = () => {
    
    const persona: Persona= {
        fullName: 'Isaac Grimaldo',
        age: 20,
        direccion:{
            country:'Canada',
             homeNum:652
        }
    }
    
    return (
        <>
            <h2>Objetos Literales</h2>
            <hr/>
            <code>
                <pre>
                    {JSON.stringify(persona, null , 2)}
                </pre>
            </code>
        </>
    )
}


export default ObjetosLiterales;