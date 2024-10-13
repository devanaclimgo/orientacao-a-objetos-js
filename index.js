import { Cliente } from "./cliente";
import { ContaCorrente } from "./ContaCorrente";

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;
// para um valor privado de saldo, teria q ser escrito #saldo MAS isso ainda não está implementado na linguagem

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
 const valorSacado = contaCorrenteRicardo.sacar(50);

 console.log(valorSacado);
console.log(contaCorrenteRicardo);
