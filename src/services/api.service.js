const apiBase = process.env.API_BASE || 'http://localhost:9999'

export const functionsBase = () => {
	return `${apiBase}/.netlify/functions/api`
}

export const plants = () => {
	console.log('Getting plants from route:', `${functionsBase()}/plants`);
	return `${functionsBase()}/plants`
}

