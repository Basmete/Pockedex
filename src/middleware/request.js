import axios from 'axios';

 
export default function requestMiddleware({ dispatch }) {
  return next => action => {
    const { request, type, success, failure, ...rest } = action;
 
    if (!request) return next(action);
   
    const SUCCESS = success || type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = failure || type + '_FAILURE';
    next({ ...rest, type: REQUEST });
  
    axios.request(request)
      .then((res) => dispatch({ ...rest, data: res.data, type: SUCCESS }))
      .catch(( res ) => dispatch({ ...rest, message: JSON.stringify(res), type: FAILURE }));
   };
}