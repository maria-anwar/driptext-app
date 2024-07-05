import AuthLayout from "../../AuthLayout/AuthLayout"
import LoginComponent from "../../forms/Login-Form/LoginComponent"
import AuthLayoutV2 from "../../AuthLayout/AuthLayoutV2"
import AuthLayoutV3 from "../../AuthLayout/AuthLayoutV3"

const Login = () => {
  return (
    <AuthLayout >
       <LoginComponent />
    </AuthLayout>


//  <AuthLayoutV2 >
//        <LoginComponent />
//     </AuthLayoutV2> 

    // <AuthLayoutV3>
    //   <LoginComponent />
    // </AuthLayoutV3>
    
  )
}

export default Login