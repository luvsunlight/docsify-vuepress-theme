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
			svg.classList.remove("icon-arrow-right")
			svg.classList.add("icon-arrow-down")
			title.classList.add("active")
		} else {
			svg.classList.add("icon-arrow-right")
			svg.classList.remove("icon-arrow-down")
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
			return `<div class="custom custom-${type}"><p>${type.toUpperCase()}</p><p>${content}</p></div>`
		})
	})

	hook.afterEach((html, next) => {
		const template = `<svg t="1561474290330" class="icon-link" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6347" ><path d="M768 768H256V256h298.666667V170.666667H213.333333a42.666667 42.666667 0 0 0-42.666666 42.666666v597.333334a42.666667 42.666667 0 0 0 42.666666 42.666666h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666666v-341.333334h-85.333333v298.666667z" fill="#bfbfbf" p-id="6348"></path><path d="M745.173333 218.496l-263.338666 263.338667 60.330666 60.330666 263.338667-263.338666 90.453333 90.496L896 128h-241.365333z" fill="#bfbfbf" p-id="6349"></path></svg>`
		const modifiedHtml = html.replace(
			/(<a)([^>]*)(>)([^<]*)(<\/a>)/g,
			function(match, p1, p2, p3, p4, p5) {
				return p1 + p2 + p3 + p4 + template + p5
			}
		)
		next(modifiedHtml)
	})

	hook.doneEach(() => {
		const firstTitles = Array.apply(
			null,
			document.querySelectorAll(".sidebar-nav>ul>li>p")
		)
		const template = [
			`
			<svg class="icon-arrow icon-arrow-right" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2644" ><path d="M877.216 491.808M297.952 949.984c-12.512-12.512-13.248-31.872-2.048-43.776l376.48-376.512c16.16-15.328 16.096-19.328 0-35.424L295.904 117.824C284.672 105.92 285.44 86.56 297.952 74.048c12.736-12.736 32.608-13.44 44.448-1.632l418.176 418.176c5.152 5.152 7.456 11.84 7.872 18.784l0 5.248c-0.448 6.944-2.752 13.632-7.872 18.784L342.4 951.616C330.56 963.392 310.656 962.688 297.952 949.984z" p-id="2645"></path></svg>
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
