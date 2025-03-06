export const formTemplate = `
<div class="container">
        <h1>Método De Falsa Posición</h1>
        <form id="funcion-form">
            <div id="funcion-input">
                <input type="text" id="funcion" placeholder="Ingresa la función" readonly>
            </div>
            <div id="botones-matematicos">
                <button id="upArrow" type="button">^</button>
                <button id="sqrt" type="button">√</button>
                <button id="sin" type="button">sin</button>
                <button id="cos" type="button">cos</button>
                <button id="tan" type="button">tan</button>
                <button id="log" type="button">log</button>
                <button id="ex" type="button">e^x</button>
                <button id="pi" type="button">π</button>
                <button id="parentesisOpen" type="button">(</button>
                <button id="parentesisClose" type="button">)</button>
                <button id="suma" type="button">+</button>
                <button id="resta" type="button">-</button>
                <button id="multiplicacion" type="button">*</button>
                <button id="division" type="button">/</button>
                <button id="variableX" type="button">x</button>
                <button id="numero0" type="button">0</button>
                <button id="numero1" type="button">1</button>
                <button id="numero2" type="button">2</button>
                <button id="numero3" type="button">3</button>
                <button id="numero4" type="button">4</button>
                <button id="numero5" type="button">5</button>
                <button id="numero6" type="button">6</button>
                <button id="numero7" type="button">7</button>
                <button id="numero8" type="button">8</button>
                <button id="numero9" type="button">9</button>
                <button id="limpiar" type="button">C</button>
                <button id="borrarUltimo" type="button">⌫</button>
            </div>

            <!-- Campos para a, b, tolerancia e iteraciones -->
            <div class="intervalos">
                <label for="a">Intervalo a:</label>
                <input type="number" id="a" step="any" required>
            </div>

            <div class="intervalos">
                <label for="b">Intervalo b:</label>
                <input type="number" id="b" step="any" required>
            </div>

            <div class="intervalos">
                <label for="tolerancia">Tolerancia:</label>
                <input type="number" id="tolerancia" step="any" value="0.0001" required>
            </div>

            <div class="intervalos">
                <label for="max-iter">Iteraciones:</label>
                <input type="number" id="max-iter" value="100" required>
            </div>
            <button type="submit">Calcular</button>
        </form>
        <div id="resultado">
            <h2>Resultado:</h2>
            <p id="resultado-texto"></p>
        </div>
    </div>
`;
