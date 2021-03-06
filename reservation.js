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
            fuel = ['Electric', 'Gasoline'];
            gear = 'none';
            break;
        case 2:
            remove_fuel();
            fuel = ['Hybird', 'Gasoline', 'Diesel'];
            gear = 'Manuel';
            break;
        case 3:
            remove_fuel();
            fuel = ['Electric', 'Hybird', 'Gasoline', 'Diesel'];
            gear = 'Manuel';
            break;
        case 4:
            remove_fuel();
            fuel = ['Diesel'];
            gear = 'Manuel';
            break;
        case 5:
            remove_fuel();
            fuel = ['Hybird', 'Gasoline', 'Diesel'];
            gear = 'Auto';
            break;
        case 6:
            remove_fuel();
            fuel = ['Diesel'];
            gear = 'Auto';
            break;
        case 7:
            remove_fuel();
            fuel = ['Diesel', 'Gasoline'];
            gear = 'Manuel';
            break;
    }

    // fill fuel and gear
    for (let i = 0; i < fuel.length; i++) {
        form.fuel.options[i + 1].innerText = fuel[i];
    }
    form.gear.options[1].innerText = gear;


});

document.querySelector("#calculation").addEventListener('click', function (e) {
    e.preventDefault();
    // get value of select tags
    let cars = document.querySelector("body > form > select:nth-child(1)").value;
    let carfuel = document.querySelector("body > form > select:nth-child(2)").value;
    let day = document.querySelector("body > form > input[type=number]").value;
    let price;
    console.log(cars);
    console.log(carfue l);
    console.log(gear);

    // motorbike transmission calculation
    if (gear == 'none') {
        if (cars == 'Motorbike') {
            if (carfuel == 'Electric') {
                price = (10 * 0.05) + 10;
            }
            if (carfuel == 'Gasoline') {
                price = (10 * 0.14) + 10;
            }
        }
    }
    // auto transmission calculation
    if (gear == 'Auto') {
        // Sedan calculation
        if (cars == 'Sedan') {
            if (carfuel == 'Hybird') {
                price = ((20 * 0.19) + (20 * 0.09)) + 20;
            }
            if (carfuel == 'Gasoline') {
                price = ((20 * 0.19) + (20 * 0.14)) + 20;
            }
            if (carfuel == 'Diesel') {
                price = ((20 * 0.19) + (20 * 0.21)) + 20;
            }
        }
        // Truck calculation
        if (cars == 'truck') {
            if (carfuel == 'Diesel') {
                price = ((250 * 0.19) + (250 * 0.21)) + 250;
            }
        }
    }
    // manuel transmission calculation
    if (gear == 'Manuel') {
        // compact calculation
        if (cars == 'compact') {
            if (carfuel == 'Hybird') {
                price = 14 + (14 * 0.09);
            }
            if (carfuel == 'Gasoline') {
                price = 14 + (14 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 14 + (14 * 0.21);
            }
        }
        // subcompact calculation
        if (cars == 'subcompact') {
            if (carfuel == 'Hybird') {
                price = 12 + (12 * 0.09);
            }
            if (carfuel == 'Gasoline') {
                price = 12 + (12 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 12 + (12 * 0.21);
            }
            if (carfuel == 'Electric') {
                price = 12 + (12 * 0.05);
            }
        }
        // Utility calculation
        if (cars == 'utility') {
            if (carfuel == 'Diesel') {
                price = 16 + (16 * 0.21);
            }
        }
        // Heavy ewuipement calculation
        if (cars == 'heavy equipement') {
            if (carfuel == 'Diesel') {
                price = 900 + (900 * 0.21);
            }
            if (carfuel == 'Gasoline') {
                price = 900 + (900 * 0.14);
            }
        }
    }

    price = price * day;
    console.log(price);
    

    document.getElementById("price_f").innerHTML = price

});