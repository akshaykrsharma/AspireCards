import axios, { AxiosResponse } from 'axios';
import Strings from '../res/Strings';

export default function APIManager() {
  /**
   *
   * @param {end points of api} endPoint
   * @param {methodType can be GET,POST,PUT or DELETE} methodType
   * @param {Bundle} params
   */
  function createPromise(endPoint: string, methodType: string, params: object): Promise<AxiosResponse<Function,Function>> {
    const APIClient = axios.create({
      baseURL: Strings.BASE_URL,
      timeout: 3 * 60 * 1000,
    });
    let promise = null;
    if (methodType == 'GET') {
      promise = APIClient.get(endPoint, {params});
    } else if (methodType == 'POST') {
      promise = APIClient.post(endPoint, params);
    } else if (methodType == 'PUT') {
      promise = APIClient.put(endPoint, params);
    } else {
      promise = APIClient.delete(endPoint, params);
    }

    return promise;
  }

  interface CallBackFx {
    status: boolean;
    response: Object;
  }

  /**
   *
   * @param {end points of api} endPoint
   * @param {methodType can be GET,POST,PUT or DELETE} methodType
   * @param {Bundle} params
   * @param {callback is to handle response. isSuccessful will be false if there is error.} callBackFx
   */

  function getResponse(
    endPoint: string,
    methodType: string,
    params: object,
    callBackFx: CallBackFx,
  ) {
    const mPromise = createPromise(endPoint, methodType, params);
    mPromise
      .then((response: Object) => {
        //cb = (isSuccessful, response);
        callBackFx(true, response.data);
      })
      .catch(error => {
        console.log(JSON.stringify(error, null, 2));
        //cb = (isSuccessful, error);
        callBackFx(false, error.response);
      });

    return mPromise;
  }
}
