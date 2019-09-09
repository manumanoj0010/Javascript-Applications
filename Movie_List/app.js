// Movie Class: Represents a Movie
class Movie {
    constructor(moviename, language, genre) {
      this.moviename = moviename;
      this.language = language;
      this.genre = genre;
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayMovies() {
      const Movies = Store.getMovies();
  
      Movies.forEach((Movie) => UI.addMovieToList(Movie));
    }
  
    static addMovieToList(Movie) {
      const list = document.querySelector('#movie-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${Movie.moviename}</td>
        <td>${Movie.language}</td>
        <td>${Movie.genre}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteMovie(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#movie-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.querySelector('#moviename').value = '';
      document.querySelector('#language').value = '';
      document.querySelector('#genre').value = '';
    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getMovies() {
      let Movies;
      if(localStorage.getItem('Movies') === null) {
        Movies = [];
      } else {
        Movies = JSON.parse(localStorage.getItem('Movies'));
      }
  
      return Movies;
    }
  
    static addMovie(Movie) {
      const Movies = Store.getMovies();
      Movies.push(Movie);
      localStorage.setItem('Movies', JSON.stringify(Movies));
    }
  
    static removeMovie(genre) {
      const Movies = Store.getMovies();
  
      Movies.forEach((Movie, index) => {
        if(Movie.genre === genre) {
          Movies.splice(index, 1);
        }
      });
  
      localStorage.setItem('Movies', JSON.stringify(Movies));
    }
  }
  
  // Event: Display Movies
  document.addEventListener('DOMContentLoaded', UI.displayMovies);
  
  // Event: Add a Movie
  document.querySelector('#movie-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const moviename = document.querySelector('#moviename').value;
    const language = document.querySelector('#language').value;
    const genre = document.querySelector('#genre').value;
  
    // Validate
    if(moviename === '' || language === '' || genre === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      // Instatiate Movie
      const movie = new Movie(moviename, language, genre);
  
      // Add Movie to UI
      UI.addMovieToList(movie);
  
      // Add Movie to store
      Store.addMovie(movie);
  
      // Show success message
      UI.showAlert('Movie Added', 'success');
  
      // Clear fields
      UI.clearFields();
    }
  });
  
  // Event: Remove a Movie
  document.querySelector('#movie-list').addEventListener('click', (e) => {
    // Remove Movie from UI
    UI.deleteMovie(e.target);
  
    // Remove Movie from store
    Store.removeMovie(e.target.parentElement.previousElementSibling.textContent);
  
    // Show success message
    UI.showAlert('Movie Removed', 'success');
  });