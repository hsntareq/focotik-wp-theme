import * as d3 from 'd3';
// import { select } from 'd3-selection';

let width = window.innerWidth; // Use full viewport width
let height = window.innerHeight

width = 1170; // Set a fixed width
height = 500; // Set a fixed width
// 2. Create SVG container
const svg = d3.select("#foco-coverage-map")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

// 3. Embedded order data
const orderData = [
	{ "country": "United States", "orders": 1500 },
	{ "country": "Germany", "orders": 800 },
	{ "country": "India", "orders": 1200 },
	{ "country": "Ireland", "orders": 1200 },
	{ "country": "Brazil", "orders": 600 },
	{ "country": "Japan", "orders": 900 },
	{ "country": "Australia", "orders": 400 },
	{ "country": "Pakistan", "orders": 400 },
	{ "country": "Canada", "orders": 400 },
	{ "country": "Algeria", "orders": 400 },
	{ "country": "China", "orders": 400 },
	{ "country": "Afghanistan", "orders": 400 },
	{ "country": "New Zealand", "orders": 400 },
	{ "country": "Sri Lanka", "orders": 400 },
	{ "country": "Madagascar", "orders": 400 },
	{ "country": "Bangladesh", "orders": 900 }
];

// 4. Map order data to countries
const orderByCountry = {};
orderData.forEach(d => {
	orderByCountry[d.country] = d.orders;
});

// 5. Load GeoJSON data from raw.githubusercontent.com
d3.json("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json")
	.then(geoData => {

		// get properties.name from geoData.features
		// geoData.features.forEach(d => {
		// 	console.log(d.properties.name);
		// });

		// 6. Create a projection
		const projection = d3.geoMercator()
			.scale(width / (2 * Math.PI)) // Scale to fit width
			.translate([width / 2, height / 2]); // Center the map

		// 7. Draw all countries (first layer).
		// 7. Add a dot pattern for the background of land areas
		const defs = svg.append("defs");
		const dotPattern = defs.append("pattern")
			.attr("id", "dotPattern")
			.attr("width", 6)
			.attr("height", 6)
			.attr("patternUnits", "userSpaceOnUse")
			.append("circle")
			.attr("cx", 2)
			.attr("cy", 2)
			.attr("r", 1.2)
			.attr("fill", "#383A3E"); // Light gray dots

		// Draw countries with dot pattern fill
		svg.selectAll("path.country")
			.data(geoData.features)
			.enter()
			.append("path")
			.attr("class", "country")
			.attr("d", d3.geoPath().projection(projection))
			.attr("data-country", d => d.properties.name)
			.attr("fill", "url(#dotPattern)")
			.attr("stroke", "#EB6945")
			.attr("stroke-width", 0);

		// Draw transparent overlay for countries with orders
		svg.selectAll("path.country-overlay")
			.data(geoData.features)
			.enter()
			.append("path")
			.attr("class", "country-overlay")
			.attr("d", d3.geoPath().projection(projection))
			.attr("data-country", d => d.properties.name)
			.attr("style", d => {
				const orders = orderByCountry[d.properties.name] || 0;
				return orders > 0 ? "cursor:pointer" : "cursor:default";
			})
			.attr("fill", d => {
				const orders = orderByCountry[d.properties.name] || 0;
				return orders > 0 ? "#E0603C7D" : "none";
			})
			.attr("stroke", "none");


		// 8. Draw countries with orders (second layer)
		svg.selectAll("path.country-orders")
			.data(geoData.features.filter(d => d.properties && d.properties.name && orderByCountry[d.properties.name] > 0))
			.enter()
			.append("path")
			.attr("class", "country-orders")
			.attr("d", d3.geoPath().projection(projection))
			.attr("fill", "none") // No fill (only stroke)
			.attr("stroke", "#EB6945") // Dark stroke for countries with orders
			.attr("stroke-width", 1);

		// 9. Add hover effects
		svg.selectAll("path.country-overlay")
			.on("mouseover", function (event, d) {
				const orders = d.properties ? (orderByCountry[d.properties.name] || 0) : 0;
				if (d.properties && orders > 0) {
					// Darken the country's fill color on hover (only if orders > 0)
					d3.select(this).attr("fill", "#EB6945"); // Darker shade of green
					// Show coverage-tooltip on hover
					d3.select(".coverage-tooltip")
						.html(`${d.properties.name} ${orders} Sales`)
						.style("left", (event.clientX + 10) + "px")
						.style("top", (event.clientY + 10) + "px")
						.style("opacity", 1);
				}

			})
			.on("mouseout", function (event, d) {
				const orders = d.properties ? (orderByCountry[d.properties.name] || 0) : 0;
				if (orders > 0) {
					// Restore the original fill color on mouseout (only if orders > 0)
					d3.select(this).attr("fill", "#E0603C7D");
				}
				// Hide coverage-tooltip
				d3.select(".coverage-tooltip").style("opacity", 0);
			});
	})
	.catch(error => {
		console.error("Error loading GeoJSON data:", error);
	});
