const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOriginSelect = document.querySelector(".currency-origin");



const convertValues = async () => {

    if (currencyOriginSelect.value === currencySelect.value) {
        alert("Por favor, selecione moedas diferentes para conversão.");
        return;
    }
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const convertValueToConvert = document.querySelector(".currency-value-to-convert")
    const convertValueConverted = document.querySelector(".currency-value")


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high



    if (currencyOriginSelect.value === "real") {
        // Real -> Outro
        convertValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);

        if (currencySelect.value === "dolar") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolar);  // Real para Dólar

        }else if (currencySelect.value === "euro") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euro); // Real para Euro
        }
        else if (currencySelect.value === "btc") {
            convertValueConverted.innerHTML = new Intl.NumberFormat('en-US',{
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(inputCurrencyValue / bitcoin); // real para bit
        }


    }

    else if (currencyOriginSelect.value === "dolar") {
        // Dólar -> Real
        convertValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);

        if (currencySelect.value === "real") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * dolar);  // Dólar para Real
        }else if (currencySelect.value === "euro") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * dolar / euro);  // Dólar para Euro
        }
        else if (currencySelect.value === "btc") {
            convertValueConverted.innerHTML = new Intl.NumberFormat('en-US',{
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(inputCurrencyValue * dolar / bitcoin); // dolar para bit
        }

    }

    else if (currencyOriginSelect.value === "euro") {
        // Euro -> Real
        convertValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);

        if (currencySelect.value === "real") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * euro);  // Euro para Real

        }else if (currencySelect.value === "dolar") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * euro / dolar);  // Euro para Dólar
        }
        else if (currencySelect.value === "btc") {
            convertValueConverted.innerHTML = new Intl.NumberFormat('en-US',{
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(inputCurrencyValue * euro / bitcoin); //  euro para bit
        }

    }
    else if (currencyOriginSelect.value === "btc") {
        
        convertValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC";
    
        const btcEmReais = inputCurrencyValue * bitcoin;
    
        if (currencySelect.value === "real") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(btcEmReais); 
        } else if (currencySelect.value === "dolar") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(btcEmReais / dolar); 
        } else if (currencySelect.value === "euro") {
            convertValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(btcEmReais / euro); 
        }
    }

}

function currencyChange() {

    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    const currencyNameOrigin = document.getElementById("currency-name-origin");
    const currencyImageOrigin = document.querySelector(".currency-img-origin");



    if (currencyOriginSelect.value === "real") {
        currencyNameOrigin.innerHTML = "Real Brasileiro";
        currencyImageOrigin.src = "assets/moeda-real.png";
    } else if (currencyOriginSelect.value === "dolar") {
        currencyNameOrigin.innerHTML = "Dólar Americano";
        currencyImageOrigin.src = "assets/moeda-dolar.png";
    } else if (currencyOriginSelect.value === "euro") {
        currencyNameOrigin.innerHTML = "Euro";
        currencyImageOrigin.src = "assets/moeda-euro.png";
    }
    else if (currencyOriginSelect.value === "btc") {
        currencyNameOrigin.innerHTML = "Bitcoin";
        currencyImageOrigin.src = "assets/btc-moeda.png";
    }


    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro";
        currencyImage.src = "assets/moeda-real.png";
    } else if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "assets/moeda-dolar.png";
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "assets/moeda-euro.png";
    }
    else if (currencySelect.value === "btc") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "assets/btc-moeda.png";
    }


    convertValues()
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", currencyChange);
currencyOriginSelect.addEventListener("change", currencyChange);


