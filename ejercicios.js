class Quince_primeros_ejer{
    //1) Sumar dos numeros siempre cuando el primero sea mayor al segundo
    suma1(){
       console.log(`Ejercicio 1:`)
       console.warn("sumar dos numeros simpre y cuando el primero sea mayor al segundo")
       let s
       if (n1>n2) {
         s= n1 + n2
         console.log(`${n1} es mayor a ${n2} asi que el valor sumado es: ${s}`);
        
        }else {
       
         console.log(`(en efecto caballero) el primer valor ${n1} no es mayor al segundo valor ${n2} xdxd`); 
           
        }
    }
 //2) Realizar una operacion segun el operador(+,-,*,/,%)
 //   realizar la suma, resta, multiplicacion, division y reciduo
  operacion2(){
    console.log("ejercicio 2")
    console.warn("realizar la operacion segun el operador")
     let ops="+",opr="-",opm="*",opd="/",opre="%"
     ops = n1 + n2
     opr = n1 - n2
     opm = n1 * n2
     opd = n1 / n2
     opre= n1 % n2
     console.log(`suma igual a:            ${n1} + ${n2} =${ops}`)
     console.log(`resta igual a:           ${n1} - ${n2} =${opr}`)
     console.log(`multiplicacion igual a:  ${n1} * ${n2} =${opm}`)
     console.log(`division igual a:        ${n1} / ${n2} =${opd}`)
     console.log(`residuo igual a:         ${n1} % ${n2} =${opre}`)
    } 


 //3) Presentar el mayor de dos numeros
  mayordosnumeros3(){  
     console.log("ejercicio 3")
     console.warn("presentar el amyor de dos numeros") 
      if (n1>n2) {
         console.log(`el mayor de los dos numeros entre el primero y el segundo es: n1= ${n1} , n2= ${n2} 
          Por lo tanto el mayor es: ${n1}`)
        }
     else if (n1<n2) {
         console.log(`el mayor de los dos numeros entre el primero y el segundo es:.  n1= ${n1} , n2= ${n2} 
         Por lo tanto el mayor es: ${n2}`)
        }
     else {
         console.log(`el valor n1${n1} y n2= ${n2} son iguales`)
        }

    }
 
 //4) Dado un nombre presentarlo
  dadonombre4(){
    console.log("ejercicio 4")
    console.warn("dado un nombre presentarlo")
    let nombre= "lebron"
    
     console.log(`El nombre es: ${nombre}`)
    
    }
 //5) Dado un valor de compra presentar el total considerando un 12% de iva
  valormasiva5(){
    console.log("ejercicio 5")
    console.warn("dado un valor de compra presentar el total considerando un 12% de iva")
    let r=0, TOTS=0
    r= n1*0.12
    TOTS= r+n1    
    console.log(`Valor del producto: ${n1} mas iva: 12% igual a: ${r}
    valor total a pagar: ${TOTS}`)
    }
 //6) Presentar 5 veces un nombre
 vecesnombre6(){
   console.log("ejercicio 6")
   console.warn("presentar 5 veces un nombre")
    let nomb="roma", c=1
    while (c<=5) {
        console.log(`${nomb}`)
        c=c+1
    }

    }
 //7) Presentar los numeros multiplos de 3 del 3 al 21
  multiplosdetres7(){
    console.log("ejercicio 7:")
    console.warn("Presentar los numeros multiplos de 3 del 3 al 21")
        let c, multiplo
        for (c= 3; c <= 21; c++) {
           multiplo=c%3
            if (multiplo==0) {
                console.log(`los multiplos de 3 son: ${c}`)
            }
        }
       
   }
 //8) Presentar los numeros multiplos de 3 del 21 al 3
  multiplosdetresalreves8(){
    console.log("ejercicio 8:")
    console.warn("Presentar los numeros multiplos de 3 del 21 al 3")
        let c, multiplos
        for ( c= 21; c > 3 ; c--) {
          multiplos=c%3
            if (multiplos==0) {
             console.log(`multiplos de tres:${c}`)
            }
        }
   }  
 //9) Dados dos nombres indicar si son iguales o diferentes
 dadodosnombres9(){
  console.log("ejercicio 9:")
  console.warn("Dados dos nombres indicar si son iguales o diferentes")
    let cadenaxd1=`perro`, cadenaxd2=`gato`;
    console.log(`nombre1: '${cadenaxd1}' nombre2: '${cadenaxd2}' por lo tanto: ${cadenaxd1 == cadenaxd2}`);
   }
 //10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
 //no terminado
 // length sirve para cadenas y arreglos
  dieznumeros10(){
    console.log("ejercicio 10:")
    console.warn(`dado 10 numeros presentar los que posean menos de 5 caracteres`)
    console.warn("10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
        let arreglo=[2156,66,45245,454,48439,848,467654,76675,345,548765]
        let i,numero
        console.log("Numeros menores de 5 caracteres:")
        for(i=0;i<arreglo.length;i++){
         numero=arreglo[i]
         if(numero.toString().length<5){
           console.log(numero)
          }
        }
  }

   
 //11) Dado un arreglo presentar sus elementos
  elementosarray11(){
    console.log("ejercicio 11:")
    console.warn("Dado un arreglo presentar sus elementos")
    let n3=30, n4=7
    Array=[n1,n2,n3,n4]
    console.log(`valores ingresados: ${Array} gg`)
   }
 //12) Dado un arreglo de numeros presentar los menores a 10
  menoresadiez12(){
    console.log("ejercicio 12:")
    console.warn("Dado un arreglo de numeros presentar los menores a 10")
    let arreglo=[10,1,5,3,29,12]
    let numero,i
    for(i=0;i<arreglo.length;i++){
        numero=arreglo[i]
        if(numero.toString()<10)
        console.log(numero)
    }

    // let men=0, c
    // Array=[2,11,9,21]
    //     if (Array<men) {
    //      c=c+1
    //      console.log(`estos son los valores del arreglo menores a 10: ${c}`)
    //     } else {
    //      console.log(`los valores ingresados al arreglo no son menores a 10 gg`)  
    //     }
  }
 //13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
  arregloimpar13(){
    console.log(`ejercicio 13:`)
    console.warn("dado un arreglo presemtar los impares y ala suma de los pares")
    //let
    let array=[23,56,13,10,5,12]
    let pos,sum=0,num
    //impares=3
    //23,13,5
    //suma pares
    //56+10+12
    //condicion:
    for (pos= 0; pos < array.length; pos++) {
      num=array[pos]
      if (num %2!=0) {
        console.log(`numeros impares: ${num}`)
        
      } else {
        sum=sum+num
        
      }
    }
      console.log(`suma de pares: ${sum}`);
   }
 //14) Presentar el primero el medio y el ultimo valor de un arreglo
  primeromedioultimo14(){
    console.log(`ejercicio 14:`)
    console.warn("presentar el primero el medio y el ultimo valor de un arreglo")
    //let 
    let array=[12,4,78,15,10] 
    //valor areglo
    // primero = 12(1)
    // medio = 78(3)
    // ultimo = 10(5)
    //condicion:
    let longitud=Math.floor(array.length/2)
    console.warn(`arreglo: ${array}`)
    console.log(`pirmier valor: ${array[0]} `)
    console.log(`valor medio: ${array[longitud]} `)
    console.log(`ultimo valor: ${array[array.length-1]} `)
  }
 //15) Calcular el vuelto de un a compra dado el costo y el pago//
 //seria tipo: un chcle cuesta 5 cntvs y yo pago 10 ¿cuanto es el veuelto?
 //el vuelto es lo que pago num1= 10 menos lo que cuesta num2=5 
 //entonces seria vuelto= num1(10) - num2(5) = 5
 //consoloe.log(el vuelto es "vuelto"(5) ctvs)
  vueltodecompra15(){
    console.log(`ejercicio 15:`)
    console.warn("calcular el vuelto")
    let nm1=100, nm2=50  
    console.log(`dinero del usuario: ${nm1}`) 
    console.log(`valor del producto: ${nm2}`)
    console.log(`el vuelto es: ${nm1 - nm2}$`)
   } 

   //***************** 10 ejercicios nuevos de calculos - ciclos ************************

   // 16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
 // 	ejemplo: num=5
 //                    respuesta= 5*1=5
 //                                         5*2=10
 //                                    .... 5*12=60
   tablaunoadoce16(){
      console.log(`ejercicio 16:`)
      console.warn("Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
      let num1=5,c=1, resultado=0
       while (c<12+1) {
        resultado=num1*c
        console.log(`${num1} * ${c} = ${resultado}`)
        c=c+1
      }
   }

 // 17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
 //       ejemplo: n1=5  n2=3
 //                       r=5+5+5=15
 multisuma17(){
     console.log(`ejercicio 17:`)
     console.warn("Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
     let ac=0, c=0
      while (c<n2) {
       c=c+1
       ac=ac+n1  
      }
     console.log(`${n1}*${n2}=${ac}`)
   }
   
 // 18)Realizar la division de dos numeros por medio de restas sucesivas
 //       ejemplo: n1=5  n2=2
 //                       5-2=3
 //                       3-2=1
 //                respuesta: cociente=2 reciduo=1
   divisionsucesiva18(){
      console.log(`ejercicio 18: restas sucesivas`)
      console.warn("Realizar la division de dos numeros por medio de restas sucesivas")
     let num1=5,num2=2,cociente=0
     console.log(`${num1}/${num2}`) 
     while (num1>=num2) {
       cociente=cociente+1
       num1=num1-num2
      }
      console.log(`cociente: ${cociente} reciduo: ${num1} `)
   //   console.log(`cociente:${cociente} residuo ${num1}`)
   //      //console.log(`${n1-n2}`)
   //    
   }
  

 // 19)Calcular el factorial de un numero
 //       ejemplo: n=4
 //                    respuesta=4*3*2*1=24
 factorial19(){
  console.log("ejercicio 19:")
    console.warn("calcular el factorial de un numero")
    let num1=4, resul=1, c=1
    for(c;c<=num1;c++){
        resul=resul*c
    }
    console.log("El factorial de",num1,"es:",resul)
 }
  //   }

 //  20)Calcular el exponente de un numero
 //  	ejemplo: num=4  exp=3
 //                     respuesta=4*4*4=64
  exponente20(){
    console.log(`ejercicio 20:`)
      console.warn(`calcular exponente de un numero`)
      let num1=5,expo=2,result=1,i
      console.log(`el numero es ${num1} y el exponente es: ${expo}`)
      for (i=0;  i< expo; i++) {
        result=result*num1
      }
      console.log(`el resultado es: ${result}`)
  }

 // 21)Calcular la serie de fibonacci dado un numero
 // 	ejemplo: num=8
 //                    respuesta=0,1,1,2,3,5,8,13
   //Fibonacci
   // serie fibonacci dado n numeros n=8
   // n=8
   // a b c=a+b
   // 0  1  1  2  3  5  8  13
   // a  b  c
   //    a  b  c
   //       a  b  c
   //a=0
   //b=1
   //c = a+b

   //cont = cont +1
   //mientras que  

   fibnacci21(){
     console.log(`ejercicio 21:`)
     console.warn(`calcular la serie de fibonacci dado un numero`)
     let a=0,b=1,c=1,cont=3,nm1=8
     console.log(a,b,c)
      while (cont < nm1) {
        a=b
        b=c
        c= a + b
        cont= cont + 1
        console.log(c) 
      }
    }

 // 22) Dado un numero invertirlo
 // 	 ejemplo: num=12356
 //                    respuesta=65321
   invertirnumero22(){
      //let c=0
      console.log(`ejercicio 22:`);
      console.warn(`dado un numero invertirlo`)
      let numero=23456,digito
      console.warn(`el numero es: ${numero}`)
      console.warn(`el numero invertido es:`)
      
      while (numero>0) {
        digito=Math.floor(numero%10)
        numero=Math.floor(numero/10)
        console.log(digito)
      }

   }
   
 //ej 23 en el 23 y 24 se puede hacer lo mismo
 
 // 23) Presentar los divisores de un numero
 // ejemplo: num=8
 //                respuesta=1,2,4
  presentardivisores23(){
    console.log(`ejercicio 23:`)
    console.warn("presentra los divisores de un numero")
    let c
    console.log(`divisores de ${num1}:`)
    for (c=1; c < num1; c++) {
      if (num1%c==0) {
        console.log(`el numero <${c}> es divisor`)
      }  
      
    }
  }
   
 //  24) Presentar si un numero es perfecto o no
 //   (Perfecto:cuando la suma de los 
 //    divisores incluidos el 1 y excluido el propio numero dada igual al numero)
 //     ejemplo: num=6
 //                    respuesta=1+2+3=6 "es perfecto"
  numeroperfecto24(){
    console.log(`ejercicio 24:`)
    console.warn("presentar si un numero es perfecto o no")
    let c,sumanum1=0
    let num1=Math.floor(Math.random()*10)
    for (c = 1;c < num1; c++) {
      if (num1%c==0) {
        sumanum1==sumanum1+c
      }
      if (sumanum1==num1) { 
        console.log(`el numero <${num1}> es un numero perfecto`)
      } else {
        
        console.log(`el numero <${num1}> no es un numero perfecto`)
      }     
    }
  }

 //  25) Verfificar si un numero es primo o no
 //(Primo cuando solo es divsivible 
 //  para 1 y el propio numero, es decir no tenga divisores)
 // 	ejemplo: num=5
 //                    respuesta=Es primo 
  sionoprimos25(){
    console.log("ejercicio 25:")
    console.warn("verificar si un numero es primo o no")
    let c,cont=0
    let num1=Math.floor(Math.random()*10)
    for(c=1;c<=num1;c++){
        if(num1%c==0){
                cont=cont+1
        }
    }
    if(cont==2){
        console.log(`El numero ${num1} es primo`)
    }else{
        console.log(`El numero ${num1} no es primo`)
    }

  }
  
}
let quin1 = new Quince_primeros_ejer()
// let quin2 = new Quince_primeros_ejer()
// let quin3 = new Quince_primeros_ejer()
// let quin4 = new Quince_primeros_ejer()
// let quin5 = new Quince_primeros_ejer()
// let quin6 = new Quince_primeros_ejer()
// let quin7 = new Quince_primeros_ejer()
// let quin8 = new Quince_primeros_ejer()
// let quin9 = new Quince_primeros_ejer()
// let quin10= new Quince_primeros_ejer()
// let quin11= new Quince_primeros_ejer()
// let quin12= new Quince_primeros_ejer()
// let quin13= new Quince_primeros_ejer()
// let quin14= new Quince_primeros_ejer()
let quin15= new Quince_primeros_ejer()
// let quin16= new Quince_primeros_ejer()
// let quin17= new Quince_primeros_ejer()
// let quin18= new Quince_primeros_ejer()
// let quin19= new Quince_primeros_ejer()
// let quin20= new Quince_primeros_ejer()
// let quin21= new Quince_primeros_ejer()
// let quin22= new Quince_primeros_ejer()
// let quin23= new Quince_primeros_ejer()
// let quin24= new Quince_primeros_ejer()
let quin25= new Quince_primeros_ejer()

//
let n1 = Math.floor(Math.random()*10);
let n2 = Math.floor(Math.random()*10);
let num1 = Math.floor(Math.random()*15);
//

quin1.suma1(n1,n2)
// quin2.operacion2(n1,n2) 
// quin3.mayordosnumeros3(n1,n2)
// quin4.dadonombre4()
// quin5.valormasiva5(n1)
// quin6.vecesnombre6()
// quin7.multiplosdetres7()
// quin8.multiplosdetresalreves8()
// quin9.dadodosnombres9()
// quin10.dieznumeros10()
// quin11.elementosarray11(n1,n2)
// quin12.menoresadiez12(n1,n2)
// quin13.arregloimpar13()
// quin14.primeromedioultimo14()
quin15.vueltodecompra15()
// quin16.tablaunoadoce16()
// quin17.multisuma17
// quin18.divisionsucesiva18()
// quin19.factorial19()
// quin20.exponente20()
// quin21.fibnacci21()
// quin22.invertirnumero22()
// quin23.presentardivisores23(num1)
// quin24.numeroperfecto24(num1)
quin25.sionoprimos25()
