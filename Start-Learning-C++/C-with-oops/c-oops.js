// c-oops.js

document.addEventListener('DOMContentLoaded', function () {
    // Populate variables section with code example
    var variablesCode = document.getElementById('variablesCode');
    variablesCode.textContent = `
int main() {
    int num = 10;
    float pi = 3.14;
    char letter = 'A';
    return 0;
}
    `.trim();

    // Populate keywords section with code example
    var keywordsCode = document.getElementById('keywordsCode');
    keywordsCode.textContent = `
int main() {
    int if = 5; // Error: 'if' is a keyword
    return 0;
}
    `.trim();

    // Populate functions section with code example
    var functionsCode = document.getElementById('functionsCode');
    functionsCode.textContent = `
#include <iostream>

void greet() {
    std::cout << "Hello, world!" << std::endl;
}

int main() {
    greet();
    return 0;
}
    `.trim();
});
