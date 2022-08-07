function handleLoad(){
    try {
        getServer();
    } catch (error) {
        console.log(error)
    }
}

async function getServer() {
    try {
        // @ts-ignore
        const {data} = await axios.get('/users/cookie');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function handleRegister(ev : any) {
    ev.preventDefault();
    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        console.log(email, password);
        //@ts-ignore
        const {data} = await axios.post("/users/register", {email, password});
        const {register, error} = data;
        if (error) 
            throw error;
        console.log(data);

        if (register) {
            window.location.href = `./login.html?userId=${register._id}`;
        }

        if (error && error.includes("E11000")) 
            alert('email is already in use')
    } catch (error) {
        console.error(error)
    }

}

async function handleLogin(ev : any) {
    ev.preventDefault();
    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        console.log(name, email, password);
        //@ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        const {login, error} = data;
        if (error) 
            throw error;
        
        if (login) {
            window.location.href = `./profile.html?userId=${login._id}`;
        }

        if (error) 
            throw error;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


function getUserId(ev:any) : string | false {
    ev.preventDefault();
    try {
        const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams)
        const userId = urlParams.get("userId");
        return userId;
        
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function onscondPageLoad(ev:any) {
    ev.preventDefault();
    try {
        getServer()
        //get params of userId
        const userId = getUserId(ev);
        if (!userId) 
            throw new Error("couldnt find user id in url");
        
        // @ts-ignore
        const {data} = await axios.get(`/users/get-user?userId=${userId}`);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
