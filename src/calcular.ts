import { evaluate, abs } from "mathjs";

export const addSymbol = (simbolo: string) => {
  const funcionInput = document.getElementById("funcion");
  if (funcionInput) (funcionInput as HTMLInputElement).value += simbolo;
};

export const clearFunction = () => {
  const funcionInput = document.getElementById("funcion");
  const resultText = document.getElementById("resultado-texto");
  const a = document.getElementById("a");
  const b = document.getElementById("b");

  (funcionInput as HTMLInputElement).value = "";
  (resultText as HTMLElement).textContent = "";
  (a as HTMLInputElement).value = "";
  (b as HTMLInputElement).value = "";
};

export const clearLastSymbol = () => {
  const funcionInput = document.getElementById("funcion");
  if (funcionInput) {
    const currentFunction = (funcionInput as HTMLInputElement).value;
    (funcionInput as HTMLInputElement).value = currentFunction.slice(0, -1);
  }
};

const getValueInputs = () => {
  // Obtener los elementos
  let inputFunction = document.getElementById("funcion");
  let inputA = document.getElementById("a");
  let inputB = document.getElementById("b");
  const inputTolerance = document.getElementById("tolerancia");
  const inputMaxIteraction = document.getElementById("max-iter");

  // Obtener los valores de los elementos
  let funct = (inputFunction as HTMLInputElement).value;
  let a = parseFloat((inputA as HTMLInputElement).value);
  let b = parseFloat((inputB as HTMLInputElement).value);
  const tolerance = parseFloat((inputTolerance as HTMLInputElement).value);
  const maxIter = parseInt((inputMaxIteraction as HTMLInputElement).value);

  return { funct, a, b, tolerance, maxIter };
};

const validateValueFunction = ()=>{
  const {funct} = getValueInputs();
  return funct !== '';
}

export const onSubmit = (e: Event) => {
  e.preventDefault();
  const resultText = document.getElementById("resultado-texto");

  let { funct, a, b, tolerance, maxIter } = getValueInputs();

  if(!validateValueFunction()){
    alert("La función no puede estar vacía.");
    return;
  };

  // Definir la función a partir de la entrada del usuario
  let f = (x: number) => {
    try {
      return evaluate(funct, { x: x });
    } catch (error) {
      throw new Error(
        "Error en la función. Asegúrate de usar ingresar válida."
      );
    }
  };

  // Validar el intervalo
  let fa, fb;
  try {
    fa = f(a);
    fb = f(b);
  } catch (error: any) {
    alert(error.message);
    return;
  }

  if (isNaN(fa) || isNaN(fb)) {
    alert("La función no está definida en el intervalo dado.");
    return;
  }

  // Verificar si hay cambio de signo en el intervalo
  if (fa * fb >= 0) {
    alert(
      "No hay cambio de signo en el intervalo. El método de la falsa posición no puede aplicarse."
    );
    return;
  }

  // Método de la falsa posición
  let iteration: number = 0;
  let c = 0;
  while (iteration < maxIter) {
    const fa = f(a);
    const fb = f(b);
    c = (a * fb - b * fa) / (fb - fa);
    const fc = f(c);

    if (abs(fc) < tolerance) {
      if (resultText)
        resultText.textContent = `Raíz encontrada: ${c.toFixed(4)}`;
      return;
    }

    if (fa * fc < 0) {
      b = c;
    } else {
      a = c;
    }

    iteration++;
  }

  // Setear el resultado
  if (resultText) {
    resultText.textContent = "No se encontró la raíz en el intervalo dado.";
  }
};
