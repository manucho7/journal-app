import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    //renombrando active a note
    const { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title } = formValues;

// ejecutar esa accion solo si el id de la nota es diferente,
// caso contrario no lo tengo que disparar
    const activeId = useRef( note.id );
//almacenar variable mutable que no re dibuja el componente si cambia
    useEffect(() => {

        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }
        
    }, [note, reset])
    
    return (
        <div className="notes__main-content">
            <NoteAppBar />
            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <textarea 
                    placeholder="what happened today..?"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                >
                </textarea>

                {
                    (note.url)
                    && (
                        <div className="notes__image">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAx4O0VY3n7SE7TQPbqn2uyG2s3mekuq6SnA&usqp=CAU"
                                alt="imagen"
                            />
                        </div>
                    )
                }
            </div>

        </div>
    )
}
