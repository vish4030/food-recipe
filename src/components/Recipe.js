
export const Recipe = ({label,ingredients,image,calories}) =>{
    
    return(
        <div style={{ display: 'inline-block',
            border: '1px solid white',
            padding: '1rem 1rem',
            verticalAlign: 'middle',
            width:'300px',
            height:'900px'
            }}>
            <h1>{label}</h1>
            <img src={image} alt=""/>
            <ol>
                {
                  ingredients.map((ingredients) => 
                  <li key={label} style={{color:'lightskyblue'}}>{ingredients.text}</li> 
                )}
            </ol>
            <p>calories:{calories}</p>
        </div>
    )
  }
 