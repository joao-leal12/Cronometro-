
let Minutos = document.getElementById('minutos')
let Segundos =  document.getElementById('segundos')
let Msegundos = document.getElementById('Msegundos')
let y = 0;
let x = 0;
let z = 1; 
let interval = null
let w = 0 

function MostrarSegundos () {

    Minutos.innerHTML = '00' + ' :'; 
    Segundos.innerHTML =  '00' +  ' :';
    Msegundos.innerHTML ='00' ;

}


MostrarSegundos()


function iniciar() {
    
     interval = setInterval( ()=> {

        Msegundos.innerHTML = `0${y}`;  
        if(Msegundos.innerHTML > 9 ) {

            Msegundos.innerHTML = y;

            if(Msegundos.innerHTML > 60) {

                y = 0 ;

                Msegundos.innerHTML = `0 ${y}`;
                x++
                Segundos.innerHTML =  `0${x}` ; 
               
            }



        }
      
            
               
            if(Segundos.innerHTML > 9){
                w = ''
                Segundos.innerHTML = x; 

                if(Segundos.innerHTML >= 60) {

                    x = 0 
                    Segundos.innerHTML = `0${x}`; 
                    Minutos.innerHTML = `0${z}`;  
                    if(Minutos.innerHTML > 9) {

                        Minutos.innerHTML = z


                    }
                    
                    
                    z++ 


                }

            }
            
        
       



        y++ 

        
    }, 5)

    
    
   
}


function pause() {

   

    clearInterval(interval)

  
   



}


function zerar() {

    clearInterval(interval)
     y = 0;
     x = 0;
     z = 0; 

     Minutos.innerHTML = `0${y} :`
     Segundos.innerHTML = `0${x} : `
     Msegundos.innerHTML = `0${z}`



}


