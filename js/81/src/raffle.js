
export default function (names) {
    const numberOfWinners = document.getElementById('numberOfWinners').value;
    names = names.filter(names => names.isChecked === true);

    if (numberOfWinners > names.length || numberOfWinners < 1) {
        window.alert('Error! You entered an invalid number.');
    } else {
        for (let index = 0; index < numberOfWinners; index++) {
            names = names.filter(names => names.isChecked === true);

            const pick = Math.floor(Math.random() * names.length);
            if (names[pick]) {
                const { first, last } = names[pick];
                document.getElementById('postwinners').innerText += first + ' ' + last + '\n';
                names[pick].isChecked = false;
            }
        }
    }
}

