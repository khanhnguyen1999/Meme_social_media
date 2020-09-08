
/*
1. Tạo ra một custom Hooks useScrollEndPage
2. Tham số truyền vào
  - callback : function -> xử lý mỗi khi scroll tới cuối trang sẽ gọi lại hàm này
  - time : optional -> không xử lý callback liên tục
    -> truyền vào time = 3000s -> thời gian xử lý hàm callback phải cách nhau ít nhất 3s
3. Áp dụng Javascript DOM để xử lý scroll thanh cuộn
  -> check xem khi nào ở cuối trang
  -> callback là một hàm nằm trong homepage -> xử lý
*/

import {useEffect} from 'react'

export default function useScrollEndPage(callback=()=>{},time=1000){
    // callback lúc này nó đang là gia trị cũ
    // useEffect nó chỉ chạy 1 lần -> truyền tham chiếu callback lần đầu tiên thôi
    // lần sau callback mới tạo và thay đổi -> không truyền tiếp tham chiếu mới vào useEffect
    console.log("callback ",callback)
    useEffect(()=>{
        const handler = ()=>{
            const scrollTop = window.scrollY;
            const height = window.innerHeight;
            const body = document.querySelector("body").scrollHeight;
            if(scrollTop+height>=body-50){
                console.log("vl");
                callback()
            }
        }
        window.addEventListener("scroll",handler);

        // clear -> unMount
        return ()=>{
            window.removeEventListener("scroll",handler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[callback])
}