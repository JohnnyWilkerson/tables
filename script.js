class Movie {
    constructor(title, director, year){
        this.title=title;
        this.director=director;
        this.year=year;
    }
    
}

addMovieToList = (Movie) => {
    const list = document.getElementById("movtable");
    const row = document.createElement("tr");
    row.innerHTML='<td>${Movie.title}</td><td>${Movie.director}</td><td>${Movie.year}</td>';
    list.appendChild(row);
}

document.querySelector("#theForm").addEventListener('submit', addMovie)

function addMovie(e){
    e.preventDefault();
    const title=document.querySelector("#movtitle").value;
    const director=document.querySelector("#movdirector").value;
    const year=document.querySelector("#movyear").value;

    const movie = new Movie(title, director, year);
    addMovieToList(movie);
}