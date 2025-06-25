class  MediaItem {
    constructor(title, year, genre){
        this.title = title;
        this.year =  year;
        this.genre =  genre;
    }
    getSummary(){
        return `title: ${this.title} year: ${this.year} genre: ${this.genre}`;
    }
}

class Book extends MediaItem{
    constructor(author, pageCount, title, year, genre){
        super(title, year, genre);
        this.author = author;
        this.pageCount = pageCount;
    }
    getSummary(){
        return `The book ${this.title},
         was written in ${this.year},
          by ${this.author},
           in the ${this.genre} genre,
            and is ${this.pageCount} pages long.`;
    }
}

class Movie extends MediaItem{
    constructor(director, durationMinutes, title, year, genre){
        super(title, year, genre);
        this.director =  director;
        this.durationMinutes = durationMinutes;
    }

    getSummary(){
        return `$The movie ${this.title},
         from the ${this.genre} genre,
          was created in ${this.year},
           director by ${this.director},
            and is ${this.durationMinutes} minutes long.`;
    }
}

class Library{
    #mediaItemArray = [];

    addItem(item){
        if (!(item instanceof MediaItem)){
                throw new Error("Only MediaItem instances can be added to the library.");
        }
        this.#mediaItemArray.push(item)
    }

    search(term) {
    const lowerTerm = term.toLowerCase();
     const result = this.#mediaItemArray.filter(item => item.title.toLowerCase().includes(lowerTerm));
     return result;
    }

    listByGenre(genre){
        const result = this.#mediaItemArray.filter(item => item.genre == genre);
        return result;
    }
}


