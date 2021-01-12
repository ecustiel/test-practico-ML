

export const searchApi = async(item) => {

    
        const url = `https://api.mercadolibre.com/sites/MLA/search?q:${ encodeURI(item)}`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const items = data.map( res => {
            return {
                author: {
                    name: 'Eduardo',
                    lastname: 'Custiel'
                }
            }
        })

        return items;
    }

    
