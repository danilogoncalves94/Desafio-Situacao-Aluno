function clicou() {
    let nome = prompt(`Qual é o nome do aluno?`)
    if (nome.length == 0) {
        alert(`Por favor, insira o nome do aluno.`)
    } else {
        let nota1 = prompt(`Primeira nota de ${nome}:`)
        if (nota1.length == 0) {
            alert(`Por favor, insria uma nota.`)
        } else {
            let nota1Real = Number(nota1)
            if (isNaN(nota1Real)) {
                alert(`Valor informado inválido.`)
            } else {
                let nota2 = prompt(`Segunda nota de ${nome}:`)
                if (nota2.length == 0) {
                    alert(`Por favor, insria uma nota.`)
                } else {
                    let nota2Real = Number(nota2)
                    if (isNaN(nota2Real)) {
                        alert(`Valor informado inválido.`)
                    } else {
                        let media = (nota1Real + nota2Real) / 2
                        let conteudo = document.getElementById('secao')

                        if (media < 3) {
                            conteudo.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`
                            conteudo.innerHTML += `<p class="paragrafos">Com as notas ${nota1Real} e ${nota2Real}, a <span>média é ${media}</span></p>`
                            conteudo.innerHTML += `<p class="paragrafos">Com média abaixo de 3,0 o aluno está <mark class="rep">REPROVADO</mark></p>`
                        } else if (media >= 3 && media <= 6) {
                            conteudo.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`
                            conteudo.innerHTML += `<p class="paragrafos">Com as notas ${nota1Real} e ${nota2Real}, a <span>média é ${media}</span></p>`
                            conteudo.innerHTML += `<p class="paragrafos">Com média entre 3,0 e 6,0, o aluno está em <mark class="rec">RECUPERAÇÃO</mark></p>`
                        } else if (media > 6) {
                            conteudo.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`
                            conteudo.innerHTML += `<p class="paragrafos">Com as notas ${nota1Real} e ${nota2Real}, a <span>média é ${media}</span></p>`
                            conteudo.innerHTML += `<p class="paragrafos">Com média acima de 6,0, o aluno está <mark class="apr">APROVADO</mark></p>`
                        }
                    }
                }
            }
        }
    }
}