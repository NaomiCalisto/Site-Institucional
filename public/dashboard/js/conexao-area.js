google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);


function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['State', 'Value'],
        ['BR-ES', 68.9],
        ['BR-MG', 54.1],
        ['BR-RJ', 72.2],
        ['BR-SP', 88.5]
    ]);

    var options = {
        region: 'BR',
        resolution: 'provinces',
        displayMode: 'regions',
        colorAxis: { colors: ['#FF0000', '#EE7214', '#FDD04C', '#527853'] },
        backgroundColor: '#ffffff',
        datalessRegionColor: '#a5deff',
        keepAspectRatio: true,
        magnifyingGlass: { enable: true, zoomFactor: 7 },
        tooltip: { trigger: 'focus' }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
    chart.draw(data, options);

    // Função de seleção do estado
    google.visualization.events.addListener(chart, 'select', function () {
        var selectedItem = chart.getSelection()[0];
        if (selectedItem) {
            state = data.getValue(selectedItem.row, 0); // Atualiza o estado selecionado
            onStateClick(state, tecnologiaSelecionada); // Passa o estado e a tecnologia selecionada
        }
    });
}


// Função para obter o nome do estado baseado no código
function getEstadoNome(state) {
    switch (state) {
        case 'BR-ES': return 'Espírito Santo';
        case 'BR-MG': return 'Minas Gerais';
        case 'BR-RJ': return 'Rio de Janeiro';
        case 'BR-SP': return 'São Paulo';
        default: return 'Estado desconhecido';
    }
}

// Variável para armazenar a tecnologia selecionada
let tecnologiaSelecionada = '5G';
let estadoSelecionado = 'BR-ES';

// Função para alterar a tecnologia selecionada e atualizar a interface
function mudar(tecnologia) {
    // Reseta a cor da div previamente selecionada, se ela existir
    if (document.getElementById(tecnologiaSelecionada)) {
        document.getElementById(tecnologiaSelecionada).style.backgroundColor = '#9f9f9f';
    }

    // Atualiza a tecnologia selecionada
    tecnologiaSelecionada = tecnologia;

    // Muda a cor da nova opção selecionada, se ela existir
    if (document.getElementById(tecnologiaSelecionada)) {
        document.getElementById(tecnologiaSelecionada).style.backgroundColor = '#43BAFF';
    }

    // Atualiza a exibição para o estado atual com a nova tecnologia
    onStateClick(estadoSelecionado, tecnologiaSelecionada);
}

window.onload = function () {
    // Define a cor inicial da tecnologia selecionada e exibe os dados do estado inicial
    if (document.getElementById(tecnologiaSelecionada)) {
        document.getElementById(tecnologiaSelecionada).style.backgroundColor = '#43BAFF';
    }
    onStateClick(estadoSelecionado, tecnologiaSelecionada);
};

// Função personalizada para exibir informações sobre o estado e tecnologia selecionados
function onStateClick(state, tecnologia) {
    estadoSelecionado = state; // Atualiza o estado selecionado globalmente

    // Frase padrão com o nome do estado e a tecnologia
    let frase = `No estado ${getEstadoNome(state)}, os municípios com menor porcentagem de cobertura ${tecnologia} em seus domicílios:`;
    let texto = '';

    // Define o texto com base no estado e na tecnologia selecionada
    if (state === 'BR-ES') {
        if (tecnologia === '5G') {
            texto = `• Cachoeiro de Itapemirim - 0,004727775%
            <br>• São José do Calçado - 0,055969787%
            <br>• Mimoso do Sul - 0,901983249%
            <br>• Muqui - 2,972492613%
            <br>• Apiacá - 4,041073559%`;
        } else if (tecnologia === '4G') {
            texto = `• Santa Leopoldina - 46,77278405%
            <br>• Pancas - 59,42898231%
            <br>• Vila Pavão - 59,67088475%
            <br>• Água Doce do Norte - 62,84778048%
            <br>• Alfredo Chaves - 64,70664714%`;
        } else if (tecnologia === '3G') {
            texto = `• Piúma - 28,26008975%
            <br>• Rio Bananal - 40,07168122%
            <br>• Presidente Kennedy - 40,24414204%
            <br>• Ponto Belo - 42,60905363%
            <br>• Nova Venécia - 42,66357408%`;
        } else if (tecnologia === '2G') {
            texto = `• Santa Leopoldina - 3,341364523%
            <br>• Águia Branca - 1,464385817%
            <br>• Ponto Belo - 1,381328814%
            <br>• Presidente Kennedy - 1,255756128%
            <br>• Brejetuba - 7,476126075%`;
        }

    } else if (state === 'BR-MG') {
        if (tecnologia === '5G') {
            texto = `• Timóteo - 0,003185359%
            <br>• Belmiro Braga - 0,027222581%
            <br>• Alpercata - 0,147474615%
            <br>• Pedrinópolis - 0,309194185%
            <br>• Paiva - 1,588189695%`;
        } else if (tecnologia === '4G') {
            texto = `• Miravânia - 41,03774231%
            <br>• Ladainha - 44,75228894%
            <br>• Ninheira - 46,40611036%
            <br>• Catuji - 48,14186355%
            <br>• Pai Pedro - 51,11638202%`;
        } else if (tecnologia === '3G') {
            texto = `• Sericita - 2,683340827%
            <br>• Munhoz - 5,859254162%
            <br>• São Sebastião do Rio Verde - 8,536604545%
            <br>• Comercinho - 9,306917613%
            <br>• Senador José Bento - 11,19210445%`;
        } else if (tecnologia === '2G') {
            texto = `• Seritinga - 0,019176042%
            <br>• Tumiritinga - 0,035641027%
            <br>• São Sebastião do Rio Verde - 0,068148974%
            <br>• Tapira - 0,127495342%
            <br>• Comercinho - 0,179375835%`;
        }

    } else if (state === 'BR-RJ') {
        if (tecnologia == '5G') {
            texto = `• Itaperuna - 0,000438401%
            <br>• São Fidélis - 0,013169717%
            <br>• Teresópolis - 0,075377723%
            <br>• Paraíba do Sul - 0,348082186%
            <br>• São João da Barra - 1,3278558%`;

        } else if (tecnologia == '4G') {
            texto = `• Trajano de Moraes - 61,43102836%
            <br>• São Sebastião do Alto - 74,72003348%
            <br>• Cardoso Moreira - 76,34863125%
            <br>• São Francisco de Itabapoana - 78,68024472%
            <br>• Santa Maria Madalena - 80,20527213%`;

        } else if (tecnologia == '3G') {
            texto = `• São Sebastião do Alto - RJ - 23,38123304%
            <br>• Sumidouro - RJ - 31,74212602%
            <br>• Trajano de Moraes - RJ - 36,22892379%
            <br>• Cambuci - RJ - 41,98720192%
            <br>• Rio das Flores - RJ - 43,57987661%`;

        } else if (tecnologia == '2G') {
            texto = `• São Francisco de Itabapoana - 26,73692827%
            <br>• Sumidouro - 34,90665204%
            <br>• São José do Vale do Rio Preto - 38,7983453%
            <br>• Santa Maria Madalena - 41,29182181%
            <br>• Laje do Muriaé - 41,54053432%`;
        }

    } else if (state === 'BR-SP') {
        if (tecnologia == '5G') {
            texto = `• Santa Gertrudes - 0,000945242%
            <br>• Itanhaém - 0,002213689%
            <br>• Barrinha - 0,00590997%
            <br>• Monteiro Lobato - 0,007708764%
            <br>• Guariba - 0,011074511%`;

        } else if (tecnologia == '4G') {
            texto = `• Ribeira - 45,71483295%
            <br>• Rubiácea - 66,64403764%
            <br>• Natividade da Serra - 69,79746844%
            <br>• Marabá Paulista - 71,87015142%
            <br>• Cunha - 73,25934188%`;

        } else if (tecnologia == '3G') {
            texto = `• Ribeira - 33,55630389%
            <br>• Pedra Bela - 42,53279858%
            <br>• Barra do Chapéu - 44,21073889%
            <br>• Nova Canaã Paulista - 44,57051879%
            <br>• Quadra - 45,77632184%`;

        } else if (tecnologia == '2G') {
            texto = `• Ribeira - 0,019964767%
            <br>• Borá - 2,106721757%
            <br>• Queluz - 20,18994023%
            <br>• Natividade da Serra - 26,72383726%
            <br>• Monteiro Lobato - 27,11542262%`;
        }
    }

    // Atualiza o conteúdo das divs 'estado' e 'municipios'
    document.getElementById('estado').innerHTML = frase;
    document.getElementById('municipios').innerHTML = texto;
}