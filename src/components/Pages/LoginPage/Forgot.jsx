import AuthLayout from "../../AuthLayout/AuthLayout";
import AuthLayoutV2 from "../../AuthLayout/AuthLayoutV2";
import AuthLayoutV3 from "../../AuthLayout/AuthLayoutV3";
import ForgetComponent from "../../forms/Login-Form/ForgetComponent";



const Forget = () => {
  return (
    <AuthLayout>
        <ForgetComponent/>
    </AuthLayout>

    // <AuthLayoutV2 >
    //    <ForgetComponent />
    // </AuthLayoutV2>

    // <AuthLayoutV3>
    //   <ForgetComponent />
    // </AuthLayoutV3>
  )
}

export default Forget