var i, altura, sexo, maioralt = 0, menoralt = 0, hom = 0, mulh = 0, mediamulh = 0, contamulh = 0, contahom = 0;

            for(i = 1 ;i <= 15; i++) {        
                altura = parseInt(prompt("Informe sua altura["+i+"]:"));
                sexo = prompt("Sexo: M ou F:");


                if(i == 1) {
                    menoralt = altura;
                } if(altura > maioralt) { 
                    maioralt = altura;
                } if(altura < menoralt) { 
                    menoralt = altura;
                } if(sexo == 'M') {
                    hom += altura;
                    contahom++;
                } else if(sexo == 'F') {
                    mulh += altura;
                    contamulh++;
                }
            }
            mediahom = hom/contahom;
            alert("A maior altura é: "+maioralt); 
            alert("A menor altura é: "+menoralt);
            alert("A média dos homens é: "+mediahom);
            alert("O número de mulheres é: "+contamulh);