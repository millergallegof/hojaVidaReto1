

//VARIABLES
const nombreSkills = ['JAVASCRIPT', 'HTML', 'JAVA', 'BOOSTRAP', 'INGLES', 'PYTHON']
let contador = 0;
let contador2 = 0;

//VARIABLES DOM
const skills = document.querySelector('div.barras')
const education = document.querySelector('div.contenido')
const certificaciones = document.querySelector('div.certificaciones')
const color1 = document.getElementById('elemento1')
const color2 = document.getElementById('elemento2')
const color3 = document.getElementById('elemento3')
const color4 = document.getElementById('elemento4')


//CREACION DE BARRAS DE SKILLS
for (const nombreSkill of nombreSkills) {
    const skillUno = document.createElement('div')
    const skillBarra = document.createElement('div')
    const textSkill = document.createElement('h3')
    skillUno.setAttribute('class', 'skillsItem')
    textSkill.append(nombreSkill)
    skillBarra.setAttribute('class', `skillsBarraColor1 barraLargo-${Math.abs(Math.round(Math.random() * 10))}`)
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
    timeEducation.setAttribute('class', 'timeColor1')


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
    timeEducation.setAttribute('class', 'timeColor1')

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


//EVENTOS

color1.addEventListener('click', (e) => {
    //se almacena el elemento hr con la clase hrColor para modificar el color
    const hr1 = document.querySelector('hr.hrColor1')
    const hr2 = document.querySelector('hr.hrColor2')
    const hr3 = document.querySelector('hr.hrColor3')
    const hr4 = document.querySelector('hr.hrColor4')
    
    //se crean variables para evaluar el objeto que tiene la clase imHeadColor para que sea previamente utilizada
    const imgHeads1 = [...document.querySelectorAll('div.imgHeadColor2')]
    const imgHeads2 = [...document.querySelectorAll('div.imgHeadColor3')]
    const imgHeads3 = [...document.querySelectorAll('div.imgHeadColor4')]
    //se crea un array vacio para almacenar dicha informacion cuando se encuentre
    let imgHeads = []

    //se utiliza un condicional para revisar cada uno de los elementos y encontrar el que tiene la clase correcta
    if (imgHeads1.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor2')]
    }else if (imgHeads2.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor3')]
    }else if (imgHeads3.length!==0) {
        imgHeads= [...document.querySelectorAll('div.imgHeadColor4')]       
    }

    //se crean variables para evaluar el objeto que tiene la clase skillsBarraColor para que sea previamente utilizada
    const skillsBarra1 = [...document.querySelectorAll('div.skillsBarraColor2')]
    const skillsBarra2 = [...document.querySelectorAll('div.skillsBarraColor3')]
    const skillsBarra3 = [...document.querySelectorAll('div.skillsBarraColor4')]
    let skillsBarras = []

    //se utiliza un condicional para revisar cada uno de los elementos y encontrar el que tiene la clase correcta
    if (skillsBarra1.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor2')]
        console.log(skillsBarras);
    }else if (skillsBarra2.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor3')]
        console.log(skillsBarras);
    }else if (skillsBarra3.length!==0) {
        skillsBarras= [...document.querySelectorAll('div.skillsBarraColor4')] 
        console.log(skillsBarras);      
    }

    //se crean variables para evaluar el objeto que tiene la clase timeColor para que sea previamente utilizada
    const times1 = [...document.querySelectorAll('div.timeColor2')]
    const times2 = [...document.querySelectorAll('div.timeColor3')]
    const times3 = [...document.querySelectorAll('div.timeColor4')]
    let times = []
    
    //se utiliza un condicional para revisar cada uno de los elementos y encontrar el que tiene la clase correcta
    if (times1.length!==0) {
        times = [...document.querySelectorAll('div.timeColor2')]
    }else if (times2.length!==0) {
        times = [...document.querySelectorAll('div.timeColor3')]
    }else if (times3.length!==0) {
        times= [...document.querySelectorAll('div.timeColor4')] 
    }

    // finalmente se itera cada uno de los div con la clase seleccionada, para eliminar del mismo modo la clase existente
    //y agregar la clase con el color que se desea cambiar
    for (const imgHead of imgHeads) {
        imgHead.classList.remove('imgHeadColor2','imgHeadColor3', 'imgHeadColor4' )
        imgHead.classList.add('imgHeadColor1')
    }

    //del mismo modo se iteran las skill
    for (const skillBarra of skillsBarras) {
        skillBarra.classList.remove('skillsBarraColor2', 'skillsBarraColor3', 'skillsBarraColor4')
        skillBarra.classList.add('skillsBarraColor1')
    }

    //y se itera el color de las fechas
    for (const time of times) {
        time.classList.remove('timeColor2', 'timeColor3', 'timeColor4')
        time.classList.add('timeColor1')
    }

    if (hr1!==null) {
        hr1.classList.remove('hrColor1')
        hr1.classList.add('hrColor1')
    }if (hr2!==null) {
        hr2.classList.remove('hrColor2')
        hr2.classList.add('hrColor1')
    }if (hr3!==null) {
        hr3.classList.remove('hrColor3')
        hr3.classList.add('hrColor1')
    }if (hr4!==null) {
        hr4.classList.remove('hrColor4')
        hr4.classList.add('hrColor1')
    }
        
})

//el proceso se repite 4 veces para los 4 diferentes colores que se utilizaron
color2.addEventListener('click', (e) => {
    //se almacena el elemento hr con la clase hrColor
    const hr1 = document.querySelector('hr.hrColor1')
    const hr2 = document.querySelector('hr.hrColor2')
    const hr3 = document.querySelector('hr.hrColor3')
    const hr4 = document.querySelector('hr.hrColor4')

    const imgHeads1 = [...document.querySelectorAll('div.imgHeadColor1')]
    const imgHeads2 = [...document.querySelectorAll('div.imgHeadColor3')]
    const imgHeads3 = [...document.querySelectorAll('div.imgHeadColor4')]
    let imgHeads = []

    if (imgHeads1.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor1')]
    }else if (imgHeads2.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor3')]
    }else if (imgHeads3.length!==0) {
        imgHeads= [...document.querySelectorAll('div.imgHeadColor4')]       
    }
        
    const skillsBarra1 = [...document.querySelectorAll('div.skillsBarraColor1')]
    const skillsBarra2 = [...document.querySelectorAll('div.skillsBarraColor3')]
    const skillsBarra3 = [...document.querySelectorAll('div.skillsBarraColor4')]
    let skillsBarras = []

    if (skillsBarra1.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor1')]
        console.log(skillsBarras);
    }else if (skillsBarra2.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor3')]
        console.log(skillsBarras);
    }else if (skillsBarra3.length!==0) {
        skillsBarras= [...document.querySelectorAll('div.skillsBarraColor4')] 
        console.log(skillsBarras);      
    }
  
    const times1 = [...document.querySelectorAll('div.timeColor1')]
    const times2 = [...document.querySelectorAll('div.timeColor3')]
    const times3 = [...document.querySelectorAll('div.timeColor4')]
    let times = []
    
    if (times1.length!==0) {
        times = [...document.querySelectorAll('div.timeColor1')]
    }else if (times2.length!==0) {
        times = [...document.querySelectorAll('div.timeColor3')]
    }else if (times3.length!==0) {
        times= [...document.querySelectorAll('div.timeColor4')] 
    }

    for (const imgHead of imgHeads) {
        imgHead.classList.remove('imgHeadColor1', 'imgHeadColor3', 'imgHeadColor4')
        imgHead.classList.add('imgHeadColor2')
    }

    for (const skillBarra of skillsBarras) {
        skillBarra.classList.remove('skillsBarraColor1', 'skillsBarraColor3', 'skillsBarraColor4')
        skillBarra.classList.add('skillsBarraColor2')
    }

    for (const time of times) {
        time.classList.remove('timeColor1', 'timeColor3', 'timeColor4')
        time.classList.add('timeColor2')
    }
    
    if (hr1!==null) {
        hr1.classList.remove('hrColor1')
        hr1.classList.add('hrColor2')
        
    }if (hr2!==null) {
        hr2.classList.remove('hrColor2')
        hr2.classList.add('hrColor2')
    }if (hr3!==null) {
        hr3.classList.remove('hrColor3')
        hr3.classList.add('hrColor2')
    }if (hr4!==null) {
        hr4.classList.remove('hrColor4')
        hr4.classList.add('hrColor2')
    }

})

color3.addEventListener('click', (e) => {
    //se almacena el elemento hr con la clase hrColor
    const hr1 = document.querySelector('hr.hrColor1')
    const hr2 = document.querySelector('hr.hrColor2')
    const hr3 = document.querySelector('hr.hrColor3')
    const hr4 = document.querySelector('hr.hrColor4')

    const imgHeads1 = [...document.querySelectorAll('div.imgHeadColor1')]
    const imgHeads2 = [...document.querySelectorAll('div.imgHeadColor2')]
    const imgHeads3 = [...document.querySelectorAll('div.imgHeadColor4')]
    let imgHeads = []

    if (imgHeads1.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor1')]
    }else if (imgHeads2.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor2')]
    }else if (imgHeads3.length!==0) {
        imgHeads= [...document.querySelectorAll('div.imgHeadColor4')]       
    }
        
    const skillsBarra1 = [...document.querySelectorAll('div.skillsBarraColor1')]
    const skillsBarra2 = [...document.querySelectorAll('div.skillsBarraColor2')]
    const skillsBarra3 = [...document.querySelectorAll('div.skillsBarraColor4')]
    let skillsBarras = []

    if (skillsBarra1.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor1')]
        console.log(skillsBarras);
    }else if (skillsBarra2.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor2')]
        console.log(skillsBarras);
    }else if (skillsBarra3.length!==0) {
        skillsBarras= [...document.querySelectorAll('div.skillsBarraColor4')] 
        console.log(skillsBarras);      
    }
  
    const times1 = [...document.querySelectorAll('div.timeColor1')]
    const times2 = [...document.querySelectorAll('div.timeColor2')]
    const times3 = [...document.querySelectorAll('div.timeColor4')]
    let times = []
    
    if (times1.length!==0) {
        times = [...document.querySelectorAll('div.timeColor1')]
    }else if (times2.length!==0) {
        times = [...document.querySelectorAll('div.timeColor2')]
    }else if (times3.length!==0) {
        times= [...document.querySelectorAll('div.timeColor4')] 
    }

    for (const imgHead of imgHeads) {
        imgHead.classList.remove('imgHeadColor1', 'imgHeadColor2', 'imgHeadColor4')
        imgHead.classList.add('imgHeadColor3')
    }

    for (const skillBarra of skillsBarras) {
        skillBarra.classList.remove('skillsBarraColor1', 'skillsBarraColor2', 'skillsBarraColor4')
        skillBarra.classList.add('skillsBarraColor3')
    }

    for (const time of times) {
        time.classList.remove('timeColor1', 'timeColor2', 'timeColor4')
        time.classList.add('timeColor3')
    }
    
    if (hr1!==null) {
        hr1.classList.remove('hrColor1')
        hr1.classList.add('hrColor3')
        
    }if (hr2!==null) {
        hr2.classList.remove('hrColor2')
        hr2.classList.add('hrColor3')
    }if (hr3!==null) {
        hr3.classList.remove('hrColor3')
        hr3.classList.add('hrColor3')
    }if (hr4!==null) {
        hr4.classList.remove('hrColor4')
        hr4.classList.add('hrColor3')
    }

})

color4.addEventListener('click', (e) => {
    //se almacena el elemento hr con la clase hrColor
    const hr1 = document.querySelector('hr.hrColor1')
    const hr2 = document.querySelector('hr.hrColor2')
    const hr3 = document.querySelector('hr.hrColor3')
    const hr4 = document.querySelector('hr.hrColor4')

    const imgHeads1 = [...document.querySelectorAll('div.imgHeadColor1')]
    const imgHeads2 = [...document.querySelectorAll('div.imgHeadColor2')]
    const imgHeads3 = [...document.querySelectorAll('div.imgHeadColor3')]
    let imgHeads = []

    if (imgHeads1.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor1')]
    }else if (imgHeads2.length!==0) {
        imgHeads = [...document.querySelectorAll('div.imgHeadColor2')]
    }else if (imgHeads3.length!==0) {
        imgHeads= [...document.querySelectorAll('div.imgHeadColor3')]       
    }
        
    const skillsBarra1 = [...document.querySelectorAll('div.skillsBarraColor1')]
    const skillsBarra2 = [...document.querySelectorAll('div.skillsBarraColor2')]
    const skillsBarra3 = [...document.querySelectorAll('div.skillsBarraColor3')]
    let skillsBarras = []

    if (skillsBarra1.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor1')]
        console.log(skillsBarras);
    }else if (skillsBarra2.length!==0) {
        skillsBarras = [...document.querySelectorAll('div.skillsBarraColor2')]
        console.log(skillsBarras);
    }else if (skillsBarra3.length!==0) {
        skillsBarras= [...document.querySelectorAll('div.skillsBarraColor3')] 
        console.log(skillsBarras);      
    }
  
    const times1 = [...document.querySelectorAll('div.timeColor1')]
    const times2 = [...document.querySelectorAll('div.timeColor2')]
    const times3 = [...document.querySelectorAll('div.timeColor3')]
    let times = []
    
    if (times1.length!==0) {
        times = [...document.querySelectorAll('div.timeColor1')]
    }else if (times2.length!==0) {
        times = [...document.querySelectorAll('div.timeColor2')]
    }else if (times3.length!==0) {
        times= [...document.querySelectorAll('div.timeColor3')] 
    }

    for (const imgHead of imgHeads) {
        imgHead.classList.remove('imgHeadColor1', 'imgHeadColor2', 'imgHeadColor3')
        imgHead.classList.add('imgHeadColor4')
    }

    for (const skillBarra of skillsBarras) {
        skillBarra.classList.remove('skillsBarraColor1', 'skillsBarraColor2', 'skillsBarraColor3')
        skillBarra.classList.add('skillsBarraColor4')
    }

    for (const time of times) {
        time.classList.remove('timeColor1', 'timeColor2', 'timeColor3')
        time.classList.add('timeColor4')
    }
    
    if (hr1!==null) {
        hr1.classList.remove('hrColor1')
        hr1.classList.add('hrColor4')
        
    }if (hr2!==null) {
        hr2.classList.remove('hrColor2')
        hr2.classList.add('hrColor4')
    }if (hr3!==null) {
        hr3.classList.remove('hrColor3')
        hr3.classList.add('hrColor4')
    }if (hr4!==null) {
        hr4.classList.remove('hrColor4')
        hr4.classList.add('hrColor4')
    }

})

