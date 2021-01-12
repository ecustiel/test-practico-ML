import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {useForm} from '../hooks/useForm';

export const SearchScreen = ({history}) => {
    
    const location = useLocation(); //custom hook para conseguir  la location con el search adentro
    const {q = ''} = queryString.parse(location.search); //le asigno a la q un string vacio para qu eno me tire undefined

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText} = formValues;


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q:${searchText}`);
    }
    
    return (
        <div>
            <h1>Busqueda Screen</h1>
            <form onSubmit={handleSearch}>
                            <input
                                type='text'
                                placeholder='Nunca dejes de Buscar'
                                className='form-control'
                                name='searchText'
                                value={searchText}
                                onChange={handleInputChange}
                                autoComplete='off'
                            />

                            <button
                                type='submit'
                                className='btn m-1 btn-block btn-outline-primary'
                            >
                                Search...
                            </button>
                        </form>
        </div>
    )
}
