import './home.css'
const btns = document.querySelectorAll('.calc-btn');
const input = document.querySelector('.calc-input');

let clr = 0;
for (const btn of btns) {
    btn.onclick = (e) => {
        if (btn.value === "DEL") {
            input.value = input.value.slice(0, -1);
            clr-= 1;
        }
        else if (btn.value === "AC") {
            input.value = "";
        }
        else
        {
            if (clr === 0) {
                input.value = "";
            }
            if (btn.classList.contains('btn-value')) {
                input.value += e.target.value;
                clr += 1;
            }
        }
    }
}
const Home = ()=>
{
    return(
        <div className="calc border border-dark">
            <form action="" method="get">
                <div className="calc-screen">
                    <input className="calc-input" type="text" name="input" value={""}/>
                </div>


                <div className="calc-body">
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="7">7</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="8">8</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="9">9</button>
                    <button type="button" className="calc-btn btn btn-outline-dark" value="DEL">DEL</button>
                    <button type="button" className="calc-btn btn btn-outline-dark" value="AC">AC</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="4">4</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="5">5</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="6">6</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value=" (">(</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value=") ">)</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="1">1</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="2">2</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="3">3</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value=" * ">*</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value=" / ">/</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value="0">0</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value=".">.</button>
                    <button type="button" className="calc-btn btn btn-outline-dark" value="=">=</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value=" + ">+</button>
                    <button type="button" className="calc-btn btn-value btn btn-outline-dark" value=" - ">-</button>
                </div>

            </form>
        </div>
    );
}

export default Home;