import { Cliente } from "./Cliente.js";
//import { ContaCorrente } from "./Conta/ContaCorrente.js";
//import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
//import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//const cliente = new Cliente("Ricardo", 11122233309);

//const contaCorrente = new ContaCorrente(cliente, 1001);
//const contaPoupanca = new ContaPoupanca(50, cliente, 1001);
//const contaSalario = new ContaSalario(cliente);

//console.log(contaCorrente, contaPoupanca, contaSalario);

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");

const diretorEstaLogado =  SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado =  SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
