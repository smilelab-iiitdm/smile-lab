import {useState, useEffect} from "react";

const useFormAdd = () =>{
    const[values,setValues] = useState({
        title: '',
        desc: '',
        category: '',
        volume: '',
        pages: '',
        year: '',
        doi: '',
        authors: ''
    })

    const [errors,setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange =e => {
        const {name, value} = e.target
        setValues({
          ...values, 
          [name] : value 
        });
    };

    async function performPostHttpRequest(flink,body) {
        if(!flink || !body)
        {
          throw new Error("Some params not sent");
        }
        try{
          const rawRes = await fetch(flink,{
            method:"POST",
            headers:{
              "Content-type":"application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
          });
    
          const content = await rawRes.json();
          return content;
        }
        catch(err) {
          console.error(`Error at fetch POST: ${err}`);
          throw err;
        }
      };

    const handleSubmit = e => {
        e.preventDefault();

        const response = performPostHttpRequest('http://localhost:5000/publications/add',values);
          console.log(response);
      
          if(response)
            alert("success");
          else
            alert("we failed");

        setIsSubmitting(true);
    };

    return {handleChange,values, handleSubmit}
}

export default useFormAdd;