import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0049/9584/2138/products/Huebert-World-Simple-Patterns-Background-Vector-Repeating-Download_02_1024x1024.jpg?v=1594399320)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>

                <p className="journal__entry-content">
                    Cillum mollit magna esse sint.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>30</h4>
            </div>

        </div>
    )
}
