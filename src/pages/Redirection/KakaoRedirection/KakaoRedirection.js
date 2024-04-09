// hooks
import { useNavigate } from "react-router-dom";
import useAsync from "../../../hooks/useAsync/useAsync";

import Loading from "../../../components/Loading/Loading";
import { kakaoLoginReq } from "../../../utils/authAPIs/authAPIs";

const KakaoRedirection = () => {
    const navigate = useNavigate();
    const url = new URL(window.location.href);
    const KAKAO_CODE = url.searchParams.get("code");
    const [state] = useAsync(() => {
        return kakaoLoginReq(KAKAO_CODE);
    }, [KAKAO_CODE]);
    const { loading, data, error } = state;
    if (loading) {
        return <Loading />;
    }
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data);
        console.log(data.exist);
        if (data.exist) {
            console.log('true');
            const accessToken = data.headers["accesstoken"];
            const refreshToken = data.headers["refreshtoken"];
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            navigate('/home');
        }
        else {

            navigate('/AddInfo', {
                state: {
                    email: data.email,
                    name: data.name,
                }
            })
        }
        
    }

}

export default KakaoRedirection;
