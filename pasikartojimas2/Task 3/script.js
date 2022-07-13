/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris atvaizduos TODOS korteles.
1. Išgaukite TODOS iš duoto ENDPOINT.
2. Sukurkite kiekvienam todo kortelę
3. Kortelėje atvaizduokite title ir due_on reikšmes (due_on panaudoti su Date object)
4. Kortelės spalva turi atitikti todo statusą. 
   Jeigu status = pending, kortelė orandžinė 
   Jeigu status = completed, kortelė žalia
5. Pastilizikuote kortelę
-------------------------------------------------------------------------- */

const ENDPOINT = "https://gorest.co.in/public/v2/todos";
