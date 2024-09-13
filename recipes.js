$(document).ready(function () {
    $('#searchButton').on('click', function () {
        $.ajax({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${$('#searchValue').val()}&apiKey=2af2a1d57f1d474587efe6e30595d172 `
        }).done(function (data) {
            document.querySelector('.searchResults').innerHTML = '';
            data.results.forEach(recipe => {
                const searchResults = document.querySelector('.searchResults');

                const newItem = document.createElement('div');
                newItem.classList.add('recipe');
                newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
                searchResults.appendChild(newItem);
            });
        });
    });
});
