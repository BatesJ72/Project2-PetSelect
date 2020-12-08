console.log("app.js is up")


let selected_size
let options = d3.select("#size").selectAll("option")
options.each(function (d, i) {
	let current_option = d3.select(this)
	if (current_option.property("selected")) {
		selected_size = current_option._groups[0][0].value
	}
})
console.log(selected_size)


function loadChar() {

    charList = d3.select(".characteristics")
    
    traitsList = Object.keys(large_traits[0])
    traitsList.forEach(trait => {
        console.log(trait)
        listItem = charList.append("li")
            .classed("char-columns", true)
        listItem.append("input")
            .attr("type", "checkbox")
            .attr("id", trait)
            .attr("name", trait)
            .attr("value", trait)
            // .attr("margin-left", "5px")
        listItem.append("label")
            .attr("for", trait)
            // .attr("padding-left", ".4em")
            .text("  " + trait)
    })
}