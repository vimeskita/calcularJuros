function calcular_juros() {
    //Declaração de Váriaveis
    var nome, mensalidade;


    nome = String($("#nome").val());
    mensalidade = Number($("#mensalidade").val());

    //Processamento de Dados
    //Calculo de Juros
    j = (mensalidade / 100) * 1
    //Calculo das projeções
    s1 = ((mensalidade *6) + j);
    //1 ano
    s2 = ((mensalidade *12) + j);
    //3 anos
    s3 = ((mensalidade *36)  + j);
    //5 anos
    s4 = ((mensalidade *60) + j);
    //10 anos
    s5 = ((mensalidade *120) + j);

    //Deixando so com duas casas decimais
    s1 = s1.toFixed(2);
    s2 = s2.toFixed(2);
    s3 = s3.toFixed(2);
    s4 = s4.toFixed(2);
    s5 = s5.toFixed(2);

    //saida de dados
    $(".form-dados").addClass("d-none");
    $(".show-result").removeClass("d-none");

    $(".result-name").html(nome);
    $(".result-investimento").html("R$"+mensalidade+",00");

    //Mostrando projeções na tabela
    $(".result-s1").html("R$"+s1);
    $(".result-s2").html("R$"+s2);
    $(".result-s3").html("R$"+s3);
    $(".result-s4").html("R$"+s4);
    $(".result-s5").html("R$"+s5);

    alert("Calculado");
}

function voltar() {
    // ºPara fazer o outro formulário reaparecer
    $(".form-dados").removeClass("d-none");
    $(".show-result").addClass("d-none");

     // ºPara quando voltar os campos estarem limpos
    $("input").val("");
}