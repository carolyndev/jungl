const apiBase = process.env.API_BASE || 'https://develop--jungl.netlify.app'

export const functionsBase = () => {
	return `${apiBase}/.netlify/functions/api`
}

export const plants = () => {
	console.log('Getting plants from route:', `${functionsBase()}/plants`);
	return `${functionsBase()}/plants`
}

