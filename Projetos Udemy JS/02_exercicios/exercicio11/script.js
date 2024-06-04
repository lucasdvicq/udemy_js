let idade = 15;
let cnh = true;

if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir!");
} else if (idade >= 18 && cnh == false) {
    console.log("Você não possui cnh para dirigir")
} else {
    console.log("Você não tem idade nem cnh para dirigir")
}