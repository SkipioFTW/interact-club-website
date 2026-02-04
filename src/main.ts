import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

const container = document.createElement('div')

const viteLink = document.createElement('a')
viteLink.href = 'https://vite.dev'
viteLink.target = '_blank'
const viteImg = document.createElement('img')
viteImg.src = viteLogo
viteImg.className = 'logo'
viteImg.alt = 'Vite logo'
viteLink.appendChild(viteImg)

const tsLink = document.createElement('a')
tsLink.href = 'https://www.typescriptlang.org/'
tsLink.target = '_blank'
const tsImg = document.createElement('img')
tsImg.src = typescriptLogo
tsImg.className = 'logo vanilla'
tsImg.alt = 'TypeScript logo'
tsLink.appendChild(tsImg)

const title = document.createElement('h1')
title.textContent = 'Vite + TypeScript'

const card = document.createElement('div')
card.className = 'card'
const button = document.createElement('button')
button.id = 'counter'
button.type = 'button'
card.appendChild(button)

const docs = document.createElement('p')
docs.className = 'read-the-docs'
docs.textContent = 'Click on the Vite and TypeScript logos to learn more'

container.append(viteLink, tsLink, title, card, docs)
app.appendChild(container)

setupCounter(button)
