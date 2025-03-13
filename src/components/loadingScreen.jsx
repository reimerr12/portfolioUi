import { useEffect, useState } from "react"

export const LoadingScreen = ({onComplete}) => {
    const[text,setText] = useState("");
    const fullText = "Hello There";

    useEffect(()=>{
        let index = 0;
        const interval = setInterval(()=>{
            setText(fullText.substring(0,index));
            index++;

            if(index > fullText.length){
                clearInterval(interval);
                setTimeout(()=>{
                    onComplete();
                },1000);
            }
        },100);

        return()=>clearInterval(interval);
    },[onComplete]);
    
    return(
        <div className="fixed inset-0 z-70 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-5xl font-mono font-bold">
                {text}<span className="animate-blink ml-1">|</span>
            </div>  

            <div className="w-[300px] h-[4px] bg-gray-800 rounded relative">
                <div className="w-[40%] h-full bg-blue-500 rounded shadow-lg shadow-[#3b82f8] animate-loading-bar">
                </div>
            </div>
        </div>
    )
}