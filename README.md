# Psychic-Game
Repository with Psychic-Game (Homework 3)

* Algunas notas: (en español)

* Se definió el juego tal como se mostraba en el video.

* Identifiqué que carecía de algunas validaciones que podían ser importantes:no se definía en el video que pasaba si se repetía alguna letra, tampoco se definía en el video que pasaba si se ponía algún número, de hecho, tal como está explicado se podría escribir cualquier caracter alfanumérico o simbólico.

* En el .js se delimitaron dichas validaciones de tal forma que el juego te avisa:
1) Cuando repites letra con un alert
2) Cuando ganas con un alert
3) Cuando pierdes con un alert
4) Cuando presionas algún número del teclado o caracter inválido

* Se añadió viewport.
* Se utilizó CSS como se señalaba en las instrucciones.
* Se utilizó el sistema grid (dos rows delimitando como máximo el 12 entre ambas)


* Identifiqué un error pues no renombré adecuadamente el archivo javascript.js y mi index.html no lo llamaba. Dado esto tuve que hacer un commit nuevo.

* Identifiqué otro error probando el juego, no se regeneraba la opción de la computadora una vez que el juego terminaba tras los intentos.

* Si un usuario seleccionaba la opción ganadora la computadora no generaba adecuadamente la opción restart, esto me hizo subir nuevamente el código.

* Para identificar este error tuve que generar alerts tras ganar o perder el juego con la opción que la computadora "pensaba"

* Genere otro commit pero intentaré optimizar la solución pues no cumple con la regla de DRY (Dont repeat yourself). 1:42 am 23 de agosto 2018



