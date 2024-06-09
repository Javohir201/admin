// console.log('Javohir');
// console.log(7);
// console.log(5+6);
// console.log('5+6');

// document.write('Rustam <br>')
// document.write('Biloliddin')

// alert('Salom');
// document.write('Rustam')
// alert(15);


    // let user_name = ('Javohir');
    // let userAge = 14;

    // document.write('Ismi ' + user_name + '.Yoshi ' + userAge + 'da');

    // function salomber(username){
    //     document.write("Salom " + username + '<br>');
    // }

    // salomber("Javohir");
    // salomber("Diyorbek");
    // salomber("Islom");

    let login = prompt('Login kiriting');

    if (login == "admin") {

        let password = prompt('Parolni kiriting');
        if (password == 12345) {
            alert ("Xush kelibsiz Admin!");
        } else {
            alert("parol xato");
        }

    } else {
        alert("Kirish mumkin emas");
    }