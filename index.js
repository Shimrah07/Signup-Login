

function signup(userName)
{
    let arr = ["franz", "sylvia", "nietzche", "harry", "anne"];
    
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == userName)
        {
            console.log("User Already Regsistered, Please Login");
            return;
        }
        else
        {
            arr.push(userName);
            console.log("Signup Sucessfull, Please Login");
            return;
        }
    }
    
}

signup("bob");
