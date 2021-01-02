function generate() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "censored",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
    })
    .then(response => {
        return response.json()
    })
    .then(json => {
        display(json);
    })
    .catch(err => {
        console.error(err);
    });
}

function display(quote) {
    document.querySelector("h3").textContent = "";
    let para = document.querySelector("p");
    let link = document.createElement("a");

    link.href = quote["originator"]["url"];
    link.textContent = quote["originator"]["name"]
    para.textContent = quote["content"];
    document.querySelector("h3").appendChild(link);
}

