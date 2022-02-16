const btnSwitch = document.querySelector('#switch')
const rootStyles =  document.documentElement.style
theme =  false
btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active')

    if(!theme){
        changeTheme(dark)
        theme = true
    }else{
        changeTheme(light)
        theme = false
    }

})

const changeTheme = theme => {
    let cssVars = Object.keys(theme)
    for(let cssVar of cssVars){
        rootStyles.setProperty(cssVar, theme[cssVar])
    }
}

const dark = {
    '--primary-color'   : '#111111',
    '--secondary-color' : '#222222',
    '--texto'           : '#c8c8c8',
    '--textoHover'      : '#acabad',
    '--azul'            : '#3e60e9',
    '--azulHover'       : 'rgb(37, 75, 230)',
    '--sombra'          : 'rgba(158, 158, 158, 0.16)'
}


const light = {
	'--primary-color'   : '#F1F1F1',
	'--secondary-color' : '#fefefe',
	'--texto'           : '#c8c8c8',
	'--textoHover'      : '#acabad',
	'--azul'            :' #3e60e9',
	'--azulHover'       :'rgb(37, 75, 230)',
	'--sombra'          :'rgba(0,0,0,.16)'
}