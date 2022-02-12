import axios, {AxiosResponse} from 'axios';
import Strings from '../res/Strings';

export default class APIManager {
  /**
   *
   * @param {end points of api} endPoint
   * @param {methodType can be GET,POST,PUT or DELETE} methodType
   * @param {Bundle} params
   */

  static createPromise(
    endPoint: string,
    methodType: string,
    params: object,
  ): Promise<AxiosResponse<Function, Function>> {
    let promise = null;
    const API = axios.create({
      baseURL: Strings.BASE_URL,
      timeout: 3 * 60 * 1000,
    });
    if (methodType == 'GET') {
      promise = API.get(endPoint, {params});
    } else if (methodType == 'POST') {
      promise = API.post(endPoint, params);
    } else if (methodType == 'PUT') {
      promise = API.put(endPoint, params);
    } else {
      promise = API.delete(endPoint, params);
    }

    return promise;
  }

  /**
   *
   * @param {end points of api} endPoint
   * @param {methodType can be GET,POST,PUT or DELETE} methodType
   * @param {Bundle} params
   * @param {callback is to handle response. isSuccessful will be false if there is error.} callBackFx
   */

  static getResponse = (
    endPoint: string,
    methodType: string,
    params: object,
    callBackFx: Function,
  ) => {
    const mPromise = APIManager.createPromise(endPoint, methodType, params);
    mPromise
      .then(response => {
        //cb = (isSuccessful, response);
        callBackFx(true, response.data);
      })
      .catch(error => {
        console.log(JSON.stringify(error, null, 2));
        //cb = (isSuccessful, error);
        callBackFx(false, error.response);
      });

    return mPromise;
  };
}