import { useEffect, useState } from "react";
import "../Form/Form.css";

export function Form() {

    let [info , setInfo] = useState();
    
    
         
       
    
    

   

    return (
        <div className="form">
            <div className="container">
                <div className="form__inner">
                    <form className="form__form">
                        <input type="text" className="form__input" />
                       <select name="" id="">
                        <option value="fewfewf">wfwef</option>
                       {
                             useEffect(() => {
                                fetch('https://restcountries.com/v3.1/all')
                                .then(response => response.json())
                                .then(info => setInfo(console.log(info.map(el => {
                                    console.log(el.region);
                                })))
                                
                                )
                                                              
                            } , [] )
                        }
                       </select>
                    </form>
                </div>
            </div>
        </div>
    );
}
