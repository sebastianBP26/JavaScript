/*
Tipos de datos en JS

Se dividen en dos grandes grupos: Primitivos y No Primitivos

- Primitivos: Los siete datos primitivos son:
    * String: Secuencia de caracteres que nos permite almacenar letras, dígitos, caracteres especiales.
              Para declarar strings podemos usar comillas simples, dobles o backticks.
              Caracteres de escape: \n, \t, \\, \', \", \`
    * Number: Representar números pero a diferencia de otros lenguajes en los que tenemos distintos tipos de datos, en JS solo tenemos number.
              Number puede representar distintos tipos de números
              Podemos asignar números negativos y escribir los números separados por "_" para mejorar su legibilidad.
              - let int_number = 1;
              - let decimal_number = 1.5;
              - let exponential_number = 1e6;
              - let oct_number = 0o12;
              - let hex_number = 0x12;
              - let bin_number = 0b1010;
    * BigInt
    * Boolean: True o False
    * NaN: Not a Number
    * Undefined:
    * Symbol: Cada símbolo es único e inmutable, se utiliza para crear identificadores únicos para objetos.|

    Observaciones:
    - No se pueden realizar cálculos entre number y bigint
    - No podemos utilizar decimales con bigint
    - No podemos usar math methods con bigint
    - Las comparaciones utilizando igualdad estricta (===) entre number y bigint siempre devolverán false
    - No funciona el método JSON.stringify() con bigint
    

*/