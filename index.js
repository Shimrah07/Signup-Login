

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


// in feature/ login branch
function login(userName, password)
{
    let arr2 = ["freud", "sylvia", "nietzche", "sigmund", "charlotte"];

    for(let i = 0; i < arr2.length; i++)
        {
            if(arr2[i] == userName)
            {
                if(password == "Emp@123")
                {
                    console.log("Login Sucessfull...");
                    return;
                }
                else
                {
                    console.log("Wrong Password...");
                    return;
                }

            }
        }

        console.log("User Not Found, Please Signup");
}


login("nietzche", "Emp@123");
