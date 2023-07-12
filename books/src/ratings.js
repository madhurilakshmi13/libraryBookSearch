import './App.css';

export function Below4(){
    const genre=[
        {id:1,bookName:"The hunger games",ImageUrl:"https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg",year:2008,author:"Suzanne Collins" ,ratings :4.5,publication:"Scholastic Press"},
        {id:2,bookName:"Catching Fire",ImageUrl:"https://m.media-amazon.com/images/I/51PPgLAYtfL._AC_UF1000,1000_QL80_.jpg ",year:2009,author:"Suzanne Collins" ,ratings :4.3,publication:"Scholastic Press"},
      ]
    
            const items=genre.map(i=>
                <li key={i.id}>
                    <img 
                     src={i.ImageUrl}
                     alt={i.bookName}
                     height="150px"
                     />
                     <p><strong>{i.bookName}</strong></p>
                     <p>{i.author}</p>
                     <p>{i.year}</p>
                     <p>{i.ratings}</p>
                     <p>{i.publications}</p>
                        </li>
            )
             return <ul>{items}</ul>;
  }

  export function From4(){
    const genre=[
        {id:1,bookName:"The hunger games",ImageUrl:"https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg",year:2008,author:"Suzanne Collins" ,ratings :4.5,publication:"Scholastic Press"},
        {id:2,bookName:"Catching Fire",ImageUrl:"https://m.media-amazon.com/images/I/51PPgLAYtfL._AC_UF1000,1000_QL80_.jpg ",year:2009,author:"Suzanne Collins" ,ratings :4.3,publication:"Scholastic Press"},
      ]
    
            const items=genre.map(i=>
                <li key={i.id}>
                    <img 
                     src={i.ImageUrl}
                     alt={i.bookName}
                     height="150px"
                     />
                     <p><strong>{i.bookName}</strong></p>
                     <p>{i.author}</p>
                     <p>{i.year}</p>
                     <p>{i.ratings}</p>
                     <p>{i.publications}</p>
                        </li>
            )
             return <ul>{items}</ul>;
  }

  export function To5(){
    const genre=[
        {id:1,bookName:"The hunger games",ImageUrl:"https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg",year:2008,author:"Suzanne Collins" ,ratings :4.5,publication:"Scholastic Press"},
        {id:2,bookName:"Catching Fire",ImageUrl:"https://m.media-amazon.com/images/I/51PPgLAYtfL._AC_UF1000,1000_QL80_.jpg ",year:2009,author:"Suzanne Collins" ,ratings :4.3,publication:"Scholastic Press"},
      ]
    
            const items=genre.map(i=>
                <li key={i.id}>
                    <img 
                     src={i.ImageUrl}
                     alt={i.bookName}
                     height="150px"
                     />
                     <p><strong>{i.bookName}</strong></p>
                     <p>{i.author}</p>
                     <p>{i.year}</p>
                     <p>{i.ratings}</p>
                     <p>{i.publications}</p>
                        </li>
            )
             return <ul>{items}</ul>;
  }

  export default function Ratings(){
    <Below4></Below4>
  }