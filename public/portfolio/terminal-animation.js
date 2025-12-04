document.addEventListener('DOMContentLoaded', () => {
	const terminalLines = document.querySelectorAll('.terminal-line')

	// Store original text
	const originalTexts = Array.from(terminalLines).map((line) => {
		const p = line.querySelector('p')
		return p ? p.textContent : ''
	})

	// Clear text initially
	terminalLines.forEach((line) => {
		const p = line.querySelector('p')
		if (p) {
			p.textContent = ''
			p.style.whiteSpace = 'normal'
			p.style.borderRight = 'none'
			p.style.animation = 'none'
		}
	})

	// Typing function
	const typeText = (element, text, speed = 25) => {
		return new Promise((resolve) => {
			let i = 0
			const interval = setInterval(() => {
				if (i < text.length) {
					element.textContent += text.charAt(i)
					i++
				} else {
					clearInterval(interval)
					resolve()
				}
			}, speed)
		})
	}

	// Animate lines sequentially
	const animateTerminal = async () => {
		for (let i = 0; i < terminalLines.length; i++) {
			const line = terminalLines[i]
			const p = line.querySelector('p')

			if (p && originalTexts[i]) {
				// 👇 Make visible and add animated class
				line.classList.add('animated')
				line.style.animation = 'fadeInLine 0.3s forwards'

				await new Promise((resolve) => setTimeout(resolve, 400))
				await typeText(p, originalTexts[i], 20)
				await new Promise((resolve) => setTimeout(resolve, 500))
			}
		}
	}

	// Start animation when bio section is in view
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animateTerminal()
					observer.unobserve(entry.target)
				}
			})
		},
		{ threshold: 0.3 }
	)

	const bioSection = document.querySelector('.bio')
	if (bioSection) {
		observer.observe(bioSection)
	}
})
