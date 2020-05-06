const WebStorageDAO = 
{
        storeDataToSessionStorage(name,obj)
        {
            sessionStorage.setItem(name,JSON.stringify(obj));

        },
        
        getDataFromSessionStorage(name)
        
        {
            return JSON.parse(sessionStorage.getItem(name))
        },

        storeDataToLocalStorag(name,obj)
        {
            localStorage.setItem(name,JSON.stringify(obj));

        },

        getDataFromLocalStorage(name)
        
        {
            return JSON.parse(localStorage.getItem(name))
        }


}

export default WebStorageDAO;