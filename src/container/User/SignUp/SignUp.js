import React ,{Component} from 'react';
import InputField from '../../../component/InputField/InputField';
import Grid from '@material-ui/core/Grid';


const FIELDS = [    
    {name: 'username', type: 'text', label: 'Username'},
    {name: 'password', type: 'password', label: 'Password'},
    {name: 'email', type: 'email', label: 'E-mail Address'},
    {name: 'confirmPassword', type: 'password', label: 'Confirm Password'},
    {name: 'firstName', type: 'text', label: 'First Name'},
    {name: 'lastName', type:'text', label:'Last Name'}

];

const COUNTRYS = [
    'India',
    'Aus',
    'America',
    'China'
]

class SignUp extends Component{

    
    handleSignup = (event)=>{
        event.preventDefault();
    }

    render(){
        const inputFields = FIELDS.map(field =>
            <InputField key={field.name}
                        type={field.type} name={field.name} label={field.label}
                        onChange={this.handleInputChange} />
        )
        return(
            <div>
                <h3>SignUp component</h3>
                <form onSubmit={this.handleSignup}>
                   {inputFields}
                   
                  
              
                   <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <label>Male</label>
                            <input type="radio" name="gender"  value="male" />
                        </Grid>
                        <Grid item xs={6}>
                            <label>Female</label>
                             <input type="radio" name="gender" value="female" />
                        </Grid>
                   </Grid>


                   <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <label>Country</label>
                           
                        </Grid> 
                        <Grid item xs={6}>
                           <select>
                                    {COUNTRYS.map(c=>(
                                        <option name={c} key={c} value={c}>{c}</option>
                                    ))}
                           </select>
                        </Grid>
                   </Grid>
                   

                   <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <label>Actions</label>
                        </Grid>
                        <Grid item xs={6}>
                            <button className="btn btn-primary">Clear</button> 
                            <button className="btn btn-primary">Register</button>
                        </Grid>
                   </Grid>

                   
                    

                </form>
            </div>
        )
    }
}


export default SignUp;