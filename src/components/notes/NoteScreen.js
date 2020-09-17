import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />
            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea 
                    placeholder="what happened today..?"
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAx4O0VY3n7SE7TQPbqn2uyG2s3mekuq6SnA&usqp=CAU"
                        alt="imagen"
                    />
                </div>

            </div>

        </div>
    )
}
