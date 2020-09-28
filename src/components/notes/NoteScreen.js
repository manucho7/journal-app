import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch();
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

    useEffect(() => {
        dispatch( activeNote( formValues.id, { ...formValues } ) );
    }, [formValues, dispatch])
    
    return (
        <div className="notes__main-content">
            <NoteAppBar />
            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <textarea 
                    placeholder="what happened today..?"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                >
                </textarea>

                {
                    (note.url)
                    && (
                        <div className="notes__image">
                            <img 
                                src={ note.url }
                                alt="imagen"
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
