import { Http, Headers, Response, URLSearchParams } from '@angular/http';
/**
 * 
 */
export default class ConstantsController {

    APISERVER = 'http://127.0.0.1:8091/index.php/Apis';

    // 登录控制器
    MODEL_Login = 'Login';

    // 用户信息
    MODEL_Users = 'Users';

    // 文章控制器
    MODEL_Article = 'article';

    private isType(o: any) {
        return ({}).toString.call(o);
    }

    /**
     * 公共请求参数格式化
     * @param object 
     */
    forData(object: any) {
        let urlSearchParams = new URLSearchParams();
        let valueType = this.isType(object);
        if (valueType === '[object Object]') {
            for (let key in object) {
                urlSearchParams.append(key, object[key]);
            }
        }
        if (valueType === '[object String]') {
            urlSearchParams.append(valueType, valueType);
        }
        return urlSearchParams;
    }

}