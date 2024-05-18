import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setImputValue] = useState('');
    
    const onInputChange  = ({target}) =>{
        setImputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1)  return;

        //setCategories( (categories) => [inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setImputValue('');
    }
    
  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>

  )
}
