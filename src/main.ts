import './style.css'
import './index.css'
import { formTemplate } from './templates/form.template'
import { onSubmit, addSymbol, clearFunction, clearLastSymbol } from './calcular';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = formTemplate;
document.querySelector<HTMLFormElement>('#funcion-form')!.addEventListener('submit', onSubmit);

document.querySelector<HTMLButtonElement>('#upArrow')!.addEventListener('click', () => addSymbol('^'));
document.querySelector<HTMLButtonElement>('#sqrt')!.addEventListener('click', () => addSymbol('sqrt('));
document.querySelector<HTMLButtonElement>('#sin')!.addEventListener('click', () => addSymbol('sin('));
document.querySelector<HTMLButtonElement>('#cos')!.addEventListener('click', () => addSymbol('cos('));
document.querySelector<HTMLButtonElement>('#tan')!.addEventListener('click', () => addSymbol('tan('));
document.querySelector<HTMLButtonElement>('#log')!.addEventListener('click', () => addSymbol('log('));
document.querySelector<HTMLButtonElement>('#ex')!.addEventListener('click', () => addSymbol('e^('));
document.querySelector<HTMLButtonElement>('#pi')!.addEventListener('click', () => addSymbol('pi'));
document.querySelector<HTMLButtonElement>('#parentesisOpen')!.addEventListener('click', () => addSymbol('('));
document.querySelector<HTMLButtonElement>('#parentesisClose')!.addEventListener('click', () => addSymbol(')'));
document.querySelector<HTMLButtonElement>('#suma')!.addEventListener('click', () => addSymbol('+'));
document.querySelector<HTMLButtonElement>('#resta')!.addEventListener('click', () => addSymbol('-'));
document.querySelector<HTMLButtonElement>('#multiplicacion')!.addEventListener('click', () => addSymbol('*'));
document.querySelector<HTMLButtonElement>('#division')!.addEventListener('click', () => addSymbol('/'));
document.querySelector<HTMLButtonElement>('#variableX')!.addEventListener('click', () => addSymbol('x'));
document.querySelector<HTMLButtonElement>('#numero0')!.addEventListener('click', () => addSymbol('0'));
document.querySelector<HTMLButtonElement>('#numero1')!.addEventListener('click', () => addSymbol('1'));
document.querySelector<HTMLButtonElement>('#numero2')!.addEventListener('click', () => addSymbol('2'));
document.querySelector<HTMLButtonElement>('#numero3')!.addEventListener('click', () => addSymbol('3'));
document.querySelector<HTMLButtonElement>('#numero4')!.addEventListener('click', () => addSymbol('4'));
document.querySelector<HTMLButtonElement>('#numero5')!.addEventListener('click', () => addSymbol('5'));
document.querySelector<HTMLButtonElement>('#numero6')!.addEventListener('click', () => addSymbol('6'));
document.querySelector<HTMLButtonElement>('#numero7')!.addEventListener('click', () => addSymbol('7'));
document.querySelector<HTMLButtonElement>('#numero8')!.addEventListener('click', () => addSymbol('8'));
document.querySelector<HTMLButtonElement>('#numero9')!.addEventListener('click', () => addSymbol('9'));
document.querySelector<HTMLButtonElement>('#limpiar')!.addEventListener('click', clearFunction);
document.querySelector<HTMLButtonElement>('#borrarUltimo')!.addEventListener('click', clearLastSymbol);
