var placarEuNum = 0
var placarBotNum = 0
function confirmar(){
    var escolha = document.getElementsByName('escolha')
    var res = document.getElementById('res')
    var placareu = document.getElementById('placareu')
    var placarbot = document.getElementById('placarbot')
    
    if(escolha[0].checked){
        esc = 'pedra'
    } else if(escolha[1].checked){
        esc = 'papel'
    } else if(escolha[2].checked){
        esc = 'tesoura'
    } 
    var opcao = ['0', '1', '2']
    var randOpcao = opcao[Math.floor(Math.random()*3)]
    if(randOpcao == '0'){
        escBot = 'pedra'
    } else if(randOpcao == '1'){
        escBot = 'papel'
    } else if(randOpcao == '2'){
        escBot = 'tesoura'
    } 
    //res.innerHTML = `Você escolheu ${esc} e o Bot escolheu ${escBot}`
    if(esc == 'pedra' && escBot == 'tesoura'){
        res.innerHTML = `Você escolheu <b>${esc}</b> <br> Bot escolheu <b>${escBot}</b> <br> <br>=> <b>Você venceu!!!</b>`
        placarEuNum = placarEuNum + 1
    } else if(esc == 'tesoura' && escBot == 'papel'){
        res.innerHTML = `Você escolheu <b>${esc}</b> <br> Bot escolheu <b>${escBot}</b> <br><br>=> <b>Você venceu!!!</b>`
        placarEuNum = placarEuNum + 1
    } else if(esc == 'papel' && escBot == 'pedra'){
        res.innerHTML = `Você escolheu <b>${esc}</b> <br> Bot escolheu <b>${escBot}</b> <br><br>=> <b>Você venceu!!!</b>`
        placarEuNum = placarEuNum + 1
    } else if((esc == 'pedra' && escBot == 'pedra') || (esc == 'papel' && escBot == 'papel') || (esc == 'tesoura' && escBot == 'tesoura')){
        res.innerHTML = `Você escolheu <b>${esc}</b> <br> Bot escolheu <b>${escBot}</b> <br><br>=> <b>EMPATE!!!</b>`
    } else{
        res.innerHTML = `Você escolheu <b>${esc}</b> <br> Bot escolheu <b>${escBot}</b> <br><br>=> <b>Você perdeu!!!</b>`
        placarBotNum = placarBotNum + 1
    }
    placareu.innerHTML = `${placarEuNum}`
    placarbot.innerHTML = `${placarBotNum}`
    
}

function limpar(){
    res.innerHTML = ''
    placareu.innerHTML = ``
    placarbot.innerHTML = ``
    placarEuNum = 0
    placarBotNum = 0
}