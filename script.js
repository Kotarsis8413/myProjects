function random(to) {
    return Math.floor(Math.random() * to);
}

function generate() {
    var lengS = document.getElementById('leng').value;
    var numsS = document.getElementById('nums');
    var specSymbolsS = document.getElementById('specSyms');

    var ass = {
        0: specSymbols = {
            1: "@",
            2: "#",
            3: "!",
            4: "$",
            5: "%",
            6: "*",
            7: "[",
            8: "]",
            9: "?",
            10: "@",
            11: "#",
            12: "!",
            13: "$",
            14: "%",
            15: "*",
            0: "."
        },
        
        1: abc = {
            1: "a",
            2: "A",
            3: "b",
            4: "B",
            5: "g",
            6: "G",
            7: "Y",
            8: "J",
            9: "X",
            10: "U",
            11: "u",
            12: "pa",
            13: "c",
            14: "C",
            15: "kL",
            0: "q"
        },

        2: nums = {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            0: 0
        }
    }
    
    try {
        var output = "";
        if (numsS.checked) {
            if (specSymbolsS.checked) {
                console.log(lengS, true, true);

                while (output.length < lengS) {
                    a1 = random(3);
                    a2 = random(15);
                    console.warn("!!RANDOM NUMBERS!!");
                    console.warn(a1, a2);
                    output += ass[a1][a2];
                    console.log(output);
                }

            }
            else {
                console.log(lengS, true, false);
                
                while (output.length < lengS) {
                    a1 = random(3);
                    if (a1 == 0) {
                        a1 = 1
                    }
                    a2 = random(15);
                    console.warn("!!RANDOM NUMBERS!!");
                    console.warn(a1, a2);
                    output += ass[a1][a2];
                    console.log(output);
                }
            }
        }
        else if (specSymbolsS.checked) {
            console.log(lengS, false, true);

            while (output.length < lengS) {
                a1 = random(3);
                if (a1 == 2) {
                    a1 = 1
                }
                a2 = random(15);
                console.warn("!!RANDOM NUMBERS!!");
                console.warn(a1, a2);
                output += ass[a1][a2];
                console.log(output);
            }
        }
        else {
            console.warn(lengS, false, false);

            while (output.length < lengS) {
                a1 = random(3);
                if (a1 == 0 || a1 == 2) {
                    a1 = 1
                }
                a2 = random(15);
                console.warn("!!RANDOM NUMBERS!!");
                console.warn(a1, a2);
                output += ass[a1][a2];
                console.log(output);
            }
        }


        if (output.includes("undefined")) {
            generate();
        }
        else {
            document.getElementById("output").innerHTML = `\n\nВот что получилось: <div class="gotovo">${output}</div>`;
        }

    }
    catch(error) {
        console.warn('Error: ' + error);
        alert('Произошла ошибка! Сообщите администратору это: ' + error);
        window.location.reload();
    }
}