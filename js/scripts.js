document.getElementById('btnEnviar').addEventListener('click', function() {
 
    const nome = document.getElementById('inNome').value.trim();
    const telefone = document.getElementById('inFone').value.trim();
    const email = document.getElementById('inMail').value.trim();
    const cargo = document.getElementById('inCargo').value.trim();
    const departamento = document.getElementById('inDepto').value.trim();
    const imgInput = document.getElementById('inImg');


    if (!nome || !telefone || !email || !cargo || !departamento) {
        document.getElementById('mensagem-erro').innerText = 'Por favor, preencha todos os campos obrigatórios.';
        return;
    }

    
    document.getElementById('spNome').innerText = nome;
    document.getElementById('spCargo').innerText = cargo;
    document.getElementById('spDepto').innerText = departamento;

    
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const areaFoto = document.getElementById('area-foto');
            areaFoto.innerHTML = `<img src="${e.target.result}" alt="Foto do funcionário" style="width:100px; height:auto;">`;
        }
        reader.readAsDataURL(imgInput.files[0]);
    } else {
        document.getElementById('area-foto').innerHTML = ''; 
    }

    document.getElementById('mensagem-erro').innerText = '';


    $('#qrCode').empty(); 
    $('#qrCode').qrcode({
        text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nCargo: ${cargo}\nDepartamento: ${departamento}`,
        width: 100,
        height: 100
    });
});