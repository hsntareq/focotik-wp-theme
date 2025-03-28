import * as d3 from 'd3';

let width = 1170;
let height = 530;

const svg = d3.select("#foco-coverage-map")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.attr("viewBox", `0 0 ${width} ${height}`)
	.attr("preserveAspectRatio", "xMidYMid meet");

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

const orderByCountry = {};
orderData.forEach(d => {
	orderByCountry[d.country] = d.orders;
});

d3.json("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json")
	.then(geoData => {
		geoData.features = geoData.features.filter(d => d.properties.name !== "Antarctica");

		// Adjust projection to fit the full map
		const projection = d3.geoEquirectangular()
			.fitSize([width, height * 1.2], { type: "FeatureCollection", features: geoData.features });

		// Set up the map projection to geoMercator for a 2D view
		// const projection = d3.geoMercator()
		// 	.scale(180)  // Adjust scale for better fitting
		// 	.translate([width / 2, height / 2 + 100]); // Center the map

		const path = d3.geoPath().projection(projection);

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
			.attr("fill", "#383A3E");

		svg.selectAll("path.country")
			.data(geoData.features)
			.enter()
			.append("path")
			.attr("class", "country")
			.attr("d", path)
			.attr("data-country", d => d.properties.name)
			.attr("fill", "url(#dotPattern)")
			.attr("stroke", "#EB6945")
			.attr("stroke-width", 0);

		svg.selectAll("path.country-overlay")
			.data(geoData.features)
			.enter()
			.append("path")
			.attr("class", "country-overlay")
			.attr("d", path)
			.attr("data-country", d => d.properties.name)
			.attr("style", d => {
				const orders = orderByCountry[d.properties.name] || 0;
				return orders > 0 ? "cursor:pointer" : "cursor:default";
			})
			.attr("fill", d => {
				const orders = orderByCountry[d.properties.name] || 0;
				return orders > 0 ? "#E0603C7D" : "none";
			})
			.attr("stroke", "none")
			.on("mouseover", function (event, d) {
				const orders = orderByCountry[d.properties.name] || 0;
				if (orders > 0) {
					d3.select(this).attr("fill", "#EB6945");
					d3.select(".coverage-tooltip")
						.html(`${d.properties.name} ${orders} Sales`)
						.style("left", (event.clientX) + "px")
						.style("top", (event.clientY + 5) + "px")
						.style("opacity", 1);
				}
			})
			.on("mouseout", function (event, d) {
				const orders = orderByCountry[d.properties.name] || 0;
				if (orders > 0) {
					d3.select(this).attr("fill", "#E0603C7D");
				}
				d3.select(".coverage-tooltip").style("opacity", 0);
			});

		svg.selectAll("path.country-orders")
			.data(geoData.features.filter(d => orderByCountry[d.properties.name] > 0))
			.enter()
			.append("path")
			.attr("class", "country-orders")
			.attr("d", path)
			.attr("fill", "none")
			.attr("stroke", "#EB6945")
			.attr("stroke-width", 1);

		const totalLandArea = d3.sum(geoData.features, d => d3.geoArea(d));
		const orderedArea = d3.sum(geoData.features.filter(d => orderByCountry[d.properties.name] > 0), d => d3.geoArea(d));
		// console.log("Total Land Area (without poles):", totalLandArea);
		// console.log("Ordered Area Coverage:", orderedArea);
		// console.log("Order Coverage Percentage:", (orderedArea / totalLandArea) * 100);
	})
	.catch(error => {
		console.error("Error loading GeoJSON data:", error);
	});
