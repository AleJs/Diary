import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValue, SetFormvalue] = useState(initialState);
  const reset = (newFormState = initialState) => {
    SetFormvalue(newFormState);
  };

  const handleInputChange = ({ target }) => {
    SetFormvalue((formValue) => ({
      ...formValue,
      [target.name]: target.value,
    }));
  };
  return [formValue, handleInputChange, reset];
};

/* import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}*/
