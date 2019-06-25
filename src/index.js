function isActive(title) {
	return title.id === window.activeTitleId
}

function checkCollapse(titles) {
	titles.forEach(title => {
		const ul = title.nextSibling
		if (ul) {
			if (isActive(title)) {
				ul.style.display = "block"
			} else {
				ul.style.display = "none"
			}
		}
	})
}

function checkStatus(titles) {
	titles.forEach(title => {
		const svg = title.querySelector("svg")
		if (isActive(title)) {
			svg.classList.remove("arrow-right")
			svg.classList.add("arrow-down")
			title.classList.add("active")
		} else {
			svg.classList.add("arrow-right")
			svg.classList.remove("arrow-down")
			title.classList.remove("active")
		}
	})
	checkCollapse(titles)
}

function vuePressTheme(hook, vm) {
	hook.init(() => {
		window.activeTitleId = window.activeTitleId || ""
	})
	hook.beforeEach(html => {
		return html.replace(/(:::)(.*)(\n*)(.*)(\n*)(:::)/g, function(
			match,
			p1,
			p2,
			p3,
			p4,
			p5,
			p6,
			string
		) {
			const type = p2
			const content = p4
			return `<div class="custom custom-${type}"><div>${type.toUpperCase()}</div><div>${content}</div></div>`
		})
	})
	hook.doneEach(() => {
		const firstTitles = Array.apply(
			null,
			document.querySelectorAll(".sidebar-nav>ul>li>p")
		)
		const template = [
			`
			<svg class="arrow arrow-right" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2644" ><path d="M877.216 491.808M297.952 949.984c-12.512-12.512-13.248-31.872-2.048-43.776l376.48-376.512c16.16-15.328 16.096-19.328 0-35.424L295.904 117.824C284.672 105.92 285.44 86.56 297.952 74.048c12.736-12.736 32.608-13.44 44.448-1.632l418.176 418.176c5.152 5.152 7.456 11.84 7.872 18.784l0 5.248c-0.448 6.944-2.752 13.632-7.872 18.784L342.4 951.616C330.56 963.392 310.656 962.688 297.952 949.984z" p-id="2645"></path></svg>
		`
		]
		firstTitles.forEach((elm, index) => {
			elm.id = `title-${index}`
			elm.classList.add("first-title")
			elm.insertAdjacentHTML("afterbegin", template)
			elm.addEventListener("click", event => {
				if (window.activeTitleId == elm.id) {
					window.activeTitleId = ""
				} else {
					window.activeTitleId = elm.id
				}
				checkStatus(firstTitles)
			})
		})

		checkStatus(firstTitles)
	})
}

window.$docsify = window.$docsify || {}
window.$docsify.plugins = [vuePressTheme].concat(window.$docsify.plugins || [])
