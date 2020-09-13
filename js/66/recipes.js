(function () {
    'use strict';

    const display = $('#display');
    const buttons = $('input');

    function getElem() {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].checked) {
                return buttons[i].id;
            }
        }
    }

    function jsonFood(jsonFile) {
        const choice = getElem();
        for (let i = 0; i < jsonFile.length; i++) {
            if (jsonFile[i].name.split(" ").join("") === choice) {
                return jsonFile[i];
            }
        }
    }

    function displayRecipe(recipe) {
        const foodChoice = jsonFood(recipe);
        display.text(`${foodChoice.name} \nIngredients: ${foodChoice.ingredients}`);
        $('img').attr('src', foodChoice.image);
    }

    buttons.on('change', () => {
        fetch('recipes.json')
            .then(response => response.json())
            .then(recipe => {
                displayRecipe(recipe);
            })
            .catch(error => console.error(error));
    });
}());

