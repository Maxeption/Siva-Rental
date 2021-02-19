


    document.getElementById("result").addEventListener('click', function () {


    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || subject == "" || message == "") {
        
    Swal.fire('Error...', "Please fill the form!", 'error',);



    }
    else {

    Swal.fire('Received!', `Name: ${name} <br> Email: ${email} <br> Subject: ${subject} <br> Message: ${message}`, 'success',);
    }
});



function remove_fuel() {
    for (let i = 1; i < form.fuel.length; i++) {
        form.fuel.options[i].innerText = '';
    }
}
let gear;
form.vehicle.addEventListener('change', function () {
    let index = form.vehicle.selectedIndex;
    let fuel;

    // choose vehicle
    switch (index) {
        case 0:
            remove_fuel();
            break;
        case 1:
            remove_fuel();
            fuel = ['Electrique', 'Essence'];
            gear = 'none';
            break;
        case 2:
            remove_fuel();
            fuel = ['Hybirde', 'Essence', 'Diesel'];
            gear = 'Manuelle';
            break;
        case 3:
            remove_fuel();
            fuel = ['Electrique', 'Hybirde', 'Essence', 'Diesel'];
            gear = 'Manuelle';
            break;
        case 4:
            remove_fuel();
            fuel = ['Diesel'];
            gear = 'Manuelle';
            break;
        case 5:
            remove_fuel();
            fuel = ['Hybirde', 'Essence', 'Diesel'];
            gear = 'Automatique';
            break;
        case 6:
            remove_fuel();
            fuel = ['Diesel'];
            gear = 'Automatique';
            break;
        case 7:
            remove_fuel();
            fuel = ['Diesel', 'Essence'];
            gear = 'Manuelle';
            break;
    }

    // fill fuel and gear
    for (let i = 0; i < fuel.length; i++) {
        form.fuel.options[i + 1].innerText = fuel[i];
    }
    form.gear.options[1].innerText = gear;


});

document.querySelector("body > form > button").addEventListener('click', function () {
    // get value of select tags
    let cars = document.querySelector("body > form > select:nth-child(1)").value;
    let carfuel = document.querySelector("body > form > select:nth-child(2)").value;
    let day = document.querySelector("body > form > input[type=number]").value;
    let price;
    console.log(cars);
    console.log(carfuel);
    console.log(gear);

    // calcule boite de vittes none de moto
    if (gear == 'none') {
        if (cars == 'moto') {
            if (carfuel == 'Electrique') {
                price = (10 * 0.05) + 10;
            }
            if (carfuel == 'Essence') {
                price = (10 * 0.14) + 10;
            }
        }
    }
    // calcule boite de vittes auto
    if (gear == 'Automatique') {
        // calcule berlin
        if (cars == 'berlin') {
            if (carfuel == 'Hybirde') {
                price = ((20 * 0.19) + (20 * 0.09)) + 20;
            }
            if (carfuel == 'Essence') {
                price = ((20 * 0.19) + (20 * 0.14)) + 20;
            }
            if (carfuel == 'Diesel') {
                price = ((20 * 0.19) + (20 * 0.21)) + 20;
            }
        }
        // calcule camion
        if (cars == 'camion') {
            if (carfuel == 'Diesel') {
                price = ((250 * 0.19) + (250 * 0.21)) + 250;
            }
        }
    }
    // calcule boite de vittes manuelle
    if (gear == 'Manuelle') {
        // calcule compact
        if (cars == 'compact') {
            if (carfuel == 'Hybirde') {
                price = 14 + (14 * 0.09);
            }
            if (carfuel == 'Essence') {
                price = 14 + (14 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 14 + (14 * 0.21);
            }
        }
        // calcule citadin
        if (cars == 'citadin') {
            if (carfuel == 'Hybirde') {
                price = 12 + (12 * 0.09);
            }
            if (carfuel == 'Essence') {
                price = 12 + (12 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 12 + (12 * 0.21);
            }
            if (carfuel == 'Electrique') {
                price = 12 + (12 * 0.05);
            }
        }
        // calcule utilitaire
        if (cars == 'utilitaire') {
            if (carfuel == 'Diesel') {
                price = 16 + (16 * 0.21);
            }
        }
        // calcule engin de chantier
        if (cars == 'engin de chantier') {
            if (carfuel == 'Diesel') {
                price = 900 + (900 * 0.21);
            }
            if (carfuel == 'Essence') {
                price = 900 + (900 * 0.14);
            }
        }
    }

    price = price * day;
    console.log(price);
    aler

});