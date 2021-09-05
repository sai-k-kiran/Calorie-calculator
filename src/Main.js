 import React, { useEffect, useState } from 'react'
 import Calc from './Calc'
 import Quotes from './Quotes'

 const Main = () => {
	const [values, setValues] = useState({
	weight:'', 
	height:'',
	age:'',
	activity:1.2,
	gender: 5,
	})

	const random = Math.ceil(Math.random()*Quotes.length)
	const obj = Quotes.find(object => object.id === random)
	const [quote, setQuote] = useState('')
	
	useEffect(()=>{
		setQuote(obj.quote)
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	const [submitted, setSubmitted] = useState(false)
	const [valid, setValid] = useState(false)
	const [records, setRecords] = useState([])

	const handleChange = (e) => {
		const input = e.target.name;
		const value = e.target.value;
		setValues({...values, [input]: value})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		if(values.weight && values.height && values.age){
			setValid(true)
		}
		setSubmitted(true);
		const newRecords = {...values, id : new Date().getTime().toString()}
		setRecords([...records, newRecords])
		console.log(values)
	}

 	return(
 		<>
		 <section className='container'>
	 		<div className="title">
	 			<h1>Calorie Calculator</h1>
				 <p>Calculate the Total Daily Energy Expenditure and measure the calories you require/day</p>
	 		</div>
			 <hr className='underline'></hr>

			 <form className='calc-block'  onSubmit={handleSubmit}>
				<table className='input-block'>
					<tbody>
					<tr>
						<td>
							<label htmlFor='weight'>Weight</label>
						</td>
						<td>
							<input className={submitted && !values.weight ? 'error' : 'inputs'} 
							type='number'
							name='weight' 
							autoCapitalize='off'
							value={values.weight} 
							onChange={handleChange} 
							placeholder='kg'/>
						</td>
						<td style={{width: '120px'}}>{submitted && !values.weight ?<p className='warning'>Enter a value</p> : null }</td>
					</tr>
					<tr>
						<td>
							<label htmlFor='height'>Height</label>
						</td>
						<td>
							<input className={submitted && !values.height ? 'error' : 'inputs'} 
							name='height' 
							type='number'
							value={values.height} 
							onChange={handleChange} 
							placeholder='cms'/>
						</td>
						<td>{submitted && !values.height ?<p className='warning'>Enter a value</p> : null }</td>
					</tr>
					<tr>
						<td>
							<label htmlFor='age'>Age</label>
						</td>
						<td>
							<input  className={submitted && !values.age ? 'error' : 'inputs'} 
							name='age' 
							type='number'
							value={values.age} 
							onChange={handleChange}/>
						</td>
						<td>{submitted && !values.age ?<p className='warning'>Enter a value</p> : null }</td>
					</tr>
					<tr>
						<td>
							<label>Activity</label>
						</td>
						<td>
						<select name='activity' value={values.activity} onChange={handleChange}>	
							<option value="1.20">Sedentary</option>
							<option value="1.375">Light Exercise</option>
							<option value="1.55">Moderate Exercise</option>
							<option value="1.725">Heavy Exercise</option>
						</select>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor='gender'>Gender</label>
						</td>
						<td>
							<select name='gender' value={values.gender} onChange={handleChange}>	
								<option value="5">Male</option>
								<option value="-161">Female</option>
							</select>
						</td> 
					</tr>
					</tbody>
				</table>
				<button type='submit' className='submit-btn'>Calculate</button>
			 </form>
			 {submitted && valid ? <Calc values={values} /> : null}
			 </section>
			 <div className='sayings'>
				 {submitted && valid ? null : <p><i>{quote}</i></p>}
			 </div>
			 <footer className='footer'>
				<p>Calorie Calculator</p>
			</footer>
			
 		</>
	 )	
 }

 export default Main

