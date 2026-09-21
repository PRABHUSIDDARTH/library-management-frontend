import { useState } from 'react'
function Book(){
   
    const [books,setBooks]=useState([]);
    

    return(
        <div>
            <h2>
                Books<br />
                <button onClick={()=>setBooks([...books,{ id: books.length+1, title: "Java" }])}>
                    Add
                </button>
                <p>Number of Books: {books.length}</p>
                {books.map(book=>(                    
                    <p key={book.id} >
                        {book.id} - {book.title} 
                    </p>
                ))}
            </h2>
        </div>
    )
}

export default Book 