

//VARIABLES
const nombreSkills = ['JAVASCRIPT', 'HTML', 'JAVA', 'BOOSTRAP', 'INGLES', 'PYTHON']
let contador = 0;
let contador2 = 0;

//VARIABLES DOM
const skills = document.querySelector('div.barras')
const education = document.querySelector('div.contenido')
const certificaciones = document.querySelector('div.certificaciones')



//CREACION DE BARRAS DE SKILLS
for (const nombreSkill of nombreSkills) {
    const skillUno = document.createElement('div')
    const skillBarra = document.createElement('div')
    const textSkill = document.createElement('h3')
    skillUno.setAttribute('class', 'skillsItem')
    textSkill.append(nombreSkill)
    skillBarra.setAttribute('class', `skillsBarra barraLargo-${Math.abs(Math.round(Math.random() * 10))}`)
    skillUno.appendChild(textSkill)
    skillUno.appendChild(skillBarra)
    skills.appendChild(skillUno)
}


//EDUCATION
while (contador <= 2) {

    contador += 1;
    console.log(contador);
    const contenedor = document.createElement('div')
    const txtEducation = document.createElement('div')
    const title = document.createElement('h3')
    const timeEducation = document.createElement('div')
    const year = document.createElement('h3')
    const txt = document.createElement('p')

    contenedor.setAttribute('class', 'cuerpo')
    txtEducation.setAttribute('class', 'txt')
    timeEducation.setAttribute('class', 'time')


    year.append(`20${5 * contador} - 20${5 * contador}`)
    title.append('DEGREE NAME')
    txt.append(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem ex sapiente molestiae consectetur dicta nemo esse, reiciendis, minima earum quisquam quos, distinctio sit dolorum necessitatibus alias dolore ea unde.'
    )
    txtEducation.appendChild(title)
    timeEducation.appendChild(year)
    contenedor.appendChild(txtEducation)
    contenedor.appendChild(timeEducation)
    education.append(contenedor, txt)
}

//CERTIFICACIONES Y METAS
while (contador2 <= 2) {

    contador2 += 1;

    const contenedor = document.createElement('div')
    const txtEducation = document.createElement('div')
    const title = document.createElement('h3')
    const timeEducation = document.createElement('div')
    const year = document.createElement('h3')
    const txt = document.createElement('p')

    contenedor.setAttribute('class', 'cuerpo')
    txtEducation.setAttribute('class', 'txt')
    timeEducation.setAttribute('class', 'time')

    year.append(`20${contador2 * 11}`)

    title.append('CERTIFICATE NAME')
    txt.append(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem ex sapiente molestiae consectetur dicta nemo esse, reiciendis, minima earum quisquam quos, distinctio sit dolorum necessitatibus alias dolore ea unde.'
    )
    txtEducation.appendChild(title)
    timeEducation.appendChild(year)
    contenedor.appendChild(txtEducation)
    contenedor.appendChild(timeEducation)
    certificaciones.append(contenedor, txt)
}


