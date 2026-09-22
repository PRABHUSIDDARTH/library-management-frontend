import { useState } from 'react'
function Book(){
   
    const [books,setBooks]=useState([]);
    const [Title,setTitle]=useState("");

    return(
        <div>
            <h2>
                Books<br />

                <input
                    value={Title}
                    onChange={event=>{setTitle(event.target.value)}}
                />
                <button onClick={()=>setBooks([...books,{ id: books.length+1, title: Title }])}>
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