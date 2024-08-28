document.getElementById('BtCriptografar').addEventListener('click', function() {
    var inputText = document.getElementById('TxtEntrada').value;

    if(inputText === '') return;

    var encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('imgAlerta').style.display = 'none';
    document.querySelector('label[for="TxtSaida"]').style.display = 'block';
    document.getElementById('TxtSaida').style.display = 'block';
    document.getElementById('TxtSaida').value = encryptedText;
    document.getElementById('TxtEntrada').value = '';
    document.getElementById('BtCopiar').style.display = 'inline-block';
});

document.getElementById('BtCopiar').addEventListener('click', function() {
    var outputText = document.getElementById('TxtSaida').value;

    if(outputText === 'Nenhuma mensagem') return;

    navigator.clipboard.writeText(outputText).then(function() {
        document.getElementById('TxtSaida').value = 'Nenhuma mensagem';
        document.getElementById('BtDescriptografar').style.display = 'inline-block';
    });
});

document.getElementById('BtDescriptografar').addEventListener('click', function() {
    var inputText = document.getElementById('TxtEntrada').value;

    if(inputText === '') return;

    var decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('TxtSaida').value = decryptedText;
    document.getElementById('TxtEntrada').value = '';
});



