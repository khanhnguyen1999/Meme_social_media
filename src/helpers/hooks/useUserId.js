import {useSelector } from 'react-redux'
import {parseJwt} from '../index'

export default function useUserId(){
    const token = useSelector(state=>state.Auth.ACCESS_TOKEN);
    try{
        const parseObj = parseJwt(token.token);
        if(parseObj && parseObj.id){
            return parseObj.id
        }
        return null;
    }
    catch(e){
        return null;
    }
}