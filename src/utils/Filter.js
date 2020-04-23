const baseUrl = 'http://localhost:4001/api';

let Filter = {
    
    search(term){
        return fetch(`${baseUrl}/filter?ingredient=${term}`).then(response => {
            if(!response.ok){
                return new Promise(resolve => resolve([]));
            }
            return response.json().then(jsonResponse => {
                return jsonResponse.recipes
            })
        })
    }
} 
export default Filter