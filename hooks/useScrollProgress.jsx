import React , {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion ,setCompletion] = useState (1);

    useEffect(()=> {
     const updateScrollCompletion = () => {
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;

         if (scrollHeight) {
          setCompletion(Number(currentProgress/scrollHeight).toFixed(2) * 100);
         }

     };

    //  Event 
    window.addEventListener('scroll', updateScrollCompletion);
    // Clear Event
    return () => window.removeEventListener('scroll', updateScrollCompletion);
    },[])
  return completion;
};
export default useScrollProgress