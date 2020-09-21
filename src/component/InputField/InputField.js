import React from 'react';
import Grid from '@material-ui/core/Grid';

const InputField = (props)=>{

    return(
        <div>
            <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <label>{props.label}</label>
                    </Grid>
                    <Grid item xs={6}>
                            <input type={props.type} name={props.name}
                        defaultValue={props.defaultValue} placeholder={props.placeholder || props.label}
                    
                        onChange={props.onChange} {...props} />
                    </Grid>
            </Grid>
            
            
        </div>
    )   
}

export default InputField;