
const queryString = {
    app_id : 'eb0caccf',
    app_key :'1a544fa4664b33a52f937aadf93cbd36'
}

export const fetchData = async(defaultQuery)=> {  
    const{app_id,app_key} = queryString;
    try{ 
         const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`;


        const data = await fetch(baseUrl);
        return data.json();
    }  
    catch(e)
    {
        console.log(e,"somethin went Wrong");
        return e;
    }
} 



