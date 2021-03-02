import React,{useState} from 'react'
 
export const WeatherCard = ({submit}) => {
    const [title,setTitle] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        submit(title);
    }


    return (
        <div>
            <form   onSubmit={onSubmit} style={{display:'flex'}}>
                  
                  <input 
                  type="title" 
                  name="location" 
                  placeholder="Add Location"
                  value = {title}
                  onChange={(e)=>setTitle(e.target.value)} 
                   />
                  <input type="submit" value = "Submit" className="submitbtn"  style={{flex:'1'}} />
    
                  
            </form>  
    
            
        </div>
    )
}
