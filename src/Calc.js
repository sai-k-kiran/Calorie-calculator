import React from 'react'
import {AiFillInfoCircle} from 'react-icons/ai'

const Calc = ({values}) => {
    function Bmr_men(weight, height, age, gender) {
        let bmr = (10 * weight) + (6.25 * height) - (5 * age) + parseFloat(gender) ;
        return bmr;
    }
    const Bmr = Bmr_men(values.weight, values.height, values.age, values.gender);
    const Calories = (Bmr*values.activity).toFixed(2);

    const BMI = values.weight/((values.height/100)**2);
    const category = (BMI) =>{
        if(BMI < 16){
            return "underweight"
        }else if(BMI >= 16  && BMI < 18.5){
            return "Moderately thin"
        }else if(BMI >= 18.5  && BMI < 25){
            return "Normal"
        }else if(BMI >= 25  && BMI < 30){
            return "Overweight"
        }else if(BMI >= 30){
            return "Obese"
        }
    }

    const ideal = (gender, height) => {
        if(gender == 5){
            return Math.floor((52 + ((height/2.54 - 60)*1.9)))
        }else if(gender == -161){
            return Math.floor((49 + ((height/2.54 - 60)*1.7)))
        }
    }

    return (
        <>
        <div className='result'>
            <h1>{Math.ceil(Calories)} calories</h1>
            <p className='info-circle'><AiFillInfoCircle />&nbsp;<span>Using 
            <a href='https://pubmed.ncbi.nlm.nih.gov/15883556/' target='blank' style={{textDecoration:'none'}}> Mifflin-St Jeor</a> equation</span>
            </p>
            <h3>This many calories/day you need to maintain your weight</h3>

            <p>Based on your stats, the best estimate for your maintenance calories is {Calories} calories per day 
                based on the Mifflin-St Jeor Formula,<br /> which is widely known to be the most accurate. 
                The table below shows the difference if you were to have selected a different activity level.
            </p>
        </div>
        <section className='rows'>
                <div className='info'>
                    <table className='list-table'>
                        <tbody>
                        <tr>
                            <td>Basal Metabolic Rate</td>
                            <td>{Bmr} calories/day</td>
                        </tr>
                        <tr>
                            <td>Sedentary</td>
                            <td>{(Bmr*1.2).toFixed(2)} calories/day</td>
                        </tr>
                        <tr>
                            <td>Light Exercise</td>
                            <td>{(Bmr*1.375).toFixed(2)} calories/day</td>
                        </tr>
                        <tr>
                            <td>Moderate Exercise</td>
                            <td>{(Bmr* 1.55).toFixed(2)} calories/day</td>
                        </tr>
                        <tr>
                            <td>Heavy Exercise</td>
                            <td>{(Bmr*1.725).toFixed(2)} calories/day</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='result-box'>
                    <table className='result-table'>
                        <tbody>
                        <tr>
                            <td>Body Mass Index(BMI)</td>
                            <td>{BMI.toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Ideal weight</td>
                            <td>{ideal(values.gender, values.height)} - {ideal(values.gender, values.height) + 2} kgs</td>
                        </tr>
                        <tr>
                            <td>Weight category</td>
                            <td>{category(BMI)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            
        </>
    )
}

export default Calc